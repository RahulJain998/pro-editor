import {
  CANVAS_SIZES, defaultBackground, findAnimal, makeAnimalLayer, makeCharacterLayer, makeFinanceLayer, makeTextLayer, uid,
} from "./presets";
import type { Background, Project, Scene, TextLayer } from "./types";

function bg(color: string, from: string, to: string): Background {
  return {
    type: "gradient",
    color,
    opacity: 100,
    gradient: { from, to, direction: "top-bottom", intensity: 100, speed: 50, animated: true },
    image: { src: "", name: "", blur: 0, brightness: 100, opacity: 100, fit: "cover", position: "center" },
    pattern: { kind: "particles", color: "#FDE68A", accent: "#0B1020", size: 5, gap: 40, speed: 50, count: 45 },
    video: { src: "", name: "", loop: true, playing: false },
  };
}

function title(text: string, y: number, size = 8.6): TextLayer {
  const layer = makeTextLayer("title", text);
  return {
    ...layer,
    y,
    size,
    w: 92,
    h: size * 2.4,
    animation: "float",
    gradient: { enabled: true, from: "#FDE047", to: "#F472B6" },
    shadow: { enabled: true, color: "#000000", blur: 18, dx: 0, dy: 8 },
  };
}

function subtitle(text: string, y: number): TextLayer {
  const layer = makeTextLayer("subtitle", text);
  return { ...layer, y, size: 4.2, w: 86, h: 10, color: "#E9D5FF", animation: "none" };
}

export function createInitialProject(): Project {
  const c = CANVAS_SIZES[0];
  const ramesh = makeCharacterLayer({ id: "ramesh", name: "Ramesh", hint: "", skin: "#C68642", shirt: "#2563EB", hair: "#1C1917", accessory: "none", variant: 0 });
  const suresh = makeCharacterLayer({ id: "suresh", name: "Suresh", hint: "", skin: "#B45309", shirt: "#059669", hair: "#18181B", accessory: "moustache", variant: 1 });
  const dog = makeAnimalLayer(findAnimal("dog"));
  const fd = makeFinanceLayer({ id: "fd-gold", label: "FD Certificate", hindi: "", kind: "fd", primary: "#FBBF24", secondary: "#B45309" });

  const scenes: Scene[] = [
    {
      id: uid("scene"),
      name: "Scene 1 • Intro",
      duration: 5,
      background: bg("#0B1020", "#0F172A", "#4C1D95"),
      layers: [
        { ...title("SMART SAVING", 14), animation: "pulse" },
        { ...subtitle("बचत का नया तरीका • Ramesh + Dog", 22) },
        { ...fd, x: 50, y: 42, w: 30, h: 30 },
        { ...ramesh, x: 24, y: 70, w: 32, h: 49, animation: "wave" },
        { ...dog, x: 78, y: 80, w: 34, h: 24, animation: "tailWag" },
        { ...suresh, x: 66, y: 57, w: 24, h: 38, animation: "talk" },
      ],
    },
    {
      id: uid("scene"),
      name: "Scene 2 • FD",
      duration: 5,
      background: bg("#0B1020", "#1E1B4B", "#9A3412"),
      layers: [
        { ...title("FD CERTIFICATE", 16, 7.4), animation: "float" },
        { ...subtitle("Guaranteed returns • सुरक्षित निवेश", 24) },
        { ...fd, x: 50, y: 47, w: 46, h: 46, animation: "pulse" },
        { ...ramesh, x: 28, y: 76, w: 30, h: 46, animation: "jump" },
        { ...suresh, x: 72, y: 76, w: 30, h: 46, animation: "wave" },
      ],
    },
    {
      id: uid("scene"),
      name: "Scene 3 • CTA",
      duration: 5,
      background: bg("#0B1020", "#052E2B", "#7C3AED"),
      layers: [
        { ...title("START TODAY!", 26), animation: "pulse" },
        { ...subtitle("Visit your nearest branch • आज ही शुरू करें", 38) },
        { ...fd, x: 50, y: 56, w: 30, h: 30, animation: "spin" },
      ],
    },
  ];

  return {
    name: "Mini Canva Pro - Animated Studio",
    createdAt: new Date().toISOString().slice(0, 10),
    size: { ...c },
    fps: 60,
    fourK: true,
    scenes,
    activeSceneId: scenes[0].id,
  };
}

export function createBlankProject(): Project {
  const size = { ...CANVAS_SIZES[0] };
  const background = structuredClone(defaultBackground);
  background.type = "pattern";
  background.color = "#111111";
  background.pattern = {
    ...background.pattern,
    kind: "dots",
    color: "#3F3F46",
    accent: "#111111",
    size: 8,
    gap: 36,
    speed: 25,
  };
  const scene: Scene = {
    id: uid("scene"),
    name: "Scene 1",
    duration: 5,
    background,
    layers: [],
  };
  return {
    name: "Untitled Project",
    createdAt: new Date().toISOString().slice(0, 10),
    size,
    fps: 60,
    fourK: true,
    scenes: [scene],
    activeSceneId: scene.id,
  };
}
