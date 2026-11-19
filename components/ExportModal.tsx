"use client";

import { targetSize, type ExportQuality } from "@/lib/exporter";
import type { Project } from "@/lib/types";
import type { Mp4Support, VideoProgress } from "@/lib/videoExport";
import type { DownloadOptions } from "./Toolbar";
import { Button, Icon } from "./ui";

export interface VideoRequest {
  format: "mp4" | "webm";
  options: DownloadOptions;
  source: Project;
}

export function ExportModal({
  request,
  progress,
  preview,
  support,
  onQuality,
  onDuration,
  onClose,
  onStart,
  onCancel,
}: {
  request: VideoRequest;
  progress: VideoProgress | null;
  preview: { dataUrl: string; ok: boolean } | null;
  support: Mp4Support | null;
  onQuality: (quality: ExportQuality) => void;
  onDuration: (duration: number) => void;
  onClose: () => void;
  onStart: () => void;
  onCancel: () => void;
}) {
  const { format, options, source } = request;
  const quality: ExportQuality = options.quality === "native" ? "1080p" : options.quality;
  const { width, height } = targetSize(source.size, quality);
  const isMp4 = format === "mp4";
  const canExportMp4 = isMp4 && support?.supported !== false;

  if (progress) {
    return (
      <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
        <div className="w-full max-w-lg rounded-2xl border border-line bg-[#18181f] p-6 shadow-2xl shadow-black">
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/20 text-brand2">
              <Icon name="film" size={22} />
            </span>
            <div>
              <p className="text-[14px] font-semibold text-zinc-100">
                {isMp4 ? "Rendering MP4" : "Rendering WebM"}... {progress.percent}%
              </p>
              <p className="mt-0.5 font-mono text-[11px] text-zinc-500">
                Frame {progress.frame}/{progress.totalFrames} • {progress.stage}
              </p>
            </div>
          </div>
          <div className="h-2.5 overflow-hidden rounded-full bg-panel2">
            <div className="h-full rounded-full bg-gradient-to-r from-brand to-brand2 transition-all duration-150" style={{ width: `${progress.percent}%` }} />
          </div>
          <p className="mt-3 text-[11px] text-zinc-400">Please wait — this runs entirely in your browser.</p>
          <Button variant="danger" className="mt-5 w-full" onClick={onCancel}>Cancel Export</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm">
      <div className="w-full max-w-[460px] overflow-hidden rounded-2xl border border-line bg-[#18181f] shadow-2xl shadow-black/70">
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <div>
            <h2 className="text-[14px] font-semibold text-zinc-100">
              {isMp4 ? "🎬 Export Real MP4" : "🎬 Export WebM"}
            </h2>
            <p className="mt-0.5 font-mono text-[10px] text-zinc-500">
              {width} × {height} • {options.fps} FPS • {options.duration}s
            </p>
          </div>
          <button type="button" onClick={onClose} className="rounded-lg p-1.5 text-zinc-500 hover:bg-white/5 hover:text-white" aria-label="Close">
            <Icon name="close" size={17} />
          </button>
        </div>

        <div className="max-h-[70vh] overflow-y-auto scroll-thin px-5 py-4">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-zinc-500">Test frame • पहला फ्रेम</p>
          <div className="mb-4 flex items-center gap-3 rounded-xl border border-line bg-panel2 p-2">
            <div className="flex h-[110px] w-[78px] shrink-0 items-center justify-center overflow-hidden rounded-lg border border-line bg-black">
              {preview ? (
                <div
                  role="img"
                  aria-label="First frame preview"
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: preview.dataUrl ? `url("${preview.dataUrl}")` : undefined }}
                />
              ) : <Icon name="image" size={20} className="text-zinc-600" />}
            </div>
            <div className="min-w-0">
              {preview ? (
                <p className={`text-[11px] ${preview.ok ? "text-emerald-300" : "text-amber-300"}`}>
                  {preview.ok ? "✅ First frame rendered — not black" : "⚠️ Preview looks dark — check background"}
                </p>
              ) : (
                <p className="text-[11px] text-zinc-500">Rendering preview frame...</p>
              )}
              <p className="mt-1 text-[10px] leading-relaxed text-zinc-500">
                {isMp4 ? "H.264 video in a real MP4 container. No audio track." : "VP8/VP9 WebM for web players and small files."}
              </p>
            </div>
          </div>

          <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-zinc-500">Duration • अवधि</p>
          <div className="mb-4 grid grid-cols-4 gap-1.5">
            {[5, 10, 15, 30].map((d) => (
              <button key={d} type="button" onClick={() => onDuration(d)} className={`rounded-lg py-2 text-[11px] font-medium transition ${options.duration === d ? "bg-brand text-white" : "bg-panel2 text-zinc-400 hover:text-white"}`}>{d}s</button>
            ))}
          </div>

          <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-zinc-500">Quality • क्वैलिटी</p>
          <div className="mb-4 grid grid-cols-3 gap-1.5">
            {(["720p", "1080p", "4K"] as ExportQuality[]).map((q) => (
              <button key={q} type="button" onClick={() => onQuality(q)} className={`rounded-lg py-2 text-[11px] font-medium transition ${quality === q ? "bg-brand text-white" : "bg-panel2 text-zinc-400 hover:text-white"}`}>{q}</button>
            ))}
          </div>

          {isMp4 && support && !support.supported && (
            <div className="mb-4 rounded-lg border border-amber-500/40 bg-amber-500/10 px-3 py-2 text-[11px] leading-relaxed text-amber-200">
              ⚠️ {support.message} Use latest Chrome or Edge for real MP4. Starting will download a real WebM instead — never a fake .mp4.
            </div>
          )}
          {isMp4 && support?.supported && (
            <div className="mb-4 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-[10px] text-emerald-300">
              ✅ {support.message} • Fast-start MP4 ready for WhatsApp / Gallery / YouTube.
            </div>
          )}
        </div>

        <div className="flex gap-2 border-t border-line px-5 py-4">
          <Button variant="ghost" className="flex-1" onClick={onClose}>Cancel</Button>
          <Button variant="primary" className="flex-[2]" onClick={onStart}>
            <Icon name="download" size={14} />
            {canExportMp4 ? "Export Real MP4" : "Download WebM Instead"}
          </Button>
        </div>
      </div>
    </div>
  );
}
