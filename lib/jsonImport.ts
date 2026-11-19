import { CANVAS_SIZES, makeCharacterLayer, makeFinanceLayer, makeTextLayer, uid } from "./presets";
import { defaultBackground } from "./presets";
import type { Background, CanvasSize, Layer, Project, Scene } from "./types";

export const SAMPLE_JSON = `{
  "name": "FD Story",
  "size": { "width": 1080, "height": 1920 },
  "scenes": [
    {
      "name": "Scene 1 - introduce",
      "duration": 5,
      "background": { "type": "gradient", "from": "#0F172A", "to": "#7C3AED" },
      "layers": [
        { "type": "text", "text": "Smarter Saving Plan", "x": 50, "y": 18, "size": 9, "color": "#FFFFFF", "animation": "float" },
        { "type": "character", "charId": "ramesh", "x": 32, "y": 62, "animation": "wave" },
        { "type": "character", "charId": "suresh", "x": 62, "y": 64, "animation": "talk" },
        { "type": "finance", "objectId": "fd-gold", "x": 50, "y": 45, "animation": "float" }
      ]
    },
    {
      "name": "Scene 2 - grow",
      "duration": 5,
      "background": { "type": "solid", "color": "#0B1020" },
      "layers": [
        { "type": "text", "text": "Guaranteed Returns!", "x": 50, "y": 22, "size": 8, "color": "#FDE047" },
        { "type": "finance", "objectId": "chart-emerald", "x": 50, "y": 55, "size": 40 }
      ]
    }
  ]
}`;

function makeSize(w: number, h: number): CanvasSize {
  const known = CANVAS_SIZES.find((s) => s.width === w && s.height === h);
  if (known) return { ...known };
  const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
  const d = gcd(w, h) || 1;
  return {
    id: "custom",
    name: "Custom Size",
    short: `${w / d}:${h / d}`,
    width: w,
    height: h,
    ratio: `${Math.round((w / h) * 100) / 100}:1`,
    icon: "sliders",
  };
}

function backgroundFrom(input: Record<string, unknown>): Background {
  const bg = structuredClone(defaultBackground);
  if (!input || typeof input !== "object") return bg;
  const type = typeof input.type === "string" ? input.type : "solid";
  if (["solid", "gradient", "image", "pattern", "video"].includes(type)) bg.type = type as Background["type"];
  if (typeof input.color === "string") bg.color = input.color;
  if (typeof input.opacity === "number") bg.opacity = input.opacity;
  if (input.gradient && typeof input.gradient === "object") {
    const g = input.gradient as Record<string, unknown>;
    if (typeof g.from === "string") bg.gradient.from = g.from;
    if (typeof g.to === "string") bg.gradient.to = g.to;
    if (typeof g.direction === "string") bg.gradient.direction = g.direction as Background["gradient"]["direction"];
    if (typeof g.speed === "number") bg.gradient.speed = g.speed;
    bg.gradient.animated = Boolean(g.animated);
  } else {
    if (typeof input.from === "string") bg.gradient.from = input.from;
    if (typeof input.to === "string") bg.gradient.to = input.to;
  }
  if (input.pattern && typeof input.pattern === "object") {
    const p = input.pattern as Record<string, unknown>;
    if (typeof p.kind === "string") bg.pattern.kind = p.kind as Background["pattern"]["kind"];
    if (typeof p.color === "string") bg.pattern.color = p.color;
    if (typeof p.accent === "string") bg.pattern.accent = p.accent;
  }
  return bg;
}

function layerFrom(input: Record<string, unknown>): Layer | null {
  const type = typeof input.type === "string" ? input.type : "text";
  const base = {
    id: uid("json"),
    name: typeof input.name === "string" ? input.name : type,
    x: Number(input.x) || 50,
    y: Number(input.y) || 50,
    w: Number(input.w) || 60,
    h: Number(input.h) || 30,
    rot: Number(input.rot) || 0,
    opacity: typeof input.opacity === "number" ? input.opacity : 100,
    visible: true,
    locked: false,
    animation: (typeof input.animation === "string" ? input.animation : "none") as Layer["animation"],
    animSpeed: Number(input.animSpeed) || 1,
  };
  if (type === "text") {
    const layer = makeTextLayer("body", typeof input.text === "string" ? input.text : "Text");
    return {
      ...layer,
      ...base,
      size: Number(input.size) || layer.size,
      color: typeof input.color === "string" ? input.color : layer.color,
      font: (typeof input.font === "string" ? input.font : layer.font) as typeof layer.font,
      weight: Number(input.weight) || layer.weight,
      animation: base.animation,
    };
  }
  if (type === "character") {
    const def = { id: typeof input.charId === "string" ? input.charId : "ramesh", name: "Character", hint: "", skin: "#C68642", shirt: "#7C3AED", hair: "#18181B", accessory: "none", variant: 0 };
    const layer = makeCharacterLayer(def);
    return { ...layer, ...base, charId: def.id, w: base.w === 60 ? 26 : base.w, h: base.h === 30 ? 45 : base.h };
  }
  if (type === "finance") {
    const layer = makeFinanceLayer({ id: typeof input.objectId === "string" ? input.objectId : "fd-gold", label: "Object", hindi: "", kind: "fd", primary: "#FBBF24", secondary: "#B45309" });
    return { ...layer, ...base, objectId: typeof input.objectId === "string" ? input.objectId : "fd-gold", w: base.w === 60 ? 24 : base.w, h: base.h === 30 ? 24 : base.h };
  }
  return null;
}

export function importProject(json: string): Project {
  const parsed = JSON.parse(json) as Record<string, unknown>;
  if (!parsed || !Array.isArray(parsed.scenes)) throw new Error("JSON must contain a scenes array");
  if (parsed.scenes.length === 0) throw new Error("At least one scene is required");
  const sizeInput = (parsed.size ?? {}) as Record<string, unknown>;
  const width = Math.min(6000, Math.max(200, Number(sizeInput.width) || 1080));
  const height = Math.min(6000, Math.max(200, Number(sizeInput.height) || 1920));
  const scenes: Scene[] = parsed.scenes.map((raw, index) => {
    const s = (raw ?? {}) as Record<string, unknown>;
    const layers = Array.isArray(s.layers)
      ? s.layers.map((l) => layerFrom((l ?? {}) as Record<string, unknown>)).filter((l): l is Layer => Boolean(l))
      : [];
    return {
      id: uid("scene"),
      name: typeof s.name === "string" ? s.name : `Scene ${index + 1}`,
      duration: Math.min(60, Math.max(1, Number(s.duration) || 5)),
      background: backgroundFrom((s.background ?? {}) as Record<string, unknown>),
      layers,
    };
  });
  return {
    name: typeof parsed.name === "string" ? parsed.name : "Imported Project",
    size: makeSize(width, height),
    fps: 60,
    fourK: false,
    scenes,
    activeSceneId: scenes[0].id,
  };
}

export function projectToJson(project: Project): string {
  return JSON.stringify({
    name: project.name,
    size: { width: project.size.width, height: project.size.height, ratio: project.size.ratio },
    fps: project.fps,
    scenes: project.scenes.map((s) => ({
      name: s.name,
      duration: s.duration,
      background: s.background,
      layers: s.layers.map((l) => ({ ...l })),
    })),
  }, null, 2);
}
