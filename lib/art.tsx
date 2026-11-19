import { financeKind, findCharacter } from "./presets";
import type {
  Background,
  CharacterLayer,
  FinanceLayer,
  ImageLayer,
  Layer,
  Scene,
  ShapeLayer,
  TextLayer,
} from "./types";
import { clamp, mixColors, seededRandom } from "./utils";

interface ArtProps {
  W: number;
  H: number;
  time: number;
  prefix: string;
}

const FONT_STACK: Record<TextLayer["font"], string> = {
  sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  display: '"Arial Black", "Helvetica Neue", Impact, sans-serif',
  serif: 'Georgia, "Times New Roman", serif',
  mono: '"SFMono-Regular", Consolas, "Liberation Mono", monospace',
  rounded: '"Trebuchet MS", "Segoe UI", sans-serif',
};

export function BackgroundArt({ bg, W, H, time, prefix }: ArtProps & { bg: Background }) {
  const p = bg.pattern;
  const g = bg.gradient;
  const phase = time * 0.001 * (g.speed / 50);
  const shift = Math.sin(phase * 1.2) * 0.28;

  const gradientCoords =
    g.direction === "left-right"
      ? { x1: "0%", y1: "0%", x2: "100%", y2: "0%" }
      : g.direction === "diagonal"
        ? { x1: "0%", y1: "0%", x2: "100%", y2: "100%" }
        : { x1: "0%", y1: "0%", x2: "0%", y2: "100%" };

  return (
    <g>
      <defs>
        <linearGradient id={`${prefix}-bgrad`} {...gradientCoords} spreadMethod="reflect">
          <stop offset="0%" stopColor={g.from} />
          <stop offset="100%" stopColor={g.to} />
        </linearGradient>
        <radialGradient id={`${prefix}-bradial`} cx="50%" cy="45%" r="70%">
          <stop offset="0%" stopColor={g.from} />
          <stop offset="100%" stopColor={g.to} />
        </radialGradient>
        <filter id={`${prefix}-bblur`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation={bg.image.blur} />
          <feComponentTransfer>
            <feFuncR type="linear" slope={bg.image.brightness / 100} />
            <feFuncG type="linear" slope={bg.image.brightness / 100} />
            <feFuncB type="linear" slope={bg.image.brightness / 100} />
          </feComponentTransfer>
        </filter>
        <filter id={`${prefix}-glow`} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation={W * 0.012} result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width={W} height={H} fill="#050508" />

      {bg.type === "solid" && (
        <rect width={W} height={H} fill={bg.color} opacity={bg.opacity / 100} />
      )}

      {bg.type === "gradient" && (
        <>
          {g.direction === "radial" ? (
            <rect
              width={W}
              height={H}
              fill={`url(#${prefix}-bradial)`}
              opacity={g.intensity / 100}
              transform={g.animated ? `translate(${shift * W * 0.2} ${shift * H * 0.2}) scale(${1 + Math.abs(shift) * 0.25})` : undefined}
            />
          ) : (
            <rect
              width={W}
              height={H}
              fill={`url(#${prefix}-bgrad)`}
              opacity={g.intensity / 100}
              transform={g.animated ? `translate(${shift * W} ${shift * H * 0.2})` : undefined}
            />
          )}
          {g.animated && (
            <rect width={W} height={H} fill={`url(#${prefix}-bradial)`} opacity={Math.abs(shift) * 0.3} />
          )}
        </>
      )}

      {bg.type === "image" && bg.image.src && (
        <image
          href={bg.image.src}
          x={0}
          y={bg.image.position === "top" ? -H * 0.04 : bg.image.position === "bottom" ? H * 0.04 : 0}
          width={W}
          height={H}
          preserveAspectRatio={
            bg.image.fit === "cover"
              ? `xMidY${bg.image.position === "top" ? "Min" : bg.image.position === "bottom" ? "Max" : "Mid"} slice`
              : bg.image.fit === "contain"
                ? "xMidYMid meet"
                : "none"
          }
          opacity={bg.image.opacity / 100}
          filter={bg.image.blur > 0 || bg.image.brightness !== 100 ? `url(#${prefix}-bblur)` : undefined}
        />
      )}

      {bg.type === "pattern" && (
        <PatternArt W={W} H={H} time={time} prefix={prefix} bg={bg} />
      )}

      {bg.type === "video" && (
        <rect width={W} height={H} fill={mixColors(p.color, p.accent, 0.45 + Math.sin(time * 0.002) * 0.1)} />
      )}

      {bg.type !== "solid" && bg.opacity < 100 && (
        <rect width={W} height={H} fill="#000000" opacity={1 - bg.opacity / 100} pointerEvents="none" />
      )}
    </g>
  );
}

function PatternArt({ bg, W, H, time, prefix }: ArtProps & { bg: Background }) {
  const p = bg.pattern;
  const speed = p.speed / 50;
  const t = time * 0.001 * speed;
  const gap = Math.max(p.gap, 24);
  const color = p.color;
  const accent = p.accent;

  if (p.kind === "dots") {
    const dots = [];
    const cols = Math.ceil(W / gap);
    const rows = Math.ceil(H / gap);
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const idx = row * cols + col;
        const wave = (Math.sin(t * 2 + idx * 0.35) + 1) / 2;
        dots.push(
          <circle
            key={idx}
            cx={col * gap + gap / 2}
            cy={row * gap + gap / 2 + Math.sin(t + col * 0.4) * gap * 0.12}
            r={(p.size / 2) * (0.55 + wave * 0.7)}
            fill={idx % 5 === 0 ? accent : color}
            opacity={0.12 + wave * 0.35}
          />,
        );
      }
    }
    return <g>{dots}</g>;
  }

  if (p.kind === "waves") {
    const paths = [];
    for (let row = 0; row < 7; row++) {
      const baseY = (H * (row + 1)) / 8;
      let d = `M 0 ${baseY}`;
      for (let x = 0; x <= W + 40; x += 40) {
        const y = baseY + Math.sin((x / W) * Math.PI * 4 + t * 2 + row * 0.7) * (H * 0.018);
        d += ` L ${x} ${y}`;
      }
      paths.push(
        <path
          key={row}
          d={d}
          fill="none"
          stroke={row % 2 === 0 ? color : accent}
          strokeWidth={W * 0.0025}
          opacity={0.18 + (row % 3) * 0.12}
          strokeLinecap="round"
        />,
      );
    }
    return <g>{paths}</g>;
  }

  if (p.kind === "neon") {
    const lines = [];
    for (let i = 0; i < 6; i++) {
      const y = ((i + 0.5) * H) / 6 + Math.sin(t * 1.5 + i) * H * 0.02;
      const x = (seededRandom(i + 3) * W * 0.5 + t * W * 0.04) % (W * 1.2);
      lines.push(
        <g key={i} filter={`url(#${prefix}-glow)`}>
          <rect x={x - W * 0.2} y={y} width={W * (0.25 + seededRandom(i) * 0.3)} height={W * 0.004} rx={W * 0.002} fill={i % 2 ? color : accent} opacity={0.5 + Math.sin(t * 3 + i) * 0.25} />
          <circle cx={x + W * 0.1} cy={y} r={W * 0.006} fill="#FFFFFF" opacity={0.75} />
        </g>,
      );
    }
    return <g>{lines}</g>;
  }

  if (p.kind === "particles") {
    const dots = [];
    const count = Math.min(Math.max(p.count, 8), 120);
    for (let i = 0; i < count; i++) {
      const sx = seededRandom(i * 2 + 1);
      const sy = seededRandom(i * 2 + 2);
      const x = sx * W;
      const y = (sy * H + t * H * 0.02 * (0.4 + sx)) % H;
      const r = p.size * (0.4 + seededRandom(i + 9) * 0.9);
      dots.push(
        <circle key={i} cx={x} cy={y} r={r} fill={i % 4 === 0 ? accent : color} opacity={0.25 + seededRandom(i + 20) * 0.6} />,
      );
    }
    return <g>{dots}</g>;
  }

  if (p.kind === "grid") {
    const lines = [];
    for (let x = 0; x <= W; x += gap * 2) lines.push(<line key={`v${x}`} x1={x} y1={0} x2={x} y2={H} stroke={color} strokeWidth={W * 0.001} opacity={0.2} />);
    for (let y = 0; y <= H; y += gap * 2) lines.push(<line key={`h${y}`} x1={0} y1={y} x2={W} y2={y} stroke={color} strokeWidth={W * 0.001} opacity={0.2} />);
    return <g>{lines}</g>;
  }

  const rings = [];
  for (let i = 0; i < 8; i++) {
    const r = ((i * gap * 1.5 + t * 60) % (W * 0.9)) + W * 0.02;
    rings.push(<circle key={i} cx={W / 2} cy={H / 2} r={r} fill="none" stroke={i % 2 ? color : accent} strokeWidth={W * 0.002} opacity={0.3} />);
  }
  return <g>{rings}</g>;
}

function motionFor(layer: Layer, time: number, boxW: number, boxH: number) {
  const t = time * 0.001 * layer.animSpeed;
  let dy = 0;
  const dx = 0;
  let rot = 0;
  let scale = 1;
  switch (layer.animation) {
    case "walk":
      dy = -Math.abs(Math.sin(t * 8)) * boxH * 0.015;
      rot = Math.sin(t * 8) * 1.6;
      break;
    case "wave":
      dy = Math.sin(t * 3) * boxH * 0.008;
      rot = Math.sin(t * 8) * 2;
      break;
    case "jump":
      dy = -Math.abs(Math.sin(t * 4.5)) * boxH * 0.1;
      break;
    case "talk":
      dy = Math.sin(t * 12) * boxH * 0.008;
      rot = Math.sin(t * 6) * 1.2;
      break;
    case "float":
      dy = Math.sin(t * 2.2) * boxH * 0.035;
      break;
    case "pulse":
      scale = 1 + Math.sin(t * 5) * 0.045;
      break;
    case "spin":
      rot = t * 55;
      break;
    case "wiggle":
      rot = Math.sin(t * 7) * 6;
      break;
    default:
      break;
  }
  return { dx, dy, rot, scale };
}

export function LayerArt({
  layer,
  W,
  H,
  time,
  prefix,
}: ArtProps & { layer: Layer }) {
  const boxW = (layer.w / 100) * W;
  const boxH = (layer.h / 100) * H;
  const px = (layer.x / 100) * W;
  const py = (layer.y / 100) * H;
  const m = motionFor(layer, time, boxW, boxH);

  return (
    <g
      transform={`translate(${px + m.dx} ${py + m.dy}) rotate(${layer.rot + m.rot}) scale(${m.scale})`}
      opacity={layer.opacity / 100}
      style={{ pointerEvents: layer.visible ? "auto" : "none" }}
    >
      {layer.kind === "text" && <TextArt layer={layer} W={W} boxW={boxW} prefix={prefix} />}
      {layer.kind === "character" && <CharacterArt layer={layer} boxW={boxW} boxH={boxH} time={time} prefix={prefix} />}
      {layer.kind === "finance" && <FinanceArt layer={layer} boxW={boxW} boxH={boxH} time={time} prefix={prefix} />}
      {layer.kind === "image" && <ImageArt layer={layer} boxW={boxW} boxH={boxH} prefix={prefix} />}
      {layer.kind === "shape" && <ShapeArt layer={layer} boxW={boxW} boxH={boxH} prefix={prefix} />}
    </g>
  );
}

function TextArt({ layer, W, boxW, prefix }: { layer: TextLayer; W: number; boxW: number; prefix: string }) {
  const size = (layer.size / 100) * W;
  const lines = layer.text.split("\n");
  const longest = lines.reduce((a, b) => (b.length > a.length ? b : a), "");
  const approxWidth = longest.length * size * 0.56 + size * 0.4;
  const pillW = Math.min(boxW, approxWidth + (layer.pill.padding / 100) * W);
  const lineStep = size * layer.lineHeight;
  const totalH = lineStep * lines.length;
  const anchor = layer.align === "left" ? "start" : layer.align === "right" ? "end" : "middle";
  const textX = layer.align === "left" ? -boxW / 2 : layer.align === "right" ? boxW / 2 : 0;
  const firstY = -totalH / 2 + size * 0.86;

  return (
    <g>
      <defs>
        <linearGradient id={`${prefix}-txtgrad`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={layer.gradient.from} />
          <stop offset="100%" stopColor={layer.gradient.to} />
        </linearGradient>
        <filter id={`${prefix}-txtshadow`} x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx={layer.shadow.dx} dy={layer.shadow.dy} stdDeviation={layer.shadow.blur / 2} floodColor={layer.shadow.color} floodOpacity="0.8" />
        </filter>
        <filter id={`${prefix}-txtglow`} x="-70%" y="-70%" width="240%" height="240%">
          <feGaussianBlur stdDeviation={layer.glow.blur / 2} result="g" />
          <feMerge>
            <feMergeNode in="g" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {layer.pill.enabled && (
        <rect
          x={-pillW / 2}
          y={-totalH / 2 - size * 0.18}
          width={pillW}
          height={totalH + size * 0.36}
          rx={(totalH + size * 0.36) / 2}
          fill={layer.pill.color}
          opacity={layer.pill.opacity / 100}
        />
      )}
      <text
        x={textX}
        y={firstY}
        fill={layer.gradient.enabled ? `url(#${prefix}-txtgrad)` : layer.color}
        fontFamily={FONT_STACK[layer.font]}
        fontSize={size}
        fontWeight={layer.weight}
        fontStyle={layer.italic ? "italic" : "normal"}
        textAnchor={anchor}
        letterSpacing={(layer.letterSpacing / 100) * W}
        stroke={layer.border.enabled ? layer.border.color : "none"}
        strokeWidth={layer.border.enabled ? (layer.border.width / 1000) * W : 0}
        paintOrder="stroke"
        filter={
          layer.glow.enabled
            ? `url(#${prefix}-txtglow)`
            : layer.shadow.enabled
              ? `url(#${prefix}-txtshadow)`
              : undefined
        }
        style={{ userSelect: "none" }}
      >
        {lines.map((line, i) => (
          <tspan key={i} x={textX} dy={i === 0 ? 0 : lineStep}>
            {line}
          </tspan>
        ))}
      </text>
    </g>
  );
}

function CharacterArt({
  layer,
  boxW,
  boxH,
  time,
  prefix,
}: { layer: CharacterLayer; boxW: number; boxH: number; time: number; prefix: string }) {
  const def = findCharacter(layer.charId);
  const scale = Math.min(boxW / 110, boxH / 180);
  const t = time * 0.001 * layer.animSpeed;
  const animation = layer.animation;
  let legSwing = 0;
  let armSwing = 0;
  let waveAngle = 0;
  let mouthScale = 1;
  let eyeScale = 1;
  let bodyRot = 0;

  switch (animation) {
    case "walk":
      legSwing = Math.sin(t * 8) * 20;
      armSwing = -legSwing * 0.7;
      break;
    case "wave":
      waveAngle = -32 + Math.sin(t * 9) * 20;
      armSwing = 6;
      break;
    case "jump":
      legSwing = -14;
      armSwing = -32;
      break;
    case "talk":
      mouthScale = 0.5 + Math.abs(Math.sin(t * 12)) * 1.1;
      break;
    case "blink":
      eyeScale = Math.sin(t * 2) > 0.96 ? 0.12 : 1;
      break;
    case "wiggle":
      bodyRot = Math.sin(t * 7) * 6;
      break;
    default:
      break;
  }

  const hairBack = def.variant === 3 || def.variant === 4 || def.variant === 6 || def.variant === 8 || def.variant === 10;
  const skin = layer.skin;
  const shirt = layer.shirt;
  const hair = layer.hair;

  return (
    <g transform={`scale(${scale}) translate(-55 -90)`}>
      <defs>
        <linearGradient id={`${prefix}-shirt`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={shirt} />
          <stop offset="100%" stopColor={mixColors(shirt, "#000000", 0.35)} />
        </linearGradient>
        <linearGradient id={`${prefix}-skin`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={mixColors(skin, "#FFFFFF", 0.22)} />
          <stop offset="100%" stopColor={skin} />
        </linearGradient>
      </defs>

      <ellipse cx="55" cy="174" rx="34" ry="6" fill="#000000" opacity="0.22" />

      <g transform={`translate(41 128) rotate(${legSwing}) translate(-41 -128)`}>
        <rect x="34" y="124" width="17" height="47" rx="8" fill="#1E293B" />
        <rect x="30" y="165" width="25" height="10" rx="5" fill="#111827" />
      </g>
      <g transform={`translate(69 128) rotate(${-legSwing}) translate(-69 -128)`}>
        <rect x="49" y="124" width="17" height="47" rx="8" fill="#1E293B" />
        <rect x="45" y="165" width="25" height="10" rx="5" fill="#111827" />
      </g>

      <g transform={`rotate(${bodyRot} 55 105)`}>
        <g transform={`translate(30 84) rotate(${armSwing}) translate(-30 -84)`}>
          <rect x="22" y="80" width="15" height="48" rx="7" fill={`url(#${prefix}-shirt)`} />
          <circle cx="29" cy="131" r="8" fill={`url(#${prefix}-skin)`} />
        </g>
        <g transform={`translate(80 84) rotate(${waveAngle}) translate(-80 -84)`}>
          <rect x="63" y="80" width="15" height="48" rx="7" fill={`url(#${prefix}-shirt)`} />
          <circle cx="70" cy="131" r="8" fill={`url(#${prefix}-skin)`} />
        </g>

        <path d="M 30 80 Q 55 68 80 80 L 85 133 Q 55 145 25 133 Z" fill={`url(#${prefix}-shirt)`} />
        <path d="M 47 72 L 63 72 L 63 86 L 47 86 Z" fill={mixColors(skin, "#000000", 0.1)} />
        <path d="M 55 80 L 55 132" stroke={mixColors(shirt, "#FFFFFF", 0.22)} strokeWidth="2" opacity="0.6" />

        {def.variant === 11 && (
          <path d="M 30 80 L 55 108 L 80 80 L 78 133 L 32 133 Z" fill={mixColors(shirt, "#FFFFFF", 0.35)} opacity="0.5" />
        )}
        {layer.accessory === "tie" && (
          <path d="M 55 83 L 61 92 L 57 122 L 55 126 L 53 122 L 49 92 Z" fill="#DC2626" />
        )}
        {layer.accessory === "dupatta" && (
          <path d="M 34 80 Q 55 96 78 80 L 82 104 Q 55 120 28 104 Z" fill={mixColors(shirt, "#FFFFFF", 0.45)} opacity="0.9" />
        )}

        {hairBack && (
          <path d="M 27 40 Q 25 92 38 106 L 42 84 L 68 84 L 72 106 Q 85 92 83 40 Z" fill={hair} />
        )}

        <ellipse cx="27" cy="44" rx="5" ry="8" fill={skin} />
        <ellipse cx="83" cy="44" rx="5" ry="8" fill={skin} />
        <ellipse cx="55" cy="41" rx="27" ry="31" fill={`url(#${prefix}-skin)`} />

        {def.variant === 2 || def.variant === 11 ? (
          <>
            <path d="M 29 32 Q 55 8 81 32 Q 55 22 29 32 Z" fill={hair} />
            <path d="M 29 38 Q 24 52 30 62 L 33 48 Z" fill={hair} />
            <path d="M 81 38 Q 86 52 80 62 L 77 48 Z" fill={hair} />
          </>
        ) : def.variant === 7 ? (
          <path d="M 27 34 Q 55 8 83 34 Z" fill="#111827" />
        ) : def.variant === 9 ? (
          <>
            <path d="M 26 30 Q 55 2 84 30 Q 55 18 26 30 Z" fill="#B91C1C" />
            <path d="M 27 26 Q 55 10 83 26" fill="none" stroke="#FCA5A5" strokeWidth="3" />
          </>
        ) : def.variant === 10 ? (
          <>
            <circle cx="55" cy="8" r="11" fill={hair} />
            <path d="M 28 34 Q 55 12 82 34 Q 55 24 28 34 Z" fill={hair} />
          </>
        ) : def.variant === 6 ? (
          <>
            <path d="M 28 33 Q 55 7 82 33 Q 55 21 28 33 Z" fill={hair} />
            <ellipse cx="86" cy="52" rx="9" ry="19" fill={hair} />
          </>
        ) : def.variant === 8 ? (
          <>
            <path d="M 27 33 Q 55 7 83 33 Q 55 22 27 33 Z" fill={hair} />
            <path d="M 83 34 Q 92 62 80 92" fill="none" stroke={hair} strokeWidth="9" strokeLinecap="round" />
          </>
        ) : (
          <path d="M 28 34 Q 55 6 82 34 Q 70 24 55 25 Q 40 24 28 34 Z" fill={hair} />
        )}

        <g transform={`translate(45 41) scale(1 ${eyeScale}) translate(-45 -41)`}>
          <ellipse cx="45" cy="41" rx="3.4" ry="4" fill="#18181B" />
          <circle cx="46" cy="39.5" r="1.1" fill="#FFFFFF" />
        </g>
        <g transform={`translate(65 41) scale(1 ${eyeScale}) translate(-65 -41)`}>
          <ellipse cx="65" cy="41" rx="3.4" ry="4" fill="#18181B" />
          <circle cx="66" cy="39.5" r="1.1" fill="#FFFFFF" />
        </g>
        <path d="M 40 33 Q 45 30 50 33" stroke={hair} strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M 60 33 Q 65 30 70 33" stroke={hair} strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M 54 44 Q 51 52 56 53" stroke={mixColors(skin, "#000000", 0.3)} strokeWidth="2" fill="none" strokeLinecap="round" />

        <ellipse cx="55" cy="60" rx={7 * mouthScale} ry={2.6 * mouthScale} fill="#9F1239" />

        {(layer.accessory === "moustache" || layer.accessory === "glasses-beard") && (
          <path d="M 44 55 Q 55 50 66 55 Q 55 61 44 55 Z" fill={def.variant === 11 ? "#D4D4D8" : hair} />
        )}
        {layer.accessory === "glasses-beard" && (
          <>
            <path d="M 36 60 Q 55 77 74 60 Q 70 72 55 73 Q 40 72 36 60 Z" fill={mixColors(hair, "#FFFFFF", 0.25)} opacity="0.9" />
            <circle cx="45" cy="41" r="9" fill="none" stroke="#334155" strokeWidth="2" />
            <circle cx="65" cy="41" r="9" fill="none" stroke="#334155" strokeWidth="2" />
            <path d="M 54 41 L 56 41" stroke="#334155" strokeWidth="2" />
          </>
        )}
        {layer.accessory === "glasses-bun" && (
          <>
            <circle cx="45" cy="41" r="9" fill="none" stroke="#7C3AED" strokeWidth="2" />
            <circle cx="65" cy="41" r="9" fill="none" stroke="#7C3AED" strokeWidth="2" />
            <path d="M 54 41 L 56 41" stroke="#7C3AED" strokeWidth="2" />
          </>
        )}
        {(layer.accessory === "bindi" || def.variant === 3 || def.variant === 4 || def.variant === 8) && (
          <circle cx="55" cy="29" r="2.6" fill="#E11D48" />
        )}
        {layer.accessory === "cap" && (
          <>
            <path d="M 27 33 Q 55 10 83 33 Z" fill="#0284C7" />
            <path d="M 55 31 Q 72 28 90 34 Q 72 39 55 34 Z" fill="#0369A1" />
          </>
        )}
        {layer.accessory === "turban" && (
          <>
            <path d="M 24 33 Q 55 4 86 33 Q 55 21 24 33 Z" fill="#B91C1C" />
            <path d="M 28 27 Q 55 12 82 27" fill="none" stroke="#FCA5A5" strokeWidth="3" />
            <path d="M 80 30 Q 90 44 82 58" fill="none" stroke="#B91C1C" strokeWidth="8" />
          </>
        )}
      </g>
      <title>{def.name}</title>
    </g>
  );
}

function FinanceArt({
  layer,
  boxW,
  boxH,
  time,
  prefix,
}: {
  layer: FinanceLayer;
  boxW: number;
  boxH: number;
  time: number;
  prefix: string;
}) {
  const kind = financeKind(layer.objectId);
  const scale = Math.min(boxW / 100, boxH / 100);
  const primary = layer.primary;
  const secondary = layer.secondary;
  const t = time * 0.001;

  const body = (() => {
    switch (kind) {
      case "house":
        return (
          <g>
            <path d="M 12 46 L 50 14 L 88 46 Z" fill={secondary} />
            <rect x="20" y="44" width="60" height="44" rx="3" fill={primary} />
            <rect x="43" y="58" width="14" height="30" rx="2" fill={secondary} />
            <rect x="26" y="53" width="12" height="12" rx="2" fill="#BAE6FD" stroke="#FFFFFF" strokeWidth="2" />
            <rect x="62" y="53" width="12" height="12" rx="2" fill="#BAE6FD" stroke="#FFFFFF" strokeWidth="2" />
            <rect x="70" y="20" width="8" height="18" fill={secondary} />
            <circle cx="49" cy="73" r="1.8" fill="#FFFFFF" />
          </g>
        );
      case "car":
        return (
          <g>
            <path d="M 10 60 Q 14 48 28 46 L 38 32 Q 41 28 48 28 L 68 28 Q 74 28 78 34 L 87 48 Q 94 50 94 60 L 94 70 L 10 70 Z" fill={primary} />
            <path d="M 40 34 L 48 34 L 46 46 L 32 46 Z" fill="#BAE6FD" />
            <path d="M 52 34 L 67 34 Q 71 34 74 39 L 80 46 L 52 46 Z" fill="#BAE6FD" />
            <rect x="10" y="60" width="84" height="4" fill={secondary} opacity="0.7" />
            <circle cx="28" cy="70" r="11" fill="#18181B" />
            <circle cx="28" cy="70" r="4.5" fill="#D4D4D8" />
            <circle cx="76" cy="70" r="11" fill="#18181B" />
            <circle cx="76" cy="70" r="4.5" fill="#D4D4D8" />
            <circle cx="91" cy="63" r="3" fill="#FEF08A" />
          </g>
        );
      case "bank":
        return (
          <g>
            <path d="M 50 12 L 92 32 L 8 32 Z" fill={secondary} />
            <rect x="12" y="34" width="76" height="7" rx="2" fill={primary} />
            {[18, 34, 50, 66, 82].map((x) => (
              <rect key={x} x={x} y="43" width="8" height="38" rx="2" fill={primary} />
            ))}
            <rect x="10" y="83" width="80" height="7" rx="2" fill={secondary} />
            <rect x="6" y="91" width="88" height="5" rx="2" fill={primary} />
          </g>
        );
      case "fd":
        return (
          <g>
            <rect x="12" y="16" width="76" height="68" rx="6" fill="#FEF3C7" stroke={secondary} strokeWidth="3" />
            <rect x="18" y="22" width="64" height="14" rx="3" fill={primary} />
            <text x="50" y="33" textAnchor="middle" fontSize="10" fontWeight="800" fill="#FFFFFF">FD CERTIFICATE</text>
            {[46, 56, 66].map((y, i) => (
              <rect key={y} x="20" y={y} width={i === 2 ? 42 : 58} height="3.5" rx="1.7" fill={secondary} opacity="0.55" />
            ))}
            <circle cx="76" cy="70" r="10" fill="none" stroke={secondary} strokeWidth="2.5" />
            <text x="76" y="75" textAnchor="middle" fontSize="12" fontWeight="800" fill={secondary}>₹</text>
          </g>
        );
      case "loan":
        return (
          <g>
            <rect x="14" y="14" width="72" height="72" rx="8" fill="#FFFFFF" stroke={primary} strokeWidth="3" />
            <rect x="14" y="14" width="72" height="18" rx="8" fill={primary} />
            <text x="50" y="27" textAnchor="middle" fontSize="9" fontWeight="800" fill="#FFFFFF">LOAN APPROVED</text>
            <path d="M 30 56 L 44 70 L 72 40" fill="none" stroke={secondary} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="50" cy="56" r="30" fill="none" stroke={primary} strokeWidth="1" opacity="0.4" />
          </g>
        );
      case "coin":
        return (
          <g>
            <ellipse cx="50" cy="76" rx="34" ry="12" fill={secondary} />
            <rect x="16" y="30" width="68" height="46" fill={primary} />
            <ellipse cx="50" cy="30" rx="34" ry="12" fill={mixColors(primary, "#FFFFFF", 0.4)} />
            <ellipse cx="50" cy="76" rx="34" ry="12" fill={primary} />
            <text x="50" y="58" textAnchor="middle" fontSize="34" fontWeight="900" fill={mixColors(secondary, "#000000", 0.2)}>₹</text>
          </g>
        );
      case "rupee":
        return (
          <g>
            {[0, 1, 2].map((i) => (
              <g key={i} transform={`translate(${i * 3} ${i * -7})`}>
                <rect x="16" y="52" width="68" height="32" rx="4" fill={i === 2 ? primary : secondary} stroke="#FFFFFF" strokeWidth="1.5" />
                <text x="50" y="74" textAnchor="middle" fontSize="20" fontWeight="900" fill="#FFFFFF" opacity="0.9">₹</text>
              </g>
            ))}
          </g>
        );
      case "chart":
        return (
          <g>
            <rect x="12" y="14" width="76" height="72" rx="6" fill="#FFFFFF" stroke={primary} strokeWidth="3" />
            <path d="M 22 70 L 78 70" stroke="#94A3B8" strokeWidth="2" />
            <path d="M 22 70 L 22 26" stroke="#94A3B8" strokeWidth="2" />
            {[0, 1, 2, 3].map((i) => (
              <rect key={i} x={27 + i * 13} y={62 - i * 8} width="8" height={8 + i * 8} rx="2" fill={i === 3 ? primary : secondary} />
            ))}
            <path d="M 28 48 L 44 40 L 56 44 L 78 22" fill="none" stroke={primary} strokeWidth="3" strokeLinecap="round" />
            <path d="M 70 22 L 78 22 L 78 30" fill="none" stroke={primary} strokeWidth="3" strokeLinecap="round" />
          </g>
        );
      case "gold":
        return (
          <g>
            <path d="M 18 64 L 32 50 L 70 50 L 84 64 L 70 78 L 32 78 Z" fill={primary} stroke={secondary} strokeWidth="2" />
            <path d="M 32 50 L 46 36 L 84 36 L 70 50 Z" fill={mixColors(primary, "#FFFFFF", 0.3)} stroke={secondary} strokeWidth="2" />
            <path d="M 18 64 L 32 50 L 46 36" fill="none" stroke="#FFFFFF" strokeWidth="2" opacity="0.5" />
            <text x="52" y="68" textAnchor="middle" fontSize="12" fontWeight="800" fill={secondary}>999.9</text>
          </g>
        );
      case "wallet":
        return (
          <g>
            <rect x="12" y="28" width="76" height="50" rx="9" fill={secondary} />
            <rect x="12" y="22" width="76" height="16" rx="7" fill={primary} />
            <rect x="58" y="44" width="30" height="20" rx="4" fill="#F8FAFC" />
            <circle cx="73" cy="54" r="4" fill={primary} />
            <path d="M 16 60 L 44 60" stroke="#FFFFFF" strokeWidth="2" opacity="0.4" />
          </g>
        );
      case "atm":
        return (
          <g>
            <rect x="18" y="10" width="64" height="80" rx="7" fill={primary} stroke={secondary} strokeWidth="3" />
            <rect x="26" y="18" width="48" height="24" rx="3" fill="#0F172A" />
            <text x="50" y="34" textAnchor="middle" fontSize="10" fontWeight="800" fill={mixColors(primary, "#FFFFFF", 0.6)}>ATM</text>
            {[26, 38, 50].map((y) => (
              <rect key={y} x="26" y={y + 22} width="48" height="5" rx="2" fill={secondary} opacity="0.7" />
            ))}
            <rect x="32" y="72" width="36" height="8" rx="3" fill="#111827" />
            <rect x="38" y="84" width="24" height="4" fill={secondary} />
          </g>
        );
      default:
        return (
          <g>
            <rect x="16" y="30" width="68" height="50" rx="5" fill={primary} stroke={secondary} strokeWidth="3" />
            <path d="M 36 30 L 36 22 Q 36 16 42 16 L 58 16 Q 64 16 64 22 L 64 30" fill="none" stroke={secondary} strokeWidth="5" />
            <rect x="16" y="48" width="68" height="8" fill={secondary} opacity="0.6" />
            <circle cx="50" cy="64" r="7" fill="#FDE68A" />
          </g>
        );
    }
  })();

  return (
    <g transform={`scale(${scale}) translate(${-50 + Math.sin(t * 2) * 0.6} ${-50})`}>
      <defs>
        <filter id={`${prefix}-finshadow`} x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#000000" floodOpacity="0.35" />
        </filter>
      </defs>
      <g filter={`url(#${prefix}-finshadow)`}>{body}</g>
    </g>
  );
}

function ImageArt({
  layer,
  boxW,
  boxH,
  prefix,
}: {
  layer: ImageLayer;
  boxW: number;
  boxH: number;
  prefix: string;
}) {
  if (!layer.src) {
    return (
      <rect x={-boxW / 2} y={-boxH / 2} width={boxW} height={boxH} fill="#27272A" stroke="#52525B" strokeWidth="2" strokeDasharray="8 6" />
    );
  }
  const radius = (layer.radius / 100) * Math.min(boxW, boxH);
  const par = layer.fit === "cover" ? "xMidYMid slice" : layer.fit === "contain" ? "xMidYMid meet" : "none";
  return (
    <g>
      <defs>
        <clipPath id={`${prefix}-imgclip`}>
          <rect x={-boxW / 2} y={-boxH / 2} width={boxW} height={boxH} rx={radius} />
        </clipPath>
        <filter id={`${prefix}-imgfilter`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation={layer.blur} />
          <feColorMatrix
            type="matrix"
            values={`${1 - layer.grayscale} ${layer.grayscale} ${layer.grayscale} 0 0
                      ${layer.grayscale} ${1 - layer.grayscale} ${layer.grayscale} 0 0
                      ${layer.grayscale} ${layer.grayscale} ${1 - layer.grayscale} 0 0
                      0 0 0 ${layer.brightness / 100} 0`}
          />
          <feComponentTransfer>
            <feFuncR type="linear" slope={layer.contrast / 100} intercept={(1 - layer.contrast / 100) / 2} />
            <feFuncG type="linear" slope={layer.contrast / 100} intercept={(1 - layer.contrast / 100) / 2} />
            <feFuncB type="linear" slope={layer.contrast / 100} intercept={(1 - layer.contrast / 100) / 2} />
          </feComponentTransfer>
        </filter>
      </defs>
      <g clipPath={`url(#${prefix}-imgclip)`}>
        <g transform={`scale(${layer.flipX ? -layer.crop : layer.crop} ${layer.crop})`}>
          <image
            href={layer.src}
            x={-boxW / 2}
            y={-boxH / 2}
            width={boxW}
            height={boxH}
            preserveAspectRatio={par}
            filter={layer.blur || layer.grayscale || layer.brightness !== 100 || layer.contrast !== 100 ? `url(#${prefix}-imgfilter)` : undefined}
          />
        </g>
      </g>
    </g>
  );
}

function ShapeArt({
  layer,
  boxW,
  boxH,
  prefix,
}: {
  layer: ShapeLayer;
  boxW: number;
  boxH: number;
  prefix: string;
}) {
  const x = -boxW / 2;
  const y = -boxH / 2;
  const sw = layer.strokeWidth;
  const common = {
    fill: layer.fillGradient.enabled ? `url(#${prefix}-shgrad)` : layer.fill,
    stroke: layer.stroke,
    strokeWidth: sw,
    strokeLinejoin: "round" as const,
  };
  let shape: React.ReactNode;
  switch (layer.shape) {
    case "circle":
      shape = <ellipse cx={0} cy={0} rx={boxW / 2} ry={boxH / 2} {...common} />;
      break;
    case "triangle":
      shape = <path d={`M 0 ${y} L ${x + boxW} ${y + boxH} L ${x} ${y + boxH} Z`} {...common} />;
      break;
    case "line":
      shape = <line x1={x} y1={y + boxH / 2} x2={x + boxW} y2={y + boxH / 2} stroke={layer.stroke} strokeWidth={sw || 4} strokeLinecap="round" />;
      break;
    case "arrow":
      shape = (
        <g {...common}>
          <rect x={x} y={-boxH * 0.16} width={boxW * 0.68} height={boxH * 0.32} rx={boxH * 0.1} />
          <path d={`M ${x + boxW * 0.58} ${-boxH * 0.5} L ${x + boxW} 0 L ${x + boxW * 0.58} ${boxH * 0.5} Z`} />
        </g>
      );
      break;
    case "star": {
      const points = [];
      for (let i = 0; i < 10; i++) {
        const r = i % 2 === 0 ? 0.5 : 0.22;
        const a = -Math.PI / 2 + (i * Math.PI) / 5;
        points.push(`${Math.cos(a) * boxW * r},${Math.sin(a) * boxH * r}`);
      }
      shape = <polygon points={points.join(" ")} {...common} />;
      break;
    }
    case "heart":
      shape = (
        <path
          d={`M 0 ${boxH * 0.45} C ${-boxW * 0.65} ${boxH * 0.05} ${-boxW * 0.5} ${-boxH * 0.5} 0 ${-boxH * 0.2} C ${boxW * 0.5} ${-boxH * 0.5} ${boxW * 0.65} ${boxH * 0.05} 0 ${boxH * 0.45} Z`}
          {...common}
        />
      );
      break;
    case "pill":
      shape = <rect x={x} y={y} width={boxW} height={boxH} rx={boxH / 2} {...common} />;
      break;
    default:
      shape = <rect x={x} y={y} width={boxW} height={boxH} rx={layer.radius} {...common} />;
  }
  return (
    <g>
      <defs>
        <linearGradient id={`${prefix}-shgrad`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={layer.fillGradient.from} />
          <stop offset="100%" stopColor={layer.fillGradient.to} />
        </linearGradient>
      </defs>
      {shape}
    </g>
  );
}

export function SceneSvg({
  scene,
  W,
  H,
  time,
  prefix = "scene",
  children,
}: ArtProps & { scene: Scene; prefix?: string; children?: React.ReactNode }) {
  return (
    <g>
      <BackgroundArt bg={scene.background} W={W} H={H} time={time} prefix={`${prefix}-bg`} />
      {scene.layers
        .filter((layer) => layer.visible)
        .map((layer, index) => (
          <LayerArt key={layer.id} layer={layer} W={W} H={H} time={time} prefix={`${prefix}-l${index}`} />
        ))}
      {children}
    </g>
  );
}

export function svgMarkup(scene: Scene, W: number, H: number, time: number, prefix = "export"): string {
  const escape = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

  const layerMarkup = scene.layers
    .filter((l) => l.visible)
    .map((layer, index) => {
      const boxW = (layer.w / 100) * W;
      const boxH = (layer.h / 100) * H;
      const px = (layer.x / 100) * W;
      const py = (layer.y / 100) * H;
      const m = motionFor(layer, time, boxW, boxH);
      const common = `transform="translate(${px + m.dx} ${py + m.dy}) rotate(${layer.rot + m.rot}) scale(${m.scale})" opacity="${layer.opacity / 100}"`;
      if (layer.kind === "shape") {
        const fill = layer.fillGradient.enabled ? `url(#${prefix}-eg${index})` : layer.fill;
        const grad = layer.fillGradient.enabled
          ? `<defs><linearGradient id="${prefix}-eg${index}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${layer.fillGradient.from}"/><stop offset="1" stop-color="${layer.fillGradient.to}"/></linearGradient></defs>`
          : "";
        const x = -boxW / 2;
        const y = -boxH / 2;
        let el = "";
        if (layer.shape === "rect") el = `<rect x="${x}" y="${y}" width="${boxW}" height="${boxH}" rx="${layer.radius}" fill="${fill}" stroke="${layer.stroke}" stroke-width="${layer.strokeWidth}"/>`;
        if (layer.shape === "circle") el = `<ellipse cx="0" cy="0" rx="${boxW / 2}" ry="${boxH / 2}" fill="${fill}" stroke="${layer.stroke}" stroke-width="${layer.strokeWidth}"/>`;
        if (layer.shape === "triangle") el = `<path d="M 0 ${y} L ${x + boxW} ${y + boxH} L ${x} ${y + boxH} Z" fill="${fill}" stroke="${layer.stroke}" stroke-width="${layer.strokeWidth}"/>`;
        if (layer.shape === "line") el = `<line x1="${x}" y1="0" x2="${x + boxW}" y2="0" stroke="${layer.stroke}" stroke-width="${layer.strokeWidth || 4}" stroke-linecap="round"/>`;
        if (layer.shape === "pill") el = `<rect x="${x}" y="${y}" width="${boxW}" height="${boxH}" rx="${boxH / 2}" fill="${fill}" stroke="${layer.stroke}" stroke-width="${layer.strokeWidth}"/>`;
        if (layer.shape === "star") {
          const pts = [];
          for (let i = 0; i < 10; i++) {
            const r = i % 2 === 0 ? 0.5 : 0.22;
            const a = -Math.PI / 2 + (i * Math.PI) / 5;
            pts.push(`${Math.cos(a) * boxW * r},${Math.sin(a) * boxH * r}`);
          }
          el = `<polygon points="${pts.join(" ")}" fill="${fill}" stroke="${layer.stroke}" stroke-width="${layer.strokeWidth}"/>`;
        }
        if (layer.shape === "arrow") el = `<path d="M ${x} ${-boxH * 0.18} L ${x + boxW * 0.6} ${-boxH * 0.18} L ${x + boxW * 0.6} ${-boxH * 0.5} L ${x + boxW} 0 L ${x + boxW * 0.6} ${boxH * 0.5} L ${x + boxW * 0.6} ${boxH * 0.18} L ${x} ${boxH * 0.18} Z" fill="${fill}" stroke="${layer.stroke}" stroke-width="${layer.strokeWidth}"/>`;
        return `<g ${common}>${grad}${el}</g>`;
      }
      if (layer.kind === "text") {
        const size = (layer.size / 100) * W;
        const lines = layer.text.split("\n");
        const anchor = layer.align === "left" ? "start" : layer.align === "right" ? "end" : "middle";
        const tx = layer.align === "left" ? -boxW / 2 : layer.align === "right" ? boxW / 2 : 0;
        const step = size * layer.lineHeight;
        const start = -(step * lines.length) / 2 + size * 0.86;
        const tspans = lines.map((line, i) => `<tspan x="${tx}" dy="${i === 0 ? 0 : step}">${escape(line)}</tspan>`).join("");
        const grad = layer.gradient.enabled
          ? `<defs><linearGradient id="${prefix}-tg${index}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${layer.gradient.from}"/><stop offset="1" stop-color="${layer.gradient.to}"/></linearGradient></defs>`
          : "";
        const fill = layer.gradient.enabled ? `url(#${prefix}-tg${index})` : layer.color;
        const pill = layer.pill.enabled
          ? `<rect x="${-boxW / 2}" y="${start - size * 1.05}" width="${boxW}" height="${step * lines.length + size * 0.4}" rx="${(step * lines.length + size * 0.4) / 2}" fill="${layer.pill.color}" opacity="${layer.pill.opacity / 100}"/>`
          : "";
        return `<g ${common}>${grad}${pill}<text x="${tx}" y="${start}" fill="${fill}" font-family="${FONT_STACK[layer.font]}" font-size="${size}" font-weight="${layer.weight}" text-anchor="${anchor}" stroke="${layer.border.enabled ? layer.border.color : "none"}" stroke-width="${layer.border.enabled ? (layer.border.width / 1000) * W : 0}" paint-order="stroke">${tspans}</text></g>`;
      }
      if (layer.kind === "image") {
        if (!layer.src) return "";
        const radius = (layer.radius / 100) * Math.min(boxW, boxH);
        const par = layer.fit === "cover" ? "xMidYMid slice" : layer.fit === "contain" ? "xMidYMid meet" : "none";
        return `<g ${common}><defs><clipPath id="${prefix}-ic${index}"><rect x="${-boxW / 2}" y="${-boxH / 2}" width="${boxW}" height="${boxH}" rx="${radius}"/></clipPath></defs><g clip-path="url(#${prefix}-ic${index})"><image href="${layer.src}" x="${-boxW / 2}" y="${-boxH / 2}" width="${boxW}" height="${boxH}" preserveAspectRatio="${par}" transform="scale(${layer.crop})"/></g></g>`;
      }
      const fallbackColor = "primary" in layer ? layer.primary : layer.shirt;
      return `<g ${common}><circle cx="0" cy="0" r="${Math.min(boxW, boxH) / 2}" fill="${fallbackColor}"/><text x="0" y="10" text-anchor="middle" font-size="${Math.min(boxW, boxH) / 2}" fill="#FFFFFF">${escape(layer.name)}</text></g>`;
    })
    .join("");

  const bg = scene.background;
  let bgMarkup = "";
  if (bg.type === "solid") bgMarkup = `<rect width="${W}" height="${H}" fill="${bg.color}" opacity="${bg.opacity / 100}"/>`;
  if (bg.type === "gradient") {
    const coords =
      bg.gradient.direction === "left-right" ? `x1="0" y1="0" x2="1" y2="0"` : bg.gradient.direction === "diagonal" ? `x1="0" y1="0" x2="1" y2="1"` : `x1="0" y1="0" x2="0" y2="1"`;
    if (bg.gradient.direction === "radial") {
      bgMarkup = `<defs><radialGradient id="${prefix}-rg"><stop offset="0" stop-color="${bg.gradient.from}"/><stop offset="1" stop-color="${bg.gradient.to}"/></radialGradient></defs><rect width="${W}" height="${H}" fill="url(#${prefix}-rg)"/>`;
    } else {
      bgMarkup = `<defs><linearGradient id="${prefix}-lg" ${coords}><stop offset="0" stop-color="${bg.gradient.from}"/><stop offset="1" stop-color="${bg.gradient.to}"/></linearGradient></defs><rect width="${W}" height="${H}" fill="url(#${prefix}-lg)" opacity="${bg.gradient.intensity / 100}"/>`;
    }
  }
  if (bg.type === "image" && bg.image.src) {
    const par = bg.image.fit === "cover" ? "xMidYMid slice" : bg.image.fit === "contain" ? "xMidYMid meet" : "none";
    bgMarkup = `<image href="${bg.image.src}" width="${W}" height="${H}" preserveAspectRatio="${par}" opacity="${bg.image.opacity / 100}"/>`;
  }
  if (bg.type === "pattern") {
    const pat = bg.pattern;
    const gap = Math.max(pat.gap, 24);
    let elems = "";
    if (pat.kind === "dots") {
      for (let row = 0; row * gap < H; row++)
        for (let col = 0; col * gap < W; col++)
          elems += `<circle cx="${col * gap + gap / 2}" cy="${row * gap + gap / 2}" r="${pat.size / 2}" fill="${pat.color}" opacity="0.35"/>`;
    } else if (pat.kind === "grid") {
      for (let x = 0; x < W; x += gap * 2) elems += `<line x1="${x}" y1="0" x2="${x}" y2="${H}" stroke="${pat.color}" stroke-width="2" opacity="0.25"/>`;
      for (let y = 0; y < H; y += gap * 2) elems += `<line x1="0" y1="${y}" x2="${W}" y2="${y}" stroke="${pat.color}" stroke-width="2" opacity="0.25"/>`;
    } else if (pat.kind === "particles") {
      for (let i = 0; i < Math.min(pat.count, 120); i++) elems += `<circle cx="${seededRandom(i * 2 + 1) * W}" cy="${seededRandom(i * 2 + 2) * H}" r="${pat.size}" fill="${pat.color}" opacity="0.6"/>`;
    } else {
      elems = `<rect width="${W}" height="${H}" fill="${pat.accent}"/><path d="M 0 ${H * 0.7} Q ${W * 0.25} ${H * 0.5} ${W * 0.5} ${H * 0.7} T ${W} ${H * 0.7}" fill="none" stroke="${pat.color}" stroke-width="${W * 0.004}" opacity="0.5"/>`;
    }
    bgMarkup = `<rect width="${W}" height="${H}" fill="${pat.accent}"/>${elems}`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"><rect width="${W}" height="${H}" fill="#050508"/>${bgMarkup}${layerMarkup}</svg>`;
}

export const ART_FONT_STACK = FONT_STACK;
export const clampArt = clamp;
