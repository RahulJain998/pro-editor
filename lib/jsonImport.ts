import { findAnimal } from "@/src/characters/Animals";
import {
  CANVAS_SIZES, findCharacter, makeAnimalLayer, makeCharacterLayer, makeFinanceLayer, makeTextLayer, uid,
} from "./presets";
import { defaultBackground } from "./presets";
import type { Background, CanvasSize, Layer, Project, Scene, TextLayer } from "./types";
import { isTextAnimName, normalizeTextAnim } from "./textAnimation";

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
        { "type": "character", "charId": "ramesh", "x": 28, "y": 66, "animation": "wave" },
        { "type": "animal", "animalId": "dog", "name": "Dog", "x": 68, "y": 76, "action": "tailWag" },
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
        { "type": "animal", "name": "elephant", "x": 50, "y": 70, "size": 200, "action": "walk" },
        { "type": "finance", "objectId": "chart-emerald", "x": 50, "y": 55, "size": 40 }
      ]
    }
  ]
}`;

export function makeSize(w: number, h: number): CanvasSize {
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

export function backgroundFrom(input: Record<string, unknown>): Background {
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
    if (typeof p.size === "number") bg.pattern.size = p.size;
    if (typeof p.gap === "number") bg.pattern.gap = p.gap;
    if (typeof p.speed === "number") bg.pattern.speed = p.speed;
    if (typeof p.count === "number") bg.pattern.count = p.count;
  }
  return bg;
}

function layerFrom(input: Record<string, unknown>, canvasWidth = 1080, canvasHeight = 1920): Layer | null {
  const rawType = typeof input.type === "string" ? input.type : typeof input.kind === "string" ? input.kind : "text";
  const type = rawType === "character" || rawType === "animal" || rawType === "finance" || rawType === "text" ? rawType : "text";
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
    const textAnim = normalizeTextAnim({
      animation: isTextAnimName(input.textAnimation)
        ? input.textAnimation
        : isTextAnimName(input.animation) ? input.animation : "none",
      delay: typeof input.delay === "number" ? input.delay : 0,
      duration: typeof input.duration === "number" ? input.duration : 1,
      loop: Boolean(input.loop),
      exit: isTextAnimName(input.exit) ? input.exit : "none",
      secondary: isTextAnimName(input.secondary) ? input.secondary : undefined,
    });
    return {
      ...layer,
      ...base,
      size: Number(input.size) || layer.size,
      color: typeof input.color === "string" ? input.color : layer.color,
      font: (typeof input.font === "string" ? input.font : layer.font) as typeof layer.font,
      weight: Number(input.weight) || (input.bold === true ? 800 : layer.weight),
      animation: textAnim.animation !== "none" ? "none" : base.animation,
      textAnim,
      border: input.border
        ? { enabled: true, color: typeof input.border === "string" ? input.border : "#FFFFFF", width: 3 }
        : layer.border,
    } as TextLayer;
  }
  if (type === "character") {
    const charId = typeof input.charId === "string" ? input.charId : "ramesh";
    const def = findCharacter(charId);
    const layer = makeCharacterLayer(def);
    return {
      ...layer, ...base, charId: def.id, name: typeof input.name === "string" ? input.name : def.name,
      w: base.w === 60 ? 26 : base.w, h: base.h === 30 ? 45 : base.h,
      dialogue: typeof input.dialogue === "string" ? input.dialogue : undefined,
      toX: typeof input.toX === "number" ? input.toX : undefined,
    };
  }
  if (type === "animal") {
    const candidate = typeof input.animalId === "string"
      ? input.animalId
      : typeof input.name === "string"
        ? input.name.toLowerCase().replace(/\s+/g, "-")
        : "dog";
    const def = findAnimal(candidate);
    const layer = makeAnimalLayer(def);
    const action = typeof input.action === "string" ? input.action : typeof input.animation === "string" ? input.animation : "tailWag";
    const sizePx = Number(input.size);
    const sizeW = Number.isFinite(sizePx) && sizePx > 0 ? (sizePx / canvasWidth) * 100 : 0;
    return {
      ...layer,
      ...base,
      animalId: def.id,
      name: typeof input.name === "string" ? input.name : def.name,
      w: sizeW || (base.w === 60 ? 44 : base.w),
      h: sizeW ? (sizePx * (180 / 260) / canvasHeight) * 100 : (base.h === 30 ? 31 : base.h),
      animation: action as Layer["animation"],
      animSpeed: typeof input.speed === "number" ? input.speed : base.animSpeed,
      flipX: Boolean(input.flipX),
    };
  }
  if (type === "finance") {
    const layer = makeFinanceLayer({ id: typeof input.objectId === "string" ? input.objectId : "fd-gold", label: "Object", hindi: "", kind: "fd", primary: "#FBBF24", secondary: "#B45309" });
    return { ...layer, ...base, objectId: typeof input.objectId === "string" ? input.objectId : "fd-gold", w: base.w === 60 ? 24 : base.w, h: base.h === 30 ? 24 : base.h };
  }
  return null;
}

function record(value: unknown): Record<string, unknown> {
  return value && typeof value === "object" ? value as Record<string, unknown> : {};
}

function normalizeScenesInput(parsed: Record<string, unknown>): Record<string, unknown> {
  const rawScenes = Array.isArray(parsed.scenes) ? parsed.scenes : [];
  const size = record(parsed.canvasSize ?? parsed.size);
  const width = Math.min(6000, Math.max(200, Number(size.width) || 1080));
  const height = Math.min(6000, Math.max(200, Number(size.height) || 1920));
  const isScenesFormat = Boolean(parsed.projectName) || rawScenes.some((raw) => {
    const s = record(raw);
    return Array.isArray(s.texts) || Array.isArray(s.characters) || Array.isArray(s.animals) || Array.isArray(s.objects) || "scene" in s;
  });
  if (!isScenesFormat) return parsed;

  const scenes = rawScenes.map((raw, index) => {
    const s = record(raw);
    const bg = record(s.background);
    let background: Record<string, unknown> = { type: "solid", color: typeof bg.color === "string" ? bg.color : "#111111" };
    if (bg.gradient && typeof bg.gradient === "object") {
      background = { type: "gradient", ...record(bg.gradient) };
    } else if (bg.pattern && typeof bg.pattern === "object") {
      background = { type: "pattern", color: typeof bg.color === "string" ? bg.color : "#111111", pattern: record(bg.pattern) };
    } else if (bg.image && typeof bg.image === "object" && typeof record(bg.image).src === "string") {
      background = { type: "image", ...record(bg.image) };
    }

    const texts = (Array.isArray(s.texts) ? s.texts : []).map((rawText) => {
      const t = record(rawText);
      const px = Number(t.size) || 32;
      return {
        type: "text",
        name: typeof t.name === "string" ? t.name : "Text",
        text: typeof t.text === "string" ? t.text : "Text",
        x: Number(t.x) || 50,
        y: Number(t.y) || 50,
        size: (px / width) * 100,
        color: typeof t.color === "string" ? t.color : "#FFFFFF",
        bold: Boolean(t.bold),
        font: typeof t.font === "string" ? t.font : "sans",
        border: t.border,
        animation: typeof t.textAnimation === "string" ? t.textAnimation : t.animation,
        delay: t.delay,
        duration: t.duration,
        loop: t.loop,
        exit: t.exit,
        secondary: t.secondary,
      };
    });
    const characters = (Array.isArray(s.characters) ? s.characters : []).map((rawChar) => {
      const c = record(rawChar);
      const px = Number(c.size) || 180;
      return {
        type: "character",
        name: typeof c.name === "string" ? c.name : "Character",
        charId: typeof c.name === "string" ? c.name.toLowerCase() : "ramesh",
        x: Number(c.x) || 50,
        y: Number(c.y) || 60,
        w: (px / width) * 100,
        h: (px * 1.8 / height) * 100,
        animation: typeof c.action === "string" ? c.action : "wave",
        toX: c.toX,
        dialogue: c.dialogue,
      };
    });
    const animals = (Array.isArray(s.animals) ? s.animals : []).map((rawAnimal) => {
      const a = record(rawAnimal);
      const px = Number(a.size) || 160;
      return {
        type: "animal",
        name: typeof a.name === "string" ? a.name : "Dog",
        animalId: typeof a.name === "string" ? a.name.toLowerCase().replace(/\s+/g, "-") : "dog",
        x: Number(a.x) || 50,
        y: Number(a.y) || 65,
        w: (px / width) * 100,
        h: (px * (180 / 260) / height) * 100,
        action: typeof a.action === "string" ? a.action : "tailWag",
        flipX: Boolean(a.flipX),
        speed: Number(a.speed) || 1,
        animation: typeof a.action === "string" ? a.action : "tailWag",
      };
    });
    const objects = (Array.isArray(s.objects) ? s.objects : []).map((rawObj) => {
      const o = record(rawObj);
      const px = Number(o.size) || 120;
      const id = o.id;
      return {
        type: "finance",
        name: typeof o.name === "string" ? o.name : "Object",
        objectId: typeof id === "string" ? id : typeof id === "number" ? `object-${id}` : "fd-gold",
        x: Number(o.x) || 50,
        y: Number(o.y) || 50,
        w: (px / width) * 100,
        h: (px / height) * 100,
        animation: typeof o.animation === "string" ? o.animation : "float",
      };
    });

    return {
      name: typeof s.name === "string" ? s.name : `Scene ${Number(s.scene) || index + 1}`,
      duration: Number(s.duration) || 5,
      background,
      layers: [...texts, ...characters, ...animals, ...objects],
    };
  });

  return {
    name: typeof parsed.projectName === "string" ? parsed.projectName : parsed.name,
    size: parsed.canvasSize ?? parsed.size,
    fps: parsed.fps ?? 60,
    scenes,
  };
}

export function importProject(json: string): Project {
  const raw = JSON.parse(json) as Record<string, unknown>;
  const parsed = normalizeScenesInput(raw);
  if (!parsed || !Array.isArray(parsed.scenes)) throw new Error("JSON must contain a scenes array");
  if (parsed.scenes.length === 0) throw new Error("At least one scene is required");
  const sizeInput = (parsed.size ?? {}) as Record<string, unknown>;
  const width = Math.min(6000, Math.max(200, Number(sizeInput.width) || 1080));
  const height = Math.min(6000, Math.max(200, Number(sizeInput.height) || 1920));
  const scenes: Scene[] = parsed.scenes.map((raw, index) => {
    const s = (raw ?? {}) as Record<string, unknown>;
    const layers = Array.isArray(s.layers)
      ? s.layers.map((l) => layerFrom((l ?? {}) as Record<string, unknown>, width, height)).filter((l): l is Layer => Boolean(l))
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
    createdAt: typeof raw.createdAt === "string" ? raw.createdAt : undefined,
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
    createdAt: project.createdAt,
    size: { width: project.size.width, height: project.size.height, ratio: project.size.ratio },
    fps: project.fps,
    scenes: project.scenes.map((s) => ({
      name: s.name,
      duration: s.duration,
      background: s.background,
      layers: s.layers.map((l) => ({ ...l, type: l.kind })),
    })),
  }, null, 2);
}
