"use client";

import { useRef } from "react";
import type { ChangeEvent } from "react";
import { Icon, IconButton } from "./ui";

export function Timeline({
  scenes,
  activeSceneId,
  time,
  playing,
  onSelectScene,
  onAddScene,
  onDuplicateScene,
  onDeleteScene,
  onDuration,
  onTogglePlay,
  onRestart,
  onSeek,
  onDownloadScenesJson,
  onUploadScenesJson,
  onCopyScenesJson,
  onDownloadSceneJson,
}: {
  scenes: { id: string; name: string; duration: number }[];
  activeSceneId: string;
  time: number;
  playing: boolean;
  onSelectScene: (id: string) => void;
  onAddScene: () => void;
  onDuplicateScene: (id: string) => void;
  onDeleteScene: (id: string) => void;
  onDuration: (id: string, duration: number) => void;
  onTogglePlay: () => void;
  onRestart: () => void;
  onSeek: (sceneId: string, ms: number) => void;
  onDownloadScenesJson: () => void;
  onUploadScenesJson: (file: File) => void;
  onCopyScenesJson: () => void;
  onDownloadSceneJson: (sceneId: string) => void;
}) {
  const uploadRef = useRef<HTMLInputElement>(null);
  const onUploadChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) onUploadScenesJson(file);
    event.target.value = "";
  };
  const total = scenes.reduce((sum, s) => sum + s.duration, 0) || 1;
  const activeIndex = Math.max(0, scenes.findIndex((s) => s.id === activeSceneId));
  const before = scenes.slice(0, activeIndex).reduce((sum, s) => sum + s.duration, 0);
  const playhead = ((before + time / 1000) / total) * 100;

  return (
    <div className="flex h-[118px] shrink-0 flex-col border-t border-line bg-[#121216]">
      <div className="flex h-9 items-center justify-between border-b border-line px-2 sm:px-3">
        <div className="flex items-center gap-1.5">
          <IconButton name={playing ? "pause" : "play"} onClick={onTogglePlay} title="Play / Pause" size={14} className="h-7 w-7" />
          <IconButton name="restart" onClick={onRestart} title="Restart" size={13} className="h-7 w-7" />
          <span className="ml-1 font-mono text-[10px] text-zinc-400">{(time / 1000).toFixed(1)}s / {total.toFixed(0)}s</span>
        </div>
        <div className="flex items-center gap-1">
          <input ref={uploadRef} type="file" accept=".json,application/json" hidden onChange={onUploadChange} />
          <button type="button" title="Download all scenes as JSON" onClick={onDownloadScenesJson} className="rounded-md border border-line bg-panel2 px-2 py-1 text-[10px] text-zinc-300 transition hover:border-brand">📥 Download Scenes JSON</button>
          <button type="button" title="Upload scenes JSON" onClick={() => uploadRef.current?.click()} className="rounded-md border border-line bg-panel2 px-2 py-1 text-[10px] text-zinc-300 transition hover:border-brand">📤 Upload Scenes JSON</button>
          <button type="button" title="Copy scenes JSON to clipboard" onClick={onCopyScenesJson} className="hidden rounded-md border border-line bg-panel2 px-2 py-1 text-[10px] text-zinc-300 transition hover:border-brand md:inline">📋 Copy JSON</button>
          <button type="button" onClick={onAddScene} className="flex items-center gap-1 rounded-md border border-line bg-panel2 px-2 py-1 text-[10px] text-zinc-300 transition hover:border-brand">
            <Icon name="plus" size={12} /> Add Scene
          </button>
        </div>
      </div>

      <div className="scroll-thin relative flex flex-1 items-stretch gap-2 overflow-x-auto px-3 py-2">
        {scenes.map((scene, index) => {
          const width = Math.max(132, (scene.duration / total) * 620);
          const isActive = scene.id === activeSceneId;
          return (
            <div
              key={scene.id}
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                onSelectScene(scene.id);
                onSeek(scene.id, ((e.clientX - rect.left) / rect.width) * scene.duration * 1000);
              }}
              style={{ width }}
              className={`group relative shrink-0 cursor-pointer overflow-hidden rounded-lg border p-2 transition ${isActive ? "border-brand bg-brand/10 shadow-glow" : "border-line bg-panel2 hover:border-zinc-600"}`}
            >
              <div className="flex items-center gap-1.5">
                <span className={`flex h-5 w-5 items-center justify-center rounded font-mono text-[9px] ${isActive ? "bg-brand text-white" : "bg-zinc-700 text-zinc-300"}`}>{index + 1}</span>
                <span className="min-w-0 flex-1 truncate text-[10px] font-medium text-zinc-200">{scene.name}</span>
                <span className="font-mono text-[9px] text-zinc-500">{scene.duration}s</span>
              </div>
              <div className="mt-2 flex items-end gap-0.5">
                {Array.from({ length: 12 }).map((_, i) => (
                  <span key={i} className={`flex-1 rounded-sm ${i % 3 === 0 ? "bg-brand/50" : "bg-zinc-600/60"}`} style={{ height: 4 + ((i * 7) % 13) }} />
                ))}
              </div>
              <div className="mt-2 flex items-center justify-between opacity-0 transition group-hover:opacity-100">
                <div className="flex items-center gap-1">
                  <button type="button" title="Download this scene JSON" onClick={(e) => { e.stopPropagation(); onDownloadSceneJson(scene.id); }} className="text-zinc-400 hover:text-brand2">⬇️</button>
                  <button type="button" title="Duplicate scene" onClick={(e) => { e.stopPropagation(); onDuplicateScene(scene.id); }} className="text-zinc-400 hover:text-white"><Icon name="copy" size={12} /></button>
                  <button type="button" title="Delete scene" onClick={(e) => { e.stopPropagation(); onDeleteScene(scene.id); }} className="text-zinc-400 hover:text-rose-400"><Icon name="trash" size={12} /></button>
                </div>
                <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
                  <button type="button" onClick={() => onDuration(scene.id, Math.max(1, scene.duration - 1))} className="rounded bg-zinc-700 px-1 text-[10px] text-zinc-300 hover:bg-zinc-600">−</button>
                  <span className="text-[9px] text-zinc-500">sec</span>
                  <button type="button" onClick={() => onDuration(scene.id, Math.min(60, scene.duration + 1))} className="rounded bg-zinc-700 px-1 text-[10px] text-zinc-300 hover:bg-zinc-600">+</button>
                </div>
              </div>
              {isActive && <div className="absolute inset-x-0 bottom-0 h-0.5 bg-brand" />}
            </div>
          );
        })}
        <div className="relative flex w-[80px] shrink-0 items-center justify-center rounded-lg border border-dashed border-zinc-700 text-zinc-600">
          <Icon name="plus" size={18} />
        </div>
        <div className="pointer-events-none absolute left-3 top-[38px] h-[70px] w-[calc(100%-24px)] max-w-[900px]">
          <div className="absolute top-0 h-full w-px bg-rose-400/80" style={{ left: `${Math.min(100, Math.max(0, playhead))}%` }}>
            <div className="absolute -left-[4px] -top-1 h-2 w-2 rotate-45 bg-rose-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
