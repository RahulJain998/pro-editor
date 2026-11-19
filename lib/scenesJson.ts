import { importProject } from "./jsonImport";
import { normalizeTextAnim } from "./textAnimation";
import type { Background, Layer, Project, Scene } from "./types";
import { downloadBlob, slugify } from "./utils";

export interface ScenesJsonText {
  text: string;
  x: number;
  y: number;
  size: number;
  color: string;
  bold: boolean;
  border: string | null;
  animation: string;
  font: string;
  delay: number;
  duration: number;
  loop: boolean;
  exit: string;
  secondary?: string;
}

export interface ScenesJsonCharacter {
  name: string;
  x: number;
  y: number;
  size: number;
  action: string;
  toX: number;
  dialogue: string;
}

export interface ScenesJsonObject {
  id: string | number;
  name: string;
  x: number;
  y: number;
  size: number;
  animation: string;
  kind?: string;
  objectId?: string;
}

export interface ScenesJsonScene {
  scene: number;
  duration: number;
  background: {
    type: string;
    color: string;
    gradient: { from: string; to: string } | null;
    image: string | null;
    pattern: { kind: string; color: string; accent: string; size: number; gap: number; speed: number; count: number } | null;
  };
  texts: ScenesJsonText[];
  characters: ScenesJsonCharacter[];
  objects: ScenesJsonObject[];
}

export interface ScenesJson {
  projectName: string;
  createdAt: string;
  canvasSize: { width: number; height: number; label: string };
  scenes: ScenesJsonScene[];
}

function jsonBackground(bg: Background): ScenesJsonScene["background"] {
  return {
    type: bg.type,
    color: bg.color,
    gradient: bg.type === "gradient" ? { from: bg.gradient.from, to: bg.gradient.to } : null,
    image: bg.type === "image" && bg.image.src ? bg.image.src : null,
    pattern: bg.type === "pattern" ? { ...bg.pattern } : null,
  };
}

function jsonScene(scene: Scene, index: number, width: number): ScenesJsonScene {
  const texts: ScenesJsonText[] = [];
  const characters: ScenesJsonCharacter[] = [];
  const objects: ScenesJsonObject[] = [];

  scene.layers.forEach((layer: Layer) => {
    if (layer.kind === "text") {
      const cfg = normalizeTextAnim(layer.textAnim);
      texts.push({
        text: layer.text,
        x: layer.x,
        y: layer.y,
        size: Math.round((layer.size / 100) * width),
        color: layer.color,
        bold: layer.weight >= 700,
        border: layer.border.enabled ? layer.border.color : null,
        animation: cfg.animation,
        font: layer.font,
        delay: cfg.delay,
        duration: cfg.duration,
        loop: cfg.loop,
        exit: cfg.exit,
        ...(cfg.secondary ? { secondary: cfg.secondary } : {}),
      });
    } else if (layer.kind === "character") {
      characters.push({
        name: layer.charId,
        x: layer.x,
        y: layer.y,
        size: Math.round((layer.w / 100) * width),
        action: layer.animation,
        toX: layer.toX ?? Math.min(100, Math.round(layer.x + 10)),
        dialogue: layer.dialogue ?? "",
      });
    } else {
      objects.push({
        id: layer.kind === "finance" ? layer.objectId : layer.id,
        name: layer.name,
        x: layer.x,
        y: layer.y,
        size: Math.round((layer.w / 100) * width),
        animation: layer.animation,
        kind: layer.kind,
        ...(layer.kind === "finance" ? { objectId: layer.objectId } : {}),
      });
    }
  });

  return {
    scene: index + 1,
    duration: scene.duration,
    background: jsonBackground(scene.background),
    texts,
    characters,
    objects,
  };
}

export function projectToScenesJson(project: Project, scenes?: Scene[]): ScenesJson {
  const list = scenes ?? project.scenes;
  return {
    projectName: project.name,
    createdAt: project.createdAt ?? new Date().toISOString().slice(0, 10),
    canvasSize: {
      width: project.size.width,
      height: project.size.height,
      label: project.size.name,
    },
    scenes: list.map((scene, index) => jsonScene(scene, index, project.size.width)),
  };
}

export function scenesJsonString(project: Project, scenes?: Scene[]): string {
  return JSON.stringify(projectToScenesJson(project, scenes), null, 2);
}

export function sceneJsonString(project: Project, sceneId: string): string {
  const scene = project.scenes.find((s) => s.id === sceneId);
  if (!scene) throw new Error("Scene not found");
  const index = project.scenes.findIndex((s) => s.id === sceneId);
  return JSON.stringify({
    ...projectToScenesJson(project, [scene]),
    scenes: [{ ...projectToScenesJson(project, [scene]).scenes[0], scene: index + 1 }],
  }, null, 2);
}

export function downloadScenesJson(project: Project, scenes?: Scene[]): void {
  const blob = new Blob([scenesJsonString(project, scenes)], { type: "application/json" });
  downloadBlob(blob, `${slugify(project.name)}-scenes.json`);
}

export async function copyScenesJsonFallback(text: string): Promise<void> {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const area = document.createElement("textarea");
  area.value = text;
  area.style.position = "fixed";
  area.style.opacity = "0";
  document.body.appendChild(area);
  area.select();
  const ok = document.execCommand("copy");
  area.remove();
  if (!ok) throw new Error("Clipboard permission denied");
}

export function validateScenesJson(json: string): ScenesJson {
  let parsed: unknown;
  try {
    parsed = JSON.parse(json);
  } catch (error) {
    throw new Error(`JSON Parse Error: ${error instanceof Error ? error.message : "Invalid JSON"}`);
  }
  if (!parsed || typeof parsed !== "object") throw new Error("JSON must be an object");
  const data = parsed as Record<string, unknown>;
  if (!Array.isArray(data.scenes)) throw new Error("JSON must contain a scenes array");
  if (data.scenes.length === 0) throw new Error("At least one scene is required");
  if (data.canvasSize && typeof data.canvasSize === "object") {
    const size = data.canvasSize as Record<string, unknown>;
    if (Number(size.width) < 200 || Number(size.width) > 6000) throw new Error("canvasSize.width must be 200-6000");
    if (Number(size.height) < 200 || Number(size.height) > 6000) throw new Error("canvasSize.height must be 200-6000");
  }
  data.scenes.forEach((raw, i) => {
    if (!raw || typeof raw !== "object") throw new Error(`Scene ${i + 1} must be an object`);
    const scene = raw as Record<string, unknown>;
    const duration = Number(scene.duration);
    if (!Number.isFinite(duration) || duration < 1 || duration > 60) {
      throw new Error(`Scene ${i + 1}: duration must be between 1 and 60`);
    }
    for (const key of ["texts", "characters", "objects"]) {
      if (scene[key] !== undefined && !Array.isArray(scene[key])) {
        throw new Error(`Scene ${i + 1}: ${key} must be an array`);
      }
    }
    for (const rawText of (Array.isArray(scene.texts) ? scene.texts : []) as Record<string, unknown>[]) {
      if (typeof rawText.text !== "string") throw new Error(`Scene ${i + 1}: text must be a string`);
    }
  });
  return data as unknown as ScenesJson;
}

export function parseScenesJson(json: string): Project {
  validateScenesJson(json);
  return importProject(json);
}
