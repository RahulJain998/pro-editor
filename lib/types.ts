export type AnimationName =
  | "none"
  | "walk"
  | "wave"
  | "jump"
  | "talk"
  | "float"
  | "pulse"
  | "spin"
  | "wiggle"
  | "blink";

export type TextAnimName =
  | "none"
  | "popIn"
  | "typewriter"
  | "slideLeft"
  | "slideRight"
  | "slideDown"
  | "zoomIn"
  | "fadeIn"
  | "bounce"
  | "rainbow"
  | "shake"
  | "fireGlow"
  | "highlight"
  | "letterPop"
  | "wave"
  | "kinetic"
  | "fadeOut";

export interface TextAnimationConfig {
  animation: TextAnimName;
  delay: number;
  duration: number;
  loop: boolean;
  exit: TextAnimName;
  secondary?: TextAnimName;
}

export const DEFAULT_TEXT_ANIMATION: TextAnimationConfig = {
  animation: "none",
  delay: 0,
  duration: 1,
  loop: false,
  exit: "none",
};

export type LayerKind = "text" | "character" | "finance" | "image" | "shape";

export interface LayerBase {
  id: string;
  name: string;
  kind: LayerKind;
  x: number;
  y: number;
  w: number;
  h: number;
  rot: number;
  opacity: number;
  visible: boolean;
  locked: boolean;
  animation: AnimationName;
  animSpeed: number;
}

export interface TextLayer extends LayerBase {
  kind: "text";
  text: string;
  font: "sans" | "display" | "serif" | "mono" | "rounded";
  size: number;
  weight: number;
  color: string;
  italic: boolean;
  align: "left" | "center" | "right";
  lineHeight: number;
  letterSpacing: number;
  gradient: { enabled: boolean; from: string; to: string };
  border: { enabled: boolean; color: string; width: number };
  shadow: { enabled: boolean; color: string; blur: number; dx: number; dy: number };
  glow: { enabled: boolean; color: string; blur: number };
  pill: { enabled: boolean; color: string; opacity: number; padding: number };
  textAnim: TextAnimationConfig;
}

export interface CharacterLayer extends LayerBase {
  kind: "character";
  charId: string;
  dialogue?: string;
  toX?: number;
  skin: string;
  shirt: string;
  hair: string;
  accessory: string;
}

export interface FinanceLayer extends LayerBase {
  kind: "finance";
  objectId: string;
  primary: string;
  secondary: string;
}

export interface ImageLayer extends LayerBase {
  kind: "image";
  src: string;
  fit: "cover" | "contain" | "fill";
  radius: number;
  grayscale: number;
  blur: number;
  brightness: number;
  contrast: number;
  crop: number;
  flipX: boolean;
}

export type ShapeKind = "rect" | "circle" | "triangle" | "line" | "arrow" | "star" | "heart" | "pill";

export interface ShapeLayer extends LayerBase {
  kind: "shape";
  shape: ShapeKind;
  fill: string;
  stroke: string;
  strokeWidth: number;
  radius: number;
  fillGradient: { enabled: boolean; from: string; to: string };
}

export type Layer = TextLayer | CharacterLayer | FinanceLayer | ImageLayer | ShapeLayer;

export type BackgroundType = "solid" | "gradient" | "image" | "pattern" | "video";

export interface Background {
  type: BackgroundType;
  color: string;
  opacity: number;
  gradient: {
    from: string;
    to: string;
    direction: "top-bottom" | "left-right" | "diagonal" | "radial";
    intensity: number;
    speed: number;
    animated: boolean;
  };
  image: {
    src: string;
    name: string;
    blur: number;
    brightness: number;
    opacity: number;
    fit: "cover" | "contain" | "fill";
    position: "center" | "top" | "bottom";
  };
  pattern: {
    kind: "dots" | "waves" | "neon" | "particles" | "grid" | "rings";
    color: string;
    accent: string;
    size: number;
    gap: number;
    speed: number;
    count: number;
  };
  video: { src: string; name: string; loop: boolean; playing: boolean };
}

export interface Scene {
  id: string;
  name: string;
  duration: number;
  background: Background;
  layers: Layer[];
}

export interface CanvasSize {
  id: string;
  name: string;
  short: string;
  width: number;
  height: number;
  ratio: string;
  icon: string;
}

export interface Project {
  name: string;
  createdAt?: string;
  size: CanvasSize;
  fps: number;
  fourK: boolean;
  scenes: Scene[];
  activeSceneId: string;
}

export type PanelId = "backgrounds" | "characters" | "finance" | "text" | "images" | "scenes" | "json";

export type RightMode = "canvas" | "background" | "layer";

export type ToastKind = "success" | "error" | "info";

export interface ToastMessage {
  id: number;
  text: string;
  kind: ToastKind;
}
