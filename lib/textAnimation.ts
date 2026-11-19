import type { TextAnimName, TextAnimationConfig, TextLayer } from "./types";
import { clamp, mixColors } from "./utils";

export interface TextMotion {
  dx: number;
  dy: number;
  scale: number;
  opacity: number;
  color: string | null;
  glow: number;
  highlight: number;
  reveal: number;
  letterMode: "none" | "pop" | "wave" | "word";
  progress: number;
}

export const ENTRANCE_ANIMATIONS: TextAnimName[] = [
  "none", "popIn", "typewriter", "slideLeft", "slideRight", "slideDown", "zoomIn",
  "fadeIn", "bounce", "rainbow", "shake", "fireGlow", "highlight", "letterPop", "wave", "kinetic",
];

export const EXIT_ANIMATIONS: TextAnimName[] = ["none", "fadeOut", "slideLeft", "slideRight", "slideDown", "zoomIn", "popIn"];

const VALID_TEXT_ANIMATIONS = new Set<string>([...ENTRANCE_ANIMATIONS, ...EXIT_ANIMATIONS]);

export function isTextAnimName(value: unknown): value is TextAnimName {
  return typeof value === "string" && VALID_TEXT_ANIMATIONS.has(value);
}

const easeOut = (p: number) => 1 - Math.pow(1 - p, 3);

function rainbowColor(p: number): string {
  if (p < 0.25) return mixColors("#EF4444", "#F59E0B", p / 0.25);
  if (p < 0.5) return mixColors("#F59E0B", "#10B981", (p - 0.25) / 0.25);
  if (p < 0.75) return mixColors("#10B981", "#3B82F6", (p - 0.5) / 0.25);
  return mixColors("#3B82F6", "#EF4444", (p - 0.75) / 0.25);
}

function emptyMotion(progress: number): TextMotion {
  return {
    dx: 0, dy: 0, scale: 1, opacity: 1, color: null,
    glow: 0, highlight: 0, reveal: 1, letterMode: "none", progress,
  };
}

function applyAnimation(
  name: TextAnimName,
  p: number,
  boxW: number,
  boxH: number,
  W: number,
  H: number,
  baseColor: string,
): TextMotion {
  const state = emptyMotion(p);
  const e = easeOut(p);
  switch (name) {
    case "popIn":
      state.scale = p < 0.7 ? (p / 0.7) * 1.15 : 1.15 - ((p - 0.7) / 0.3) * 0.15;
      state.opacity = clamp(p * 3, 0, 1);
      break;
    case "typewriter":
      state.reveal = e;
      break;
    case "slideLeft":
      state.dx = -boxW * (1 - e);
      state.opacity = e;
      break;
    case "slideRight":
      state.dx = boxW * (1 - e);
      state.opacity = e;
      break;
    case "slideDown":
      state.dy = -boxH * (1 - e);
      state.opacity = e;
      break;
    case "zoomIn":
      state.scale = 0.2 + 0.8 * e;
      state.opacity = e;
      break;
    case "fadeIn":
      state.opacity = p;
      break;
    case "bounce":
      if (p < 0.5) state.dy = -H * 0.09 * (1 - p / 0.5);
      else if (p < 0.7) state.dy = -H * 0.02 * (1 - (p - 0.5) / 0.2);
      else state.dy = 0;
      state.opacity = clamp(p * 4, 0, 1);
      break;
    case "rainbow":
      state.color = rainbowColor(p);
      state.opacity = clamp(p * 4, 0, 1);
      break;
    case "shake":
      state.dx = Math.sin(p * Math.PI * 8) * W * 0.006;
      state.opacity = clamp(p * 4, 0, 1);
      break;
    case "fireGlow":
      state.glow = p;
      state.color = mixColors(baseColor, "#F97316", 0.35 + p * 0.4);
      state.opacity = clamp(p * 3, 0, 1);
      break;
    case "highlight":
      state.highlight = e;
      state.opacity = clamp(p * 3, 0, 1);
      break;
    case "letterPop":
      state.letterMode = "pop";
      state.opacity = clamp(p * 5, 0, 1);
      break;
    case "wave":
      state.letterMode = "wave";
      state.opacity = clamp(p * 4, 0, 1);
      break;
    case "kinetic":
      state.letterMode = "word";
      state.opacity = clamp(p * 4, 0, 1);
      break;
    case "fadeOut":
      state.opacity = 1 - p;
      break;
    default:
      break;
  }
  return state;
}

function combine(a: TextMotion, b: TextMotion): TextMotion {
  return {
    dx: a.dx + b.dx,
    dy: a.dy + b.dy,
    scale: a.scale * b.scale,
    opacity: Math.min(a.opacity, b.opacity),
    color: a.color ?? b.color,
    glow: Math.max(a.glow, b.glow),
    highlight: Math.max(a.highlight, b.highlight),
    reveal: Math.min(a.reveal, b.reveal),
    letterMode: a.letterMode !== "none" ? a.letterMode : b.letterMode,
    progress: a.progress,
  };
}

export function normalizeTextAnim(input?: Partial<TextAnimationConfig> | null): TextAnimationConfig {
  return {
    animation: input?.animation ?? "none",
    delay: typeof input?.delay === "number" ? input.delay : 0,
    duration: typeof input?.duration === "number" && input.duration > 0 ? input.duration : 1,
    loop: Boolean(input?.loop),
    exit: input?.exit ?? "none",
    secondary: input?.secondary ?? undefined,
  };
}

export function textMotion(
  layer: TextLayer,
  time: number,
  W: number,
  H: number,
  boxW: number,
  boxH: number,
  sceneDuration = 5,
): TextMotion {
  const cfg = normalizeTextAnim(layer.textAnim);
  const base = emptyMotion(0);
  if (cfg.animation === "none" && cfg.secondary === undefined && cfg.exit === "none") return base;

  const seconds = time / 1000;
  const elapsed = seconds - cfg.delay;
  if (elapsed < 0) return { ...base, opacity: 0 };
  const duration = cfg.duration;
  const p = cfg.loop
    ? ((elapsed % duration) + duration) % duration / duration
    : clamp(elapsed / duration, 0, 1);
  const exitAt = Math.max(cfg.delay + duration + 0.5, sceneDuration - duration);
  const exiting = !cfg.loop && cfg.exit !== "none" && seconds >= exitAt;
  const exitProgress = exiting ? clamp((seconds - exitAt) / duration, 0, 1) : 0;
  const color = layer.gradient.enabled ? layer.gradient.from : layer.color;

  let result = applyAnimation(exiting ? cfg.exit : cfg.animation, exiting ? exitProgress : p, boxW, boxH, W, H, color);
  if (!exiting && cfg.secondary && cfg.secondary !== "none") {
    result = combine(result, applyAnimation(cfg.secondary, p, boxW, boxH, W, H, color));
  }
  return result;
}
