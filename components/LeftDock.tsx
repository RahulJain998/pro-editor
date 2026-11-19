"use client";

import { memo } from "react";
import { LayerArt } from "@/lib/art";
import { BACKGROUND_TILES, CHARACTERS, FINANCE_OBJECTS, TEXT_PRESETS, type CharacterDef, type FinanceDef } from "@/lib/presets";
import type { Background, PanelId, Scene, ShapeKind } from "@/lib/types";
import { Button, FileInput, Icon, IconButton } from "./ui";

const ICONS: { id: PanelId; icon: string; label: string; hindi: string }[] = [
  { id: "backgrounds", icon: "backgrounds", label: "Backgrounds", hindi: "बैकग्राउंड" },
  { id: "characters", icon: "characters", label: "Characters", hindi: "किरदार" },
  { id: "finance", icon: "finance", label: "Finance", hindi: "फाइनेंस" },
  { id: "text", icon: "text", label: "Text", hindi: "टेक्स्ट" },
  { id: "images", icon: "images", label: "Images", hindi: "तस्वीरें" },
  { id: "scenes", icon: "scenes", label: "Scenes", hindi: "सीन" },
  { id: "json", icon: "json", label: "JSON", hindi: "जेसन" },
];

export interface LeftDockActions {
  applyBackground: (bg: Background, name: string) => void;
  addCharacter: (def: CharacterDef) => void;
  addFinance: (def: FinanceDef) => void;
  addText: (presetId: string) => void;
  addImageFile: (file: File) => void;
  addSticker: (shape: ShapeKind, fill: string) => void;
  selectScene: (id: string) => void;
  addScene: () => void;
  duplicateScene: (id: string) => void;
  deleteScene: (id: string) => void;
  jsonText: string;
  setJsonText: (value: string) => void;
  generateFromJson: (generateVideo: boolean) => void;
  loadSampleJson: () => void;
}

function LeftDockImpl({
  panel,
  onPanel,
  scenes,
  activeSceneId,
  actions,
  mobileOpen,
}: {
  panel: PanelId | null;
  onPanel: (panel: PanelId | null) => void;
  scenes: Scene[];
  activeSceneId: string;
  actions: LeftDockActions;
  mobileOpen: boolean;
}) {
  return (
    <div className="flex h-full shrink-0">
      <div className="z-40 flex w-[72px] shrink-0 flex-col items-center gap-1 border-r border-line bg-[#1A1A1A] py-2">
        <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand2 text-white shadow-glow">
          <Icon name="sparkle" size={19} />
        </div>
        {ICONS.map((item) => (
          <button
            key={item.id}
            type="button"
            title={`${item.label} • ${item.hindi}`}
            onClick={() => onPanel(panel === item.id ? null : item.id)}
            className={`group relative flex w-[62px] flex-col items-center gap-0.5 rounded-xl py-2 transition ${panel === item.id ? "bg-brand/20 text-brand2" : "text-zinc-500 hover:bg-white/5 hover:text-zinc-200"}`}
          >
            <Icon name={item.icon} size={19} />
            <span className="text-[8px] font-medium leading-tight">{item.label}</span>
            {panel === item.id && <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-brand2" />}
          </button>
        ))}
        <div className="mt-auto flex flex-col items-center gap-1 pb-1 text-zinc-600">
          <IconButton name="settings" title="Settings" size={16} />
          <span className="font-mono text-[7px]">v1.0</span>
        </div>
      </div>

      {panel && (
        <aside className={`scroll-thin z-30 w-[280px] shrink-0 overflow-y-auto border-r border-line bg-[#17171c] ${mobileOpen ? "absolute bottom-0 left-[72px] top-0 shadow-2xl shadow-black/70 lg:relative lg:shadow-none" : "hidden lg:block"}`}>
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-line bg-[#17171c]/95 px-3 py-3 backdrop-blur">
            <div>
              <h2 className="text-[12px] font-semibold text-zinc-100">{ICONS.find((i) => i.id === panel)?.label}</h2>
              <p className="text-[9px] text-zinc-500">{ICONS.find((i) => i.id === panel)?.hindi}</p>
            </div>
            <IconButton name="close" title="Close panel" onClick={() => onPanel(null)} size={15} />
          </div>

          {panel === "backgrounds" && (
            <div className="p-3">
              <p className="mb-2 text-[10px] text-zinc-500">40 designs • click to apply, right panel will open</p>
              <div className="grid grid-cols-4 gap-2">
                {BACKGROUND_TILES.map((tile) => (
                  <button
                    key={tile.id}
                    type="button"
                    title={tile.name}
                    onClick={() => actions.applyBackground(structuredClone(tile.background), tile.name)}
                    className="group overflow-hidden rounded-lg border border-line transition hover:scale-105 hover:border-brand"
                  >
                    <div className="h-14 w-full">
                      <BackgroundThumb bg={tile.background} />
                    </div>
                    <span className="block truncate bg-panel2 px-1 py-1 text-[8px] text-zinc-400 group-hover:text-white">{tile.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {panel === "characters" && (
            <div className="p-3">
              <p className="mb-2 text-[10px] text-zinc-500">12 hand-drawn SVG characters • drag to move</p>
              <div className="grid grid-cols-3 gap-2">
                {CHARACTERS.map((def) => (
                  <button key={def.id} type="button" onClick={() => actions.addCharacter(def)} className="group rounded-lg border border-line bg-panel2 p-1 transition hover:border-brand hover:bg-brand/10">
                    <svg viewBox="0 0 100 100" className="mx-auto h-16 w-full">
                      <CharacterThumb def={def} />
                    </svg>
                    <span className="block truncate text-[8px] text-zinc-400 group-hover:text-white">{def.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {panel === "finance" && (
            <div className="p-3">
              <p className="mb-2 text-[10px] text-zinc-500">{FINANCE_OBJECTS.length} vector objects • 100% SVG</p>
              <div className="grid grid-cols-4 gap-1.5">
                {FINANCE_OBJECTS.map((def) => (
                  <button key={def.id} type="button" title={def.label} onClick={() => actions.addFinance(def)} className="group rounded-lg border border-line bg-panel2 p-1 transition hover:border-brand hover:bg-brand/10">
                    <svg viewBox="0 0 100 100" className="h-11 w-full">
                      <FinanceThumb def={def} />
                    </svg>
                    <span className="block truncate text-[7px] text-zinc-500 group-hover:text-white">{def.label.split(" • ")[0]}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {panel === "text" && (
            <div className="p-3">
              <p className="mb-2 text-[10px] text-zinc-500">Click to add • then edit on the right</p>
              <div className="space-y-2">
                {TEXT_PRESETS.map((preset) => (
                  <button key={preset.id} type="button" onClick={() => actions.addText(preset.id)} className="w-full rounded-lg border border-line bg-panel2 p-3 text-left transition hover:border-brand hover:bg-brand/10">
                    <span className="block truncate text-zinc-100" style={{ fontSize: Math.min(20, preset.size + 8), fontWeight: preset.weight }}>{preset.id === "gradient" ? <span className="bg-gradient-to-r from-yellow-300 to-pink-400 bg-clip-text text-transparent">{preset.label}</span> : preset.label}</span>
                    <span className="mt-1 block text-[9px] text-zinc-500">{preset.hindi}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {panel === "images" && (
            <div className="p-3">
              <p className="mb-2 text-[10px] text-zinc-500">Apni photo/logo upload karo</p>
              <FileInput label="📤 Photo Add Karo • Upload" accept="image/*" onFile={actions.addImageFile} className="mb-3" />
              <p className="mb-2 mt-4 text-[10px] uppercase tracking-widest text-zinc-500">Vector stickers</p>
              <div className="grid grid-cols-4 gap-2">
                {([
                  ["star", "#FBBF24"], ["heart", "#F43F5E"], ["circle", "#7C3AED"], ["triangle", "#06B6D4"],
                  ["arrow", "#22C55E"], ["pill", "#EC4899"], ["rect", "#F97316"], ["star", "#A855F7"],
                ] as [ShapeKind, string][]).map(([shape, fill], i) => (
                  <button key={i} type="button" onClick={() => actions.addSticker(shape, fill)} className="flex h-14 items-center justify-center rounded-lg border border-line bg-panel2 transition hover:border-brand">
                    <svg viewBox="-50 -50 100 100" className="h-10 w-10"><circle cx="0" cy="0" r="42" fill={fill} opacity="0.85" /><IconShape shape={shape} /></svg>
                  </button>
                ))}
              </div>
              <div className="mt-4 rounded-lg border border-line bg-panel2 p-2 text-[9px] leading-relaxed text-zinc-500">
                Uploaded images stay on your device. No external URLs, no network calls.
              </div>
            </div>
          )}

          {panel === "scenes" && (
            <div className="p-3">
              <p className="mb-2 text-[10px] text-zinc-500">Scene order timeline me bhi dikhata hai</p>
              <div className="space-y-2">
                {scenes.map((scene, i) => (
                  <div key={scene.id} className={`rounded-lg border p-2 ${scene.id === activeSceneId ? "border-brand bg-brand/10" : "border-line bg-panel2"}`}>
                    <button type="button" onClick={() => actions.selectScene(scene.id)} className="flex w-full items-center gap-2 text-left">
                      <span className="flex h-6 w-6 items-center justify-center rounded bg-brand/20 font-mono text-[10px] text-brand2">{i + 1}</span>
                      <span className="min-w-0 flex-1 truncate text-[11px] text-zinc-200">{scene.name}</span>
                      <span className="font-mono text-[9px] text-zinc-500">{scene.duration}s</span>
                    </button>
                    <div className="mt-2 flex gap-1">
                      <Button variant="ghost" className="flex-1 py-1" onClick={() => actions.duplicateScene(scene.id)}><Icon name="copy" size={11} /> Copy</Button>
                      <Button variant="danger" className="py-1" onClick={() => actions.deleteScene(scene.id)} disabled={scenes.length <= 1}><Icon name="trash" size={11} /></Button>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="mt-3 w-full" onClick={actions.addScene}><Icon name="plus" size={13} /> Naya Scene Add Karo</Button>
            </div>
          )}

          {panel === "json" && (
            <div className="p-3">
              <p className="mb-2 text-[10px] leading-relaxed text-zinc-500">Paste project JSON. Scenes, characters, text aur objects auto ban jayenge.</p>
              <textarea
                value={actions.jsonText}
                onChange={(e) => actions.setJsonText(e.target.value)}
                spellCheck={false}
                className="scroll-thin h-52 w-full resize-none rounded-lg border border-line bg-[#0e0e13] p-2 font-mono text-[9px] leading-relaxed text-emerald-300 outline-none focus:border-brand"
              />
              <div className="mt-2 grid grid-cols-2 gap-2">
                <Button variant="ghost" onClick={actions.loadSampleJson}>Sample</Button>
                <Button variant="outline" onClick={() => actions.generateFromJson(false)}>Import</Button>
              </div>
              <Button className="mt-2 w-full" onClick={() => actions.generateFromJson(true)}><Icon name="film" size={13} /> Generate Video</Button>
              <div className="mt-3 rounded-lg border border-line bg-panel2 p-2 text-[9px] leading-relaxed text-zinc-500">
                Format: <code className="text-brand2">{"{ name, size:{width,height}, scenes:[{name,duration,background,layers:[]}] }"}</code>
              </div>
            </div>
          )}
        </aside>
      )}
    </div>
  );
}

function BackgroundThumb({ bg }: { bg: Background }) {
  if (bg.type === "solid") {
    return <div className="h-full w-full" style={{ background: bg.color, opacity: bg.opacity / 100 }} />;
  }
  if (bg.type === "gradient") {
    const angle = bg.gradient.direction === "left-right" ? "90deg" : bg.gradient.direction === "diagonal" ? "135deg" : "180deg";
    const style = bg.gradient.direction === "radial"
      ? { background: `radial-gradient(circle at 50% 45%, ${bg.gradient.from}, ${bg.gradient.to})` }
      : { background: `linear-gradient(${angle}, ${bg.gradient.from}, ${bg.gradient.to})` };
    return <div className="h-full w-full" style={style} />;
  }
  if (bg.type === "image") {
    return <div className="h-full w-full" style={{ background: `linear-gradient(135deg, ${bg.pattern.accent}, ${bg.pattern.color})` }} />;
  }
  const p = bg.pattern;
  const overlay =
    p.kind === "dots" || p.kind === "particles"
      ? `radial-gradient(circle, ${p.color} 2px, transparent 2.5px)`
      : p.kind === "grid"
        ? `linear-gradient(${p.color} 1px, transparent 1px), linear-gradient(90deg, ${p.color} 1px, transparent 1px)`
        : `repeating-linear-gradient(25deg, ${p.color}55 0 3px, transparent 3px 9px)`;
  return <div className="h-full w-full" style={{ background: `${overlay}, ${p.accent}`, backgroundSize: p.kind === "grid" ? "12px 12px" : "10px 10px" }} />;
}

function CharacterThumb({ def }: { def: CharacterDef }) {
  const layer = {
    id: `thumb-${def.id}`, name: def.name, kind: "character" as const,
    x: 50, y: 52, w: 96, h: 96, rot: 0, opacity: 100, visible: true, locked: false,
    animation: "none" as const, animSpeed: 1, charId: def.id, skin: def.skin, shirt: def.shirt, hair: def.hair, accessory: def.accessory,
  };
  return <LayerArt layer={layer} W={100} H={100} time={0} prefix={`ct-${def.id}`} />;
}

function FinanceThumb({ def }: { def: FinanceDef }) {
  const layer = {
    id: `thumb-${def.id}`, name: def.label, kind: "finance" as const,
    x: 50, y: 50, w: 95, h: 95, rot: 0, opacity: 100, visible: true, locked: false,
    animation: "none" as const, animSpeed: 1, objectId: def.id, primary: def.primary, secondary: def.secondary,
  };
  return <LayerArt layer={layer} W={100} H={100} time={0} prefix={`ft-${def.id}`} />;
}

function IconShape({ shape }: { shape: ShapeKind }) {
  if (shape === "star") return <polygon points="0,-30 9,-9 32,-9 14,6 20,28 0,15 -20,28 -14,6 -32,-9 -9,-9" fill="#FFFFFF" opacity="0.95" />;
  if (shape === "heart") return <path d="M 0 28 C -35 5 -28 -25 0 -12 C 28 -25 35 5 0 28 Z" fill="#FFFFFF" opacity="0.95" />;
  if (shape === "triangle") return <polygon points="0,-30 30,25 -30,25" fill="#FFFFFF" opacity="0.95" />;
  if (shape === "arrow") return <path d="M -30 -8 L 5 -8 L 5 -25 L 32 0 L 5 25 L 5 8 L -30 8 Z" fill="#FFFFFF" opacity="0.95" />;
  if (shape === "rect") return <rect x="-25" y="-18" width="50" height="36" rx="6" fill="#FFFFFF" opacity="0.95" />;
  if (shape === "pill") return <rect x="-32" y="-15" width="64" height="30" rx="15" fill="#FFFFFF" opacity="0.95" />;
  return <circle cx="0" cy="0" r="22" fill="#FFFFFF" opacity="0.95" />;
}

export const LeftDock = memo(LeftDockImpl);
