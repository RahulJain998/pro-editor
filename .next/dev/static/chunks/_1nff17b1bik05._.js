(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Editor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Editor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LeftDock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/LeftDock.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RightPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/RightPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Stage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Stage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Timeline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Timeline.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Toolbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ExportModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ExportModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$exporter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/exporter.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$videoExport$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/videoExport.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$initialProject$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/initialProject.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$jsonImport$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/jsonImport.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/presets.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function Editor() {
    _s();
    const [project, setProjectState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$initialProject$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createInitialProject"]);
    const projectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(project);
    const setProject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[setProject]": (value)=>{
            const next = typeof value === "function" ? value(projectRef.current) : value;
            projectRef.current = next;
            setProjectState(next);
        }
    }["Editor.useCallback[setProject]"], []);
    const [panel, setPanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("backgrounds");
    const [rightMode, setRightMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("canvas");
    const [selectedId, setSelectedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [playing, setPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [exporting, setExporting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [zoom, setZoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(100);
    const [toasts, setToasts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [jsonText, setJsonText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$jsonImport$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SAMPLE_JSON"]);
    const [mobileLeft, setMobileLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileRight, setMobileRight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [historyCounts, setHistoryCounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        past: 0,
        future: 0
    });
    const [videoRequest, setVideoRequest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [videoProgress, setVideoProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [videoPreview, setVideoPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [videoSupport, setVideoSupport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const past = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const future = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const lastCommit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const timeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const abortRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const activeScene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Editor.useMemo[activeScene]": ()=>project.scenes.find({
                "Editor.useMemo[activeScene]": (s)=>s.id === project.activeSceneId
            }["Editor.useMemo[activeScene]"]) ?? project.scenes[0]
    }["Editor.useMemo[activeScene]"], [
        project
    ]);
    const selectedLayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Editor.useMemo[selectedLayer]": ()=>activeScene.layers.find({
                "Editor.useMemo[selectedLayer]": (l)=>l.id === selectedId
            }["Editor.useMemo[selectedLayer]"]) ?? null
    }["Editor.useMemo[selectedLayer]"], [
        activeScene,
        selectedId
    ]);
    const activeDuration = activeScene?.duration ?? 5;
    const toast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[toast]": (text, kind = "success")=>{
            const id = Date.now() + Math.random();
            setToasts({
                "Editor.useCallback[toast]": (list)=>[
                        ...list.slice(-3),
                        {
                            id,
                            text,
                            kind
                        }
                    ]
            }["Editor.useCallback[toast]"]);
            setTimeout({
                "Editor.useCallback[toast]": ()=>setToasts({
                        "Editor.useCallback[toast]": (list)=>list.filter({
                                "Editor.useCallback[toast]": (t)=>t.id !== id
                            }["Editor.useCallback[toast]"])
                    }["Editor.useCallback[toast]"])
            }["Editor.useCallback[toast]"], 2600);
        }
    }["Editor.useCallback[toast]"], []);
    const requestSource = videoRequest?.source;
    const requestQuality = videoRequest?.options.quality;
    const requestFps = videoRequest?.options.fps;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Editor.useEffect": ()=>{
            if (!requestSource) return;
            let alive = true;
            const quality = requestQuality === "native" || !requestQuality ? "1080p" : requestQuality;
            const { width, height } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$exporter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["targetSize"])(requestSource.size, quality);
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$videoExport$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["detectMp4Support"])(width, height, requestFps ?? 60).then({
                "Editor.useEffect": (result)=>{
                    if (alive) setVideoSupport(result);
                }
            }["Editor.useEffect"]).catch({
                "Editor.useEffect": ()=>{
                    if (alive) setVideoSupport({
                        supported: false,
                        codec: null,
                        message: "MP4 support check failed."
                    });
                }
            }["Editor.useEffect"]);
            const previewW = 200;
            const previewH = Math.max(1, Math.round(requestSource.size.height / requestSource.size.width * previewW));
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$videoExport$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderTestFrame"])(requestSource, previewW, previewH).then({
                "Editor.useEffect": (result)=>{
                    if (alive) setVideoPreview(result);
                }
            }["Editor.useEffect"]).catch({
                "Editor.useEffect": ()=>{
                    if (alive) setVideoPreview({
                        dataUrl: "",
                        ok: false
                    });
                }
            }["Editor.useEffect"]);
            return ({
                "Editor.useEffect": ()=>{
                    alive = false;
                }
            })["Editor.useEffect"];
        }
    }["Editor.useEffect"], [
        requestFps,
        requestQuality,
        requestSource
    ]);
    const commit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[commit]": (updater, record = true)=>{
            const now = Date.now();
            if (record && now - lastCommit.current > 220) {
                past.current = [
                    ...past.current.slice(-49),
                    projectRef.current
                ];
                future.current = [];
                lastCommit.current = now;
                setHistoryCounts({
                    past: past.current.length,
                    future: 0
                });
            }
            setProject(updater(projectRef.current));
        }
    }["Editor.useCallback[commit]"], [
        setProject
    ]);
    const updateActiveScene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[updateActiveScene]": (fn, record = true)=>{
            commit({
                "Editor.useCallback[updateActiveScene]": (p)=>({
                        ...p,
                        scenes: p.scenes.map({
                            "Editor.useCallback[updateActiveScene]": (s)=>s.id === p.activeSceneId ? fn(s) : s
                        }["Editor.useCallback[updateActiveScene]"])
                    })
            }["Editor.useCallback[updateActiveScene]"], record);
        }
    }["Editor.useCallback[updateActiveScene]"], [
        commit
    ]);
    const updateBackground = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[updateBackground]": (patch)=>{
            updateActiveScene({
                "Editor.useCallback[updateBackground]": (s)=>({
                        ...s,
                        background: {
                            ...s.background,
                            ...patch
                        }
                    })
            }["Editor.useCallback[updateBackground]"]);
        }
    }["Editor.useCallback[updateBackground]"], [
        updateActiveScene
    ]);
    const updateLayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[updateLayer]": (id, patch)=>{
            updateActiveScene({
                "Editor.useCallback[updateLayer]": (s)=>({
                        ...s,
                        layers: s.layers.map({
                            "Editor.useCallback[updateLayer]": (l)=>l.id === id ? {
                                    ...l,
                                    ...patch
                                } : l
                        }["Editor.useCallback[updateLayer]"])
                    })
            }["Editor.useCallback[updateLayer]"]);
        }
    }["Editor.useCallback[updateLayer]"], [
        updateActiveScene
    ]);
    const selectLayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[selectLayer]": (id)=>{
            setSelectedId(id);
            if (id) setRightMode("layer");
        }
    }["Editor.useCallback[selectLayer]"], []);
    const applyBackground = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[applyBackground]": (bg, name)=>{
            updateBackground(bg);
            setSelectedId(null);
            setRightMode("background");
            toast(`✅ ${name} Applied`);
            setMobileRight(true);
        }
    }["Editor.useCallback[applyBackground]"], [
        toast,
        updateBackground
    ]);
    const addLayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[addLayer]": (layer, message)=>{
            updateActiveScene({
                "Editor.useCallback[addLayer]": (s)=>({
                        ...s,
                        layers: [
                            ...s.layers,
                            layer
                        ]
                    })
            }["Editor.useCallback[addLayer]"]);
            setSelectedId(layer.id);
            setRightMode("layer");
            toast(message);
            setMobileRight(true);
        }
    }["Editor.useCallback[addLayer]"], [
        toast,
        updateActiveScene
    ]);
    const addCharacter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[addCharacter]": (def)=>{
            addLayer((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeCharacterLayer"])(def), `✅ ${def.name} Added`);
        }
    }["Editor.useCallback[addCharacter]"], [
        addLayer
    ]);
    const addFinance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[addFinance]": (def)=>{
            addLayer((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeFinanceLayer"])(def), `✅ ${def.label.split(" • ")[0]} Added`);
        }
    }["Editor.useCallback[addFinance]"], [
        addLayer
    ]);
    const addText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[addText]": (presetId)=>{
            addLayer((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeTextLayer"])(presetId), "✅ Text Added");
        }
    }["Editor.useCallback[addText]"], [
        addLayer
    ]);
    const addSticker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[addSticker]": (shape, fill)=>{
            const layer = {
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uid"])("shape"),
                name: shape.toUpperCase(),
                kind: "shape",
                x: 50,
                y: 50,
                w: 26,
                h: 26,
                rot: 0,
                opacity: 100,
                visible: true,
                locked: false,
                animation: "float",
                animSpeed: 1,
                shape,
                fill,
                stroke: "#FFFFFF",
                strokeWidth: 2,
                radius: 8,
                fillGradient: {
                    enabled: false,
                    from: fill,
                    to: "#7C3AED"
                }
            };
            addLayer(layer, "✅ Sticker Added");
        }
    }["Editor.useCallback[addSticker]"], [
        addLayer
    ]);
    const addImageFile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[addImageFile]": (file)=>{
            const reader = new FileReader();
            reader.onload = ({
                "Editor.useCallback[addImageFile]": ()=>{
                    const src = String(reader.result ?? "");
                    const layer = {
                        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uid"])("img"),
                        name: file.name,
                        kind: "image",
                        x: 50,
                        y: 50,
                        w: 50,
                        h: 50,
                        rot: 0,
                        opacity: 100,
                        visible: true,
                        locked: false,
                        animation: "none",
                        animSpeed: 1,
                        src,
                        fit: "contain",
                        radius: 8,
                        grayscale: 0,
                        blur: 0,
                        brightness: 100,
                        contrast: 100,
                        crop: 1,
                        flipX: false
                    };
                    addLayer(layer, "✅ Image Added");
                }
            })["Editor.useCallback[addImageFile]"];
            reader.onerror = ({
                "Editor.useCallback[addImageFile]": ()=>toast("❌ Image read failed", "error")
            })["Editor.useCallback[addImageFile]"];
            reader.readAsDataURL(file);
        }
    }["Editor.useCallback[addImageFile]"], [
        addLayer,
        toast
    ]);
    const deleteLayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[deleteLayer]": ()=>{
            if (!selectedId) return;
            updateActiveScene({
                "Editor.useCallback[deleteLayer]": (s)=>({
                        ...s,
                        layers: s.layers.filter({
                            "Editor.useCallback[deleteLayer]": (l)=>l.id !== selectedId
                        }["Editor.useCallback[deleteLayer]"])
                    })
            }["Editor.useCallback[deleteLayer]"]);
            setSelectedId(null);
            toast("🗑️ Layer Deleted", "info");
        }
    }["Editor.useCallback[deleteLayer]"], [
        selectedId,
        toast,
        updateActiveScene
    ]);
    const duplicateLayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[duplicateLayer]": ()=>{
            if (!selectedLayer) return;
            const copy = {
                ...selectedLayer,
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uid"])(selectedLayer.kind),
                x: Math.min(95, selectedLayer.x + 4),
                y: Math.min(95, selectedLayer.y + 4),
                name: `${selectedLayer.name} copy`
            };
            updateActiveScene({
                "Editor.useCallback[duplicateLayer]": (s)=>({
                        ...s,
                        layers: [
                            ...s.layers,
                            copy
                        ]
                    })
            }["Editor.useCallback[duplicateLayer]"]);
            setSelectedId(copy.id);
            toast("✅ Layer Duplicated");
        }
    }["Editor.useCallback[duplicateLayer]"], [
        selectedLayer,
        toast,
        updateActiveScene
    ]);
    const changeSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[changeSize]": (size, custom)=>{
            const next = custom ? {
                ...size,
                width: custom.width,
                height: custom.height,
                short: `${custom.width}x${custom.height}`,
                ratio: `${Math.round(custom.width / custom.height * 100) / 100}:1`
            } : {
                ...size
            };
            commit({
                "Editor.useCallback[changeSize]": (p)=>({
                        ...p,
                        size: next
                    })
            }["Editor.useCallback[changeSize]"]);
            toast(`✅ Canvas ${next.width} x ${next.height}`);
        }
    }["Editor.useCallback[changeSize]"], [
        commit,
        toast
    ]);
    const undo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[undo]": ()=>{
            const prev = past.current.pop();
            if (!prev) return;
            future.current = [
                ...future.current,
                projectRef.current
            ];
            setHistoryCounts({
                past: past.current.length,
                future: future.current.length
            });
            setProject(prev);
            toast("↩️ Undone", "info");
        }
    }["Editor.useCallback[undo]"], [
        setProject,
        toast
    ]);
    const redo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[redo]": ()=>{
            const next = future.current.pop();
            if (!next) return;
            past.current = [
                ...past.current,
                projectRef.current
            ];
            setHistoryCounts({
                past: past.current.length,
                future: future.current.length
            });
            setProject(next);
            toast("↪️ Redone", "info");
        }
    }["Editor.useCallback[redo]"], [
        setProject,
        toast
    ]);
    const addScene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[addScene]": ()=>{
            const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uid"])("scene");
            commit({
                "Editor.useCallback[addScene]": (p)=>({
                        ...p,
                        scenes: [
                            ...p.scenes,
                            {
                                id,
                                name: `Scene ${p.scenes.length + 1}`,
                                duration: 5,
                                background: structuredClone(activeScene.background),
                                layers: []
                            }
                        ],
                        activeSceneId: id
                    })
            }["Editor.useCallback[addScene]"]);
            setSelectedId(null);
            setTime(0);
            timeRef.current = 0;
            toast("✅ Scene Added");
        }
    }["Editor.useCallback[addScene]"], [
        activeScene,
        commit,
        toast
    ]);
    const duplicateScene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[duplicateScene]": (id)=>{
            const source = project.scenes.find({
                "Editor.useCallback[duplicateScene].source": (s)=>s.id === id
            }["Editor.useCallback[duplicateScene].source"]);
            if (!source) return;
            const newId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uid"])("scene");
            const copy = {
                ...structuredClone(source),
                id: newId,
                name: `${source.name} copy`,
                layers: source.layers.map({
                    "Editor.useCallback[duplicateScene]": (l)=>({
                            ...l,
                            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uid"])(l.kind)
                        })
                }["Editor.useCallback[duplicateScene]"])
            };
            commit({
                "Editor.useCallback[duplicateScene]": (p)=>({
                        ...p,
                        scenes: [
                            ...p.scenes,
                            copy
                        ],
                        activeSceneId: newId
                    })
            }["Editor.useCallback[duplicateScene]"]);
            toast("✅ Scene Duplicated");
        }
    }["Editor.useCallback[duplicateScene]"], [
        commit,
        project.scenes,
        toast
    ]);
    const deleteScene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[deleteScene]": (id)=>{
            if (project.scenes.length <= 1) return;
            commit({
                "Editor.useCallback[deleteScene]": (p)=>{
                    const scenes = p.scenes.filter({
                        "Editor.useCallback[deleteScene].scenes": (s)=>s.id !== id
                    }["Editor.useCallback[deleteScene].scenes"]);
                    return {
                        ...p,
                        scenes,
                        activeSceneId: p.activeSceneId === id ? scenes[0].id : p.activeSceneId
                    };
                }
            }["Editor.useCallback[deleteScene]"]);
            setSelectedId(null);
            toast("🗑️ Scene Deleted", "info");
        }
    }["Editor.useCallback[deleteScene]"], [
        commit,
        project.scenes.length,
        toast
    ]);
    const selectScene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[selectScene]": (id)=>{
            commit({
                "Editor.useCallback[selectScene]": (p)=>({
                        ...p,
                        activeSceneId: id
                    })
            }["Editor.useCallback[selectScene]"], false);
            setSelectedId(null);
            setTime(0);
            timeRef.current = 0;
        }
    }["Editor.useCallback[selectScene]"], [
        commit
    ]);
    const seek = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[seek]": (_sceneId, ms)=>{
            timeRef.current = ms;
            setTime(ms);
        }
    }["Editor.useCallback[seek]"], []);
    const togglePlay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[togglePlay]": ()=>{
            if (!playing && timeRef.current >= activeDuration * 1000 - 30) {
                timeRef.current = 0;
                setTime(0);
            }
            setPlaying({
                "Editor.useCallback[togglePlay]": (v)=>!v
            }["Editor.useCallback[togglePlay]"]);
        }
    }["Editor.useCallback[togglePlay]"], [
        activeDuration,
        playing
    ]);
    const restart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[restart]": ()=>{
            timeRef.current = 0;
            setTime(0);
            setPlaying(true);
            toast("🔁 Preview Restarted", "info");
        }
    }["Editor.useCallback[restart]"], [
        toast
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Editor.useEffect": ()=>{
            if (!playing || exporting) return;
            let raf = 0;
            let last = performance.now();
            const tick = {
                "Editor.useEffect.tick": (now)=>{
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
                }
            }["Editor.useEffect.tick"];
            raf = requestAnimationFrame(tick);
            return ({
                "Editor.useEffect": ()=>cancelAnimationFrame(raf)
            })["Editor.useEffect"];
        }
    }["Editor.useEffect"], [
        activeDuration,
        exporting,
        playing
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Editor.useEffect": ()=>{
            const onKey = {
                "Editor.useEffect.onKey": (e)=>{
                    const target = e.target;
                    if ([
                        "INPUT",
                        "TEXTAREA",
                        "SELECT"
                    ].includes(target.tagName)) return;
                    const mod = e.metaKey || e.ctrlKey;
                    if (mod && e.key.toLowerCase() === "z") {
                        e.preventDefault();
                        if (e.shiftKey) redo();
                        else undo();
                    } else if (mod && e.key.toLowerCase() === "y") {
                        e.preventDefault();
                        redo();
                    } else if (e.key === " ") {
                        e.preventDefault();
                        togglePlay();
                    } else if ((e.key === "Delete" || e.key === "Backspace") && selectedId) {
                        e.preventDefault();
                        deleteLayer();
                    } else if (selectedLayer && [
                        "ArrowLeft",
                        "ArrowRight",
                        "ArrowUp",
                        "ArrowDown"
                    ].includes(e.key)) {
                        e.preventDefault();
                        const step = e.shiftKey ? 5 : 1;
                        const dx = e.key === "ArrowLeft" ? -step : e.key === "ArrowRight" ? step : 0;
                        const dy = e.key === "ArrowUp" ? -step : e.key === "ArrowDown" ? step : 0;
                        updateLayer(selectedLayer.id, {
                            x: Math.min(100, Math.max(0, selectedLayer.x + dx)),
                            y: Math.min(100, Math.max(0, selectedLayer.y + dy))
                        });
                    }
                }
            }["Editor.useEffect.onKey"];
            window.addEventListener("keydown", onKey);
            return ({
                "Editor.useEffect": ()=>window.removeEventListener("keydown", onKey)
            })["Editor.useEffect"];
        }
    }["Editor.useEffect"], [
        deleteLayer,
        redo,
        selectedId,
        selectedLayer,
        togglePlay,
        undo,
        updateLayer
    ]);
    const runDownload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[runDownload]": async (kind, opts, override)=>{
            const source = override ?? project;
            setBusy("Preparing...");
            try {
                if (kind === "png") {
                    const quality = source.fourK && opts.quality === "native" ? "4K" : opts.quality;
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$exporter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["downloadPng"])(source.name, source.size, quality);
                    toast("✅ Downloaded PNG");
                } else if (kind === "svg") {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$exporter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["downloadSvg"])(source.name, source.size, opts.quality);
                    toast("✅ Downloaded SVG");
                } else {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$exporter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["downloadJson"])(JSON.parse((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$jsonImport$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectToJson"])(source)), `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slugify"])(source.name)}.json`);
                    toast("✅ Downloaded JSON");
                }
            } catch (error) {
                const message = error instanceof Error ? error.message : "Unknown error";
                toast(`❌ Download failed: ${message}`, "error");
            } finally{
                setBusy(null);
            }
        }
    }["Editor.useCallback[runDownload]"], [
        project,
        toast
    ]);
    const openVideoExport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[openVideoExport]": (format, opts, override)=>{
            setPlaying(false);
            timeRef.current = 0;
            setTime(0);
            setVideoPreview(null);
            setVideoSupport(null);
            setVideoRequest({
                format,
                options: {
                    ...opts,
                    quality: opts.quality === "native" ? "1080p" : opts.quality
                },
                source: override ?? projectRef.current
            });
        }
    }["Editor.useCallback[openVideoExport]"], []);
    const startVideoExport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[startVideoExport]": async ()=>{
            if (!videoRequest) return;
            const { format, options, source } = videoRequest;
            const quality = options.quality === "native" ? "1080p" : options.quality;
            const { width, height } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$exporter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["targetSize"])(source.size, quality);
            const controller = new AbortController();
            abortRef.current = controller;
            setExporting(true);
            setBusy("Rendering...");
            setVideoProgress({
                percent: 0,
                frame: 0,
                totalFrames: Math.max(1, Math.floor(options.fps * options.duration)),
                stage: "Preparing frames"
            });
            let actualFormat = format;
            try {
                if (format === "mp4") {
                    const support = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$videoExport$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["detectMp4Support"])(width, height, options.fps);
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
                    onProgress: setVideoProgress
                };
                const blob = actualFormat === "mp4" ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$videoExport$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeMp4"])(overrides) : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$videoExport$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeWebm"])(overrides);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["downloadBlob"])(blob, `mini-canva-${Date.now()}.${actualFormat}`);
                toast(actualFormat === "mp4" ? "✅ MP4 Ready - Check Downloads" : "✅ WebM Ready - Check Downloads");
                setVideoRequest(null);
            } catch (error) {
                if (error instanceof DOMException && error.name === "AbortError") {
                    toast("⛔ Export cancelled", "info");
                } else {
                    toast(`❌ Export failed: ${error instanceof Error ? error.message : "Unknown error"}`, "error");
                }
            } finally{
                abortRef.current = null;
                setVideoProgress(null);
                setExporting(false);
                setPlaying(false);
                setBusy(null);
            }
        }
    }["Editor.useCallback[startVideoExport]"], [
        toast,
        videoRequest
    ]);
    const generateFromJson = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[generateFromJson]": (withVideo)=>{
            try {
                const imported = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$jsonImport$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["importProject"])(jsonText);
                commit({
                    "Editor.useCallback[generateFromJson]": ()=>imported
                }["Editor.useCallback[generateFromJson]"]);
                setSelectedId(null);
                setRightMode("canvas");
                setTime(0);
                timeRef.current = 0;
                toast(`✅ JSON Imported • ${imported.scenes.length} scenes`);
                if (withVideo) {
                    openVideoExport("mp4", {
                        quality: "1080p",
                        duration: 5,
                        fps: imported.fps
                    }, imported);
                }
            } catch (error) {
                toast(`❌ ${error instanceof Error ? error.message : "Invalid JSON"}`, "error");
            }
        }
    }["Editor.useCallback[generateFromJson]"], [
        commit,
        jsonText,
        openVideoExport,
        toast
    ]);
    const handlePanel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[handlePanel]": (p)=>{
            setPanel(p);
            if (p === "backgrounds") setRightMode("background");
        }
    }["Editor.useCallback[handlePanel]"], []);
    const loadSampleJson = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[loadSampleJson]": ()=>{
            setJsonText(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$jsonImport$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SAMPLE_JSON"]);
            toast("📄 Sample JSON loaded", "info");
        }
    }["Editor.useCallback[loadSampleJson]"], [
        toast
    ]);
    const leftActions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Editor.useMemo[leftActions]": ()=>({
                applyBackground,
                addCharacter,
                addFinance,
                addText,
                addImageFile,
                addSticker,
                selectScene,
                addScene,
                duplicateScene,
                deleteScene,
                jsonText,
                setJsonText,
                generateFromJson,
                loadSampleJson
            })
    }["Editor.useMemo[leftActions]"], [
        applyBackground,
        addCharacter,
        addFinance,
        addText,
        addImageFile,
        addSticker,
        selectScene,
        addScene,
        duplicateScene,
        deleteScene,
        jsonText,
        generateFromJson,
        loadSampleJson
    ]);
    const handleBackgroundClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[handleBackgroundClick]": ()=>setRightMode("background")
    }["Editor.useCallback[handleBackgroundClick]"], []);
    const handleDownload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[handleDownload]": (kind, opts)=>{
            if (kind === "mp4" || kind === "webm") openVideoExport(kind, opts);
            else void runDownload(kind, opts);
        }
    }["Editor.useCallback[handleDownload]"], [
        openVideoExport,
        runDownload
    ]);
    const timelineScenes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Editor.useMemo[timelineScenes]": ()=>project.scenes.map({
                "Editor.useMemo[timelineScenes]": (s)=>({
                        id: s.id,
                        name: s.name,
                        duration: s.duration
                    })
            }["Editor.useMemo[timelineScenes]"])
    }["Editor.useMemo[timelineScenes]"], [
        project.scenes
    ]);
    const handleDuration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[handleDuration]": (id, duration)=>{
            commit({
                "Editor.useCallback[handleDuration]": (p)=>({
                        ...p,
                        scenes: p.scenes.map({
                            "Editor.useCallback[handleDuration]": (s)=>s.id === id ? {
                                    ...s,
                                    duration
                                } : s
                        }["Editor.useCallback[handleDuration]"])
                    })
            }["Editor.useCallback[handleDuration]"]);
        }
    }["Editor.useCallback[handleDuration]"], [
        commit
    ]);
    const rightScene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Editor.useMemo[rightScene]": ()=>({
                name: activeScene.name,
                duration: activeScene.duration
            })
    }["Editor.useMemo[rightScene]"], [
        activeScene.name,
        activeScene.duration
    ]);
    const handleRightMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[handleRightMode]": (mode)=>{
            setRightMode(mode);
            if (mode === "background") setPanel("backgrounds");
        }
    }["Editor.useCallback[handleRightMode]"], []);
    const handleLayerPatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[handleLayerPatch]": (patch)=>{
            if (selectedLayer) updateLayer(selectedLayer.id, patch);
        }
    }["Editor.useCallback[handleLayerPatch]"], [
        selectedLayer,
        updateLayer
    ]);
    const handleCanvasPatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[handleCanvasPatch]": (patch)=>{
            commit({
                "Editor.useCallback[handleCanvasPatch]": (p)=>({
                        ...p,
                        ...patch
                    })
            }["Editor.useCallback[handleCanvasPatch]"]);
        }
    }["Editor.useCallback[handleCanvasPatch]"], [
        commit
    ]);
    const handleCustomSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[handleCustomSize]": (width, height)=>changeSize(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CANVAS_SIZES"][9], {
                width,
                height
            })
    }["Editor.useCallback[handleCustomSize]"], [
        changeSize
    ]);
    const handleScenePatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[handleScenePatch]": (patch)=>updateActiveScene({
                "Editor.useCallback[handleScenePatch]": (s)=>({
                        ...s,
                        ...patch
                    })
            }["Editor.useCallback[handleScenePatch]"])
    }["Editor.useCallback[handleScenePatch]"], [
        updateActiveScene
    ]);
    const handleApplyBg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[handleApplyBg]": (name)=>toast(`✅ ${name}`)
    }["Editor.useCallback[handleApplyBg]"], [
        toast
    ]);
    const closeMobileRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[closeMobileRight]": ()=>setMobileRight(false)
    }["Editor.useCallback[closeMobileRight]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "flex h-screen w-screen flex-col overflow-hidden bg-ink text-zinc-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex h-11 shrink-0 items-center justify-between border-b border-line bg-[#121216] px-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-brand2 text-[11px] text-white",
                                children: "✦"
                            }, void 0, false, {
                                fileName: "[project]/components/Editor.tsx",
                                lineNumber: 489,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "truncate text-[12px] font-semibold tracking-tight text-zinc-100",
                                children: [
                                    "Mini Canva Pro ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-zinc-600",
                                        children: "/"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Editor.tsx",
                                        lineNumber: 490,
                                        columnNumber: 106
                                    }, this),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-brand2",
                                        children: "Animated Studio"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Editor.tsx",
                                        lineNumber: 490,
                                        columnNumber: 147
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Editor.tsx",
                                lineNumber: 490,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[8px] font-semibold uppercase tracking-wider text-emerald-300 sm:inline",
                                children: "Vector • 4K"
                            }, void 0, false, {
                                fileName: "[project]/components/Editor.tsx",
                                lineNumber: 491,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Editor.tsx",
                        lineNumber: 488,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1 lg:hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setMobileLeft((v)=>!v),
                                className: "rounded-md border border-line bg-panel2 px-2 py-1 text-[10px] text-zinc-300",
                                children: "Left"
                            }, void 0, false, {
                                fileName: "[project]/components/Editor.tsx",
                                lineNumber: 494,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setMobileRight((v)=>!v),
                                className: "rounded-md border border-line bg-panel2 px-2 py-1 text-[10px] text-zinc-300",
                                children: "Right"
                            }, void 0, false, {
                                fileName: "[project]/components/Editor.tsx",
                                lineNumber: 495,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Editor.tsx",
                        lineNumber: 493,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Editor.tsx",
                lineNumber: 487,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex min-h-0 flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LeftDock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LeftDock"], {
                        panel: panel,
                        onPanel: handlePanel,
                        scenes: project.scenes,
                        activeSceneId: project.activeSceneId,
                        mobileOpen: mobileLeft,
                        actions: leftActions
                    }, void 0, false, {
                        fileName: "[project]/components/Editor.tsx",
                        lineNumber: 500,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "flex min-w-0 flex-1 flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toolbar"], {
                                size: project.size,
                                zoom: zoom,
                                playing: playing,
                                busy: busy,
                                canUndo: historyCounts.past > 0,
                                canRedo: historyCounts.future > 0,
                                onUndo: undo,
                                onRedo: redo,
                                onSize: changeSize,
                                onZoom: setZoom,
                                onPlayToggle: togglePlay,
                                onRestart: restart,
                                onDownload: handleDownload
                            }, void 0, false, {
                                fileName: "[project]/components/Editor.tsx",
                                lineNumber: 510,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Stage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stage"], {
                                scene: activeScene,
                                size: project.size,
                                time: time,
                                zoom: zoom,
                                selectedId: selectedId,
                                fourK: project.fourK,
                                onSelect: selectLayer,
                                onLayerChange: updateLayer,
                                onBackgroundClick: handleBackgroundClick,
                                onDeleteLayer: deleteLayer,
                                onDuplicateLayer: duplicateLayer
                            }, void 0, false, {
                                fileName: "[project]/components/Editor.tsx",
                                lineNumber: 525,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Timeline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Timeline"], {
                                scenes: timelineScenes,
                                activeSceneId: project.activeSceneId,
                                time: time,
                                playing: playing,
                                onSelectScene: selectScene,
                                onAddScene: addScene,
                                onDuplicateScene: duplicateScene,
                                onDeleteScene: deleteScene,
                                onDuration: handleDuration,
                                onTogglePlay: togglePlay,
                                onRestart: restart,
                                onSeek: seek
                            }, void 0, false, {
                                fileName: "[project]/components/Editor.tsx",
                                lineNumber: 538,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Editor.tsx",
                        lineNumber: 509,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${mobileRight ? "fixed inset-y-11 right-0 z-50 flex shadow-2xl shadow-black/70" : "hidden"} lg:relative lg:inset-auto lg:z-auto lg:flex lg:shadow-none`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RightPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RightPanel"], {
                            mode: rightMode,
                            layer: selectedLayer,
                            background: activeScene.background,
                            scene: rightScene,
                            project: project,
                            onMode: handleRightMode,
                            onBackground: updateBackground,
                            onLayer: handleLayerPatch,
                            onCanvas: handleCanvasPatch,
                            onCustomSize: handleCustomSize,
                            onScene: handleScenePatch,
                            onApplyBackground: handleApplyBg,
                            onDeleteLayer: deleteLayer,
                            onDuplicateLayer: duplicateLayer,
                            onCloseMobile: closeMobileRight
                        }, void 0, false, {
                            fileName: "[project]/components/Editor.tsx",
                            lineNumber: 555,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Editor.tsx",
                        lineNumber: 554,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Editor.tsx",
                lineNumber: 499,
                columnNumber: 7
            }, this),
            videoRequest && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ExportModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExportModal"], {
                request: videoRequest,
                progress: videoProgress,
                preview: videoPreview,
                support: videoSupport,
                onQuality: (quality)=>{
                    setVideoPreview(null);
                    setVideoSupport(null);
                    setVideoRequest((current)=>current ? {
                            ...current,
                            options: {
                                ...current.options,
                                quality
                            }
                        } : current);
                },
                onDuration: (duration)=>setVideoRequest((current)=>current ? {
                            ...current,
                            options: {
                                ...current.options,
                                duration
                            }
                        } : current),
                onClose: ()=>setVideoRequest(null),
                onStart: ()=>{
                    void startVideoExport();
                },
                onCancel: ()=>abortRef.current?.abort()
            }, void 0, false, {
                fileName: "[project]/components/Editor.tsx",
                lineNumber: 575,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastStack"], {
                toasts: toasts
            }, void 0, false, {
                fileName: "[project]/components/Editor.tsx",
                lineNumber: 591,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Editor.tsx",
        lineNumber: 486,
        columnNumber: 5
    }, this);
}
_s(Editor, "8poRCD5nSWkfSSxYqmIQCw/UD9c=");
_c = Editor;
var _c;
__turbopack_context__.k.register(_c, "Editor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ExportModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExportModal",
    ()=>ExportModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$exporter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/exporter.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function ExportModal({ request, progress, preview, support, onQuality, onDuration, onClose, onStart, onCancel }) {
    const { format, options, source } = request;
    const quality = options.quality === "native" ? "1080p" : options.quality;
    const { width, height } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$exporter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["targetSize"])(source.size, quality);
    const isMp4 = format === "mp4";
    const canExportMp4 = isMp4 && support?.supported !== false;
    if (progress) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-lg rounded-2xl border border-line bg-[#18181f] p-6 shadow-2xl shadow-black",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex h-11 w-11 items-center justify-center rounded-xl bg-brand/20 text-brand2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "film",
                                    size: 22
                                }, void 0, false, {
                                    fileName: "[project]/components/ExportModal.tsx",
                                    lineNumber: 48,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ExportModal.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[14px] font-semibold text-zinc-100",
                                        children: [
                                            isMp4 ? "Rendering MP4" : "Rendering WebM",
                                            "... ",
                                            progress.percent,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ExportModal.tsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-0.5 font-mono text-[11px] text-zinc-500",
                                        children: [
                                            "Frame ",
                                            progress.frame,
                                            "/",
                                            progress.totalFrames,
                                            " • ",
                                            progress.stage
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ExportModal.tsx",
                                        lineNumber: 54,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ExportModal.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ExportModal.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-2.5 overflow-hidden rounded-full bg-panel2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full rounded-full bg-gradient-to-r from-brand to-brand2 transition-all duration-150",
                            style: {
                                width: `${progress.percent}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/ExportModal.tsx",
                            lineNumber: 60,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ExportModal.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 text-[11px] text-zinc-400",
                        children: "Please wait — this runs entirely in your browser."
                    }, void 0, false, {
                        fileName: "[project]/components/ExportModal.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "danger",
                        className: "mt-5 w-full",
                        onClick: onCancel,
                        children: "Cancel Export"
                    }, void 0, false, {
                        fileName: "[project]/components/ExportModal.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ExportModal.tsx",
                lineNumber: 45,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ExportModal.tsx",
            lineNumber: 44,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[200] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-[460px] overflow-hidden rounded-2xl border border-line bg-[#18181f] shadow-2xl shadow-black/70",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between border-b border-line px-5 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-[14px] font-semibold text-zinc-100",
                                    children: isMp4 ? "🎬 Export Real MP4" : "🎬 Export WebM"
                                }, void 0, false, {
                                    fileName: "[project]/components/ExportModal.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-0.5 font-mono text-[10px] text-zinc-500",
                                    children: [
                                        width,
                                        " × ",
                                        height,
                                        " • ",
                                        options.fps,
                                        " FPS • ",
                                        options.duration,
                                        "s"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ExportModal.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ExportModal.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            className: "rounded-lg p-1.5 text-zinc-500 hover:bg-white/5 hover:text-white",
                            "aria-label": "Close",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "close",
                                size: 17
                            }, void 0, false, {
                                fileName: "[project]/components/ExportModal.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ExportModal.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ExportModal.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-h-[70vh] overflow-y-auto scroll-thin px-5 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-2 text-[10px] font-semibold uppercase tracking-widest text-zinc-500",
                            children: "Test frame • पहला फ्रेम"
                        }, void 0, false, {
                            fileName: "[project]/components/ExportModal.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 flex items-center gap-3 rounded-xl border border-line bg-panel2 p-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-[110px] w-[78px] shrink-0 items-center justify-center overflow-hidden rounded-lg border border-line bg-black",
                                    children: preview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        role: "img",
                                        "aria-label": "First frame preview",
                                        className: "h-full w-full bg-cover bg-center",
                                        style: {
                                            backgroundImage: preview.dataUrl ? `url("${preview.dataUrl}")` : undefined
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/ExportModal.tsx",
                                        lineNumber: 91,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "image",
                                        size: 20,
                                        className: "text-zinc-600"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ExportModal.tsx",
                                        lineNumber: 97,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/ExportModal.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-w-0",
                                    children: [
                                        preview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `text-[11px] ${preview.ok ? "text-emerald-300" : "text-amber-300"}`,
                                            children: preview.ok ? "✅ First frame rendered — not black" : "⚠️ Preview looks dark — check background"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ExportModal.tsx",
                                            lineNumber: 101,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] text-zinc-500",
                                            children: "Rendering preview frame..."
                                        }, void 0, false, {
                                            fileName: "[project]/components/ExportModal.tsx",
                                            lineNumber: 105,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-[10px] leading-relaxed text-zinc-500",
                                            children: isMp4 ? "H.264 video in a real MP4 container. No audio track." : "VP8/VP9 WebM for web players and small files."
                                        }, void 0, false, {
                                            fileName: "[project]/components/ExportModal.tsx",
                                            lineNumber: 107,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ExportModal.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ExportModal.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-2 text-[10px] font-semibold uppercase tracking-widest text-zinc-500",
                            children: "Duration • अवधि"
                        }, void 0, false, {
                            fileName: "[project]/components/ExportModal.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 grid grid-cols-4 gap-1.5",
                            children: [
                                5,
                                10,
                                15,
                                30
                            ].map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>onDuration(d),
                                    className: `rounded-lg py-2 text-[11px] font-medium transition ${options.duration === d ? "bg-brand text-white" : "bg-panel2 text-zinc-400 hover:text-white"}`,
                                    children: [
                                        d,
                                        "s"
                                    ]
                                }, d, true, {
                                    fileName: "[project]/components/ExportModal.tsx",
                                    lineNumber: 116,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/ExportModal.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-2 text-[10px] font-semibold uppercase tracking-widest text-zinc-500",
                            children: "Quality • क्वैलिटी"
                        }, void 0, false, {
                            fileName: "[project]/components/ExportModal.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 grid grid-cols-3 gap-1.5",
                            children: [
                                "720p",
                                "1080p",
                                "4K"
                            ].map((q)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>onQuality(q),
                                    className: `rounded-lg py-2 text-[11px] font-medium transition ${quality === q ? "bg-brand text-white" : "bg-panel2 text-zinc-400 hover:text-white"}`,
                                    children: q
                                }, q, false, {
                                    fileName: "[project]/components/ExportModal.tsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/ExportModal.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this),
                        isMp4 && support && !support.supported && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 rounded-lg border border-amber-500/40 bg-amber-500/10 px-3 py-2 text-[11px] leading-relaxed text-amber-200",
                            children: [
                                "⚠️ ",
                                support.message,
                                " Use latest Chrome or Edge for real MP4. Starting will download a real WebM instead — never a fake .mp4."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ExportModal.tsx",
                            lineNumber: 128,
                            columnNumber: 13
                        }, this),
                        isMp4 && support?.supported && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-[10px] text-emerald-300",
                            children: [
                                "✅ ",
                                support.message,
                                " • Fast-start MP4 ready for WhatsApp / Gallery / YouTube."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ExportModal.tsx",
                            lineNumber: 133,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ExportModal.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2 border-t border-line px-5 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            className: "flex-1",
                            onClick: onClose,
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/components/ExportModal.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "primary",
                            className: "flex-[2]",
                            onClick: onStart,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "download",
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/components/ExportModal.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, this),
                                canExportMp4 ? "Export Real MP4" : "Download WebM Instead"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ExportModal.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ExportModal.tsx",
                    lineNumber: 139,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ExportModal.tsx",
            lineNumber: 71,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ExportModal.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_c = ExportModal;
var _c;
__turbopack_context__.k.register(_c, "ExportModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/LeftDock.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LeftDock",
    ()=>LeftDock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$art$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/art.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/presets.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const ICONS = [
    {
        id: "backgrounds",
        icon: "backgrounds",
        label: "Backgrounds",
        hindi: "बैकग्राउंड"
    },
    {
        id: "characters",
        icon: "characters",
        label: "Characters",
        hindi: "किरदार"
    },
    {
        id: "finance",
        icon: "finance",
        label: "Finance",
        hindi: "फाइनेंस"
    },
    {
        id: "text",
        icon: "text",
        label: "Text",
        hindi: "टेक्स्ट"
    },
    {
        id: "images",
        icon: "images",
        label: "Images",
        hindi: "तस्वीरें"
    },
    {
        id: "scenes",
        icon: "scenes",
        label: "Scenes",
        hindi: "सीन"
    },
    {
        id: "json",
        icon: "json",
        label: "JSON",
        hindi: "जेसन"
    }
];
function LeftDockImpl({ panel, onPanel, scenes, activeSceneId, actions, mobileOpen }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-full shrink-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "z-40 flex w-[72px] shrink-0 flex-col items-center gap-1 border-r border-line bg-[#1A1A1A] py-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand2 text-white shadow-glow",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: "sparkle",
                            size: 19
                        }, void 0, false, {
                            fileName: "[project]/components/LeftDock.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/LeftDock.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    ICONS.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            title: `${item.label} • ${item.hindi}`,
                            onClick: ()=>onPanel(panel === item.id ? null : item.id),
                            className: `group relative flex w-[62px] flex-col items-center gap-0.5 rounded-xl py-2 transition ${panel === item.id ? "bg-brand/20 text-brand2" : "text-zinc-500 hover:bg-white/5 hover:text-zinc-200"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: item.icon,
                                    size: 19
                                }, void 0, false, {
                                    fileName: "[project]/components/LeftDock.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[8px] font-medium leading-tight",
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/components/LeftDock.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this),
                                panel === item.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-brand2"
                                }, void 0, false, {
                                    fileName: "[project]/components/LeftDock.tsx",
                                    lineNumber: 67,
                                    columnNumber: 35
                                }, this)
                            ]
                        }, item.id, true, {
                            fileName: "[project]/components/LeftDock.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-auto flex flex-col items-center gap-1 pb-1 text-zinc-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButton"], {
                                name: "settings",
                                title: "Settings",
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/components/LeftDock.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-[7px]",
                                children: "v1.0"
                            }, void 0, false, {
                                fileName: "[project]/components/LeftDock.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/LeftDock.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/LeftDock.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            panel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: `scroll-thin z-30 w-[280px] shrink-0 overflow-y-auto border-r border-line bg-[#17171c] ${mobileOpen ? "absolute bottom-0 left-[72px] top-0 shadow-2xl shadow-black/70 lg:relative lg:shadow-none" : "hidden lg:block"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sticky top-0 z-10 flex items-center justify-between border-b border-line bg-[#17171c]/95 px-3 py-3 backdrop-blur",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-[12px] font-semibold text-zinc-100",
                                        children: ICONS.find((i)=>i.id === panel)?.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/LeftDock.tsx",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[9px] text-zinc-500",
                                        children: ICONS.find((i)=>i.id === panel)?.hindi
                                    }, void 0, false, {
                                        fileName: "[project]/components/LeftDock.tsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/LeftDock.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButton"], {
                                name: "close",
                                title: "Close panel",
                                onClick: ()=>onPanel(null),
                                size: 15
                            }, void 0, false, {
                                fileName: "[project]/components/LeftDock.tsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/LeftDock.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this),
                    panel === "backgrounds" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-2 text-[10px] text-zinc-500",
                                children: "40 designs • click to apply, right panel will open"
                            }, void 0, false, {
                                fileName: "[project]/components/LeftDock.tsx",
                                lineNumber: 88,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-4 gap-2",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BACKGROUND_TILES"].map((tile)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        title: tile.name,
                                        onClick: ()=>actions.applyBackground(structuredClone(tile.background), tile.name),
                                        className: "group overflow-hidden rounded-lg border border-line transition hover:scale-105 hover:border-brand",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-14 w-full",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BackgroundThumb, {
                                                    bg: tile.background
                                                }, void 0, false, {
                                                    fileName: "[project]/components/LeftDock.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/LeftDock.tsx",
                                                lineNumber: 98,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block truncate bg-panel2 px-1 py-1 text-[8px] text-zinc-400 group-hover:text-white",
                                                children: tile.name
                                            }, void 0, false, {
                                                fileName: "[project]/components/LeftDock.tsx",
                                                lineNumber: 101,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, tile.id, true, {
                                        fileName: "[project]/components/LeftDock.tsx",
                                        lineNumber: 91,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/LeftDock.tsx",
                                lineNumber: 89,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/LeftDock.tsx",
                        lineNumber: 87,
                        columnNumber: 13
                    }, this),
                    panel === "characters" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-2 text-[10px] text-zinc-500",
                                children: "12 hand-drawn SVG characters • drag to move"
                            }, void 0, false, {
                                fileName: "[project]/components/LeftDock.tsx",
                                lineNumber: 110,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-3 gap-2",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHARACTERS"].map((def)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>actions.addCharacter(def),
                                        className: "group rounded-lg border border-line bg-panel2 p-1 transition hover:border-brand hover:bg-brand/10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                viewBox: "0 0 100 100",
                                                className: "mx-auto h-16 w-full",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CharacterThumb, {
                                                    def: def
                                                }, void 0, false, {
                                                    fileName: "[project]/components/LeftDock.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/LeftDock.tsx",
                                                lineNumber: 114,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block truncate text-[8px] text-zinc-400 group-hover:text-white",
                                                children: def.name
                                            }, void 0, false, {
                                                fileName: "[project]/components/LeftDock.tsx",
                                                lineNumber: 117,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, def.id, true, {
                                        fileName: "[project]/components/LeftDock.tsx",
                                        lineNumber: 113,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/LeftDock.tsx",
                                lineNumber: 111,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/LeftDock.tsx",
                        lineNumber: 109,
                        columnNumber: 13
                    }, this),
                    panel === "finance" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-2 text-[10px] text-zinc-500",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FINANCE_OBJECTS"].length,
                                    " vector objects • 100% SVG"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/LeftDock.tsx",
                                lineNumber: 126,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-4 gap-1.5",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FINANCE_OBJECTS"].map((def)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        title: def.label,
                                        onClick: ()=>actions.addFinance(def),
                                        className: "group rounded-lg border border-line bg-panel2 p-1 transition hover:border-brand hover:bg-brand/10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                viewBox: "0 0 100 100",
                                                className: "h-11 w-full",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FinanceThumb, {
                                                    def: def
                                                }, void 0, false, {
                                                    fileName: "[project]/components/LeftDock.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/LeftDock.tsx",
                                                lineNumber: 130,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block truncate text-[7px] text-zinc-500 group-hover:text-white",
                                                children: def.label.split(" • ")[0]
                                            }, void 0, false, {
                                                fileName: "[project]/components/LeftDock.tsx",
                                                lineNumber: 133,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, def.id, true, {
                                        fileName: "[project]/components/LeftDock.tsx",
                                        lineNumber: 129,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/LeftDock.tsx",
                                lineNumber: 127,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/LeftDock.tsx",
                        lineNumber: 125,
                        columnNumber: 13
                    }, this),
                    panel === "text" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-2 text-[10px] text-zinc-500",
                                children: "Click to add • then edit on the right"
                            }, void 0, false, {
                                fileName: "[project]/components/LeftDock.tsx",
                                lineNumber: 142,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TEXT_PRESETS"].map((preset)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>actions.addText(preset.id),
                                        className: "w-full rounded-lg border border-line bg-panel2 p-3 text-left transition hover:border-brand hover:bg-brand/10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block truncate text-zinc-100",
                                                style: {
                                                    fontSize: Math.min(20, preset.size + 8),
                                                    fontWeight: preset.weight
                                                },
                                                children: preset.id === "gradient" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "bg-gradient-to-r from-yellow-300 to-pink-400 bg-clip-text text-transparent",
                                                    children: preset.label
                                                }, void 0, false, {
                                                    fileName: "[project]/components/LeftDock.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 175
                                                }, this) : preset.label
                                            }, void 0, false, {
                                                fileName: "[project]/components/LeftDock.tsx",
                                                lineNumber: 146,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mt-1 block text-[9px] text-zinc-500",
                                                children: preset.hindi
                                            }, void 0, false, {
                                                fileName: "[project]/components/LeftDock.tsx",
                                                lineNumber: 147,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, preset.id, true, {
                                        fileName: "[project]/components/LeftDock.tsx",
                                        lineNumber: 145,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/LeftDock.tsx",
                                lineNumber: 143,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/LeftDock.tsx",
                        lineNumber: 141,
                        columnNumber: 13
                    }, this),
                    panel === "images" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-2 text-[10px] text-zinc-500",
                                children: "Apni photo/logo upload karo"
                            }, void 0, false, {
                                fileName: "[project]/components/LeftDock.tsx",
                                lineNumber: 156,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileInput"], {
                                label: "📤 Photo Add Karo • Upload",
                                accept: "image/*",
                                onFile: actions.addImageFile,
                                className: "mb-3"
                            }, void 0, false, {
                                fileName: "[project]/components/LeftDock.tsx",
                                lineNumber: 157,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-2 mt-4 text-[10px] uppercase tracking-widest text-zinc-500",
                                children: "Vector stickers"
                            }, void 0, false, {
                                fileName: "[project]/components/LeftDock.tsx",
                                lineNumber: 158,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-4 gap-2",
                                children: [
                                    [
                                        "star",
                                        "#FBBF24"
                                    ],
                                    [
                                        "heart",
                                        "#F43F5E"
                                    ],
                                    [
                                        "circle",
                                        "#7C3AED"
                                    ],
                                    [
                                        "triangle",
                                        "#06B6D4"
                                    ],
                                    [
                                        "arrow",
                                        "#22C55E"
                                    ],
                                    [
                                        "pill",
                                        "#EC4899"
                                    ],
                                    [
                                        "rect",
                                        "#F97316"
                                    ],
                                    [
                                        "star",
                                        "#A855F7"
                                    ]
                                ].map(([shape, fill], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>actions.addSticker(shape, fill),
                                        className: "flex h-14 items-center justify-center rounded-lg border border-line bg-panel2 transition hover:border-brand",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "-50 -50 100 100",
                                            className: "h-10 w-10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "0",
                                                    cy: "0",
                                                    r: "42",
                                                    fill: fill,
                                                    opacity: "0.85"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/LeftDock.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 74
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconShape, {
                                                    shape: shape
                                                }, void 0, false, {
                                                    fileName: "[project]/components/LeftDock.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 132
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/LeftDock.tsx",
                                            lineNumber: 165,
                                            columnNumber: 21
                                        }, this)
                                    }, i, false, {
                                        fileName: "[project]/components/LeftDock.tsx",
                                        lineNumber: 164,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/LeftDock.tsx",
                                lineNumber: 159,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 rounded-lg border border-line bg-panel2 p-2 text-[9px] leading-relaxed text-zinc-500",
                                children: "Uploaded images stay on your device. No external URLs, no network calls."
                            }, void 0, false, {
                                fileName: "[project]/components/LeftDock.tsx",
                                lineNumber: 169,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/LeftDock.tsx",
                        lineNumber: 155,
                        columnNumber: 13
                    }, this),
                    panel === "scenes" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-2 text-[10px] text-zinc-500",
                                children: "Scene order timeline me bhi dikhata hai"
                            }, void 0, false, {
                                fileName: "[project]/components/LeftDock.tsx",
                                lineNumber: 177,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: scenes.map((scene, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `rounded-lg border p-2 ${scene.id === activeSceneId ? "border-brand bg-brand/10" : "border-line bg-panel2"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>actions.selectScene(scene.id),
                                                className: "flex w-full items-center gap-2 text-left",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex h-6 w-6 items-center justify-center rounded bg-brand/20 font-mono text-[10px] text-brand2",
                                                        children: i + 1
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/LeftDock.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "min-w-0 flex-1 truncate text-[11px] text-zinc-200",
                                                        children: scene.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/LeftDock.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono text-[9px] text-zinc-500",
                                                        children: [
                                                            scene.duration,
                                                            "s"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/LeftDock.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/LeftDock.tsx",
                                                lineNumber: 181,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 flex gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "ghost",
                                                        className: "flex-1 py-1",
                                                        onClick: ()=>actions.duplicateScene(scene.id),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                                name: "copy",
                                                                size: 11
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/LeftDock.tsx",
                                                                lineNumber: 187,
                                                                columnNumber: 120
                                                            }, this),
                                                            " Copy"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/LeftDock.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "danger",
                                                        className: "py-1",
                                                        onClick: ()=>actions.deleteScene(scene.id),
                                                        disabled: scenes.length <= 1,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                            name: "trash",
                                                            size: 11
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/LeftDock.tsx",
                                                            lineNumber: 188,
                                                            columnNumber: 141
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/LeftDock.tsx",
                                                        lineNumber: 188,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/LeftDock.tsx",
                                                lineNumber: 186,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, scene.id, true, {
                                        fileName: "[project]/components/LeftDock.tsx",
                                        lineNumber: 180,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/LeftDock.tsx",
                                lineNumber: 178,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                className: "mt-3 w-full",
                                onClick: actions.addScene,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "plus",
                                        size: 13
                                    }, void 0, false, {
                                        fileName: "[project]/components/LeftDock.tsx",
                                        lineNumber: 193,
                                        columnNumber: 74
                                    }, this),
                                    " Naya Scene Add Karo"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/LeftDock.tsx",
                                lineNumber: 193,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/LeftDock.tsx",
                        lineNumber: 176,
                        columnNumber: 13
                    }, this),
                    panel === "json" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-2 text-[10px] leading-relaxed text-zinc-500",
                                children: "Paste project JSON. Scenes, characters, text aur objects auto ban jayenge."
                            }, void 0, false, {
                                fileName: "[project]/components/LeftDock.tsx",
                                lineNumber: 199,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                value: actions.jsonText,
                                onChange: (e)=>actions.setJsonText(e.target.value),
                                spellCheck: false,
                                className: "scroll-thin h-52 w-full resize-none rounded-lg border border-line bg-[#0e0e13] p-2 font-mono text-[9px] leading-relaxed text-emerald-300 outline-none focus:border-brand"
                            }, void 0, false, {
                                fileName: "[project]/components/LeftDock.tsx",
                                lineNumber: 200,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 grid grid-cols-2 gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        onClick: actions.loadSampleJson,
                                        children: "Sample"
                                    }, void 0, false, {
                                        fileName: "[project]/components/LeftDock.tsx",
                                        lineNumber: 207,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        onClick: ()=>actions.generateFromJson(false),
                                        children: "Import"
                                    }, void 0, false, {
                                        fileName: "[project]/components/LeftDock.tsx",
                                        lineNumber: 208,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/LeftDock.tsx",
                                lineNumber: 206,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                className: "mt-2 w-full",
                                onClick: ()=>actions.generateFromJson(true),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "film",
                                        size: 13
                                    }, void 0, false, {
                                        fileName: "[project]/components/LeftDock.tsx",
                                        lineNumber: 210,
                                        columnNumber: 94
                                    }, this),
                                    " Generate Video"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/LeftDock.tsx",
                                lineNumber: 210,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 rounded-lg border border-line bg-panel2 p-2 text-[9px] leading-relaxed text-zinc-500",
                                children: [
                                    "Format: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        className: "text-brand2",
                                        children: "{ name, size:{width,height}, scenes:[{name,duration,background,layers:[]}] }"
                                    }, void 0, false, {
                                        fileName: "[project]/components/LeftDock.tsx",
                                        lineNumber: 212,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/LeftDock.tsx",
                                lineNumber: 211,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/LeftDock.tsx",
                        lineNumber: 198,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/LeftDock.tsx",
                lineNumber: 77,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/LeftDock.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = LeftDockImpl;
function BackgroundThumb({ bg }) {
    if (bg.type === "solid") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full w-full",
            style: {
                background: bg.color,
                opacity: bg.opacity / 100
            }
        }, void 0, false, {
            fileName: "[project]/components/LeftDock.tsx",
            lineNumber: 224,
            columnNumber: 12
        }, this);
    }
    if (bg.type === "gradient") {
        const angle = bg.gradient.direction === "left-right" ? "90deg" : bg.gradient.direction === "diagonal" ? "135deg" : "180deg";
        const style = bg.gradient.direction === "radial" ? {
            background: `radial-gradient(circle at 50% 45%, ${bg.gradient.from}, ${bg.gradient.to})`
        } : {
            background: `linear-gradient(${angle}, ${bg.gradient.from}, ${bg.gradient.to})`
        };
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full w-full",
            style: style
        }, void 0, false, {
            fileName: "[project]/components/LeftDock.tsx",
            lineNumber: 231,
            columnNumber: 12
        }, this);
    }
    if (bg.type === "image") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full w-full",
            style: {
                background: `linear-gradient(135deg, ${bg.pattern.accent}, ${bg.pattern.color})`
            }
        }, void 0, false, {
            fileName: "[project]/components/LeftDock.tsx",
            lineNumber: 234,
            columnNumber: 12
        }, this);
    }
    const p = bg.pattern;
    const overlay = p.kind === "dots" || p.kind === "particles" ? `radial-gradient(circle, ${p.color} 2px, transparent 2.5px)` : p.kind === "grid" ? `linear-gradient(${p.color} 1px, transparent 1px), linear-gradient(90deg, ${p.color} 1px, transparent 1px)` : `repeating-linear-gradient(25deg, ${p.color}55 0 3px, transparent 3px 9px)`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full w-full",
        style: {
            background: `${overlay}, ${p.accent}`,
            backgroundSize: p.kind === "grid" ? "12px 12px" : "10px 10px"
        }
    }, void 0, false, {
        fileName: "[project]/components/LeftDock.tsx",
        lineNumber: 243,
        columnNumber: 10
    }, this);
}
_c1 = BackgroundThumb;
function CharacterThumb({ def }) {
    const layer = {
        id: `thumb-${def.id}`,
        name: def.name,
        kind: "character",
        x: 50,
        y: 52,
        w: 96,
        h: 96,
        rot: 0,
        opacity: 100,
        visible: true,
        locked: false,
        animation: "none",
        animSpeed: 1,
        charId: def.id,
        skin: def.skin,
        shirt: def.shirt,
        hair: def.hair,
        accessory: def.accessory
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$art$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayerArt"], {
        layer: layer,
        W: 100,
        H: 100,
        time: 0,
        prefix: `ct-${def.id}`
    }, void 0, false, {
        fileName: "[project]/components/LeftDock.tsx",
        lineNumber: 252,
        columnNumber: 10
    }, this);
}
_c2 = CharacterThumb;
function FinanceThumb({ def }) {
    const layer = {
        id: `thumb-${def.id}`,
        name: def.label,
        kind: "finance",
        x: 50,
        y: 50,
        w: 95,
        h: 95,
        rot: 0,
        opacity: 100,
        visible: true,
        locked: false,
        animation: "none",
        animSpeed: 1,
        objectId: def.id,
        primary: def.primary,
        secondary: def.secondary
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$art$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayerArt"], {
        layer: layer,
        W: 100,
        H: 100,
        time: 0,
        prefix: `ft-${def.id}`
    }, void 0, false, {
        fileName: "[project]/components/LeftDock.tsx",
        lineNumber: 261,
        columnNumber: 10
    }, this);
}
_c3 = FinanceThumb;
function IconShape({ shape }) {
    if (shape === "star") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
        points: "0,-30 9,-9 32,-9 14,6 20,28 0,15 -20,28 -14,6 -32,-9 -9,-9",
        fill: "#FFFFFF",
        opacity: "0.95"
    }, void 0, false, {
        fileName: "[project]/components/LeftDock.tsx",
        lineNumber: 265,
        columnNumber: 32
    }, this);
    if (shape === "heart") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
        d: "M 0 28 C -35 5 -28 -25 0 -12 C 28 -25 35 5 0 28 Z",
        fill: "#FFFFFF",
        opacity: "0.95"
    }, void 0, false, {
        fileName: "[project]/components/LeftDock.tsx",
        lineNumber: 266,
        columnNumber: 33
    }, this);
    if (shape === "triangle") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
        points: "0,-30 30,25 -30,25",
        fill: "#FFFFFF",
        opacity: "0.95"
    }, void 0, false, {
        fileName: "[project]/components/LeftDock.tsx",
        lineNumber: 267,
        columnNumber: 36
    }, this);
    if (shape === "arrow") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
        d: "M -30 -8 L 5 -8 L 5 -25 L 32 0 L 5 25 L 5 8 L -30 8 Z",
        fill: "#FFFFFF",
        opacity: "0.95"
    }, void 0, false, {
        fileName: "[project]/components/LeftDock.tsx",
        lineNumber: 268,
        columnNumber: 33
    }, this);
    if (shape === "rect") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
        x: "-25",
        y: "-18",
        width: "50",
        height: "36",
        rx: "6",
        fill: "#FFFFFF",
        opacity: "0.95"
    }, void 0, false, {
        fileName: "[project]/components/LeftDock.tsx",
        lineNumber: 269,
        columnNumber: 32
    }, this);
    if (shape === "pill") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
        x: "-32",
        y: "-15",
        width: "64",
        height: "30",
        rx: "15",
        fill: "#FFFFFF",
        opacity: "0.95"
    }, void 0, false, {
        fileName: "[project]/components/LeftDock.tsx",
        lineNumber: 270,
        columnNumber: 32
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
        cx: "0",
        cy: "0",
        r: "22",
        fill: "#FFFFFF",
        opacity: "0.95"
    }, void 0, false, {
        fileName: "[project]/components/LeftDock.tsx",
        lineNumber: 271,
        columnNumber: 10
    }, this);
}
_c4 = IconShape;
const LeftDock = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(LeftDockImpl);
_c5 = LeftDock;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "LeftDockImpl");
__turbopack_context__.k.register(_c1, "BackgroundThumb");
__turbopack_context__.k.register(_c2, "CharacterThumb");
__turbopack_context__.k.register(_c3, "FinanceThumb");
__turbopack_context__.k.register(_c4, "IconShape");
__turbopack_context__.k.register(_c5, "LeftDock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/RightPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RightPanel",
    ()=>RightPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/presets.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const ANIMATIONS = [
    {
        value: "none",
        label: "None"
    },
    {
        value: "walk",
        label: "🚶 Walk / चलना"
    },
    {
        value: "wave",
        label: "👋 Wave / हिलाना"
    },
    {
        value: "jump",
        label: "🦘 Jump / कूदना"
    },
    {
        value: "talk",
        label: "🗣️ Talk / बोलना"
    },
    {
        value: "float",
        label: "🎈 Float / तैरना"
    },
    {
        value: "pulse",
        label: "💓 Pulse / धड़कना"
    },
    {
        value: "spin",
        label: "🔄 Spin / घूमना"
    },
    {
        value: "wiggle",
        label: "〰️ Wiggle"
    },
    {
        value: "blink",
        label: "👁️ Blink"
    }
];
function RightPanelImpl(props) {
    const { mode, layer, project, onMode } = props;
    const title = mode === "layer" && layer ? `${kindIcon(layer.kind)} ${layer.name}` : mode === "background" ? "🎨 Background Settings" : "⚙️ Canvas Settings";
    const subtitle = mode === "layer" && layer ? "Layer controls • लेयर सेटिंग्स" : mode === "background" ? "बैकग्राउंड ka Color aur Style" : "Size Badlo • कैनवास सेटिंग्स";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "relative flex h-full w-[320px] shrink-0 flex-col border-l border-line bg-[#17171c]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-[58px] shrink-0 items-center justify-between border-b border-line px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "truncate text-[13px] font-semibold text-zinc-100",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/components/RightPanel.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "truncate text-[9px] text-zinc-500",
                                children: subtitle
                            }, void 0, false, {
                                fileName: "[project]/components/RightPanel.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: props.onCloseMobile,
                        className: "rounded-md p-1 text-zinc-500 hover:bg-white/5 hover:text-white lg:hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: "close",
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/components/RightPanel.tsx",
                            lineNumber: 55,
                            columnNumber: 146
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/RightPanel.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex shrink-0 gap-1 border-b border-line bg-[#141419] p-2",
                children: [
                    "canvas",
                    "background",
                    "layer"
                ].map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>onMode(m),
                        disabled: m === "layer" && !layer,
                        className: `flex-1 rounded-md py-1.5 text-[10px] font-medium transition disabled:opacity-30 ${mode === m ? "bg-brand text-white" : "bg-panel2 text-zinc-500 hover:text-zinc-200"}`,
                        children: m === "canvas" ? "Canvas" : m === "background" ? "Background" : "Layer"
                    }, m, false, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/RightPanel.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "scroll-thin flex-1 overflow-y-auto",
                children: [
                    mode === "canvas" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CanvasControls, {
                        ...props
                    }, `${project.size.width}-${project.size.height}`, false, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 73,
                        columnNumber: 31
                    }, this),
                    mode === "background" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BackgroundControls, {
                        ...props
                    }, void 0, false, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 74,
                        columnNumber: 35
                    }, this),
                    mode === "layer" && layer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LayerControls, {
                        ...props,
                        layer: layer
                    }, void 0, false, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 75,
                        columnNumber: 39
                    }, this),
                    mode === "layer" && !layer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 text-center text-[11px] leading-relaxed text-zinc-500",
                        children: "Canvas par koi bhi layer select karo. Controls yahan dikhenge."
                    }, void 0, false, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/RightPanel.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/RightPanel.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_c = RightPanelImpl;
function kindIcon(kind) {
    return ({
        text: "📝",
        character: "👤",
        finance: "💰",
        image: "🖼️",
        shape: "🔷"
    })[kind];
}
function CanvasControls({ project, scene, onCanvas, onCustomSize, onScene, onMode }) {
    _s();
    const [w, setW] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(project.size.width);
    const [h, setH] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(project.size.height);
    const applyCustom = ()=>onCustomSize(w, h);
    const known = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CANVAS_SIZES"].find((s)=>s.width === project.size.width && s.height === project.size.height);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
                title: "Project",
                hint: "Naam aur basic settings",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextField"], {
                        label: "Project Name",
                        value: project.name,
                        onChange: (v)=>onCanvas({
                                name: v
                            })
                    }, void 0, false, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 grid grid-cols-2 gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberField"], {
                                label: "Width (px)",
                                value: w,
                                min: 200,
                                max: 6000,
                                onChange: setW
                            }, void 0, false, {
                                fileName: "[project]/components/RightPanel.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberField"], {
                                label: "Height (px)",
                                value: h,
                                min: 200,
                                max: 6000,
                                onChange: setH
                            }, void 0, false, {
                                fileName: "[project]/components/RightPanel.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        className: "mt-1 w-full",
                        onClick: applyCustom,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "check",
                                size: 13
                            }, void 0, false, {
                                fileName: "[project]/components/RightPanel.tsx",
                                lineNumber: 105,
                                columnNumber: 63
                            }, this),
                            " Size Badlo • Apply"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 rounded-lg border border-line bg-panel2 px-2.5 py-2 font-mono text-[10px] text-zinc-400",
                        children: [
                            known?.name ?? "Custom",
                            " • ",
                            project.size.width,
                            " × ",
                            project.size.height,
                            " • ",
                            project.size.ratio
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/RightPanel.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
                title: "Quality & Playback",
                hint: "4K vector-ready export",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toggle"], {
                        label: "4K Ready Export",
                        hint: "3840px max dimension",
                        checked: project.fourK,
                        onChange: (v)=>onCanvas({
                                fourK: v
                            })
                    }, void 0, false, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectField"], {
                        label: "Frame Rate",
                        value: String(project.fps),
                        options: [
                            {
                                value: "30",
                                label: "30 FPS • Smooth"
                            },
                            {
                                value: "60",
                                label: "60 FPS • Premium"
                            }
                        ],
                        onChange: (v)=>onCanvas({
                                fps: Number(v)
                            })
                    }, void 0, false, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/RightPanel.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
                title: "Active Scene",
                hint: "Is scene ki settings",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextField"], {
                        label: "Scene Name",
                        value: scene.name,
                        onChange: (v)=>onScene({
                                name: v
                            })
                    }, void 0, false, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                        label: "Duration",
                        sub: "seconds",
                        value: scene.duration,
                        min: 1,
                        max: 60,
                        suffix: "s",
                        onChange: (v)=>onScene({
                                duration: v
                            })
                    }, void 0, false, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/RightPanel.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
                title: "Quick Actions",
                hint: "Ek click me sab kuch",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        className: "mb-2 w-full",
                        onClick: ()=>onMode("background"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "backgrounds",
                                size: 13
                            }, void 0, false, {
                                fileName: "[project]/components/RightPanel.tsx",
                                lineNumber: 122,
                                columnNumber: 96
                            }, this),
                            " Background Settings Kholo"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg border border-brand/25 bg-brand/10 p-2.5 text-[10px] leading-relaxed text-zinc-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-brand2",
                                children: "Tip:"
                            }, void 0, false, {
                                fileName: "[project]/components/RightPanel.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this),
                            " Canvas par layer select karke uska color, size aur animation yahin se badlo. Sab changes live hote hain."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/RightPanel.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/RightPanel.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
_s(CanvasControls, "mPhaepMNXbGwzSfMGHK7dSVrbQU=");
_c1 = CanvasControls;
function BackgroundControls({ background, onBackground, onApplyBackground }) {
    const update = (patch, notify = false)=>{
        onBackground(patch);
        if (notify) onApplyBackground("Background Applied");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BackgroundControlsInner, {
        current: background,
        update: update
    }, void 0, false, {
        fileName: "[project]/components/RightPanel.tsx",
        lineNumber: 137,
        columnNumber: 10
    }, this);
}
_c2 = BackgroundControls;
function BackgroundControlsInner({ current, update }) {
    const g = current.gradient;
    const img = current.image;
    const pat = current.pattern;
    const setType = (type)=>update({
            type
        });
    const readFile = (file, cb)=>{
        const reader = new FileReader();
        reader.onload = ()=>cb(String(reader.result ?? ""));
        reader.readAsDataURL(file);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b border-line p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTabs"], {
                        value: current.type,
                        options: [
                            {
                                value: "solid",
                                label: "Solid"
                            },
                            {
                                value: "gradient",
                                label: "Gradient"
                            },
                            {
                                value: "image",
                                label: "Image"
                            },
                            {
                                value: "pattern",
                                label: "Pattern"
                            },
                            {
                                value: "video",
                                label: "Video"
                            }
                        ],
                        onChange: setType
                    }, void 0, false, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[9px] text-zinc-600",
                        children: [
                            "Background Type • ",
                            current.type.toUpperCase()
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/RightPanel.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            current.type === "solid" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
                        title: "Background ka Color",
                        hint: "Solid color picker + hex",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-3 flex items-center gap-3 rounded-lg border border-line bg-panel2 p-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "color",
                                        value: /^#[0-9a-fA-F]{6}$/.test(current.color) ? current.color : "#000000",
                                        onChange: (e)=>update({
                                                color: e.target.value
                                            }),
                                        className: "h-12 w-14",
                                        "aria-label": "Background color"
                                    }, void 0, false, {
                                        fileName: "[project]/components/RightPanel.tsx",
                                        lineNumber: 180,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mb-1 block text-[9px] uppercase tracking-wide text-zinc-500",
                                                children: "Hex Color"
                                            }, void 0, false, {
                                                fileName: "[project]/components/RightPanel.tsx",
                                                lineNumber: 182,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                value: current.color,
                                                onChange: (e)=>update({
                                                        color: e.target.value
                                                    }),
                                                className: "w-full rounded-md border border-line bg-[#111117] px-2 py-1.5 font-mono text-[12px] text-zinc-200 outline-none focus:border-brand"
                                            }, void 0, false, {
                                                fileName: "[project]/components/RightPanel.tsx",
                                                lineNumber: 183,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/RightPanel.tsx",
                                        lineNumber: 181,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/RightPanel.tsx",
                                lineNumber: 179,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorGrid"], {
                                value: current.color,
                                onChange: (color)=>update({
                                        color
                                    })
                            }, void 0, false, {
                                fileName: "[project]/components/RightPanel.tsx",
                                lineNumber: 186,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 178,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
                        title: "Opacity",
                        hint: "0% se 100%",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                                label: "Background Opacity",
                                value: current.opacity,
                                onChange: (v)=>update({
                                        opacity: v
                                    }),
                                suffix: "%"
                            }, void 0, false, {
                                fileName: "[project]/components/RightPanel.tsx",
                                lineNumber: 189,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                className: "w-full",
                                onClick: ()=>update({}, true),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "check",
                                        size: 13
                                    }, void 0, false, {
                                        fileName: "[project]/components/RightPanel.tsx",
                                        lineNumber: 190,
                                        columnNumber: 73
                                    }, this),
                                    " Apply to Canvas"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/RightPanel.tsx",
                                lineNumber: 190,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 188,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/RightPanel.tsx",
                lineNumber: 177,
                columnNumber: 9
            }, this),
            current.type === "gradient" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
                        title: "Gradient Colors",
                        hint: "2 colors + direction",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorField"], {
                                label: "Color 1",
                                value: g.from,
                                onChange: (from)=>update({
                                        gradient: {
                                            ...g,
                                            from
                                        }
                                    })
                            }, void 0, false, {
                                fileName: "[project]/components/RightPanel.tsx",
                                lineNumber: 198,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorField"], {
                                label: "Color 2",
                                value: g.to,
                                onChange: (to)=>update({
                                        gradient: {
                                            ...g,
                                            to
                                        }
                                    })
                            }, void 0, false, {
                                fileName: "[project]/components/RightPanel.tsx",
                                lineNumber: 199,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectField"], {
                                label: "Direction",
                                value: g.direction,
                                options: [
                                    {
                                        value: "top-bottom",
                                        label: "Top to Bottom"
                                    },
                                    {
                                        value: "left-right",
                                        label: "Left to Right"
                                    },
                                    {
                                        value: "diagonal",
                                        label: "Diagonal"
                                    },
                                    {
                                        value: "radial",
                                        label: "Radial"
                                    }
                                ],
                                onChange: (direction)=>update({
                                        gradient: {
                                            ...g,
                                            direction
                                        }
                                    })
                            }, void 0, false, {
                                fileName: "[project]/components/RightPanel.tsx",
                                lineNumber: 200,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 197,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
                        title: "15 Preset Gradients",
                        hint: "Click karke apply karo",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-3 gap-1.5",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GRADIENTS"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    title: item.name,
                                    onClick: ()=>update({
                                            gradient: {
                                                ...g,
                                                from: item.from,
                                                to: item.to
                                            }
                                        }, true),
                                    className: "overflow-hidden rounded-md border border-line transition hover:scale-105 hover:border-brand",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block h-9",
                                            style: {
                                                background: `linear-gradient(135deg, ${item.from}, ${item.to})`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/RightPanel.tsx",
                                            lineNumber: 216,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block truncate bg-panel2 py-1 text-[8px] text-zinc-400",
                                            children: item.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/RightPanel.tsx",
                                            lineNumber: 217,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, item.name, true, {
                                    fileName: "[project]/components/RightPanel.tsx",
                                    lineNumber: 215,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/RightPanel.tsx",
                            lineNumber: 213,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 212,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
                        title: "Animation",
                        hint: "Animated gradient speed",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toggle"], {
                                label: "Animate Gradient",
                                hint: "requestAnimationFrame",
                                checked: g.animated,
                                onChange: (animated)=>update({
                                        gradient: {
                                            ...g,
                                            animated
                                        }
                                    })
                            }, void 0, false, {
                                fileName: "[project]/components/RightPanel.tsx",
                                lineNumber: 223,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                                label: "Intensity",
                                value: g.intensity,
                                onChange: (v)=>update({
                                        gradient: {
                                            ...g,
                                            intensity: v
                                        }
                                    }),
                                suffix: "%"
                            }, void 0, false, {
                                fileName: "[project]/components/RightPanel.tsx",
                                lineNumber: 224,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                                label: "Speed",
                                value: g.speed,
                                onChange: (v)=>update({
                                        gradient: {
                                            ...g,
                                            speed: v
                                        }
                                    }),
                                suffix: "%"
                            }, void 0, false, {
                                fileName: "[project]/components/RightPanel.tsx",
                                lineNumber: 225,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                className: "w-full",
                                onClick: ()=>update({}, true),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "check",
                                        size: 13
                                    }, void 0, false, {
                                        fileName: "[project]/components/RightPanel.tsx",
                                        lineNumber: 226,
                                        columnNumber: 73
                                    }, this),
                                    " Apply to Canvas"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/RightPanel.tsx",
                                lineNumber: 226,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 222,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/RightPanel.tsx",
                lineNumber: 196,
                columnNumber: 9
            }, this),
            current.type === "image" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
                        title: "Photo Add Karo",
                        hint: "JPG / PNG from laptop",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileInput"], {
                                label: "Upload Image",
                                accept: "image/*",
                                onFile: (file)=>readFile(file, (src)=>update({
                                            image: {
                                                ...img,
                                                src,
                                                name: file.name
                                            }
                                        }, true))
                            }, void 0, false, {
                                fileName: "[project]/components/RightPanel.tsx",
                                lineNumber: 234,
                                columnNumber: 13
                            }, this),
                            img.src && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 overflow-hidden rounded-lg border border-line",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: img.src,
                                        alt: img.name || "Background preview",
                                        className: "h-28 w-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/components/RightPanel.tsx",
                                        lineNumber: 238,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "truncate bg-panel2 px-2 py-1 text-[9px] text-zinc-500",
                                        children: img.name || "Uploaded image"
                                    }, void 0, false, {
                                        fileName: "[project]/components/RightPanel.tsx",
                                        lineNumber: 239,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/RightPanel.tsx",
                                lineNumber: 236,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 flex items-end gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextField"], {
                                            label: "URL se Image",
                                            value: img.name.startsWith("http") ? img.name : "",
                                            onChange: (name)=>update({
                                                    image: {
                                                        ...img,
                                                        name
                                                    }
                                                }),
                                            placeholder: "https://... ya data:image/...",
                                            mono: true
                                        }, void 0, false, {
                                            fileName: "[project]/components/RightPanel.tsx",
                                            lineNumber: 243,
                                            columnNumber: 39
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/RightPanel.tsx",
                                        lineNumber: 243,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        className: "mb-2",
                                        onClick: ()=>update({
                                                image: {
                                                    ...img,
                                                    src: img.name
                                                }
                                            }, true),
                                        children: "Add"
                                    }, void 0, false, {
                                        fileName: "[project]/components/RightPanel.tsx",
                                        lineNumber: 244,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/RightPanel.tsx",
                                lineNumber: 242,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 233,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
                        title: "Image Effects",
                        hint: "Live preview",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                                label: "Blur",
                                value: img.blur,
                                min: 0,
                                max: 20,
                                suffix: "px",
                                onChange: (v)=>update({
                                        image: {
                                            ...img,
                                            blur: v
                                        }
                                    })
                            }, void 0, false, {
                                fileName: "[project]/components/RightPanel.tsx",
                                lineNumber: 248,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                                label: "Brightness",
                                value: img.brightness,
                                min: 0,
                                max: 200,
                                suffix: "%",
                                onChange: (v)=>update({
                                        image: {
                                            ...img,
                                            brightness: v
                                        }
                                    })
                            }, void 0, false, {
                                fileName: "[project]/components/RightPanel.tsx",
                                lineNumber: 249,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                                label: "Opacity",
                                value: img.opacity,
                                onChange: (v)=>update({
                                        image: {
                                            ...img,
                                            opacity: v
                                        }
                                    }),
                                suffix: "%"
                            }, void 0, false, {
                                fileName: "[project]/components/RightPanel.tsx",
                                lineNumber: 250,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectField"], {
                                label: "Fit",
                                value: img.fit,
                                options: [
                                    {
                                        value: "cover",
                                        label: "Cover"
                                    },
                                    {
                                        value: "contain",
                                        label: "Contain"
                                    },
                                    {
                                        value: "fill",
                                        label: "Fill"
                                    }
                                ],
                                onChange: (v)=>update({
                                        image: {
                                            ...img,
                                            fit: v
                                        }
                                    })
                            }, void 0, false, {
                                fileName: "[project]/components/RightPanel.tsx",
                                lineNumber: 251,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectField"], {
                                label: "Position",
                                value: img.position,
                                options: [
                                    {
                                        value: "center",
                                        label: "Center"
                                    },
                                    {
                                        value: "top",
                                        label: "Top"
                                    },
                                    {
                                        value: "bottom",
                                        label: "Bottom"
                                    }
                                ],
                                onChange: (v)=>update({
                                        image: {
                                            ...img,
                                            position: v
                                        }
                                    })
                            }, void 0, false, {
                                fileName: "[project]/components/RightPanel.tsx",
                                lineNumber: 252,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "danger",
                                className: "w-full",
                                onClick: ()=>update({
                                        image: {
                                            ...img,
                                            src: "",
                                            name: ""
                                        }
                                    }, true),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "trash",
                                        size: 13
                                    }, void 0, false, {
                                        fileName: "[project]/components/RightPanel.tsx",
                                        lineNumber: 253,
                                        columnNumber: 128
                                    }, this),
                                    " Remove Image"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/RightPanel.tsx",
                                lineNumber: 253,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 247,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/RightPanel.tsx",
                lineNumber: 232,
                columnNumber: 9
            }, this),
            current.type === "pattern" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
                        title: "Pattern / Animated",
                        hint: "Dots, Waves, Neon, Particles",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTabs"], {
                                value: pat.kind,
                                options: [
                                    {
                                        value: "dots",
                                        label: "Dots"
                                    },
                                    {
                                        value: "waves",
                                        label: "Waves"
                                    },
                                    {
                                        value: "neon",
                                        label: "Neon"
                                    },
                                    {
                                        value: "particles",
                                        label: "Particles"
                                    },
                                    {
                                        value: "grid",
                                        label: "Grid"
                                    },
                                    {
                                        value: "rings",
                                        label: "Rings"
                                    }
                                ],
                                onChange: (kind)=>update({
                                        pattern: {
                                            ...pat,
                                            kind
                                        }
                                    }, true)
                            }, void 0, false, {
                                fileName: "[project]/components/RightPanel.tsx",
                                lineNumber: 261,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorField"], {
                                label: pat.kind === "neon" ? "Glow Color" : "Pattern Color",
                                value: pat.color,
                                onChange: (color)=>update({
                                        pattern: {
                                            ...pat,
                                            color
                                        }
                                    })
                            }, void 0, false, {
                                fileName: "[project]/components/RightPanel.tsx",
                                lineNumber: 269,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorField"], {
                                label: "Accent / Background",
                                value: pat.accent,
                                onChange: (accent)=>update({
                                        pattern: {
                                            ...pat,
                                            accent
                                        }
                                    })
                            }, void 0, false, {
                                fileName: "[project]/components/RightPanel.tsx",
                                lineNumber: 270,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 260,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
                        title: "Motion Settings",
                        hint: "Speed aur size",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                                label: pat.kind === "dots" ? "Dot Size" : "Element Size",
                                value: pat.size,
                                min: 2,
                                max: 40,
                                onChange: (v)=>update({
                                        pattern: {
                                            ...pat,
                                            size: v
                                        }
                                    })
                            }, void 0, false, {
                                fileName: "[project]/components/RightPanel.tsx",
                                lineNumber: 273,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                                label: pat.kind === "dots" ? "Gap" : "Spacing",
                                value: pat.gap,
                                min: 16,
                                max: 120,
                                onChange: (v)=>update({
                                        pattern: {
                                            ...pat,
                                            gap: v
                                        }
                                    })
                            }, void 0, false, {
                                fileName: "[project]/components/RightPanel.tsx",
                                lineNumber: 274,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                                label: "Speed",
                                value: pat.speed,
                                onChange: (v)=>update({
                                        pattern: {
                                            ...pat,
                                            speed: v
                                        }
                                    }),
                                suffix: "%"
                            }, void 0, false, {
                                fileName: "[project]/components/RightPanel.tsx",
                                lineNumber: 275,
                                columnNumber: 13
                            }, this),
                            pat.kind === "particles" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                                label: "Particle Count",
                                value: pat.count,
                                min: 8,
                                max: 120,
                                onChange: (v)=>update({
                                        pattern: {
                                            ...pat,
                                            count: v
                                        }
                                    })
                            }, void 0, false, {
                                fileName: "[project]/components/RightPanel.tsx",
                                lineNumber: 276,
                                columnNumber: 42
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                className: "w-full",
                                onClick: ()=>update({}, true),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "check",
                                        size: 13
                                    }, void 0, false, {
                                        fileName: "[project]/components/RightPanel.tsx",
                                        lineNumber: 277,
                                        columnNumber: 73
                                    }, this),
                                    " Apply to Canvas"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/RightPanel.tsx",
                                lineNumber: 277,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 272,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/RightPanel.tsx",
                lineNumber: 259,
                columnNumber: 9
            }, this),
            current.type === "video" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
                title: "Video Background",
                hint: "Optional • loop ON/OFF",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileInput"], {
                        label: "Upload Video",
                        accept: "video/*",
                        onFile: (file)=>{
                            const src = URL.createObjectURL(file);
                            update({
                                video: {
                                    ...current.video,
                                    src,
                                    name: file.name
                                }
                            }, true);
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 284,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 rounded-lg border border-line bg-panel2 p-2 text-[10px] text-zinc-500",
                        children: current.video.name || "No video selected"
                    }, void 0, false, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 288,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toggle"], {
                                label: "Loop Video",
                                checked: current.video.loop,
                                onChange: (loop)=>update({
                                        video: {
                                            ...current.video,
                                            loop
                                        }
                                    })
                            }, void 0, false, {
                                fileName: "[project]/components/RightPanel.tsx",
                                lineNumber: 290,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toggle"], {
                                label: "Playing",
                                checked: current.video.playing,
                                onChange: (playing)=>update({
                                        video: {
                                            ...current.video,
                                            playing
                                        }
                                    })
                            }, void 0, false, {
                                fileName: "[project]/components/RightPanel.tsx",
                                lineNumber: 291,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 289,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "danger",
                        className: "w-full",
                        onClick: ()=>update({
                                video: {
                                    ...current.video,
                                    src: "",
                                    name: ""
                                }
                            }, true),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "trash",
                                size: 13
                            }, void 0, false, {
                                fileName: "[project]/components/RightPanel.tsx",
                                lineNumber: 293,
                                columnNumber: 136
                            }, this),
                            " Remove Video"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 293,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/RightPanel.tsx",
                lineNumber: 283,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
                title: "Preset Colors",
                hint: "Quick pick",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorGrid"], {
                    value: current.color,
                    onChange: (color)=>update({
                            color
                        })
                }, void 0, false, {
                    fileName: "[project]/components/RightPanel.tsx",
                    lineNumber: 298,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/RightPanel.tsx",
                lineNumber: 297,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/RightPanel.tsx",
        lineNumber: 160,
        columnNumber: 5
    }, this);
}
_c3 = BackgroundControlsInner;
function LayerControls({ layer, onLayer, onDeleteLayer, onDuplicateLayer }) {
    const patch = (p)=>onLayer(p);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
                title: "Position & Size",
                hint: "% me stored, har size par fit",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberField"], {
                                label: "X (%)",
                                value: layer.x,
                                min: 0,
                                max: 100,
                                onChange: (x)=>patch({
                                        x
                                    })
                            }, void 0, false, {
                                fileName: "[project]/components/RightPanel.tsx",
                                lineNumber: 310,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberField"], {
                                label: "Y (%)",
                                value: layer.y,
                                min: 0,
                                max: 100,
                                onChange: (y)=>patch({
                                        y
                                    })
                            }, void 0, false, {
                                fileName: "[project]/components/RightPanel.tsx",
                                lineNumber: 311,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberField"], {
                                label: "Width (%)",
                                value: layer.w,
                                min: 3,
                                max: 100,
                                onChange: (w)=>patch({
                                        w
                                    })
                            }, void 0, false, {
                                fileName: "[project]/components/RightPanel.tsx",
                                lineNumber: 312,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberField"], {
                                label: "Height (%)",
                                value: layer.h,
                                min: 3,
                                max: 100,
                                onChange: (h)=>patch({
                                        h
                                    })
                            }, void 0, false, {
                                fileName: "[project]/components/RightPanel.tsx",
                                lineNumber: 313,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 309,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                        label: "Rotation",
                        value: layer.rot,
                        min: -180,
                        max: 180,
                        suffix: "°",
                        onChange: (rot)=>patch({
                                rot
                            })
                    }, void 0, false, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 315,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                        label: "Opacity",
                        value: layer.opacity,
                        onChange: (v)=>patch({
                                opacity: v
                            }),
                        suffix: "%"
                    }, void 0, false, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 316,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toggle"], {
                                label: "Visible",
                                checked: layer.visible,
                                onChange: (visible)=>patch({
                                        visible
                                    })
                            }, void 0, false, {
                                fileName: "[project]/components/RightPanel.tsx",
                                lineNumber: 318,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toggle"], {
                                label: "Lock",
                                checked: layer.locked,
                                onChange: (locked)=>patch({
                                        locked
                                    })
                            }, void 0, false, {
                                fileName: "[project]/components/RightPanel.tsx",
                                lineNumber: 319,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 317,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/RightPanel.tsx",
                lineNumber: 308,
                columnNumber: 7
            }, this),
            layer.kind === "text" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextControls, {
                layer: layer,
                patch: patch
            }, void 0, false, {
                fileName: "[project]/components/RightPanel.tsx",
                lineNumber: 323,
                columnNumber: 33
            }, this),
            layer.kind === "character" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
                title: "Character",
                hint: "Hand-designed SVG",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorField"], {
                        label: "Skin Color",
                        value: layer.skin,
                        onChange: (skin)=>patch({
                                skin
                            })
                    }, void 0, false, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 326,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorField"], {
                        label: "Shirt Color",
                        value: layer.shirt,
                        onChange: (shirt)=>patch({
                                shirt
                            })
                    }, void 0, false, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 327,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorField"], {
                        label: "Hair Color",
                        value: layer.hair,
                        onChange: (hair)=>patch({
                                hair
                            })
                    }, void 0, false, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 328,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectField"], {
                        label: "Accessory",
                        value: layer.accessory,
                        options: [
                            {
                                value: "none",
                                label: "None"
                            },
                            {
                                value: "moustache",
                                label: "Moustache"
                            },
                            {
                                value: "glasses-beard",
                                label: "Glasses + Beard"
                            },
                            {
                                value: "bindi",
                                label: "Bindi"
                            },
                            {
                                value: "tie",
                                label: "Tie"
                            },
                            {
                                value: "cap",
                                label: "Cap"
                            },
                            {
                                value: "turban",
                                label: "Turban"
                            },
                            {
                                value: "dupatta",
                                label: "Dupatta"
                            },
                            {
                                value: "glasses-bun",
                                label: "Glasses + Bun"
                            }
                        ],
                        onChange: (accessory)=>patch({
                                accessory
                            })
                    }, void 0, false, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 329,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/RightPanel.tsx",
                lineNumber: 325,
                columnNumber: 9
            }, this),
            layer.kind === "finance" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
                title: "Finance Object",
                hint: "Pure vector, 4K sharp",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorField"], {
                        label: "Primary Color",
                        value: layer.primary,
                        onChange: (primary)=>patch({
                                primary
                            })
                    }, void 0, false, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 338,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorField"], {
                        label: "Secondary Color",
                        value: layer.secondary,
                        onChange: (secondary)=>patch({
                                secondary
                            })
                    }, void 0, false, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 339,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/RightPanel.tsx",
                lineNumber: 337,
                columnNumber: 9
            }, this),
            layer.kind === "image" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImageControls, {
                layer: layer,
                patch: patch
            }, void 0, false, {
                fileName: "[project]/components/RightPanel.tsx",
                lineNumber: 342,
                columnNumber: 34
            }, this),
            layer.kind === "shape" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
                title: "Shape",
                hint: "Fill, border aur style",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectField"], {
                        label: "Shape",
                        value: layer.shape,
                        options: [
                            "rect",
                            "circle",
                            "triangle",
                            "line",
                            "arrow",
                            "star",
                            "heart",
                            "pill"
                        ].map((s)=>({
                                value: s,
                                label: s.toUpperCase()
                            })),
                        onChange: (shape)=>patch({
                                shape
                            })
                    }, void 0, false, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 345,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorField"], {
                        label: "Fill Color",
                        value: layer.fill,
                        onChange: (fill)=>patch({
                                fill
                            })
                    }, void 0, false, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 346,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorField"], {
                        label: "Border Color",
                        value: layer.stroke,
                        onChange: (stroke)=>patch({
                                stroke
                            })
                    }, void 0, false, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 347,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                        label: "Border Width",
                        value: layer.strokeWidth,
                        min: 0,
                        max: 30,
                        onChange: (strokeWidth)=>patch({
                                strokeWidth
                            })
                    }, void 0, false, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 348,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                        label: "Corner Radius",
                        value: layer.radius,
                        min: 0,
                        max: 100,
                        onChange: (radius)=>patch({
                                radius
                            })
                    }, void 0, false, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 349,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toggle"], {
                        label: "Gradient Fill",
                        checked: layer.fillGradient.enabled,
                        onChange: (enabled)=>patch({
                                fillGradient: {
                                    ...layer.fillGradient,
                                    enabled
                                }
                            })
                    }, void 0, false, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 350,
                        columnNumber: 11
                    }, this),
                    layer.fillGradient.enabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorField"], {
                                label: "Gradient From",
                                value: layer.fillGradient.from,
                                onChange: (from)=>patch({
                                        fillGradient: {
                                            ...layer.fillGradient,
                                            from
                                        }
                                    })
                            }, void 0, false, {
                                fileName: "[project]/components/RightPanel.tsx",
                                lineNumber: 353,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorField"], {
                                label: "Gradient To",
                                value: layer.fillGradient.to,
                                onChange: (to)=>patch({
                                        fillGradient: {
                                            ...layer.fillGradient,
                                            to
                                        }
                                    })
                            }, void 0, false, {
                                fileName: "[project]/components/RightPanel.tsx",
                                lineNumber: 354,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 352,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/RightPanel.tsx",
                lineNumber: 344,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
                title: "Animation",
                hint: "Preview me dekho",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectField"], {
                        label: "Animation",
                        value: layer.animation,
                        options: ANIMATIONS,
                        onChange: (animation)=>patch({
                                animation
                            })
                    }, void 0, false, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 361,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                        label: "Speed",
                        value: layer.animSpeed,
                        min: 0.2,
                        max: 3,
                        step: 0.1,
                        suffix: "x",
                        onChange: (animSpeed)=>patch({
                                animSpeed
                            })
                    }, void 0, false, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 362,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/RightPanel.tsx",
                lineNumber: 360,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
                title: "Layer Actions",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            className: "flex-1",
                            onClick: onDuplicateLayer,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "copy",
                                    size: 13
                                }, void 0, false, {
                                    fileName: "[project]/components/RightPanel.tsx",
                                    lineNumber: 367,
                                    columnNumber: 83
                                }, this),
                                " Duplicate"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/RightPanel.tsx",
                            lineNumber: 367,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "danger",
                            className: "flex-1",
                            onClick: onDeleteLayer,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "trash",
                                    size: 13
                                }, void 0, false, {
                                    fileName: "[project]/components/RightPanel.tsx",
                                    lineNumber: 368,
                                    columnNumber: 79
                                }, this),
                                " Delete"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/RightPanel.tsx",
                            lineNumber: 368,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/RightPanel.tsx",
                    lineNumber: 366,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/RightPanel.tsx",
                lineNumber: 365,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/RightPanel.tsx",
        lineNumber: 307,
        columnNumber: 5
    }, this);
}
_c4 = LayerControls;
function TextControls({ layer, patch }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
                title: "Text Content",
                hint: "Hindi + English likho",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    value: layer.text,
                    onChange: (e)=>patch({
                            text: e.target.value
                        }),
                    rows: 3,
                    className: "w-full resize-none rounded-lg border border-line bg-panel2 p-2 text-[12px] text-zinc-200 outline-none focus:border-brand"
                }, void 0, false, {
                    fileName: "[project]/components/RightPanel.tsx",
                    lineNumber: 379,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/RightPanel.tsx",
                lineNumber: 378,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
                title: "Typography",
                hint: "Font, size, style",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectField"], {
                        label: "Font Family",
                        value: layer.font,
                        options: [
                            {
                                value: "sans",
                                label: "Modern Sans"
                            },
                            {
                                value: "display",
                                label: "Bold Display"
                            },
                            {
                                value: "serif",
                                label: "Classic Serif"
                            },
                            {
                                value: "mono",
                                label: "Mono"
                            },
                            {
                                value: "rounded",
                                label: "Rounded"
                            }
                        ],
                        onChange: (font)=>patch({
                                font
                            })
                    }, void 0, false, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 387,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                        label: "Font Size",
                        value: layer.size,
                        min: 1,
                        max: 20,
                        step: 0.1,
                        onChange: (size)=>patch({
                                size
                            })
                    }, void 0, false, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 391,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                        label: "Font Weight",
                        value: layer.weight,
                        min: 100,
                        max: 900,
                        step: 100,
                        onChange: (weight)=>patch({
                                weight
                            })
                    }, void 0, false, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 392,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                        label: "Line Height",
                        value: layer.lineHeight,
                        min: 0.8,
                        max: 2,
                        step: 0.05,
                        onChange: (lineHeight)=>patch({
                                lineHeight
                            })
                    }, void 0, false, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 393,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                        label: "Letter Spacing",
                        value: layer.letterSpacing,
                        min: -5,
                        max: 20,
                        step: 0.5,
                        onChange: (letterSpacing)=>patch({
                                letterSpacing
                            })
                    }, void 0, false, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 394,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toggle"], {
                                label: "Bold",
                                checked: layer.weight >= 700,
                                onChange: (v)=>patch({
                                        weight: v ? 800 : 400
                                    })
                            }, void 0, false, {
                                fileName: "[project]/components/RightPanel.tsx",
                                lineNumber: 396,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toggle"], {
                                label: "Italic",
                                checked: layer.italic,
                                onChange: (italic)=>patch({
                                        italic
                                    })
                            }, void 0, false, {
                                fileName: "[project]/components/RightPanel.tsx",
                                lineNumber: 397,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 395,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTabs"], {
                        value: layer.align,
                        options: [
                            {
                                value: "left",
                                label: "Left"
                            },
                            {
                                value: "center",
                                label: "Center"
                            },
                            {
                                value: "right",
                                label: "Right"
                            }
                        ],
                        onChange: (align)=>patch({
                                align
                            })
                    }, void 0, false, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 399,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/RightPanel.tsx",
                lineNumber: 386,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
                title: "Color & Effects",
                hint: "Gradient text, border, glow",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorField"], {
                        label: "Text Color",
                        value: layer.color,
                        onChange: (color)=>patch({
                                color
                            })
                    }, void 0, false, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 402,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toggle"], {
                        label: "Gradient Text",
                        checked: layer.gradient.enabled,
                        onChange: (enabled)=>patch({
                                gradient: {
                                    ...layer.gradient,
                                    enabled
                                }
                            })
                    }, void 0, false, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 403,
                        columnNumber: 9
                    }, this),
                    layer.gradient.enabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorField"], {
                                label: "From",
                                value: layer.gradient.from,
                                onChange: (from)=>patch({
                                        gradient: {
                                            ...layer.gradient,
                                            from
                                        }
                                    }),
                                compact: true
                            }, void 0, false, {
                                fileName: "[project]/components/RightPanel.tsx",
                                lineNumber: 406,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorField"], {
                                label: "To",
                                value: layer.gradient.to,
                                onChange: (to)=>patch({
                                        gradient: {
                                            ...layer.gradient,
                                            to
                                        }
                                    }),
                                compact: true
                            }, void 0, false, {
                                fileName: "[project]/components/RightPanel.tsx",
                                lineNumber: 407,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 405,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toggle"], {
                        label: "Border / Outline",
                        checked: layer.border.enabled,
                        onChange: (enabled)=>patch({
                                border: {
                                    ...layer.border,
                                    enabled
                                }
                            })
                    }, void 0, false, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 410,
                        columnNumber: 9
                    }, this),
                    layer.border.enabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorField"], {
                        label: "Border Color",
                        value: layer.border.color,
                        onChange: (color)=>patch({
                                border: {
                                    ...layer.border,
                                    color
                                }
                            })
                    }, void 0, false, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 411,
                        columnNumber: 34
                    }, this),
                    layer.border.enabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                        label: "Border Width",
                        value: layer.border.width,
                        min: 1,
                        max: 20,
                        onChange: (width)=>patch({
                                border: {
                                    ...layer.border,
                                    width
                                }
                            })
                    }, void 0, false, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 412,
                        columnNumber: 34
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toggle"], {
                        label: "Shadow",
                        checked: layer.shadow.enabled,
                        onChange: (enabled)=>patch({
                                shadow: {
                                    ...layer.shadow,
                                    enabled
                                }
                            })
                    }, void 0, false, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 413,
                        columnNumber: 9
                    }, this),
                    layer.shadow.enabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                        label: "Shadow Blur",
                        value: layer.shadow.blur,
                        min: 0,
                        max: 60,
                        onChange: (blur)=>patch({
                                shadow: {
                                    ...layer.shadow,
                                    blur
                                }
                            })
                    }, void 0, false, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 414,
                        columnNumber: 34
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toggle"], {
                        label: "Glow",
                        checked: layer.glow.enabled,
                        onChange: (enabled)=>patch({
                                glow: {
                                    ...layer.glow,
                                    enabled
                                }
                            })
                    }, void 0, false, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 415,
                        columnNumber: 9
                    }, this),
                    layer.glow.enabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorField"], {
                        label: "Glow Color",
                        value: layer.glow.color,
                        onChange: (color)=>patch({
                                glow: {
                                    ...layer.glow,
                                    color
                                }
                            })
                    }, void 0, false, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 416,
                        columnNumber: 32
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toggle"], {
                        label: "Background Pill",
                        checked: layer.pill.enabled,
                        onChange: (enabled)=>patch({
                                pill: {
                                    ...layer.pill,
                                    enabled
                                }
                            })
                    }, void 0, false, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 417,
                        columnNumber: 9
                    }, this),
                    layer.pill.enabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorField"], {
                        label: "Pill Color",
                        value: layer.pill.color,
                        onChange: (color)=>patch({
                                pill: {
                                    ...layer.pill,
                                    color
                                }
                            })
                    }, void 0, false, {
                        fileName: "[project]/components/RightPanel.tsx",
                        lineNumber: 418,
                        columnNumber: 32
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/RightPanel.tsx",
                lineNumber: 401,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/RightPanel.tsx",
        lineNumber: 377,
        columnNumber: 5
    }, this);
}
_c5 = TextControls;
function ImageControls({ layer, patch }) {
    const readFile = (e)=>{
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = ()=>patch({
                src: String(reader.result ?? "")
            });
        reader.readAsDataURL(file);
        e.target.value = "";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        title: "Image Layer",
        hint: "Crop, filters, corners",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "mb-2 block",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "mb-1 block rounded-lg border border-line bg-panel2 px-2.5 py-2 text-center text-[11px] text-zinc-300 hover:border-brand",
                    children: [
                        "📤 Replace Image",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "file",
                            accept: "image/*",
                            hidden: true,
                            onChange: readFile
                        }, void 0, false, {
                            fileName: "[project]/components/RightPanel.tsx",
                            lineNumber: 437,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/RightPanel.tsx",
                    lineNumber: 436,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/RightPanel.tsx",
                lineNumber: 435,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                label: "Rounded Corners",
                value: layer.radius,
                min: 0,
                max: 100,
                onChange: (radius)=>patch({
                        radius
                    })
            }, void 0, false, {
                fileName: "[project]/components/RightPanel.tsx",
                lineNumber: 440,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                label: "Crop / Zoom",
                value: layer.crop,
                min: 1,
                max: 3,
                step: 0.05,
                onChange: (crop)=>patch({
                        crop
                    }),
                suffix: "x"
            }, void 0, false, {
                fileName: "[project]/components/RightPanel.tsx",
                lineNumber: 441,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                label: "Grayscale",
                value: layer.grayscale * 100,
                onChange: (v)=>patch({
                        grayscale: v / 100
                    }),
                suffix: "%"
            }, void 0, false, {
                fileName: "[project]/components/RightPanel.tsx",
                lineNumber: 442,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                label: "Blur",
                value: layer.blur,
                min: 0,
                max: 20,
                onChange: (blur)=>patch({
                        blur
                    })
            }, void 0, false, {
                fileName: "[project]/components/RightPanel.tsx",
                lineNumber: 443,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                label: "Brightness",
                value: layer.brightness,
                min: 0,
                max: 200,
                onChange: (brightness)=>patch({
                        brightness
                    }),
                suffix: "%"
            }, void 0, false, {
                fileName: "[project]/components/RightPanel.tsx",
                lineNumber: 444,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                label: "Contrast",
                value: layer.contrast,
                min: 0,
                max: 200,
                onChange: (contrast)=>patch({
                        contrast
                    }),
                suffix: "%"
            }, void 0, false, {
                fileName: "[project]/components/RightPanel.tsx",
                lineNumber: 445,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectField"], {
                label: "Fit",
                value: layer.fit,
                options: [
                    {
                        value: "cover",
                        label: "Cover"
                    },
                    {
                        value: "contain",
                        label: "Contain"
                    },
                    {
                        value: "fill",
                        label: "Fill"
                    }
                ],
                onChange: (fit)=>patch({
                        fit
                    })
            }, void 0, false, {
                fileName: "[project]/components/RightPanel.tsx",
                lineNumber: 446,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toggle"], {
                label: "Flip Horizontally",
                checked: layer.flipX,
                onChange: (flipX)=>patch({
                        flipX
                    })
            }, void 0, false, {
                fileName: "[project]/components/RightPanel.tsx",
                lineNumber: 447,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/RightPanel.tsx",
        lineNumber: 434,
        columnNumber: 5
    }, this);
}
_c6 = ImageControls;
const RightPanel = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(RightPanelImpl);
_c7 = RightPanel;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "RightPanelImpl");
__turbopack_context__.k.register(_c1, "CanvasControls");
__turbopack_context__.k.register(_c2, "BackgroundControls");
__turbopack_context__.k.register(_c3, "BackgroundControlsInner");
__turbopack_context__.k.register(_c4, "LayerControls");
__turbopack_context__.k.register(_c5, "TextControls");
__turbopack_context__.k.register(_c6, "ImageControls");
__turbopack_context__.k.register(_c7, "RightPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Stage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Stage",
    ()=>Stage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$art$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/art.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Stage({ scene, size, time, zoom, selectedId, fourK, onSelect, onLayerChange, onBackgroundClick, onDeleteLayer, onDuplicateLayer }) {
    _s();
    const wrapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const svgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dragRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [avail, setAvail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        w: 900,
        h: 700
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Stage.useEffect": ()=>{
            const node = wrapRef.current;
            if (!node) return;
            const observer = new ResizeObserver({
                "Stage.useEffect": (entries)=>{
                    const r = entries[0]?.contentRect;
                    if (r) setAvail({
                        w: r.width,
                        h: r.height
                    });
                }
            }["Stage.useEffect"]);
            observer.observe(node);
            return ({
                "Stage.useEffect": ()=>observer.disconnect()
            })["Stage.useEffect"];
        }
    }["Stage.useEffect"], []);
    const W = size.width;
    const H = size.height;
    const fit = Math.min((avail.w - 72) / W, (avail.h - 76) / H);
    const displayW = Math.max(80, W * fit * (zoom / 100));
    const displayH = Math.max(80, H * fit * (zoom / 100));
    const unit = W * 0.004;
    const selected = scene.layers.find((l)=>l.id === selectedId) ?? null;
    const beginDrag = (e, layer, mode)=>{
        if (layer.locked) return;
        e.preventDefault();
        e.stopPropagation();
        onSelect(layer.id);
        const rect = svgRef.current?.getBoundingClientRect();
        if (!rect) return;
        dragRef.current = {
            mode,
            startX: e.clientX,
            startY: e.clientY,
            layer: {
                ...layer
            },
            rect
        };
        const move = (event)=>{
            const d = dragRef.current;
            if (!d) return;
            const dx = event.clientX - d.startX;
            const dy = event.clientY - d.startY;
            const sx = 100 / d.rect.width;
            const sy = 100 / d.rect.height;
            if (d.mode === "move") {
                onLayerChange(d.layer.id, {
                    x: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(Math.round((d.layer.x + dx * sx) * 10) / 10, 0, 100),
                    y: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(Math.round((d.layer.y + dy * sy) * 10) / 10, 0, 100)
                });
            } else if (d.mode === "resize") {
                onLayerChange(d.layer.id, {
                    w: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(Math.round((d.layer.w + dx * sx * 2) * 10) / 10, 3, 100),
                    h: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(Math.round((d.layer.h + dy * sy * 2) * 10) / 10, 3, 100)
                });
            } else {
                const cx = d.rect.left + d.layer.x / 100 * d.rect.width;
                const cy = d.rect.top + d.layer.y / 100 * d.rect.height;
                const a0 = Math.atan2(d.startY - cy, d.startX - cx) * 180 / Math.PI;
                const a1 = Math.atan2(event.clientY - cy, event.clientX - cx) * 180 / Math.PI;
                onLayerChange(d.layer.id, {
                    rot: Math.round(d.layer.rot + (a1 - a0))
                });
            }
        };
        const up = ()=>{
            dragRef.current = null;
            window.removeEventListener("pointermove", move);
            window.removeEventListener("pointerup", up);
        };
        window.addEventListener("pointermove", move);
        window.addEventListener("pointerup", up);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: wrapRef,
        className: "scroll-thin relative flex flex-1 overflow-auto bg-[#111114]",
        style: {
            backgroundImage: "radial-gradient(circle at 50% 40%, rgba(124,58,237,.07), transparent 55%)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "m-auto flex min-h-full min-w-full items-center justify-center p-9",
            style: {
                width: displayW + 72,
                height: displayH + 76
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative shrink-0 shadow-canvas",
                style: {
                    width: displayW,
                    height: displayH
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        ref: svgRef,
                        "data-stage-svg": "true",
                        xmlns: "http://www.w3.org/2000/svg",
                        width: displayW,
                        height: displayH,
                        viewBox: `0 0 ${W} ${H}`,
                        className: "block no-select",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$art$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BackgroundArt"], {
                                bg: scene.background,
                                W: W,
                                H: H,
                                time: time,
                                prefix: "stage"
                            }, void 0, false, {
                                fileName: "[project]/components/Stage.tsx",
                                lineNumber: 130,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                width: W,
                                height: H,
                                fill: "transparent",
                                onPointerDown: (e)=>{
                                    e.stopPropagation();
                                    onSelect(null);
                                    onBackgroundClick();
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/Stage.tsx",
                                lineNumber: 131,
                                columnNumber: 13
                            }, this),
                            scene.layers.filter((l)=>l.visible).map((layer)=>{
                                const bw = layer.w / 100 * W;
                                const bh = layer.h / 100 * H;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    onPointerDown: (e)=>beginDrag(e, layer, "move"),
                                    style: {
                                        cursor: layer.locked ? "default" : "move"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$art$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayerArt"], {
                                            layer: layer,
                                            W: W,
                                            H: H,
                                            time: time,
                                            prefix: `stage-${layer.id}`
                                        }, void 0, false, {
                                            fileName: "[project]/components/Stage.tsx",
                                            lineNumber: 152,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            "data-ui": "true",
                                            x: -bw / 2,
                                            y: -bh / 2,
                                            width: bw,
                                            height: bh,
                                            fill: "transparent"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Stage.tsx",
                                            lineNumber: 153,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, layer.id, true, {
                                    fileName: "[project]/components/Stage.tsx",
                                    lineNumber: 147,
                                    columnNumber: 19
                                }, this);
                            }),
                            selected && selected.visible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                "data-ui": "true",
                                transform: `translate(${selected.x / 100 * W} ${selected.y / 100 * H}) rotate(${selected.rot})`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: -selected.w / 100 * W / 2,
                                        y: -selected.h / 100 * H / 2,
                                        width: selected.w / 100 * W,
                                        height: selected.h / 100 * H,
                                        fill: "none",
                                        stroke: "#C084FC",
                                        strokeWidth: unit * 1.6,
                                        strokeDasharray: `${unit * 8} ${unit * 5}`,
                                        pointerEvents: "none"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Stage.tsx",
                                        lineNumber: 159,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: 0,
                                        y1: 0,
                                        x2: 0,
                                        y2: -selected.h / 100 * H / 2 - unit * 8,
                                        stroke: "#C084FC",
                                        strokeWidth: unit,
                                        pointerEvents: "none"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Stage.tsx",
                                        lineNumber: 170,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        "data-handle": "rotate",
                                        cx: 0,
                                        cy: -selected.h / 100 * H / 2 - unit * 10,
                                        r: unit * 5,
                                        fill: "#FFFFFF",
                                        stroke: "#7C3AED",
                                        strokeWidth: unit * 1.5,
                                        style: {
                                            cursor: "grab"
                                        },
                                        onPointerDown: (e)=>beginDrag(e, selected, "rotate")
                                    }, void 0, false, {
                                        fileName: "[project]/components/Stage.tsx",
                                        lineNumber: 171,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        "data-handle": "resize",
                                        x: selected.w / 100 * W / 2 - unit * 5,
                                        y: selected.h / 100 * H / 2 - unit * 5,
                                        width: unit * 10,
                                        height: unit * 10,
                                        rx: unit * 2,
                                        fill: "#7C3AED",
                                        stroke: "#FFFFFF",
                                        strokeWidth: unit,
                                        style: {
                                            cursor: "nwse-resize"
                                        },
                                        onPointerDown: (e)=>beginDrag(e, selected, "resize")
                                    }, void 0, false, {
                                        fileName: "[project]/components/Stage.tsx",
                                        lineNumber: 182,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Stage.tsx",
                                lineNumber: 158,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Stage.tsx",
                        lineNumber: 121,
                        columnNumber: 11
                    }, this),
                    scene.background.type === "video" && scene.background.video.src && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        "data-ui": "true",
                        src: scene.background.video.src,
                        autoPlay: true,
                        muted: true,
                        loop: scene.background.video.loop,
                        playsInline: true,
                        className: "pointer-events-none absolute inset-0 h-full w-full object-cover"
                    }, scene.background.video.src, false, {
                        fileName: "[project]/components/Stage.tsx",
                        lineNumber: 200,
                        columnNumber: 13
                    }, this),
                    selected && selected.visible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-ui": "true",
                        className: "absolute z-10 flex -translate-y-full gap-1 rounded-lg border border-brand/50 bg-[#1b1029]/95 p-1 shadow-lg backdrop-blur",
                        style: {
                            left: `${Math.min(98, selected.x + selected.w / 2)}%`,
                            top: `${Math.max(2, selected.y - selected.h / 2)}%`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                title: "Duplicate layer",
                                onClick: onDuplicateLayer,
                                className: "rounded px-1.5 py-0.5 text-[10px] text-zinc-300 hover:bg-white/10",
                                children: "⧉"
                            }, void 0, false, {
                                fileName: "[project]/components/Stage.tsx",
                                lineNumber: 218,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                title: "Delete layer",
                                onClick: onDeleteLayer,
                                className: "rounded px-1.5 py-0.5 text-[10px] text-rose-300 hover:bg-rose-500/20",
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/components/Stage.tsx",
                                lineNumber: 219,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Stage.tsx",
                        lineNumber: 213,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-ui": "true",
                        className: "pointer-events-none absolute bottom-2 left-2 rounded-md border border-white/10 bg-black/65 px-2.5 py-1 font-mono text-[9px] tracking-wide text-zinc-300 backdrop-blur-sm",
                        children: [
                            W,
                            " x ",
                            H,
                            " • ",
                            size.ratio,
                            " • ",
                            fourK ? "4K Ready" : "HD Ready"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Stage.tsx",
                        lineNumber: 223,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-ui": "true",
                        className: "pointer-events-none absolute right-2 top-2 rounded-md border border-white/10 bg-black/65 px-2 py-1 text-[9px] font-semibold uppercase tracking-widest text-brand2 backdrop-blur-sm",
                        children: scene.name
                    }, void 0, false, {
                        fileName: "[project]/components/Stage.tsx",
                        lineNumber: 226,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Stage.tsx",
                lineNumber: 120,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Stage.tsx",
            lineNumber: 119,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Stage.tsx",
        lineNumber: 112,
        columnNumber: 5
    }, this);
}
_s(Stage, "3qgHlSwaMWe07khEV/p2FfrsbTs=");
_c = Stage;
var _c;
__turbopack_context__.k.register(_c, "Stage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Timeline.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Timeline",
    ()=>Timeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui.tsx [app-client] (ecmascript)");
"use client";
;
;
function Timeline({ scenes, activeSceneId, time, playing, onSelectScene, onAddScene, onDuplicateScene, onDeleteScene, onDuration, onTogglePlay, onRestart, onSeek }) {
    const total = scenes.reduce((sum, s)=>sum + s.duration, 0) || 1;
    const activeIndex = Math.max(0, scenes.findIndex((s)=>s.id === activeSceneId));
    const before = scenes.slice(0, activeIndex).reduce((sum, s)=>sum + s.duration, 0);
    const playhead = (before + time / 1000) / total * 100;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-[118px] shrink-0 flex-col border-t border-line bg-[#121216]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-9 items-center justify-between border-b border-line px-2 sm:px-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButton"], {
                                name: playing ? "pause" : "play",
                                onClick: onTogglePlay,
                                title: "Play / Pause",
                                size: 14,
                                className: "h-7 w-7"
                            }, void 0, false, {
                                fileName: "[project]/components/Timeline.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButton"], {
                                name: "restart",
                                onClick: onRestart,
                                title: "Restart",
                                size: 13,
                                className: "h-7 w-7"
                            }, void 0, false, {
                                fileName: "[project]/components/Timeline.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-1 font-mono text-[10px] text-zinc-400",
                                children: [
                                    (time / 1000).toFixed(1),
                                    "s / ",
                                    total.toFixed(0),
                                    "s"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Timeline.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Timeline.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onAddScene,
                        className: "flex items-center gap-1 rounded-md border border-line bg-panel2 px-2 py-1 text-[10px] text-zinc-300 transition hover:border-brand",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "plus",
                                size: 12
                            }, void 0, false, {
                                fileName: "[project]/components/Timeline.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            " Add Scene"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Timeline.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Timeline.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "scroll-thin relative flex flex-1 items-stretch gap-2 overflow-x-auto px-3 py-2",
                children: [
                    scenes.map((scene, index)=>{
                        const width = Math.max(132, scene.duration / total * 620);
                        const isActive = scene.id === activeSceneId;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: (e)=>{
                                const rect = e.currentTarget.getBoundingClientRect();
                                onSelectScene(scene.id);
                                onSeek(scene.id, (e.clientX - rect.left) / rect.width * scene.duration * 1000);
                            },
                            style: {
                                width
                            },
                            className: `group relative shrink-0 cursor-pointer overflow-hidden rounded-lg border p-2 transition ${isActive ? "border-brand bg-brand/10 shadow-glow" : "border-line bg-panel2 hover:border-zinc-600"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `flex h-5 w-5 items-center justify-center rounded font-mono text-[9px] ${isActive ? "bg-brand text-white" : "bg-zinc-700 text-zinc-300"}`,
                                            children: index + 1
                                        }, void 0, false, {
                                            fileName: "[project]/components/Timeline.tsx",
                                            lineNumber: 66,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "min-w-0 flex-1 truncate text-[10px] font-medium text-zinc-200",
                                            children: scene.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/Timeline.tsx",
                                            lineNumber: 67,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-[9px] text-zinc-500",
                                            children: [
                                                scene.duration,
                                                "s"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Timeline.tsx",
                                            lineNumber: 68,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Timeline.tsx",
                                    lineNumber: 65,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 flex items-end gap-0.5",
                                    children: Array.from({
                                        length: 12
                                    }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `flex-1 rounded-sm ${i % 3 === 0 ? "bg-brand/50" : "bg-zinc-600/60"}`,
                                            style: {
                                                height: 4 + i * 7 % 13
                                            }
                                        }, i, false, {
                                            fileName: "[project]/components/Timeline.tsx",
                                            lineNumber: 72,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/Timeline.tsx",
                                    lineNumber: 70,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 flex items-center justify-between opacity-0 transition group-hover:opacity-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    title: "Duplicate scene",
                                                    onClick: (e)=>{
                                                        e.stopPropagation();
                                                        onDuplicateScene(scene.id);
                                                    },
                                                    className: "text-zinc-400 hover:text-white",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                        name: "copy",
                                                        size: 12
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Timeline.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 178
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Timeline.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    title: "Delete scene",
                                                    onClick: (e)=>{
                                                        e.stopPropagation();
                                                        onDeleteScene(scene.id);
                                                    },
                                                    className: "text-zinc-400 hover:text-rose-400",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                        name: "trash",
                                                        size: 12
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Timeline.tsx",
                                                        lineNumber: 78,
                                                        columnNumber: 175
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Timeline.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Timeline.tsx",
                                            lineNumber: 76,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1",
                                            onClick: (e)=>e.stopPropagation(),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>onDuration(scene.id, Math.max(1, scene.duration - 1)),
                                                    className: "rounded bg-zinc-700 px-1 text-[10px] text-zinc-300 hover:bg-zinc-600",
                                                    children: "−"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Timeline.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[9px] text-zinc-500",
                                                    children: "sec"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Timeline.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>onDuration(scene.id, Math.min(60, scene.duration + 1)),
                                                    className: "rounded bg-zinc-700 px-1 text-[10px] text-zinc-300 hover:bg-zinc-600",
                                                    children: "+"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Timeline.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Timeline.tsx",
                                            lineNumber: 80,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Timeline.tsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, this),
                                isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-x-0 bottom-0 h-0.5 bg-brand"
                                }, void 0, false, {
                                    fileName: "[project]/components/Timeline.tsx",
                                    lineNumber: 86,
                                    columnNumber: 28
                                }, this)
                            ]
                        }, scene.id, true, {
                            fileName: "[project]/components/Timeline.tsx",
                            lineNumber: 55,
                            columnNumber: 13
                        }, this);
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex w-[80px] shrink-0 items-center justify-center rounded-lg border border-dashed border-zinc-700 text-zinc-600",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: "plus",
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/components/Timeline.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Timeline.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute left-3 top-[38px] h-[70px] w-[calc(100%-24px)] max-w-[900px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-0 h-full w-px bg-rose-400/80",
                            style: {
                                left: `${Math.min(100, Math.max(0, playhead))}%`
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -left-[4px] -top-1 h-2 w-2 rotate-45 bg-rose-400"
                            }, void 0, false, {
                                fileName: "[project]/components/Timeline.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Timeline.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Timeline.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Timeline.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Timeline.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = Timeline;
var _c;
__turbopack_context__.k.register(_c, "Timeline");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Toolbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toolbar",
    ()=>Toolbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/presets.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ToolbarImpl({ size, zoom, playing, busy, canUndo, canRedo, onUndo, onRedo, onSize, onZoom, onPlayToggle, onRestart, onDownload }) {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [customW, setCustomW] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(2000);
    const [customH, setCustomH] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(2000);
    const [quality, setQuality] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("native");
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOutside"])({
        "ToolbarImpl.useOutside[ref]": ()=>setOpen(null)
    }["ToolbarImpl.useOutside[ref]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "relative z-30 flex h-14 shrink-0 items-center justify-between gap-2 border-b border-line bg-[#141419] px-2 sm:px-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-w-0 items-center gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButton"], {
                        name: "undo",
                        title: "Undo (Ctrl+Z)",
                        onClick: onUndo,
                        className: canUndo ? "" : "opacity-30"
                    }, void 0, false, {
                        fileName: "[project]/components/Toolbar.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButton"], {
                        name: "redo",
                        title: "Redo (Ctrl+Shift+Z)",
                        onClick: onRedo,
                        className: canRedo ? "" : "opacity-30"
                    }, void 0, false, {
                        fileName: "[project]/components/Toolbar.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-1 h-6 w-px bg-line"
                    }, void 0, false, {
                        fileName: "[project]/components/Toolbar.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setOpen(open === "size" ? null : "size"),
                                className: "flex h-9 items-center gap-2 rounded-lg border border-line bg-panel2 px-2.5 text-[11px] text-zinc-200 transition hover:border-brand/60",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: size.icon,
                                        size: 14,
                                        className: "text-brand2"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Toolbar.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden max-w-[130px] truncate sm:inline",
                                        children: size.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/Toolbar.tsx",
                                        lineNumber: 65,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-[10px] text-zinc-500",
                                        children: size.short
                                    }, void 0, false, {
                                        fileName: "[project]/components/Toolbar.tsx",
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "chevron",
                                        size: 13,
                                        className: "text-zinc-500"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Toolbar.tsx",
                                        lineNumber: 67,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Toolbar.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dropdown"], {
                                open: open === "size",
                                className: "left-0 right-auto max-h-[70vh] w-[320px] overflow-y-auto scroll-thin",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "px-2 pb-2 pt-1 text-[10px] font-semibold uppercase tracking-widest text-zinc-500",
                                        children: "Canvas Size • कैनवास साइज़"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Toolbar.tsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CANVAS_SIZES"].slice(0, 9).map((preset)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>{
                                                onSize(preset);
                                                setOpen(null);
                                            },
                                            className: `flex w-full items-center gap-2.5 rounded-lg px-2 py-2 text-left transition hover:bg-white/5 ${size.id === preset.id ? "bg-brand/15" : ""}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex h-8 w-8 items-center justify-center rounded-lg bg-panel2 text-brand2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                        name: preset.icon,
                                                        size: 15
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Toolbar.tsx",
                                                        lineNumber: 81,
                                                        columnNumber: 109
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Toolbar.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "block text-[11px] text-zinc-200",
                                                            children: preset.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Toolbar.tsx",
                                                            lineNumber: 83,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "block font-mono text-[9px] text-zinc-500",
                                                            children: [
                                                                preset.width,
                                                                " × ",
                                                                preset.height,
                                                                " • ",
                                                                preset.ratio
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/Toolbar.tsx",
                                                            lineNumber: 84,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Toolbar.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 17
                                                }, this),
                                                size.id === preset.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                    name: "check",
                                                    size: 14,
                                                    className: "text-brand2"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Toolbar.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 43
                                                }, this)
                                            ]
                                        }, preset.id, true, {
                                            fileName: "[project]/components/Toolbar.tsx",
                                            lineNumber: 72,
                                            columnNumber: 15
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 rounded-lg border border-line bg-panel2 p-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mb-2 text-[10px] font-semibold uppercase tracking-widest text-zinc-500",
                                                children: "🎞️ Custom Size • अपना साइज़"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Toolbar.tsx",
                                                lineNumber: 90,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-end gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mb-1 block text-[9px] text-zinc-500",
                                                                children: "Width"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Toolbar.tsx",
                                                                lineNumber: 93,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                min: 200,
                                                                max: 6000,
                                                                value: customW,
                                                                onChange: (e)=>setCustomW(Number(e.target.value)),
                                                                className: "w-full rounded-md border border-line bg-[#111117] px-2 py-1.5 font-mono text-[11px] text-zinc-200 outline-none focus:border-brand"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Toolbar.tsx",
                                                                lineNumber: 94,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Toolbar.tsx",
                                                        lineNumber: 92,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mb-1 block text-[9px] text-zinc-500",
                                                                children: "Height"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Toolbar.tsx",
                                                                lineNumber: 97,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                min: 200,
                                                                max: 6000,
                                                                value: customH,
                                                                onChange: (e)=>setCustomH(Number(e.target.value)),
                                                                className: "w-full rounded-md border border-line bg-[#111117] px-2 py-1.5 font-mono text-[11px] text-zinc-200 outline-none focus:border-brand"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Toolbar.tsx",
                                                                lineNumber: 98,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Toolbar.tsx",
                                                        lineNumber: 96,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        className: "py-1.5",
                                                        onClick: ()=>{
                                                            onSize(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CANVAS_SIZES"][9], {
                                                                width: Math.max(200, Math.min(6000, customW)),
                                                                height: Math.max(200, Math.min(6000, customH))
                                                            });
                                                            setOpen(null);
                                                        },
                                                        children: "Apply"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Toolbar.tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Toolbar.tsx",
                                                lineNumber: 91,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Toolbar.tsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Toolbar.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Toolbar.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Toolbar.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButton"], {
                        name: "zoomOut",
                        title: "Zoom out",
                        onClick: ()=>onZoom(Math.max(25, zoom - 25))
                    }, void 0, false, {
                        fileName: "[project]/components/Toolbar.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>onZoom(100),
                        title: "Reset zoom",
                        className: "w-14 rounded-md py-1 text-center font-mono text-[11px] text-zinc-300 hover:bg-white/5",
                        children: [
                            zoom,
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Toolbar.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButton"], {
                        name: "zoomIn",
                        title: "Zoom in",
                        onClick: ()=>onZoom(Math.min(300, zoom + 25))
                    }, void 0, false, {
                        fileName: "[project]/components/Toolbar.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Toolbar.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mr-1 flex items-center rounded-lg border border-line bg-panel2 p-0.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButton"], {
                                name: playing ? "pause" : "play",
                                title: playing ? "Pause preview" : "Play preview",
                                onClick: onPlayToggle,
                                active: playing,
                                size: 15,
                                className: "h-7 w-7"
                            }, void 0, false, {
                                fileName: "[project]/components/Toolbar.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButton"], {
                                name: "restart",
                                title: "Restart preview",
                                onClick: onRestart,
                                size: 14,
                                className: "h-7 w-7"
                            }, void 0, false, {
                                fileName: "[project]/components/Toolbar.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Toolbar.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "primary",
                                onClick: ()=>setOpen(open === "download" ? null : "download"),
                                className: "h-9 px-2.5 sm:px-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "download",
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/components/Toolbar.tsx",
                                        lineNumber: 133,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden sm:inline",
                                        children: busy ?? "Download"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Toolbar.tsx",
                                        lineNumber: 134,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "chevron",
                                        size: 12
                                    }, void 0, false, {
                                        fileName: "[project]/components/Toolbar.tsx",
                                        lineNumber: 135,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Toolbar.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dropdown"], {
                                open: open === "download",
                                className: "w-[350px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "px-2 pb-2 pt-1 text-[10px] font-semibold uppercase tracking-widest text-zinc-500",
                                        children: "⬇️ Download • डाउनलोड"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Toolbar.tsx",
                                        lineNumber: 138,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        disabled: Boolean(busy),
                                        onClick: ()=>{
                                            onDownload("mp4", {
                                                quality,
                                                duration: 5,
                                                fps: 60
                                            });
                                            setOpen(null);
                                        },
                                        className: "mb-1.5 flex w-full items-center gap-2 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-3 py-2.5 text-left transition hover:border-emerald-400 disabled:opacity-40",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: "film",
                                                size: 16,
                                                className: "text-emerald-300"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Toolbar.tsx",
                                                lineNumber: 146,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block text-[11px] font-semibold text-emerald-100",
                                                        children: "🎬 MP4 (Real MP4 - H.264) - RECOMMENDED"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Toolbar.tsx",
                                                        lineNumber: 148,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block text-[9px] text-emerald-300/70",
                                                        children: "Plays in WhatsApp, Gallery, YouTube ✅"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Toolbar.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Toolbar.tsx",
                                                lineNumber: 147,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: "chevron",
                                                size: 13,
                                                className: "rotate-[-90deg] text-emerald-300"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Toolbar.tsx",
                                                lineNumber: 151,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Toolbar.tsx",
                                        lineNumber: 140,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        disabled: Boolean(busy),
                                        onClick: ()=>{
                                            onDownload("webm", {
                                                quality,
                                                duration: 5,
                                                fps: 60
                                            });
                                            setOpen(null);
                                        },
                                        className: "mb-2 flex w-full items-center gap-2 rounded-lg border border-line bg-panel2 px-3 py-2 text-[11px] text-zinc-200 transition hover:border-brand disabled:opacity-40",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: "film",
                                                size: 14,
                                                className: "text-brand2"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Toolbar.tsx",
                                                lineNumber: 160,
                                                columnNumber: 15
                                            }, this),
                                            "🎬 WebM (Small Size - For Web)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Toolbar.tsx",
                                        lineNumber: 154,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-2 rounded-lg border border-line bg-panel2 p-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mb-1.5 text-[9px] uppercase tracking-wide text-zinc-500",
                                                children: "Image quality • PNG / SVG"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Toolbar.tsx",
                                                lineNumber: 164,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-4 gap-1",
                                                children: [
                                                    "native",
                                                    "720p",
                                                    "1080p",
                                                    "4K"
                                                ].map((q)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setQuality(q),
                                                        className: `rounded-md py-1.5 text-[10px] transition ${quality === q ? "bg-brand text-white" : "bg-[#111117] text-zinc-400 hover:text-white"}`,
                                                        children: q === "native" ? "Source" : q
                                                    }, q, false, {
                                                        fileName: "[project]/components/Toolbar.tsx",
                                                        lineNumber: 167,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/Toolbar.tsx",
                                                lineNumber: 165,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Toolbar.tsx",
                                        lineNumber: 163,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-3 gap-1.5",
                                        children: [
                                            [
                                                "png",
                                                "🖼️ PNG",
                                                "image"
                                            ],
                                            [
                                                "svg",
                                                "🎨 SVG",
                                                "sparkle"
                                            ],
                                            [
                                                "json",
                                                "📄 JSON",
                                                "file"
                                            ]
                                        ].map(([kind, label, icon])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                disabled: Boolean(busy),
                                                onClick: ()=>{
                                                    onDownload(kind, {
                                                        quality,
                                                        duration: 5,
                                                        fps: 60
                                                    });
                                                    setOpen(null);
                                                },
                                                className: "flex items-center justify-center gap-1.5 rounded-lg border border-line bg-panel2 px-2 py-2 text-[11px] text-zinc-200 transition hover:border-brand disabled:opacity-40",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                        name: icon,
                                                        size: 14,
                                                        className: "text-brand2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Toolbar.tsx",
                                                        lineNumber: 185,
                                                        columnNumber: 19
                                                    }, this),
                                                    label
                                                ]
                                            }, kind, true, {
                                                fileName: "[project]/components/Toolbar.tsx",
                                                lineNumber: 178,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Toolbar.tsx",
                                        lineNumber: 172,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Toolbar.tsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Toolbar.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Toolbar.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Toolbar.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_s(ToolbarImpl, "x/60SJuozkNGOfFTthGVREQFWPs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOutside"]
    ];
});
_c = ToolbarImpl;
const Toolbar = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(ToolbarImpl);
_c1 = Toolbar;
var _c, _c1;
__turbopack_context__.k.register(_c, "ToolbarImpl");
__turbopack_context__.k.register(_c1, "Toolbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "ColorField",
    ()=>ColorField,
    "ColorGrid",
    ()=>ColorGrid,
    "Dropdown",
    ()=>Dropdown,
    "FileInput",
    ()=>FileInput,
    "Icon",
    ()=>Icon,
    "IconButton",
    ()=>IconButton,
    "NumberField",
    ()=>NumberField,
    "PillTabs",
    ()=>PillTabs,
    "Section",
    ()=>Section,
    "SelectField",
    ()=>SelectField,
    "Slider",
    ()=>Slider,
    "TextField",
    ()=>TextField,
    "ToastStack",
    ()=>ToastStack,
    "Toggle",
    ()=>Toggle,
    "useLocalState",
    ()=>useLocalState,
    "useOutside",
    ()=>useOutside
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/presets.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
const PATHS = {
    backgrounds: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "3",
                width: "18",
                height: "18",
                rx: "3"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 9,
                columnNumber: 18
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "8.5",
                cy: "8.5",
                r: "1.5"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 9,
                columnNumber: 68
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M21 15l-5-5L5 21"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 9,
                columnNumber: 104
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 9,
        columnNumber: 16
    }, ("TURBOPACK compile-time value", void 0)),
    characters: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "8",
                r: "4"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 10,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 10,
                columnNumber: 48
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 10,
        columnNumber: 15
    }, ("TURBOPACK compile-time value", void 0)),
    finance: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "9"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 11,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15 9.5c-.7-1.2-1.9-1.8-3.3-1.8-1.8 0-3 1-3 2.3 0 3.2 6.4 1.5 6.4 4.8 0 1.4-1.3 2.4-3.2 2.4-1.6 0-3-.7-3.7-2"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 11,
                columnNumber: 46
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 5.5v13"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 11,
                columnNumber: 167
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 11,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0)),
    text: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 6V4h16v2"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 12,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 4v16"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 12,
                columnNumber: 35
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 20h8"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 12,
                columnNumber: 56
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 12,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)),
    images: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "4",
                width: "18",
                height: "16",
                rx: "3"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 13,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "8.5",
                cy: "9",
                r: "1.5"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 13,
                columnNumber: 63
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M21 16l-5-5-9 9"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 13,
                columnNumber: 97
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 13,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0)),
    scenes: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "4",
                width: "18",
                height: "14",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 14,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 9h18M8 21h8M12 18v3"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 14,
                columnNumber: 63
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 14,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0)),
    json: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 4H6a2 2 0 0 0-2 2v4l-2 2 2 2v4a2 2 0 0 0 2 2h2"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 15,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16 4h2a2 2 0 0 1 2 2v4l2 2-2 2v4a2 2 0 0 1-2 2h-2"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 15,
                columnNumber: 73
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 15,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)),
    undo: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 14L4 9l5-5"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 16,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 9h10a6 6 0 0 1 0 12h-3"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 16,
                columnNumber: 37
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 16,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)),
    redo: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15 14l5-5-5-5"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 17,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20 9H10a6 6 0 0 0 0 12h3"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 17,
                columnNumber: 38
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 17,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)),
    download: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 3v12"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 18,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7 10l5 5 5-5"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 18,
                columnNumber: 36
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 20h16"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 18,
                columnNumber: 62
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 18,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0)),
    play: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
        d: "M7 4l13 8-13 8V4z"
    }, void 0, false, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 19,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)),
    pause: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "6",
                y: "4",
                width: "4",
                height: "16",
                rx: "1"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 20,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "14",
                y: "4",
                width: "4",
                height: "16",
                rx: "1"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 20,
                columnNumber: 61
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 20,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0)),
    restart: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 12a9 9 0 1 0 3-6.7"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 21,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 4v5h5"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 21,
                columnNumber: 48
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 21,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0)),
    plus: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 5v14M5 12h14"
        }, void 0, false, {
            fileName: "[project]/components/ui.tsx",
            lineNumber: 22,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 22,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)),
    trash: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M4 7h16M9 7V4h6v3M6 7l1 14h10l1-14"
        }, void 0, false, {
            fileName: "[project]/components/ui.tsx",
            lineNumber: 23,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 23,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0)),
    copy: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "8",
                y: "8",
                width: "12",
                height: "12",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 24,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 24,
                columnNumber: 61
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 24,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)),
    upload: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 16V4"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 25,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7 9l5-5 5 5"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 25,
                columnNumber: 34
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 20h16"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 25,
                columnNumber: 59
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 25,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0)),
    close: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M6 6l12 12M18 6L6 18"
        }, void 0, false, {
            fileName: "[project]/components/ui.tsx",
            lineNumber: 26,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 26,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0)),
    chevron: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
        d: "M6 9l6 6 6-6"
    }, void 0, false, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 27,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0)),
    check: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
        d: "M5 12l5 5L20 6"
    }, void 0, false, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 28,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0)),
    eye: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 29,
                columnNumber: 10
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "3"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 29,
                columnNumber: 71
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 29,
        columnNumber: 8
    }, ("TURBOPACK compile-time value", void 0)),
    lock: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "5",
                y: "10",
                width: "14",
                height: "11",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 30,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 10V7a4 4 0 0 1 8 0v3"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 30,
                columnNumber: 62
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 30,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)),
    sparkle: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 2l2.2 6.4L21 11l-6.8 2.6L12 20l-2.2-6.4L3 11l6.8-2.6L12 2z"
        }, void 0, false, {
            fileName: "[project]/components/ui.tsx",
            lineNumber: 31,
            columnNumber: 14
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 31,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0)),
    layers: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 3l9 5-9 5-9-5 9-5z"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 32,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 13l9 5 9-5"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 32,
                columnNumber: 48
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 32,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0)),
    settings: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "3"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 33,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2v3m0 14v3M4.9 4.9l2.1 2.1m10 10l2.1 2.1M2 12h3m14 0h3M4.9 19.1L7 17m10-10l2.1-2.1"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 33,
                columnNumber: 47
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 33,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0)),
    zoomIn: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "11",
                cy: "11",
                r: "7"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 34,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11 8v6M8 11h6M20 20l-4-4"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 34,
                columnNumber: 45
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 34,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0)),
    zoomOut: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "11",
                cy: "11",
                r: "7"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 35,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 11h6M20 20l-4-4"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 35,
                columnNumber: 46
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 35,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0)),
    film: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "4",
                width: "18",
                height: "16",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 36,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7 4v16M17 4v16M3 9h4M3 15h4M17 9h4M17 15h4"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 36,
                columnNumber: 61
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 36,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)),
    phone: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "7",
                y: "2",
                width: "10",
                height: "20",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 37,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11 18h2"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 37,
                columnNumber: 62
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 37,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0)),
    image: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "4",
                width: "18",
                height: "16",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 38,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "8.5",
                cy: "9",
                r: "1.5"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 38,
                columnNumber: 62
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M21 16l-5-5-8 8"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 38,
                columnNumber: 96
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 38,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0)),
    camera: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 8h3l2-3h6l2 3h3v12H4V8z"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 39,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "14",
                r: "3.5"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 39,
                columnNumber: 52
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 39,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0)),
    bird: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20 6c-2 1-3 1-5 1-3-3-9-2-11 2-2 4 1 9 6 9 2 0 3-1 4-2 3 0 5-3 6-10z"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 40,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15 10h.01"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 40,
                columnNumber: 93
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 40,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)),
    facebook: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v6h4v-6h3l1-4h-4V9c0-.6.4-1 1-1z"
        }, void 0, false, {
            fileName: "[project]/components/ui.tsx",
            lineNumber: 41,
            columnNumber: 15
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 41,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0)),
    pin: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 21s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12z"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 42,
                columnNumber: 10
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "9",
                r: "2.5"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 42,
                columnNumber: 72
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 42,
        columnNumber: 8
    }, ("TURBOPACK compile-time value", void 0)),
    sliders: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 7h10M18 7h2M4 17h2M10 17h10"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 43,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "16",
                cy: "7",
                r: "2"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 43,
                columnNumber: 57
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "8",
                cy: "17",
                r: "2"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 43,
                columnNumber: 88
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 43,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0)),
    grid: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "3",
                width: "7",
                height: "7",
                rx: "1"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 44,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "14",
                y: "3",
                width: "7",
                height: "7",
                rx: "1"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 44,
                columnNumber: 59
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "14",
                width: "7",
                height: "7",
                rx: "1"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 44,
                columnNumber: 108
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "14",
                y: "14",
                width: "7",
                height: "7",
                rx: "1"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 44,
                columnNumber: 157
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 44,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)),
    heart: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
        d: "M12 20s-8-5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 9c0 6-8 11-8 11z"
    }, void 0, false, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 45,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0)),
    star: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
        d: "M12 3l2.8 5.7 6.2.9-4.5 4.4 1 6.2-5.5-2.9-5.5 2.9 1-6.2L3 9.6l6.2-.9L12 3z"
    }, void 0, false, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 46,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)),
    rotate: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 12a8 8 0 1 1 2 5.3"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 47,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 20v-5h5"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 47,
                columnNumber: 47
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 47,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0)),
    resize: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6 18L18 6M14 6h4v4"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 48,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "17",
                width: "4",
                height: "4",
                rx: "1"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 48,
                columnNumber: 45
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 48,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0)),
    file: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6 3h8l4 4v14H6V3z"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 49,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14 3v4h4"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 49,
                columnNumber: 42
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 49,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)),
    info: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "9"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 50,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 11v6M12 7h.01"
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 50,
                columnNumber: 43
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 50,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0))
};
function Icon({ name, size = 18, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        "aria-hidden": "true",
        children: PATHS[name] ?? PATHS.sparkle
    }, void 0, false, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_c = Icon;
function Section({ title, hint, children, action }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border-b border-line px-4 py-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 flex items-center justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-[12px] font-semibold tracking-wide text-zinc-200",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/components/ui.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            hint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-0.5 text-[10px] text-zinc-500",
                                children: hint
                            }, void 0, false, {
                                fileName: "[project]/components/ui.tsx",
                                lineNumber: 67,
                                columnNumber: 20
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    action
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
_c1 = Section;
function Slider({ label, sub, value, min = 0, max = 100, step = 1, suffix = "", onChange }) {
    const fill = (value - min) / (max - min) * 100;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "mb-3 block",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-1.5 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[11px] text-zinc-300",
                        children: [
                            label,
                            sub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-1 text-[9px] text-zinc-600",
                                children: sub
                            }, void 0, false, {
                                fileName: "[project]/components/ui.tsx",
                                lineNumber: 99,
                                columnNumber: 68
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "rounded bg-panel2 px-1.5 py-0.5 font-mono text-[10px] text-zinc-400",
                        children: [
                            Math.round(value),
                            suffix
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "range",
                className: "w-full",
                min: min,
                max: max,
                step: step,
                value: value,
                style: {
                    ["--fill"]: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(fill, 0, 100)}%`
                },
                onChange: (e)=>onChange(Number(e.target.value))
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
_c2 = Slider;
function ColorField({ label, value, onChange, compact = false }) {
    const isHex = /^#[0-9a-fA-F]{6}$/.test(value);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: `mb-2 flex items-center justify-between gap-2 ${compact ? "" : "rounded-lg border border-line bg-panel2 px-2.5 py-2"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[11px] text-zinc-300",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: "font-mono text-[10px] text-zinc-400 outline-none",
                        value: value,
                        onChange: (e)=>onChange(e.target.value),
                        "aria-label": `${label} hex`,
                        size: 9
                    }, void 0, false, {
                        fileName: "[project]/components/ui.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    isHex ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "color",
                        value: value,
                        onChange: (e)=>onChange(e.target.value),
                        className: "h-7 w-8 rounded-lg",
                        "aria-label": label
                    }, void 0, false, {
                        fileName: "[project]/components/ui.tsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "h-7 w-8 rounded-lg bg-zinc-600"
                    }, void 0, false, {
                        fileName: "[project]/components/ui.tsx",
                        lineNumber: 132,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
}
_c3 = ColorField;
function ColorGrid({ value, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-10 gap-1.5",
        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].map((color)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                title: color,
                onClick: ()=>onChange(color),
                className: `h-5 w-5 rounded-md border transition ${value.toLowerCase() === color.toLowerCase() ? "border-white ring-2 ring-brand" : "border-white/15 hover:scale-110"}`,
                style: {
                    background: color
                },
                "aria-label": `Color ${color}`
            }, color, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 143,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 141,
        columnNumber: 5
    }, this);
}
_c4 = ColorGrid;
function TextField({ label, value, onChange, placeholder, mono = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "mb-2 block",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mb-1 block text-[10px] uppercase tracking-wide text-zinc-500",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                className: `w-full rounded-lg border border-line bg-panel2 px-2.5 py-2 text-[12px] text-zinc-200 outline-none transition focus:border-brand ${mono ? "font-mono" : ""}`,
                value: value,
                placeholder: placeholder,
                onChange: (e)=>onChange(e.target.value)
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 159,
        columnNumber: 5
    }, this);
}
_c5 = TextField;
function NumberField({ label, value, onChange, min = 1, max = 10000, suffix }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "mb-2 block",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mb-1 block text-[10px] uppercase tracking-wide text-zinc-500",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "number",
                        className: "w-full rounded-lg border border-line bg-panel2 px-2.5 py-2 pr-9 font-mono text-[12px] text-zinc-200 outline-none transition focus:border-brand",
                        value: Number.isFinite(value) ? value : min,
                        min: min,
                        max: max,
                        onChange: (e)=>onChange((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(Number(e.target.value) || min, min, max))
                    }, void 0, false, {
                        fileName: "[project]/components/ui.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this),
                    suffix && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "pointer-events-none absolute right-2 top-2.5 text-[10px] text-zinc-500",
                        children: suffix
                    }, void 0, false, {
                        fileName: "[project]/components/ui.tsx",
                        lineNumber: 184,
                        columnNumber: 20
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 173,
        columnNumber: 5
    }, this);
}
_c6 = NumberField;
function SelectField({ label, value, options, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "mb-2 block",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mb-1 block text-[10px] uppercase tracking-wide text-zinc-500",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 193,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                className: "w-full appearance-none rounded-lg border border-line bg-panel2 px-2.5 py-2 text-[12px] text-zinc-200 outline-none transition focus:border-brand",
                value: value,
                onChange: (e)=>onChange(e.target.value),
                children: options.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: o.value,
                        children: o.label
                    }, o.value, false, {
                        fileName: "[project]/components/ui.tsx",
                        lineNumber: 199,
                        columnNumber: 29
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 194,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 192,
        columnNumber: 5
    }, this);
}
_c7 = SelectField;
function Toggle({ label, checked, onChange, hint }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: ()=>onChange(!checked),
        className: "mb-2 flex w-full items-center justify-between gap-3 rounded-lg border border-line bg-panel2 px-2.5 py-2 text-left",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "block text-[11px] text-zinc-300",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/components/ui.tsx",
                        lineNumber: 209,
                        columnNumber: 9
                    }, this),
                    hint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "block text-[9px] text-zinc-600",
                        children: hint
                    }, void 0, false, {
                        fileName: "[project]/components/ui.tsx",
                        lineNumber: 210,
                        columnNumber: 18
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 208,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `relative h-5 w-9 shrink-0 rounded-full transition ${checked ? "bg-brand" : "bg-zinc-700"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `absolute top-0.5 h-4 w-4 rounded-full bg-white transition-all ${checked ? "left-[18px]" : "left-0.5"}`
                }, void 0, false, {
                    fileName: "[project]/components/ui.tsx",
                    lineNumber: 213,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 212,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 207,
        columnNumber: 5
    }, this);
}
_c8 = Toggle;
function Button({ children, onClick, variant = "primary", className = "", title, disabled }) {
    const styles = {
        primary: "bg-gradient-to-r from-brand to-brand2 text-white hover:brightness-110 shadow-lg shadow-brand/20",
        ghost: "bg-panel2 text-zinc-300 hover:bg-zinc-700",
        outline: "border border-line bg-transparent text-zinc-300 hover:border-brand hover:text-white",
        danger: "bg-rose-600/15 text-rose-300 hover:bg-rose-600/25"
    }[variant];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        title: title,
        disabled: disabled,
        onClick: onClick,
        className: `inline-flex items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-[11px] font-medium transition disabled:cursor-not-allowed disabled:opacity-40 ${styles} ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 241,
        columnNumber: 5
    }, this);
}
_c9 = Button;
function IconButton({ name, onClick, active, title, size = 17, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        title: title,
        onClick: onClick,
        className: `inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition ${active ? "bg-brand/20 text-brand2 ring-1 ring-brand/50" : "text-zinc-400 hover:bg-white/5 hover:text-white"} ${className}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
            name: name,
            size: size
        }, void 0, false, {
            fileName: "[project]/components/ui.tsx",
            lineNumber: 261,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 255,
        columnNumber: 5
    }, this);
}
_c10 = IconButton;
function PillTabs({ value, options, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-3 flex flex-wrap gap-1.5",
        children: options.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>onChange(o.value),
                className: `rounded-md px-2.5 py-1.5 text-[10px] font-medium transition ${value === o.value ? "bg-brand text-white" : "bg-panel2 text-zinc-400 hover:text-white"}`,
                children: o.label
            }, o.value, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 270,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 268,
        columnNumber: 5
    }, this);
}
_c11 = PillTabs;
function FileInput({ label, accept, onFile, className = "" }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const change = (e)=>{
        const file = e.target.files?.[0];
        if (file) onFile(file);
        e.target.value = "";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: ref,
                type: "file",
                accept: accept,
                className: "hidden",
                onChange: change
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 292,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                variant: "outline",
                className: `w-full ${className}`,
                onClick: ()=>ref.current?.click(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                        name: "upload",
                        size: 14
                    }, void 0, false, {
                        fileName: "[project]/components/ui.tsx",
                        lineNumber: 293,
                        columnNumber: 104
                    }, this),
                    label
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 293,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 291,
        columnNumber: 5
    }, this);
}
_s(FileInput, "QMBuJFIdzLIeqBcFwhMf246mjOM=");
_c12 = FileInput;
function useOutside(onClose) {
    _s1();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useOutside.useEffect": ()=>{
            const handler = {
                "useOutside.useEffect.handler": (e)=>{
                    if (ref.current && !ref.current.contains(e.target)) onClose();
                }
            }["useOutside.useEffect.handler"];
            document.addEventListener("mousedown", handler);
            return ({
                "useOutside.useEffect": ()=>document.removeEventListener("mousedown", handler)
            })["useOutside.useEffect"];
        }
    }["useOutside.useEffect"], [
        onClose
    ]);
    return ref;
}
_s1(useOutside, "8uVE59eA/r6b92xF80p7sH8rXLk=");
function Dropdown({ open, children, className = "" }) {
    if (!open) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `absolute right-0 top-[calc(100%+8px)] z-50 w-[300px] animate-fadeup rounded-xl border border-line bg-[#18181f] p-2 shadow-2xl shadow-black/60 ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 313,
        columnNumber: 5
    }, this);
}
_c13 = Dropdown;
function ToastStack({ toasts }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pointer-events-none fixed bottom-5 left-1/2 z-[100] flex -translate-x-1/2 flex-col items-center gap-2",
        children: toasts.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `animate-fadeup rounded-full border px-4 py-2 text-[12px] font-medium shadow-xl backdrop-blur ${t.kind === "error" ? "border-rose-500/40 bg-rose-950/90 text-rose-200" : t.kind === "info" ? "border-sky-500/40 bg-sky-950/90 text-sky-200" : "border-emerald-500/40 bg-emerald-950/90 text-emerald-200"}`,
                children: t.text
            }, t.id, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 323,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 321,
        columnNumber: 5
    }, this);
}
_c14 = ToastStack;
function useLocalState(initial) {
    _s2();
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initial);
    return [
        value,
        setValue
    ];
}
_s2(useLocalState, "SfNoMBvK9aVYEr/zPo8IyelSSW4=");
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14;
__turbopack_context__.k.register(_c, "Icon");
__turbopack_context__.k.register(_c1, "Section");
__turbopack_context__.k.register(_c2, "Slider");
__turbopack_context__.k.register(_c3, "ColorField");
__turbopack_context__.k.register(_c4, "ColorGrid");
__turbopack_context__.k.register(_c5, "TextField");
__turbopack_context__.k.register(_c6, "NumberField");
__turbopack_context__.k.register(_c7, "SelectField");
__turbopack_context__.k.register(_c8, "Toggle");
__turbopack_context__.k.register(_c9, "Button");
__turbopack_context__.k.register(_c10, "IconButton");
__turbopack_context__.k.register(_c11, "PillTabs");
__turbopack_context__.k.register(_c12, "FileInput");
__turbopack_context__.k.register(_c13, "Dropdown");
__turbopack_context__.k.register(_c14, "ToastStack");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/art.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ART_FONT_STACK",
    ()=>ART_FONT_STACK,
    "BackgroundArt",
    ()=>BackgroundArt,
    "LayerArt",
    ()=>LayerArt,
    "SceneSvg",
    ()=>SceneSvg,
    "clampArt",
    ()=>clampArt,
    "svgMarkup",
    ()=>svgMarkup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/presets.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const FONT_STACK = {
    sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    display: '"Arial Black", "Helvetica Neue", Impact, sans-serif',
    serif: 'Georgia, "Times New Roman", serif',
    mono: '"SFMono-Regular", Consolas, "Liberation Mono", monospace',
    rounded: '"Trebuchet MS", "Segoe UI", sans-serif'
};
function BackgroundArt({ bg, W, H, time, prefix }) {
    const p = bg.pattern;
    const g = bg.gradient;
    const phase = time * 0.001 * (g.speed / 50);
    const shift = Math.sin(phase * 1.2) * 0.28;
    const gradientCoords = g.direction === "left-right" ? {
        x1: "0%",
        y1: "0%",
        x2: "100%",
        y2: "0%"
    } : g.direction === "diagonal" ? {
        x1: "0%",
        y1: "0%",
        x2: "100%",
        y2: "100%"
    } : {
        x1: "0%",
        y1: "0%",
        x2: "0%",
        y2: "100%"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: `${prefix}-bgrad`,
                        ...gradientCoords,
                        spreadMethod: "reflect",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: g.from
                            }, void 0, false, {
                                fileName: "[project]/lib/art.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: g.to
                            }, void 0, false, {
                                fileName: "[project]/lib/art.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/lib/art.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                        id: `${prefix}-bradial`,
                        cx: "50%",
                        cy: "45%",
                        r: "70%",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: g.from
                            }, void 0, false, {
                                fileName: "[project]/lib/art.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: g.to
                            }, void 0, false, {
                                fileName: "[project]/lib/art.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/lib/art.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                        id: `${prefix}-bblur`,
                        x: "-20%",
                        y: "-20%",
                        width: "140%",
                        height: "140%",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                stdDeviation: bg.image.blur
                            }, void 0, false, {
                                fileName: "[project]/lib/art.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feComponentTransfer", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feFuncR", {
                                        type: "linear",
                                        slope: bg.image.brightness / 100
                                    }, void 0, false, {
                                        fileName: "[project]/lib/art.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feFuncG", {
                                        type: "linear",
                                        slope: bg.image.brightness / 100
                                    }, void 0, false, {
                                        fileName: "[project]/lib/art.tsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feFuncB", {
                                        type: "linear",
                                        slope: bg.image.brightness / 100
                                    }, void 0, false, {
                                        fileName: "[project]/lib/art.tsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/lib/art.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/lib/art.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                        id: `${prefix}-glow`,
                        x: "-60%",
                        y: "-60%",
                        width: "220%",
                        height: "220%",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                stdDeviation: W * 0.012,
                                result: "b"
                            }, void 0, false, {
                                fileName: "[project]/lib/art.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMerge", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                        in: "b"
                                    }, void 0, false, {
                                        fileName: "[project]/lib/art.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                        in: "SourceGraphic"
                                    }, void 0, false, {
                                        fileName: "[project]/lib/art.tsx",
                                        lineNumber: 65,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/lib/art.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/lib/art.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/lib/art.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: W,
                height: H,
                fill: "#050508"
            }, void 0, false, {
                fileName: "[project]/lib/art.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            bg.type === "solid" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: W,
                height: H,
                fill: bg.color,
                opacity: bg.opacity / 100
            }, void 0, false, {
                fileName: "[project]/lib/art.tsx",
                lineNumber: 73,
                columnNumber: 9
            }, this),
            bg.type === "gradient" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    g.direction === "radial" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        width: W,
                        height: H,
                        fill: `url(#${prefix}-bradial)`,
                        opacity: g.intensity / 100,
                        transform: g.animated ? `translate(${shift * W * 0.2} ${shift * H * 0.2}) scale(${1 + Math.abs(shift) * 0.25})` : undefined
                    }, void 0, false, {
                        fileName: "[project]/lib/art.tsx",
                        lineNumber: 79,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        width: W,
                        height: H,
                        fill: `url(#${prefix}-bgrad)`,
                        opacity: g.intensity / 100,
                        transform: g.animated ? `translate(${shift * W} ${shift * H * 0.2})` : undefined
                    }, void 0, false, {
                        fileName: "[project]/lib/art.tsx",
                        lineNumber: 87,
                        columnNumber: 13
                    }, this),
                    g.animated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        width: W,
                        height: H,
                        fill: `url(#${prefix}-bradial)`,
                        opacity: Math.abs(shift) * 0.3
                    }, void 0, false, {
                        fileName: "[project]/lib/art.tsx",
                        lineNumber: 96,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/lib/art.tsx",
                lineNumber: 77,
                columnNumber: 9
            }, this),
            bg.type === "image" && bg.image.src && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("image", {
                href: bg.image.src,
                x: 0,
                y: bg.image.position === "top" ? -H * 0.04 : bg.image.position === "bottom" ? H * 0.04 : 0,
                width: W,
                height: H,
                preserveAspectRatio: bg.image.fit === "cover" ? `xMidY${bg.image.position === "top" ? "Min" : bg.image.position === "bottom" ? "Max" : "Mid"} slice` : bg.image.fit === "contain" ? "xMidYMid meet" : "none",
                opacity: bg.image.opacity / 100,
                filter: bg.image.blur > 0 || bg.image.brightness !== 100 ? `url(#${prefix}-bblur)` : undefined
            }, void 0, false, {
                fileName: "[project]/lib/art.tsx",
                lineNumber: 102,
                columnNumber: 9
            }, this),
            bg.type === "pattern" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PatternArt, {
                W: W,
                H: H,
                time: time,
                prefix: prefix,
                bg: bg
            }, void 0, false, {
                fileName: "[project]/lib/art.tsx",
                lineNumber: 121,
                columnNumber: 9
            }, this),
            bg.type === "video" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: W,
                height: H,
                fill: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixColors"])(p.color, p.accent, 0.45 + Math.sin(time * 0.002) * 0.1)
            }, void 0, false, {
                fileName: "[project]/lib/art.tsx",
                lineNumber: 125,
                columnNumber: 9
            }, this),
            bg.type !== "solid" && bg.opacity < 100 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: W,
                height: H,
                fill: "#000000",
                opacity: 1 - bg.opacity / 100,
                pointerEvents: "none"
            }, void 0, false, {
                fileName: "[project]/lib/art.tsx",
                lineNumber: 129,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/lib/art.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c = BackgroundArt;
function PatternArt({ bg, W, H, time, prefix }) {
    const p = bg.pattern;
    const speed = p.speed / 50;
    const t = time * 0.001 * speed;
    const gap = Math.max(p.gap, 24);
    const color = p.color;
    const accent = p.accent;
    if (p.kind === "dots") {
        const dots = [];
        const cols = Math.ceil(W / gap);
        const rows = Math.ceil(H / gap);
        for(let row = 0; row < rows; row++){
            for(let col = 0; col < cols; col++){
                const idx = row * cols + col;
                const wave = (Math.sin(t * 2 + idx * 0.35) + 1) / 2;
                dots.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: col * gap + gap / 2,
                    cy: row * gap + gap / 2 + Math.sin(t + col * 0.4) * gap * 0.12,
                    r: p.size / 2 * (0.55 + wave * 0.7),
                    fill: idx % 5 === 0 ? accent : color,
                    opacity: 0.12 + wave * 0.35
                }, idx, false, {
                    fileName: "[project]/lib/art.tsx",
                    lineNumber: 152,
                    columnNumber: 11
                }, this));
            }
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            children: dots
        }, void 0, false, {
            fileName: "[project]/lib/art.tsx",
            lineNumber: 163,
            columnNumber: 12
        }, this);
    }
    if (p.kind === "waves") {
        const paths = [];
        for(let row = 0; row < 7; row++){
            const baseY = H * (row + 1) / 8;
            let d = `M 0 ${baseY}`;
            for(let x = 0; x <= W + 40; x += 40){
                const y = baseY + Math.sin(x / W * Math.PI * 4 + t * 2 + row * 0.7) * (H * 0.018);
                d += ` L ${x} ${y}`;
            }
            paths.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: d,
                fill: "none",
                stroke: row % 2 === 0 ? color : accent,
                strokeWidth: W * 0.0025,
                opacity: 0.18 + row % 3 * 0.12,
                strokeLinecap: "round"
            }, row, false, {
                fileName: "[project]/lib/art.tsx",
                lineNumber: 176,
                columnNumber: 9
            }, this));
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            children: paths
        }, void 0, false, {
            fileName: "[project]/lib/art.tsx",
            lineNumber: 187,
            columnNumber: 12
        }, this);
    }
    if (p.kind === "neon") {
        const lines = [];
        for(let i = 0; i < 6; i++){
            const y = (i + 0.5) * H / 6 + Math.sin(t * 1.5 + i) * H * 0.02;
            const x = ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seededRandom"])(i + 3) * W * 0.5 + t * W * 0.04) % (W * 1.2);
            lines.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                filter: `url(#${prefix}-glow)`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: x - W * 0.2,
                        y: y,
                        width: W * (0.25 + (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seededRandom"])(i) * 0.3),
                        height: W * 0.004,
                        rx: W * 0.002,
                        fill: i % 2 ? color : accent,
                        opacity: 0.5 + Math.sin(t * 3 + i) * 0.25
                    }, void 0, false, {
                        fileName: "[project]/lib/art.tsx",
                        lineNumber: 197,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: x + W * 0.1,
                        cy: y,
                        r: W * 0.006,
                        fill: "#FFFFFF",
                        opacity: 0.75
                    }, void 0, false, {
                        fileName: "[project]/lib/art.tsx",
                        lineNumber: 198,
                        columnNumber: 11
                    }, this)
                ]
            }, i, true, {
                fileName: "[project]/lib/art.tsx",
                lineNumber: 196,
                columnNumber: 9
            }, this));
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            children: lines
        }, void 0, false, {
            fileName: "[project]/lib/art.tsx",
            lineNumber: 202,
            columnNumber: 12
        }, this);
    }
    if (p.kind === "particles") {
        const dots = [];
        const count = Math.min(Math.max(p.count, 8), 120);
        for(let i = 0; i < count; i++){
            const sx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seededRandom"])(i * 2 + 1);
            const sy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seededRandom"])(i * 2 + 2);
            const x = sx * W;
            const y = (sy * H + t * H * 0.02 * (0.4 + sx)) % H;
            const r = p.size * (0.4 + (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seededRandom"])(i + 9) * 0.9);
            dots.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: x,
                cy: y,
                r: r,
                fill: i % 4 === 0 ? accent : color,
                opacity: 0.25 + (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seededRandom"])(i + 20) * 0.6
            }, i, false, {
                fileName: "[project]/lib/art.tsx",
                lineNumber: 215,
                columnNumber: 9
            }, this));
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            children: dots
        }, void 0, false, {
            fileName: "[project]/lib/art.tsx",
            lineNumber: 218,
            columnNumber: 12
        }, this);
    }
    if (p.kind === "grid") {
        const lines = [];
        for(let x = 0; x <= W; x += gap * 2)lines.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
            x1: x,
            y1: 0,
            x2: x,
            y2: H,
            stroke: color,
            strokeWidth: W * 0.001,
            opacity: 0.2
        }, `v${x}`, false, {
            fileName: "[project]/lib/art.tsx",
            lineNumber: 223,
            columnNumber: 54
        }, this));
        for(let y = 0; y <= H; y += gap * 2)lines.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
            x1: 0,
            y1: y,
            x2: W,
            y2: y,
            stroke: color,
            strokeWidth: W * 0.001,
            opacity: 0.2
        }, `h${y}`, false, {
            fileName: "[project]/lib/art.tsx",
            lineNumber: 224,
            columnNumber: 54
        }, this));
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            children: lines
        }, void 0, false, {
            fileName: "[project]/lib/art.tsx",
            lineNumber: 225,
            columnNumber: 12
        }, this);
    }
    const rings = [];
    for(let i = 0; i < 8; i++){
        const r = (i * gap * 1.5 + t * 60) % (W * 0.9) + W * 0.02;
        rings.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: W / 2,
            cy: H / 2,
            r: r,
            fill: "none",
            stroke: i % 2 ? color : accent,
            strokeWidth: W * 0.002,
            opacity: 0.3
        }, i, false, {
            fileName: "[project]/lib/art.tsx",
            lineNumber: 231,
            columnNumber: 16
        }, this));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        children: rings
    }, void 0, false, {
        fileName: "[project]/lib/art.tsx",
        lineNumber: 233,
        columnNumber: 10
    }, this);
}
_c1 = PatternArt;
function motionFor(layer, time, boxW, boxH) {
    const t = time * 0.001 * layer.animSpeed;
    let dy = 0;
    const dx = 0;
    let rot = 0;
    let scale = 1;
    switch(layer.animation){
        case "walk":
            dy = -Math.abs(Math.sin(t * 8)) * boxH * 0.015;
            rot = Math.sin(t * 8) * 1.6;
            break;
        case "wave":
            dy = Math.sin(t * 3) * boxH * 0.008;
            rot = Math.sin(t * 8) * 2;
            break;
        case "jump":
            dy = -Math.abs(Math.sin(t * 4.5)) * boxH * 0.1;
            break;
        case "talk":
            dy = Math.sin(t * 12) * boxH * 0.008;
            rot = Math.sin(t * 6) * 1.2;
            break;
        case "float":
            dy = Math.sin(t * 2.2) * boxH * 0.035;
            break;
        case "pulse":
            scale = 1 + Math.sin(t * 5) * 0.045;
            break;
        case "spin":
            rot = t * 55;
            break;
        case "wiggle":
            rot = Math.sin(t * 7) * 6;
            break;
        default:
            break;
    }
    return {
        dx,
        dy,
        rot,
        scale
    };
}
function LayerArt({ layer, W, H, time, prefix }) {
    const boxW = layer.w / 100 * W;
    const boxH = layer.h / 100 * H;
    const px = layer.x / 100 * W;
    const py = layer.y / 100 * H;
    const m = motionFor(layer, time, boxW, boxH);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        transform: `translate(${px + m.dx} ${py + m.dy}) rotate(${layer.rot + m.rot}) scale(${m.scale})`,
        opacity: layer.opacity / 100,
        style: {
            pointerEvents: layer.visible ? "auto" : "none"
        },
        children: [
            layer.kind === "text" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextArt, {
                layer: layer,
                W: W,
                boxW: boxW,
                prefix: prefix
            }, void 0, false, {
                fileName: "[project]/lib/art.tsx",
                lineNumber: 295,
                columnNumber: 33
            }, this),
            layer.kind === "character" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CharacterArt, {
                layer: layer,
                boxW: boxW,
                boxH: boxH,
                time: time,
                prefix: prefix
            }, void 0, false, {
                fileName: "[project]/lib/art.tsx",
                lineNumber: 296,
                columnNumber: 38
            }, this),
            layer.kind === "finance" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FinanceArt, {
                layer: layer,
                boxW: boxW,
                boxH: boxH,
                time: time,
                prefix: prefix
            }, void 0, false, {
                fileName: "[project]/lib/art.tsx",
                lineNumber: 297,
                columnNumber: 36
            }, this),
            layer.kind === "image" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImageArt, {
                layer: layer,
                boxW: boxW,
                boxH: boxH,
                prefix: prefix
            }, void 0, false, {
                fileName: "[project]/lib/art.tsx",
                lineNumber: 298,
                columnNumber: 34
            }, this),
            layer.kind === "shape" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShapeArt, {
                layer: layer,
                boxW: boxW,
                boxH: boxH,
                prefix: prefix
            }, void 0, false, {
                fileName: "[project]/lib/art.tsx",
                lineNumber: 299,
                columnNumber: 34
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/lib/art.tsx",
        lineNumber: 290,
        columnNumber: 5
    }, this);
}
_c2 = LayerArt;
function TextArt({ layer, W, boxW, prefix }) {
    const size = layer.size / 100 * W;
    const lines = layer.text.split("\n");
    const longest = lines.reduce((a, b)=>b.length > a.length ? b : a, "");
    const approxWidth = longest.length * size * 0.56 + size * 0.4;
    const pillW = Math.min(boxW, approxWidth + layer.pill.padding / 100 * W);
    const lineStep = size * layer.lineHeight;
    const totalH = lineStep * lines.length;
    const anchor = layer.align === "left" ? "start" : layer.align === "right" ? "end" : "middle";
    const textX = layer.align === "left" ? -boxW / 2 : layer.align === "right" ? boxW / 2 : 0;
    const firstY = -totalH / 2 + size * 0.86;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: `${prefix}-txtgrad`,
                        x1: "0%",
                        y1: "0%",
                        x2: "100%",
                        y2: "0%",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: layer.gradient.from
                            }, void 0, false, {
                                fileName: "[project]/lib/art.tsx",
                                lineNumber: 320,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: layer.gradient.to
                            }, void 0, false, {
                                fileName: "[project]/lib/art.tsx",
                                lineNumber: 321,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/lib/art.tsx",
                        lineNumber: 319,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                        id: `${prefix}-txtshadow`,
                        x: "-50%",
                        y: "-50%",
                        width: "200%",
                        height: "200%",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feDropShadow", {
                            dx: layer.shadow.dx,
                            dy: layer.shadow.dy,
                            stdDeviation: layer.shadow.blur / 2,
                            floodColor: layer.shadow.color,
                            floodOpacity: "0.8"
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 324,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/lib/art.tsx",
                        lineNumber: 323,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                        id: `${prefix}-txtglow`,
                        x: "-70%",
                        y: "-70%",
                        width: "240%",
                        height: "240%",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                stdDeviation: layer.glow.blur / 2,
                                result: "g"
                            }, void 0, false, {
                                fileName: "[project]/lib/art.tsx",
                                lineNumber: 327,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMerge", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                        in: "g"
                                    }, void 0, false, {
                                        fileName: "[project]/lib/art.tsx",
                                        lineNumber: 329,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                        in: "SourceGraphic"
                                    }, void 0, false, {
                                        fileName: "[project]/lib/art.tsx",
                                        lineNumber: 330,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/lib/art.tsx",
                                lineNumber: 328,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/lib/art.tsx",
                        lineNumber: 326,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/lib/art.tsx",
                lineNumber: 318,
                columnNumber: 7
            }, this),
            layer.pill.enabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: -pillW / 2,
                y: -totalH / 2 - size * 0.18,
                width: pillW,
                height: totalH + size * 0.36,
                rx: (totalH + size * 0.36) / 2,
                fill: layer.pill.color,
                opacity: layer.pill.opacity / 100
            }, void 0, false, {
                fileName: "[project]/lib/art.tsx",
                lineNumber: 335,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: textX,
                y: firstY,
                fill: layer.gradient.enabled ? `url(#${prefix}-txtgrad)` : layer.color,
                fontFamily: FONT_STACK[layer.font],
                fontSize: size,
                fontWeight: layer.weight,
                fontStyle: layer.italic ? "italic" : "normal",
                textAnchor: anchor,
                letterSpacing: layer.letterSpacing / 100 * W,
                stroke: layer.border.enabled ? layer.border.color : "none",
                strokeWidth: layer.border.enabled ? layer.border.width / 1000 * W : 0,
                paintOrder: "stroke",
                filter: layer.glow.enabled ? `url(#${prefix}-txtglow)` : layer.shadow.enabled ? `url(#${prefix}-txtshadow)` : undefined,
                style: {
                    userSelect: "none"
                },
                children: lines.map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tspan", {
                        x: textX,
                        dy: i === 0 ? 0 : lineStep,
                        children: line
                    }, i, false, {
                        fileName: "[project]/lib/art.tsx",
                        lineNumber: 368,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/lib/art.tsx",
                lineNumber: 345,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/lib/art.tsx",
        lineNumber: 317,
        columnNumber: 5
    }, this);
}
_c3 = TextArt;
function CharacterArt({ layer, boxW, boxH, time, prefix }) {
    const def = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findCharacter"])(layer.charId);
    const scale = Math.min(boxW / 110, boxH / 180);
    const t = time * 0.001 * layer.animSpeed;
    const animation = layer.animation;
    let legSwing = 0;
    let armSwing = 0;
    let waveAngle = 0;
    let mouthScale = 1;
    let eyeScale = 1;
    let bodyRot = 0;
    switch(animation){
        case "walk":
            legSwing = Math.sin(t * 8) * 20;
            armSwing = -legSwing * 0.7;
            break;
        case "wave":
            waveAngle = -32 + Math.sin(t * 9) * 20;
            armSwing = 6;
            break;
        case "jump":
            legSwing = -14;
            armSwing = -32;
            break;
        case "talk":
            mouthScale = 0.5 + Math.abs(Math.sin(t * 12)) * 1.1;
            break;
        case "blink":
            eyeScale = Math.sin(t * 2) > 0.96 ? 0.12 : 1;
            break;
        case "wiggle":
            bodyRot = Math.sin(t * 7) * 6;
            break;
        default:
            break;
    }
    const hairBack = def.variant === 3 || def.variant === 4 || def.variant === 6 || def.variant === 8 || def.variant === 10;
    const skin = layer.skin;
    const shirt = layer.shirt;
    const hair = layer.hair;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        transform: `scale(${scale}) translate(-55 -90)`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: `${prefix}-shirt`,
                        x1: "0%",
                        y1: "0%",
                        x2: "100%",
                        y2: "100%",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: shirt
                            }, void 0, false, {
                                fileName: "[project]/lib/art.tsx",
                                lineNumber: 430,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixColors"])(shirt, "#000000", 0.35)
                            }, void 0, false, {
                                fileName: "[project]/lib/art.tsx",
                                lineNumber: 431,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/lib/art.tsx",
                        lineNumber: 429,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: `${prefix}-skin`,
                        x1: "0%",
                        y1: "0%",
                        x2: "100%",
                        y2: "100%",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixColors"])(skin, "#FFFFFF", 0.22)
                            }, void 0, false, {
                                fileName: "[project]/lib/art.tsx",
                                lineNumber: 434,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: skin
                            }, void 0, false, {
                                fileName: "[project]/lib/art.tsx",
                                lineNumber: 435,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/lib/art.tsx",
                        lineNumber: 433,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/lib/art.tsx",
                lineNumber: 428,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "55",
                cy: "174",
                rx: "34",
                ry: "6",
                fill: "#000000",
                opacity: "0.22"
            }, void 0, false, {
                fileName: "[project]/lib/art.tsx",
                lineNumber: 439,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                transform: `translate(41 128) rotate(${legSwing}) translate(-41 -128)`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "34",
                        y: "124",
                        width: "17",
                        height: "47",
                        rx: "8",
                        fill: "#1E293B"
                    }, void 0, false, {
                        fileName: "[project]/lib/art.tsx",
                        lineNumber: 442,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "30",
                        y: "165",
                        width: "25",
                        height: "10",
                        rx: "5",
                        fill: "#111827"
                    }, void 0, false, {
                        fileName: "[project]/lib/art.tsx",
                        lineNumber: 443,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/lib/art.tsx",
                lineNumber: 441,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                transform: `translate(69 128) rotate(${-legSwing}) translate(-69 -128)`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "49",
                        y: "124",
                        width: "17",
                        height: "47",
                        rx: "8",
                        fill: "#1E293B"
                    }, void 0, false, {
                        fileName: "[project]/lib/art.tsx",
                        lineNumber: 446,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "45",
                        y: "165",
                        width: "25",
                        height: "10",
                        rx: "5",
                        fill: "#111827"
                    }, void 0, false, {
                        fileName: "[project]/lib/art.tsx",
                        lineNumber: 447,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/lib/art.tsx",
                lineNumber: 445,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                transform: `rotate(${bodyRot} 55 105)`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        transform: `translate(30 84) rotate(${armSwing}) translate(-30 -84)`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "22",
                                y: "80",
                                width: "15",
                                height: "48",
                                rx: "7",
                                fill: `url(#${prefix}-shirt)`
                            }, void 0, false, {
                                fileName: "[project]/lib/art.tsx",
                                lineNumber: 452,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "29",
                                cy: "131",
                                r: "8",
                                fill: `url(#${prefix}-skin)`
                            }, void 0, false, {
                                fileName: "[project]/lib/art.tsx",
                                lineNumber: 453,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/lib/art.tsx",
                        lineNumber: 451,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        transform: `translate(80 84) rotate(${waveAngle}) translate(-80 -84)`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "63",
                                y: "80",
                                width: "15",
                                height: "48",
                                rx: "7",
                                fill: `url(#${prefix}-shirt)`
                            }, void 0, false, {
                                fileName: "[project]/lib/art.tsx",
                                lineNumber: 456,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "70",
                                cy: "131",
                                r: "8",
                                fill: `url(#${prefix}-skin)`
                            }, void 0, false, {
                                fileName: "[project]/lib/art.tsx",
                                lineNumber: 457,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/lib/art.tsx",
                        lineNumber: 455,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M 30 80 Q 55 68 80 80 L 85 133 Q 55 145 25 133 Z",
                        fill: `url(#${prefix}-shirt)`
                    }, void 0, false, {
                        fileName: "[project]/lib/art.tsx",
                        lineNumber: 460,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M 47 72 L 63 72 L 63 86 L 47 86 Z",
                        fill: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixColors"])(skin, "#000000", 0.1)
                    }, void 0, false, {
                        fileName: "[project]/lib/art.tsx",
                        lineNumber: 461,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M 55 80 L 55 132",
                        stroke: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixColors"])(shirt, "#FFFFFF", 0.22),
                        strokeWidth: "2",
                        opacity: "0.6"
                    }, void 0, false, {
                        fileName: "[project]/lib/art.tsx",
                        lineNumber: 462,
                        columnNumber: 9
                    }, this),
                    def.variant === 11 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M 30 80 L 55 108 L 80 80 L 78 133 L 32 133 Z",
                        fill: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixColors"])(shirt, "#FFFFFF", 0.35),
                        opacity: "0.5"
                    }, void 0, false, {
                        fileName: "[project]/lib/art.tsx",
                        lineNumber: 465,
                        columnNumber: 11
                    }, this),
                    layer.accessory === "tie" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M 55 83 L 61 92 L 57 122 L 55 126 L 53 122 L 49 92 Z",
                        fill: "#DC2626"
                    }, void 0, false, {
                        fileName: "[project]/lib/art.tsx",
                        lineNumber: 468,
                        columnNumber: 11
                    }, this),
                    layer.accessory === "dupatta" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M 34 80 Q 55 96 78 80 L 82 104 Q 55 120 28 104 Z",
                        fill: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixColors"])(shirt, "#FFFFFF", 0.45),
                        opacity: "0.9"
                    }, void 0, false, {
                        fileName: "[project]/lib/art.tsx",
                        lineNumber: 471,
                        columnNumber: 11
                    }, this),
                    hairBack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M 27 40 Q 25 92 38 106 L 42 84 L 68 84 L 72 106 Q 85 92 83 40 Z",
                        fill: hair
                    }, void 0, false, {
                        fileName: "[project]/lib/art.tsx",
                        lineNumber: 475,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        cx: "27",
                        cy: "44",
                        rx: "5",
                        ry: "8",
                        fill: skin
                    }, void 0, false, {
                        fileName: "[project]/lib/art.tsx",
                        lineNumber: 478,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        cx: "83",
                        cy: "44",
                        rx: "5",
                        ry: "8",
                        fill: skin
                    }, void 0, false, {
                        fileName: "[project]/lib/art.tsx",
                        lineNumber: 479,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        cx: "55",
                        cy: "41",
                        rx: "27",
                        ry: "31",
                        fill: `url(#${prefix}-skin)`
                    }, void 0, false, {
                        fileName: "[project]/lib/art.tsx",
                        lineNumber: 480,
                        columnNumber: 9
                    }, this),
                    def.variant === 2 || def.variant === 11 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M 29 32 Q 55 8 81 32 Q 55 22 29 32 Z",
                                fill: hair
                            }, void 0, false, {
                                fileName: "[project]/lib/art.tsx",
                                lineNumber: 484,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M 29 38 Q 24 52 30 62 L 33 48 Z",
                                fill: hair
                            }, void 0, false, {
                                fileName: "[project]/lib/art.tsx",
                                lineNumber: 485,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M 81 38 Q 86 52 80 62 L 77 48 Z",
                                fill: hair
                            }, void 0, false, {
                                fileName: "[project]/lib/art.tsx",
                                lineNumber: 486,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/lib/art.tsx",
                        lineNumber: 483,
                        columnNumber: 11
                    }, this) : def.variant === 7 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M 27 34 Q 55 8 83 34 Z",
                        fill: "#111827"
                    }, void 0, false, {
                        fileName: "[project]/lib/art.tsx",
                        lineNumber: 489,
                        columnNumber: 11
                    }, this) : def.variant === 9 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M 26 30 Q 55 2 84 30 Q 55 18 26 30 Z",
                                fill: "#B91C1C"
                            }, void 0, false, {
                                fileName: "[project]/lib/art.tsx",
                                lineNumber: 492,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M 27 26 Q 55 10 83 26",
                                fill: "none",
                                stroke: "#FCA5A5",
                                strokeWidth: "3"
                            }, void 0, false, {
                                fileName: "[project]/lib/art.tsx",
                                lineNumber: 493,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/lib/art.tsx",
                        lineNumber: 491,
                        columnNumber: 11
                    }, this) : def.variant === 10 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "55",
                                cy: "8",
                                r: "11",
                                fill: hair
                            }, void 0, false, {
                                fileName: "[project]/lib/art.tsx",
                                lineNumber: 497,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M 28 34 Q 55 12 82 34 Q 55 24 28 34 Z",
                                fill: hair
                            }, void 0, false, {
                                fileName: "[project]/lib/art.tsx",
                                lineNumber: 498,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/lib/art.tsx",
                        lineNumber: 496,
                        columnNumber: 11
                    }, this) : def.variant === 6 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M 28 33 Q 55 7 82 33 Q 55 21 28 33 Z",
                                fill: hair
                            }, void 0, false, {
                                fileName: "[project]/lib/art.tsx",
                                lineNumber: 502,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                cx: "86",
                                cy: "52",
                                rx: "9",
                                ry: "19",
                                fill: hair
                            }, void 0, false, {
                                fileName: "[project]/lib/art.tsx",
                                lineNumber: 503,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/lib/art.tsx",
                        lineNumber: 501,
                        columnNumber: 11
                    }, this) : def.variant === 8 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M 27 33 Q 55 7 83 33 Q 55 22 27 33 Z",
                                fill: hair
                            }, void 0, false, {
                                fileName: "[project]/lib/art.tsx",
                                lineNumber: 507,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M 83 34 Q 92 62 80 92",
                                fill: "none",
                                stroke: hair,
                                strokeWidth: "9",
                                strokeLinecap: "round"
                            }, void 0, false, {
                                fileName: "[project]/lib/art.tsx",
                                lineNumber: 508,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/lib/art.tsx",
                        lineNumber: 506,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M 28 34 Q 55 6 82 34 Q 70 24 55 25 Q 40 24 28 34 Z",
                        fill: hair
                    }, void 0, false, {
                        fileName: "[project]/lib/art.tsx",
                        lineNumber: 511,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        transform: `translate(45 41) scale(1 ${eyeScale}) translate(-45 -41)`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                cx: "45",
                                cy: "41",
                                rx: "3.4",
                                ry: "4",
                                fill: "#18181B"
                            }, void 0, false, {
                                fileName: "[project]/lib/art.tsx",
                                lineNumber: 515,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "46",
                                cy: "39.5",
                                r: "1.1",
                                fill: "#FFFFFF"
                            }, void 0, false, {
                                fileName: "[project]/lib/art.tsx",
                                lineNumber: 516,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/lib/art.tsx",
                        lineNumber: 514,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        transform: `translate(65 41) scale(1 ${eyeScale}) translate(-65 -41)`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                cx: "65",
                                cy: "41",
                                rx: "3.4",
                                ry: "4",
                                fill: "#18181B"
                            }, void 0, false, {
                                fileName: "[project]/lib/art.tsx",
                                lineNumber: 519,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "66",
                                cy: "39.5",
                                r: "1.1",
                                fill: "#FFFFFF"
                            }, void 0, false, {
                                fileName: "[project]/lib/art.tsx",
                                lineNumber: 520,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/lib/art.tsx",
                        lineNumber: 518,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M 40 33 Q 45 30 50 33",
                        stroke: hair,
                        strokeWidth: "2",
                        fill: "none",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/lib/art.tsx",
                        lineNumber: 522,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M 60 33 Q 65 30 70 33",
                        stroke: hair,
                        strokeWidth: "2",
                        fill: "none",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/lib/art.tsx",
                        lineNumber: 523,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M 54 44 Q 51 52 56 53",
                        stroke: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixColors"])(skin, "#000000", 0.3),
                        strokeWidth: "2",
                        fill: "none",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/lib/art.tsx",
                        lineNumber: 524,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        cx: "55",
                        cy: "60",
                        rx: 7 * mouthScale,
                        ry: 2.6 * mouthScale,
                        fill: "#9F1239"
                    }, void 0, false, {
                        fileName: "[project]/lib/art.tsx",
                        lineNumber: 526,
                        columnNumber: 9
                    }, this),
                    (layer.accessory === "moustache" || layer.accessory === "glasses-beard") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M 44 55 Q 55 50 66 55 Q 55 61 44 55 Z",
                        fill: def.variant === 11 ? "#D4D4D8" : hair
                    }, void 0, false, {
                        fileName: "[project]/lib/art.tsx",
                        lineNumber: 529,
                        columnNumber: 11
                    }, this),
                    layer.accessory === "glasses-beard" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M 36 60 Q 55 77 74 60 Q 70 72 55 73 Q 40 72 36 60 Z",
                                fill: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixColors"])(hair, "#FFFFFF", 0.25),
                                opacity: "0.9"
                            }, void 0, false, {
                                fileName: "[project]/lib/art.tsx",
                                lineNumber: 533,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "45",
                                cy: "41",
                                r: "9",
                                fill: "none",
                                stroke: "#334155",
                                strokeWidth: "2"
                            }, void 0, false, {
                                fileName: "[project]/lib/art.tsx",
                                lineNumber: 534,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "65",
                                cy: "41",
                                r: "9",
                                fill: "none",
                                stroke: "#334155",
                                strokeWidth: "2"
                            }, void 0, false, {
                                fileName: "[project]/lib/art.tsx",
                                lineNumber: 535,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M 54 41 L 56 41",
                                stroke: "#334155",
                                strokeWidth: "2"
                            }, void 0, false, {
                                fileName: "[project]/lib/art.tsx",
                                lineNumber: 536,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/lib/art.tsx",
                        lineNumber: 532,
                        columnNumber: 11
                    }, this),
                    layer.accessory === "glasses-bun" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "45",
                                cy: "41",
                                r: "9",
                                fill: "none",
                                stroke: "#7C3AED",
                                strokeWidth: "2"
                            }, void 0, false, {
                                fileName: "[project]/lib/art.tsx",
                                lineNumber: 541,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "65",
                                cy: "41",
                                r: "9",
                                fill: "none",
                                stroke: "#7C3AED",
                                strokeWidth: "2"
                            }, void 0, false, {
                                fileName: "[project]/lib/art.tsx",
                                lineNumber: 542,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M 54 41 L 56 41",
                                stroke: "#7C3AED",
                                strokeWidth: "2"
                            }, void 0, false, {
                                fileName: "[project]/lib/art.tsx",
                                lineNumber: 543,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/lib/art.tsx",
                        lineNumber: 540,
                        columnNumber: 11
                    }, this),
                    (layer.accessory === "bindi" || def.variant === 3 || def.variant === 4 || def.variant === 8) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "55",
                        cy: "29",
                        r: "2.6",
                        fill: "#E11D48"
                    }, void 0, false, {
                        fileName: "[project]/lib/art.tsx",
                        lineNumber: 547,
                        columnNumber: 11
                    }, this),
                    layer.accessory === "cap" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M 27 33 Q 55 10 83 33 Z",
                                fill: "#0284C7"
                            }, void 0, false, {
                                fileName: "[project]/lib/art.tsx",
                                lineNumber: 551,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M 55 31 Q 72 28 90 34 Q 72 39 55 34 Z",
                                fill: "#0369A1"
                            }, void 0, false, {
                                fileName: "[project]/lib/art.tsx",
                                lineNumber: 552,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/lib/art.tsx",
                        lineNumber: 550,
                        columnNumber: 11
                    }, this),
                    layer.accessory === "turban" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M 24 33 Q 55 4 86 33 Q 55 21 24 33 Z",
                                fill: "#B91C1C"
                            }, void 0, false, {
                                fileName: "[project]/lib/art.tsx",
                                lineNumber: 557,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M 28 27 Q 55 12 82 27",
                                fill: "none",
                                stroke: "#FCA5A5",
                                strokeWidth: "3"
                            }, void 0, false, {
                                fileName: "[project]/lib/art.tsx",
                                lineNumber: 558,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M 80 30 Q 90 44 82 58",
                                fill: "none",
                                stroke: "#B91C1C",
                                strokeWidth: "8"
                            }, void 0, false, {
                                fileName: "[project]/lib/art.tsx",
                                lineNumber: 559,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/lib/art.tsx",
                        lineNumber: 556,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/lib/art.tsx",
                lineNumber: 450,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: def.name
            }, void 0, false, {
                fileName: "[project]/lib/art.tsx",
                lineNumber: 563,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/lib/art.tsx",
        lineNumber: 427,
        columnNumber: 5
    }, this);
}
_c4 = CharacterArt;
function FinanceArt({ layer, boxW, boxH, time, prefix }) {
    const kind = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["financeKind"])(layer.objectId);
    const scale = Math.min(boxW / 100, boxH / 100);
    const primary = layer.primary;
    const secondary = layer.secondary;
    const t = time * 0.001;
    const body = (()=>{
        switch(kind){
            case "house":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M 12 46 L 50 14 L 88 46 Z",
                            fill: secondary
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 592,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "20",
                            y: "44",
                            width: "60",
                            height: "44",
                            rx: "3",
                            fill: primary
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 593,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "43",
                            y: "58",
                            width: "14",
                            height: "30",
                            rx: "2",
                            fill: secondary
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 594,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "26",
                            y: "53",
                            width: "12",
                            height: "12",
                            rx: "2",
                            fill: "#BAE6FD",
                            stroke: "#FFFFFF",
                            strokeWidth: "2"
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 595,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "62",
                            y: "53",
                            width: "12",
                            height: "12",
                            rx: "2",
                            fill: "#BAE6FD",
                            stroke: "#FFFFFF",
                            strokeWidth: "2"
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 596,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "70",
                            y: "20",
                            width: "8",
                            height: "18",
                            fill: secondary
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 597,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "49",
                            cy: "73",
                            r: "1.8",
                            fill: "#FFFFFF"
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 598,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/lib/art.tsx",
                    lineNumber: 591,
                    columnNumber: 11
                }, this);
            case "car":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M 10 60 Q 14 48 28 46 L 38 32 Q 41 28 48 28 L 68 28 Q 74 28 78 34 L 87 48 Q 94 50 94 60 L 94 70 L 10 70 Z",
                            fill: primary
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 604,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M 40 34 L 48 34 L 46 46 L 32 46 Z",
                            fill: "#BAE6FD"
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 605,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M 52 34 L 67 34 Q 71 34 74 39 L 80 46 L 52 46 Z",
                            fill: "#BAE6FD"
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 606,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "10",
                            y: "60",
                            width: "84",
                            height: "4",
                            fill: secondary,
                            opacity: "0.7"
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 607,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "28",
                            cy: "70",
                            r: "11",
                            fill: "#18181B"
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 608,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "28",
                            cy: "70",
                            r: "4.5",
                            fill: "#D4D4D8"
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 609,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "76",
                            cy: "70",
                            r: "11",
                            fill: "#18181B"
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 610,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "76",
                            cy: "70",
                            r: "4.5",
                            fill: "#D4D4D8"
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 611,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "91",
                            cy: "63",
                            r: "3",
                            fill: "#FEF08A"
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 612,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/lib/art.tsx",
                    lineNumber: 603,
                    columnNumber: 11
                }, this);
            case "bank":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M 50 12 L 92 32 L 8 32 Z",
                            fill: secondary
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 618,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "12",
                            y: "34",
                            width: "76",
                            height: "7",
                            rx: "2",
                            fill: primary
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 619,
                            columnNumber: 13
                        }, this),
                        [
                            18,
                            34,
                            50,
                            66,
                            82
                        ].map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: x,
                                y: "43",
                                width: "8",
                                height: "38",
                                rx: "2",
                                fill: primary
                            }, x, false, {
                                fileName: "[project]/lib/art.tsx",
                                lineNumber: 621,
                                columnNumber: 15
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "10",
                            y: "83",
                            width: "80",
                            height: "7",
                            rx: "2",
                            fill: secondary
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 623,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "6",
                            y: "91",
                            width: "88",
                            height: "5",
                            rx: "2",
                            fill: primary
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 624,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/lib/art.tsx",
                    lineNumber: 617,
                    columnNumber: 11
                }, this);
            case "fd":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "12",
                            y: "16",
                            width: "76",
                            height: "68",
                            rx: "6",
                            fill: "#FEF3C7",
                            stroke: secondary,
                            strokeWidth: "3"
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 630,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "18",
                            y: "22",
                            width: "64",
                            height: "14",
                            rx: "3",
                            fill: primary
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 631,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "50",
                            y: "33",
                            textAnchor: "middle",
                            fontSize: "10",
                            fontWeight: "800",
                            fill: "#FFFFFF",
                            children: "FD CERTIFICATE"
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 632,
                            columnNumber: 13
                        }, this),
                        [
                            46,
                            56,
                            66
                        ].map((y, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "20",
                                y: y,
                                width: i === 2 ? 42 : 58,
                                height: "3.5",
                                rx: "1.7",
                                fill: secondary,
                                opacity: "0.55"
                            }, y, false, {
                                fileName: "[project]/lib/art.tsx",
                                lineNumber: 634,
                                columnNumber: 15
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "76",
                            cy: "70",
                            r: "10",
                            fill: "none",
                            stroke: secondary,
                            strokeWidth: "2.5"
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 636,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "76",
                            y: "75",
                            textAnchor: "middle",
                            fontSize: "12",
                            fontWeight: "800",
                            fill: secondary,
                            children: "₹"
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 637,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/lib/art.tsx",
                    lineNumber: 629,
                    columnNumber: 11
                }, this);
            case "loan":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "14",
                            y: "14",
                            width: "72",
                            height: "72",
                            rx: "8",
                            fill: "#FFFFFF",
                            stroke: primary,
                            strokeWidth: "3"
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 643,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "14",
                            y: "14",
                            width: "72",
                            height: "18",
                            rx: "8",
                            fill: primary
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 644,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "50",
                            y: "27",
                            textAnchor: "middle",
                            fontSize: "9",
                            fontWeight: "800",
                            fill: "#FFFFFF",
                            children: "LOAN APPROVED"
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 645,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M 30 56 L 44 70 L 72 40",
                            fill: "none",
                            stroke: secondary,
                            strokeWidth: "9",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 646,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "50",
                            cy: "56",
                            r: "30",
                            fill: "none",
                            stroke: primary,
                            strokeWidth: "1",
                            opacity: "0.4"
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 647,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/lib/art.tsx",
                    lineNumber: 642,
                    columnNumber: 11
                }, this);
            case "coin":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "50",
                            cy: "76",
                            rx: "34",
                            ry: "12",
                            fill: secondary
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 653,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "16",
                            y: "30",
                            width: "68",
                            height: "46",
                            fill: primary
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 654,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "50",
                            cy: "30",
                            rx: "34",
                            ry: "12",
                            fill: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixColors"])(primary, "#FFFFFF", 0.4)
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 655,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "50",
                            cy: "76",
                            rx: "34",
                            ry: "12",
                            fill: primary
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 656,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "50",
                            y: "58",
                            textAnchor: "middle",
                            fontSize: "34",
                            fontWeight: "900",
                            fill: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixColors"])(secondary, "#000000", 0.2),
                            children: "₹"
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 657,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/lib/art.tsx",
                    lineNumber: 652,
                    columnNumber: 11
                }, this);
            case "rupee":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        0,
                        1,
                        2
                    ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            transform: `translate(${i * 3} ${i * -7})`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: "16",
                                    y: "52",
                                    width: "68",
                                    height: "32",
                                    rx: "4",
                                    fill: i === 2 ? primary : secondary,
                                    stroke: "#FFFFFF",
                                    strokeWidth: "1.5"
                                }, void 0, false, {
                                    fileName: "[project]/lib/art.tsx",
                                    lineNumber: 665,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "50",
                                    y: "74",
                                    textAnchor: "middle",
                                    fontSize: "20",
                                    fontWeight: "900",
                                    fill: "#FFFFFF",
                                    opacity: "0.9",
                                    children: "₹"
                                }, void 0, false, {
                                    fileName: "[project]/lib/art.tsx",
                                    lineNumber: 666,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 664,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/lib/art.tsx",
                    lineNumber: 662,
                    columnNumber: 11
                }, this);
            case "chart":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "12",
                            y: "14",
                            width: "76",
                            height: "72",
                            rx: "6",
                            fill: "#FFFFFF",
                            stroke: primary,
                            strokeWidth: "3"
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 674,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M 22 70 L 78 70",
                            stroke: "#94A3B8",
                            strokeWidth: "2"
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 675,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M 22 70 L 22 26",
                            stroke: "#94A3B8",
                            strokeWidth: "2"
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 676,
                            columnNumber: 13
                        }, this),
                        [
                            0,
                            1,
                            2,
                            3
                        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: 27 + i * 13,
                                y: 62 - i * 8,
                                width: "8",
                                height: 8 + i * 8,
                                rx: "2",
                                fill: i === 3 ? primary : secondary
                            }, i, false, {
                                fileName: "[project]/lib/art.tsx",
                                lineNumber: 678,
                                columnNumber: 15
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M 28 48 L 44 40 L 56 44 L 78 22",
                            fill: "none",
                            stroke: primary,
                            strokeWidth: "3",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 680,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M 70 22 L 78 22 L 78 30",
                            fill: "none",
                            stroke: primary,
                            strokeWidth: "3",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 681,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/lib/art.tsx",
                    lineNumber: 673,
                    columnNumber: 11
                }, this);
            case "gold":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M 18 64 L 32 50 L 70 50 L 84 64 L 70 78 L 32 78 Z",
                            fill: primary,
                            stroke: secondary,
                            strokeWidth: "2"
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 687,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M 32 50 L 46 36 L 84 36 L 70 50 Z",
                            fill: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixColors"])(primary, "#FFFFFF", 0.3),
                            stroke: secondary,
                            strokeWidth: "2"
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 688,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M 18 64 L 32 50 L 46 36",
                            fill: "none",
                            stroke: "#FFFFFF",
                            strokeWidth: "2",
                            opacity: "0.5"
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 689,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "52",
                            y: "68",
                            textAnchor: "middle",
                            fontSize: "12",
                            fontWeight: "800",
                            fill: secondary,
                            children: "999.9"
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 690,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/lib/art.tsx",
                    lineNumber: 686,
                    columnNumber: 11
                }, this);
            case "wallet":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "12",
                            y: "28",
                            width: "76",
                            height: "50",
                            rx: "9",
                            fill: secondary
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 696,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "12",
                            y: "22",
                            width: "76",
                            height: "16",
                            rx: "7",
                            fill: primary
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 697,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "58",
                            y: "44",
                            width: "30",
                            height: "20",
                            rx: "4",
                            fill: "#F8FAFC"
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 698,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "73",
                            cy: "54",
                            r: "4",
                            fill: primary
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 699,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M 16 60 L 44 60",
                            stroke: "#FFFFFF",
                            strokeWidth: "2",
                            opacity: "0.4"
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 700,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/lib/art.tsx",
                    lineNumber: 695,
                    columnNumber: 11
                }, this);
            case "atm":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "18",
                            y: "10",
                            width: "64",
                            height: "80",
                            rx: "7",
                            fill: primary,
                            stroke: secondary,
                            strokeWidth: "3"
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 706,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "26",
                            y: "18",
                            width: "48",
                            height: "24",
                            rx: "3",
                            fill: "#0F172A"
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 707,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "50",
                            y: "34",
                            textAnchor: "middle",
                            fontSize: "10",
                            fontWeight: "800",
                            fill: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixColors"])(primary, "#FFFFFF", 0.6),
                            children: "ATM"
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 708,
                            columnNumber: 13
                        }, this),
                        [
                            26,
                            38,
                            50
                        ].map((y)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "26",
                                y: y + 22,
                                width: "48",
                                height: "5",
                                rx: "2",
                                fill: secondary,
                                opacity: "0.7"
                            }, y, false, {
                                fileName: "[project]/lib/art.tsx",
                                lineNumber: 710,
                                columnNumber: 15
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "32",
                            y: "72",
                            width: "36",
                            height: "8",
                            rx: "3",
                            fill: "#111827"
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 712,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "38",
                            y: "84",
                            width: "24",
                            height: "4",
                            fill: secondary
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 713,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/lib/art.tsx",
                    lineNumber: 705,
                    columnNumber: 11
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "16",
                            y: "30",
                            width: "68",
                            height: "50",
                            rx: "5",
                            fill: primary,
                            stroke: secondary,
                            strokeWidth: "3"
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 719,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M 36 30 L 36 22 Q 36 16 42 16 L 58 16 Q 64 16 64 22 L 64 30",
                            fill: "none",
                            stroke: secondary,
                            strokeWidth: "5"
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 720,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "16",
                            y: "48",
                            width: "68",
                            height: "8",
                            fill: secondary,
                            opacity: "0.6"
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 721,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "50",
                            cy: "64",
                            r: "7",
                            fill: "#FDE68A"
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 722,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/lib/art.tsx",
                    lineNumber: 718,
                    columnNumber: 11
                }, this);
        }
    })();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        transform: `scale(${scale}) translate(${-50 + Math.sin(t * 2) * 0.6} ${-50})`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                    id: `${prefix}-finshadow`,
                    x: "-30%",
                    y: "-30%",
                    width: "160%",
                    height: "160%",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feDropShadow", {
                        dx: "0",
                        dy: "4",
                        stdDeviation: "5",
                        floodColor: "#000000",
                        floodOpacity: "0.35"
                    }, void 0, false, {
                        fileName: "[project]/lib/art.tsx",
                        lineNumber: 732,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/lib/art.tsx",
                    lineNumber: 731,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/lib/art.tsx",
                lineNumber: 730,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                filter: `url(#${prefix}-finshadow)`,
                children: body
            }, void 0, false, {
                fileName: "[project]/lib/art.tsx",
                lineNumber: 735,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/lib/art.tsx",
        lineNumber: 729,
        columnNumber: 5
    }, this);
}
_c5 = FinanceArt;
function ImageArt({ layer, boxW, boxH, prefix }) {
    if (!layer.src) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
            x: -boxW / 2,
            y: -boxH / 2,
            width: boxW,
            height: boxH,
            fill: "#27272A",
            stroke: "#52525B",
            strokeWidth: "2",
            strokeDasharray: "8 6"
        }, void 0, false, {
            fileName: "[project]/lib/art.tsx",
            lineNumber: 753,
            columnNumber: 7
        }, this);
    }
    const radius = layer.radius / 100 * Math.min(boxW, boxH);
    const par = layer.fit === "cover" ? "xMidYMid slice" : layer.fit === "contain" ? "xMidYMid meet" : "none";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                        id: `${prefix}-imgclip`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: -boxW / 2,
                            y: -boxH / 2,
                            width: boxW,
                            height: boxH,
                            rx: radius
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 762,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/lib/art.tsx",
                        lineNumber: 761,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                        id: `${prefix}-imgfilter`,
                        x: "-20%",
                        y: "-20%",
                        width: "140%",
                        height: "140%",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                stdDeviation: layer.blur
                            }, void 0, false, {
                                fileName: "[project]/lib/art.tsx",
                                lineNumber: 765,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feColorMatrix", {
                                type: "matrix",
                                values: `${1 - layer.grayscale} ${layer.grayscale} ${layer.grayscale} 0 0
                      ${layer.grayscale} ${1 - layer.grayscale} ${layer.grayscale} 0 0
                      ${layer.grayscale} ${layer.grayscale} ${1 - layer.grayscale} 0 0
                      0 0 0 ${layer.brightness / 100} 0`
                            }, void 0, false, {
                                fileName: "[project]/lib/art.tsx",
                                lineNumber: 766,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feComponentTransfer", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feFuncR", {
                                        type: "linear",
                                        slope: layer.contrast / 100,
                                        intercept: (1 - layer.contrast / 100) / 2
                                    }, void 0, false, {
                                        fileName: "[project]/lib/art.tsx",
                                        lineNumber: 774,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feFuncG", {
                                        type: "linear",
                                        slope: layer.contrast / 100,
                                        intercept: (1 - layer.contrast / 100) / 2
                                    }, void 0, false, {
                                        fileName: "[project]/lib/art.tsx",
                                        lineNumber: 775,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feFuncB", {
                                        type: "linear",
                                        slope: layer.contrast / 100,
                                        intercept: (1 - layer.contrast / 100) / 2
                                    }, void 0, false, {
                                        fileName: "[project]/lib/art.tsx",
                                        lineNumber: 776,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/lib/art.tsx",
                                lineNumber: 773,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/lib/art.tsx",
                        lineNumber: 764,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/lib/art.tsx",
                lineNumber: 760,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                clipPath: `url(#${prefix}-imgclip)`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    transform: `scale(${layer.flipX ? -layer.crop : layer.crop} ${layer.crop})`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("image", {
                        href: layer.src,
                        x: -boxW / 2,
                        y: -boxH / 2,
                        width: boxW,
                        height: boxH,
                        preserveAspectRatio: par,
                        filter: layer.blur || layer.grayscale || layer.brightness !== 100 || layer.contrast !== 100 ? `url(#${prefix}-imgfilter)` : undefined
                    }, void 0, false, {
                        fileName: "[project]/lib/art.tsx",
                        lineNumber: 782,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/lib/art.tsx",
                    lineNumber: 781,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/lib/art.tsx",
                lineNumber: 780,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/lib/art.tsx",
        lineNumber: 759,
        columnNumber: 5
    }, this);
}
_c6 = ImageArt;
function ShapeArt({ layer, boxW, boxH, prefix }) {
    const x = -boxW / 2;
    const y = -boxH / 2;
    const sw = layer.strokeWidth;
    const common = {
        fill: layer.fillGradient.enabled ? `url(#${prefix}-shgrad)` : layer.fill,
        stroke: layer.stroke,
        strokeWidth: sw,
        strokeLinejoin: "round"
    };
    let shape;
    switch(layer.shape){
        case "circle":
            shape = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: 0,
                cy: 0,
                rx: boxW / 2,
                ry: boxH / 2,
                ...common
            }, void 0, false, {
                fileName: "[project]/lib/art.tsx",
                lineNumber: 820,
                columnNumber: 15
            }, this);
            break;
        case "triangle":
            shape = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: `M 0 ${y} L ${x + boxW} ${y + boxH} L ${x} ${y + boxH} Z`,
                ...common
            }, void 0, false, {
                fileName: "[project]/lib/art.tsx",
                lineNumber: 823,
                columnNumber: 15
            }, this);
            break;
        case "line":
            shape = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: x,
                y1: y + boxH / 2,
                x2: x + boxW,
                y2: y + boxH / 2,
                stroke: layer.stroke,
                strokeWidth: sw || 4,
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/lib/art.tsx",
                lineNumber: 826,
                columnNumber: 15
            }, this);
            break;
        case "arrow":
            shape = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                ...common,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: x,
                        y: -boxH * 0.16,
                        width: boxW * 0.68,
                        height: boxH * 0.32,
                        rx: boxH * 0.1
                    }, void 0, false, {
                        fileName: "[project]/lib/art.tsx",
                        lineNumber: 831,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: `M ${x + boxW * 0.58} ${-boxH * 0.5} L ${x + boxW} 0 L ${x + boxW * 0.58} ${boxH * 0.5} Z`
                    }, void 0, false, {
                        fileName: "[project]/lib/art.tsx",
                        lineNumber: 832,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/lib/art.tsx",
                lineNumber: 830,
                columnNumber: 9
            }, this);
            break;
        case "star":
            {
                const points = [];
                for(let i = 0; i < 10; i++){
                    const r = i % 2 === 0 ? 0.5 : 0.22;
                    const a = -Math.PI / 2 + i * Math.PI / 5;
                    points.push(`${Math.cos(a) * boxW * r},${Math.sin(a) * boxH * r}`);
                }
                shape = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                    points: points.join(" "),
                    ...common
                }, void 0, false, {
                    fileName: "[project]/lib/art.tsx",
                    lineNumber: 843,
                    columnNumber: 15
                }, this);
                break;
            }
        case "heart":
            shape = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: `M 0 ${boxH * 0.45} C ${-boxW * 0.65} ${boxH * 0.05} ${-boxW * 0.5} ${-boxH * 0.5} 0 ${-boxH * 0.2} C ${boxW * 0.5} ${-boxH * 0.5} ${boxW * 0.65} ${boxH * 0.05} 0 ${boxH * 0.45} Z`,
                ...common
            }, void 0, false, {
                fileName: "[project]/lib/art.tsx",
                lineNumber: 848,
                columnNumber: 9
            }, this);
            break;
        case "pill":
            shape = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: x,
                y: y,
                width: boxW,
                height: boxH,
                rx: boxH / 2,
                ...common
            }, void 0, false, {
                fileName: "[project]/lib/art.tsx",
                lineNumber: 855,
                columnNumber: 15
            }, this);
            break;
        default:
            shape = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: x,
                y: y,
                width: boxW,
                height: boxH,
                rx: layer.radius,
                ...common
            }, void 0, false, {
                fileName: "[project]/lib/art.tsx",
                lineNumber: 858,
                columnNumber: 15
            }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: `${prefix}-shgrad`,
                    x1: "0%",
                    y1: "0%",
                    x2: "100%",
                    y2: "100%",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0%",
                            stopColor: layer.fillGradient.from
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 864,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "100%",
                            stopColor: layer.fillGradient.to
                        }, void 0, false, {
                            fileName: "[project]/lib/art.tsx",
                            lineNumber: 865,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/lib/art.tsx",
                    lineNumber: 863,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/lib/art.tsx",
                lineNumber: 862,
                columnNumber: 7
            }, this),
            shape
        ]
    }, void 0, true, {
        fileName: "[project]/lib/art.tsx",
        lineNumber: 861,
        columnNumber: 5
    }, this);
}
_c7 = ShapeArt;
function SceneSvg({ scene, W, H, time, prefix = "scene", children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BackgroundArt, {
                bg: scene.background,
                W: W,
                H: H,
                time: time,
                prefix: `${prefix}-bg`
            }, void 0, false, {
                fileName: "[project]/lib/art.tsx",
                lineNumber: 883,
                columnNumber: 7
            }, this),
            scene.layers.filter((layer)=>layer.visible).map((layer, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LayerArt, {
                    layer: layer,
                    W: W,
                    H: H,
                    time: time,
                    prefix: `${prefix}-l${index}`
                }, layer.id, false, {
                    fileName: "[project]/lib/art.tsx",
                    lineNumber: 887,
                    columnNumber: 11
                }, this)),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/lib/art.tsx",
        lineNumber: 882,
        columnNumber: 5
    }, this);
}
_c8 = SceneSvg;
function svgMarkup(scene, W, H, time, prefix = "export") {
    const escape = (s)=>s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    const layerMarkup = scene.layers.filter((l)=>l.visible).map((layer, index)=>{
        const boxW = layer.w / 100 * W;
        const boxH = layer.h / 100 * H;
        const px = layer.x / 100 * W;
        const py = layer.y / 100 * H;
        const m = motionFor(layer, time, boxW, boxH);
        const common = `transform="translate(${px + m.dx} ${py + m.dy}) rotate(${layer.rot + m.rot}) scale(${m.scale})" opacity="${layer.opacity / 100}"`;
        if (layer.kind === "shape") {
            const fill = layer.fillGradient.enabled ? `url(#${prefix}-eg${index})` : layer.fill;
            const grad = layer.fillGradient.enabled ? `<defs><linearGradient id="${prefix}-eg${index}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${layer.fillGradient.from}"/><stop offset="1" stop-color="${layer.fillGradient.to}"/></linearGradient></defs>` : "";
            const x = -boxW / 2;
            const y = -boxH / 2;
            let el = "";
            if (layer.shape === "rect") el = `<rect x="${x}" y="${y}" width="${boxW}" height="${boxH}" rx="${layer.radius}" fill="${fill}" stroke="${layer.stroke}" stroke-width="${layer.strokeWidth}"/>`;
            if (layer.shape === "circle") el = `<ellipse cx="0" cy="0" rx="${boxW / 2}" ry="${boxH / 2}" fill="${fill}" stroke="${layer.stroke}" stroke-width="${layer.strokeWidth}"/>`;
            if (layer.shape === "triangle") el = `<path d="M 0 ${y} L ${x + boxW} ${y + boxH} L ${x} ${y + boxH} Z" fill="${fill}" stroke="${layer.stroke}" stroke-width="${layer.strokeWidth}"/>`;
            if (layer.shape === "line") el = `<line x1="${x}" y1="0" x2="${x + boxW}" y2="0" stroke="${layer.stroke}" stroke-width="${layer.strokeWidth || 4}" stroke-linecap="round"/>`;
            if (layer.shape === "pill") el = `<rect x="${x}" y="${y}" width="${boxW}" height="${boxH}" rx="${boxH / 2}" fill="${fill}" stroke="${layer.stroke}" stroke-width="${layer.strokeWidth}"/>`;
            if (layer.shape === "star") {
                const pts = [];
                for(let i = 0; i < 10; i++){
                    const r = i % 2 === 0 ? 0.5 : 0.22;
                    const a = -Math.PI / 2 + i * Math.PI / 5;
                    pts.push(`${Math.cos(a) * boxW * r},${Math.sin(a) * boxH * r}`);
                }
                el = `<polygon points="${pts.join(" ")}" fill="${fill}" stroke="${layer.stroke}" stroke-width="${layer.strokeWidth}"/>`;
            }
            if (layer.shape === "arrow") el = `<path d="M ${x} ${-boxH * 0.18} L ${x + boxW * 0.6} ${-boxH * 0.18} L ${x + boxW * 0.6} ${-boxH * 0.5} L ${x + boxW} 0 L ${x + boxW * 0.6} ${boxH * 0.5} L ${x + boxW * 0.6} ${boxH * 0.18} L ${x} ${boxH * 0.18} Z" fill="${fill}" stroke="${layer.stroke}" stroke-width="${layer.strokeWidth}"/>`;
            return `<g ${common}>${grad}${el}</g>`;
        }
        if (layer.kind === "text") {
            const size = layer.size / 100 * W;
            const lines = layer.text.split("\n");
            const anchor = layer.align === "left" ? "start" : layer.align === "right" ? "end" : "middle";
            const tx = layer.align === "left" ? -boxW / 2 : layer.align === "right" ? boxW / 2 : 0;
            const step = size * layer.lineHeight;
            const start = -(step * lines.length) / 2 + size * 0.86;
            const tspans = lines.map((line, i)=>`<tspan x="${tx}" dy="${i === 0 ? 0 : step}">${escape(line)}</tspan>`).join("");
            const grad = layer.gradient.enabled ? `<defs><linearGradient id="${prefix}-tg${index}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${layer.gradient.from}"/><stop offset="1" stop-color="${layer.gradient.to}"/></linearGradient></defs>` : "";
            const fill = layer.gradient.enabled ? `url(#${prefix}-tg${index})` : layer.color;
            const pill = layer.pill.enabled ? `<rect x="${-boxW / 2}" y="${start - size * 1.05}" width="${boxW}" height="${step * lines.length + size * 0.4}" rx="${(step * lines.length + size * 0.4) / 2}" fill="${layer.pill.color}" opacity="${layer.pill.opacity / 100}"/>` : "";
            return `<g ${common}>${grad}${pill}<text x="${tx}" y="${start}" fill="${fill}" font-family="${FONT_STACK[layer.font]}" font-size="${size}" font-weight="${layer.weight}" text-anchor="${anchor}" stroke="${layer.border.enabled ? layer.border.color : "none"}" stroke-width="${layer.border.enabled ? layer.border.width / 1000 * W : 0}" paint-order="stroke">${tspans}</text></g>`;
        }
        if (layer.kind === "image") {
            if (!layer.src) return "";
            const radius = layer.radius / 100 * Math.min(boxW, boxH);
            const par = layer.fit === "cover" ? "xMidYMid slice" : layer.fit === "contain" ? "xMidYMid meet" : "none";
            return `<g ${common}><defs><clipPath id="${prefix}-ic${index}"><rect x="${-boxW / 2}" y="${-boxH / 2}" width="${boxW}" height="${boxH}" rx="${radius}"/></clipPath></defs><g clip-path="url(#${prefix}-ic${index})"><image href="${layer.src}" x="${-boxW / 2}" y="${-boxH / 2}" width="${boxW}" height="${boxH}" preserveAspectRatio="${par}" transform="scale(${layer.crop})"/></g></g>`;
        }
        const fallbackColor = "primary" in layer ? layer.primary : layer.shirt;
        return `<g ${common}><circle cx="0" cy="0" r="${Math.min(boxW, boxH) / 2}" fill="${fallbackColor}"/><text x="0" y="10" text-anchor="middle" font-size="${Math.min(boxW, boxH) / 2}" fill="#FFFFFF">${escape(layer.name)}</text></g>`;
    }).join("");
    const bg = scene.background;
    let bgMarkup = "";
    if (bg.type === "solid") bgMarkup = `<rect width="${W}" height="${H}" fill="${bg.color}" opacity="${bg.opacity / 100}"/>`;
    if (bg.type === "gradient") {
        const coords = bg.gradient.direction === "left-right" ? `x1="0" y1="0" x2="1" y2="0"` : bg.gradient.direction === "diagonal" ? `x1="0" y1="0" x2="1" y2="1"` : `x1="0" y1="0" x2="0" y2="1"`;
        if (bg.gradient.direction === "radial") {
            bgMarkup = `<defs><radialGradient id="${prefix}-rg"><stop offset="0" stop-color="${bg.gradient.from}"/><stop offset="1" stop-color="${bg.gradient.to}"/></radialGradient></defs><rect width="${W}" height="${H}" fill="url(#${prefix}-rg)"/>`;
        } else {
            bgMarkup = `<defs><linearGradient id="${prefix}-lg" ${coords}><stop offset="0" stop-color="${bg.gradient.from}"/><stop offset="1" stop-color="${bg.gradient.to}"/></linearGradient></defs><rect width="${W}" height="${H}" fill="url(#${prefix}-lg)" opacity="${bg.gradient.intensity / 100}"/>`;
        }
    }
    if (bg.type === "image" && bg.image.src) {
        const par = bg.image.fit === "cover" ? "xMidYMid slice" : bg.image.fit === "contain" ? "xMidYMid meet" : "none";
        bgMarkup = `<image href="${bg.image.src}" width="${W}" height="${H}" preserveAspectRatio="${par}" opacity="${bg.image.opacity / 100}"/>`;
    }
    if (bg.type === "pattern") {
        const pat = bg.pattern;
        const gap = Math.max(pat.gap, 24);
        let elems = "";
        if (pat.kind === "dots") {
            for(let row = 0; row * gap < H; row++)for(let col = 0; col * gap < W; col++)elems += `<circle cx="${col * gap + gap / 2}" cy="${row * gap + gap / 2}" r="${pat.size / 2}" fill="${pat.color}" opacity="0.35"/>`;
        } else if (pat.kind === "grid") {
            for(let x = 0; x < W; x += gap * 2)elems += `<line x1="${x}" y1="0" x2="${x}" y2="${H}" stroke="${pat.color}" stroke-width="2" opacity="0.25"/>`;
            for(let y = 0; y < H; y += gap * 2)elems += `<line x1="0" y1="${y}" x2="${W}" y2="${y}" stroke="${pat.color}" stroke-width="2" opacity="0.25"/>`;
        } else if (pat.kind === "particles") {
            for(let i = 0; i < Math.min(pat.count, 120); i++)elems += `<circle cx="${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seededRandom"])(i * 2 + 1) * W}" cy="${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seededRandom"])(i * 2 + 2) * H}" r="${pat.size}" fill="${pat.color}" opacity="0.6"/>`;
        } else {
            elems = `<rect width="${W}" height="${H}" fill="${pat.accent}"/><path d="M 0 ${H * 0.7} Q ${W * 0.25} ${H * 0.5} ${W * 0.5} ${H * 0.7} T ${W} ${H * 0.7}" fill="none" stroke="${pat.color}" stroke-width="${W * 0.004}" opacity="0.5"/>`;
        }
        bgMarkup = `<rect width="${W}" height="${H}" fill="${pat.accent}"/>${elems}`;
    }
    return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"><rect width="${W}" height="${H}" fill="#050508"/>${bgMarkup}${layerMarkup}</svg>`;
}
const ART_FONT_STACK = FONT_STACK;
const clampArt = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"];
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "BackgroundArt");
__turbopack_context__.k.register(_c1, "PatternArt");
__turbopack_context__.k.register(_c2, "LayerArt");
__turbopack_context__.k.register(_c3, "TextArt");
__turbopack_context__.k.register(_c4, "CharacterArt");
__turbopack_context__.k.register(_c5, "FinanceArt");
__turbopack_context__.k.register(_c6, "ImageArt");
__turbopack_context__.k.register(_c7, "ShapeArt");
__turbopack_context__.k.register(_c8, "SceneSvg");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/exporter.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "downloadJson",
    ()=>downloadJson,
    "downloadPng",
    ()=>downloadPng,
    "downloadSvg",
    ()=>downloadSvg,
    "drawSvgToCanvas",
    ()=>drawSvgToCanvas,
    "getStageSvg",
    ()=>getStageSvg,
    "recordVideo",
    ()=>recordVideo,
    "serializeStage",
    ()=>serializeStage,
    "svgBlob",
    ()=>svgBlob,
    "targetSize",
    ()=>targetSize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
function targetSize(size, quality) {
    const { width: W, height: H } = size;
    if (quality === "native") return {
        width: W,
        height: H
    };
    if (quality === "4K") {
        const scale = 3840 / Math.max(W, H);
        return {
            width: Math.round(W * scale),
            height: Math.round(H * scale)
        };
    }
    const base = quality === "720p" ? 720 : 1080;
    const scale = base / Math.min(W, H);
    return {
        width: Math.round(W * scale),
        height: Math.round(H * scale)
    };
}
function getStageSvg() {
    return document.querySelector("svg[data-stage-svg='true']");
}
function serializeStage(outW, outH) {
    const svg = getStageSvg();
    if (!svg) throw new Error("Canvas SVG not found");
    const clone = svg.cloneNode(true);
    clone.querySelectorAll("[data-ui='true']").forEach((node)=>node.remove());
    clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    clone.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
    clone.setAttribute("width", String(outW));
    clone.setAttribute("height", String(outH));
    clone.setAttribute("viewBox", svg.getAttribute("viewBox") ?? "");
    clone.removeAttribute("style");
    return new XMLSerializer().serializeToString(clone);
}
function svgBlob(svg) {
    return new Blob([
        svg
    ], {
        type: "image/svg+xml;charset=utf-8"
    });
}
function imageFromSvg(svg) {
    return new Promise((resolve, reject)=>{
        const url = URL.createObjectURL(svgBlob(svg));
        const img = new Image();
        img.onload = ()=>{
            URL.revokeObjectURL(url);
            resolve(img);
        };
        img.onerror = ()=>{
            URL.revokeObjectURL(url);
            reject(new Error("Failed to rasterize SVG"));
        };
        img.src = url;
    });
}
async function drawSvgToCanvas(canvas, svg, outW, outH) {
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
async function downloadPng(name, size, quality) {
    const { width, height } = targetSize(size, quality);
    const svg = serializeStage(width, height);
    const canvas = document.createElement("canvas");
    await drawSvgToCanvas(canvas, svg, width, height);
    const blob = await new Promise((resolve)=>canvas.toBlob(resolve, "image/png"));
    if (!blob) throw new Error("PNG encoding failed");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["downloadBlob"])(blob, `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slugify"])(name)}-${width}x${height}.png`);
}
function downloadSvg(name, size, quality) {
    const { width, height } = targetSize(size, quality);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["downloadBlob"])(svgBlob(serializeStage(width, height)), `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slugify"])(name)}-${width}x${height}.svg`);
}
function downloadJson(project, name) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["downloadBlob"])(new Blob([
        JSON.stringify(project, null, 2)
    ], {
        type: "application/json"
    }), `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slugify"])(name)}.json`);
}
function pickMime() {
    const candidates = [
        "video/webm;codecs=vp9",
        "video/webm;codecs=vp8",
        "video/webm"
    ];
    for (const mime of candidates){
        if (typeof MediaRecorder !== "undefined" && MediaRecorder.isTypeSupported(mime)) return mime;
    }
    return "video/webm";
}
async function recordVideo(options) {
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
    const recorder = new MediaRecorder(stream, {
        mimeType,
        videoBitsPerSecond: Math.min(24_000_000, width * height * fps * 0.22)
    });
    const chunks = [];
    recorder.ondataavailable = (event)=>{
        if (event.data.size > 0) chunks.push(event.data);
    };
    const done = new Promise((resolve, reject)=>{
        recorder.onstop = ()=>resolve();
        recorder.onerror = ()=>reject(new Error("Video recording failed"));
    });
    recorder.start(250);
    const started = performance.now();
    let cancelled = false;
    const frame = async ()=>{
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
        } catch  {
        // keep recording with the last successfully drawn frame
        }
        requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
    await done;
    cancelled = true;
    stream.getTracks().forEach((track)=>track.stop());
    const blob = new Blob(chunks, {
        type: mimeType
    });
    if (blob.size === 0) throw new Error("Recorded video was empty");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["downloadBlob"])(blob, `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slugify"])(name)}-${duration}s.webm`);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/initialProject.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createInitialProject",
    ()=>createInitialProject
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/presets.ts [app-client] (ecmascript)");
;
function bg(color, from, to) {
    return {
        type: "gradient",
        color,
        opacity: 100,
        gradient: {
            from,
            to,
            direction: "top-bottom",
            intensity: 100,
            speed: 50,
            animated: true
        },
        image: {
            src: "",
            name: "",
            blur: 0,
            brightness: 100,
            opacity: 100,
            fit: "cover",
            position: "center"
        },
        pattern: {
            kind: "particles",
            color: "#FDE68A",
            accent: "#0B1020",
            size: 5,
            gap: 40,
            speed: 50,
            count: 45
        },
        video: {
            src: "",
            name: "",
            loop: true,
            playing: false
        }
    };
}
function title(text, y, size = 8.6) {
    const layer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeTextLayer"])("title", text);
    return {
        ...layer,
        y,
        size,
        w: 92,
        h: size * 2.4,
        animation: "float",
        gradient: {
            enabled: true,
            from: "#FDE047",
            to: "#F472B6"
        },
        shadow: {
            enabled: true,
            color: "#000000",
            blur: 18,
            dx: 0,
            dy: 8
        }
    };
}
function subtitle(text, y) {
    const layer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeTextLayer"])("subtitle", text);
    return {
        ...layer,
        y,
        size: 4.2,
        w: 86,
        h: 10,
        color: "#E9D5FF",
        animation: "none"
    };
}
function createInitialProject() {
    const c = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CANVAS_SIZES"][0];
    const ramesh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeCharacterLayer"])({
        id: "ramesh",
        name: "Ramesh",
        hint: "",
        skin: "#C68642",
        shirt: "#2563EB",
        hair: "#1C1917",
        accessory: "none",
        variant: 0
    });
    const suresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeCharacterLayer"])({
        id: "suresh",
        name: "Suresh",
        hint: "",
        skin: "#B45309",
        shirt: "#059669",
        hair: "#18181B",
        accessory: "moustache",
        variant: 1
    });
    const fd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeFinanceLayer"])({
        id: "fd-gold",
        label: "FD Certificate",
        hindi: "",
        kind: "fd",
        primary: "#FBBF24",
        secondary: "#B45309"
    });
    const scenes = [
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uid"])("scene"),
            name: "Scene 1 • Intro",
            duration: 5,
            background: bg("#0B1020", "#0F172A", "#4C1D95"),
            layers: [
                {
                    ...title("SMART SAVING", 14),
                    animation: "pulse"
                },
                {
                    ...subtitle("बचत का नया तरीका • Ramesh & Suresh", 22)
                },
                {
                    ...fd,
                    x: 50,
                    y: 45,
                    w: 34,
                    h: 34
                },
                {
                    ...ramesh,
                    x: 27,
                    y: 70,
                    w: 34,
                    h: 52,
                    animation: "wave"
                },
                {
                    ...suresh,
                    x: 73,
                    y: 70,
                    w: 34,
                    h: 52,
                    animation: "talk"
                }
            ]
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uid"])("scene"),
            name: "Scene 2 • FD",
            duration: 5,
            background: bg("#0B1020", "#1E1B4B", "#9A3412"),
            layers: [
                {
                    ...title("FD CERTIFICATE", 16, 7.4),
                    animation: "float"
                },
                {
                    ...subtitle("Guaranteed returns • सुरक्षित निवेश", 24)
                },
                {
                    ...fd,
                    x: 50,
                    y: 47,
                    w: 46,
                    h: 46,
                    animation: "pulse"
                },
                {
                    ...ramesh,
                    x: 28,
                    y: 76,
                    w: 30,
                    h: 46,
                    animation: "jump"
                },
                {
                    ...suresh,
                    x: 72,
                    y: 76,
                    w: 30,
                    h: 46,
                    animation: "wave"
                }
            ]
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uid"])("scene"),
            name: "Scene 3 • CTA",
            duration: 5,
            background: bg("#0B1020", "#052E2B", "#7C3AED"),
            layers: [
                {
                    ...title("START TODAY!", 26),
                    animation: "pulse"
                },
                {
                    ...subtitle("Visit your nearest branch • आज ही शुरू करें", 38)
                },
                {
                    ...fd,
                    x: 50,
                    y: 56,
                    w: 30,
                    h: 30,
                    animation: "spin"
                }
            ]
        }
    ];
    return {
        name: "Mini Canva Pro - Animated Studio",
        size: {
            ...c
        },
        fps: 60,
        fourK: true,
        scenes,
        activeSceneId: scenes[0].id
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/jsonImport.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SAMPLE_JSON",
    ()=>SAMPLE_JSON,
    "importProject",
    ()=>importProject,
    "projectToJson",
    ()=>projectToJson
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/presets.ts [app-client] (ecmascript)");
;
;
const SAMPLE_JSON = `{
  "name": "FD Story",
  "size": { "width": 1080, "height": 1920 },
  "scenes": [
    {
      "name": "Scene 1 - introduce",
      "duration": 5,
      "background": { "type": "gradient", "from": "#0F172A", "to": "#7C3AED" },
      "layers": [
        { "type": "text", "text": "Smarter Saving Plan", "x": 50, "y": 18, "size": 9, "color": "#FFFFFF", "animation": "float" },
        { "type": "character", "charId": "ramesh", "x": 32, "y": 62, "animation": "wave" },
        { "type": "character", "charId": "suresh", "x": 62, "y": 64, "animation": "talk" },
        { "type": "finance", "objectId": "fd-gold", "x": 50, "y": 45, "animation": "float" }
      ]
    },
    {
      "name": "Scene 2 - grow",
      "duration": 5,
      "background": { "type": "solid", "color": "#0B1020" },
      "layers": [
        { "type": "text", "text": "Guaranteed Returns!", "x": 50, "y": 22, "size": 8, "color": "#FDE047" },
        { "type": "finance", "objectId": "chart-emerald", "x": 50, "y": 55, "size": 40 }
      ]
    }
  ]
}`;
function makeSize(w, h) {
    const known = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CANVAS_SIZES"].find((s)=>s.width === w && s.height === h);
    if (known) return {
        ...known
    };
    const gcd = (a, b)=>b === 0 ? a : gcd(b, a % b);
    const d = gcd(w, h) || 1;
    return {
        id: "custom",
        name: "Custom Size",
        short: `${w / d}:${h / d}`,
        width: w,
        height: h,
        ratio: `${Math.round(w / h * 100) / 100}:1`,
        icon: "sliders"
    };
}
function backgroundFrom(input) {
    const bg = structuredClone(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultBackground"]);
    if (!input || typeof input !== "object") return bg;
    const type = typeof input.type === "string" ? input.type : "solid";
    if ([
        "solid",
        "gradient",
        "image",
        "pattern",
        "video"
    ].includes(type)) bg.type = type;
    if (typeof input.color === "string") bg.color = input.color;
    if (typeof input.opacity === "number") bg.opacity = input.opacity;
    if (input.gradient && typeof input.gradient === "object") {
        const g = input.gradient;
        if (typeof g.from === "string") bg.gradient.from = g.from;
        if (typeof g.to === "string") bg.gradient.to = g.to;
        if (typeof g.direction === "string") bg.gradient.direction = g.direction;
        if (typeof g.speed === "number") bg.gradient.speed = g.speed;
        bg.gradient.animated = Boolean(g.animated);
    } else {
        if (typeof input.from === "string") bg.gradient.from = input.from;
        if (typeof input.to === "string") bg.gradient.to = input.to;
    }
    if (input.pattern && typeof input.pattern === "object") {
        const p = input.pattern;
        if (typeof p.kind === "string") bg.pattern.kind = p.kind;
        if (typeof p.color === "string") bg.pattern.color = p.color;
        if (typeof p.accent === "string") bg.pattern.accent = p.accent;
    }
    return bg;
}
function layerFrom(input) {
    const type = typeof input.type === "string" ? input.type : "text";
    const base = {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uid"])("json"),
        name: typeof input.name === "string" ? input.name : type,
        x: Number(input.x) || 50,
        y: Number(input.y) || 50,
        w: Number(input.w) || 60,
        h: Number(input.h) || 30,
        rot: Number(input.rot) || 0,
        opacity: typeof input.opacity === "number" ? input.opacity : 100,
        visible: true,
        locked: false,
        animation: typeof input.animation === "string" ? input.animation : "none",
        animSpeed: Number(input.animSpeed) || 1
    };
    if (type === "text") {
        const layer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeTextLayer"])("body", typeof input.text === "string" ? input.text : "Text");
        return {
            ...layer,
            ...base,
            size: Number(input.size) || layer.size,
            color: typeof input.color === "string" ? input.color : layer.color,
            font: typeof input.font === "string" ? input.font : layer.font,
            weight: Number(input.weight) || layer.weight,
            animation: base.animation
        };
    }
    if (type === "character") {
        const def = {
            id: typeof input.charId === "string" ? input.charId : "ramesh",
            name: "Character",
            hint: "",
            skin: "#C68642",
            shirt: "#7C3AED",
            hair: "#18181B",
            accessory: "none",
            variant: 0
        };
        const layer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeCharacterLayer"])(def);
        return {
            ...layer,
            ...base,
            charId: def.id,
            w: base.w === 60 ? 26 : base.w,
            h: base.h === 30 ? 45 : base.h
        };
    }
    if (type === "finance") {
        const layer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeFinanceLayer"])({
            id: typeof input.objectId === "string" ? input.objectId : "fd-gold",
            label: "Object",
            hindi: "",
            kind: "fd",
            primary: "#FBBF24",
            secondary: "#B45309"
        });
        return {
            ...layer,
            ...base,
            objectId: typeof input.objectId === "string" ? input.objectId : "fd-gold",
            w: base.w === 60 ? 24 : base.w,
            h: base.h === 30 ? 24 : base.h
        };
    }
    return null;
}
function importProject(json) {
    const parsed = JSON.parse(json);
    if (!parsed || !Array.isArray(parsed.scenes)) throw new Error("JSON must contain a scenes array");
    if (parsed.scenes.length === 0) throw new Error("At least one scene is required");
    const sizeInput = parsed.size ?? {};
    const width = Math.min(6000, Math.max(200, Number(sizeInput.width) || 1080));
    const height = Math.min(6000, Math.max(200, Number(sizeInput.height) || 1920));
    const scenes = parsed.scenes.map((raw, index)=>{
        const s = raw ?? {};
        const layers = Array.isArray(s.layers) ? s.layers.map((l)=>layerFrom(l ?? {})).filter((l)=>Boolean(l)) : [];
        return {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uid"])("scene"),
            name: typeof s.name === "string" ? s.name : `Scene ${index + 1}`,
            duration: Math.min(60, Math.max(1, Number(s.duration) || 5)),
            background: backgroundFrom(s.background ?? {}),
            layers
        };
    });
    return {
        name: typeof parsed.name === "string" ? parsed.name : "Imported Project",
        size: makeSize(width, height),
        fps: 60,
        fourK: false,
        scenes,
        activeSceneId: scenes[0].id
    };
}
function projectToJson(project) {
    return JSON.stringify({
        name: project.name,
        size: {
            width: project.size.width,
            height: project.size.height,
            ratio: project.size.ratio
        },
        fps: project.fps,
        scenes: project.scenes.map((s)=>({
                name: s.name,
                duration: s.duration,
                background: s.background,
                layers: s.layers.map((l)=>({
                        ...l
                    }))
            }))
    }, null, 2);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/presets.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BACKGROUND_TILES",
    ()=>BACKGROUND_TILES,
    "CANVAS_SIZES",
    ()=>CANVAS_SIZES,
    "CHARACTERS",
    ()=>CHARACTERS,
    "COLORS",
    ()=>COLORS,
    "FINANCE_OBJECTS",
    ()=>FINANCE_OBJECTS,
    "GRADIENTS",
    ()=>GRADIENTS,
    "TEXT_PRESETS",
    ()=>TEXT_PRESETS,
    "defaultBackground",
    ()=>defaultBackground,
    "financeKind",
    ()=>financeKind,
    "findCharacter",
    ()=>findCharacter,
    "makeCharacterLayer",
    ()=>makeCharacterLayer,
    "makeFinanceLayer",
    ()=>makeFinanceLayer,
    "makeTextLayer",
    ()=>makeTextLayer,
    "uid",
    ()=>uid
]);
const CANVAS_SIZES = [
    {
        id: "reels",
        name: "Reels / Shorts",
        short: "9:16",
        width: 1080,
        height: 1920,
        ratio: "9:16",
        icon: "phone"
    },
    {
        id: "story",
        name: "Story",
        short: "9:16",
        width: 1080,
        height: 1920,
        ratio: "9:16",
        icon: "phone"
    },
    {
        id: "youtube",
        name: "YouTube Video",
        short: "16:9",
        width: 1920,
        height: 1080,
        ratio: "16:9",
        icon: "play"
    },
    {
        id: "thumb",
        name: "YouTube Thumbnail",
        short: "16:9",
        width: 1280,
        height: 720,
        ratio: "16:9",
        icon: "image"
    },
    {
        id: "insta",
        name: "Instagram Post",
        short: "1:1",
        width: 1080,
        height: 1080,
        ratio: "1:1",
        icon: "camera"
    },
    {
        id: "insta-portrait",
        name: "Instagram Portrait",
        short: "4:5",
        width: 1080,
        height: 1350,
        ratio: "4:5",
        icon: "camera"
    },
    {
        id: "twitter",
        name: "Twitter Post",
        short: "16:9",
        width: 1200,
        height: 675,
        ratio: "16:9",
        icon: "bird"
    },
    {
        id: "facebook",
        name: "Facebook Post",
        short: "1.91:1",
        width: 1200,
        height: 630,
        ratio: "1.91:1",
        icon: "facebook"
    },
    {
        id: "pinterest",
        name: "Pinterest Pin",
        short: "2:3",
        width: 1000,
        height: 1500,
        ratio: "2:3",
        icon: "pin"
    },
    {
        id: "custom",
        name: "Custom Size",
        short: "Custom",
        width: 2000,
        height: 2000,
        ratio: "1:1",
        icon: "sliders"
    }
];
const COLORS = [
    "#FF5733",
    "#E11D48",
    "#F43F5E",
    "#F97316",
    "#FBBF24",
    "#FDE047",
    "#84CC16",
    "#22C55E",
    "#10B981",
    "#14B8A6",
    "#06B6D4",
    "#0EA5E9",
    "#3B82F6",
    "#6366F1",
    "#7C3AED",
    "#A855F7",
    "#D946EF",
    "#EC4899",
    "#FFFFFF",
    "#111111",
    "#334155",
    "#0F172A",
    "#78350F",
    "#A3A3A3"
];
const GRADIENTS = [
    {
        name: "Sunset",
        from: "#FF512F",
        to: "#DD2476"
    },
    {
        name: "Ocean",
        from: "#0F2027",
        to: "#2C5364"
    },
    {
        name: "Purple Dream",
        from: "#7F00FF",
        to: "#E100FF"
    },
    {
        name: "Neon",
        from: "#00FF87",
        to: "#60EFFF"
    },
    {
        name: "Fire",
        from: "#F12711",
        to: "#F5AF19"
    },
    {
        name: "Aurora",
        from: "#00C9FF",
        to: "#92FE9D"
    },
    {
        name: "Midnight",
        from: "#0F0C29",
        to: "#302B63"
    },
    {
        name: "Peach",
        from: "#FFD194",
        to: "#70E1F5"
    },
    {
        name: "Rose",
        from: "#FFAFBD",
        to: "#FFC3A0"
    },
    {
        name: "Forest",
        from: "#134E5E",
        to: "#71B280"
    },
    {
        name: "Gold",
        from: "#BF953F",
        to: "#FCF6BA"
    },
    {
        name: "Ice",
        from: "#E0EAFC",
        to: "#CFDEF3"
    },
    {
        name: "Grape",
        from: "#870000",
        to: "#190A05"
    },
    {
        name: "Candy",
        from: "#FF9A9E",
        to: "#FECFEF"
    },
    {
        name: "Steel",
        from: "#536976",
        to: "#292E49"
    }
];
const CHARACTERS = [
    {
        id: "ramesh",
        name: "Ramesh",
        hint: "रमेश • Young Hero",
        skin: "#C68642",
        shirt: "#2563EB",
        hair: "#1C1917",
        accessory: "none",
        variant: 0
    },
    {
        id: "suresh",
        name: "Suresh",
        hint: "सुरेश • Moustache",
        skin: "#B45309",
        shirt: "#059669",
        hair: "#18181B",
        accessory: "moustache",
        variant: 1
    },
    {
        id: "dadaji",
        name: "Dadaji",
        hint: "दादाजी • Grandpa",
        skin: "#D6A066",
        shirt: "#F5F5F4",
        hair: "#E7E5E4",
        accessory: "glasses-beard",
        variant: 2
    },
    {
        id: "neha",
        name: "Neha",
        hint: "नेहा • Kurti",
        skin: "#E8B48C",
        shirt: "#DB2777",
        hair: "#1C1917",
        accessory: "bindi",
        variant: 3
    },
    {
        id: "priya",
        name: "Priya",
        hint: "प्रिया • Saree",
        skin: "#D9A06B",
        shirt: "#7C3AED",
        hair: "#18181B",
        accessory: "bindi",
        variant: 4
    },
    {
        id: "vikram",
        name: "Vikram",
        hint: "विक्रम • Blazer",
        skin: "#A9622A",
        shirt: "#1F2937",
        hair: "#111111",
        accessory: "tie",
        variant: 5
    },
    {
        id: "anita",
        name: "Anita",
        hint: "अनीता • Ponytail",
        skin: "#E2AC82",
        shirt: "#EA580C",
        hair: "#27272A",
        accessory: "ponytail",
        variant: 6
    },
    {
        id: "rohan",
        name: "Rohan",
        hint: "रोहन • Cap",
        skin: "#C68642",
        shirt: "#0EA5E9",
        hair: "#18181B",
        accessory: "cap",
        variant: 7
    },
    {
        id: "meena",
        name: "Meena",
        hint: "मीना • Salwar",
        skin: "#D89A6A",
        shirt: "#16A34A",
        hair: "#1C1917",
        accessory: "dupatta",
        variant: 8
    },
    {
        id: "arjun",
        name: "Arjun",
        hint: "अर्जुन • Turban",
        skin: "#B96E3A",
        shirt: "#DC2626",
        hair: "#1C1917",
        accessory: "turban",
        variant: 9
    },
    {
        id: "kavita",
        name: "Kavita",
        hint: "कविता • Glasses",
        skin: "#E0AC85",
        shirt: "#0891B2",
        hair: "#18181B",
        accessory: "glasses-bun",
        variant: 10
    },
    {
        id: "sharmaji",
        name: "Sharma Ji",
        hint: "शर्माजी • Kurta",
        skin: "#C68958",
        shirt: "#F59E0B",
        hair: "#D4D4D8",
        accessory: "moustache",
        variant: 11
    }
];
const FINANCE_BASE = [
    {
        id: "house",
        label: "Dream House",
        hindi: "सपनों का घर",
        kind: "house"
    },
    {
        id: "car",
        label: "New Car",
        hindi: "नई गाड़ी",
        kind: "car"
    },
    {
        id: "bank",
        label: "Bank Building",
        hindi: "बैंक",
        kind: "bank"
    },
    {
        id: "fd",
        label: "FD Certificate",
        hindi: "एफडी प्रमाणपत्र",
        kind: "fd"
    },
    {
        id: "loan",
        label: "Loan Approved",
        hindi: "लोन स्वीकृत",
        kind: "loan"
    },
    {
        id: "coin",
        label: "Gold Coin",
        hindi: "सोने का सिक्का",
        kind: "coin"
    },
    {
        id: "rupee",
        label: "Rupee Stack",
        hindi: "रुपये",
        kind: "rupee"
    },
    {
        id: "chart",
        label: "Growth Chart",
        hindi: "ग्रोथ चार्ट",
        kind: "chart"
    },
    {
        id: "gold",
        label: "Gold Bar",
        hindi: "सोने की बार",
        kind: "gold"
    },
    {
        id: "wallet",
        label: "Digital Wallet",
        hindi: "डिजिटल वॉलेट",
        kind: "wallet"
    },
    {
        id: "atm",
        label: "ATM Machine",
        hindi: "एटीएम",
        kind: "atm"
    },
    {
        id: "briefcase",
        label: "Business Bag",
        hindi: "बिज़नेस बैग",
        kind: "briefcase"
    }
];
const FINANCE_ACCENTS = [
    {
        suffix: "gold",
        primary: "#FBBF24",
        secondary: "#B45309"
    },
    {
        suffix: "emerald",
        primary: "#34D399",
        secondary: "#047857"
    },
    {
        suffix: "blue",
        primary: "#60A5FA",
        secondary: "#1D4ED8"
    },
    {
        suffix: "violet",
        primary: "#C084FC",
        secondary: "#7E22CE"
    },
    {
        suffix: "coral",
        primary: "#FB7185",
        secondary: "#BE123C"
    }
];
const FINANCE_OBJECTS = FINANCE_BASE.flatMap(_c = (base)=>FINANCE_ACCENTS.map((accent)=>({
            ...base,
            id: `${base.id}-${accent.suffix}`,
            label: `${base.label} • ${accent.suffix}`,
            primary: accent.primary,
            secondary: accent.secondary
        })));
_c1 = FINANCE_OBJECTS;
const solid = (color, name)=>{
    void name;
    return {
        type: "solid",
        color,
        opacity: 100,
        gradient: {
            from: "#7C3AED",
            to: "#EC4899",
            direction: "top-bottom",
            intensity: 100,
            speed: 50,
            animated: false
        },
        image: {
            src: "",
            name: "",
            blur: 0,
            brightness: 100,
            opacity: 100,
            fit: "cover",
            position: "center"
        },
        pattern: {
            kind: "dots",
            color: "#FFFFFF",
            accent: "#7C3AED",
            size: 10,
            gap: 32,
            speed: 50,
            count: 40
        },
        video: {
            src: "",
            name: "",
            loop: true,
            playing: false
        }
    };
};
const defaultBackground = solid("#0B1020", "Night");
const grad = (name, from, to, direction = "top-bottom")=>({
        ...defaultBackground,
        type: "gradient",
        gradient: {
            from,
            to,
            direction,
            intensity: 100,
            speed: 45,
            animated: false
        }
    });
const pat = (name, kind, color, accent)=>({
        ...defaultBackground,
        type: "pattern",
        pattern: {
            kind,
            color,
            accent,
            size: kind === "particles" ? 6 : 12,
            gap: 40,
            speed: 50,
            count: 45
        }
    });
const SOLID_TILES = [
    {
        id: "s1",
        name: "Night",
        background: solid("#0B1020", "Night")
    },
    {
        id: "s2",
        name: "Pure White",
        background: solid("#FFFFFF", "Pure White")
    },
    {
        id: "s3",
        name: "Charcoal",
        background: solid("#18181B", "Charcoal")
    },
    {
        id: "s4",
        name: "Royal Blue",
        background: solid("#1D4ED8", "Royal Blue")
    },
    {
        id: "s5",
        name: "Crimson",
        background: solid("#BE123C", "Crimson")
    },
    {
        id: "s6",
        name: "Mint",
        background: solid("#10B981", "Mint")
    },
    {
        id: "s7",
        name: "Sunflower",
        background: solid("#FACC15", "Sunflower")
    },
    {
        id: "s8",
        name: "Lavender",
        background: solid("#A78BFA", "Lavender")
    }
];
const GRADIENT_TILES = GRADIENTS.slice(0, 12).map(_c2 = (g, i)=>({
        id: `g${i + 1}`,
        name: g.name,
        background: grad(g.name, g.from, g.to, i % 2 === 0 ? "top-bottom" : "diagonal")
    }));
_c3 = GRADIENT_TILES;
const PATTERN_TILES = [
    {
        id: "p1",
        name: "Soft Dots",
        background: pat("Soft Dots", "dots", "#FFFFFF", "#1E293B")
    },
    {
        id: "p2",
        name: "Neon Dots",
        background: pat("Neon Dots", "dots", "#A855F7", "#0B1020")
    },
    {
        id: "p3",
        name: "Blue Waves",
        background: pat("Blue Waves", "waves", "#38BDF8", "#0C4A6E")
    },
    {
        id: "p4",
        name: "Purple Waves",
        background: pat("Purple Waves", "waves", "#C084FC", "#2E1065")
    },
    {
        id: "p5",
        name: "Cyber Neon",
        background: pat("Cyber Neon", "neon", "#22D3EE", "#0F172A")
    },
    {
        id: "p6",
        name: "Pink Neon",
        background: pat("Pink Neon", "neon", "#F472B6", "#1C1917")
    },
    {
        id: "p7",
        name: "Star Particles",
        background: pat("Star Particles", "particles", "#FDE68A", "#111827")
    },
    {
        id: "p8",
        name: "Dust Particles",
        background: pat("Dust Particles", "particles", "#A5B4FC", "#0B1020")
    },
    {
        id: "p9",
        name: "Grid",
        background: pat("Grid", "grid", "#475569", "#0B1020")
    },
    {
        id: "p10",
        name: "Rings",
        background: pat("Rings", "rings", "#67E8F9", "#082F49")
    },
    {
        id: "p11",
        name: "City Lights",
        background: grad("City", "#0F172A", "#7C2D12", "top-bottom")
    },
    {
        id: "p12",
        name: "Space",
        background: pat("Space", "particles", "#FFFFFF", "#020617")
    },
    {
        id: "p13",
        name: "Fire",
        background: grad("Fire", "#7F1D1D", "#F59E0B", "top-bottom")
    },
    {
        id: "p14",
        name: "Aurora Sky",
        background: grad("Aurora", "#022C22", "#7C3AED", "diagonal")
    },
    {
        id: "p15",
        name: "Sunrise",
        background: grad("Sunrise", "#F97316", "#FDE68A", "top-bottom")
    },
    {
        id: "p16",
        name: "Deep Ocean",
        background: grad("Ocean", "#082F49", "#0F172A", "top-bottom")
    },
    {
        id: "p17",
        name: "Electric Grid",
        background: pat("Electric Grid", "grid", "#22D3EE", "#082F49")
    },
    {
        id: "p18",
        name: "Golden Rings",
        background: pat("Golden Rings", "rings", "#FBBF24", "#1C1917")
    },
    {
        id: "p19",
        name: "Lime Dots",
        background: pat("Lime Dots", "dots", "#A3E635", "#14532D")
    },
    {
        id: "p20",
        name: "Pink Waves",
        background: pat("Pink Waves", "waves", "#F9A8D4", "#500724")
    }
];
const BACKGROUND_TILES = [
    ...SOLID_TILES,
    ...GRADIENT_TILES,
    ...PATTERN_TILES
];
const TEXT_PRESETS = [
    {
        id: "title",
        label: "Add a heading",
        hindi: "बड़ा हैडिंग",
        size: 9,
        weight: 800,
        color: "#FFFFFF",
        font: "display"
    },
    {
        id: "subtitle",
        label: "Add a subheading",
        hindi: "छोटा हैडिंग",
        size: 5.5,
        weight: 700,
        color: "#E9D5FF",
        font: "sans"
    },
    {
        id: "body",
        label: "Add body text",
        hindi: "सामान्य टेक्स्ट",
        size: 3.5,
        weight: 400,
        color: "#E5E7EB",
        font: "sans"
    },
    {
        id: "gradient",
        label: "Gradient headline",
        hindi: "ग्रेडिएंट हैडिंग",
        size: 8,
        weight: 900,
        color: "#FFFFFF",
        font: "display"
    },
    {
        id: "outline",
        label: "Outline text",
        hindi: "आउटलाइन टेक्स्ट",
        size: 7,
        weight: 900,
        color: "transparent",
        font: "display"
    },
    {
        id: "pill",
        label: "Badge / Pill",
        hindi: "बैज",
        size: 3.2,
        weight: 700,
        color: "#FFFFFF",
        font: "sans"
    }
];
function makeTextLayer(presetId, text) {
    const p = TEXT_PRESETS.find((item)=>item.id === presetId) ?? TEXT_PRESETS[0];
    return {
        id: uid("txt"),
        name: p.label,
        kind: "text",
        x: 50,
        y: 50,
        w: 82,
        h: p.size * 2.6,
        rot: 0,
        opacity: 100,
        visible: true,
        locked: false,
        animation: "none",
        animSpeed: 1,
        text: text ?? p.label,
        font: p.font,
        size: p.size,
        weight: p.weight,
        color: p.color,
        italic: false,
        align: "center",
        lineHeight: 1.1,
        letterSpacing: 0,
        gradient: {
            enabled: p.id === "gradient",
            from: "#FDE047",
            to: "#F472B6"
        },
        border: {
            enabled: p.id === "outline",
            color: "#A855F7",
            width: 3
        },
        shadow: {
            enabled: false,
            color: "#000000",
            blur: 18,
            dx: 0,
            dy: 8
        },
        glow: {
            enabled: false,
            color: "#A855F7",
            blur: 24
        },
        pill: {
            enabled: p.id === "pill",
            color: "#7C3AED",
            opacity: 90,
            padding: 20
        }
    };
}
function makeCharacterLayer(def) {
    return {
        id: uid("chr"),
        name: def.name,
        kind: "character",
        x: 34,
        y: 62,
        w: 26,
        h: 45,
        rot: 0,
        opacity: 100,
        visible: true,
        locked: false,
        animation: "wave",
        animSpeed: 1,
        charId: def.id,
        skin: def.skin,
        shirt: def.shirt,
        hair: def.hair,
        accessory: def.accessory
    };
}
function makeFinanceLayer(def) {
    return {
        id: uid("fin"),
        name: def.label,
        kind: "finance",
        x: 68,
        y: 58,
        w: 24,
        h: 24,
        rot: 0,
        opacity: 100,
        visible: true,
        locked: false,
        animation: "float",
        animSpeed: 1,
        objectId: def.id,
        primary: def.primary,
        secondary: def.secondary
    };
}
function uid(prefix = "id") {
    return `${prefix}-${Math.random().toString(36).slice(2, 9)}-${Date.now().toString(36).slice(-4)}`;
}
function findCharacter(id) {
    return CHARACTERS.find((c)=>c.id === id) ?? CHARACTERS[0];
}
function financeKind(objectId) {
    return objectId.split("-")[0];
}
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "FINANCE_OBJECTS$FINANCE_BASE.flatMap");
__turbopack_context__.k.register(_c1, "FINANCE_OBJECTS");
__turbopack_context__.k.register(_c2, "GRADIENT_TILES$GRADIENTS.slice(0, 12).map");
__turbopack_context__.k.register(_c3, "GRADIENT_TILES");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clamp",
    ()=>clamp,
    "downloadBlob",
    ()=>downloadBlob,
    "formatClock",
    ()=>formatClock,
    "hexToRgb",
    ()=>hexToRgb,
    "mixColors",
    ()=>mixColors,
    "seededRandom",
    ()=>seededRandom,
    "slugify",
    ()=>slugify
]);
function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
}
function hexToRgb(hex) {
    const clean = hex.replace("#", "");
    const full = clean.length === 3 ? clean.split("").map((c)=>c + c).join("") : clean;
    const num = Number.parseInt(full, 16);
    if (Number.isNaN(num)) return [
        255,
        255,
        255
    ];
    return [
        num >> 16 & 255,
        num >> 8 & 255,
        num & 255
    ];
}
function mixColors(a, b, t) {
    const [r1, g1, b1] = hexToRgb(a);
    const [r2, g2, b2] = hexToRgb(b);
    const mix = (x, y)=>Math.round(x + (y - x) * clamp(t, 0, 1));
    return `rgb(${mix(r1, r2)}, ${mix(g1, g2)}, ${mix(b1, b2)})`;
}
function seededRandom(seed) {
    const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453123;
    return x - Math.floor(x);
}
function formatClock(seconds) {
    const s = Math.max(0, seconds);
    const mm = Math.floor(s / 60).toString().padStart(2, "0");
    const ss = Math.floor(s % 60).toString().padStart(2, "0");
    return `${mm}:${ss}`;
}
function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(()=>URL.revokeObjectURL(url), 4000);
}
function slugify(text) {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "design";
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/videoExport.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "detectMp4Support",
    ()=>detectMp4Support,
    "encodeMp4",
    ()=>encodeMp4,
    "encodeWebm",
    ()=>encodeWebm,
    "renderTestFrame",
    ()=>renderTestFrame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$server$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/server.browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mp4$2d$muxer$2f$build$2f$mp4$2d$muxer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mp4-muxer/build/mp4-muxer.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$art$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/art.tsx [app-client] (ecmascript)");
;
;
;
;
const AVC_CODECS = [
    "avc1.640033",
    "avc1.640028",
    "avc1.4d4033",
    "avc1.4d4028",
    "avc1.42e028"
];
function targetScale(size, width, height) {
    return {
        W: size.width,
        H: size.height,
        outW: width,
        outH: height
    };
}
function baseColor(scene) {
    const bg = scene.background;
    if (bg.type === "solid") return bg.color;
    if (bg.type === "gradient") return bg.gradient.from;
    if (bg.type === "pattern") return bg.pattern.accent;
    return "#050508";
}
function sceneSvgMarkup(scene, W, H, timeMs, outW, outH) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$server$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderToStaticMarkup"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: outW,
        height: outH,
        viewBox: `0 0 ${W} ${H}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$art$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SceneSvg"], {
            scene: scene,
            W: W,
            H: H,
            time: timeMs,
            prefix: "videoexport"
        }, void 0, false, {
            fileName: "[project]/lib/videoExport.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/lib/videoExport.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this));
}
function frameAt(project, seconds) {
    const scenes = project.scenes;
    let remaining = Math.max(0, seconds);
    for(let i = 0; i < scenes.length; i++){
        const duration = scenes[i].duration;
        if (remaining < duration || i === scenes.length - 1) {
            return {
                scene: scenes[i],
                localMs: Math.min(remaining, duration) * 1000
            };
        }
        remaining -= duration;
    }
    return {
        scene: scenes[0],
        localMs: 0
    };
}
function imageFromMarkup(markup) {
    return new Promise((resolve, reject)=>{
        const url = URL.createObjectURL(new Blob([
            markup
        ], {
            type: "image/svg+xml;charset=utf-8"
        }));
        const image = new Image();
        image.onload = ()=>{
            URL.revokeObjectURL(url);
            resolve(image);
        };
        image.onerror = ()=>{
            URL.revokeObjectURL(url);
            reject(new Error("Failed to rasterize animation frame"));
        };
        image.src = url;
    });
}
async function drawFrame(canvas, project, seconds, width, height) {
    const { W, H } = targetScale(project.size, width, height);
    const { scene, localMs } = frameAt(project, seconds);
    if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
    }
    const ctx = canvas.getContext("2d", {
        alpha: false
    });
    if (!ctx) throw new Error("2D canvas unavailable");
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.fillStyle = baseColor(scene);
    ctx.fillRect(0, 0, width, height);
    if (document.fonts?.ready) await document.fonts.ready;
    const image = await imageFromMarkup(sceneSvgMarkup(scene, W, H, localMs, width, height));
    ctx.drawImage(image, 0, 0, width, height);
}
async function renderTestFrame(project, width, height) {
    const previewW = Math.min(220, width);
    const previewH = Math.max(1, Math.round(height / width * previewW));
    const canvas = document.createElement("canvas");
    await drawFrame(canvas, project, 0, previewW, previewH);
    const ctx = canvas.getContext("2d", {
        alpha: false
    });
    let visible = 0;
    if (ctx) {
        const { data } = ctx.getImageData(0, 0, previewW, previewH);
        for(let i = 0; i < data.length; i += 4 * 97){
            if (data[i] + data[i + 1] + data[i + 2] > 45) visible++;
        }
    }
    return {
        dataUrl: canvas.toDataURL("image/png"),
        ok: visible > 4
    };
}
async function detectMp4Support(width, height, fps) {
    if (typeof VideoEncoder === "undefined" || typeof VideoFrame === "undefined") {
        return {
            supported: false,
            codec: null,
            message: "VideoEncoder is not available in this browser."
        };
    }
    const bitrate = width >= 2000 ? 12_000_000 : 8_000_000;
    for (const codec of AVC_CODECS){
        const config = {
            codec,
            width,
            height,
            bitrate,
            framerate: fps,
            avc: {
                format: "avc"
            }
        };
        try {
            const result = await VideoEncoder.isConfigSupported(config);
            if (result.supported) {
                return {
                    supported: true,
                    codec,
                    message: `H.264 ${codec} supported`
                };
            }
        } catch  {
            continue;
        }
    }
    return {
        supported: false,
        codec: null,
        message: "This browser cannot encode H.264 MP4."
    };
}
function abortError() {
    return new DOMException("Export cancelled", "AbortError");
}
async function encodeMp4(options) {
    const { project, width, height, fps, duration, signal, onProgress } = options;
    const support = await detectMp4Support(width, height, fps);
    if (!support.supported || !support.codec) throw new Error(support.message);
    const muxer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mp4$2d$muxer$2f$build$2f$mp4$2d$muxer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Muxer"]({
        target: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mp4$2d$muxer$2f$build$2f$mp4$2d$muxer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrayBufferTarget"](),
        video: {
            codec: "avc",
            width,
            height,
            frameRate: fps
        },
        fastStart: "in-memory",
        firstTimestampBehavior: "offset"
    });
    let encodeError = null;
    const encoder = new VideoEncoder({
        output: (chunk, meta)=>{
            try {
                muxer.addVideoChunk(chunk, meta);
            } catch (error) {
                encodeError = error instanceof Error ? error : new Error(String(error));
            }
        },
        error: (error)=>{
            encodeError = error instanceof Error ? error : new Error(String(error));
        }
    });
    const bitrate = width >= 2000 ? 12_000_000 : 8_000_000;
    encoder.configure({
        codec: support.codec,
        width,
        height,
        bitrate,
        framerate: fps,
        avc: {
            format: "avc"
        },
        latencyMode: "quality"
    });
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const totalFrames = Math.max(1, Math.floor(fps * duration));
    const frameDuration = Math.round(1_000_000 / fps);
    const fontsReady = document.fonts?.ready ?? Promise.resolve();
    try {
        for(let i = 0; i < totalFrames; i++){
            if (signal.aborted) throw abortError();
            if (encodeError) throw encodeError;
            await fontsReady;
            await drawFrame(canvas, project, i / fps, width, height);
            if (signal.aborted) throw abortError();
            const frame = new VideoFrame(canvas, {
                timestamp: Math.round(i * 1_000_000 / fps),
                duration: frameDuration
            });
            encoder.encode(frame, {
                keyFrame: i % (fps * 2) === 0
            });
            frame.close();
            while(encoder.encodeQueueSize > 10 && !signal.aborted){
                await new Promise((resolve)=>setTimeout(resolve, 0));
            }
            onProgress({
                percent: Math.min(100, Math.round((i + 1) / totalFrames * 100)),
                frame: i + 1,
                totalFrames,
                stage: "Encoding H.264"
            });
        }
        if (signal.aborted) throw abortError();
        await encoder.flush();
        if (encodeError) throw encodeError;
        muxer.finalize();
        return new Blob([
            muxer.target.buffer
        ], {
            type: "video/mp4"
        });
    } finally{
        if (encoder.state !== "closed") encoder.close();
    }
}
function webmMime() {
    const candidates = [
        "video/webm;codecs=vp9",
        "video/webm;codecs=vp8",
        "video/webm"
    ];
    for (const mime of candidates){
        if (typeof MediaRecorder !== "undefined" && MediaRecorder.isTypeSupported(mime)) return mime;
    }
    return "video/webm";
}
async function encodeWebm(options) {
    if (typeof MediaRecorder === "undefined") throw new Error("This browser cannot record WebM either. Use latest Chrome.");
    const { project, width, height, fps, duration, signal, onProgress } = options;
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    await drawFrame(canvas, project, 0, width, height);
    const stream = canvas.captureStream(fps);
    const mimeType = webmMime();
    const recorder = new MediaRecorder(stream, {
        mimeType,
        videoBitsPerSecond: width >= 2000 ? 12_000_000 : 8_000_000
    });
    const chunks = [];
    recorder.ondataavailable = (event)=>{
        if (event.data.size > 0) chunks.push(event.data);
    };
    const finished = new Promise((resolve, reject)=>{
        recorder.onstop = ()=>resolve();
        recorder.onerror = ()=>reject(new Error("WebM recording failed"));
    });
    recorder.start(250);
    const totalFrames = Math.max(1, Math.floor(fps * duration));
    const started = performance.now();
    try {
        for(let i = 0; i < totalFrames; i++){
            if (signal.aborted) throw abortError();
            const target = started + i * 1000 / fps;
            const wait = target - performance.now();
            if (wait > 0) await new Promise((resolve)=>setTimeout(resolve, wait));
            await drawFrame(canvas, project, i / fps, width, height);
            onProgress({
                percent: Math.min(100, Math.round((i + 1) / totalFrames * 100)),
                frame: i + 1,
                totalFrames,
                stage: "Recording WebM"
            });
        }
    } finally{
        if (recorder.state !== "inactive") recorder.stop();
        await finished;
        stream.getTracks().forEach((track)=>track.stop());
    }
    const blob = new Blob(chunks, {
        type: mimeType
    });
    if (blob.size === 0) throw new Error("WebM recording produced an empty file");
    return blob;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1nff17b1bik05._.js.map