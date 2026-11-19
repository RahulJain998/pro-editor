"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { LeftDock } from "./LeftDock";
import { RightPanel } from "./RightPanel";
import { Stage } from "./Stage";
import { Timeline } from "./Timeline";
import { Toolbar, type DownloadOptions } from "./Toolbar";
import { ExportModal, type VideoRequest } from "./ExportModal";
import { ToastStack } from "./ui";
import { downloadJson, downloadPng, downloadSvg, targetSize } from "@/lib/exporter";
import {
  detectMp4Support, encodeMp4, encodeWebm, renderTestFrame,
  type Mp4Support, type VideoProgress,
} from "@/lib/videoExport";
import { createInitialProject } from "@/lib/initialProject";
import { importProject, projectToJson, SAMPLE_JSON } from "@/lib/jsonImport";
import {
  CANVAS_SIZES, makeCharacterLayer, makeFinanceLayer, makeTextLayer, uid,
  type CharacterDef, type FinanceDef,
} from "@/lib/presets";
import type {
  Background, CanvasSize, Layer, PanelId, Project, RightMode, Scene, ShapeKind, ToastKind, ToastMessage,
} from "@/lib/types";
import { downloadBlob, slugify } from "@/lib/utils";

export default function Editor() {
  const [project, setProjectState] = useState<Project>(createInitialProject);
  const projectRef = useRef(project);
  const setProject = useCallback((value: Project | ((p: Project) => Project)) => {
    const next = typeof value === "function" ? value(projectRef.current) : value;
    projectRef.current = next;
    setProjectState(next);
  }, []);
  const [panel, setPanel] = useState<PanelId | null>("backgrounds");
  const [rightMode, setRightMode] = useState<RightMode>("canvas");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [time, setTime] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [exporting, setExporting] = useState(false);
  const [busy, setBusy] = useState<string | null>(null);
  const [zoom, setZoom] = useState(100);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [jsonText, setJsonText] = useState(SAMPLE_JSON);
  const [mobileLeft, setMobileLeft] = useState(false);
  const [mobileRight, setMobileRight] = useState(false);
  const [historyCounts, setHistoryCounts] = useState({ past: 0, future: 0 });
  const [videoRequest, setVideoRequest] = useState<VideoRequest | null>(null);
  const [videoProgress, setVideoProgress] = useState<VideoProgress | null>(null);
  const [videoPreview, setVideoPreview] = useState<{ dataUrl: string; ok: boolean } | null>(null);
  const [videoSupport, setVideoSupport] = useState<Mp4Support | null>(null);

  const past = useRef<Project[]>([]);
  const future = useRef<Project[]>([]);
  const lastCommit = useRef(0);
  const timeRef = useRef(0);
  const abortRef = useRef<AbortController | null>(null);

  const activeScene = useMemo(
    () => project.scenes.find((s) => s.id === project.activeSceneId) ?? project.scenes[0],
    [project],
  );
  const selectedLayer = useMemo(
    () => activeScene.layers.find((l) => l.id === selectedId) ?? null,
    [activeScene, selectedId],
  );
  const activeDuration = activeScene?.duration ?? 5;

  const toast = useCallback((text: string, kind: ToastKind = "success") => {
    const id = Date.now() + Math.random();
    setToasts((list) => [...list.slice(-3), { id, text, kind }]);
    setTimeout(() => setToasts((list) => list.filter((t) => t.id !== id)), 2600);
  }, []);

  const requestSource = videoRequest?.source;
  const requestQuality = videoRequest?.options.quality;
  const requestFps = videoRequest?.options.fps;
  useEffect(() => {
    if (!requestSource) return;
    let alive = true;
    const quality = requestQuality === "native" || !requestQuality ? "1080p" : requestQuality;
    const { width, height } = targetSize(requestSource.size, quality);
    void detectMp4Support(width, height, requestFps ?? 60)
      .then((result) => { if (alive) setVideoSupport(result); })
      .catch(() => { if (alive) setVideoSupport({ supported: false, codec: null, message: "MP4 support check failed." }); });
    const previewW = 200;
    const previewH = Math.max(1, Math.round((requestSource.size.height / requestSource.size.width) * previewW));
    void renderTestFrame(requestSource, previewW, previewH)
      .then((result) => { if (alive) setVideoPreview(result); })
      .catch(() => { if (alive) setVideoPreview({ dataUrl: "", ok: false }); });
    return () => { alive = false; };
  }, [requestFps, requestQuality, requestSource]);

  const commit = useCallback((updater: (p: Project) => Project, record = true) => {
    const now = Date.now();
    if (record && now - lastCommit.current > 220) {
      past.current = [...past.current.slice(-49), projectRef.current];
      future.current = [];
      lastCommit.current = now;
      setHistoryCounts({ past: past.current.length, future: 0 });
    }
    setProject(updater(projectRef.current));
  }, [setProject]);

  const updateActiveScene = useCallback((fn: (s: Scene) => Scene, record = true) => {
    commit((p) => ({
      ...p,
      scenes: p.scenes.map((s) => (s.id === p.activeSceneId ? fn(s) : s)),
    }), record);
  }, [commit]);

  const updateBackground = useCallback((patch: Partial<Background>) => {
    updateActiveScene((s) => ({ ...s, background: { ...s.background, ...patch } }));
  }, [updateActiveScene]);

  const updateLayer = useCallback((id: string, patch: Partial<Layer>) => {
    updateActiveScene((s) => ({
      ...s,
      layers: s.layers.map((l) => (l.id === id ? ({ ...l, ...patch } as Layer) : l)),
    }));
  }, [updateActiveScene]);

  const selectLayer = useCallback((id: string | null) => {
    setSelectedId(id);
    if (id) setRightMode("layer");
  }, []);

  const applyBackground = useCallback((bg: Background, name: string) => {
    updateBackground(bg);
    setSelectedId(null);
    setRightMode("background");
    toast(`✅ ${name} Applied`);
    setMobileRight(true);
  }, [toast, updateBackground]);

  const addLayer = useCallback((layer: Layer, message: string) => {
    updateActiveScene((s) => ({ ...s, layers: [...s.layers, layer] }));
    setSelectedId(layer.id);
    setRightMode("layer");
    toast(message);
    setMobileRight(true);
  }, [toast, updateActiveScene]);

  const addCharacter = useCallback((def: CharacterDef) => {
    addLayer(makeCharacterLayer(def), `✅ ${def.name} Added`);
  }, [addLayer]);

  const addFinance = useCallback((def: FinanceDef) => {
    addLayer(makeFinanceLayer(def), `✅ ${def.label.split(" • ")[0]} Added`);
  }, [addLayer]);

  const addText = useCallback((presetId: string) => {
    addLayer(makeTextLayer(presetId), "✅ Text Added");
  }, [addLayer]);

  const addSticker = useCallback((shape: ShapeKind, fill: string) => {
    const layer: Layer = {
      id: uid("shape"), name: shape.toUpperCase(), kind: "shape",
      x: 50, y: 50, w: 26, h: 26, rot: 0, opacity: 100, visible: true, locked: false,
      animation: "float", animSpeed: 1, shape, fill, stroke: "#FFFFFF", strokeWidth: 2, radius: 8,
      fillGradient: { enabled: false, from: fill, to: "#7C3AED" },
    };
    addLayer(layer, "✅ Sticker Added");
  }, [addLayer]);

  const addImageFile = useCallback((file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      const src = String(reader.result ?? "");
      const layer: Layer = {
        id: uid("img"), name: file.name, kind: "image",
        x: 50, y: 50, w: 50, h: 50, rot: 0, opacity: 100, visible: true, locked: false,
        animation: "none", animSpeed: 1, src, fit: "contain", radius: 8,
        grayscale: 0, blur: 0, brightness: 100, contrast: 100, crop: 1, flipX: false,
      };
      addLayer(layer, "✅ Image Added");
    };
    reader.onerror = () => toast("❌ Image read failed", "error");
    reader.readAsDataURL(file);
  }, [addLayer, toast]);

  const deleteLayer = useCallback(() => {
    if (!selectedId) return;
    updateActiveScene((s) => ({ ...s, layers: s.layers.filter((l) => l.id !== selectedId) }));
    setSelectedId(null);
    toast("🗑️ Layer Deleted", "info");
  }, [selectedId, toast, updateActiveScene]);

  const duplicateLayer = useCallback(() => {
    if (!selectedLayer) return;
    const copy = { ...selectedLayer, id: uid(selectedLayer.kind), x: Math.min(95, selectedLayer.x + 4), y: Math.min(95, selectedLayer.y + 4), name: `${selectedLayer.name} copy` } as Layer;
    updateActiveScene((s) => ({ ...s, layers: [...s.layers, copy] }));
    setSelectedId(copy.id);
    toast("✅ Layer Duplicated");
  }, [selectedLayer, toast, updateActiveScene]);

  const changeSize = useCallback((size: CanvasSize, custom?: { width: number; height: number }) => {
    const next: CanvasSize = custom
      ? { ...size, width: custom.width, height: custom.height, short: `${custom.width}x${custom.height}`, ratio: `${Math.round((custom.width / custom.height) * 100) / 100}:1` }
      : { ...size };
    commit((p) => ({ ...p, size: next }));
    toast(`✅ Canvas ${next.width} x ${next.height}`);
  }, [commit, toast]);

  const undo = useCallback(() => {
    const prev = past.current.pop();
    if (!prev) return;
    future.current = [...future.current, projectRef.current];
    setHistoryCounts({ past: past.current.length, future: future.current.length });
    setProject(prev);
    toast("↩️ Undone", "info");
  }, [setProject, toast]);

  const redo = useCallback(() => {
    const next = future.current.pop();
    if (!next) return;
    past.current = [...past.current, projectRef.current];
    setHistoryCounts({ past: past.current.length, future: future.current.length });
    setProject(next);
    toast("↪️ Redone", "info");
  }, [setProject, toast]);

  const addScene = useCallback(() => {
    const id = uid("scene");
    commit((p) => ({
      ...p,
      scenes: [...p.scenes, {
        id, name: `Scene ${p.scenes.length + 1}`, duration: 5,
        background: structuredClone(activeScene.background), layers: [],
      }],
      activeSceneId: id,
    }));
    setSelectedId(null);
    setTime(0);
    timeRef.current = 0;
    toast("✅ Scene Added");
  }, [activeScene, commit, toast]);

  const duplicateScene = useCallback((id: string) => {
    const source = project.scenes.find((s) => s.id === id);
    if (!source) return;
    const newId = uid("scene");
    const copy: Scene = {
      ...structuredClone(source), id: newId, name: `${source.name} copy`,
      layers: source.layers.map((l) => ({ ...l, id: uid(l.kind) }) as Layer),
    };
    commit((p) => ({ ...p, scenes: [...p.scenes, copy], activeSceneId: newId }));
    toast("✅ Scene Duplicated");
  }, [commit, project.scenes, toast]);

  const deleteScene = useCallback((id: string) => {
    if (project.scenes.length <= 1) return;
    commit((p) => {
      const scenes = p.scenes.filter((s) => s.id !== id);
      return { ...p, scenes, activeSceneId: p.activeSceneId === id ? scenes[0].id : p.activeSceneId };
    });
    setSelectedId(null);
    toast("🗑️ Scene Deleted", "info");
  }, [commit, project.scenes.length, toast]);

  const selectScene = useCallback((id: string) => {
    commit((p) => ({ ...p, activeSceneId: id }), false);
    setSelectedId(null);
    setTime(0);
    timeRef.current = 0;
  }, [commit]);

  const seek = useCallback((_sceneId: string, ms: number) => {
    timeRef.current = ms;
    setTime(ms);
  }, []);

  const togglePlay = useCallback(() => {
    if (!playing && timeRef.current >= activeDuration * 1000 - 30) {
      timeRef.current = 0;
      setTime(0);
    }
    setPlaying((v) => !v);
  }, [activeDuration, playing]);

  const restart = useCallback(() => {
    timeRef.current = 0;
    setTime(0);
    setPlaying(true);
    toast("🔁 Preview Restarted", "info");
  }, [toast]);

  useEffect(() => {
    if (!playing || exporting) return;
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(100, now - last);
      last = now;
      const next = timeRef.current + dt;
      if (next >= activeDuration * 1000) {
        timeRef.current = 0;
        setTime(0);
        setPlaying(false);
        return;
      }
      timeRef.current = next;
      setTime(next);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [activeDuration, exporting, playing]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)) return;
      const mod = e.metaKey || e.ctrlKey;
      if (mod && e.key.toLowerCase() === "z") {
        e.preventDefault();
        if (e.shiftKey) redo(); else undo();
      } else if (mod && e.key.toLowerCase() === "y") {
        e.preventDefault();
        redo();
      } else if (e.key === " " ) {
        e.preventDefault();
        togglePlay();
      } else if ((e.key === "Delete" || e.key === "Backspace") && selectedId) {
        e.preventDefault();
        deleteLayer();
      } else if (selectedLayer && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(e.key)) {
        e.preventDefault();
        const step = e.shiftKey ? 5 : 1;
        const dx = e.key === "ArrowLeft" ? -step : e.key === "ArrowRight" ? step : 0;
        const dy = e.key === "ArrowUp" ? -step : e.key === "ArrowDown" ? step : 0;
        updateLayer(selectedLayer.id, { x: Math.min(100, Math.max(0, selectedLayer.x + dx)), y: Math.min(100, Math.max(0, selectedLayer.y + dy)) });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [deleteLayer, redo, selectedId, selectedLayer, togglePlay, undo, updateLayer]);

  const runDownload = useCallback(async (kind: "png" | "svg" | "json", opts: DownloadOptions, override?: Project) => {
    const source = override ?? project;
    setBusy("Preparing...");
    try {
      if (kind === "png") {
        const quality = source.fourK && opts.quality === "native" ? "4K" : opts.quality;
        await downloadPng(source.name, source.size, quality);
        toast("✅ Downloaded PNG");
      } else if (kind === "svg") {
        downloadSvg(source.name, source.size, opts.quality);
        toast("✅ Downloaded SVG");
      } else {
        downloadJson(JSON.parse(projectToJson(source)), `${slugify(source.name)}.json`);
        toast("✅ Downloaded JSON");
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      toast(`❌ Download failed: ${message}`, "error");
    } finally {
      setBusy(null);
    }
  }, [project, toast]);

  const openVideoExport = useCallback((format: "mp4" | "webm", opts: DownloadOptions, override?: Project) => {
    setPlaying(false);
    timeRef.current = 0;
    setTime(0);
    setVideoPreview(null);
    setVideoSupport(null);
    setVideoRequest({
      format,
      options: { ...opts, quality: opts.quality === "native" ? "1080p" : opts.quality },
      source: override ?? projectRef.current,
    });
  }, []);

  const startVideoExport = useCallback(async () => {
    if (!videoRequest) return;
    const { format, options, source } = videoRequest;
    const quality = options.quality === "native" ? "1080p" : options.quality;
    const { width, height } = targetSize(source.size, quality);
    const controller = new AbortController();
    abortRef.current = controller;
    setExporting(true);
    setBusy("Rendering...");
    setVideoProgress({
      percent: 0,
      frame: 0,
      totalFrames: Math.max(1, Math.floor(options.fps * options.duration)),
      stage: "Preparing frames",
    });
    let actualFormat: "mp4" | "webm" = format;
    try {
      if (format === "mp4") {
        const support = await detectMp4Support(width, height, options.fps);
        if (!support.supported) {
          actualFormat = "webm";
          toast("⚠️ Real MP4 unsupported here — downloading WebM fallback", "error");
        }
      }
      const overrides = {
        project: source,
        width,
        height,
        fps: options.fps,
        duration: options.duration,
        signal: controller.signal,
        onProgress: setVideoProgress,
      };
      const blob = actualFormat === "mp4" ? await encodeMp4(overrides) : await encodeWebm(overrides);
      downloadBlob(blob, `mini-canva-${Date.now()}.${actualFormat}`);
      toast(actualFormat === "mp4"
        ? "✅ MP4 Ready - Check Downloads"
        : "✅ WebM Ready - Check Downloads");
      setVideoRequest(null);
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        toast("⛔ Export cancelled", "info");
      } else {
        toast(`❌ Export failed: ${error instanceof Error ? error.message : "Unknown error"}`, "error");
      }
    } finally {
      abortRef.current = null;
      setVideoProgress(null);
      setExporting(false);
      setPlaying(false);
      setBusy(null);
    }
  }, [toast, videoRequest]);

  const generateFromJson = useCallback((withVideo: boolean) => {
    try {
      const imported = importProject(jsonText);
      commit(() => imported);
      setSelectedId(null);
      setRightMode("canvas");
      setTime(0);
      timeRef.current = 0;
      toast(`✅ JSON Imported • ${imported.scenes.length} scenes`);
      if (withVideo) {
        openVideoExport("mp4", { quality: "1080p", duration: 5, fps: imported.fps }, imported);
      }
    } catch (error) {
      toast(`❌ ${error instanceof Error ? error.message : "Invalid JSON"}`, "error");
    }
  }, [commit, jsonText, openVideoExport, toast]);

  const handlePanel = useCallback((p: PanelId | null) => {
    setPanel(p);
    if (p === "backgrounds") setRightMode("background");
  }, []);
  const loadSampleJson = useCallback(() => {
    setJsonText(SAMPLE_JSON);
    toast("📄 Sample JSON loaded", "info");
  }, [toast]);
  const leftActions = useMemo(() => ({
    applyBackground, addCharacter, addFinance, addText, addImageFile, addSticker,
    selectScene, addScene, duplicateScene, deleteScene, jsonText, setJsonText,
    generateFromJson, loadSampleJson,
  }), [applyBackground, addCharacter, addFinance, addText, addImageFile, addSticker,
    selectScene, addScene, duplicateScene, deleteScene, jsonText, generateFromJson, loadSampleJson]);
  const handleBackgroundClick = useCallback(() => setRightMode("background"), []);
  const handleDownload = useCallback((kind: "png" | "svg" | "json" | "mp4" | "webm", opts: DownloadOptions) => {
    if (kind === "mp4" || kind === "webm") openVideoExport(kind, opts);
    else void runDownload(kind, opts);
  }, [openVideoExport, runDownload]);
  const timelineScenes = useMemo(() => project.scenes.map((s) => ({ id: s.id, name: s.name, duration: s.duration })), [project.scenes]);
  const handleDuration = useCallback((id: string, duration: number) => {
    commit((p) => ({ ...p, scenes: p.scenes.map((s) => (s.id === id ? { ...s, duration } : s)) }));
  }, [commit]);
  const rightScene = useMemo(() => ({ name: activeScene.name, duration: activeScene.duration }), [activeScene.name, activeScene.duration]);
  const handleRightMode = useCallback((mode: RightMode) => {
    setRightMode(mode);
    if (mode === "background") setPanel("backgrounds");
  }, []);
  const handleLayerPatch = useCallback((patch: Partial<Layer>) => {
    if (selectedLayer) updateLayer(selectedLayer.id, patch);
  }, [selectedLayer, updateLayer]);
  const handleCanvasPatch = useCallback((patch: Partial<Pick<Project, "name" | "fps" | "fourK">>) => {
    commit((p) => ({ ...p, ...patch }));
  }, [commit]);
  const handleCustomSize = useCallback((width: number, height: number) => changeSize(CANVAS_SIZES[9], { width, height }), [changeSize]);
  const handleScenePatch = useCallback((patch: { name?: string; duration?: number }) => updateActiveScene((s) => ({ ...s, ...patch })), [updateActiveScene]);
  const handleApplyBg = useCallback((name: string) => toast(`✅ ${name}`), [toast]);
  const closeMobileRight = useCallback(() => setMobileRight(false), []);

  return (
    <main className="flex h-screen w-screen flex-col overflow-hidden bg-ink text-zinc-100">
      <header className="flex h-11 shrink-0 items-center justify-between border-b border-line bg-[#121216] px-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-brand2 text-[11px] text-white">✦</div>
          <h1 className="truncate text-[12px] font-semibold tracking-tight text-zinc-100">Mini Canva Pro <span className="text-zinc-600">/</span> <span className="text-brand2">Animated Studio</span></h1>
          <span className="hidden rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[8px] font-semibold uppercase tracking-wider text-emerald-300 sm:inline">Vector • 4K</span>
        </div>
        <div className="flex items-center gap-1 lg:hidden">
          <button type="button" onClick={() => setMobileLeft((v) => !v)} className="rounded-md border border-line bg-panel2 px-2 py-1 text-[10px] text-zinc-300">Left</button>
          <button type="button" onClick={() => setMobileRight((v) => !v)} className="rounded-md border border-line bg-panel2 px-2 py-1 text-[10px] text-zinc-300">Right</button>
        </div>
      </header>

      <div className="relative flex min-h-0 flex-1">
        <LeftDock
          panel={panel}
          onPanel={handlePanel}
          scenes={project.scenes}
          activeSceneId={project.activeSceneId}
          mobileOpen={mobileLeft}
          actions={leftActions}
        />

        <section className="flex min-w-0 flex-1 flex-col">
          <Toolbar
            size={project.size}
            zoom={zoom}
            playing={playing}
            busy={busy}
            canUndo={historyCounts.past > 0}
            canRedo={historyCounts.future > 0}
            onUndo={undo}
            onRedo={redo}
            onSize={changeSize}
            onZoom={setZoom}
            onPlayToggle={togglePlay}
            onRestart={restart}
            onDownload={handleDownload}
          />
          <Stage
            scene={activeScene}
            size={project.size}
            time={time}
            zoom={zoom}
            selectedId={selectedId}
            fourK={project.fourK}
            onSelect={selectLayer}
            onLayerChange={updateLayer}
            onBackgroundClick={handleBackgroundClick}
            onDeleteLayer={deleteLayer}
            onDuplicateLayer={duplicateLayer}
          />
          <Timeline
            scenes={timelineScenes}
            activeSceneId={project.activeSceneId}
            time={time}
            playing={playing}
            onSelectScene={selectScene}
            onAddScene={addScene}
            onDuplicateScene={duplicateScene}
            onDeleteScene={deleteScene}
            onDuration={handleDuration}
            onTogglePlay={togglePlay}
            onRestart={restart}
            onSeek={seek}
          />
        </section>

        <div className={`${mobileRight ? "fixed inset-y-11 right-0 z-50 flex shadow-2xl shadow-black/70" : "hidden"} lg:relative lg:inset-auto lg:z-auto lg:flex lg:shadow-none`}>
          <RightPanel
            mode={rightMode}
            layer={selectedLayer}
            background={activeScene.background}
            scene={rightScene}
            project={project}
            onMode={handleRightMode}
            onBackground={updateBackground}
            onLayer={handleLayerPatch}
            onCanvas={handleCanvasPatch}
            onCustomSize={handleCustomSize}
            onScene={handleScenePatch}
            onApplyBackground={handleApplyBg}
            onDeleteLayer={deleteLayer}
            onDuplicateLayer={duplicateLayer}
            onCloseMobile={closeMobileRight}
          />
        </div>
      </div>
      {videoRequest && (
        <ExportModal
          request={videoRequest}
          progress={videoProgress}
          preview={videoPreview}
          support={videoSupport}
          onQuality={(quality) => {
            setVideoPreview(null);
            setVideoSupport(null);
            setVideoRequest((current) => current ? { ...current, options: { ...current.options, quality } } : current);
          }}
          onDuration={(duration) => setVideoRequest((current) => current ? { ...current, options: { ...current.options, duration } } : current)}
          onClose={() => setVideoRequest(null)}
          onStart={() => { void startVideoExport(); }}
          onCancel={() => abortRef.current?.abort()}
        />
      )}
      <ToastStack toasts={toasts} />
    </main>
  );
}
