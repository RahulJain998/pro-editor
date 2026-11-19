import type { Project } from "./types";

export const AUTOSAVE_KEY = "mini-canva-autosave";
export const PROJECTS_KEY = "mini-canva-projects";

export interface SavedProject {
  id: string;
  name: string;
  date: string;
  project: Project;
}

function isProject(value: unknown): value is Project {
  if (!value || typeof value !== "object") return false;
  const p = value as Partial<Project>;
  return typeof p.name === "string" && Array.isArray(p.scenes) && p.scenes.length > 0 && Boolean(p.size);
}

export function loadSavedProjects(): SavedProject[] {
  try {
    const raw = localStorage.getItem(PROJECTS_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item): item is SavedProject => {
      const saved = item as Partial<SavedProject>;
      return Boolean(saved && typeof saved.id === "string" && isProject(saved.project));
    });
  } catch {
    return [];
  }
}

export function persistSavedProjects(list: SavedProject[]): void {
  try {
    localStorage.setItem(PROJECTS_KEY, JSON.stringify(list));
  } catch {
    // Storage can be full or disabled; editor still works in memory.
  }
}

export function saveProject(project: Project): SavedProject[] {
  const entry: SavedProject = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    name: project.name,
    date: new Date().toISOString().slice(0, 16).replace("T", " "),
    project: structuredClone(project),
  };
  const list = [entry, ...loadSavedProjects()].slice(0, 30);
  persistSavedProjects(list);
  return list;
}

export function removeSavedProject(id: string): SavedProject[] {
  const list = loadSavedProjects().filter((item) => item.id !== id);
  persistSavedProjects(list);
  return list;
}

export function readAutosave(): Project | null {
  try {
    const raw = localStorage.getItem(AUTOSAVE_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    if (isProject(parsed)) return parsed;
    if (parsed && typeof parsed === "object" && isProject((parsed as { project?: unknown }).project)) {
      return (parsed as { project: Project }).project;
    }
    return null;
  } catch {
    return null;
  }
}

export function writeAutosave(project: Project): void {
  try {
    localStorage.setItem(AUTOSAVE_KEY, JSON.stringify(project));
  } catch {
    // Ignore storage quota errors.
  }
}

export function clearAutosave(): void {
  try {
    localStorage.removeItem(AUTOSAVE_KEY);
  } catch {
    // Ignore storage errors.
  }
}
