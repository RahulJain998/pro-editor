"use client";

import { memo, useState } from "react";
import { CANVAS_SIZES } from "@/lib/presets";
import type { CanvasSize } from "@/lib/types";
import type { ExportQuality } from "@/lib/exporter";
import { Button, Dropdown, Icon, IconButton, useOutside } from "./ui";

export interface DownloadOptions {
  quality: ExportQuality;
  duration: number;
  fps: number;
}

function ToolbarImpl({
  size,
  zoom,
  playing,
  busy,
  canUndo,
  canRedo,
  onUndo,
  onRedo,
  onSize,
  onZoom,
  onPlayToggle,
  onRestart,
  onDownload,
}: {
  size: CanvasSize;
  zoom: number;
  playing: boolean;
  busy: string | null;
  canUndo: boolean;
  canRedo: boolean;
  onUndo: () => void;
  onRedo: () => void;
  onSize: (size: CanvasSize, custom?: { width: number; height: number }) => void;
  onZoom: (zoom: number) => void;
  onPlayToggle: () => void;
  onRestart: () => void;
  onDownload: (kind: "png" | "svg" | "json" | "video", options: DownloadOptions) => void;
}) {
  const [open, setOpen] = useState<"size" | "download" | null>(null);
  const [customW, setCustomW] = useState(2000);
  const [customH, setCustomH] = useState(2000);
  const [quality, setQuality] = useState<ExportQuality>("native");
  const [duration, setDuration] = useState(5);
  const [fps, setFps] = useState(60);
  const ref = useOutside<HTMLDivElement>(() => setOpen(null));

  return (
    <div ref={ref} className="relative z-30 flex h-14 shrink-0 items-center justify-between gap-2 border-b border-line bg-[#141419] px-2 sm:px-3">
      <div className="flex min-w-0 items-center gap-1">
        <IconButton name="undo" title="Undo (Ctrl+Z)" onClick={onUndo} className={canUndo ? "" : "opacity-30"} />
        <IconButton name="redo" title="Redo (Ctrl+Shift+Z)" onClick={onRedo} className={canRedo ? "" : "opacity-30"} />

        <div className="mx-1 h-6 w-px bg-line" />

        <div className="relative">
          <button
            type="button"
            onClick={() => setOpen(open === "size" ? null : "size")}
            className="flex h-9 items-center gap-2 rounded-lg border border-line bg-panel2 px-2.5 text-[11px] text-zinc-200 transition hover:border-brand/60"
          >
            <Icon name={size.icon} size={14} className="text-brand2" />
            <span className="hidden max-w-[130px] truncate sm:inline">{size.name}</span>
            <span className="font-mono text-[10px] text-zinc-500">{size.short}</span>
            <Icon name="chevron" size={13} className="text-zinc-500" />
          </button>
          <Dropdown open={open === "size"} className="left-0 right-auto max-h-[70vh] w-[320px] overflow-y-auto scroll-thin">
            <p className="px-2 pb-2 pt-1 text-[10px] font-semibold uppercase tracking-widest text-zinc-500">Canvas Size • कैनवास साइज़</p>
            {CANVAS_SIZES.slice(0, 9).map((preset) => (
              <button
                key={preset.id}
                type="button"
                onClick={() => {
                  onSize(preset);
                  setOpen(null);
                }}
                className={`flex w-full items-center gap-2.5 rounded-lg px-2 py-2 text-left transition hover:bg-white/5 ${size.id === preset.id ? "bg-brand/15" : ""}`}
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-panel2 text-brand2"><Icon name={preset.icon} size={15} /></span>
                <span className="flex-1">
                  <span className="block text-[11px] text-zinc-200">{preset.name}</span>
                  <span className="block font-mono text-[9px] text-zinc-500">{preset.width} × {preset.height} • {preset.ratio}</span>
                </span>
                {size.id === preset.id && <Icon name="check" size={14} className="text-brand2" />}
              </button>
            ))}
            <div className="mt-2 rounded-lg border border-line bg-panel2 p-2">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-zinc-500">🎞️ Custom Size • अपना साइज़</p>
              <div className="flex items-end gap-2">
                <label className="flex-1">
                  <span className="mb-1 block text-[9px] text-zinc-500">Width</span>
                  <input type="number" min={200} max={6000} value={customW} onChange={(e) => setCustomW(Number(e.target.value))} className="w-full rounded-md border border-line bg-[#111117] px-2 py-1.5 font-mono text-[11px] text-zinc-200 outline-none focus:border-brand" />
                </label>
                <label className="flex-1">
                  <span className="mb-1 block text-[9px] text-zinc-500">Height</span>
                  <input type="number" min={200} max={6000} value={customH} onChange={(e) => setCustomH(Number(e.target.value))} className="w-full rounded-md border border-line bg-[#111117] px-2 py-1.5 font-mono text-[11px] text-zinc-200 outline-none focus:border-brand" />
                </label>
                <Button
                  className="py-1.5"
                  onClick={() => {
                    onSize(CANVAS_SIZES[9], { width: Math.max(200, Math.min(6000, customW)), height: Math.max(200, Math.min(6000, customH)) });
                    setOpen(null);
                  }}
                >
                  Apply
                </Button>
              </div>
            </div>
          </Dropdown>
        </div>
      </div>

      <div className="flex items-center gap-1">
        <IconButton name="zoomOut" title="Zoom out" onClick={() => onZoom(Math.max(25, zoom - 25))} />
        <button type="button" onClick={() => onZoom(100)} title="Reset zoom" className="w-14 rounded-md py-1 text-center font-mono text-[11px] text-zinc-300 hover:bg-white/5">{zoom}%</button>
        <IconButton name="zoomIn" title="Zoom in" onClick={() => onZoom(Math.min(300, zoom + 25))} />
      </div>

      <div className="flex items-center gap-1.5">
        <div className="mr-1 flex items-center rounded-lg border border-line bg-panel2 p-0.5">
          <IconButton name={playing ? "pause" : "play"} title={playing ? "Pause preview" : "Play preview"} onClick={onPlayToggle} active={playing} size={15} className="h-7 w-7" />
          <IconButton name="restart" title="Restart preview" onClick={onRestart} size={14} className="h-7 w-7" />
        </div>

        <div className="relative">
          <Button
            variant="primary"
            onClick={() => setOpen(open === "download" ? null : "download")}
            className="h-9 px-2.5 sm:px-3"
          >
            <Icon name="download" size={14} />
            <span className="hidden sm:inline">{busy ?? "Download"}</span>
            <Icon name="chevron" size={12} />
          </Button>
          <Dropdown open={open === "download"} className="w-[330px]">
            <p className="px-2 pb-2 pt-1 text-[10px] font-semibold uppercase tracking-widest text-zinc-500">⬇️ Download • डाउनलोड</p>

            <div className="mb-2 rounded-lg border border-line bg-panel2 p-2">
              <p className="mb-1.5 text-[9px] uppercase tracking-wide text-zinc-500">Quality • क्वैलिटी</p>
              <div className="grid grid-cols-4 gap-1">
                {(["native", "720p", "1080p", "4K"] as ExportQuality[]).map((q) => (
                  <button key={q} type="button" onClick={() => setQuality(q)} className={`rounded-md py-1.5 text-[10px] transition ${quality === q ? "bg-brand text-white" : "bg-[#111117] text-zinc-400 hover:text-white"}`}>{q === "native" ? "Source" : q}</button>
                ))}
              </div>
            </div>

            <div className="mb-2 grid grid-cols-2 gap-2">
              <div className="rounded-lg border border-line bg-panel2 p-2">
                <p className="mb-1.5 text-[9px] uppercase tracking-wide text-zinc-500">Video length</p>
                <div className="grid grid-cols-4 gap-1">
                  {[5, 10, 15, 30].map((d) => (
                    <button key={d} type="button" onClick={() => setDuration(d)} className={`rounded py-1 text-[10px] ${duration === d ? "bg-brand text-white" : "bg-[#111117] text-zinc-400"}`}>{d}s</button>
                  ))}
                </div>
              </div>
              <div className="rounded-lg border border-line bg-panel2 p-2">
                <p className="mb-1.5 text-[9px] uppercase tracking-wide text-zinc-500">Frame rate</p>
                <div className="grid grid-cols-2 gap-1">
                  {[30, 60].map((f) => (
                    <button key={f} type="button" onClick={() => setFps(f)} className={`rounded py-1 text-[10px] ${fps === f ? "bg-brand text-white" : "bg-[#111117] text-zinc-400"}`}>{f} fps</button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-1.5">
              {([
                ["png", "🖼️ PNG", "image"],
                ["svg", "🎨 SVG", "sparkle"],
                ["json", "📄 JSON", "file"],
                ["video", "🎬 Video", "film"],
              ] as const).map(([kind, label, icon]) => (
                <button
                  key={kind}
                  type="button"
                  disabled={Boolean(busy)}
                  onClick={() => {
                    onDownload(kind, { quality, duration, fps });
                    setOpen(null);
                  }}
                  className="flex items-center gap-2 rounded-lg border border-line bg-panel2 px-2.5 py-2 text-[11px] text-zinc-200 transition hover:border-brand disabled:opacity-40"
                >
                  <Icon name={icon} size={14} className="text-brand2" />{label}
                </button>
              ))}
            </div>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export const Toolbar = memo(ToolbarImpl);
