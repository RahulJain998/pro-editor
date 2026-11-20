import { HAND_CHARACTERS } from "@/src/characters/HandDesignedCharacters";
import { ANIMALS, findAnimal, type AnimalDef } from "@/src/characters/Animals";
import {
  DEFAULT_TEXT_ANIMATION,
  type AnimalLayer,
  type AnimationName,
  type Background,
  type CanvasSize,
  type CharacterLayer,
  type FinanceLayer,
  type TextLayer,
} from "./types";

export { ANIMALS, findAnimal, type AnimalDef };

export const CANVAS_SIZES: CanvasSize[] = [
  { id: "reels", name: "Reels / Shorts", short: "9:16", width: 1080, height: 1920, ratio: "9:16", icon: "phone" },
  { id: "story", name: "Story", short: "9:16", width: 1080, height: 1920, ratio: "9:16", icon: "phone" },
  { id: "youtube", name: "YouTube Video", short: "16:9", width: 1920, height: 1080, ratio: "16:9", icon: "play" },
  { id: "thumb", name: "YouTube Thumbnail", short: "16:9", width: 1280, height: 720, ratio: "16:9", icon: "image" },
  { id: "insta", name: "Instagram Post", short: "1:1", width: 1080, height: 1080, ratio: "1:1", icon: "camera" },
  { id: "insta-portrait", name: "Instagram Portrait", short: "4:5", width: 1080, height: 1350, ratio: "4:5", icon: "camera" },
  { id: "twitter", name: "Twitter Post", short: "16:9", width: 1200, height: 675, ratio: "16:9", icon: "bird" },
  { id: "facebook", name: "Facebook Post", short: "1.91:1", width: 1200, height: 630, ratio: "1.91:1", icon: "facebook" },
  { id: "pinterest", name: "Pinterest Pin", short: "2:3", width: 1000, height: 1500, ratio: "2:3", icon: "pin" },
  { id: "custom", name: "Custom Size", short: "Custom", width: 2000, height: 2000, ratio: "1:1", icon: "sliders" },
];

export const COLORS = [
  "#FF5733", "#E11D48", "#F43F5E", "#F97316", "#FBBF24", "#FDE047", "#84CC16", "#22C55E",
  "#10B981", "#14B8A6", "#06B6D4", "#0EA5E9", "#3B82F6", "#6366F1", "#7C3AED", "#A855F7",
  "#D946EF", "#EC4899", "#FFFFFF", "#111111", "#334155", "#0F172A", "#78350F", "#A3A3A3",
];

export const GRADIENTS = [
  { name: "Sunset", from: "#FF512F", to: "#DD2476" },
  { name: "Ocean", from: "#0F2027", to: "#2C5364" },
  { name: "Purple Dream", from: "#7F00FF", to: "#E100FF" },
  { name: "Neon", from: "#00FF87", to: "#60EFFF" },
  { name: "Fire", from: "#F12711", to: "#F5AF19" },
  { name: "Aurora", from: "#00C9FF", to: "#92FE9D" },
  { name: "Midnight", from: "#0F0C29", to: "#302B63" },
  { name: "Peach", from: "#FFD194", to: "#70E1F5" },
  { name: "Rose", from: "#FFAFBD", to: "#FFC3A0" },
  { name: "Forest", from: "#134E5E", to: "#71B280" },
  { name: "Gold", from: "#BF953F", to: "#FCF6BA" },
  { name: "Ice", from: "#E0EAFC", to: "#CFDEF3" },
  { name: "Grape", from: "#870000", to: "#190A05" },
  { name: "Candy", from: "#FF9A9E", to: "#FECFEF" },
  { name: "Steel", from: "#536976", to: "#292E49" },
];

export interface CharacterDef {
  id: string;
  name: string;
  hint: string;
  skin: string;
  shirt: string;
  hair: string;
  accessory: string;
  variant: number;
}

const ORIGINAL_CHARACTERS: CharacterDef[] = [
  { id: "ramesh", name: "Ramesh", hint: "रमेश • Young Hero", skin: "#C68642", shirt: "#2563EB", hair: "#1C1917", accessory: "none", variant: 0 },
  { id: "suresh", name: "Suresh", hint: "सुरेश • Moustache", skin: "#B45309", shirt: "#059669", hair: "#18181B", accessory: "moustache", variant: 1 },
  { id: "neha", name: "Neha", hint: "नेहा • Kurti", skin: "#E8B48C", shirt: "#DB2777", hair: "#1C1917", accessory: "bindi", variant: 3 },
  { id: "priya", name: "Priya", hint: "प्रिया • Saree", skin: "#D9A06B", shirt: "#7C3AED", hair: "#18181B", accessory: "bindi", variant: 4 },
  { id: "vikram", name: "Vikram", hint: "विक्रम • Blazer", skin: "#A9622A", shirt: "#1F2937", hair: "#111111", accessory: "tie", variant: 5 },
  { id: "anita", name: "Anita", hint: "अनीता • Ponytail", skin: "#E2AC82", shirt: "#EA580C", hair: "#27272A", accessory: "ponytail", variant: 6 },
  { id: "rohan", name: "Rohan", hint: "रोहन • Cap", skin: "#C68642", shirt: "#0EA5E9", hair: "#18181B", accessory: "cap", variant: 7 },
  { id: "meena", name: "Meena", hint: "मीना • Salwar", skin: "#D89A6A", shirt: "#16A34A", hair: "#1C1917", accessory: "dupatta", variant: 8 },
  { id: "arjun", name: "Arjun", hint: "अर्जुन • Turban", skin: "#B96E3A", shirt: "#DC2626", hair: "#1C1917", accessory: "turban", variant: 9 },
  { id: "kavita", name: "Kavita", hint: "कविता • Glasses", skin: "#E0AC85", shirt: "#0891B2", hair: "#18181B", accessory: "glasses-bun", variant: 10 },
  { id: "sharmaji", name: "Sharma Ji", hint: "शर्माजी • Kurta", skin: "#C68958", shirt: "#F59E0B", hair: "#D4D4D8", accessory: "moustache", variant: 11 },
];

export const CHARACTERS: CharacterDef[] = [...ORIGINAL_CHARACTERS, ...HAND_CHARACTERS];

export interface FinanceBase {
  id: string;
  label: string;
  hindi: string;
  kind: string;
}

const FINANCE_BASE: FinanceBase[] = [
  { id: "house", label: "Dream House", hindi: "सपनों का घर", kind: "house" },
  { id: "car", label: "New Car", hindi: "नई गाड़ी", kind: "car" },
  { id: "bank", label: "Bank Building", hindi: "बैंक", kind: "bank" },
  { id: "fd", label: "FD Certificate", hindi: "एफडी प्रमाणपत्र", kind: "fd" },
  { id: "loan", label: "Loan Approved", hindi: "लोन स्वीकृत", kind: "loan" },
  { id: "coin", label: "Gold Coin", hindi: "सोने का सिक्का", kind: "coin" },
  { id: "rupee", label: "Rupee Stack", hindi: "रुपये", kind: "rupee" },
  { id: "chart", label: "Growth Chart", hindi: "ग्रोथ चार्ट", kind: "chart" },
  { id: "gold", label: "Gold Bar", hindi: "सोने की बार", kind: "gold" },
  { id: "wallet", label: "Digital Wallet", hindi: "डिजिटल वॉलेट", kind: "wallet" },
  { id: "atm", label: "ATM Machine", hindi: "एटीएम", kind: "atm" },
  { id: "briefcase", label: "Business Bag", hindi: "बिज़नेस बैग", kind: "briefcase" },
];

const FINANCE_ACCENTS = [
  { suffix: "gold", primary: "#FBBF24", secondary: "#B45309" },
  { suffix: "emerald", primary: "#34D399", secondary: "#047857" },
  { suffix: "blue", primary: "#60A5FA", secondary: "#1D4ED8" },
  { suffix: "violet", primary: "#C084FC", secondary: "#7E22CE" },
  { suffix: "coral", primary: "#FB7185", secondary: "#BE123C" },
];

export interface FinanceDef extends FinanceBase {
  id: string;
  primary: string;
  secondary: string;
}

export const FINANCE_OBJECTS: FinanceDef[] = FINANCE_BASE.flatMap((base) =>
  FINANCE_ACCENTS.map((accent) => ({
    ...base,
    id: `${base.id}-${accent.suffix}`,
    label: `${base.label} • ${accent.suffix}`,
    primary: accent.primary,
    secondary: accent.secondary,
  })),
);

export interface BackgroundTile {
  id: string;
  name: string;
  background: Background;
}

const solid = (color: string, name: string): Background => {
  void name;
  return {
    type: "solid",
    color,
    opacity: 100,
    gradient: { from: "#7C3AED", to: "#EC4899", direction: "top-bottom", intensity: 100, speed: 50, animated: false },
    image: { src: "", name: "", blur: 0, brightness: 100, opacity: 100, fit: "cover", position: "center" },
    pattern: { kind: "dots", color: "#FFFFFF", accent: "#7C3AED", size: 10, gap: 32, speed: 50, count: 40 },
    video: { src: "", name: "", loop: true, playing: false },
  };
};

export const defaultBackground = solid("#0B1020", "Night");

const grad = (name: string, from: string, to: string, direction: Background["gradient"]["direction"] = "top-bottom"): Background => ({
  ...defaultBackground,
  type: "gradient",
  gradient: { from, to, direction, intensity: 100, speed: 45, animated: false },
});

const pat = (
  name: string,
  kind: Background["pattern"]["kind"],
  color: string,
  accent: string,
): Background => ({
  ...defaultBackground,
  type: "pattern",
  pattern: { kind, color, accent, size: kind === "particles" ? 6 : 12, gap: 40, speed: 50, count: 45 },
});

const SOLID_TILES: BackgroundTile[] = [
  { id: "s1", name: "Night", background: solid("#0B1020", "Night") },
  { id: "s2", name: "Pure White", background: solid("#FFFFFF", "Pure White") },
  { id: "s3", name: "Charcoal", background: solid("#18181B", "Charcoal") },
  { id: "s4", name: "Royal Blue", background: solid("#1D4ED8", "Royal Blue") },
  { id: "s5", name: "Crimson", background: solid("#BE123C", "Crimson") },
  { id: "s6", name: "Mint", background: solid("#10B981", "Mint") },
  { id: "s7", name: "Sunflower", background: solid("#FACC15", "Sunflower") },
  { id: "s8", name: "Lavender", background: solid("#A78BFA", "Lavender") },
];

const GRADIENT_TILES: BackgroundTile[] = GRADIENTS.slice(0, 12).map((g, i) => ({
  id: `g${i + 1}`,
  name: g.name,
  background: grad(g.name, g.from, g.to, i % 2 === 0 ? "top-bottom" : "diagonal"),
}));

const PATTERN_TILES: BackgroundTile[] = [
  { id: "p1", name: "Soft Dots", background: pat("Soft Dots", "dots", "#FFFFFF", "#1E293B") },
  { id: "p2", name: "Neon Dots", background: pat("Neon Dots", "dots", "#A855F7", "#0B1020") },
  { id: "p3", name: "Blue Waves", background: pat("Blue Waves", "waves", "#38BDF8", "#0C4A6E") },
  { id: "p4", name: "Purple Waves", background: pat("Purple Waves", "waves", "#C084FC", "#2E1065") },
  { id: "p5", name: "Cyber Neon", background: pat("Cyber Neon", "neon", "#22D3EE", "#0F172A") },
  { id: "p6", name: "Pink Neon", background: pat("Pink Neon", "neon", "#F472B6", "#1C1917") },
  { id: "p7", name: "Star Particles", background: pat("Star Particles", "particles", "#FDE68A", "#111827") },
  { id: "p8", name: "Dust Particles", background: pat("Dust Particles", "particles", "#A5B4FC", "#0B1020") },
  { id: "p9", name: "Grid", background: pat("Grid", "grid", "#475569", "#0B1020") },
  { id: "p10", name: "Rings", background: pat("Rings", "rings", "#67E8F9", "#082F49") },
  { id: "p11", name: "City Lights", background: grad("City", "#0F172A", "#7C2D12", "top-bottom") },
  { id: "p12", name: "Space", background: pat("Space", "particles", "#FFFFFF", "#020617") },
  { id: "p13", name: "Fire", background: grad("Fire", "#7F1D1D", "#F59E0B", "top-bottom") },
  { id: "p14", name: "Aurora Sky", background: grad("Aurora", "#022C22", "#7C3AED", "diagonal") },
  { id: "p15", name: "Sunrise", background: grad("Sunrise", "#F97316", "#FDE68A", "top-bottom") },
  { id: "p16", name: "Deep Ocean", background: grad("Ocean", "#082F49", "#0F172A", "top-bottom") },
  { id: "p17", name: "Electric Grid", background: pat("Electric Grid", "grid", "#22D3EE", "#082F49") },
  { id: "p18", name: "Golden Rings", background: pat("Golden Rings", "rings", "#FBBF24", "#1C1917") },
  { id: "p19", name: "Lime Dots", background: pat("Lime Dots", "dots", "#A3E635", "#14532D") },
  { id: "p20", name: "Pink Waves", background: pat("Pink Waves", "waves", "#F9A8D4", "#500724") },
];

export const BACKGROUND_TILES: BackgroundTile[] = [...SOLID_TILES, ...GRADIENT_TILES, ...PATTERN_TILES];

export const TEXT_PRESETS = [
  { id: "title", label: "Add a heading", hindi: "बड़ा हैडिंग", size: 9, weight: 800, color: "#FFFFFF", font: "display" as const },
  { id: "subtitle", label: "Add a subheading", hindi: "छोटा हैडिंग", size: 5.5, weight: 700, color: "#E9D5FF", font: "sans" as const },
  { id: "body", label: "Add body text", hindi: "सामान्य टेक्स्ट", size: 3.5, weight: 400, color: "#E5E7EB", font: "sans" as const },
  { id: "gradient", label: "Gradient headline", hindi: "ग्रेडिएंट हैडिंग", size: 8, weight: 900, color: "#FFFFFF", font: "display" as const },
  { id: "outline", label: "Outline text", hindi: "आउटलाइन टेक्स्ट", size: 7, weight: 900, color: "transparent", font: "display" as const },
  { id: "pill", label: "Badge / Pill", hindi: "बैज", size: 3.2, weight: 700, color: "#FFFFFF", font: "sans" as const },
];

export function makeTextLayer(presetId: string, text?: string): TextLayer {
  const p = TEXT_PRESETS.find((item) => item.id === presetId) ?? TEXT_PRESETS[0];
  return {
    id: uid("txt"),
    name: p.label,
    kind: "text",
    x: 50,
    y: 50,
    w: 82,
    h: p.size * 2.6,
    rot: 0,
    opacity: 100,
    visible: true,
    locked: false,
    animation: "none",
    animSpeed: 1,
    text: text ?? p.label,
    font: p.font,
    size: p.size,
    weight: p.weight,
    color: p.color,
    italic: false,
    align: "center",
    lineHeight: 1.1,
    letterSpacing: 0,
    gradient: { enabled: p.id === "gradient", from: "#FDE047", to: "#F472B6" },
    border: { enabled: p.id === "outline", color: "#A855F7", width: 3 },
    shadow: { enabled: false, color: "#000000", blur: 18, dx: 0, dy: 8 },
    glow: { enabled: false, color: "#A855F7", blur: 24 },
    pill: { enabled: p.id === "pill", color: "#7C3AED", opacity: 90, padding: 20 },
    textAnim: { ...DEFAULT_TEXT_ANIMATION },
  };
}

const CHARACTER_ACTIONS: Record<string, AnimationName> = {
  police: "wave", thief: "sneak", girl: "jump", topper: "wave", "doctor-girl": "walk",
  "business-girl": "walk", "stylish-girl": "dance", "village-boy": "run", dadaji: "walk", women: "talk",
};

export function makeCharacterLayer(def: CharacterDef): CharacterLayer {
  return {
    id: uid("chr"),
    name: def.name,
    kind: "character",
    x: 34,
    y: 62,
    w: 26,
    h: 45,
    rot: 0,
    opacity: 100,
    visible: true,
    locked: false,
    animation: CHARACTER_ACTIONS[def.id] ?? "wave",
    animSpeed: 1,
    charId: def.id,
    skin: def.skin,
    shirt: def.shirt,
    hair: def.hair,
    accessory: def.accessory,
  };
}

const ANIMAL_ACTIONS: Record<string, AnimationName> = {
  dog: "tailWag", cat: "blink", lion: "roar", buffalo: "headShake", cow: "moo",
  snake: "slither", elephant: "walk", deer: "walk",
};

export function makeAnimalLayer(def: AnimalDef): AnimalLayer {
  return {
    id: uid("ani"),
    name: def.name,
    kind: "animal",
    x: 28,
    y: 35,
    w: 44,
    h: 31,
    rot: 0,
    opacity: 100,
    visible: true,
    locked: false,
    animation: ANIMAL_ACTIONS[def.id] ?? "tailWag",
    animSpeed: 1,
    animalId: def.id,
    flipX: false,
  };
}

export function makeFinanceLayer(def: FinanceDef): FinanceLayer {
  return {
    id: uid("fin"),
    name: def.label,
    kind: "finance",
    x: 68,
    y: 58,
    w: 24,
    h: 24,
    rot: 0,
    opacity: 100,
    visible: true,
    locked: false,
    animation: "float",
    animSpeed: 1,
    objectId: def.id,
    primary: def.primary,
    secondary: def.secondary,
  };
}

export function uid(prefix = "id"): string {
  return `${prefix}-${Math.random().toString(36).slice(2, 9)}-${Date.now().toString(36).slice(-4)}`;
}

export function findCharacter(id: string): CharacterDef {
  return CHARACTERS.find((c) => c.id === id) ?? CHARACTERS[0];
}

export function financeKind(objectId: string): string {
  return objectId.split("-")[0];
}
