import type { ReactElement } from "react";
import type { AnimationName } from "@/lib/types";

const OUTLINE = "#00000010";

export interface AnimalDef {
  id: string;
  name: string;
  hint: string;
  primary: string;
  secondary: string;
  accent: string;
  variant: number;
}

export const ANIMALS: AnimalDef[] = [
  { id: "dog", name: "Dog", hint: "Brown Labrador • वफादार", primary: "#D97706", secondary: "#FDE68A", accent: "#DC2626", variant: 0 },
  { id: "cat", name: "Cat", hint: "White + Grey • बिल्ली", primary: "#FFFFFF", secondary: "#9CA3AF", accent: "#EC4899", variant: 1 },
  { id: "lion", name: "Lion", hint: "Jungle King • शेर", primary: "#F59E0B", secondary: "#FEF3C7", accent: "#92400E", variant: 2 },
  { id: "buffalo", name: "Buffalo", hint: "Black Bhains • भैंस", primary: "#2A2A2A", secondary: "#4B5563", accent: "#B45309", variant: 3 },
  { id: "cow", name: "Cow", hint: "Desi Gaay • गाय", primary: "#FFF7ED", secondary: "#A16207", accent: "#F97316", variant: 4 },
  { id: "snake", name: "Snake", hint: "Green Cobra • नाग", primary: "#22C55E", secondary: "#BBF7D0", accent: "#DC2626", variant: 5 },
  { id: "elephant", name: "Elephant", hint: "Grey Giant • हाथी", primary: "#94A3B8", secondary: "#CBD5E1", accent: "#DC2626", variant: 6 },
  { id: "deer", name: "Deer", hint: "Spotted Deer • हिरण", primary: "#D97706", secondary: "#FEF3C7", accent: "#78350F", variant: 7 },
];

export function findAnimal(id: string): AnimalDef {
  return ANIMALS.find((item) => item.id === id) ?? ANIMALS[0];
}

export interface AnimalSvgProps {
  id: string;
  action: AnimationName;
  time: number;
  animSpeed?: number;
  prefix: string;
  cssAnimate?: boolean;
}

interface AnimalRenderProps {
  prefix: string;
  t: number;
  action: AnimationName;
  step: number;
  wag: number;
  blink: number;
  mouth: number;
  cssAnimate: boolean;
}

export function DogSVG({ prefix, step, wag, blink, mouth, cssAnimate, action }: AnimalRenderProps): ReactElement {
  return (
    <g>
      <defs>
        <linearGradient id={`${prefix}-dog-coat`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>
      </defs>
      <g id="body">
        <rect x="86" y="72" width="130" height="48" rx="17" fill={`url(#${prefix}-dog-coat)`} stroke={OUTLINE} strokeWidth="2" />
        <path d="M 92 106 H 208 Q 212 116 202 120 H 100 Q 88 118 92 106 Z" fill="#FDE68A" stroke={OUTLINE} strokeWidth="2" />
        <rect x="86" y="78" width="30" height="42" rx="12" fill="#C26408" stroke={OUTLINE} strokeWidth="2" />
      </g>

      <g id="tail" className={cssAnimate && action === "tailWag" ? "tail-wag" : undefined} transform={`rotate(${wag * 20} 214 82)`}>
        <path d="M 212 84 Q 238 78 236 50 Q 234 42 242 40" fill="none" stroke="#B45309" strokeWidth="12" strokeLinecap="round" />
        <circle cx="242" cy="40" r="7" fill="#FDE68A" stroke={OUTLINE} strokeWidth="2" />
      </g>

      <g id="arm-left">
        <g id="leg-left" transform={`translate(${step * 0.6} 0)`}>
          <rect x="100" y="112" width="14" height="38" rx="6" fill="#B45309" stroke={OUTLINE} strokeWidth="2" />
          <rect x="97" y="143" width="20" height="8" rx="4" fill="#78350F" />
        </g>
        <g id="leg-right" transform={`translate(${-step * 0.6} 0)`}>
          <rect x="122" y="112" width="14" height="38" rx="6" fill="#C26408" stroke={OUTLINE} strokeWidth="2" />
          <rect x="119" y="143" width="20" height="8" rx="4" fill="#78350F" />
        </g>
      </g>
      <g id="arm-right">
        <g id="leg-back-left" transform={`translate(${step * 0.4} 0)`}>
          <path d="M 176 112 L 190 112 L 186 145 L 174 145 Z" fill="#B45309" stroke={OUTLINE} strokeWidth="2" />
          <rect x="171" y="143" width="20" height="8" rx="4" fill="#78350F" />
        </g>
        <g id="leg-back-right" transform={`translate(${-step * 0.4} 0)`}>
          <path d="M 198 112 L 212 112 L 216 145 L 204 145 Z" fill="#A34706" stroke={OUTLINE} strokeWidth="2" />
          <rect x="201" y="143" width="20" height="8" rx="4" fill="#78350F" />
        </g>
      </g>

      <g id="head">
        <rect x="82" y="72" width="16" height="40" rx="6" fill="#DC2626" />
        <circle cx="90" cy="108" r="7" fill="#FBBF24" stroke={OUTLINE} strokeWidth="2" />
        <rect x="34" y="54" width="64" height="60" rx="16" fill={`url(#${prefix}-dog-coat)`} stroke={OUTLINE} strokeWidth="2" />
        <path d="M 64 52 Q 78 66 72 104 Q 84 100 84 84 L 82 56 Z" fill="#92400E" stroke={OUTLINE} strokeWidth="2" />
        <rect x="18" y="76" width="36" height="24" rx="11" fill="#FDE68A" stroke={OUTLINE} strokeWidth="2" />
        <circle cx="18" cy="84" r="7" fill="#111827" />
        <g id="mouth" transform={`translate(0 ${mouth > 1 ? 2 : 0})`}>
          <path d="M 24 96 Q 38 112 52 98 Q 44 106 34 106 Z" fill="#7F1D1D" />
          <path d="M 34 100 Q 40 100 42 104 L 40 118 Q 36 122 32 116 Z" fill="#F472B6" stroke={OUTLINE} strokeWidth="1.5" />
        </g>
        <circle id="eye-left" cx="50" cy="74" r={4 * blink} fill="#111827" />
        <circle id="eye-right" cx="70" cy="74" r={3.4 * blink} fill="#111827" opacity="0.65" />
        <circle cx="52" cy="72" r="1.2" fill="#FFFFFF" opacity="0.9" />
      </g>
    </g>
  );
}

export function CatSVG({ prefix, wag, blink, cssAnimate, action }: AnimalRenderProps): ReactElement {
  return (
    <g>
      <defs>
        <linearGradient id={`${prefix}-cat-coat`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E5E7EB" />
        </linearGradient>
      </defs>
      <g id="body">
        <path d="M 116 66 Q 154 62 182 80 Q 210 104 214 146 H 98 Q 104 96 116 66 Z" fill={`url(#${prefix}-cat-coat)`} stroke={OUTLINE} strokeWidth="2" />
        <path d="M 162 74 Q 196 88 206 134 Q 190 126 176 112 Q 166 94 162 74 Z" fill="#9CA3AF" opacity="0.9" stroke={OUTLINE} strokeWidth="2" />
      </g>
      <g id="tail" className={cssAnimate && action === "tailWag" ? "tail-wag" : undefined} transform={`rotate(${wag * 14} 210 132)`}>
        <path d="M 210 134 Q 244 126 240 98 Q 236 74 216 76 Q 206 78 208 90" fill="none" stroke="#E5E7EB" strokeWidth="9" strokeLinecap="round" />
        <path d="M 216 76 Q 206 78 208 90" fill="none" stroke="#9CA3AF" strokeWidth="9" strokeLinecap="round" />
      </g>
      <g id="arm-right">
        <g id="leg-back-left"><ellipse cx="158" cy="132" rx="24" ry="14" fill="#F3F4F6" stroke={OUTLINE} strokeWidth="2" /></g>
        <g id="leg-back-right"><ellipse cx="190" cy="134" rx="22" ry="13" fill="#F3F4F6" stroke={OUTLINE} strokeWidth="2" /></g>
      </g>
      <g id="arm-left">
        <g id="leg-left"><rect x="118" y="108" width="12" height="38" rx="6" fill="#FFFFFF" stroke={OUTLINE} strokeWidth="2" /></g>
        <g id="leg-right"><rect x="136" y="108" width="12" height="38" rx="6" fill="#FFFFFF" stroke={OUTLINE} strokeWidth="2" /></g>
      </g>
      <ellipse cx="124" cy="146" rx="9" ry="5" fill="#F9A6A6" />
      <ellipse cx="142" cy="146" rx="9" ry="5" fill="#F9A6A6" />

      <g id="head">
        <path d="M 102 40 L 110 14 L 128 38 Z" fill="#FFFFFF" stroke={OUTLINE} strokeWidth="2" />
        <path d="M 108 35 L 113 22 L 122 37 Z" fill="#F9A6A6" />
        <path d="M 136 36 L 152 14 L 158 44 Z" fill="#FFFFFF" stroke={OUTLINE} strokeWidth="2" />
        <path d="M 141 36 L 151 24 L 153 40 Z" fill="#F9A6A6" />
        <circle cx="130" cy="62" r="31" fill="#FFFFFF" stroke={OUTLINE} strokeWidth="2" />
        <path d="M 146 36 Q 158 30 164 40 Q 158 48 148 44 Z" fill="#F9A6A6" />
        <path d="M 112 38 Q 102 32 100 42 Q 104 50 114 46 Z" fill="#F9A6A6" />
        <ellipse id="eye-left" cx="116" cy="60" rx={5 * blink} ry={7 * blink} fill="#16A34A" />
        <ellipse id="eye-right" cx="144" cy="60" rx={5 * blink} ry={7 * blink} fill="#16A34A" />
        <ellipse cx="116" cy="60" rx="1.6" ry="5" fill="#111827" />
        <ellipse cx="144" cy="60" rx="1.6" ry="5" fill="#111827" />
        <path d="M 120 72 L 130 72 L 125 78 Z" fill="#F472B6" />
        <g id="mouth"><path d="M 125 78 Q 118 86 110 80 M 125 78 Q 132 86 140 80" fill="none" stroke="#4B5563" strokeWidth="1.6" /></g>
        <g stroke="#374151" strokeWidth="1.3">
          <path d="M 112 74 L 88 68 M 112 78 L 86 78 M 112 82 L 90 88" />
          <path d="M 140 74 L 162 68 M 140 78 L 166 78 M 140 82 L 162 88" />
        </g>
        <rect x="106" y="90" width="48" height="9" rx="4" fill="#3B82F6" />
        <circle cx="130" cy="101" r="5" fill="#FBBF24" stroke={OUTLINE} strokeWidth="1.5" />
      </g>
    </g>
  );
}

export function LionSVG({ prefix, step, wag, blink, mouth, cssAnimate, action }: AnimalRenderProps): ReactElement {
  const spikes = Array.from({ length: 12 }, (_, i) => {
    const a = (i * Math.PI) / 6;
    return `${(70 + Math.cos(a) * 57).toFixed(1)},${(70 + Math.sin(a) * 57).toFixed(1)}`;
  }).join(" ");
  return (
    <g>
      <defs>
        <linearGradient id={`${prefix}-lion-coat`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
      </defs>
      <g id="body">
        <rect x="88" y="76" width="128" height="52" rx="18" fill={`url(#${prefix}-lion-coat)`} stroke={OUTLINE} strokeWidth="2" />
        <path d="M 92 110 H 208 Q 214 120 204 128 H 100 Q 88 122 92 110 Z" fill="#FEF3C7" stroke={OUTLINE} strokeWidth="2" />
      </g>
      <g id="tail" className={cssAnimate && action === "tailWag" ? "tail-wag" : undefined} transform={`rotate(${wag * 18} 214 84)`}>
        <path d="M 214 88 Q 244 80 242 50" fill="none" stroke="#D97706" strokeWidth="6" strokeLinecap="round" />
        <circle cx="242" cy="46" r="10" fill="#92400E" stroke={OUTLINE} strokeWidth="2" />
      </g>
      <g id="arm-left">
        {[98, 120].map((x, i) => (
          <g key={x} id={i === 0 ? "leg-left" : "leg-right"} transform={`translate(${i === 0 ? step : -step} 0)`}>
            <rect x={x} y="122" width="16" height="28" rx="6" fill="#D97706" stroke={OUTLINE} strokeWidth="2" />
            <rect x={x - 2} y="145" width="22" height="7" rx="3" fill="#92400E" />
            <path d={`M ${x} 142 L ${x - 1} 148 M ${x + 8} 142 L ${x + 9} 148 M ${x + 15} 142 L ${x + 17} 148`} stroke="#FEF3C7" strokeWidth="1.5" />
          </g>
        ))}
      </g>
      <g id="arm-right">
        {[176, 200].map((x, i) => (
          <g key={x} id={i === 0 ? "leg-back-left" : "leg-back-right"} transform={`translate(${i === 0 ? step : -step} 0)`}>
            <rect x={x} y="122" width="16" height="28" rx="6" fill="#D97706" stroke={OUTLINE} strokeWidth="2" />
            <rect x={x - 2} y="145" width="22" height="7" rx="3" fill="#92400E" />
            <path d={`M ${x} 142 L ${x - 1} 148 M ${x + 8} 142 L ${x + 9} 148 M ${x + 15} 142 L ${x + 17} 148`} stroke="#FEF3C7" strokeWidth="1.5" />
          </g>
        ))}
      </g>

      <g id="head" className={cssAnimate && action === "roar" ? "roar" : undefined}>
        <polygon points={spikes} fill="#92400E" stroke={OUTLINE} strokeWidth="2" />
        <circle cx="70" cy="70" r="48" fill="#92400E" />
        <circle cx="68" cy="70" r="32" fill="#FDE68A" stroke={OUTLINE} strokeWidth="2" />
        <circle cx="50" cy="44" r="9" fill="#D97706" stroke={OUTLINE} strokeWidth="2" />
        <circle cx="88" cy="44" r="9" fill="#D97706" stroke={OUTLINE} strokeWidth="2" />
        <circle id="eye-left" cx="52" cy="64" r={4.5 * blink} fill="#431407" />
        <circle id="eye-right" cx="84" cy="64" r={4.5 * blink} fill="#431407" />
        <path d="M 44 74 L 58 70 L 56 80 Z" fill="#78350F" />
        <g id="mouth" transform={`translate(68 86) scale(1 ${mouth}) translate(-68 -86)`}>
          <path d="M 44 78 Q 68 108 92 78 Q 72 94 44 78 Z" fill="#7F1D1D" stroke={OUTLINE} strokeWidth="2" />
          <path d="M 52 80 L 56 87 L 60 80 M 76 80 L 80 87 L 84 80" fill="#FFFFFF" />
          <path d="M 62 90 Q 70 90 72 94 L 70 104 Q 66 108 62 102 Z" fill="#F472B6" />
        </g>
        <path d="M 48 22 L 56 8 L 66 20 L 78 6 L 88 22 Z" fill="#FBBF24" stroke={OUTLINE} strokeWidth="2" />
        <rect x="50" y="20" width="40" height="9" rx="3" fill="#F59E0B" />
        <circle cx="70" cy="15" r="4" fill="#DC2626" />
      </g>
    </g>
  );
}

export function BuffaloSVG({ prefix, step, wag, blink, cssAnimate, action }: AnimalRenderProps): ReactElement {
  return (
    <g>
      <defs>
        <linearGradient id={`${prefix}-buffalo-coat`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2A2A2A" />
          <stop offset="100%" stopColor="#111111" />
        </linearGradient>
      </defs>
      <g id="body">
        <path d="M 84 72 Q 100 44 136 58 Q 170 42 204 62 Q 226 76 222 112 Q 218 136 196 136 H 104 Q 78 132 84 72 Z" fill={`url(#${prefix}-buffalo-coat)`} stroke={OUTLINE} strokeWidth="2" />
        <path d="M 98 118 Q 150 132 210 116 Q 214 132 196 136 H 104 Q 92 132 98 118 Z" fill="#374151" opacity="0.85" />
      </g>
      <g id="tail" className={cssAnimate && action === "tailWag" ? "tail-wag" : undefined} transform={`rotate(${wag * 10} 220 84)`}>
        <path d="M 220 84 Q 234 110 228 142" fill="none" stroke="#111111" strokeWidth="5" strokeLinecap="round" />
        <ellipse cx="228" cy="144" rx="8" ry="11" fill="#111111" />
      </g>
      <g id="arm-left">
        {[100, 124].map((x, i) => (
          <g key={x} id={i === 0 ? "leg-left" : "leg-right"} transform={`translate(${i === 0 ? step * 0.6 : -step * 0.6} 0)`}>
            <rect x={x} y="126" width="20" height="24" rx="5" fill="#1F2937" stroke={OUTLINE} strokeWidth="2" />
            <rect x={x - 2} y="143" width="24" height="8" rx="3" fill="#09090B" />
          </g>
        ))}
      </g>
      <g id="arm-right">
        {[178, 202].map((x, i) => (
          <g key={x} id={i === 0 ? "leg-back-left" : "leg-back-right"} transform={`translate(${i === 0 ? step * 0.6 : -step * 0.6} 0)`}>
            <rect x={x} y="126" width="20" height="24" rx="5" fill="#1F2937" stroke={OUTLINE} strokeWidth="2" />
            <rect x={x - 2} y="143" width="24" height="8" rx="3" fill="#09090B" />
          </g>
        ))}
      </g>
      <rect x="178" y="132" width="12" height="10" rx="4" fill="#78350F" opacity="0.9" />

      <g id="head">
        <path d="M 46 78 C 22 66 12 42 28 30 C 42 20 54 34 46 50" fill="none" stroke="#E5E7EB" strokeWidth="10" strokeLinecap="round" />
        <path d="M 74 76 C 96 62 100 38 84 28 C 70 20 60 34 68 50" fill="none" stroke="#D1D5DB" strokeWidth="10" strokeLinecap="round" />
        <path d="M 34 86 Q 16 80 18 96 Q 30 102 42 94 Z" fill="#374151" stroke={OUTLINE} strokeWidth="2" />
        <path d="M 78 84 Q 96 78 96 94 Q 84 100 72 92 Z" fill="#374151" stroke={OUTLINE} strokeWidth="2" />
        <ellipse cx="56" cy="104" rx="38" ry="30" fill="#2A2A2A" stroke={OUTLINE} strokeWidth="2" />
        <g id="mouth">
          <ellipse cx="28" cy="116" rx="22" ry="16" fill="#9CA3AF" stroke={OUTLINE} strokeWidth="2" />
          <circle cx="20" cy="113" r="3" fill="#4B5563" />
          <circle cx="34" cy="117" r="3" fill="#4B5563" />
        </g>
        <circle id="eye-left" cx="48" cy="94" r={3.5 * blink} fill="#FBBF24" />
        <circle id="eye-right" cx="72" cy="94" r={3.5 * blink} fill="#FBBF24" />
        <path d="M 82 78 H 96" stroke="#DC2626" strokeWidth="7" strokeLinecap="round" />
        <circle cx="92" cy="88" r="7" fill="#FBBF24" stroke={OUTLINE} strokeWidth="2" />
      </g>
    </g>
  );
}

export function CowSVG({ prefix, step, wag, blink, cssAnimate, action }: AnimalRenderProps): ReactElement {
  const garland = [78, 88, 98, 108].flatMap((y) => [72, 84].map((x, i) => ({ x, y, fill: i === 0 ? "#F97316" : "#FBBF24" })));
  return (
    <g>
      <defs>
        <linearGradient id={`${prefix}-cow-coat`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFF7ED" />
          <stop offset="100%" stopColor="#FED7AA" />
        </linearGradient>
      </defs>
      <g id="body">
        <rect x="90" y="74" width="122" height="50" rx="14" fill={`url(#${prefix}-cow-coat)`} stroke={OUTLINE} strokeWidth="2" />
        <path d="M 132 78 Q 154 72 162 88 Q 166 102 148 106 Q 128 104 132 78 Z" fill="#A16207" stroke={OUTLINE} strokeWidth="2" />
      </g>
      <g id="tail" className={cssAnimate && action === "tailWag" ? "tail-wag" : undefined} transform={`rotate(${wag * 12} 212 82)`}>
        <path d="M 212 84 Q 226 112 220 138" fill="none" stroke="#FED7AA" strokeWidth="5" strokeLinecap="round" />
        <ellipse cx="220" cy="140" rx="7" ry="10" fill="#FFFFFF" stroke={OUTLINE} strokeWidth="1.5" />
      </g>
      <g id="arm-left">
        {[104, 124].map((x, i) => (
          <g key={x} id={i === 0 ? "leg-left" : "leg-right"} transform={`translate(${i === 0 ? step * 0.7 : -step * 0.7} 0)`}>
            <rect x={x} y="120" width="9" height="30" rx="3" fill="#FFF7ED" stroke={OUTLINE} strokeWidth="2" />
            <rect x={x - 2} y="145" width="13" height="6" rx="2" fill="#18181B" />
          </g>
        ))}
      </g>
      <g id="arm-right">
        {[176, 196].map((x, i) => (
          <g key={x} id={i === 0 ? "leg-back-left" : "leg-back-right"} transform={`translate(${i === 0 ? step * 0.7 : -step * 0.7} 0)`}>
            <rect x={x} y="120" width="9" height="30" rx="3" fill="#FFF7ED" stroke={OUTLINE} strokeWidth="2" />
            <rect x={x - 2} y="145" width="13" height="6" rx="2" fill="#18181B" />
          </g>
        ))}
      </g>
      <rect x="176" y="130" width="10" height="12" rx="3" fill="#A16207" />
      <ellipse cx="150" cy="126" rx="17" ry="10" fill="#F9A8D4" stroke={OUTLINE} strokeWidth="2" />
      {[142, 148, 154, 160].map((x) => <rect key={x} x={x} y="132" width="3" height="7" rx="1.5" fill="#F472B6" />)}

      <g id="head">
        <path d="M 48 48 Q 36 32 44 28 Q 54 28 58 44 Z" fill="#FEF3C7" stroke={OUTLINE} strokeWidth="2" />
        <path d="M 76 46 Q 88 30 82 26 Q 70 28 66 44 Z" fill="#FEF3C7" stroke={OUTLINE} strokeWidth="2" />
        <path d="M 34 58 Q 20 52 22 68 Q 32 74 44 66 Z" fill="#FFF7ED" stroke={OUTLINE} strokeWidth="2" />
        <path d="M 84 58 Q 98 52 98 68 Q 88 74 76 66 Z" fill="#FFF7ED" stroke={OUTLINE} strokeWidth="2" />
        <path d="M 28 62 Q 24 66 32 68 Z" fill="#F9A6A6" />
        <rect x="44" y="52" width="60" height="58" rx="20" fill="#FFF7ED" stroke={OUTLINE} strokeWidth="2" />
        <circle cx="62" cy="58" r="4" fill="#DC2626" />
        <ellipse cx="38" cy="90" rx="20" ry="15" fill="#F9A8D4" stroke={OUTLINE} strokeWidth="2" />
        <circle cx="31" cy="87" r="2.5" fill="#9D174D" />
        <circle cx="43" cy="88" r="2.5" fill="#9D174D" />
        <circle id="eye-left" cx="56" cy="72" r={5 * blink} fill="#111827" />
        <circle id="eye-right" cx="82" cy="72" r={5 * blink} fill="#111827" />
        <path d="M 50 66 L 44 62 M 88 66 L 94 62" stroke="#111827" strokeWidth="1.5" />
        <g id="mouth"><path d="M 34 100 Q 48 108 60 100" fill="none" stroke="#7C2D12" strokeWidth="2" /></g>
        {garland.map((dot, i) => <circle key={i} cx={dot.x} cy={dot.y} r="4" fill={dot.fill} />)}
        <circle cx="80" cy="102" r="6" fill="#FBBF24" stroke={OUTLINE} strokeWidth="1.5" />
      </g>
    </g>
  );
}

export function SnakeSVG({ prefix, t, blink, cssAnimate, action }: AnimalRenderProps): ReactElement {
  const sway = Math.sin(t * 3) * 5;
  const tongue = action === "slither" ? 0.7 + Math.abs(Math.sin(t * 8)) * 0.6 : 1;
  return (
    <g className={cssAnimate && action === "slither" ? "slither" : undefined}>
      <defs>
        <linearGradient id={`${prefix}-snake-scale`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22C55E" />
          <stop offset="100%" stopColor="#15803D" />
        </linearGradient>
      </defs>
      <g id="body">
        <g id="tail">
          <ellipse cx="112" cy="146" rx="54" ry="8" fill="none" stroke="#16A34A" strokeWidth="14" strokeLinecap="round" />
          <ellipse cx="140" cy="134" rx="42" ry="7" fill="none" stroke="#22C55E" strokeWidth="13" strokeLinecap="round" />
        </g>
        <path d="M 90 138 Q 58 116 104 98 Q 146 82 108 62 Q 82 48 122 36" fill="none" stroke="#15803D" strokeWidth="24" strokeLinecap="round" />
        <path d="M 90 138 Q 58 116 104 98 Q 146 82 108 62 Q 82 48 122 36" fill="none" stroke={`url(#${prefix}-snake-scale)`} strokeWidth="18" strokeLinecap="round" />
        <path d="M 92 132 L 102 126 M 108 104 L 118 100 M 120 72 L 130 68" stroke="#14532D" strokeWidth="4" strokeLinecap="round" />
        <path d="M 96 140 Q 104 144 112 140 M 126 132 Q 134 136 142 132 M 112 100 Q 120 104 128 100" fill="none" stroke="#BBF7D0" strokeWidth="3" />
      </g>
      <g id="arm-left" />
      <g id="arm-right" />
      <g id="leg-left" />
      <g id="leg-right" />

      <g id="head" transform={`rotate(${sway} 132 68)`}>
        <path d="M 132 18 Q 86 14 88 50 Q 90 76 110 78 Q 132 82 152 76 Q 174 72 174 48 Q 172 16 132 18 Z" fill="#22C55E" stroke="#14532D" strokeWidth="4" />
        <circle cx="112" cy="48" r="8" fill="#FDE047" stroke="#14532D" strokeWidth="2" />
        <circle cx="112" cy="48" r="3" fill="#111827" />
        <circle cx="150" cy="48" r="8" fill="#FDE047" stroke="#14532D" strokeWidth="2" />
        <circle cx="150" cy="48" r="3" fill="#111827" />
        <path d="M 126 22 L 110 32 L 132 38 Z" fill="#16A34A" stroke="#14532D" strokeWidth="2" />
        <circle id="eye-left" cx="120" cy="30" r={3.5 * blink} fill="#FDE047" />
        <circle id="eye-right" cx="136" cy="30" r={3.5 * blink} fill="#FDE047" />
        <path d="M 120 26 V 34 M 136 26 V 34" stroke="#111827" strokeWidth="1.5" />
        <g id="mouth" className={cssAnimate && action === "slither" ? "tongue-flick" : undefined} transform={`translate(${96 - (tongue - 0.7) * 14} 0) scale(${tongue} 1)`}>
          <path d="M 110 36 L 90 34 M 90 34 L 80 28 M 90 34 L 80 40" fill="none" stroke="#DC2626" strokeWidth="3" strokeLinecap="round" />
        </g>
        <path d="M 116 36 L 119 42 L 122 36 M 132 36 L 135 42 L 138 36" fill="#FFFFFF" />
      </g>
    </g>
  );
}

export function ElephantSVG({ prefix, t, step, wag, blink, cssAnimate, action }: AnimalRenderProps): ReactElement {
  return (
    <g>
      <defs>
        <linearGradient id={`${prefix}-elephant-skin`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#94A3B8" />
          <stop offset="100%" stopColor="#64748B" />
        </linearGradient>
      </defs>
      <g id="body">
        <ellipse cx="140" cy="86" rx="92" ry="46" fill={`url(#${prefix}-elephant-skin)`} stroke={OUTLINE} strokeWidth="2" />
        <path d="M 70 96 Q 140 138 218 96 Q 226 122 196 132 H 96 Q 70 126 70 96 Z" fill="#7C8CA1" opacity="0.7" />
      </g>
      <g id="tail" className={cssAnimate && action === "tailWag" ? "tail-wag" : undefined} transform={`rotate(${wag * 8} 228 82)`}>
        <path d="M 228 82 Q 240 112 234 138" fill="none" stroke="#64748B" strokeWidth="4" strokeLinecap="round" />
        <ellipse cx="234" cy="140" rx="6" ry="9" fill="#18181B" />
      </g>
      <g id="arm-left">
        {[92, 124].map((x, i) => (
          <g key={x} id={i === 0 ? "leg-left" : "leg-right"} transform={`translate(${i === 0 ? step * 0.8 : -step * 0.8} 0)`}>
            <rect x={x} y="120" width="20" height="30" rx="8" fill="#7C8CA1" stroke={OUTLINE} strokeWidth="2" />
            <rect x={x - 1} y="144" width="22" height="7" rx="3" fill="#94A3B8" />
            {[x + 4, x + 10, x + 16].map((nx) => <circle key={nx} cx={nx} cy="142" r="2" fill="#FFFFFF" />)}
          </g>
        ))}
      </g>
      <g id="arm-right">
        {[170, 202].map((x, i) => (
          <g key={x} id={i === 0 ? "leg-back-left" : "leg-back-right"} transform={`translate(${i === 0 ? step * 0.8 : -step * 0.8} 0)`}>
            <rect x={x} y="120" width="20" height="30" rx="8" fill="#7C8CA1" stroke={OUTLINE} strokeWidth="2" />
            <rect x={x - 1} y="144" width="22" height="7" rx="3" fill="#94A3B8" />
            {[x + 4, x + 10, x + 16].map((nx) => <circle key={nx} cx={nx} cy="142" r="2" fill="#FFFFFF" />)}
          </g>
        ))}
      </g>
      <path d="M 104 54 H 174 V 78 H 104 Z" fill="#DC2626" stroke={OUTLINE} strokeWidth="2" />
      <path d="M 110 60 L 118 60 L 114 66 Z M 132 60 L 140 60 L 136 66 Z M 154 60 L 162 60 L 158 66 Z" fill="#FBBF24" />
      <circle cx="178" cy="74" r="6" fill="#FBBF24" stroke={OUTLINE} strokeWidth="1.5" />

      <g id="head">
        <ellipse cx="78" cy="72" rx="42" ry="46" fill="#CBD5E1" stroke={OUTLINE} strokeWidth="2" />
        <ellipse cx="82" cy="74" rx="30" ry="35" fill="#FBCFE8" opacity="0.8" />
        <ellipse cx="56" cy="74" rx="42" ry="40" fill={`url(#${prefix}-elephant-skin)`} stroke={OUTLINE} strokeWidth="2" />
        <path d="M 46 48 Q 56 38 66 48" fill="none" stroke="#64748B" strokeWidth="4" strokeLinecap="round" />
        <circle id="eye-left" cx="42" cy="68" r={4 * blink} fill="#111827" />
        <circle id="eye-right" cx="70" cy="68" r={3.4 * blink} fill="#111827" opacity="0.65" />
        <g id="trunk" className={cssAnimate && action === "walk" ? "tail-wag" : undefined} transform={`rotate(${Math.sin(t * 4) * 7} 34 88)`}>
          <path d="M 34 86 C 10 96 12 134 40 136 C 60 136 60 112 46 108" fill="none" stroke="#7C8CA1" strokeWidth="20" strokeLinecap="round" />
          <path d="M 34 86 C 10 96 12 134 40 136 C 60 136 60 112 46 108" fill="none" stroke="#94A3B8" strokeWidth="14" strokeLinecap="round" />
          <ellipse cx="46" cy="108" rx="8" ry="6" fill="#F9A8D4" />
        </g>
        <g id="mouth">
          <path d="M 36 92 Q 24 78 30 62 Q 40 74 42 88 Z" fill="#FEF3C7" stroke={OUTLINE} strokeWidth="2" />
          <path d="M 52 96 Q 46 78 56 66 Q 66 80 62 94 Z" fill="#FEF3C7" stroke={OUTLINE} strokeWidth="2" />
        </g>
      </g>
    </g>
  );
}

export function DeerSVG({ prefix, t, step, blink, cssAnimate, action }: AnimalRenderProps): ReactElement {
  return (
    <g>
      <defs>
        <linearGradient id={`${prefix}-deer-coat`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>
      </defs>
      <g id="body">
        <path d="M 98 80 Q 132 70 174 78 Q 204 84 204 108 Q 202 120 186 120 H 108 Q 94 116 98 80 Z" fill={`url(#${prefix}-deer-coat)`} stroke={OUTLINE} strokeWidth="2" />
        <path d="M 104 108 Q 150 122 194 108 Q 196 118 184 120 H 110 Q 102 116 104 108 Z" fill="#FEF3C7" />
        {[
          [118, 88], [136, 84], [154, 86], [172, 90], [126, 100], [146, 98], [166, 102],
        ].map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="3" fill="#FFFFFF" />)}
      </g>
      <g id="tail" className={cssAnimate && action === "tailWag" ? "tail-wag" : undefined} transform={`rotate(${action === "tailWag" ? Math.sin(t * 12) * 14 : 0} 204 84)`}>
        <path d="M 204 84 Q 216 76 218 66" fill="none" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" />
      </g>
      <g id="arm-left">
        {[116, 132].map((x, i) => (
          <g key={x} id={i === 0 ? "leg-left" : "leg-right"} transform={`translate(${i === 0 ? step : -step} 0)`}>
            <rect x={x} y="116" width="5" height="34" rx="2" fill="#B45309" />
            <rect x={x - 1} y="146" width="7" height="5" rx="1" fill="#18181B" />
          </g>
        ))}
      </g>
      <g id="arm-right">
        {[178, 194].map((x, i) => (
          <g key={x} id={i === 0 ? "leg-back-left" : "leg-back-right"} transform={`translate(${i === 0 ? step : -step} 0)`}>
            <rect x={x} y="116" width="5" height="34" rx="2" fill="#B45309" />
            <rect x={x - 1} y="146" width="7" height="5" rx="1" fill="#18181B" />
          </g>
        ))}
      </g>

      <g id="head">
        <path d="M 106 88 L 76 42 L 92 36 L 116 78 Z" fill="#D97706" stroke={OUTLINE} strokeWidth="2" />
        <ellipse cx="56" cy="40" rx="24" ry="16" fill="#D97706" stroke={OUTLINE} strokeWidth="2" />
        <path d="M 46 28 Q 36 10 44 6 Q 54 12 54 28 Z" fill="#D97706" stroke={OUTLINE} strokeWidth="2" />
        <path d="M 72 26 Q 82 8 76 4 Q 66 12 64 28 Z" fill="#D97706" stroke={OUTLINE} strokeWidth="2" />
        <path d="M 48 27 Q 43 16 46 12 Q 51 18 52 27 Z" fill="#F9A6A6" />
        <path d="M 70 25 Q 75 14 72 10 Q 67 17 66 26 Z" fill="#F9A6A6" />
        <circle id="eye-left" cx="50" cy="40" r={4.5 * blink} fill="#111827" />
        <circle id="eye-right" cx="68" cy="40" r={4.5 * blink} fill="#111827" />
        <circle cx="36" cy="46" r="3.5" fill="#111827" />
        <g id="mouth"><path d="M 38 52 Q 48 58 58 50" fill="none" stroke="#7C2D12" strokeWidth="1.5" /></g>
        <g stroke="#78350F" strokeWidth="4" strokeLinecap="round" fill="none">
          <path d="M 50 26 Q 46 8 36 2 M 46 16 Q 34 16 28 10 M 44 10 Q 52 6 56 0" />
          <path d="M 70 26 Q 76 8 86 2 M 74 16 Q 86 16 92 10 M 76 10 Q 68 6 64 0" />
        </g>
      </g>
    </g>
  );
}

const RENDERERS: Record<string, (props: AnimalRenderProps) => ReactElement> = {
  dog: DogSVG,
  cat: CatSVG,
  lion: LionSVG,
  buffalo: BuffaloSVG,
  cow: CowSVG,
  snake: SnakeSVG,
  elephant: ElephantSVG,
  deer: DeerSVG,
};

const SHADOWS: Record<string, { rx: number; ry: number }> = {
  dog: { rx: 88, ry: 7 },
  cat: { rx: 62, ry: 6 },
  lion: { rx: 92, ry: 8 },
  buffalo: { rx: 94, ry: 8 },
  cow: { rx: 82, ry: 7 },
  snake: { rx: 66, ry: 5 },
  elephant: { rx: 108, ry: 9 },
  deer: { rx: 78, ry: 6 },
};

export function AnimalSvg({ id, action, time, animSpeed = 1, prefix, cssAnimate = false }: AnimalSvgProps) {
  const t = time * 0.001 * animSpeed;
  const walking = action === "walk" || action === "sneak" || action === "run";
  const step = walking ? Math.sin(t * 10) * 10 : 0;
  const jump = action === "jump" ? -Math.abs(Math.sin(t * 7)) * 16 : 0;
  const wag = action === "tailWag" || action === "bark" || action === "roar" ? Math.sin(t * 14) : Math.sin(t * 3) * 0.25;
  const blink = action === "sleep" ? 0.12 : action === "blink" ? (Math.sin(t * 2) > 0.96 ? 0.12 : 1) : 1;
  const mouth = action === "roar" || action === "bark" || action === "moo" ? 0.7 + Math.abs(Math.sin(t * 9)) * 0.7 : 1;
  const shadow = SHADOWS[id] ?? SHADOWS.dog;
  const Renderer = RENDERERS[id] ?? DogSVG;
  const rootClass = cssAnimate ? (action === "slither" ? "slither" : action === "roar" ? "roar" : "") : "";

  return (
    <g>
      <line x1="18" y1="150" x2="242" y2="150" stroke="#0F172A" strokeOpacity="0.14" strokeWidth="2" />
      <ellipse cx="130" cy="153" rx={shadow.rx} ry={shadow.ry} fill="#0F172A" opacity="0.11" />
      <g className={rootClass} transform={cssAnimate ? undefined : `translate(0 ${jump})`}>
        <Renderer prefix={prefix} t={t} action={action} step={step} wag={wag} blink={blink} mouth={mouth} cssAnimate={cssAnimate} />
      </g>
    </g>
  );
}
