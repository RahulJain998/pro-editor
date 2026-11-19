import type { CanvasSize } from "./types";
import { downloadBlob, slugify } from "./utils";

export type ExportQuality = "native" | "720p" | "1080p" | "4K";

export function targetSize(size: CanvasSize, quality: ExportQuality): { width: number; height: number } {
  const { width: W, height: H } = size;
  if (quality === "native") return { width: W, height: H };
  if (quality === "4K") {
    const scale = 3840 / Math.max(W, H);
    return { width: Math.round(W * scale), height: Math.round(H * scale) };
  }
  const base = quality === "720p" ? 720 : 1080;
  const scale = base / Math.min(W, H);
  return { width: Math.round(W * scale), height: Math.round(H * scale) };
}

export function getStageSvg(): SVGSVGElement | null {
  return document.querySelector<SVGSVGElement>("svg[data-stage-svg='true']");
}

export function serializeStage(outW: number, outH: number): string {
  const svg = getStageSvg();
  if (!svg) throw new Error("Canvas SVG not found");
  const clone = svg.cloneNode(true) as SVGSVGElement;
  clone.querySelectorAll("[data-ui='true']").forEach((node) => node.remove());
  clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  clone.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
  clone.setAttribute("width", String(outW));
  clone.setAttribute("height", String(outH));
  clone.setAttribute("viewBox", svg.getAttribute("viewBox") ?? "");
  clone.removeAttribute("style");
  return new XMLSerializer().serializeToString(clone);
}

export function svgBlob(svg: string): Blob {
  return new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
}

function imageFromSvg(svg: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(svgBlob(svg));
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Failed to rasterize SVG"));
    };
    img.src = url;
  });
}

export async function drawSvgToCanvas(canvas: HTMLCanvasElement, svg: string, outW: number, outH: number) {
  if (canvas.width !== outW || canvas.height !== outH) {
    canvas.width = outW;
    canvas.height = outH;
  }
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("2D canvas unavailable");
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  ctx.clearRect(0, 0, outW, outH);
  const img = await imageFromSvg(svg);
  ctx.drawImage(img, 0, 0, outW, outH);
}

export async function downloadPng(name: string, size: CanvasSize, quality: ExportQuality): Promise<void> {
  const { width, height } = targetSize(size, quality);
  const svg = serializeStage(width, height);
  const canvas = document.createElement("canvas");
  await drawSvgToCanvas(canvas, svg, width, height);
  const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/png"));
  if (!blob) throw new Error("PNG encoding failed");
  downloadBlob(blob, `${slugify(name)}-${width}x${height}.png`);
}

export function downloadSvg(name: string, size: CanvasSize, quality: ExportQuality): void {
  const { width, height } = targetSize(size, quality);
  downloadBlob(svgBlob(serializeStage(width, height)), `${slugify(name)}-${width}x${height}.svg`);
}

export function downloadJson(project: unknown, name: string): void {
  downloadBlob(new Blob([JSON.stringify(project, null, 2)], { type: "application/json" }), `${slugify(name)}.json`);
}

function pickMime(): string {
  const candidates = ["video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"];
  for (const mime of candidates) {
    if (typeof MediaRecorder !== "undefined" && MediaRecorder.isTypeSupported(mime)) return mime;
  }
  return "video/webm";
}

export interface RecordOptions {
  duration: number;
  fps: number;
  width: number;
  height: number;
  name: string;
  onProgress: (elapsed: number, duration: number) => void;
  onTick: (timeMs: number) => void;
}

export async function recordVideo(options: RecordOptions): Promise<void> {
  if (typeof MediaRecorder === "undefined") throw new Error("MediaRecorder is not supported in this browser");
  const { duration, fps, width, height, name, onProgress, onTick } = options;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("2D canvas unavailable");
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";

  const svg = serializeStage(width, height);
  await drawSvgToCanvas(canvas, svg, width, height);

  const stream = canvas.captureStream(fps);
  const mimeType = pickMime();
  const recorder = new MediaRecorder(stream, { mimeType, videoBitsPerSecond: Math.min(24_000_000, width * height * fps * 0.22) });
  const chunks: BlobPart[] = [];
  recorder.ondataavailable = (event) => {
    if (event.data.size > 0) chunks.push(event.data);
  };

  const done = new Promise<void>((resolve, reject) => {
    recorder.onstop = () => resolve();
    recorder.onerror = () => reject(new Error("Video recording failed"));
  });

  recorder.start(250);
  const started = performance.now();
  let cancelled = false;

  const frame = async () => {
    if (cancelled || recorder.state === "inactive") return;
    const elapsed = (performance.now() - started) / 1000;
    if (elapsed >= duration) {
      recorder.stop();
      return;
    }
    onProgress(elapsed, duration);
    onTick(elapsed * 1000);
    try {
      await drawSvgToCanvas(canvas, serializeStage(width, height), width, height);
    } catch {
      // keep recording with the last successfully drawn frame
    }
    requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);

  await done;
  cancelled = true;
  stream.getTracks().forEach((track) => track.stop());
  const blob = new Blob(chunks, { type: mimeType });
  if (blob.size === 0) throw new Error("Recorded video was empty");
  downloadBlob(blob, `${slugify(name)}-${duration}s.webm`);
}
