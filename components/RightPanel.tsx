"use client";

import { memo, useState } from "react";
import type { ChangeEvent, CSSProperties } from "react";
import { CANVAS_SIZES, GRADIENTS } from "@/lib/presets";
import { ENTRANCE_ANIMATIONS, EXIT_ANIMATIONS, normalizeTextAnim } from "@/lib/textAnimation";
import type {
  AnimationName, Background, Layer, Project, RightMode, ShapeKind, TextAnimName, TextAnimationConfig, TextLayer,
} from "@/lib/types";
import {
  Button, ColorField, ColorGrid, FileInput, Icon, NumberField, PillTabs, Section,
  SelectField, Slider, TextField, Toggle,
} from "./ui";

const ANIMATIONS: { value: AnimationName; label: string }[] = [
  { value: "none", label: "None" },
  { value: "walk", label: "🚶 Walk / चलना" },
  { value: "wave", label: "👋 Wave / हिलाना" },
  { value: "jump", label: "🦘 Jump / कूदना" },
  { value: "talk", label: "🗣️ Talk / बोलना" },
  { value: "float", label: "🎈 Float / तैरना" },
  { value: "pulse", label: "💓 Pulse / धड़कना" },
  { value: "spin", label: "🔄 Spin / घूमना" },
  { value: "wiggle", label: "〰️ Wiggle" },
  { value: "blink", label: "👁️ Blink" },
];

const TEXT_ANIMATIONS: { value: TextAnimName; label: string }[] = [
  { value: "popIn", label: "⬆️ Pop-In" },
  { value: "typewriter", label: "⌨️ Typewriter" },
  { value: "slideLeft", label: "⬅️ Slide Left" },
  { value: "slideRight", label: "➡️ Slide Right" },
  { value: "slideDown", label: "⬇️ Slide Down" },
  { value: "zoomIn", label: "🔍 Zoom In" },
  { value: "fadeIn", label: "✨ Fade In" },
  { value: "bounce", label: "💥 Bounce" },
  { value: "rainbow", label: "🌈 Rainbow" },
  { value: "shake", label: "📳 Shake" },
  { value: "fireGlow", label: "🔥 Fire Glow" },
  { value: "highlight", label: "📢 Highlight" },
  { value: "letterPop", label: "🔤 Letter Pop" },
  { value: "wave", label: "↔️ Wave" },
  { value: "kinetic", label: "🎯 Kinetic" },
];

const ANIM_CLASS: Record<string, string> = {
  popIn: "ta-popIn", typewriter: "ta-typewriter", slideLeft: "ta-slideLeft",
  slideRight: "ta-slideRight", slideDown: "ta-slideDown", zoomIn: "ta-zoomIn",
  fadeIn: "ta-fadeIn", bounce: "ta-bounce", rainbow: "ta-rainbow", shake: "ta-shake",
  fireGlow: "ta-fireGlow", highlight: "ta-highlight", letterPop: "ta-letterPop",
  wave: "ta-wave", kinetic: "ta-kinetic", fadeOut: "ta-fadeOut",
};

export interface RightPanelProps {
  mode: RightMode;
  layer: Layer | null;
  background: Background;
  scene: { name: string; duration: number };
  project: Project;
  onMode: (mode: RightMode) => void;
  onBackground: (patch: Partial<Background>) => void;
  onLayer: (patch: Partial<Layer>) => void;
  onCanvas: (patch: Partial<Pick<Project, "name" | "fps" | "fourK">>) => void;
  onCustomSize: (width: number, height: number) => void;
  onScene: (patch: { name?: string; duration?: number }) => void;
  onApplyBackground: (name: string) => void;
  onDeleteLayer: () => void;
  onDuplicateLayer: () => void;
  onCloseMobile: () => void;
  onPreviewAnimation: () => void;
}

function RightPanelImpl(props: RightPanelProps) {
  const { mode, layer, project, onMode } = props;
  const title = mode === "layer" && layer ? `${kindIcon(layer.kind)} ${layer.name}` : mode === "background" ? "🎨 Background Settings" : "⚙️ Canvas Settings";
  const subtitle = mode === "layer" && layer ? "Layer controls • लेयर सेटिंग्स" : mode === "background" ? "बैकग्राउंड ka Color aur Style" : "Size Badlo • कैनवास सेटिंग्स";

  return (
    <aside className="relative flex h-full w-[320px] shrink-0 flex-col border-l border-line bg-[#17171c]">
      <div className="flex h-[58px] shrink-0 items-center justify-between border-b border-line px-4">
        <div className="min-w-0">
          <h2 className="truncate text-[13px] font-semibold text-zinc-100">{title}</h2>
          <p className="truncate text-[9px] text-zinc-500">{subtitle}</p>
        </div>
        <button type="button" onClick={props.onCloseMobile} className="rounded-md p-1 text-zinc-500 hover:bg-white/5 hover:text-white lg:hidden"><Icon name="close" size={16} /></button>
      </div>

      <div className="flex shrink-0 gap-1 border-b border-line bg-[#141419] p-2">
        {(["canvas", "background", "layer"] as RightMode[]).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => onMode(m)}
            disabled={m === "layer" && !layer}
            className={`flex-1 rounded-md py-1.5 text-[10px] font-medium transition disabled:opacity-30 ${mode === m ? "bg-brand text-white" : "bg-panel2 text-zinc-500 hover:text-zinc-200"}`}
          >
            {m === "canvas" ? "Canvas" : m === "background" ? "Background" : "Layer"}
          </button>
        ))}
      </div>

      <div className="scroll-thin flex-1 overflow-y-auto">
        {mode === "canvas" && <CanvasControls key={`${project.size.width}-${project.size.height}`} {...props} />}
        {mode === "background" && <BackgroundControls {...props} />}
        {mode === "layer" && layer && <LayerControls {...props} layer={layer} />}
        {mode === "layer" && !layer && (
          <div className="p-6 text-center text-[11px] leading-relaxed text-zinc-500">
            Canvas par koi bhi layer select karo. Controls yahan dikhenge.
          </div>
        )}
      </div>
    </aside>
  );
}

function kindIcon(kind: Layer["kind"]) {
  return { text: "📝", character: "👤", finance: "💰", image: "🖼️", shape: "🔷" }[kind];
}

function CanvasControls({ project, scene, onCanvas, onCustomSize, onScene, onMode }: RightPanelProps) {
  const [w, setW] = useState(project.size.width);
  const [h, setH] = useState(project.size.height);

  const applyCustom = () => onCustomSize(w, h);
  const known = CANVAS_SIZES.find((s) => s.width === project.size.width && s.height === project.size.height);

  return (
    <>
      <Section title="Project" hint="Naam aur basic settings">
        <TextField label="Project Name" value={project.name} onChange={(v) => onCanvas({ name: v })} />
        <div className="mt-2 grid grid-cols-2 gap-2">
          <NumberField label="Width (px)" value={w} min={200} max={6000} onChange={setW} />
          <NumberField label="Height (px)" value={h} min={200} max={6000} onChange={setH} />
        </div>
        <Button className="mt-1 w-full" onClick={applyCustom}><Icon name="check" size={13} /> Size Badlo • Apply</Button>
        <div className="mt-2 rounded-lg border border-line bg-panel2 px-2.5 py-2 font-mono text-[10px] text-zinc-400">
          {known?.name ?? "Custom"} • {project.size.width} × {project.size.height} • {project.size.ratio}
        </div>
      </Section>

      <Section title="Quality & Playback" hint="4K vector-ready export">
        <Toggle label="4K Ready Export" hint="3840px max dimension" checked={project.fourK} onChange={(v) => onCanvas({ fourK: v })} />
        <SelectField label="Frame Rate" value={String(project.fps)} options={[{ value: "30", label: "30 FPS • Smooth" }, { value: "60", label: "60 FPS • Premium" }]} onChange={(v) => onCanvas({ fps: Number(v) })} />
      </Section>

      <Section title="Active Scene" hint="Is scene ki settings">
        <TextField label="Scene Name" value={scene.name} onChange={(v) => onScene({ name: v })} />
        <Slider label="Duration" sub="seconds" value={scene.duration} min={1} max={60} suffix="s" onChange={(v) => onScene({ duration: v })} />
      </Section>

      <Section title="Quick Actions" hint="Ek click me sab kuch">
        <Button variant="outline" className="mb-2 w-full" onClick={() => onMode("background")}><Icon name="backgrounds" size={13} /> Background Settings Kholo</Button>
        <div className="rounded-lg border border-brand/25 bg-brand/10 p-2.5 text-[10px] leading-relaxed text-zinc-400">
          <span className="font-semibold text-brand2">Tip:</span> Canvas par layer select karke uska color, size aur animation yahin se badlo. Sab changes live hote hain.
        </div>
      </Section>
    </>
  );
}

function BackgroundControls({ background, onBackground, onApplyBackground }: RightPanelProps) {
  const update = (patch: Partial<Background>, notify = false) => {
    onBackground(patch);
    if (notify) onApplyBackground("Background Applied");
  };

  return <BackgroundControlsInner current={background} update={update} />;
}

function BackgroundControlsInner({
  current,
  update,
}: {
  current: Background;
  update: (patch: Partial<Background>, notify?: boolean) => void;
}) {
  const g = current.gradient;
  const img = current.image;
  const pat = current.pattern;

  const setType = (type: Background["type"]) => update({ type });

  const readFile = (file: File, cb: (data: string) => void) => {
    const reader = new FileReader();
    reader.onload = () => cb(String(reader.result ?? ""));
    reader.readAsDataURL(file);
  };

  return (
    <>
      <div className="border-b border-line p-3">
        <PillTabs
          value={current.type}
          options={[
            { value: "solid", label: "Solid" },
            { value: "gradient", label: "Gradient" },
            { value: "image", label: "Image" },
            { value: "pattern", label: "Pattern" },
            { value: "video", label: "Video" },
          ]}
          onChange={setType}
        />
        <p className="text-[9px] text-zinc-600">Background Type • {current.type.toUpperCase()}</p>
      </div>

      {current.type === "solid" && (
        <>
          <Section title="Background ka Color" hint="Solid color picker + hex">
            <div className="mb-3 flex items-center gap-3 rounded-lg border border-line bg-panel2 p-2">
              <input type="color" value={/^#[0-9a-fA-F]{6}$/.test(current.color) ? current.color : "#000000"} onChange={(e) => update({ color: e.target.value })} className="h-12 w-14" aria-label="Background color" />
              <div className="flex-1">
                <span className="mb-1 block text-[9px] uppercase tracking-wide text-zinc-500">Hex Color</span>
                <input value={current.color} onChange={(e) => update({ color: e.target.value })} className="w-full rounded-md border border-line bg-[#111117] px-2 py-1.5 font-mono text-[12px] text-zinc-200 outline-none focus:border-brand" />
              </div>
            </div>
            <ColorGrid value={current.color} onChange={(color) => update({ color })} />
          </Section>
          <Section title="Opacity" hint="0% se 100%">
            <Slider label="Background Opacity" value={current.opacity} onChange={(v) => update({ opacity: v })} suffix="%" />
            <Button className="w-full" onClick={() => update({}, true)}><Icon name="check" size={13} /> Apply to Canvas</Button>
          </Section>
        </>
      )}

      {current.type === "gradient" && (
        <>
          <Section title="Gradient Colors" hint="2 colors + direction">
            <ColorField label="Color 1" value={g.from} onChange={(from) => update({ gradient: { ...g, from } })} />
            <ColorField label="Color 2" value={g.to} onChange={(to) => update({ gradient: { ...g, to } })} />
            <SelectField
              label="Direction"
              value={g.direction}
              options={[
                { value: "top-bottom", label: "Top to Bottom" },
                { value: "left-right", label: "Left to Right" },
                { value: "diagonal", label: "Diagonal" },
                { value: "radial", label: "Radial" },
              ]}
              onChange={(direction) => update({ gradient: { ...g, direction } })}
            />
          </Section>
          <Section title="15 Preset Gradients" hint="Click karke apply karo">
            <div className="grid grid-cols-3 gap-1.5">
              {GRADIENTS.map((item) => (
                <button key={item.name} type="button" title={item.name} onClick={() => update({ gradient: { ...g, from: item.from, to: item.to } }, true)} className="overflow-hidden rounded-md border border-line transition hover:scale-105 hover:border-brand">
                  <span className="block h-9" style={{ background: `linear-gradient(135deg, ${item.from}, ${item.to})` }} />
                  <span className="block truncate bg-panel2 py-1 text-[8px] text-zinc-400">{item.name}</span>
                </button>
              ))}
            </div>
          </Section>
          <Section title="Animation" hint="Animated gradient speed">
            <Toggle label="Animate Gradient" hint="requestAnimationFrame" checked={g.animated} onChange={(animated) => update({ gradient: { ...g, animated } })} />
            <Slider label="Intensity" value={g.intensity} onChange={(v) => update({ gradient: { ...g, intensity: v } })} suffix="%" />
            <Slider label="Speed" value={g.speed} onChange={(v) => update({ gradient: { ...g, speed: v } })} suffix="%" />
            <Button className="w-full" onClick={() => update({}, true)}><Icon name="check" size={13} /> Apply to Canvas</Button>
          </Section>
        </>
      )}

      {current.type === "image" && (
        <>
          <Section title="Photo Add Karo" hint="JPG / PNG from laptop">
            <FileInput label="Upload Image" accept="image/*" onFile={(file) => readFile(file, (src) => update({ image: { ...img, src, name: file.name } }, true))} />
            {img.src && (
              <div className="mt-3 overflow-hidden rounded-lg border border-line">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.src} alt={img.name || "Background preview"} className="h-28 w-full object-cover" />
                <div className="truncate bg-panel2 px-2 py-1 text-[9px] text-zinc-500">{img.name || "Uploaded image"}</div>
              </div>
            )}
            <div className="mt-3 flex items-end gap-2">
              <div className="flex-1"><TextField label="URL se Image" value={img.name.startsWith("http") ? img.name : ""} onChange={(name) => update({ image: { ...img, name } })} placeholder="https://... ya data:image/..." mono /></div>
              <Button className="mb-2" onClick={() => update({ image: { ...img, src: img.name } }, true)}>Add</Button>
            </div>
          </Section>
          <Section title="Image Effects" hint="Live preview">
            <Slider label="Blur" value={img.blur} min={0} max={20} suffix="px" onChange={(v) => update({ image: { ...img, blur: v } })} />
            <Slider label="Brightness" value={img.brightness} min={0} max={200} suffix="%" onChange={(v) => update({ image: { ...img, brightness: v } })} />
            <Slider label="Opacity" value={img.opacity} onChange={(v) => update({ image: { ...img, opacity: v } })} suffix="%" />
            <SelectField label="Fit" value={img.fit} options={[{ value: "cover", label: "Cover" }, { value: "contain", label: "Contain" }, { value: "fill", label: "Fill" }]} onChange={(v) => update({ image: { ...img, fit: v } })} />
            <SelectField label="Position" value={img.position} options={[{ value: "center", label: "Center" }, { value: "top", label: "Top" }, { value: "bottom", label: "Bottom" }]} onChange={(v) => update({ image: { ...img, position: v } })} />
            <Button variant="danger" className="w-full" onClick={() => update({ image: { ...img, src: "", name: "" } }, true)}><Icon name="trash" size={13} /> Remove Image</Button>
          </Section>
        </>
      )}

      {current.type === "pattern" && (
        <>
          <Section title="Pattern / Animated" hint="Dots, Waves, Neon, Particles">
            <PillTabs
              value={pat.kind}
              options={[
                { value: "dots", label: "Dots" }, { value: "waves", label: "Waves" }, { value: "neon", label: "Neon" },
                { value: "particles", label: "Particles" }, { value: "grid", label: "Grid" }, { value: "rings", label: "Rings" },
              ]}
              onChange={(kind) => update({ pattern: { ...pat, kind } }, true)}
            />
            <ColorField label={pat.kind === "neon" ? "Glow Color" : "Pattern Color"} value={pat.color} onChange={(color) => update({ pattern: { ...pat, color } })} />
            <ColorField label="Accent / Background" value={pat.accent} onChange={(accent) => update({ pattern: { ...pat, accent } })} />
          </Section>
          <Section title="Motion Settings" hint="Speed aur size">
            <Slider label={pat.kind === "dots" ? "Dot Size" : "Element Size"} value={pat.size} min={2} max={40} onChange={(v) => update({ pattern: { ...pat, size: v } })} />
            <Slider label={pat.kind === "dots" ? "Gap" : "Spacing"} value={pat.gap} min={16} max={120} onChange={(v) => update({ pattern: { ...pat, gap: v } })} />
            <Slider label="Speed" value={pat.speed} onChange={(v) => update({ pattern: { ...pat, speed: v } })} suffix="%" />
            {pat.kind === "particles" && <Slider label="Particle Count" value={pat.count} min={8} max={120} onChange={(v) => update({ pattern: { ...pat, count: v } })} />}
            <Button className="w-full" onClick={() => update({}, true)}><Icon name="check" size={13} /> Apply to Canvas</Button>
          </Section>
        </>
      )}

      {current.type === "video" && (
        <Section title="Video Background" hint="Optional • loop ON/OFF">
          <FileInput label="Upload Video" accept="video/*" onFile={(file) => {
            const src = URL.createObjectURL(file);
            update({ video: { ...current.video, src, name: file.name } }, true);
          }} />
          <div className="mt-3 rounded-lg border border-line bg-panel2 p-2 text-[10px] text-zinc-500">{current.video.name || "No video selected"}</div>
          <div className="mt-3">
            <Toggle label="Loop Video" checked={current.video.loop} onChange={(loop) => update({ video: { ...current.video, loop } })} />
            <Toggle label="Playing" checked={current.video.playing} onChange={(playing) => update({ video: { ...current.video, playing } })} />
          </div>
          <Button variant="danger" className="w-full" onClick={() => update({ video: { ...current.video, src: "", name: "" } }, true)}><Icon name="trash" size={13} /> Remove Video</Button>
        </Section>
      )}

      <Section title="Preset Colors" hint="Quick pick">
        <ColorGrid value={current.color} onChange={(color) => update({ color })} />
      </Section>
    </>
  );
}

function LayerControls({ layer, onLayer, onDeleteLayer, onDuplicateLayer, onPreviewAnimation }: RightPanelProps & { layer: Layer }) {
  const patch = (p: Partial<Layer>) => onLayer(p);
  return (
    <>
      <Section title="Position & Size" hint="% me stored, har size par fit">
        <div className="grid grid-cols-2 gap-2">
          <NumberField label="X (%)" value={layer.x} min={0} max={100} onChange={(x) => patch({ x })} />
          <NumberField label="Y (%)" value={layer.y} min={0} max={100} onChange={(y) => patch({ y })} />
          <NumberField label="Width (%)" value={layer.w} min={3} max={100} onChange={(w) => patch({ w })} />
          <NumberField label="Height (%)" value={layer.h} min={3} max={100} onChange={(h) => patch({ h })} />
        </div>
        <Slider label="Rotation" value={layer.rot} min={-180} max={180} suffix="°" onChange={(rot) => patch({ rot })} />
        <Slider label="Opacity" value={layer.opacity} onChange={(v) => patch({ opacity: v })} suffix="%" />
        <div className="flex gap-2">
          <Toggle label="Visible" checked={layer.visible} onChange={(visible) => patch({ visible })} />
          <Toggle label="Lock" checked={layer.locked} onChange={(locked) => patch({ locked })} />
        </div>
      </Section>

      {layer.kind === "text" && <TextControls layer={layer} patch={patch} onPreview={onPreviewAnimation} />}
      {layer.kind === "character" && (
        <Section title="Character" hint="Hand-designed SVG">
          <ColorField label="Skin Color" value={layer.skin} onChange={(skin) => patch({ skin })} />
          <ColorField label="Shirt Color" value={layer.shirt} onChange={(shirt) => patch({ shirt })} />
          <ColorField label="Hair Color" value={layer.hair} onChange={(hair) => patch({ hair })} />
          <SelectField label="Accessory" value={layer.accessory} options={[
            { value: "none", label: "None" }, { value: "moustache", label: "Moustache" }, { value: "glasses-beard", label: "Glasses + Beard" },
            { value: "bindi", label: "Bindi" }, { value: "tie", label: "Tie" }, { value: "cap", label: "Cap" },
            { value: "turban", label: "Turban" }, { value: "dupatta", label: "Dupatta" }, { value: "glasses-bun", label: "Glasses + Bun" },
          ]} onChange={(accessory) => patch({ accessory })} />
        </Section>
      )}
      {layer.kind === "finance" && (
        <Section title="Finance Object" hint="Pure vector, 4K sharp">
          <ColorField label="Primary Color" value={layer.primary} onChange={(primary) => patch({ primary })} />
          <ColorField label="Secondary Color" value={layer.secondary} onChange={(secondary) => patch({ secondary })} />
        </Section>
      )}
      {layer.kind === "image" && <ImageControls layer={layer} patch={patch} />}
      {layer.kind === "shape" && (
        <Section title="Shape" hint="Fill, border aur style">
          <SelectField label="Shape" value={layer.shape} options={(["rect", "circle", "triangle", "line", "arrow", "star", "heart", "pill"] as ShapeKind[]).map((s) => ({ value: s, label: s.toUpperCase() }))} onChange={(shape) => patch({ shape })} />
          <ColorField label="Fill Color" value={layer.fill} onChange={(fill) => patch({ fill })} />
          <ColorField label="Border Color" value={layer.stroke} onChange={(stroke) => patch({ stroke })} />
          <Slider label="Border Width" value={layer.strokeWidth} min={0} max={30} onChange={(strokeWidth) => patch({ strokeWidth })} />
          <Slider label="Corner Radius" value={layer.radius} min={0} max={100} onChange={(radius) => patch({ radius })} />
          <Toggle label="Gradient Fill" checked={layer.fillGradient.enabled} onChange={(enabled) => patch({ fillGradient: { ...layer.fillGradient, enabled } })} />
          {layer.fillGradient.enabled && (
            <>
              <ColorField label="Gradient From" value={layer.fillGradient.from} onChange={(from) => patch({ fillGradient: { ...layer.fillGradient, from } })} />
              <ColorField label="Gradient To" value={layer.fillGradient.to} onChange={(to) => patch({ fillGradient: { ...layer.fillGradient, to } })} />
            </>
          )}
        </Section>
      )}

      <Section title="Animation" hint="Preview me dekho">
        <SelectField label="Animation" value={layer.animation} options={ANIMATIONS} onChange={(animation) => patch({ animation })} />
        <Slider label="Speed" value={layer.animSpeed} min={0.2} max={3} step={0.1} suffix="x" onChange={(animSpeed) => patch({ animSpeed })} />
      </Section>

      <Section title="Layer Actions">
        <div className="flex gap-2">
          <Button variant="outline" className="flex-1" onClick={onDuplicateLayer}><Icon name="copy" size={13} /> Duplicate</Button>
          <Button variant="danger" className="flex-1" onClick={onDeleteLayer}><Icon name="trash" size={13} /> Delete</Button>
        </div>
      </Section>
    </>
  );
}

function TextControls({ layer, patch, onPreview }: { layer: TextLayer; patch: (p: Partial<Layer>) => void; onPreview: () => void }) {
  const [previewNonce, setPreviewNonce] = useState(0);
  const cfg = normalizeTextAnim(layer.textAnim);
  const setAnim = (next: Partial<TextAnimationConfig>) => patch({ textAnim: { ...cfg, ...next } });
  const animName: TextAnimName = cfg.animation === "none" ? (cfg.secondary ?? "popIn") : cfg.animation;
  const previewStyle = {
    "--ta-duration": `${cfg.duration}s`,
    "--ta-delay": `${cfg.delay}s`,
    "--ta-loop": cfg.loop ? "infinite" : "1",
  } as CSSProperties;
  const previewText = layer.text.replace(/\n/g, " ").slice(0, 26) || "Apna Text";
  const previewLetters = ["letterPop", "wave", "kinetic"].includes(animName)
    ? Array.from(previewText).map((char, i) => (
        <span key={`${i}-${char}`} style={{ ["--ta-stagger" as string]: `${i * 0.06}s` }}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))
    : null;

  return (
    <>
      <Section title="Text Content" hint="Hindi + English likho">
        <textarea
          value={layer.text}
          onChange={(e) => patch({ text: e.target.value })}
          rows={3}
          className="w-full resize-none rounded-lg border border-line bg-panel2 p-2 text-[12px] text-zinc-200 outline-none focus:border-brand"
        />
      </Section>
      <Section title="Typography" hint="Font, size, style">
        <SelectField label="Font Family" value={layer.font} options={[
          { value: "sans", label: "Modern Sans" }, { value: "display", label: "Bold Display" },
          { value: "serif", label: "Classic Serif" }, { value: "mono", label: "Mono" }, { value: "rounded", label: "Rounded" },
        ]} onChange={(font) => patch({ font })} />
        <Slider label="Font Size" value={layer.size} min={1} max={20} step={0.1} onChange={(size) => patch({ size })} />
        <Slider label="Font Weight" value={layer.weight} min={100} max={900} step={100} onChange={(weight) => patch({ weight })} />
        <Slider label="Line Height" value={layer.lineHeight} min={0.8} max={2} step={0.05} onChange={(lineHeight) => patch({ lineHeight })} />
        <Slider label="Letter Spacing" value={layer.letterSpacing} min={-5} max={20} step={0.5} onChange={(letterSpacing) => patch({ letterSpacing })} />
        <div className="flex gap-2">
          <Toggle label="Bold" checked={layer.weight >= 700} onChange={(v) => patch({ weight: v ? 800 : 400 })} />
          <Toggle label="Italic" checked={layer.italic} onChange={(italic) => patch({ italic })} />
        </div>
        <PillTabs value={layer.align} options={[{ value: "left", label: "Left" }, { value: "center", label: "Center" }, { value: "right", label: "Right" }]} onChange={(align) => patch({ align })} />
      </Section>
      <Section title="Color & Effects" hint="Gradient text, border, glow">
        <ColorField label="Text Color" value={layer.color} onChange={(color) => patch({ color })} />
        <Toggle label="Gradient Text" checked={layer.gradient.enabled} onChange={(enabled) => patch({ gradient: { ...layer.gradient, enabled } })} />
        {layer.gradient.enabled && (
          <div className="grid grid-cols-2 gap-2">
            <ColorField label="From" value={layer.gradient.from} onChange={(from) => patch({ gradient: { ...layer.gradient, from } })} compact />
            <ColorField label="To" value={layer.gradient.to} onChange={(to) => patch({ gradient: { ...layer.gradient, to } })} compact />
          </div>
        )}
        <Toggle label="Border / Outline" checked={layer.border.enabled} onChange={(enabled) => patch({ border: { ...layer.border, enabled } })} />
        {layer.border.enabled && <ColorField label="Border Color" value={layer.border.color} onChange={(color) => patch({ border: { ...layer.border, color } })} />}
        {layer.border.enabled && <Slider label="Border Width" value={layer.border.width} min={1} max={20} onChange={(width) => patch({ border: { ...layer.border, width } })} />}
        <Toggle label="Shadow" checked={layer.shadow.enabled} onChange={(enabled) => patch({ shadow: { ...layer.shadow, enabled } })} />
        {layer.shadow.enabled && <Slider label="Shadow Blur" value={layer.shadow.blur} min={0} max={60} onChange={(blur) => patch({ shadow: { ...layer.shadow, blur } })} />}
        <Toggle label="Glow" checked={layer.glow.enabled} onChange={(enabled) => patch({ glow: { ...layer.glow, enabled } })} />
        {layer.glow.enabled && <ColorField label="Glow Color" value={layer.glow.color} onChange={(color) => patch({ glow: { ...layer.glow, color } })} />}
        <Toggle label="Background Pill" checked={layer.pill.enabled} onChange={(enabled) => patch({ pill: { ...layer.pill, enabled } })} />
        {layer.pill.enabled && <ColorField label="Pill Color" value={layer.pill.color} onChange={(color) => patch({ pill: { ...layer.pill, color } })} />}
      </Section>

      <Section title="✨ Text Animation" hint="Video me kaise aayega?">
        <p className="mb-2 text-[10px] font-semibold text-brand2">Text Animation - Video me kaise aayega?</p>
        <div className="grid grid-cols-2 gap-1.5">
          {TEXT_ANIMATIONS.map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() => { setAnim({ animation: item.value }); onPreview(); }}
              className={`rounded-md border px-1.5 py-2 text-[10px] font-medium transition ${cfg.animation === item.value ? "border-brand bg-brand/20 text-white" : "border-line bg-panel2 text-zinc-400 hover:border-brand/50 hover:text-white"}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="mt-3 rounded-lg border border-line bg-[#111117] p-2.5">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[9px] font-semibold uppercase tracking-widest text-zinc-500">Live Preview</span>
            <span className="font-mono text-[9px] text-brand2">{animName} • {cfg.duration}s</span>
          </div>
          <div className="flex h-12 items-center justify-center overflow-hidden rounded-md bg-[#0b0b10] px-2 text-center text-[13px] font-bold text-white">
            <span
              key={previewNonce}
              className={`ta-preview ${ANIM_CLASS[animName] ?? "ta-popIn"} ${["letterPop", "wave", "kinetic"].includes(animName) ? `ta-${animName}` : ""}`}
              style={previewStyle}
            >
              {previewLetters ?? previewText}
            </span>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-[1fr_auto] items-end gap-2">
          <SelectField
            label="Animation"
            value={cfg.animation}
            options={[{ value: "none" as TextAnimName, label: "None" }, ...TEXT_ANIMATIONS]}
            onChange={(animation) => { setAnim({ animation }); onPreview(); }}
          />
          <Button
            className="mb-2 h-[38px] px-2"
            onClick={() => {
              setPreviewNonce((n) => n + 1);
              onPreview();
            }}
          >
            ▶️ Preview Animation
          </Button>
        </div>

        <Slider label="Delay" sub="kab shuru ho" value={cfg.delay} min={0} max={3} step={0.1} suffix="s" onChange={(delay) => setAnim({ delay })} />
        <Slider label="Duration" sub="kitni der" value={cfg.duration} min={0.5} max={3} step={0.1} suffix="s" onChange={(duration) => setAnim({ duration })} />
        <Toggle label="Loop" hint="Ek baar ya baar baar" checked={cfg.loop} onChange={(loop) => setAnim({ loop })} />

        <div className="grid grid-cols-2 gap-2">
          <SelectField
            label="Entrance"
            value={cfg.animation}
            options={ENTRANCE_ANIMATIONS.map((a) => ({ value: a, label: TEXT_ANIMATIONS.find((t) => t.value === a)?.label ?? "None" }))}
            onChange={(animation) => { setAnim({ animation }); onPreview(); }}
          />
          <SelectField
            label="Exit"
            value={cfg.exit}
            options={EXIT_ANIMATIONS.map((a) => ({ value: a, label: a === "fadeOut" ? "✨ Fade Out" : TEXT_ANIMATIONS.find((t) => t.value === a)?.label ?? "None" }))}
            onChange={(exit) => setAnim({ exit })}
          />
        </div>

        <div className="mt-1 grid grid-cols-3 gap-1.5">
          {([
            { label: "🔥 Hook Text", config: { animation: "popIn" as TextAnimName, secondary: "shake" as TextAnimName, exit: "fadeOut" as TextAnimName } },
            { label: "💰 Money Text", config: { animation: "popIn" as TextAnimName, secondary: "rainbow" as TextAnimName, exit: "fadeOut" as TextAnimName } },
            { label: "😢 Sad Text", config: { animation: "fadeIn" as TextAnimName, secondary: "slideDown" as TextAnimName, exit: "fadeOut" as TextAnimName } },
          ]).map((preset) => (
            <button
              key={preset.label}
              type="button"
              onClick={() => { setAnim(preset.config); onPreview(); }}
              className="rounded-md border border-brand/30 bg-brand/10 px-1 py-2 text-[9px] font-medium text-brand2 transition hover:border-brand hover:text-white"
            >
              {preset.label}
            </button>
          ))}
        </div>
      </Section>
    </>
  );
}

function ImageControls({ layer, patch }: { layer: import("@/lib/types").ImageLayer; patch: (p: Partial<Layer>) => void }) {
  const readFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => patch({ src: String(reader.result ?? "") });
    reader.readAsDataURL(file);
    e.target.value = "";
  };
  return (
    <Section title="Image Layer" hint="Crop, filters, corners">
      <label className="mb-2 block">
        <span className="mb-1 block rounded-lg border border-line bg-panel2 px-2.5 py-2 text-center text-[11px] text-zinc-300 hover:border-brand">📤 Replace Image
          <input type="file" accept="image/*" hidden onChange={readFile} />
        </span>
      </label>
      <Slider label="Rounded Corners" value={layer.radius} min={0} max={100} onChange={(radius) => patch({ radius })} />
      <Slider label="Crop / Zoom" value={layer.crop} min={1} max={3} step={0.05} onChange={(crop) => patch({ crop })} suffix="x" />
      <Slider label="Grayscale" value={layer.grayscale * 100} onChange={(v) => patch({ grayscale: v / 100 })} suffix="%" />
      <Slider label="Blur" value={layer.blur} min={0} max={20} onChange={(blur) => patch({ blur })} />
      <Slider label="Brightness" value={layer.brightness} min={0} max={200} onChange={(brightness) => patch({ brightness })} suffix="%" />
      <Slider label="Contrast" value={layer.contrast} min={0} max={200} onChange={(contrast) => patch({ contrast })} suffix="%" />
      <SelectField label="Fit" value={layer.fit} options={[{ value: "cover", label: "Cover" }, { value: "contain", label: "Contain" }, { value: "fill", label: "Fill" }]} onChange={(fit) => patch({ fit })} />
      <Toggle label="Flip Horizontally" checked={layer.flipX} onChange={(flipX) => patch({ flipX })} />
    </Section>
  );
}

export const RightPanel = memo(RightPanelImpl);
