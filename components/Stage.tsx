"use client";

import { useEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { BackgroundArt, LayerArt } from "@/lib/art";
import type { CanvasSize, Layer, Scene } from "@/lib/types";
import { clamp } from "@/lib/utils";

type Handle = "move" | "resize" | "rotate";

interface DragState {
  mode: Handle;
  startX: number;
  startY: number;
  layer: Layer;
  rect: DOMRect;
}

export function Stage({
  scene,
  size,
  time,
  zoom,
  selectedId,
  fourK,
  onSelect,
  onLayerChange,
  onBackgroundClick,
  onDeleteLayer,
  onDuplicateLayer,
}: {
  scene: Scene;
  size: CanvasSize;
  time: number;
  zoom: number;
  selectedId: string | null;
  fourK: boolean;
  onSelect: (id: string | null) => void;
  onLayerChange: (id: string, patch: Partial<Layer>) => void;
  onBackgroundClick: () => void;
  onDeleteLayer: () => void;
  onDuplicateLayer: () => void;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const dragRef = useRef<DragState | null>(null);
  const [avail, setAvail] = useState({ w: 900, h: 700 });

  useEffect(() => {
    const node = wrapRef.current;
    if (!node) return;
    const observer = new ResizeObserver((entries) => {
      const r = entries[0]?.contentRect;
      if (r) setAvail({ w: r.width, h: r.height });
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const W = size.width;
  const H = size.height;
  const fit = Math.min((avail.w - 72) / W, (avail.h - 76) / H);
  const displayW = Math.max(80, W * fit * (zoom / 100));
  const displayH = Math.max(80, H * fit * (zoom / 100));
  const unit = W * 0.004;
  const selected = scene.layers.find((l) => l.id === selectedId) ?? null;

  const beginDrag = (e: ReactPointerEvent, layer: Layer, mode: Handle) => {
    if (layer.locked) return;
    e.preventDefault();
    e.stopPropagation();
    onSelect(layer.id);
    const rect = svgRef.current?.getBoundingClientRect();
    if (!rect) return;
    dragRef.current = { mode, startX: e.clientX, startY: e.clientY, layer: { ...layer }, rect };

    const move = (event: PointerEvent) => {
      const d = dragRef.current;
      if (!d) return;
      const dx = event.clientX - d.startX;
      const dy = event.clientY - d.startY;
      const sx = 100 / d.rect.width;
      const sy = 100 / d.rect.height;
      if (d.mode === "move") {
        onLayerChange(d.layer.id, {
          x: clamp(Math.round((d.layer.x + dx * sx) * 10) / 10, 0, 100),
          y: clamp(Math.round((d.layer.y + dy * sy) * 10) / 10, 0, 100),
        });
      } else if (d.mode === "resize") {
        onLayerChange(d.layer.id, {
          w: clamp(Math.round((d.layer.w + dx * sx * 2) * 10) / 10, 3, 100),
          h: clamp(Math.round((d.layer.h + dy * sy * 2) * 10) / 10, 3, 100),
        });
      } else {
        const cx = d.rect.left + (d.layer.x / 100) * d.rect.width;
        const cy = d.rect.top + (d.layer.y / 100) * d.rect.height;
        const a0 = (Math.atan2(d.startY - cy, d.startX - cx) * 180) / Math.PI;
        const a1 = (Math.atan2(event.clientY - cy, event.clientX - cx) * 180) / Math.PI;
        onLayerChange(d.layer.id, { rot: Math.round(d.layer.rot + (a1 - a0)) });
      }
    };
    const up = () => {
      dragRef.current = null;
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  };

  return (
    <div
      ref={wrapRef}
      className="scroll-thin relative flex flex-1 overflow-auto bg-[#111114]"
      style={{
        backgroundImage: "radial-gradient(circle at 50% 40%, rgba(124,58,237,.07), transparent 55%)",
      }}
    >
      <div className="m-auto flex min-h-full min-w-full items-center justify-center p-9" style={{ width: displayW + 72, height: displayH + 76 }}>
        <div className="relative shrink-0 shadow-canvas" style={{ width: displayW, height: displayH }}>
          <svg
            ref={svgRef}
            data-stage-svg="true"
            xmlns="http://www.w3.org/2000/svg"
            width={displayW}
            height={displayH}
            viewBox={`0 0 ${W} ${H}`}
            className="block no-select"
          >
            <BackgroundArt bg={scene.background} W={W} H={H} time={time} prefix="stage" />
            <rect
              width={W}
              height={H}
              fill="transparent"
              onPointerDown={(e) => {
                e.stopPropagation();
                onSelect(null);
                onBackgroundClick();
              }}
            />
            {scene.layers
              .filter((l) => l.visible)
              .map((layer) => {
                const bw = (layer.w / 100) * W;
                const bh = (layer.h / 100) * H;
                return (
                  <g
                    key={layer.id}
                    onPointerDown={(e) => beginDrag(e, layer, "move")}
                    style={{ cursor: layer.locked ? "default" : "move" }}
                  >
                    <LayerArt layer={layer} W={W} H={H} time={time} prefix={`stage-${layer.id}`} />
                    <rect data-ui="true" x={-bw / 2} y={-bh / 2} width={bw} height={bh} fill="transparent" />
                  </g>
                );
              })}
            {selected && selected.visible && (
              <g data-ui="true" transform={`translate(${(selected.x / 100) * W} ${(selected.y / 100) * H}) rotate(${selected.rot})`}>
                <rect
                  x={(-selected.w / 100) * W / 2}
                  y={(-selected.h / 100) * H / 2}
                  width={(selected.w / 100) * W}
                  height={(selected.h / 100) * H}
                  fill="none"
                  stroke="#C084FC"
                  strokeWidth={unit * 1.6}
                  strokeDasharray={`${unit * 8} ${unit * 5}`}
                  pointerEvents="none"
                />
                <line x1={0} y1={0} x2={0} y2={(-selected.h / 100) * H / 2 - unit * 8} stroke="#C084FC" strokeWidth={unit} pointerEvents="none" />
                <circle
                  data-handle="rotate"
                  cx={0}
                  cy={(-selected.h / 100) * H / 2 - unit * 10}
                  r={unit * 5}
                  fill="#FFFFFF"
                  stroke="#7C3AED"
                  strokeWidth={unit * 1.5}
                  style={{ cursor: "grab" }}
                  onPointerDown={(e) => beginDrag(e, selected, "rotate")}
                />
                <rect
                  data-handle="resize"
                  x={(selected.w / 100) * W / 2 - unit * 5}
                  y={(selected.h / 100) * H / 2 - unit * 5}
                  width={unit * 10}
                  height={unit * 10}
                  rx={unit * 2}
                  fill="#7C3AED"
                  stroke="#FFFFFF"
                  strokeWidth={unit}
                  style={{ cursor: "nwse-resize" }}
                  onPointerDown={(e) => beginDrag(e, selected, "resize")}
                />
              </g>
            )}
          </svg>

          {scene.background.type === "video" && scene.background.video.src && (
            <video
              key={scene.background.video.src}
              data-ui="true"
              src={scene.background.video.src}
              autoPlay
              muted
              loop={scene.background.video.loop}
              playsInline
              className="pointer-events-none absolute inset-0 h-full w-full object-cover"
            />
          )}

          {selected && selected.visible && (
            <div
              data-ui="true"
              className="absolute z-10 flex -translate-y-full gap-1 rounded-lg border border-brand/50 bg-[#1b1029]/95 p-1 shadow-lg backdrop-blur"
              style={{ left: `${Math.min(98, selected.x + selected.w / 2)}%`, top: `${Math.max(2, selected.y - selected.h / 2)}%` }}
            >
              <button type="button" title="Duplicate layer" onClick={onDuplicateLayer} className="rounded px-1.5 py-0.5 text-[10px] text-zinc-300 hover:bg-white/10">⧉</button>
              <button type="button" title="Delete layer" onClick={onDeleteLayer} className="rounded px-1.5 py-0.5 text-[10px] text-rose-300 hover:bg-rose-500/20">✕</button>
            </div>
          )}

          <div data-ui="true" className="pointer-events-none absolute bottom-2 left-2 rounded-md border border-white/10 bg-black/65 px-2.5 py-1 font-mono text-[9px] tracking-wide text-zinc-300 backdrop-blur-sm">
            {W} x {H} • {size.ratio} • {fourK ? "4K Ready" : "HD Ready"}
          </div>
          <div data-ui="true" className="pointer-events-none absolute right-2 top-2 rounded-md border border-white/10 bg-black/65 px-2 py-1 text-[9px] font-semibold uppercase tracking-widest text-brand2 backdrop-blur-sm">
            {scene.name}
          </div>
        </div>
      </div>
    </div>
  );
}
