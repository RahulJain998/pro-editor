"use client";

import { useEffect, useRef, useState } from "react";
import type { ChangeEvent, ReactNode } from "react";
import { COLORS } from "@/lib/presets";
import { clamp } from "@/lib/utils";

const PATHS: Record<string, ReactNode> = {
  backgrounds: <><rect x="3" y="3" width="18" height="18" rx="3" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" /></>,
  characters: <><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" /></>,
  finance: <><circle cx="12" cy="12" r="9" /><path d="M15 9.5c-.7-1.2-1.9-1.8-3.3-1.8-1.8 0-3 1-3 2.3 0 3.2 6.4 1.5 6.4 4.8 0 1.4-1.3 2.4-3.2 2.4-1.6 0-3-.7-3.7-2" /><path d="M12 5.5v13" /></>,
  text: <><path d="M4 6V4h16v2" /><path d="M12 4v16" /><path d="M8 20h8" /></>,
  images: <><rect x="3" y="4" width="18" height="16" rx="3" /><circle cx="8.5" cy="9" r="1.5" /><path d="M21 16l-5-5-9 9" /></>,
  scenes: <><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M3 9h18M8 21h8M12 18v3" /></>,
  json: <><path d="M8 4H6a2 2 0 0 0-2 2v4l-2 2 2 2v4a2 2 0 0 0 2 2h2" /><path d="M16 4h2a2 2 0 0 1 2 2v4l2 2-2 2v4a2 2 0 0 1-2 2h-2" /></>,
  undo: <><path d="M9 14L4 9l5-5" /><path d="M4 9h10a6 6 0 0 1 0 12h-3" /></>,
  redo: <><path d="M15 14l5-5-5-5" /><path d="M20 9H10a6 6 0 0 0 0 12h3" /></>,
  download: <><path d="M12 3v12" /><path d="M7 10l5 5 5-5" /><path d="M4 20h16" /></>,
  play: <path d="M7 4l13 8-13 8V4z" />,
  pause: <><rect x="6" y="4" width="4" height="16" rx="1" /><rect x="14" y="4" width="4" height="16" rx="1" /></>,
  restart: <><path d="M3 12a9 9 0 1 0 3-6.7" /><path d="M3 4v5h5" /></>,
  plus: <><path d="M12 5v14M5 12h14" /></>,
  trash: <><path d="M4 7h16M9 7V4h6v3M6 7l1 14h10l1-14" /></>,
  copy: <><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" /></>,
  upload: <><path d="M12 16V4" /><path d="M7 9l5-5 5 5" /><path d="M4 20h16" /></>,
  close: <><path d="M6 6l12 12M18 6L6 18" /></>,
  chevron: <path d="M6 9l6 6 6-6" />,
  check: <path d="M5 12l5 5L20 6" />,
  eye: <><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></>,
  lock: <><rect x="5" y="10" width="14" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>,
  sparkle: <><path d="M12 2l2.2 6.4L21 11l-6.8 2.6L12 20l-2.2-6.4L3 11l6.8-2.6L12 2z" /></>,
  layers: <><path d="M12 3l9 5-9 5-9-5 9-5z" /><path d="M3 13l9 5 9-5" /></>,
  settings: <><circle cx="12" cy="12" r="3" /><path d="M12 2v3m0 14v3M4.9 4.9l2.1 2.1m10 10l2.1 2.1M2 12h3m14 0h3M4.9 19.1L7 17m10-10l2.1-2.1" /></>,
  zoomIn: <><circle cx="11" cy="11" r="7" /><path d="M11 8v6M8 11h6M20 20l-4-4" /></>,
  zoomOut: <><circle cx="11" cy="11" r="7" /><path d="M8 11h6M20 20l-4-4" /></>,
  film: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M7 4v16M17 4v16M3 9h4M3 15h4M17 9h4M17 15h4" /></>,
  phone: <><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M11 18h2" /></>,
  image: <><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="8.5" cy="9" r="1.5" /><path d="M21 16l-5-5-8 8" /></>,
  camera: <><path d="M4 8h3l2-3h6l2 3h3v12H4V8z" /><circle cx="12" cy="14" r="3.5" /></>,
  bird: <><path d="M20 6c-2 1-3 1-5 1-3-3-9-2-11 2-2 4 1 9 6 9 2 0 3-1 4-2 3 0 5-3 6-10z" /><path d="M15 10h.01" /></>,
  facebook: <><path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v6h4v-6h3l1-4h-4V9c0-.6.4-1 1-1z" /></>,
  pin: <><path d="M12 21s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12z" /><circle cx="12" cy="9" r="2.5" /></>,
  sliders: <><path d="M4 7h10M18 7h2M4 17h2M10 17h10" /><circle cx="16" cy="7" r="2" /><circle cx="8" cy="17" r="2" /></>,
  grid: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
  heart: <path d="M12 20s-8-5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 9c0 6-8 11-8 11z" />,
  star: <path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1 6.2-5.5-2.9-5.5 2.9 1-6.2L3 9.6l6.2-.9L12 3z" />,
  rotate: <><path d="M4 12a8 8 0 1 1 2 5.3" /><path d="M4 20v-5h5" /></>,
  resize: <><path d="M6 18L18 6M14 6h4v4" /><rect x="3" y="17" width="4" height="4" rx="1" /></>,
  file: <><path d="M6 3h8l4 4v14H6V3z" /><path d="M14 3v4h4" /></>,
  info: <><circle cx="12" cy="12" r="9" /><path d="M12 11v6M12 7h.01" /></>,
};

export function Icon({ name, size = 18, className = "" }: { name: string; size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      {PATHS[name] ?? PATHS.sparkle}
    </svg>
  );
}

export function Section({ title, hint, children, action }: { title: string; hint?: string; children: ReactNode; action?: ReactNode }) {
  return (
    <div className="border-b border-line px-4 py-4">
      <div className="mb-3 flex items-center justify-between gap-2">
        <div>
          <h3 className="text-[12px] font-semibold tracking-wide text-zinc-200">{title}</h3>
          {hint && <p className="mt-0.5 text-[10px] text-zinc-500">{hint}</p>}
        </div>
        {action}
      </div>
      {children}
    </div>
  );
}

export function Slider({
  label,
  sub,
  value,
  min = 0,
  max = 100,
  step = 1,
  suffix = "",
  onChange,
}: {
  label: string;
  sub?: string;
  value: number;
  min?: number;
  max?: number;
  step?: number;
  suffix?: string;
  onChange: (value: number) => void;
}) {
  const fill = ((value - min) / (max - min)) * 100;
  return (
    <label className="mb-3 block">
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-[11px] text-zinc-300">{label}{sub && <span className="ml-1 text-[9px] text-zinc-600">{sub}</span>}</span>
        <span className="rounded bg-panel2 px-1.5 py-0.5 font-mono text-[10px] text-zinc-400">{Math.round(value)}{suffix}</span>
      </div>
      <input
        type="range"
        className="w-full"
        min={min}
        max={max}
        step={step}
        value={value}
        style={{ ["--fill" as string]: `${clamp(fill, 0, 100)}%` }}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </label>
  );
}

export function ColorField({ label, value, onChange, compact = false }: { label: string; value: string; onChange: (v: string) => void; compact?: boolean }) {
  const isHex = /^#[0-9a-fA-F]{6}$/.test(value);
  return (
    <label className={`mb-2 flex items-center justify-between gap-2 ${compact ? "" : "rounded-lg border border-line bg-panel2 px-2.5 py-2"}`}>
      <span className="text-[11px] text-zinc-300">{label}</span>
      <div className="flex items-center gap-2">
        <input
          className="font-mono text-[10px] text-zinc-400 outline-none"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-label={`${label} hex`}
          size={9}
        />
        {isHex ? (
          <input type="color" value={value} onChange={(e) => onChange(e.target.value)} className="h-7 w-8 rounded-lg" aria-label={label} />
        ) : (
          <span className="h-7 w-8 rounded-lg bg-zinc-600" />
        )}
      </div>
    </label>
  );
}

export function ColorGrid({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="grid grid-cols-10 gap-1.5">
      {COLORS.map((color) => (
        <button
          key={color}
          type="button"
          title={color}
          onClick={() => onChange(color)}
          className={`h-5 w-5 rounded-md border transition ${value.toLowerCase() === color.toLowerCase() ? "border-white ring-2 ring-brand" : "border-white/15 hover:scale-110"}`}
          style={{ background: color }}
          aria-label={`Color ${color}`}
        />
      ))}
    </div>
  );
}

export function TextField({ label, value, onChange, placeholder, mono = false }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string; mono?: boolean }) {
  return (
    <label className="mb-2 block">
      <span className="mb-1 block text-[10px] uppercase tracking-wide text-zinc-500">{label}</span>
      <input
        className={`w-full rounded-lg border border-line bg-panel2 px-2.5 py-2 text-[12px] text-zinc-200 outline-none transition focus:border-brand ${mono ? "font-mono" : ""}`}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}

export function NumberField({ label, value, onChange, min = 1, max = 10000, suffix }: { label: string; value: number; onChange: (v: number) => void; min?: number; max?: number; suffix?: string }) {
  return (
    <label className="mb-2 block">
      <span className="mb-1 block text-[10px] uppercase tracking-wide text-zinc-500">{label}</span>
      <div className="relative">
        <input
          type="number"
          className="w-full rounded-lg border border-line bg-panel2 px-2.5 py-2 pr-9 font-mono text-[12px] text-zinc-200 outline-none transition focus:border-brand"
          value={Number.isFinite(value) ? value : min}
          min={min}
          max={max}
          onChange={(e) => onChange(clamp(Number(e.target.value) || min, min, max))}
        />
        {suffix && <span className="pointer-events-none absolute right-2 top-2.5 text-[10px] text-zinc-500">{suffix}</span>}
      </div>
    </label>
  );
}

export function SelectField<T extends string>({ label, value, options, onChange }: { label: string; value: T; options: { value: T; label: string }[]; onChange: (v: T) => void }) {
  return (
    <label className="mb-2 block">
      <span className="mb-1 block text-[10px] uppercase tracking-wide text-zinc-500">{label}</span>
      <select
        className="w-full appearance-none rounded-lg border border-line bg-panel2 px-2.5 py-2 text-[12px] text-zinc-200 outline-none transition focus:border-brand"
        value={value}
        onChange={(e) => onChange(e.target.value as T)}
      >
        {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </label>
  );
}

export function Toggle({ label, checked, onChange, hint }: { label: string; checked: boolean; onChange: (v: boolean) => void; hint?: string }) {
  return (
    <button type="button" onClick={() => onChange(!checked)} className="mb-2 flex w-full items-center justify-between gap-3 rounded-lg border border-line bg-panel2 px-2.5 py-2 text-left">
      <span>
        <span className="block text-[11px] text-zinc-300">{label}</span>
        {hint && <span className="block text-[9px] text-zinc-600">{hint}</span>}
      </span>
      <span className={`relative h-5 w-9 shrink-0 rounded-full transition ${checked ? "bg-brand" : "bg-zinc-700"}`}>
        <span className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition-all ${checked ? "left-[18px]" : "left-0.5"}`} />
      </span>
    </button>
  );
}

export function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
  title,
  disabled,
}: {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "ghost" | "outline" | "danger";
  className?: string;
  title?: string;
  disabled?: boolean;
}) {
  const styles = {
    primary: "bg-gradient-to-r from-brand to-brand2 text-white hover:brightness-110 shadow-lg shadow-brand/20",
    ghost: "bg-panel2 text-zinc-300 hover:bg-zinc-700",
    outline: "border border-line bg-transparent text-zinc-300 hover:border-brand hover:text-white",
    danger: "bg-rose-600/15 text-rose-300 hover:bg-rose-600/25",
  }[variant];
  return (
    <button
      type="button"
      title={title}
      disabled={disabled}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-[11px] font-medium transition disabled:cursor-not-allowed disabled:opacity-40 ${styles} ${className}`}
    >
      {children}
    </button>
  );
}

export function IconButton({ name, onClick, active, title, size = 17, className = "" }: { name: string; onClick?: () => void; active?: boolean; title?: string; size?: number; className?: string }) {
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition ${active ? "bg-brand/20 text-brand2 ring-1 ring-brand/50" : "text-zinc-400 hover:bg-white/5 hover:text-white"} ${className}`}
    >
      <Icon name={name} size={size} />
    </button>
  );
}

export function PillTabs<T extends string>({ value, options, onChange }: { value: T; options: { value: T; label: string }[]; onChange: (v: T) => void }) {
  return (
    <div className="mb-3 flex flex-wrap gap-1.5">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          onClick={() => onChange(o.value)}
          className={`rounded-md px-2.5 py-1.5 text-[10px] font-medium transition ${value === o.value ? "bg-brand text-white" : "bg-panel2 text-zinc-400 hover:text-white"}`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

export function FileInput({ label, accept, onFile, className = "" }: { label: string; accept: string; onFile: (file: File) => void; className?: string }) {
  const ref = useRef<HTMLInputElement>(null);
  const change = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onFile(file);
    e.target.value = "";
  };
  return (
    <>
      <input ref={ref} type="file" accept={accept} className="hidden" onChange={change} />
      <Button variant="outline" className={`w-full ${className}`} onClick={() => ref.current?.click()}><Icon name="upload" size={14} />{label}</Button>
    </>
  );
}

export function useOutside<T extends HTMLElement>(onClose: () => void) {
  const ref = useRef<T>(null);
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose]);
  return ref;
}

export function Dropdown({ open, children, className = "" }: { open: boolean; children: ReactNode; className?: string }) {
  if (!open) return null;
  return (
    <div className={`absolute right-0 top-[calc(100%+8px)] z-50 w-[300px] animate-fadeup rounded-xl border border-line bg-[#18181f] p-2 shadow-2xl shadow-black/60 ${className}`}>
      {children}
    </div>
  );
}

export function ToastStack({ toasts }: { toasts: { id: number; text: string; kind: string }[] }) {
  return (
    <div className="pointer-events-none fixed bottom-5 left-1/2 z-[100] flex -translate-x-1/2 flex-col items-center gap-2">
      {toasts.map((t) => (
        <div key={t.id} className={`animate-fadeup rounded-full border px-4 py-2 text-[12px] font-medium shadow-xl backdrop-blur ${t.kind === "error" ? "border-rose-500/40 bg-rose-950/90 text-rose-200" : t.kind === "info" ? "border-sky-500/40 bg-sky-950/90 text-sky-200" : "border-emerald-500/40 bg-emerald-950/90 text-emerald-200"}`}>
          {t.text}
        </div>
      ))}
    </div>
  );
}

export function useLocalState<T>(initial: T) {
  const [value, setValue] = useState<T>(initial);
  return [value, setValue] as const;
}
