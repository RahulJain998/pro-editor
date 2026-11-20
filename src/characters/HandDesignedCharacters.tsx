import type { ReactNode } from "react";
import type { AnimationName } from "@/lib/types";

export interface HandCharacterDef {
  id: string;
  name: string;
  hint: string;
  skin: string;
  shirt: string;
  hair: string;
  accessory: string;
  variant: number;
}

export const HAND_CHARACTERS: HandCharacterDef[] = [
  { id: "police", name: "Police", hint: "पुलिस • Khaki Uniform", skin: "#E8B88A", shirt: "#C9A86A", hair: "#111827", accessory: "police", variant: 12 },
  { id: "thief", name: "Chor / Thief", hint: "चोर • Stripe Shirt", skin: "#F1C27D", shirt: "#111111", hair: "#111111", accessory: "mask", variant: 13 },
  { id: "girl", name: "Girl", hint: "लड़की • Ponytails", skin: "#FDE8D0", shirt: "#EC4899", hair: "#1C1917", accessory: "ponytails", variant: 14 },
  { id: "topper", name: "Topper Girl", hint: "टॉपर • A+ Student", skin: "#FDEBD0", shirt: "#FFFFFF", hair: "#18181B", accessory: "glasses-braid", variant: 15 },
  { id: "doctor-girl", name: "Doctor Girl", hint: "डॉक्टर • White Coat", skin: "#FDEBD0", shirt: "#FFFFFF", hair: "#18181B", accessory: "stethoscope", variant: 16 },
  { id: "business-girl", name: "Business Girl", hint: "बिज़नेस • Blazer", skin: "#FDEBD0", shirt: "#1F2937", hair: "#7C2D12", accessory: "laptop", variant: 17 },
  { id: "stylish-girl", name: "Stylish Girl", hint: "स्टाइलिश • Fashion", skin: "#FDEBD0", shirt: "#FACC15", hair: "#92400E", accessory: "sunglasses", variant: 18 },
  { id: "village-boy", name: "Village Boy", hint: "गाँव का लड़का • Gamcha", skin: "#D99A5B", shirt: "#F9FAFB", hair: "#18181B", accessory: "gamcha", variant: 19 },
  { id: "dadaji", name: "Dadaji", hint: "दादाजी • Detailed", skin: "#F5D5B8", shirt: "#FFFFFF", hair: "#F4F4F5", accessory: "beard-glasses", variant: 20 },
  { id: "women", name: "Women / Aunty", hint: "महिला • Green Saree", skin: "#E8B88A", shirt: "#16A34A", hair: "#18181B", accessory: "saree", variant: 21 },
];

export function isHandCharacter(id: string): boolean {
  return HAND_CHARACTERS.some((item) => item.id === id);
}

export function findHandCharacter(id: string): HandCharacterDef {
  return HAND_CHARACTERS.find((item) => item.id === id) ?? HAND_CHARACTERS[0];
}

export interface HandCharacterSvgProps {
  id: string;
  action: AnimationName;
  time: number;
  animSpeed?: number;
  prefix: string;
  skin?: string;
  shirt?: string;
  hair?: string;
}

function mix(hex: string, target: string, amount: number): string {
  const a = hex.replace("#", "");
  const b = target.replace("#", "");
  const num = (v: string) => parseInt(v.length === 3 ? v.split("").map((c) => c + c).join("") : v, 16);
  const av = num(a);
  const bv = num(b);
  const channel = (shift: number) => {
    const av2 = (av >> shift) & 255;
    const bv2 = (bv >> shift) & 255;
    return Math.round(av2 + (bv2 - av2) * amount).toString(16).padStart(2, "0");
  };
  return `#${channel(16)}${channel(8)}${channel(0)}`;
}

function starPoints(cx: number, cy: number, outer: number, inner: number, points = 5): string {
  const out: string[] = [];
  for (let i = 0; i < points * 2; i++) {
    const r = i % 2 === 0 ? outer : inner;
    const angle = -Math.PI / 2 + (i * Math.PI) / points;
    out.push(`${(cx + Math.cos(angle) * r).toFixed(2)},${(cy + Math.sin(angle) * r).toFixed(2)}`);
  }
  return out.join(" ");
}

export function HandCharacterSvg({
  id,
  action,
  time,
  animSpeed = 1,
  prefix,
  skin: skinOverride,
  shirt: shirtOverride,
  hair: hairOverride,
}: HandCharacterSvgProps) {
  const def = findHandCharacter(id);
  const skin = skinOverride ?? def.skin;
  const shirt = shirtOverride ?? def.shirt;
  const hair = hairOverride ?? def.hair;
  const t = time * 0.001 * animSpeed;
  const walking = action === "walk" || action === "run" || action === "sneak";
  const legSwing = walking ? Math.sin(t * (action === "run" ? 12 : 8)) * (action === "sneak" ? 7 : 14) : 0;
  const armSwing = walking ? -legSwing * 0.7 : 0;
  const waveAngle = action === "wave" ? -38 + Math.sin(t * 9) * 22 : 0;
  const jumpDy = action === "jump" ? -Math.abs(Math.sin(t * 6)) * 14 : 0;
  const mouthScale = action === "talk" || action === "sneak" ? 0.55 + Math.abs(Math.sin(t * 12)) * 1.15 : 1;
  const eyeScale = action === "blink" ? (Math.sin(t * 2) > 0.96 ? 0.14 : 1) : 1;
  const bodyLean = action === "sneak" ? 9 : action === "run" ? 6 : action === "dance" ? Math.sin(t * 7) * 5 : 0;
  const danceTwist = action === "dance" ? Math.sin(t * 7) * 7 : 0;

  const pants =
    id === "police" ? "#8B6F3A" :
    id === "thief" ? "#111111" :
    id === "village-boy" ? "#B98A56" :
    id === "dadaji" ? "#A16207" :
    id === "women" ? "#166534" :
    id === "girl" ? "#3B82F6" :
    id === "topper" ? "#2563EB" :
    id === "doctor-girl" ? "#18181B" :
    id === "business-girl" ? "#111827" :
    id === "stylish-girl" ? "#2563EB" : "#1E293B";
  const shoe =
    id === "village-boy" ? "#92400E" :
    id === "dadaji" ? "#78350F" :
    id === "girl" ? "#EC4899" :
    id === "doctor-girl" ? "#FFFFFF" :
    id === "business-girl" ? "#111827" :
    id === "stylish-girl" ? "#FFFFFF" : "#111827";

  const legArt = (side: "left" | "right"): ReactNode => (
    <>
      <rect x={side === "left" ? 78 : 106} y="150" width="18" height="58" rx="8" fill={pants} />
      <path d={`M ${side === "left" ? 80 : 108} 176 L ${side === "left" ? 94 : 122} 176`} stroke={mix(pants, "#FFFFFF", 0.18)} strokeWidth="2" opacity="0.5" />
      <path d={`M ${side === "left" ? 74 : 102} 205 Q ${side === "left" ? 87 : 115} 198 ${side === "left" ? 99 : 127} 205 L ${side === "left" ? 99 : 127} 214 L ${side === "left" ? 74 : 102} 214 Z`} fill={shoe} />
      {id === "dadaji" && <path d={`M ${side === "left" ? 76 : 104} 208 L ${side === "left" ? 97 : 125} 208`} stroke="#F5D5B8" strokeWidth="2" />}
      {id === "village-boy" && <path d={`M ${side === "left" ? 74 : 102} 207 Q ${side === "left" ? 86 : 114} 201 ${side === "left" ? 99 : 127} 207`} fill="none" stroke="#FDE68A" strokeWidth="3" />}
    </>
  );

  const bodyArt: ReactNode = (
    <>
      {id === "women" && (
        <path d="M 58 104 Q 100 88 142 104 L 160 200 Q 100 220 40 200 Z" fill={`url(#${prefix}-hc-sari)`} />
      )}
      {id === "dadaji" && <path d="M 58 168 Q 100 156 142 168 L 150 210 L 50 210 Z" fill="#FFFFFF" />}
      {id === "village-boy" && <path d="M 60 156 Q 100 146 140 156 L 148 190 Q 100 204 52 190 Z" fill="#B98A56" />}

      <path
        d={id === "women" ? "M 66 98 Q 100 86 134 98 L 140 138 Q 100 150 60 138 Z" : "M 64 96 Q 100 84 136 96 L 141 158 Q 100 170 59 158 Z"}
        fill={id === "women" ? "#DC2626" : `url(#${prefix}-hc-shirt)`}
        stroke={mix(shirt, "#000000", 0.22)}
        strokeWidth="1.5"
      />
      {id === "police" && (
        <>
          <rect x="69" y="112" width="25" height="20" rx="3" fill="#B89559" stroke="#7A5F2F" strokeWidth="1.5" />
          <rect x="106" y="112" width="25" height="20" rx="3" fill="#B89559" stroke="#7A5F2F" strokeWidth="1.5" />
          <path d="M 69 114 L 81 122 L 94 114 M 106 114 L 118 122 L 131 114" fill="none" stroke="#7A5F2F" strokeWidth="1.3" />
          <circle cx="81.5" cy="124" r="2.3" fill="#FBBF24" /><circle cx="118.5" cy="124" r="2.3" fill="#FBBF24" />
          <rect x="60" y="145" width="80" height="11" rx="3" fill="#111827" />
          <rect x="91" y="144" width="18" height="13" rx="2" fill="#FBBF24" stroke="#B45309" strokeWidth="1.5" />
          <polygon points={starPoints(72, 104, 7, 3)} fill="#FBBF24" />
          <polygon points={starPoints(128, 104, 7, 3)} fill="#FBBF24" />
          <path d="M 88 102 Q 100 112 112 102" fill="none" stroke="#111827" strokeWidth="2.2" />
          <circle cx="100" cy="111" r="4" fill="#D4D4D8" stroke="#71717A" strokeWidth="1" />
        </>
      )}
      {id === "thief" && (
        <g clipPath={`url(#${prefix}-hc-stripeclip)`}>
          {[104, 116, 128, 140, 152].map((y) => <rect key={y} x="55" y={y} width="90" height="6" fill="#F8FAFC" opacity="0.95" />)}
        </g>
      )}
      {id === "girl" && (
        <>
          <path d="M 100 110 C 88 98 70 108 100 130 C 130 108 112 98 100 110 Z" fill="#FFFFFF" />
          <path d="M 60 146 Q 100 136 140 146 L 150 176 Q 100 190 50 176 Z" fill="#3B82F6" />
          <path d="M 64 160 Q 100 170 136 160" fill="none" stroke="#93C5FD" strokeWidth="2.5" />
          <path d="M 48 106 Q 38 128 50 148 Q 60 144 62 128 Z" fill="#EC4899" opacity="0.9" />
        </>
      )}
      {id === "topper" && (
        <>
          <path d="M 100 100 L 106 109 L 102 140 L 100 144 L 98 140 L 94 109 Z" fill="#DC2626" />
          <rect x="121" y="108" width="20" height="14" rx="3" fill="#FBBF24" stroke="#B45309" strokeWidth="1" />
          <text x="131" y="119" textAnchor="middle" fontSize="9" fontWeight="900" fill="#7C2D12">A+</text>
          <path d="M 60 148 Q 100 138 140 148 L 146 176 Q 100 190 54 176 Z" fill="#2563EB" />
          <path d="M 50 112 Q 40 136 54 154" fill="none" stroke="#7C3AED" strokeWidth="8" opacity="0.85" />
        </>
      )}
      {id === "doctor-girl" && (
        <>
          <path d="M 88 97 L 100 108 L 112 97 L 141 164 Q 100 176 59 164 Z" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
          <path d="M 92 98 L 100 114 L 108 98" fill="#BAE6FD" />
          <path d="M 100 114 L 100 164" stroke="#94A3B8" strokeWidth="1.5" />
          <path d="M 82 100 Q 70 128 90 138 Q 100 143 108 132" fill="none" stroke="#18181B" strokeWidth="3" />
          <circle cx="110" cy="132" r="6" fill="#D4D4D8" stroke="#71717A" strokeWidth="1.5" />
          <circle cx="110" cy="132" r="2.5" fill="#94A3B8" />
        </>
      )}
      {id === "business-girl" && (
        <>
          <path d="M 86 98 L 100 112 L 114 98 L 141 158 L 100 164 L 59 158 Z" fill="#1F2937" />
          <path d="M 92 99 L 100 120 L 108 99 L 100 112 Z" fill="#FFFFFF" />
          <path d="M 100 164 L 100 190" stroke="#111827" strokeWidth="30" strokeLinecap="round" />
          <path d="M 86 132 L 114 132" stroke="#4B5563" strokeWidth="2" />
        </>
      )}
      {id === "stylish-girl" && (
        <>
          <path d="M 66 100 Q 100 88 134 100 L 138 128 Q 100 138 62 128 Z" fill="#FACC15" />
          <path d="M 60 98 L 76 104 L 72 158 L 58 150 Z M 140 98 L 124 104 L 128 158 L 142 150 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
          <path d="M 60 148 Q 100 138 140 148 L 141 196 Q 100 206 59 196 Z" fill="#2563EB" />
          <path d="M 74 166 l 8 -5 l -2 9 M 124 180 l 8 -5 l -2 9" fill="none" stroke="#93C5FD" strokeWidth="3" />
          <path d="M 86 104 Q 100 114 114 104" fill="none" stroke="#FBBF24" strokeWidth="4" />
          <circle cx="100" cy="116" r="4" fill="#FDE68A" />
        </>
      )}
      {id === "village-boy" && (
        <>
          <path d="M 64 98 Q 100 86 136 98 L 141 160 Q 100 172 59 160 Z" fill="#F9FAFB" stroke="#E7E5E4" strokeWidth="1.5" />
          <path d="M 66 110 Q 100 122 134 110 M 63 130 Q 100 142 137 130" fill="none" stroke="#FDE68A" strokeWidth="2" opacity="0.8" />
          <path d="M 58 100 Q 70 126 62 154 L 78 150 Q 74 124 70 100 Z" fill="#FFFFFF" />
          {[106, 118, 130, 142].map((y, i) => <path key={y} d={`M 60 ${y} L 76 ${y - 4}`} stroke={i % 2 ? "#DC2626" : "#FFFFFF"} strokeWidth="3" />)}
        </>
      )}
      {id === "dadaji" && (
        <>
          <path d="M 66 98 Q 100 86 134 98 L 139 164 Q 100 176 61 164 Z" fill="#FFFFFF" stroke="#E4E4E7" strokeWidth="1.5" />
          <path d="M 68 100 L 82 104 L 80 164 L 62 160 Z M 132 100 L 118 104 L 120 164 L 138 160 Z" fill="#D9A0A0" />
          <path d="M 66 100 L 134 100" stroke="#B45309" strokeWidth="2" />
          {[114, 130, 146].map((y) => <circle key={y} cx="100" cy={y} r="2.8" fill="#92400E" />)}
          <path d="M 88 102 Q 100 116 112 102" fill="none" stroke="#A1A1AA" strokeWidth="1.5" />
        </>
      )}
      {id === "women" && (
        <>
          <path d="M 62 108 Q 100 124 138 108 L 142 140 Q 100 154 58 140 Z" fill="#16A34A" stroke="#FBBF24" strokeWidth="2" />
          <path d="M 58 174 Q 100 184 142 174 L 146 186 Q 100 198 54 186 Z" fill="#16A34A" stroke="#FBBF24" strokeWidth="2.5" />
          {[70, 82, 94, 106, 118, 130].map((x) => <circle key={x} cx={x} cy={x % 24 === 0 ? 181 : 178} r="2" fill="#FDE047" />)}
          <path d="M 88 102 L 100 116 L 112 102" fill="#DC2626" />
          <path d="M 84 108 Q 100 122 116 108" fill="none" stroke="#FBBF24" strokeWidth="3" />
          <circle cx="100" cy="126" r="5" fill="#FBBF24" stroke="#B45309" strokeWidth="1" />
        </>
      )}
    </>
  );

  const leftArmArt: ReactNode = (
    <>
      <rect x="48" y="100" width="16" height="52" rx="8" fill={`url(#${prefix}-hc-shirt)`} stroke={mix(shirt, "#000000", 0.2)} strokeWidth="1" />
      <circle cx="56" cy="154" r="9" fill={`url(#${prefix}-hc-skin)`} />
      {id === "thief" && (
        <g>
          <path d="M 36 132 Q 56 120 76 132 Q 82 156 64 170 Q 40 170 30 152 Z" fill="#A16207" stroke="#713F12" strokeWidth="2" />
          <path d="M 42 134 Q 56 126 70 134" fill="none" stroke="#D97706" strokeWidth="3" />
          <text x="55" y="157" textAnchor="middle" fontSize="20" fontWeight="900" fill="#FFFFFF">₹</text>
          <path d="M 66 112 Q 84 96 92 92" fill="none" stroke="#A16207" strokeWidth="9" strokeLinecap="round" />
        </g>
      )}
      {id === "topper" && (
        <g>
          <rect x="26" y="150" width="30" height="20" rx="2" fill="#2563EB" stroke="#1E3A8A" strokeWidth="1.5" />
          <rect x="30" y="154" width="30" height="20" rx="2" fill="#DC2626" stroke="#991B1B" strokeWidth="1.5" />
          <path d="M 35 158 L 53 158 M 39 166 L 57 166" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.8" />
        </g>
      )}
      {id === "doctor-girl" && (
        <g>
          <rect x="34" y="146" width="25" height="18" rx="3" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1.5" />
          <path d="M 39 150 L 54 150 M 39 155 L 50 155 M 39 160 L 53 160" stroke="#64748B" strokeWidth="1.4" />
          <path d="M 38 142 L 55 142 L 55 147 L 38 147 Z" fill="#FFFFFF" stroke="#94A3B8" />
        </g>
      )}
      {id === "business-girl" && (
        <g>
          <path d="M 28 150 L 62 150 L 58 182 L 32 182 Z" fill="#92400E" stroke="#78350F" strokeWidth="2" />
          <path d="M 37 150 Q 45 138 53 150" fill="none" stroke="#92400E" strokeWidth="4" />
          <rect x="38" y="162" width="14" height="9" rx="2" fill="#FBBF24" />
        </g>
      )}
      {id === "stylish-girl" && (
        <g>
          <path d="M 47 145 Q 56 151 66 145" fill="none" stroke="#FBBF24" strokeWidth="3" />
          <circle cx="49" cy="150" r="2" fill="#FDE68A" /><circle cx="56" cy="153" r="2" fill="#FDE68A" /><circle cx="64" cy="150" r="2" fill="#FDE68A" />
        </g>
      )}
      {id === "village-boy" && (
        <g>
          <path d="M 58 148 Q 48 132 52 112" fill="none" stroke="#A16207" strokeWidth="5" strokeLinecap="round" />
          <circle cx="52" cy="110" r="10" fill="#FACC15" stroke="#CA8A04" strokeWidth="1.5" />
          <path d="M 52 100 Q 56 94 60 98" fill="#16A34A" />
        </g>
      )}
      {id === "women" && (
        <g>
          <ellipse cx="42" cy="160" rx="25" ry="8" fill="#D4D4D8" stroke="#A1A1AA" strokeWidth="2" />
          <ellipse cx="42" cy="157" rx="23" ry="6" fill="#E5E7EB" />
          <circle cx="33" cy="155" r="5" fill="#EF4444" /><circle cx="44" cy="152" r="5" fill="#F97316" /><circle cx="53" cy="157" r="5" fill="#22C55E" />
          <path d="M 46 146 Q 56 152 64 146" fill="none" stroke="#FBBF24" strokeWidth="3" />
        </g>
      )}
    </>
  );

  const rightArmArt: ReactNode = (
    <>
      <rect x="136" y="100" width="16" height="52" rx="8" fill={`url(#${prefix}-hc-shirt)`} stroke={mix(shirt, "#000000", 0.2)} strokeWidth="1" />
      <circle cx="144" cy="154" r="9" fill={`url(#${prefix}-hc-skin)`} />
      {id === "police" && (
        <g>
          <path d="M 148 150 L 166 68" stroke="#1F2937" strokeWidth="6" strokeLinecap="round" />
          <path d="M 166 68 L 170 58" stroke="#111827" strokeWidth="8" strokeLinecap="round" />
          <path d="M 146 148 L 150 158" stroke="#78350F" strokeWidth="7" />
        </g>
      )}
      {id === "doctor-girl" && (
        <g>
          <rect x="142" y="128" width="30" height="38" rx="3" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="2" />
          <rect x="148" y="134" width="18" height="5" rx="2" fill="#CBD5E1" />
          {[144, 151, 158].map((y) => <path key={y} d={`M 147 ${y} L 164 ${y}`} stroke="#94A3B8" strokeWidth="1.4" />)}
          <path d="M 158 126 L 166 126 L 166 139 L 158 139 Z" fill="#FDE047" />
        </g>
      )}
      {id === "business-girl" && <path d="M 144 154 Q 156 160 150 172" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />}
      {id === "stylish-girl" && (
        <g>
          <rect x="146" y="126" width="22" height="34" rx="4" fill="#111827" stroke="#374151" strokeWidth="2" />
          <rect x="149" y="131" width="16" height="23" rx="2" fill="#7DD3FC" />
          <circle cx="157" cy="143" r="4" fill="#E0F2FE" />
          <path d="M 140 153 Q 148 159 156 153" fill="none" stroke="#FBBF24" strokeWidth="2.5" />
        </g>
      )}
      {id === "village-boy" && (
        <path d="M 148 152 L 170 72" stroke="#92400E" strokeWidth="5" strokeLinecap="round" />
      )}
      {id === "dadaji" && (
        <g>
          <path d="M 148 152 L 170 76" stroke="#78350F" strokeWidth="6" strokeLinecap="round" />
          <circle cx="171" cy="74" r="5" fill="#A16207" />
        </g>
      )}
      {id === "women" && (
        <g>
          {[146, 150].map((x) => <path key={x} d={`M ${x - 3} 150 Q ${x + 3} 157 ${x + 8} 150`} fill="none" stroke="#FBBF24" strokeWidth="3" />)}
          <circle cx="147" cy="150" r="3" fill="#FDE68A" /><circle cx="155" cy="150" r="3" fill="#FDE68A" />
        </g>
      )}
    </>
  );

  const hairBack: ReactNode = id === "girl" || id === "topper" || id === "business-girl" || id === "stylish-girl" || id === "women" ? (
    <>
      <path d="M 66 48 Q 62 108 78 128 L 86 94 L 114 94 L 122 128 Q 138 108 134 48 Z" fill={`url(#${prefix}-hc-hair)`} />
      {id === "girl" && (
        <>
          <circle cx="56" cy="92" r="14" fill={hair} /><circle cx="144" cy="92" r="14" fill={hair} />
          <path d="M 48 80 Q 56 68 64 80 Z M 136 80 Q 144 68 152 80 Z" fill="#DC2626" />
          <path d="M 48 88 L 42 100 L 54 98 Z M 152 88 L 158 100 L 146 98 Z" fill="#EF4444" />
        </>
      )}
      {id === "topper" && (
        <>
          <path d="M 136 74 Q 152 94 142 126" fill="none" stroke={hair} strokeWidth="12" strokeLinecap="round" />
          <path d="M 138 120 Q 145 126 140 136" fill="none" stroke="#3B82F6" strokeWidth="6" />
          <polygon points={starPoints(72, 34, 6, 2.5, 4)} fill="#60A5FA" />
        </>
      )}
      {id === "stylish-girl" && (
        <>
          <path d="M 62 52 Q 50 106 66 140" fill="none" stroke="#92400E" strokeWidth="16" strokeLinecap="round" />
          <path d="M 138 50 Q 156 84 142 120" fill="none" stroke="#B45309" strokeWidth="15" strokeLinecap="round" />
          <path d="M 140 116 Q 154 128 146 142" fill="none" stroke="#FBBF24" strokeWidth="6" strokeLinecap="round" />
        </>
      )}
      {id === "women" && (
        <>
          <circle cx="100" cy="16" r="14" fill={hair} />
          <path d="M 126 24 Q 142 38 130 52" fill="none" stroke="#A1A1AA" strokeWidth="3" />
        </>
      )}
    </>
  ) : null;

  const headArt: ReactNode = (
    <>
      <rect x="91" y="86" width="18" height="18" rx="6" fill={mix(skin, "#000000", 0.1)} />
      {hairBack}
      <ellipse cx="68" cy="64" rx="7" ry="10" fill={skin} />
      <ellipse cx="132" cy="64" rx="7" ry="10" fill={skin} />
      <ellipse cx="100" cy="62" rx="36" ry="40" fill={`url(#${prefix}-hc-skin)`} stroke={mix(skin, "#000000", 0.12)} strokeWidth="1" />

      {id === "police" && (
        <>
          <path d="M 62 36 Q 100 8 138 36 L 136 44 Q 100 24 64 44 Z" fill="#8B6F3A" stroke="#5B4620" strokeWidth="2" />
          <path d="M 62 43 Q 100 28 138 43 Q 150 46 154 52 Q 128 58 100 52 Q 72 58 46 52 Q 50 46 62 43 Z" fill="#111827" />
          <polygon points={starPoints(100, 34, 9, 4)} fill="#FBBF24" stroke="#B45309" strokeWidth="1" />
          <text x="100" y="38" textAnchor="middle" fontSize="4.6" fontWeight="900" fill="#422006">POLICE</text>
        </>
      )}
      {id === "thief" && (
        <>
          <path d="M 64 36 Q 100 10 136 36 L 137 48 Q 100 36 63 48 Z" fill="#111111" />
          <rect x="66" y="30" width="68" height="9" rx="4" fill="#18181B" />
          <rect x="70" y="53" width="60" height="20" rx="7" fill="#050505" />
          {[76, 86, 96, 106, 116, 126].map((x, i) => <circle key={x} cx={x} cy={95 + (i % 2) * 3} r="1.3" fill="#3F3F46" />)}
        </>
      )}
      {(id === "girl" || id === "topper" || id === "doctor-girl" || id === "business-girl" || id === "stylish-girl" || id === "women") && (
        <path d="M 64 40 Q 100 8 136 40 Q 120 26 100 27 Q 80 26 64 40 Z" fill={`url(#${prefix}-hc-hair)`} />
      )}
      {id === "village-boy" && (
        <>
          <path d="M 64 38 Q 72 20 94 26 Q 112 14 134 34 Q 120 30 108 36 Q 92 24 64 38 Z" fill={hair} />
          <path d="M 116 28 Q 130 16 138 28 Q 128 34 116 28 Z" fill="#16A34A" stroke="#14532D" strokeWidth="1" />
          <path d="M 118 29 L 136 29" stroke="#65A30D" strokeWidth="1" />
        </>
      )}
      {id === "dadaji" && (
        <>
          <path d="M 66 34 Q 100 10 134 34 Q 118 24 100 24 Q 82 24 66 34 Z" fill="#E4E4E7" />
          <path d="M 66 36 Q 56 52 64 72 L 70 54 Z M 134 36 Q 144 52 136 72 L 130 54 Z" fill="#F4F4F5" />
        </>
      )}
      {id === "stylish-girl" && (
        <g>
          <path d="M 68 26 L 100 20 L 132 26 L 128 36 L 100 31 L 72 36 Z" fill="#111827" />
          <path d="M 70 28 Q 84 34 98 30 L 96 35 Q 82 38 70 32 Z M 102 30 Q 116 34 130 28 L 130 32 Q 116 38 104 35 Z" fill="#1F2937" stroke="#000000" strokeWidth="1" />
        </g>
      )}

      <g id="eye-left" transform={`translate(88 61) scale(1 ${eyeScale}) translate(-88 -61)`}>
        {id === "thief" ? (
          <>
            <ellipse cx="88" cy="61" rx="8" ry="7" fill="#FFFFFF" />
            <circle cx="90" cy="61" r="2.8" fill="#111827" />
          </>
        ) : (
          <>
            <ellipse cx="88" cy="61" rx="4.4" ry="5.2" fill="#18181B" />
            <circle cx="89.5" cy="59.3" r="1.5" fill="#FFFFFF" />
            {(id === "girl" || id === "stylish-girl") && <path d="M 83 54 L 80 49 M 88 53 L 88 47 M 93 54 L 96 49" stroke="#111827" strokeWidth="1.8" strokeLinecap="round" />}
          </>
        )}
      </g>
      <g id="eye-right" transform={`translate(112 61) scale(1 ${eyeScale}) translate(-112 -61)`}>
        {id === "thief" ? (
          <>
            <ellipse cx="112" cy="61" rx="8" ry="7" fill="#FFFFFF" />
            <circle cx="114" cy="61" r="2.8" fill="#111827" />
          </>
        ) : (
          <>
            <ellipse cx="112" cy="61" rx="4.4" ry="5.2" fill="#18181B" />
            <circle cx="113.5" cy="59.3" r="1.5" fill="#FFFFFF" />
            {(id === "girl" || id === "stylish-girl") && <path d="M 107 54 L 104 49 M 112 53 L 112 47 M 117 54 L 120 49" stroke="#111827" strokeWidth="1.8" strokeLinecap="round" />}
          </>
        )}
      </g>
      <path d="M 80 52 Q 88 48 95 52 M 105 52 Q 112 48 120 52" fill="none" stroke={hair} strokeWidth="2.4" strokeLinecap="round" />
      <path d="M 99 62 Q 95 72 101 73" fill="none" stroke={mix(skin, "#000000", 0.28)} strokeWidth="2" strokeLinecap="round" />
      {(id === "girl" || id === "women" || id === "topper") && (
        <>
          <circle cx="75" cy="72" r="5.5" fill="#F9A8D4" opacity="0.65" />
          <circle cx="125" cy="72" r="5.5" fill="#F9A8D4" opacity="0.65" />
        </>
      )}

      <g id="mouth" transform={`translate(100 82) scale(1 ${mouthScale}) translate(-100 -82)`}>
        {id === "police" ? (
          <>
            <path d="M 86 78 Q 100 73 114 78 Q 100 83 86 78 Z" fill="#111827" />
            <path d="M 90 86 Q 100 91 110 86" fill="none" stroke="#7F1D1D" strokeWidth="2" strokeLinecap="round" />
          </>
        ) : id === "thief" ? (
          <>
            <path d="M 86 82 Q 100 94 114 80 Q 110 90 100 92 Q 90 91 86 82 Z" fill="#7F1D1D" />
            <path d="M 92 82 L 95 87 L 98 82 M 102 81 L 105 86 L 108 81" fill="#FFFFFF" />
          </>
        ) : id === "dadaji" ? (
          <>
            <path d="M 82 76 Q 100 68 118 76 Q 112 86 100 86 Q 88 86 82 76 Z" fill="#FAFAFA" />
            <path d="M 86 94 Q 100 116 114 94 Q 108 112 100 114 Q 92 112 86 94 Z" fill="#F4F4F5" stroke="#D4D4D8" strokeWidth="1" />
          </>
        ) : id === "business-girl" ? (
          <>
            <path d="M 90 82 Q 100 88 110 82" fill="none" stroke="#E11D48" strokeWidth="5" strokeLinecap="round" />
            <path d="M 94 86 Q 100 90 106 86" fill="#BE123C" opacity="0.7" />
          </>
        ) : id === "stylish-girl" ? (
          <>
            <path d="M 88 81 Q 100 91 112 81" fill="none" stroke="#EC4899" strokeWidth="5" strokeLinecap="round" />
            <path d="M 92 85 Q 100 90 108 85" fill="#DB2777" opacity="0.8" />
          </>
        ) : (
          <>
            <path d="M 89 81 Q 100 90 111 81" fill="none" stroke="#9F1239" strokeWidth="3" strokeLinecap="round" />
            <path d="M 94 85 Q 100 89 106 85" fill="#FB7185" opacity="0.65" />
          </>
        )}
      </g>

      {(id === "topper" || id === "doctor-girl") && (
        <g>
          <circle cx="88" cy="61" r="11" fill="none" stroke="#111827" strokeWidth="2.6" />
          <circle cx="112" cy="61" r="11" fill="none" stroke="#111827" strokeWidth="2.6" />
          <path d="M 99 61 L 101 61" stroke="#111827" strokeWidth="2.6" />
          <path d="M 77 58 L 68 55 M 123 58 L 132 55" stroke="#111827" strokeWidth="2" />
        </g>
      )}
      {id === "dadaji" && (
        <g>
          <circle cx="87" cy="61" r="11" fill="none" stroke="#A1A1AA" strokeWidth="2.4" />
          <circle cx="113" cy="61" r="11" fill="none" stroke="#A1A1AA" strokeWidth="2.4" />
          <path d="M 98 61 L 102 61 M 76 64 Q 68 86 84 102 M 124 64 Q 132 86 116 102" fill="none" stroke="#A1A1AA" strokeWidth="1.8" />
        </g>
      )}
      {id === "women" && (
        <>
          <circle cx="100" cy="34" r="3.4" fill="#DC2626" />
          <path d="M 132 58 Q 142 62 138 76" fill="none" stroke="#FBBF24" strokeWidth="3" />
          <circle cx="139" cy="78" r="3.5" fill="#FBBF24" />
          <circle cx="70" cy="62" r="3.5" fill="#FBBF24" />
          <g transform="translate(126 24)">
            <circle cx="0" cy="0" r="7" fill="#EF4444" /><circle cx="6" cy="-4" r="6" fill="#DC2626" /><circle cx="-5" cy="-5" r="5.5" fill="#F87171" />
            <circle cx="0" cy="0" r="2" fill="#FDE047" />
          </g>
        </>
      )}
      {id === "police" && (
        <>
          <path d="M 82 72 Q 100 66 118 72 Q 100 80 82 72 Z" fill="#111827" />
          <path d="M 84 74 Q 100 82 116 74" fill="none" stroke="#111827" strokeWidth="3" />
        </>
      )}
    </>
  );

  return (
    <svg viewBox="0 0 200 240" width="200" height="240" overflow="visible" aria-hidden="true">
      <defs>
        <linearGradient id={`${prefix}-hc-skin`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={mix(skin, "#FFFFFF", 0.2)} />
          <stop offset="100%" stopColor={skin} />
        </linearGradient>
        <linearGradient id={`${prefix}-hc-shirt`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={mix(shirt, "#FFFFFF", 0.2)} />
          <stop offset="100%" stopColor={mix(shirt, "#000000", 0.28)} />
        </linearGradient>
        <linearGradient id={`${prefix}-hc-hair`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={mix(hair, "#FFFFFF", 0.18)} />
          <stop offset="100%" stopColor={hair} />
        </linearGradient>
        <linearGradient id={`${prefix}-hc-sari`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22C55E" />
          <stop offset="100%" stopColor="#15803D" />
        </linearGradient>
        <clipPath id={`${prefix}-hc-stripeclip`}>
          <path d="M 64 96 Q 100 84 136 96 L 141 158 Q 100 170 59 158 Z" />
        </clipPath>
        <filter id={`${prefix}-hc-shadow`} x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#000000" floodOpacity="0.28" />
        </filter>
      </defs>
      <ellipse cx="100" cy="226" rx="50" ry="7" fill="#000000" opacity="0.2" />
      <g transform={`translate(0 ${jumpDy}) rotate(${bodyLean} 100 190)`} filter={`url(#${prefix}-hc-shadow)`}>
        <g id="leg-left" transform={`translate(87 154) rotate(${legSwing}) translate(-87 -154)`}>{legArt("left")}</g>
        <g id="leg-right" transform={`translate(115 154) rotate(${-legSwing}) translate(-115 -154)`}>{legArt("right")}</g>
        <g id="body" transform={`rotate(${danceTwist} 100 130)`}>{bodyArt}</g>
        <g id="arm-left" transform={`translate(56 104) rotate(${armSwing}) translate(-56 -104)`}>{leftArmArt}</g>
        <g id="arm-right" transform={`translate(144 104) rotate(${waveAngle}) translate(-144 -104)`}>{rightArmArt}</g>
        <g id="head">{headArt}</g>
      </g>
      <title>{def.name}</title>
    </svg>
  );
}
