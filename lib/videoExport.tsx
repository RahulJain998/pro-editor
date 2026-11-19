import { renderToStaticMarkup } from "react-dom/server";
import { ArrayBufferTarget, Muxer } from "mp4-muxer";
import { SceneSvg } from "./art";
import type { CanvasSize, Project, Scene } from "./types";

export interface VideoProgress {
  percent: number;
  frame: number;
  totalFrames: number;
  stage: string;
}

export interface VideoExportOptions {
  project: Project;
  width: number;
  height: number;
  fps: number;
  duration: number;
  signal: AbortSignal;
  onProgress: (progress: VideoProgress) => void;
}

const AVC_CODECS = ["avc1.640033", "avc1.640028", "avc1.4d4033", "avc1.4d4028", "avc1.42e028"];

function targetScale(size: CanvasSize, width: number, height: number) {
  return { W: size.width, H: size.height, outW: width, outH: height };
}

function baseColor(scene: Scene): string {
  const bg = scene.background;
  if (bg.type === "solid") return bg.color;
  if (bg.type === "gradient") return bg.gradient.from;
  if (bg.type === "pattern") return bg.pattern.accent;
  return "#050508";
}

function sceneSvgMarkup(scene: Scene, W: number, H: number, timeMs: number, outW: number, outH: number): string {
  return renderToStaticMarkup(
    <svg xmlns="http://www.w3.org/2000/svg" width={outW} height={outH} viewBox={`0 0 ${W} ${H}`}>
      <SceneSvg scene={scene} W={W} H={H} time={timeMs} prefix="videoexport" />
    </svg>,
  );
}

function frameAt(project: Project, seconds: number): { scene: Scene; localMs: number } {
  const scenes = project.scenes;
  let remaining = Math.max(0, seconds);
  for (let i = 0; i < scenes.length; i++) {
    const duration = scenes[i].duration;
    if (remaining < duration || i === scenes.length - 1) {
      return { scene: scenes[i], localMs: Math.min(remaining, duration) * 1000 };
    }
    remaining -= duration;
  }
  return { scene: scenes[0], localMs: 0 };
}

function imageFromMarkup(markup: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(new Blob([markup], { type: "image/svg+xml;charset=utf-8" }));
    const image = new Image();
    image.onload = () => {
      URL.revokeObjectURL(url);
      resolve(image);
    };
    image.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Failed to rasterize animation frame"));
    };
    image.src = url;
  });
}

async function drawFrame(
  canvas: HTMLCanvasElement,
  project: Project,
  seconds: number,
  width: number,
  height: number,
): Promise<void> {
  const { W, H } = targetScale(project.size, width, height);
  const { scene, localMs } = frameAt(project, seconds);
  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
  }
  const ctx = canvas.getContext("2d", { alpha: false });
  if (!ctx) throw new Error("2D canvas unavailable");
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  ctx.fillStyle = baseColor(scene);
  ctx.fillRect(0, 0, width, height);

  if (document.fonts?.ready) await document.fonts.ready;
  const image = await imageFromMarkup(sceneSvgMarkup(scene, W, H, localMs, width, height));
  ctx.drawImage(image, 0, 0, width, height);
}

export async function renderTestFrame(project: Project, width: number, height: number): Promise<{ dataUrl: string; ok: boolean }> {
  const previewW = Math.min(220, width);
  const previewH = Math.max(1, Math.round((height / width) * previewW));
  const canvas = document.createElement("canvas");
  await drawFrame(canvas, project, 0, previewW, previewH);
  const ctx = canvas.getContext("2d", { alpha: false });
  let visible = 0;
  if (ctx) {
    const { data } = ctx.getImageData(0, 0, previewW, previewH);
    for (let i = 0; i < data.length; i += 4 * 97) {
      if (data[i] + data[i + 1] + data[i + 2] > 45) visible++;
    }
  }
  return { dataUrl: canvas.toDataURL("image/png"), ok: visible > 4 };
}

export interface Mp4Support {
  supported: boolean;
  codec: string | null;
  message: string;
}

export async function detectMp4Support(width: number, height: number, fps: number): Promise<Mp4Support> {
  if (typeof VideoEncoder === "undefined" || typeof VideoFrame === "undefined") {
    return { supported: false, codec: null, message: "VideoEncoder is not available in this browser." };
  }
  const bitrate = width >= 2000 ? 12_000_000 : 8_000_000;
  for (const codec of AVC_CODECS) {
    const config: VideoEncoderConfig = {
      codec, width, height, bitrate, framerate: fps, avc: { format: "avc" },
    };
    try {
      const result = await VideoEncoder.isConfigSupported(config);
      if (result.supported) {
        return { supported: true, codec, message: `H.264 ${codec} supported` };
      }
    } catch {
      continue;
    }
  }
  return { supported: false, codec: null, message: "This browser cannot encode H.264 MP4." };
}

function abortError(): DOMException {
  return new DOMException("Export cancelled", "AbortError");
}

export async function encodeMp4(options: VideoExportOptions): Promise<Blob> {
  const { project, width, height, fps, duration, signal, onProgress } = options;
  const support = await detectMp4Support(width, height, fps);
  if (!support.supported || !support.codec) throw new Error(support.message);

  const muxer = new Muxer({
    target: new ArrayBufferTarget(),
    video: { codec: "avc", width, height, frameRate: fps },
    fastStart: "in-memory",
    firstTimestampBehavior: "offset",
  });

  let encodeError: Error | null = null;
  const encoder = new VideoEncoder({
    output: (chunk, meta) => {
      try {
        muxer.addVideoChunk(chunk, meta);
      } catch (error) {
        encodeError = error instanceof Error ? error : new Error(String(error));
      }
    },
    error: (error) => {
      encodeError = error instanceof Error ? error : new Error(String(error));
    },
  });

  const bitrate = width >= 2000 ? 12_000_000 : 8_000_000;
  encoder.configure({
    codec: support.codec,
    width,
    height,
    bitrate,
    framerate: fps,
    avc: { format: "avc" },
    latencyMode: "quality",
  });

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const totalFrames = Math.max(1, Math.floor(fps * duration));
  const frameDuration = Math.round(1_000_000 / fps);
  const fontsReady = document.fonts?.ready ?? Promise.resolve();

  try {
    for (let i = 0; i < totalFrames; i++) {
      if (signal.aborted) throw abortError();
      if (encodeError) throw encodeError;
      await fontsReady;
      await drawFrame(canvas, project, i / fps, width, height);
      if (signal.aborted) throw abortError();

      const frame = new VideoFrame(canvas, {
        timestamp: Math.round((i * 1_000_000) / fps),
        duration: frameDuration,
      });
      encoder.encode(frame, { keyFrame: i % (fps * 2) === 0 });
      frame.close();

      while (encoder.encodeQueueSize > 10 && !signal.aborted) {
        await new Promise((resolve) => setTimeout(resolve, 0));
      }
      onProgress({
        percent: Math.min(100, Math.round(((i + 1) / totalFrames) * 100)),
        frame: i + 1,
        totalFrames,
        stage: "Encoding H.264",
      });
    }
    if (signal.aborted) throw abortError();
    await encoder.flush();
    if (encodeError) throw encodeError;
    muxer.finalize();
    return new Blob([muxer.target.buffer], { type: "video/mp4" });
  } finally {
    if (encoder.state !== "closed") encoder.close();
  }
}

function webmMime(): string {
  const candidates = ["video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"];
  for (const mime of candidates) {
    if (typeof MediaRecorder !== "undefined" && MediaRecorder.isTypeSupported(mime)) return mime;
  }
  return "video/webm";
}

export async function encodeWebm(options: VideoExportOptions): Promise<Blob> {
  if (typeof MediaRecorder === "undefined") throw new Error("This browser cannot record WebM either. Use latest Chrome.");
  const { project, width, height, fps, duration, signal, onProgress } = options;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  await drawFrame(canvas, project, 0, width, height);

  const stream = canvas.captureStream(fps);
  const mimeType = webmMime();
  const recorder = new MediaRecorder(stream, { mimeType, videoBitsPerSecond: width >= 2000 ? 12_000_000 : 8_000_000 });
  const chunks: BlobPart[] = [];
  recorder.ondataavailable = (event) => {
    if (event.data.size > 0) chunks.push(event.data);
  };
  const finished = new Promise<void>((resolve, reject) => {
    recorder.onstop = () => resolve();
    recorder.onerror = () => reject(new Error("WebM recording failed"));
  });
  recorder.start(250);

  const totalFrames = Math.max(1, Math.floor(fps * duration));
  const started = performance.now();
  try {
    for (let i = 0; i < totalFrames; i++) {
      if (signal.aborted) throw abortError();
      const target = started + (i * 1000) / fps;
      const wait = target - performance.now();
      if (wait > 0) await new Promise((resolve) => setTimeout(resolve, wait));
      await drawFrame(canvas, project, i / fps, width, height);
      onProgress({
        percent: Math.min(100, Math.round(((i + 1) / totalFrames) * 100)),
        frame: i + 1,
        totalFrames,
        stage: "Recording WebM",
      });
    }
  } finally {
    if (recorder.state !== "inactive") recorder.stop();
    await finished;
    stream.getTracks().forEach((track) => track.stop());
  }
  const blob = new Blob(chunks, { type: mimeType });
  if (blob.size === 0) throw new Error("WebM recording produced an empty file");
  return blob;
}
