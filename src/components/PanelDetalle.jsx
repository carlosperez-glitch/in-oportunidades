import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/PanelDetalle.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=3e6c267d"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$(), _s2 = $RefreshSig$(), _s3 = $RefreshSig$(), _s4 = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=3e6c267d"; const useState = __vite__cjsImport3_react["useState"]; const useEffect = __vite__cjsImport3_react["useEffect"]; const useRef = __vite__cjsImport3_react["useRef"];
import { estadoColor, colors } from "/src/theme.js";
const SECCIONES = [
  { id: "resumen", label: "Resumen" },
  { id: "sobremi", label: "Sobre mi" },
  { id: "equipo", label: "Equipo" },
  { id: "estadoactual", label: "Estado actual" },
  { id: "problema", label: "Problema y aportacion de valor" },
  { id: "fases", label: "Fases de la operacion" },
  { id: "situacion", label: "Situacion actual y proximos pasos" },
  { id: "analisis", label: "Analisis economico" },
  { id: "desglose", label: "Desglose de la inversion" },
  { id: "destino", label: "Destino y por que" },
  { id: "escenarios", label: "Escenarios" },
  { id: "fiscalidad", label: "Fiscalidad y PBC" },
  { id: "solvencia", label: "Solvencia y transparencia" },
  { id: "documentacion", label: "Documentacion" },
  { id: "observaciones", label: "Observaciones y preguntas" },
  { id: "resenas", label: "Resenas" }
];
function Lbl({ children }) {
  return /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 10, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 3 }, children }, void 0, false, {
    fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
    lineNumber: 46,
    columnNumber: 10
  }, this);
}
_c = Lbl;
function Divider() {
  return /* @__PURE__ */ jsxDEV("div", { style: { height: 1, background: "#f3f4f6", margin: "16px 0" } }, void 0, false, {
    fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
    lineNumber: 49,
    columnNumber: 10
  }, this);
}
_c2 = Divider;
function SecTitle({ children }) {
  return /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 11, fontWeight: 700, color: "#374151", marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.06em" }, children }, void 0, false, {
    fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
    lineNumber: 52,
    columnNumber: 10
  }, this);
}
_c3 = SecTitle;
function Txt({ text }) {
  return /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 13, color: "#374151", lineHeight: 1.6, whiteSpace: "pre-line" }, children: text }, void 0, false, {
    fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
    lineNumber: 55,
    columnNumber: 10
  }, this);
}
_c4 = Txt;
function Stars({ n, interactive, onSet }) {
  return /* @__PURE__ */ jsxDEV("span", { children: [1, 2, 3, 4, 5].map(function(i) {
    return /* @__PURE__ */ jsxDEV(
      "span",
      {
        onClick: interactive ? function() {
          onSet(i);
        } : void 0,
        style: { color: i <= Math.round(n) ? "#f59e0b" : "#e5e7eb", fontSize: interactive ? 22 : 13, cursor: interactive ? "pointer" : "default" },
        children: i <= Math.round(n) ? "★" : "☆"
      },
      i,
      false,
      {
        fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
        lineNumber: 62,
        columnNumber: 11
      },
      this
    );
  }) }, void 0, false, {
    fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
    lineNumber: 59,
    columnNumber: 5
  }, this);
}
_c5 = Stars;
function Lightbox({ items, index, onClose, onPrev, onNext }) {
  _s();
  useEffect(function() {
    function onKey(e) {
      if (e.key === "Escape")
        onClose();
      if (e.key === "ArrowLeft")
        onPrev();
      if (e.key === "ArrowRight")
        onNext();
    }
    window.addEventListener("keydown", onKey);
    return function() {
      window.removeEventListener("keydown", onKey);
    };
  }, []);
  return /* @__PURE__ */ jsxDEV("div", { onClick: onClose, style: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", zIndex: 1e3, display: "flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ jsxDEV("div", { onClick: function(e) {
    e.stopPropagation();
  }, style: { background: "#fff", borderRadius: 10, padding: "28px 32px", minWidth: 280, textAlign: "center", position: "relative" }, children: [
    /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 14, fontWeight: 600, color: "#111", marginBottom: 12 }, children: items[index] }, void 0, false, {
      fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
      lineNumber: 88,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { style: { width: 240, height: 160, background: "#f3f4f6", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", color: "#9ca3af", fontSize: 12, margin: "0 auto 16px" }, children: "Documento" }, void 0, false, {
      fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
      lineNumber: 89,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
      /* @__PURE__ */ jsxDEV("button", { onClick: onPrev, disabled: index === 0, style: { border: "1.5px solid #e5e7eb", borderRadius: 6, padding: "5px 12px", cursor: index === 0 ? "default" : "pointer", background: "#fff", color: index === 0 ? "#d1d5db" : "#374151", fontFamily: "inherit", fontSize: 12 }, children: "Anterior" }, void 0, false, {
        fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
        lineNumber: 91,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 11, color: "#9ca3af" }, children: [
        index + 1,
        " / ",
        items.length
      ] }, void 0, true, {
        fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
        lineNumber: 92,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("button", { onClick: onNext, disabled: index === items.length - 1, style: { border: "1.5px solid #e5e7eb", borderRadius: 6, padding: "5px 12px", cursor: index === items.length - 1 ? "default" : "pointer", background: "#fff", color: index === items.length - 1 ? "#d1d5db" : "#374151", fontFamily: "inherit", fontSize: 12 }, children: "Siguiente" }, void 0, false, {
        fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
        lineNumber: 93,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
      lineNumber: 90,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("button", { onClick: onClose, style: { position: "absolute", top: 8, right: 12, background: "none", border: "none", fontSize: 20, cursor: "pointer", color: "#9ca3af" }, children: "x" }, void 0, false, {
      fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
      lineNumber: 95,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
    lineNumber: 87,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
    lineNumber: 86,
    columnNumber: 5
  }, this);
}
_s(Lightbox, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c6 = Lightbox;
function SubvistaObservaciones({ observaciones: initialObs, onBack }) {
  _s2();
  var [obs, setObs] = useState(initialObs);
  var [input, setInput] = useState("");
  function enviar() {
    if (!input.trim())
      return;
    setObs(function(prev) {
      return prev.concat({ autor: "Carlos Perez", esGestor: false, texto: input.trim(), fecha: "Ahora" });
    });
    setInput("");
  }
  return /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexDirection: "column", height: "100%", fontFamily: "'DM Sans', sans-serif" }, children: [
    /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", padding: "12px 20px", borderBottom: "1px solid #f3f4f6", flexShrink: 0 }, children: /* @__PURE__ */ jsxDEV("button", { onClick: onBack, style: { background: "none", border: "none", cursor: "pointer", padding: 0, marginRight: 4, display: "flex", alignItems: "center" }, children: /* @__PURE__ */ jsxDEV("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", children: /* @__PURE__ */ jsxDEV("path", { d: "M13 4L7 10L13 16", stroke: "#374151", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
      fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
      lineNumber: 116,
      columnNumber: 71
    }, this) }, void 0, false, {
      fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
      lineNumber: 116,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
      lineNumber: 115,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
      lineNumber: 114,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { style: { flex: 1, overflowY: "auto", padding: "16px 20px" }, children: obs.map(function(o, i) {
      return /* @__PURE__ */ jsxDEV("div", { style: { marginBottom: 16 }, children: [
        /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 12, fontWeight: 600, color: o.esGestor ? "#7c3aed" : "#111", marginBottom: 4 }, children: o.autor }, void 0, false, {
          fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
          lineNumber: 123,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 13, color: "#374151", lineHeight: 1.5 }, children: o.texto }, void 0, false, {
          fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
          lineNumber: 124,
          columnNumber: 15
        }, this)
      ] }, i, true, {
        fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
        lineNumber: 122,
        columnNumber: 13
      }, this);
    }) }, void 0, false, {
      fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
      lineNumber: 119,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { style: { padding: "12px 20px", borderTop: "1px solid #f3f4f6", display: "flex", gap: 8, flexShrink: 0, background: "#fff" }, children: [
      /* @__PURE__ */ jsxDEV(
        "input",
        {
          value: input,
          onChange: function(e) {
            setInput(e.target.value);
          },
          onKeyDown: function(e) {
            if (e.key === "Enter")
              enviar();
          },
          placeholder: "Observacion o pregunta",
          style: { flex: 1, padding: "10px 14px", border: "1.5px solid #e5e7eb", borderRadius: 8, fontSize: 13, fontFamily: "inherit", outline: "none" }
        },
        void 0,
        false,
        {
          fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
          lineNumber: 130,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV("button", { onClick: enviar, style: { padding: "10px 18px", background: "#7c3aed", color: "#fff", border: "none", borderRadius: 8, fontSize: 13, fontWeight: 600, fontFamily: "inherit", cursor: "pointer" }, children: "Enviar" }, void 0, false, {
        fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
        lineNumber: 133,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
      lineNumber: 129,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
    lineNumber: 113,
    columnNumber: 5
  }, this);
}
_s2(SubvistaObservaciones, "R/d+4oy2eSCAjXDX+U5txq+vfeA=");
_c7 = SubvistaObservaciones;
function SubvistaResenas({ resenas: initialResenas, onBack }) {
  _s3();
  var [resenas, setResenas] = useState(initialResenas);
  var [inputText, setInputText] = useState("");
  var [inputRating, setInputRating] = useState(0);
  var media = resenas.length > 0 ? (resenas.reduce(function(s, r) {
    return s + r.rating;
  }, 0) / resenas.length).toFixed(1) : "0.0";
  function valorar() {
    if (!inputText.trim() || inputRating === 0)
      return;
    setResenas(function(prev) {
      return prev.concat({ autor: "Carlos Perez", rating: inputRating, texto: inputText.trim(), fecha: "Ahora" });
    });
    setInputText("");
    setInputRating(0);
  }
  return /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexDirection: "column", height: "100%", fontFamily: "'DM Sans', sans-serif" }, children: [
    /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", padding: "12px 20px", borderBottom: "1px solid #f3f4f6", flexShrink: 0 }, children: /* @__PURE__ */ jsxDEV("button", { onClick: onBack, style: { background: "none", border: "none", cursor: "pointer", padding: 0, marginRight: 4, display: "flex", alignItems: "center" }, children: /* @__PURE__ */ jsxDEV("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", children: /* @__PURE__ */ jsxDEV("path", { d: "M13 4L7 10L13 16", stroke: "#374151", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
      fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
      lineNumber: 160,
      columnNumber: 71
    }, this) }, void 0, false, {
      fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
      lineNumber: 160,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
      lineNumber: 159,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
      lineNumber: 158,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { style: { flex: 1, overflowY: "auto", padding: "16px 20px" }, children: [
      /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: 16, marginBottom: 16, paddingBottom: 16, borderBottom: "1px solid #f3f4f6" }, children: [
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 10, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 2 }, children: "Valoracion" }, void 0, false, {
            fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
            lineNumber: 167,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: 6 }, children: [
            /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 18, fontWeight: 700, color: "#111" }, children: media }, void 0, false, {
              fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
              lineNumber: 169,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV(Stars, { n: parseFloat(media) }, void 0, false, {
              fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
              lineNumber: 170,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
            lineNumber: 168,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
          lineNumber: 166,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { borderLeft: "1px solid #f3f4f6", paddingLeft: 16 }, children: [
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 10, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 2 }, children: "Evaluaciones de esta transaccion" }, void 0, false, {
            fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
            lineNumber: 174,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 18, fontWeight: 700, color: "#111" }, children: resenas.length }, void 0, false, {
            fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
            lineNumber: 175,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
          lineNumber: 173,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
        lineNumber: 165,
        columnNumber: 9
      }, this),
      resenas.map(function(r, i) {
        return /* @__PURE__ */ jsxDEV("div", { style: { marginBottom: 16, paddingBottom: 16, borderBottom: "1px solid #f3f4f6" }, children: [
          /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 4 }, children: [
            /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 12, fontWeight: 600, color: "#111" }, children: r.autor }, void 0, false, {
              fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
              lineNumber: 183,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: 6 }, children: [
              /* @__PURE__ */ jsxDEV(Stars, { n: r.rating }, void 0, false, {
                fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
                lineNumber: 185,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 11, color: "#9ca3af" }, children: r.fecha }, void 0, false, {
                fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
                lineNumber: 186,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
              lineNumber: 184,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
            lineNumber: 182,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 13, color: "#374151", lineHeight: 1.5 }, children: r.texto }, void 0, false, {
            fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
            lineNumber: 189,
            columnNumber: 15
          }, this)
        ] }, i, true, {
          fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
          lineNumber: 181,
          columnNumber: 13
        }, this);
      })
    ] }, void 0, true, {
      fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
      lineNumber: 163,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { style: { padding: "12px 20px", borderTop: "1px solid #f3f4f6", flexShrink: 0, background: "#fff" }, children: [
      /* @__PURE__ */ jsxDEV("div", { style: { marginBottom: 8 }, children: /* @__PURE__ */ jsxDEV(Stars, { n: inputRating, interactive: true, onSet: setInputRating }, void 0, false, {
        fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
        lineNumber: 195,
        columnNumber: 42
      }, this) }, void 0, false, {
        fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
        lineNumber: 195,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", gap: 8 }, children: [
        /* @__PURE__ */ jsxDEV(
          "input",
          {
            value: inputText,
            onChange: function(e) {
              setInputText(e.target.value);
            },
            onKeyDown: function(e) {
              if (e.key === "Enter")
                valorar();
            },
            placeholder: "Resena",
            style: { flex: 1, padding: "10px 14px", border: "1.5px solid #e5e7eb", borderRadius: 8, fontSize: 13, fontFamily: "inherit", outline: "none" }
          },
          void 0,
          false,
          {
            fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
            lineNumber: 197,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV("button", { onClick: valorar, style: { padding: "10px 18px", background: "#7c3aed", color: "#fff", border: "none", borderRadius: 8, fontSize: 13, fontWeight: 600, fontFamily: "inherit", cursor: "pointer" }, children: "Valorar" }, void 0, false, {
          fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
          lineNumber: 200,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
        lineNumber: 196,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
      lineNumber: 194,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
    lineNumber: 157,
    columnNumber: 5
  }, this);
}
_s3(SubvistaResenas, "m8LLcPCn/FDZM08huKu1xImYLrg=");
_c8 = SubvistaResenas;
export default function PanelDetalle({ detalle: d, onClose, inline }) {
  _s4();
  var [seccion, setSeccion] = useState("resumen");
  var [ddOpen, setDdOpen] = useState(false);
  var [subvista, setSubvista] = useState(null);
  var [lb, setLb] = useState({ open: false, index: 0, items: [] });
  var scrollRef = useRef(null);
  var refs = useRef({});
  function goTo(id) {
    setDdOpen(false);
    setSeccion(id);
    var el = refs.current[id];
    if (el && scrollRef.current) {
      scrollRef.current.scrollTo({ top: el.offsetTop - 8, behavior: "smooth" });
    }
  }
  var secLabel = (SECCIONES.find(function(s) {
    return s.id === seccion;
  }) || {}).label || "Resumen";
  var gAp = 40, gApK = 92, gRep = 60, gRepK = 120;
  var iAp = 60, iApK = 138, iRep = 40, iRepK = 80;
  var tApK = gApK + iApK, tRepK = gRepK + iRepK;
  function roiAbs(repK, apK) {
    return apK > 0 ? Math.round(repK / apK * 100) : 0;
  }
  function roiAn(abs, m) {
    return m > 0 ? Math.round(abs / m * 12) : 0;
  }
  function EconRow(props) {
    var abs = roiAbs(props.repK, props.apK);
    var an = roiAn(abs, d.meses);
    return /* @__PURE__ */ jsxDEV("tr", { style: { borderTop: "1px solid #f3f4f6" }, children: [
      /* @__PURE__ */ jsxDEV("td", { style: { padding: "5px 0", fontWeight: 500, color: "#374151", fontSize: 12 }, children: props.label }, void 0, false, {
        fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
        lineNumber: 239,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("td", { style: { textAlign: "right", color: "#6b7280", fontSize: 12 }, children: props.ap != null ? props.ap : "" }, void 0, false, {
        fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
        lineNumber: 240,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("td", { style: { textAlign: "right", color: "#6b7280", fontSize: 12 }, children: props.apK }, void 0, false, {
        fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
        lineNumber: 241,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("td", { style: { textAlign: "right", color: "#6b7280", fontSize: 12 }, children: props.rep != null ? props.rep : "" }, void 0, false, {
        fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
        lineNumber: 242,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("td", { style: { textAlign: "right", color: "#6b7280", fontSize: 12 }, children: props.repK }, void 0, false, {
        fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
        lineNumber: 243,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("td", { style: { textAlign: "right", fontWeight: props.bold ? 700 : 400, color: "#111", fontSize: 12 }, children: abs }, void 0, false, {
        fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
        lineNumber: 244,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("td", { style: { textAlign: "right", fontWeight: props.bold ? 700 : 400, color: props.bold ? "#e53e3e" : "#111", fontSize: 12 }, children: an }, void 0, false, {
        fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
        lineNumber: 245,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
      lineNumber: 238,
      columnNumber: 7
    }, this);
  }
  if (subvista === "observaciones") {
    var sv = /* @__PURE__ */ jsxDEV(SubvistaObservaciones, { observaciones: d.observaciones, onBack: function() {
      setSubvista(null);
    } }, void 0, false, {
      fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
      lineNumber: 252,
      columnNumber: 14
    }, this);
    if (inline)
      return sv;
    return /* @__PURE__ */ jsxDEV("div", { onClick: onClose, style: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.18)", zIndex: 200, display: "flex", alignItems: "flex-end", justifyContent: "center" }, children: /* @__PURE__ */ jsxDEV("div", { onClick: function(e) {
      e.stopPropagation();
    }, style: { background: "#fff", borderRadius: "16px 16px 0 0", width: "100%", maxWidth: 480, maxHeight: "92vh", display: "flex", flexDirection: "column" }, children: sv }, void 0, false, {
      fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
      lineNumber: 256,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
      lineNumber: 255,
      columnNumber: 7
    }, this);
  }
  if (subvista === "resenas") {
    var sv2 = /* @__PURE__ */ jsxDEV(SubvistaResenas, { resenas: d.resenas, onBack: function() {
      setSubvista(null);
    } }, void 0, false, {
      fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
      lineNumber: 261,
      columnNumber: 15
    }, this);
    if (inline)
      return sv2;
    return /* @__PURE__ */ jsxDEV("div", { onClick: onClose, style: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.18)", zIndex: 200, display: "flex", alignItems: "flex-end", justifyContent: "center" }, children: /* @__PURE__ */ jsxDEV("div", { onClick: function(e) {
      e.stopPropagation();
    }, style: { background: "#fff", borderRadius: "16px 16px 0 0", width: "100%", maxWidth: 480, maxHeight: "92vh", display: "flex", flexDirection: "column" }, children: sv2 }, void 0, false, {
      fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
      lineNumber: 265,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
      lineNumber: 264,
      columnNumber: 7
    }, this);
  }
  var body = /* @__PURE__ */ jsxDEV("div", { style: { fontFamily: "'DM Sans', sans-serif", display: "flex", flexDirection: "column", height: "100%" }, children: [
    /* @__PURE__ */ jsxDEV("div", { style: { position: "sticky", top: 0, background: "#fff", zIndex: 10, borderBottom: "1px solid #f3f4f6", flexShrink: 0 }, children: /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 20px" }, children: [
      /* @__PURE__ */ jsxDEV("div", { style: { position: "relative" }, children: [
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: function() {
              setDdOpen(function(o) {
                return !o;
              });
            },
            style: { background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 5, padding: 0, fontFamily: "inherit" },
            children: [
              /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 14, fontWeight: 600, color: "#111" }, children: secLabel }, void 0, false, {
                fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
                lineNumber: 279,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 11, color: "#6b7280" }, children: "v" }, void 0, false, {
                fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
                lineNumber: 280,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
            lineNumber: 277,
            columnNumber: 13
          },
          this
        ),
        ddOpen && /* @__PURE__ */ jsxDEV("div", { style: { position: "absolute", top: "calc(100% + 6px)", left: 0, background: "#fff", border: "1px solid #e5e7eb", borderRadius: 10, boxShadow: "0 4px 16px rgba(0,0,0,0.10)", zIndex: 50, minWidth: 260, padding: "6px 0", maxHeight: 400, overflowY: "auto" }, children: SECCIONES.map(function(s) {
          return /* @__PURE__ */ jsxDEV(
            "div",
            {
              onClick: function() {
                goTo(s.id);
              },
              style: { padding: "9px 16px", fontSize: 13, color: seccion === s.id ? "#7c3aed" : "#374151", fontWeight: seccion === s.id ? 600 : 400, cursor: "pointer", background: seccion === s.id ? "#f5f3ff" : "transparent" },
              children: s.label
            },
            s.id,
            false,
            {
              fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
              lineNumber: 286,
              columnNumber: 17
            },
            this
          );
        }) }, void 0, false, {
          fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
          lineNumber: 283,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
        lineNumber: 276,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("button", { onClick: onClose, style: { background: "none", border: "none", fontSize: 20, cursor: "pointer", color: "#9ca3af", lineHeight: 1 }, children: "x" }, void 0, false, {
        fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
        lineNumber: 295,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
      lineNumber: 275,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
      lineNumber: 274,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { ref: scrollRef, style: { flex: 1, overflowY: "auto", padding: "0 20px 80px" }, children: [
      /* @__PURE__ */ jsxDEV("div", { ref: function(el) {
        refs.current["resumen"] = el;
      }, style: { paddingTop: 16 }, children: [
        /* @__PURE__ */ jsxDEV("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 8, marginBottom: 12 }, children: [
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV(Lbl, { children: "Estado" }, void 0, false, {
              fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
              lineNumber: 305,
              columnNumber: 18
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 12, color: estadoColor[d.estado] || "#374151" }, children: d.estado }, void 0, false, {
              fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
              lineNumber: 305,
              columnNumber: 35
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
            lineNumber: 305,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV(Lbl, { children: "Gestor" }, void 0, false, {
              fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
              lineNumber: 306,
              columnNumber: 18
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 12, color: "#7c3aed", fontWeight: 500 }, children: [
              d.gestor,
              " ",
              d.gestorRating,
              " *"
            ] }, void 0, true, {
              fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
              lineNumber: 306,
              columnNumber: 35
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
            lineNumber: 306,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV(Lbl, { children: "Estrategia" }, void 0, false, {
              fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
              lineNumber: 307,
              columnNumber: 18
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 12, color: "#111" }, children: d.estrategia }, void 0, false, {
              fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
              lineNumber: 307,
              columnNumber: 39
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
            lineNumber: 307,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV(Lbl, { children: "Tipo" }, void 0, false, {
              fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
              lineNumber: 308,
              columnNumber: 18
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 12, color: "#111" }, children: d.tipo }, void 0, false, {
              fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
              lineNumber: 308,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
            lineNumber: 308,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
          lineNumber: 304,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 14 }, children: [
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV(Lbl, { children: "Meses" }, void 0, false, {
              fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
              lineNumber: 311,
              columnNumber: 18
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 12, color: "#111" }, children: d.meses }, void 0, false, {
              fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
              lineNumber: 311,
              columnNumber: 34
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
            lineNumber: 311,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV(Lbl, { children: "Provincia" }, void 0, false, {
              fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
              lineNumber: 312,
              columnNumber: 18
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 12, color: "#111" }, children: d.provincia }, void 0, false, {
              fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
              lineNumber: 312,
              columnNumber: 38
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
            lineNumber: 312,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV(Lbl, { children: "Fecha de inicio" }, void 0, false, {
              fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
              lineNumber: 313,
              columnNumber: 18
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 12, color: "#111" }, children: d.fechaInicio }, void 0, false, {
              fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
              lineNumber: 313,
              columnNumber: 44
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
            lineNumber: 313,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
          lineNumber: 310,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(Divider, {}, void 0, false, {
          fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
          lineNumber: 315,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("table", { style: { width: "100%", borderCollapse: "collapse", marginBottom: 4 }, children: [
          /* @__PURE__ */ jsxDEV("thead", { children: /* @__PURE__ */ jsxDEV("tr", { children: [
            /* @__PURE__ */ jsxDEV("th", { style: { textAlign: "left", color: "#9ca3af", fontWeight: 400, paddingBottom: 5, fontSize: 11 } }, void 0, false, {
              fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
              lineNumber: 319,
              columnNumber: 17
            }, this),
            ["Aport %", "K EUR", "Rep %", "K EUR", "ROI abs", "an"].map(function(h) {
              return /* @__PURE__ */ jsxDEV("th", { style: { textAlign: "right", color: "#9ca3af", fontWeight: 400, paddingBottom: 5, fontSize: 11 }, children: h }, h, false, {
                fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
                lineNumber: 321,
                columnNumber: 24
              }, this);
            })
          ] }, void 0, true, {
            fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
            lineNumber: 318,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
            lineNumber: 317,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("tbody", { children: [
            /* @__PURE__ */ jsxDEV(EconRow, { label: "Gestor", ap: gAp, apK: gApK, rep: gRep, repK: gRepK }, void 0, false, {
              fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
              lineNumber: 326,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV(EconRow, { label: "Inversor", ap: iAp, apK: iApK, rep: iRep, repK: iRepK, bold: true }, void 0, false, {
              fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
              lineNumber: 327,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("tr", { style: { borderTop: "1px solid #f3f4f6" }, children: [
              /* @__PURE__ */ jsxDEV("td", { style: { padding: "5px 0", fontWeight: 500, color: "#374151", fontSize: 12 }, children: "Total" }, void 0, false, {
                fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
                lineNumber: 329,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("td", {}, void 0, false, {
                fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
                lineNumber: 330,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("td", { style: { textAlign: "right", color: "#6b7280", fontSize: 12 }, children: tApK }, void 0, false, {
                fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
                lineNumber: 331,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("td", {}, void 0, false, {
                fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
                lineNumber: 332,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("td", { style: { textAlign: "right", color: "#6b7280", fontSize: 12 }, children: tRepK }, void 0, false, {
                fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
                lineNumber: 333,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("td", { style: { textAlign: "right", color: "#111", fontSize: 12 }, children: roiAbs(tRepK, tApK) }, void 0, false, {
                fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
                lineNumber: 334,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("td", { style: { textAlign: "right", color: "#111", fontSize: 12 }, children: roiAn(roiAbs(tRepK, tApK), d.meses) }, void 0, false, {
                fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
                lineNumber: 335,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
              lineNumber: 328,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
            lineNumber: 325,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
          lineNumber: 316,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
        lineNumber: 303,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Divider, {}, void 0, false, {
        fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
        lineNumber: 341,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { ref: function(el) {
        refs.current["sobremi"] = el;
      }, children: [
        /* @__PURE__ */ jsxDEV(SecTitle, { children: "Sobre mi" }, void 0, false, {
          fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
          lineNumber: 343,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(Txt, { text: d.sobreMi }, void 0, false, {
          fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
          lineNumber: 343,
          columnNumber: 40
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
        lineNumber: 342,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Divider, {}, void 0, false, {
        fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
        lineNumber: 346,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { ref: function(el) {
        refs.current["equipo"] = el;
      }, children: [
        /* @__PURE__ */ jsxDEV(SecTitle, { children: "Equipo" }, void 0, false, {
          fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
          lineNumber: 348,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }, children: [["Arquitecto", d.equipo.arquitecto], ["Project manager", d.equipo.projectManager], ["Interiorista", d.equipo.interiorista], ["Fiscalista", d.equipo.fiscalista]].filter(function(x) {
          return x[1];
        }).map(function(x) {
          return /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV(Lbl, { children: x[0] }, void 0, false, {
              fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
              lineNumber: 352,
              columnNumber: 52
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 13, color: "#374151" }, children: x[1] }, void 0, false, {
              fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
              lineNumber: 352,
              columnNumber: 69
            }, this)
          ] }, x[0], true, {
            fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
            lineNumber: 352,
            columnNumber: 36
          }, this);
        }) }, void 0, false, {
          fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
          lineNumber: 349,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
        lineNumber: 347,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Divider, {}, void 0, false, {
        fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
        lineNumber: 356,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { ref: function(el) {
        refs.current["estadoactual"] = el;
      }, children: [
        /* @__PURE__ */ jsxDEV(SecTitle, { children: "Estado actual" }, void 0, false, {
          fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
          lineNumber: 358,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { marginBottom: 12 }, children: [
          /* @__PURE__ */ jsxDEV(Lbl, { children: "Valoracion en venta" }, void 0, false, {
            fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
            lineNumber: 359,
            columnNumber: 45
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 15, fontWeight: 600, color: "#111" }, children: d.estadoActual.valoracion }, void 0, false, {
            fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
            lineNumber: 359,
            columnNumber: 75
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
          lineNumber: 359,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { marginBottom: 12 }, children: [
          /* @__PURE__ */ jsxDEV(Lbl, { children: "Descripcion" }, void 0, false, {
            fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
            lineNumber: 360,
            columnNumber: 45
          }, this),
          /* @__PURE__ */ jsxDEV(Txt, { text: d.estadoActual.descripcion }, void 0, false, {
            fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
            lineNumber: 360,
            columnNumber: 67
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
          lineNumber: 360,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { marginBottom: 12 }, children: [
          /* @__PURE__ */ jsxDEV(Lbl, { children: "Caracteristicas de la propiedad" }, void 0, false, {
            fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
            lineNumber: 362,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexWrap: "wrap", gap: 6, marginTop: 4 }, children: d.estadoActual.caracteristicas.map(function(c) {
            return /* @__PURE__ */ jsxDEV("span", { style: { background: "#f3f4f6", borderRadius: 20, padding: "3px 10px", fontSize: 12, color: "#374151" }, children: c }, c, false, {
              fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
              lineNumber: 364,
              columnNumber: 72
            }, this);
          }) }, void 0, false, {
            fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
            lineNumber: 363,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
          lineNumber: 361,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { marginBottom: 12 }, children: [
          /* @__PURE__ */ jsxDEV(Lbl, { children: "Ubicacion" }, void 0, false, {
            fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
            lineNumber: 368,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { width: "100%", height: 100, background: "#e5e7eb", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: "#9ca3af" }, children: "Mapa - Estepona, Malaga" }, void 0, false, {
            fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
            lineNumber: 369,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
          lineNumber: 367,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV(Lbl, { children: "Fotos del estado actual" }, void 0, false, {
            fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
            lineNumber: 372,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 6, marginTop: 4 }, children: ["#e5e7eb", "#d1d5db", "#c4c4c4", "#b0b0b0"].map(function(c, i) {
            return /* @__PURE__ */ jsxDEV("div", { onClick: function() {
              setLb({ open: true, index: i, items: ["Foto 1", "Foto 2", "Foto 3", "Foto 4"] });
            }, style: { height: 60, background: c, borderRadius: 6, cursor: "pointer" } }, i, false, {
              fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
              lineNumber: 375,
              columnNumber: 22
            }, this);
          }) }, void 0, false, {
            fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
            lineNumber: 373,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
          lineNumber: 371,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
        lineNumber: 357,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Divider, {}, void 0, false, {
        fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
        lineNumber: 380,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { ref: function(el) {
        refs.current["problema"] = el;
      }, children: [
        /* @__PURE__ */ jsxDEV(SecTitle, { children: "Problema y aportacion de valor" }, void 0, false, {
          fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
          lineNumber: 382,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { marginBottom: 12 }, children: [
          /* @__PURE__ */ jsxDEV(Lbl, { children: "Problema" }, void 0, false, {
            fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
            lineNumber: 383,
            columnNumber: 45
          }, this),
          /* @__PURE__ */ jsxDEV(Txt, { text: d.problema }, void 0, false, {
            fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
            lineNumber: 383,
            columnNumber: 64
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
          lineNumber: 383,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV(Lbl, { children: "Solucion" }, void 0, false, {
            fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
            lineNumber: 384,
            columnNumber: 16
          }, this),
          /* @__PURE__ */ jsxDEV(Txt, { text: d.solucion }, void 0, false, {
            fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
            lineNumber: 384,
            columnNumber: 35
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
          lineNumber: 384,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
        lineNumber: 381,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Divider, {}, void 0, false, {
        fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
        lineNumber: 387,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { ref: function(el) {
        refs.current["fases"] = el;
      }, children: [
        /* @__PURE__ */ jsxDEV(SecTitle, { children: "Fases de la operacion" }, void 0, false, {
          fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
          lineNumber: 389,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, children: d.fases.map(function(f, i) {
          return /* @__PURE__ */ jsxDEV("div", { style: { display: "grid", gridTemplateColumns: "1fr 2fr 1fr", gap: 8, padding: "10px 12px", background: "#f9fafb", borderRadius: 8 }, children: [
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV(Lbl, { children: "Fase" }, void 0, false, {
                fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
                lineNumber: 394,
                columnNumber: 24
              }, this),
              /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 12, fontWeight: 600, color: "#111" }, children: f.fase }, void 0, false, {
                fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
                lineNumber: 394,
                columnNumber: 39
              }, this)
            ] }, void 0, true, {
              fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
              lineNumber: 394,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV(Lbl, { children: "Acciones" }, void 0, false, {
                fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
                lineNumber: 395,
                columnNumber: 24
              }, this),
              /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 12, color: "#374151", lineHeight: 1.5 }, children: f.acciones }, void 0, false, {
                fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
                lineNumber: 395,
                columnNumber: 43
              }, this)
            ] }, void 0, true, {
              fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
              lineNumber: 395,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV(Lbl, { children: "Duracion" }, void 0, false, {
                fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
                lineNumber: 396,
                columnNumber: 24
              }, this),
              /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 12, color: "#6b7280" }, children: f.duracion }, void 0, false, {
                fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
                lineNumber: 396,
                columnNumber: 43
              }, this)
            ] }, void 0, true, {
              fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
              lineNumber: 396,
              columnNumber: 19
            }, this)
          ] }, i, true, {
            fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
            lineNumber: 393,
            columnNumber: 15
          }, this);
        }) }, void 0, false, {
          fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
          lineNumber: 390,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
        lineNumber: 388,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Divider, {}, void 0, false, {
        fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
        lineNumber: 403,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { ref: function(el) {
        refs.current["situacion"] = el;
      }, children: [
        /* @__PURE__ */ jsxDEV(SecTitle, { children: "Situacion actual y proximos pasos" }, void 0, false, {
          fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
          lineNumber: 405,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { marginBottom: 12 }, children: [
          /* @__PURE__ */ jsxDEV(Lbl, { children: "Situacion actual" }, void 0, false, {
            fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
            lineNumber: 406,
            columnNumber: 45
          }, this),
          /* @__PURE__ */ jsxDEV(Txt, { text: d.situacionActual }, void 0, false, {
            fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
            lineNumber: 406,
            columnNumber: 72
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
          lineNumber: 406,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV(Lbl, { children: "Proximos pasos" }, void 0, false, {
            fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
            lineNumber: 407,
            columnNumber: 16
          }, this),
          /* @__PURE__ */ jsxDEV(Txt, { text: d.proximosPasos }, void 0, false, {
            fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
            lineNumber: 407,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
          lineNumber: 407,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
        lineNumber: 404,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Divider, {}, void 0, false, {
        fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
        lineNumber: 410,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { ref: function(el) {
        refs.current["analisis"] = el;
      }, children: [
        /* @__PURE__ */ jsxDEV(SecTitle, { children: "Analisis economico" }, void 0, false, {
          fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
          lineNumber: 412,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(Txt, { text: d.analisisEconomico }, void 0, false, {
          fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
          lineNumber: 412,
          columnNumber: 50
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
        lineNumber: 411,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Divider, {}, void 0, false, {
        fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
        lineNumber: 415,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { ref: function(el) {
        refs.current["desglose"] = el;
      }, children: [
        /* @__PURE__ */ jsxDEV(SecTitle, { children: "Desglose de la inversion" }, void 0, false, {
          fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
          lineNumber: 417,
          columnNumber: 11
        }, this),
        [d.desglose.t1, d.desglose.t2, d.desglose.t3].map(function(tabla, ti) {
          return /* @__PURE__ */ jsxDEV("div", { style: { marginBottom: 14 }, children: tabla.map(function(row) {
            return /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", justifyContent: "space-between", padding: "4px 0", borderBottom: "1px solid #f9fafb" }, children: [
              /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 12, color: "#374151" }, children: row[0] }, void 0, false, {
                fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
                lineNumber: 424,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 12, color: "#111", fontWeight: ti === 2 ? 600 : 400 }, children: row[1] }, void 0, false, {
                fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
                lineNumber: 425,
                columnNumber: 23
              }, this)
            ] }, row[0], true, {
              fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
              lineNumber: 423,
              columnNumber: 19
            }, this);
          }) }, ti, false, {
            fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
            lineNumber: 420,
            columnNumber: 13
          }, this);
        })
      ] }, void 0, true, {
        fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
        lineNumber: 416,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Divider, {}, void 0, false, {
        fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
        lineNumber: 434,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { ref: function(el) {
        refs.current["destino"] = el;
      }, children: [
        /* @__PURE__ */ jsxDEV(SecTitle, { children: "Destino y por que" }, void 0, false, {
          fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
          lineNumber: 436,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(Txt, { text: d.destino }, void 0, false, {
          fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
          lineNumber: 436,
          columnNumber: 49
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
        lineNumber: 435,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Divider, {}, void 0, false, {
        fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
        lineNumber: 439,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { ref: function(el) {
        refs.current["escenarios"] = el;
      }, children: [
        /* @__PURE__ */ jsxDEV(SecTitle, { children: "Escenarios" }, void 0, false, {
          fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
          lineNumber: 441,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 12 }, children: [["Pesimista", d.escenarios.pesimista, "#fef3c7"], ["Realista", d.escenarios.realista, "#f0fdf4"], ["Optimista", d.escenarios.optimista, "#eff6ff"]].map(function(e) {
          return /* @__PURE__ */ jsxDEV("div", { style: { background: e[2], borderRadius: 8, padding: "10px 12px", textAlign: "center" }, children: [
            /* @__PURE__ */ jsxDEV(Lbl, { children: e[0] }, void 0, false, {
              fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
              lineNumber: 446,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 14, fontWeight: 700, color: "#111" }, children: [
              e[1],
              " EUR"
            ] }, void 0, true, {
              fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
              lineNumber: 447,
              columnNumber: 19
            }, this)
          ] }, e[0], true, {
            fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
            lineNumber: 445,
            columnNumber: 15
          }, this);
        }) }, void 0, false, {
          fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
          lineNumber: 442,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(Lbl, { children: "Explicacion" }, void 0, false, {
          fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
          lineNumber: 452,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(Txt, { text: d.escenarios.explicacion }, void 0, false, {
          fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
          lineNumber: 452,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
        lineNumber: 440,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Divider, {}, void 0, false, {
        fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
        lineNumber: 455,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { ref: function(el) {
        refs.current["fiscalidad"] = el;
      }, children: [
        /* @__PURE__ */ jsxDEV(SecTitle, { children: "Fiscalidad y PBC" }, void 0, false, {
          fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
          lineNumber: 457,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { marginBottom: 10 }, children: [
          /* @__PURE__ */ jsxDEV(Lbl, { children: "Fiscalidad de la compra" }, void 0, false, {
            fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
            lineNumber: 458,
            columnNumber: 45
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 13, color: "#374151" }, children: d.fiscalidad.compra }, void 0, false, {
            fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
            lineNumber: 458,
            columnNumber: 79
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
          lineNumber: 458,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV(Lbl, { children: "Prevencion de blanqueo de capitales" }, void 0, false, {
            fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
            lineNumber: 459,
            columnNumber: 16
          }, this),
          /* @__PURE__ */ jsxDEV("span", { style: { display: "inline-block", background: d.fiscalidad.pbc === "Necesaria" ? "#fef3c7" : "#f0fdf4", borderRadius: 20, padding: "3px 12px", fontSize: 12, fontWeight: 600, color: d.fiscalidad.pbc === "Necesaria" ? "#92400e" : "#166534" }, children: d.fiscalidad.pbc }, void 0, false, {
            fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
            lineNumber: 460,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
          lineNumber: 459,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
        lineNumber: 456,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Divider, {}, void 0, false, {
        fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
        lineNumber: 464,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { ref: function(el) {
        refs.current["solvencia"] = el;
      }, children: [
        /* @__PURE__ */ jsxDEV(SecTitle, { children: "Solvencia y transparencia" }, void 0, false, {
          fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
          lineNumber: 466,
          columnNumber: 11
        }, this),
        [["Comprador", d.solvencia.comprador], ["Comunicacion y periodicidad", d.solvencia.comunicacion], ["Banco", d.solvencia.banco], ["Cuenta bancaria", d.solvencia.cuenta], ["Ultimo estado de la cuenta", d.solvencia.estadoCuenta]].map(function(x) {
          return /* @__PURE__ */ jsxDEV("div", { style: { marginBottom: 10 }, children: [
            /* @__PURE__ */ jsxDEV(Lbl, { children: x[0] }, void 0, false, {
              fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
              lineNumber: 468,
              columnNumber: 63
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 13, color: "#374151", lineHeight: 1.5 }, children: x[1] }, void 0, false, {
              fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
              lineNumber: 468,
              columnNumber: 80
            }, this)
          ] }, x[0], true, {
            fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
            lineNumber: 468,
            columnNumber: 18
          }, this);
        })
      ] }, void 0, true, {
        fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
        lineNumber: 465,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Divider, {}, void 0, false, {
        fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
        lineNumber: 472,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { ref: function(el) {
        refs.current["documentacion"] = el;
      }, children: [
        /* @__PURE__ */ jsxDEV(SecTitle, { children: "Documentacion" }, void 0, false, {
          fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
          lineNumber: 474,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: 6 }, children: d.documentos.map(function(doc, i) {
          return /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: function() {
                setLb({ open: true, index: i, items: d.documentos });
              },
              style: { display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", background: "#f9fafb", border: "1px solid #f3f4f6", borderRadius: 8, cursor: "pointer", fontFamily: "inherit", textAlign: "left" },
              children: [
                /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 12, color: "#9ca3af", fontWeight: 500 }, children: "PDF" }, void 0, false, {
                  fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
                  lineNumber: 480,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 13, color: "#374151", fontWeight: 500 }, children: doc }, void 0, false, {
                  fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
                  lineNumber: 481,
                  columnNumber: 19
                }, this)
              ]
            },
            i,
            true,
            {
              fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
              lineNumber: 478,
              columnNumber: 15
            },
            this
          );
        }) }, void 0, false, {
          fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
          lineNumber: 475,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
        lineNumber: 473,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Divider, {}, void 0, false, {
        fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
        lineNumber: 489,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { ref: function(el) {
        refs.current["observaciones"] = el;
      }, children: [
        /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }, children: [
          /* @__PURE__ */ jsxDEV(SecTitle, { children: "Observaciones y preguntas" }, void 0, false, {
            fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
            lineNumber: 492,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("button", { onClick: function() {
            setSubvista("observaciones");
          }, style: { background: "none", border: "none", cursor: "pointer", color: "#7c3aed", fontSize: 12, fontWeight: 600, fontFamily: "inherit", padding: 0 }, children: [
            "Ver todas (",
            d.observaciones.length,
            ") →"
          ] }, void 0, true, {
            fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
            lineNumber: 493,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
          lineNumber: 491,
          columnNumber: 11
        }, this),
        d.observaciones.slice(0, 2).map(function(o, i) {
          return /* @__PURE__ */ jsxDEV("div", { style: { padding: "10px 0", borderBottom: "1px solid #f3f4f6" }, children: [
            /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 12, fontWeight: 600, color: o.esGestor ? "#7c3aed" : "#111", marginBottom: 3 }, children: o.autor }, void 0, false, {
              fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
              lineNumber: 500,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 13, color: "#374151" }, children: o.texto }, void 0, false, {
              fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
              lineNumber: 501,
              columnNumber: 17
            }, this)
          ] }, i, true, {
            fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
            lineNumber: 499,
            columnNumber: 13
          }, this);
        }),
        /* @__PURE__ */ jsxDEV("button", { onClick: function() {
          setSubvista("observaciones");
        }, style: { marginTop: 10, background: "none", border: "none", cursor: "pointer", color: "#7c3aed", fontSize: 13, fontWeight: 600, fontFamily: "inherit", padding: 0 }, children: [
          "Mostrar mas (",
          d.observaciones.length - 2,
          ")"
        ] }, void 0, true, {
          fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
          lineNumber: 505,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
        lineNumber: 490,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Divider, {}, void 0, false, {
        fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
        lineNumber: 511,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { ref: function(el) {
        refs.current["resenas"] = el;
      }, children: [
        /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }, children: [
          /* @__PURE__ */ jsxDEV(SecTitle, { children: "Resenas" }, void 0, false, {
            fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
            lineNumber: 514,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("button", { onClick: function() {
            setSubvista("resenas");
          }, style: { background: "none", border: "none", cursor: "pointer", color: "#7c3aed", fontSize: 12, fontWeight: 600, fontFamily: "inherit", padding: 0 }, children: [
            "Ver todas (",
            d.resenas.length,
            ") →"
          ] }, void 0, true, {
            fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
            lineNumber: 515,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
          lineNumber: 513,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }, children: [
          /* @__PURE__ */ jsxDEV(Stars, { n: d.gestorRating }, void 0, false, {
            fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
            lineNumber: 520,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 13, fontWeight: 700, color: "#111" }, children: d.gestorRating }, void 0, false, {
            fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
            lineNumber: 521,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 12, color: "#9ca3af" }, children: [
            "(",
            d.gestorReviews,
            " valoraciones)"
          ] }, void 0, true, {
            fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
            lineNumber: 522,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
          lineNumber: 519,
          columnNumber: 11
        }, this),
        d.resenas.slice(0, 2).map(function(r, i) {
          return /* @__PURE__ */ jsxDEV("div", { style: { padding: "10px 0", borderBottom: "1px solid #f3f4f6" }, children: [
            /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: 2 }, children: [
              /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 12, fontWeight: 600, color: "#111" }, children: r.autor }, void 0, false, {
                fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
                lineNumber: 528,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 11, color: "#9ca3af" }, children: r.fecha }, void 0, false, {
                fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
                lineNumber: 529,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
              lineNumber: 527,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { marginBottom: 3 }, children: /* @__PURE__ */ jsxDEV(Stars, { n: r.rating }, void 0, false, {
              fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
              lineNumber: 531,
              columnNumber: 50
            }, this) }, void 0, false, {
              fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
              lineNumber: 531,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 13, color: "#374151" }, children: r.texto }, void 0, false, {
              fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
              lineNumber: 532,
              columnNumber: 17
            }, this)
          ] }, i, true, {
            fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
            lineNumber: 526,
            columnNumber: 13
          }, this);
        }),
        /* @__PURE__ */ jsxDEV("button", { onClick: function() {
          setSubvista("resenas");
        }, style: { marginTop: 10, background: "none", border: "none", cursor: "pointer", color: "#7c3aed", fontSize: 13, fontWeight: 600, fontFamily: "inherit", padding: 0 }, children: [
          "Mostrar mas (",
          d.resenas.length - 2,
          ")"
        ] }, void 0, true, {
          fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
          lineNumber: 536,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
        lineNumber: 512,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
      lineNumber: 300,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { style: { padding: "12px 20px", borderTop: "1px solid #f3f4f6", display: "flex", gap: 10, flexShrink: 0, background: "#fff" }, children: [
      /* @__PURE__ */ jsxDEV("button", { style: { flex: 1, padding: "10px", border: "1.5px solid #e5e7eb", borderRadius: 8, background: "#fff", fontSize: 13, fontFamily: "inherit", cursor: "pointer", color: "#374151", fontWeight: 500 }, children: "Ver presentacion" }, void 0, false, {
        fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
        lineNumber: 545,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("button", { style: { flex: 1, padding: "10px", border: "none", borderRadius: 8, background: "#7c3aed", fontSize: 13, fontFamily: "inherit", cursor: "pointer", color: "#fff", fontWeight: 600 }, children: "Solicitar invertir" }, void 0, false, {
        fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
        lineNumber: 546,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
      lineNumber: 544,
      columnNumber: 7
    }, this),
    lb.open && /* @__PURE__ */ jsxDEV(
      Lightbox,
      {
        items: lb.items,
        index: lb.index,
        onClose: function() {
          setLb({ open: false, index: 0, items: [] });
        },
        onPrev: function() {
          setLb(function(l) {
            return Object.assign({}, l, { index: Math.max(0, l.index - 1) });
          });
        },
        onNext: function() {
          setLb(function(l) {
            return Object.assign({}, l, { index: Math.min(l.items.length - 1, l.index + 1) });
          });
        }
      },
      void 0,
      false,
      {
        fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
        lineNumber: 550,
        columnNumber: 5
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
    lineNumber: 271,
    columnNumber: 3
  }, this);
  if (inline)
    return body;
  return /* @__PURE__ */ jsxDEV("div", { onClick: onClose, style: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.18)", zIndex: 200, display: "flex", alignItems: "flex-end", justifyContent: "center" }, children: /* @__PURE__ */ jsxDEV("div", { onClick: function(e) {
    e.stopPropagation();
  }, style: { background: "#fff", borderRadius: "16px 16px 0 0", width: "100%", maxWidth: 480, maxHeight: "92vh", display: "flex", flexDirection: "column" }, children: body }, void 0, false, {
    fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
    lineNumber: 561,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx",
    lineNumber: 560,
    columnNumber: 5
  }, this);
}
_s4(PanelDetalle, "0oiLmd3EsrAJjjon7KbVupHyGR4=");
_c9 = PanelDetalle;
var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
$RefreshReg$(_c, "Lbl");
$RefreshReg$(_c2, "Divider");
$RefreshReg$(_c3, "SecTitle");
$RefreshReg$(_c4, "Txt");
$RefreshReg$(_c5, "Stars");
$RefreshReg$(_c6, "Lightbox");
$RefreshReg$(_c7, "SubvistaObservaciones");
$RefreshReg$(_c8, "SubvistaResenas");
$RefreshReg$(_c9, "PanelDetalle");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/carlos/Desktop/in-oportunidades/src/components/PanelDetalle.jsx", currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUFnQixTQUFTLEdBQzFLLGlDQUFDLFNBQUksU0FBUyxTQUFTVixHQUFHO0FBQUVBLE1BQUVXLGdCQUFnQjtBQUFBLEVBQUcsR0FBRyxPQUFPLEVBQUV6QyxZQUFZLFFBQVEwQyxjQUFjLGlCQUFpQkksT0FBTyxRQUFRdUcsVUFBVSxLQUFLQyxXQUFXLFFBQVFoSCxTQUFTLFFBQVErQixlQUFlLFNBQVMsR0FDdk1tRixrQkFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRUEsS0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBSUE7QUFFSjtBQUFDL0MsSUF0V3VCSixjQUFZO0FBQUEsTUFBWkE7QUFBWSxJQUFBeEcsSUFBQUssS0FBQUcsS0FBQUssS0FBQVcsS0FBQXlNLEtBQUFDLEtBQUFDLEtBQUFDO0FBQUEsYUFBQXBPLElBQUE7QUFBQSxhQUFBSyxLQUFBO0FBQUEsYUFBQUcsS0FBQTtBQUFBLGFBQUFLLEtBQUE7QUFBQSxhQUFBVyxLQUFBO0FBQUEsYUFBQXlNLEtBQUE7QUFBQSxhQUFBQyxLQUFBO0FBQUEsYUFBQUMsS0FBQTtBQUFBLGFBQUFDLEtBQUEiLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsImVzdGFkb0NvbG9yIiwiY29sb3JzIiwiU0VDQ0lPTkVTIiwiaWQiLCJsYWJlbCIsIkxibCIsImNoaWxkcmVuIiwiZm9udFNpemUiLCJjb2xvciIsInRleHRUcmFuc2Zvcm0iLCJsZXR0ZXJTcGFjaW5nIiwibWFyZ2luQm90dG9tIiwiX2MiLCJEaXZpZGVyIiwiaGVpZ2h0IiwiYmFja2dyb3VuZCIsIm1hcmdpbiIsIl9jMiIsIlNlY1RpdGxlIiwiZm9udFdlaWdodCIsIl9jMyIsIlR4dCIsInRleHQiLCJsaW5lSGVpZ2h0Iiwid2hpdGVTcGFjZSIsIl9jNCIsIlN0YXJzIiwibiIsImludGVyYWN0aXZlIiwib25TZXQiLCJtYXAiLCJpIiwidW5kZWZpbmVkIiwiTWF0aCIsInJvdW5kIiwiY3Vyc29yIiwiX2M1IiwiTGlnaHRib3giLCJpdGVtcyIsImluZGV4Iiwib25DbG9zZSIsIm9uUHJldiIsIm9uTmV4dCIsIl9zIiwib25LZXkiLCJlIiwia2V5Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJwb3NpdGlvbiIsImluc2V0IiwiekluZGV4IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInN0b3BQcm9wYWdhdGlvbiIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJtaW5XaWR0aCIsInRleHRBbGlnbiIsIndpZHRoIiwiYm9yZGVyIiwiZm9udEZhbWlseSIsImxlbmd0aCIsInRvcCIsInJpZ2h0IiwiU3VidmlzdGFPYnNlcnZhY2lvbmVzIiwib2JzZXJ2YWNpb25lcyIsImluaXRpYWxPYnMiLCJvbkJhY2siLCJfczIiLCJvYnMiLCJzZXRPYnMiLCJpbnB1dCIsInNldElucHV0IiwiZW52aWFyIiwidHJpbSIsInByZXYiLCJjb25jYXQiLCJhdXRvciIsImVzR2VzdG9yIiwidGV4dG8iLCJmZWNoYSIsImZsZXhEaXJlY3Rpb24iLCJib3JkZXJCb3R0b20iLCJmbGV4U2hyaW5rIiwibWFyZ2luUmlnaHQiLCJmbGV4Iiwib3ZlcmZsb3dZIiwibyIsImJvcmRlclRvcCIsImdhcCIsInRhcmdldCIsInZhbHVlIiwib3V0bGluZSIsIlN1YnZpc3RhUmVzZW5hcyIsInJlc2VuYXMiLCJpbml0aWFsUmVzZW5hcyIsIl9zMyIsInNldFJlc2VuYXMiLCJpbnB1dFRleHQiLCJzZXRJbnB1dFRleHQiLCJpbnB1dFJhdGluZyIsInNldElucHV0UmF0aW5nIiwibWVkaWEiLCJyZWR1Y2UiLCJzIiwiciIsInJhdGluZyIsInRvRml4ZWQiLCJ2YWxvcmFyIiwicGFkZGluZ0JvdHRvbSIsInBhcnNlRmxvYXQiLCJib3JkZXJMZWZ0IiwicGFkZGluZ0xlZnQiLCJQYW5lbERldGFsbGUiLCJkZXRhbGxlIiwiZCIsImlubGluZSIsIl9zNCIsInNlY2Npb24iLCJzZXRTZWNjaW9uIiwiZGRPcGVuIiwic2V0RGRPcGVuIiwic3VidmlzdGEiLCJzZXRTdWJ2aXN0YSIsImxiIiwic2V0TGIiLCJvcGVuIiwic2Nyb2xsUmVmIiwicmVmcyIsImdvVG8iLCJlbCIsImN1cnJlbnQiLCJzY3JvbGxUbyIsIm9mZnNldFRvcCIsImJlaGF2aW9yIiwic2VjTGFiZWwiLCJmaW5kIiwiZ0FwIiwiZ0FwSyIsImdSZXAiLCJnUmVwSyIsImlBcCIsImlBcEsiLCJpUmVwIiwiaVJlcEsiLCJ0QXBLIiwidFJlcEsiLCJyb2lBYnMiLCJyZXBLIiwiYXBLIiwicm9pQW4iLCJhYnMiLCJtIiwiRWNvblJvdyIsInByb3BzIiwiYW4iLCJtZXNlcyIsImFwIiwicmVwIiwiYm9sZCIsInN2IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJzdjIiLCJib2R5IiwibGVmdCIsImJveFNoYWRvdyIsInBhZGRpbmdUb3AiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiZXN0YWRvIiwiZ2VzdG9yIiwiZ2VzdG9yUmF0aW5nIiwiZXN0cmF0ZWdpYSIsInRpcG8iLCJwcm92aW5jaWEiLCJmZWNoYUluaWNpbyIsImJvcmRlckNvbGxhcHNlIiwiaCIsInNvYnJlTWkiLCJlcXVpcG8iLCJhcnF1aXRlY3RvIiwicHJvamVjdE1hbmFnZXIiLCJpbnRlcmlvcmlzdGEiLCJmaXNjYWxpc3RhIiwiZmlsdGVyIiwieCIsImVzdGFkb0FjdHVhbCIsInZhbG9yYWNpb24iLCJkZXNjcmlwY2lvbiIsImZsZXhXcmFwIiwibWFyZ2luVG9wIiwiY2FyYWN0ZXJpc3RpY2FzIiwiYyIsInByb2JsZW1hIiwic29sdWNpb24iLCJmYXNlcyIsImYiLCJmYXNlIiwiYWNjaW9uZXMiLCJkdXJhY2lvbiIsInNpdHVhY2lvbkFjdHVhbCIsInByb3hpbW9zUGFzb3MiLCJhbmFsaXNpc0Vjb25vbWljbyIsImRlc2dsb3NlIiwidDEiLCJ0MiIsInQzIiwidGFibGEiLCJ0aSIsInJvdyIsImRlc3Rpbm8iLCJlc2NlbmFyaW9zIiwicGVzaW1pc3RhIiwicmVhbGlzdGEiLCJvcHRpbWlzdGEiLCJleHBsaWNhY2lvbiIsImZpc2NhbGlkYWQiLCJjb21wcmEiLCJwYmMiLCJzb2x2ZW5jaWEiLCJjb21wcmFkb3IiLCJjb211bmljYWNpb24iLCJiYW5jbyIsImN1ZW50YSIsImVzdGFkb0N1ZW50YSIsImRvY3VtZW50b3MiLCJkb2MiLCJzbGljZSIsImdlc3RvclJldmlld3MiLCJsIiwiT2JqZWN0IiwiYXNzaWduIiwibWF4IiwibWluIiwiX2M2IiwiX2M3IiwiX2M4IiwiX2M5Il0sInNvdXJjZXMiOlsiUGFuZWxEZXRhbGxlLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGVzdGFkb0NvbG9yLCBjb2xvcnMgfSBmcm9tIFwiLi4vdGhlbWVcIjtcblxuLy8gUHJvcHM6XG5cbmNvbnN0IFNFQ0NJT05FUyA9IFtcbiAgeyBpZDogXCJyZXN1bWVuXCIsICAgICAgIGxhYmVsOiBcIlJlc3VtZW5cIiB9LFxuICB7IGlkOiBcInNvYnJlbWlcIiwgICAgICAgbGFiZWw6IFwiU29icmUgbWlcIiB9LFxuICB7IGlkOiBcImVxdWlwb1wiLCAgICAgICAgbGFiZWw6IFwiRXF1aXBvXCIgfSxcbiAgeyBpZDogXCJlc3RhZG9hY3R1YWxcIiwgIGxhYmVsOiBcIkVzdGFkbyBhY3R1YWxcIiB9LFxuICB7IGlkOiBcInByb2JsZW1hXCIsICAgICAgbGFiZWw6IFwiUHJvYmxlbWEgeSBhcG9ydGFjaW9uIGRlIHZhbG9yXCIgfSxcbiAgeyBpZDogXCJmYXNlc1wiLCAgICAgICAgIGxhYmVsOiBcIkZhc2VzIGRlIGxhIG9wZXJhY2lvblwiIH0sXG4gIHsgaWQ6IFwic2l0dWFjaW9uXCIsICAgICBsYWJlbDogXCJTaXR1YWNpb24gYWN0dWFsIHkgcHJveGltb3MgcGFzb3NcIiB9LFxuICB7IGlkOiBcImFuYWxpc2lzXCIsICAgICAgbGFiZWw6IFwiQW5hbGlzaXMgZWNvbm9taWNvXCIgfSxcbiAgeyBpZDogXCJkZXNnbG9zZVwiLCAgICAgIGxhYmVsOiBcIkRlc2dsb3NlIGRlIGxhIGludmVyc2lvblwiIH0sXG4gIHsgaWQ6IFwiZGVzdGlub1wiLCAgICAgICBsYWJlbDogXCJEZXN0aW5vIHkgcG9yIHF1ZVwiIH0sXG4gIHsgaWQ6IFwiZXNjZW5hcmlvc1wiLCAgICBsYWJlbDogXCJFc2NlbmFyaW9zXCIgfSxcbiAgeyBpZDogXCJmaXNjYWxpZGFkXCIsICAgIGxhYmVsOiBcIkZpc2NhbGlkYWQgeSBQQkNcIiB9LFxuICB7IGlkOiBcInNvbHZlbmNpYVwiLCAgICAgbGFiZWw6IFwiU29sdmVuY2lhIHkgdHJhbnNwYXJlbmNpYVwiIH0sXG4gIHsgaWQ6IFwiZG9jdW1lbnRhY2lvblwiLCBsYWJlbDogXCJEb2N1bWVudGFjaW9uXCIgfSxcbiAgeyBpZDogXCJvYnNlcnZhY2lvbmVzXCIsIGxhYmVsOiBcIk9ic2VydmFjaW9uZXMgeSBwcmVndW50YXNcIiB9LFxuICB7IGlkOiBcInJlc2VuYXNcIiwgICAgICAgbGFiZWw6IFwiUmVzZW5hc1wiIH0sXG5dO1xuXG4vLyDilIDilIDilIAgSGVscGVycyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcbmZ1bmN0aW9uIExibCh7IGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDEwLCBjb2xvcjogXCIjOWNhM2FmXCIsIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsIGxldHRlclNwYWNpbmc6IFwiMC4wNWVtXCIsIG1hcmdpbkJvdHRvbTogMyB9fT57Y2hpbGRyZW59PC9kaXY+O1xufVxuZnVuY3Rpb24gRGl2aWRlcigpIHtcbiAgcmV0dXJuIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAxLCBiYWNrZ3JvdW5kOiBcIiNmM2Y0ZjZcIiwgbWFyZ2luOiBcIjE2cHggMFwiIH19IC8+O1xufVxuZnVuY3Rpb24gU2VjVGl0bGUoeyBjaGlsZHJlbiB9KSB7XG4gIHJldHVybiA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMSwgZm9udFdlaWdodDogNzAwLCBjb2xvcjogXCIjMzc0MTUxXCIsIG1hcmdpbkJvdHRvbTogMTAsIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsIGxldHRlclNwYWNpbmc6IFwiMC4wNmVtXCIgfX0+e2NoaWxkcmVufTwvZGl2Pjtcbn1cbmZ1bmN0aW9uIFR4dCh7IHRleHQgfSkge1xuICByZXR1cm4gPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTMsIGNvbG9yOiBcIiMzNzQxNTFcIiwgbGluZUhlaWdodDogMS42LCB3aGl0ZVNwYWNlOiBcInByZS1saW5lXCIgfX0+e3RleHR9PC9kaXY+O1xufVxuZnVuY3Rpb24gU3RhcnMoeyBuLCBpbnRlcmFjdGl2ZSwgb25TZXQgfSkge1xuICByZXR1cm4gKFxuICAgIDxzcGFuPlxuICAgICAge1sxLDIsMyw0LDVdLm1hcChmdW5jdGlvbihpKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPHNwYW4ga2V5PXtpfVxuICAgICAgICAgICAgb25DbGljaz17aW50ZXJhY3RpdmUgPyBmdW5jdGlvbigpIHsgb25TZXQoaSk7IH0gOiB1bmRlZmluZWR9XG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogaSA8PSBNYXRoLnJvdW5kKG4pID8gXCIjZjU5ZTBiXCIgOiBcIiNlNWU3ZWJcIiwgZm9udFNpemU6IGludGVyYWN0aXZlID8gMjIgOiAxMywgY3Vyc29yOiBpbnRlcmFjdGl2ZSA/IFwicG9pbnRlclwiIDogXCJkZWZhdWx0XCIgfX0+XG4gICAgICAgICAgICB7aSA8PSBNYXRoLnJvdW5kKG4pID8gXCLimIVcIiA6IFwi4piGXCJ9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC9zcGFuPlxuICApO1xufVxuXG4vLyDilIDilIDilIAgTGlnaHRib3gg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG5mdW5jdGlvbiBMaWdodGJveCh7IGl0ZW1zLCBpbmRleCwgb25DbG9zZSwgb25QcmV2LCBvbk5leHQgfSkge1xuICB1c2VFZmZlY3QoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gb25LZXkoZSkge1xuICAgICAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSBvbkNsb3NlKCk7XG4gICAgICBpZiAoZS5rZXkgPT09IFwiQXJyb3dMZWZ0XCIpIG9uUHJldigpO1xuICAgICAgaWYgKGUua2V5ID09PSBcIkFycm93UmlnaHRcIikgb25OZXh0KCk7XG5cbiAgICB9XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIG9uS2V5KTtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBvbktleSk7IH07XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IG9uQ2xpY2s9e29uQ2xvc2V9IHN0eWxlPXt7IHBvc2l0aW9uOiBcImZpeGVkXCIsIGluc2V0OiAwLCBiYWNrZ3JvdW5kOiBcInJnYmEoMCwwLDAsMC44NSlcIiwgekluZGV4OiAxMDAwLCBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIgfX0+XG4gICAgICA8ZGl2IG9uQ2xpY2s9e2Z1bmN0aW9uKGUpIHsgZS5zdG9wUHJvcGFnYXRpb24oKTsgfX0gc3R5bGU9e3sgYmFja2dyb3VuZDogXCIjZmZmXCIsIGJvcmRlclJhZGl1czogMTAsIHBhZGRpbmc6IFwiMjhweCAzMnB4XCIsIG1pbldpZHRoOiAyODAsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9fT5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTQsIGZvbnRXZWlnaHQ6IDYwMCwgY29sb3I6IFwiIzExMVwiLCBtYXJnaW5Cb3R0b206IDEyIH19PntpdGVtc1tpbmRleF19PC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IDI0MCwgaGVpZ2h0OiAxNjAsIGJhY2tncm91bmQ6IFwiI2YzZjRmNlwiLCBib3JkZXJSYWRpdXM6IDYsIGRpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiwgY29sb3I6IFwiIzljYTNhZlwiLCBmb250U2l6ZTogMTIsIG1hcmdpbjogXCIwIGF1dG8gMTZweFwiIH19PkRvY3VtZW50bzwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvblByZXZ9IGRpc2FibGVkPXtpbmRleCA9PT0gMH0gc3R5bGU9e3sgYm9yZGVyOiBcIjEuNXB4IHNvbGlkICNlNWU3ZWJcIiwgYm9yZGVyUmFkaXVzOiA2LCBwYWRkaW5nOiBcIjVweCAxMnB4XCIsIGN1cnNvcjogaW5kZXggPT09IDAgPyBcImRlZmF1bHRcIiA6IFwicG9pbnRlclwiLCBiYWNrZ3JvdW5kOiBcIiNmZmZcIiwgY29sb3I6IGluZGV4ID09PSAwID8gXCIjZDFkNWRiXCIgOiBcIiMzNzQxNTFcIiwgZm9udEZhbWlseTogXCJpbmhlcml0XCIsIGZvbnRTaXplOiAxMiB9fT5BbnRlcmlvcjwvYnV0dG9uPlxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAxMSwgY29sb3I6IFwiIzljYTNhZlwiIH19PntpbmRleCArIDF9IC8ge2l0ZW1zLmxlbmd0aH08L3NwYW4+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbk5leHR9IGRpc2FibGVkPXtpbmRleCA9PT0gaXRlbXMubGVuZ3RoIC0gMX0gc3R5bGU9e3sgYm9yZGVyOiBcIjEuNXB4IHNvbGlkICNlNWU3ZWJcIiwgYm9yZGVyUmFkaXVzOiA2LCBwYWRkaW5nOiBcIjVweCAxMnB4XCIsIGN1cnNvcjogaW5kZXggPT09IGl0ZW1zLmxlbmd0aCAtIDEgPyBcImRlZmF1bHRcIiA6IFwicG9pbnRlclwiLCBiYWNrZ3JvdW5kOiBcIiNmZmZcIiwgY29sb3I6IGluZGV4ID09PSBpdGVtcy5sZW5ndGggLSAxID8gXCIjZDFkNWRiXCIgOiBcIiMzNzQxNTFcIiwgZm9udEZhbWlseTogXCJpbmhlcml0XCIsIGZvbnRTaXplOiAxMiB9fT5TaWd1aWVudGU8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17b25DbG9zZX0gc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgdG9wOiA4LCByaWdodDogMTIsIGJhY2tncm91bmQ6IFwibm9uZVwiLCBib3JkZXI6IFwibm9uZVwiLCBmb250U2l6ZTogMjAsIGN1cnNvcjogXCJwb2ludGVyXCIsIGNvbG9yOiBcIiM5Y2EzYWZcIiB9fT54PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuLy8g4pSA4pSA4pSAIFN1YnZpc3RhIE9ic2VydmFjaW9uZXMg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG5mdW5jdGlvbiBTdWJ2aXN0YU9ic2VydmFjaW9uZXMoeyBvYnNlcnZhY2lvbmVzOiBpbml0aWFsT2JzLCBvbkJhY2sgfSkge1xuICB2YXIgW29icywgc2V0T2JzXSA9IHVzZVN0YXRlKGluaXRpYWxPYnMpO1xuICB2YXIgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBmdW5jdGlvbiBlbnZpYXIoKSB7XG4gICAgaWYgKCFpbnB1dC50cmltKCkpIHJldHVybjtcbiAgICBzZXRPYnMoZnVuY3Rpb24ocHJldikgeyByZXR1cm4gcHJldi5jb25jYXQoeyBhdXRvcjogXCJDYXJsb3MgUGVyZXpcIiwgZXNHZXN0b3I6IGZhbHNlLCB0ZXh0bzogaW5wdXQudHJpbSgpLCBmZWNoYTogXCJBaG9yYVwiIH0pOyB9KTtcbiAgICBzZXRJbnB1dChcIlwiKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwgaGVpZ2h0OiBcIjEwMCVcIiwgZm9udEZhbWlseTogXCInRE0gU2FucycsIHNhbnMtc2VyaWZcIiB9fT5cbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIHBhZGRpbmc6IFwiMTJweCAyMHB4XCIsIGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgI2YzZjRmNlwiLCBmbGV4U2hyaW5rOiAwIH19PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQmFja30gc3R5bGU9e3sgYmFja2dyb3VuZDogXCJub25lXCIsIGJvcmRlcjogXCJub25lXCIsIGN1cnNvcjogXCJwb2ludGVyXCIsIHBhZGRpbmc6IDAsIG1hcmdpblJpZ2h0OiA0LCBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICA8c3ZnIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBmaWxsPVwibm9uZVwiPjxwYXRoIGQ9XCJNMTMgNEw3IDEwTDEzIDE2XCIgc3Ryb2tlPVwiIzM3NDE1MVwiIHN0cm9rZVdpZHRoPVwiMS44XCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiLz48L3N2Zz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogMSwgb3ZlcmZsb3dZOiBcImF1dG9cIiwgcGFkZGluZzogXCIxNnB4IDIwcHhcIiB9fT5cbiAgICAgICAge29icy5tYXAoZnVuY3Rpb24obywgaSkge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17aX0gc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxNiB9fT5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTIsIGZvbnRXZWlnaHQ6IDYwMCwgY29sb3I6IG8uZXNHZXN0b3IgPyBcIiM3YzNhZWRcIiA6IFwiIzExMVwiLCBtYXJnaW5Cb3R0b206IDQgfX0+e28uYXV0b3J9PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDEzLCBjb2xvcjogXCIjMzc0MTUxXCIsIGxpbmVIZWlnaHQ6IDEuNSB9fT57by50ZXh0b308L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMTJweCAyMHB4XCIsIGJvcmRlclRvcDogXCIxcHggc29saWQgI2YzZjRmNlwiLCBkaXNwbGF5OiBcImZsZXhcIiwgZ2FwOiA4LCBmbGV4U2hyaW5rOiAwLCBiYWNrZ3JvdW5kOiBcIiNmZmZcIiB9fT5cbiAgICAgICAgPGlucHV0IHZhbHVlPXtpbnB1dH0gb25DaGFuZ2U9e2Z1bmN0aW9uKGUpIHsgc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpOyB9fSBvbktleURvd249e2Z1bmN0aW9uKGUpIHsgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIGVudmlhcigpOyB9fVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiT2JzZXJ2YWNpb24gbyBwcmVndW50YVwiXG4gICAgICAgICAgc3R5bGU9e3sgZmxleDogMSwgcGFkZGluZzogXCIxMHB4IDE0cHhcIiwgYm9yZGVyOiBcIjEuNXB4IHNvbGlkICNlNWU3ZWJcIiwgYm9yZGVyUmFkaXVzOiA4LCBmb250U2l6ZTogMTMsIGZvbnRGYW1pbHk6IFwiaW5oZXJpdFwiLCBvdXRsaW5lOiBcIm5vbmVcIiB9fSAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2Vudmlhcn0gc3R5bGU9e3sgcGFkZGluZzogXCIxMHB4IDE4cHhcIiwgYmFja2dyb3VuZDogXCIjN2MzYWVkXCIsIGNvbG9yOiBcIiNmZmZcIiwgYm9yZGVyOiBcIm5vbmVcIiwgYm9yZGVyUmFkaXVzOiA4LCBmb250U2l6ZTogMTMsIGZvbnRXZWlnaHQ6IDYwMCwgZm9udEZhbWlseTogXCJpbmhlcml0XCIsIGN1cnNvcjogXCJwb2ludGVyXCIgfX0+RW52aWFyPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuLy8g4pSA4pSA4pSAIFN1YnZpc3RhIFJlc2VuYXMg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG5mdW5jdGlvbiBTdWJ2aXN0YVJlc2VuYXMoeyByZXNlbmFzOiBpbml0aWFsUmVzZW5hcywgb25CYWNrIH0pIHtcbiAgdmFyIFtyZXNlbmFzLCBzZXRSZXNlbmFzXSA9IHVzZVN0YXRlKGluaXRpYWxSZXNlbmFzKTtcbiAgdmFyIFtpbnB1dFRleHQsIHNldElucHV0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgdmFyIFtpbnB1dFJhdGluZywgc2V0SW5wdXRSYXRpbmddID0gdXNlU3RhdGUoMCk7XG5cbiAgdmFyIG1lZGlhID0gcmVzZW5hcy5sZW5ndGggPiAwXG4gICAgPyAocmVzZW5hcy5yZWR1Y2UoZnVuY3Rpb24ocywgcikgeyByZXR1cm4gcyArIHIucmF0aW5nOyB9LCAwKSAvIHJlc2VuYXMubGVuZ3RoKS50b0ZpeGVkKDEpXG4gICAgOiBcIjAuMFwiO1xuXG4gIGZ1bmN0aW9uIHZhbG9yYXIoKSB7XG4gICAgaWYgKCFpbnB1dFRleHQudHJpbSgpIHx8IGlucHV0UmF0aW5nID09PSAwKSByZXR1cm47XG4gICAgc2V0UmVzZW5hcyhmdW5jdGlvbihwcmV2KSB7IHJldHVybiBwcmV2LmNvbmNhdCh7IGF1dG9yOiBcIkNhcmxvcyBQZXJlelwiLCByYXRpbmc6IGlucHV0UmF0aW5nLCB0ZXh0bzogaW5wdXRUZXh0LnRyaW0oKSwgZmVjaGE6IFwiQWhvcmFcIiB9KTsgfSk7XG4gICAgc2V0SW5wdXRUZXh0KFwiXCIpO1xuICAgIHNldElucHV0UmF0aW5nKDApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBmb250RmFtaWx5OiBcIidETSBTYW5zJywgc2Fucy1zZXJpZlwiIH19PlxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgcGFkZGluZzogXCIxMnB4IDIwcHhcIiwgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCAjZjNmNGY2XCIsIGZsZXhTaHJpbms6IDAgfX0+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17b25CYWNrfSBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIm5vbmVcIiwgYm9yZGVyOiBcIm5vbmVcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiwgcGFkZGluZzogMCwgbWFyZ2luUmlnaHQ6IDQsIGRpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiIH19PlxuICAgICAgICAgIDxzdmcgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIGZpbGw9XCJub25lXCI+PHBhdGggZD1cIk0xMyA0TDcgMTBMMTMgMTZcIiBzdHJva2U9XCIjMzc0MTUxXCIgc3Ryb2tlV2lkdGg9XCIxLjhcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIvPjwvc3ZnPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiAxLCBvdmVyZmxvd1k6IFwiYXV0b1wiLCBwYWRkaW5nOiBcIjE2cHggMjBweFwiIH19PlxuICAgICAgICB7LyogTWVkaWEgKi99XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGdhcDogMTYsIG1hcmdpbkJvdHRvbTogMTYsIHBhZGRpbmdCb3R0b206IDE2LCBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkICNmM2Y0ZjZcIiB9fT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTAsIGNvbG9yOiBcIiM5Y2EzYWZcIiwgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIiwgbGV0dGVyU3BhY2luZzogXCIwLjA1ZW1cIiwgbWFyZ2luQm90dG9tOiAyIH19PlZhbG9yYWNpb248L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGdhcDogNiB9fT5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IDE4LCBmb250V2VpZ2h0OiA3MDAsIGNvbG9yOiBcIiMxMTFcIiB9fT57bWVkaWF9PC9zcGFuPlxuICAgICAgICAgICAgICA8U3RhcnMgbj17cGFyc2VGbG9hdChtZWRpYSl9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlckxlZnQ6IFwiMXB4IHNvbGlkICNmM2Y0ZjZcIiwgcGFkZGluZ0xlZnQ6IDE2IH19PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTAsIGNvbG9yOiBcIiM5Y2EzYWZcIiwgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIiwgbGV0dGVyU3BhY2luZzogXCIwLjA1ZW1cIiwgbWFyZ2luQm90dG9tOiAyIH19PkV2YWx1YWNpb25lcyBkZSBlc3RhIHRyYW5zYWNjaW9uPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxOCwgZm9udFdlaWdodDogNzAwLCBjb2xvcjogXCIjMTExXCIgfX0+e3Jlc2VuYXMubGVuZ3RofTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIExpc3RhICovfVxuICAgICAgICB7cmVzZW5hcy5tYXAoZnVuY3Rpb24ociwgaSkge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17aX0gc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxNiwgcGFkZGluZ0JvdHRvbTogMTYsIGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgI2YzZjRmNlwiIH19PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsIGFsaWduSXRlbXM6IFwiZmxleC1zdGFydFwiLCBtYXJnaW5Cb3R0b206IDQgfX0+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IDEyLCBmb250V2VpZ2h0OiA2MDAsIGNvbG9yOiBcIiMxMTFcIiB9fT57ci5hdXRvcn08L3NwYW4+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgZ2FwOiA2IH19PlxuICAgICAgICAgICAgICAgICAgPFN0YXJzIG49e3IucmF0aW5nfSAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IDExLCBjb2xvcjogXCIjOWNhM2FmXCIgfX0+e3IuZmVjaGF9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTMsIGNvbG9yOiBcIiMzNzQxNTFcIiwgbGluZUhlaWdodDogMS41IH19PntyLnRleHRvfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIxMnB4IDIwcHhcIiwgYm9yZGVyVG9wOiBcIjFweCBzb2xpZCAjZjNmNGY2XCIsIGZsZXhTaHJpbms6IDAsIGJhY2tncm91bmQ6IFwiI2ZmZlwiIH19PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogOCB9fT48U3RhcnMgbj17aW5wdXRSYXRpbmd9IGludGVyYWN0aXZlIG9uU2V0PXtzZXRJbnB1dFJhdGluZ30gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZ2FwOiA4IH19PlxuICAgICAgICAgIDxpbnB1dCB2YWx1ZT17aW5wdXRUZXh0fSBvbkNoYW5nZT17ZnVuY3Rpb24oZSkgeyBzZXRJbnB1dFRleHQoZS50YXJnZXQudmFsdWUpOyB9fSBvbktleURvd249e2Z1bmN0aW9uKGUpIHsgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHZhbG9yYXIoKTsgfX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUmVzZW5hXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGZsZXg6IDEsIHBhZGRpbmc6IFwiMTBweCAxNHB4XCIsIGJvcmRlcjogXCIxLjVweCBzb2xpZCAjZTVlN2ViXCIsIGJvcmRlclJhZGl1czogOCwgZm9udFNpemU6IDEzLCBmb250RmFtaWx5OiBcImluaGVyaXRcIiwgb3V0bGluZTogXCJub25lXCIgfX0gLz5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3ZhbG9yYXJ9IHN0eWxlPXt7IHBhZGRpbmc6IFwiMTBweCAxOHB4XCIsIGJhY2tncm91bmQ6IFwiIzdjM2FlZFwiLCBjb2xvcjogXCIjZmZmXCIsIGJvcmRlcjogXCJub25lXCIsIGJvcmRlclJhZGl1czogOCwgZm9udFNpemU6IDEzLCBmb250V2VpZ2h0OiA2MDAsIGZvbnRGYW1pbHk6IFwiaW5oZXJpdFwiLCBjdXJzb3I6IFwicG9pbnRlclwiIH19PlZhbG9yYXI8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuLy8g4pSA4pSA4pSAIFBhbmVsRGV0YWxsZSDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhbmVsRGV0YWxsZSh7IGRldGFsbGU6IGQsIG9uQ2xvc2UsIGlubGluZSB9KSB7XG4gIHZhciBbc2VjY2lvbiwgc2V0U2VjY2lvbl0gPSB1c2VTdGF0ZShcInJlc3VtZW5cIik7XG4gIHZhciBbZGRPcGVuLCBzZXREZE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICB2YXIgW3N1YnZpc3RhLCBzZXRTdWJ2aXN0YV0gPSB1c2VTdGF0ZShudWxsKTsgLy8gbnVsbCB8IFwib2JzZXJ2YWNpb25lc1wiIHwgXCJyZXNlbmFzXCJcbiAgdmFyIFtsYiwgc2V0TGJdID0gdXNlU3RhdGUoeyBvcGVuOiBmYWxzZSwgaW5kZXg6IDAsIGl0ZW1zOiBbXSB9KTtcbiAgdmFyIHNjcm9sbFJlZiA9IHVzZVJlZihudWxsKTtcbiAgdmFyIHJlZnMgPSB1c2VSZWYoe30pO1xuXG4gIGZ1bmN0aW9uIGdvVG8oaWQpIHtcbiAgICBzZXREZE9wZW4oZmFsc2UpO1xuICAgIHNldFNlY2Npb24oaWQpO1xuICAgIHZhciBlbCA9IHJlZnMuY3VycmVudFtpZF07XG4gICAgaWYgKGVsICYmIHNjcm9sbFJlZi5jdXJyZW50KSB7XG4gICAgICBzY3JvbGxSZWYuY3VycmVudC5zY3JvbGxUbyh7IHRvcDogZWwub2Zmc2V0VG9wIC0gOCwgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHNlY0xhYmVsID0gKFNFQ0NJT05FUy5maW5kKGZ1bmN0aW9uKHMpIHsgcmV0dXJuIHMuaWQgPT09IHNlY2Npb247IH0pIHx8IHt9KS5sYWJlbCB8fCBcIlJlc3VtZW5cIjtcblxuICAvLyBST0kgY2FsY3VsYWRvXG4gIHZhciBnQXAgPSA0MCwgZ0FwSyA9IDkyLCBnUmVwID0gNjAsIGdSZXBLID0gMTIwO1xuICB2YXIgaUFwID0gNjAsIGlBcEsgPSAxMzgsIGlSZXAgPSA0MCwgaVJlcEsgPSA4MDtcbiAgdmFyIHRBcEsgPSBnQXBLICsgaUFwSywgdFJlcEsgPSBnUmVwSyArIGlSZXBLO1xuICBmdW5jdGlvbiByb2lBYnMocmVwSywgYXBLKSB7IHJldHVybiBhcEsgPiAwID8gTWF0aC5yb3VuZCgocmVwSyAvIGFwSykgKiAxMDApIDogMDsgfVxuICBmdW5jdGlvbiByb2lBbihhYnMsIG0pIHsgcmV0dXJuIG0gPiAwID8gTWF0aC5yb3VuZCgoYWJzIC8gbSkgKiAxMikgOiAwOyB9XG5cbiAgZnVuY3Rpb24gRWNvblJvdyhwcm9wcykge1xuICAgIHZhciBhYnMgPSByb2lBYnMocHJvcHMucmVwSywgcHJvcHMuYXBLKTtcbiAgICB2YXIgYW4gPSByb2lBbihhYnMsIGQubWVzZXMpO1xuICAgIHJldHVybiAoXG4gICAgICA8dHIgc3R5bGU9e3sgYm9yZGVyVG9wOiBcIjFweCBzb2xpZCAjZjNmNGY2XCIgfX0+XG4gICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiBcIjVweCAwXCIsIGZvbnRXZWlnaHQ6IDUwMCwgY29sb3I6IFwiIzM3NDE1MVwiLCBmb250U2l6ZTogMTIgfX0+e3Byb3BzLmxhYmVsfTwvdGQ+XG4gICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246IFwicmlnaHRcIiwgY29sb3I6IFwiIzZiNzI4MFwiLCBmb250U2l6ZTogMTIgfX0+e3Byb3BzLmFwICE9IG51bGwgPyBwcm9wcy5hcCA6IFwiXCJ9PC90ZD5cbiAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogXCJyaWdodFwiLCBjb2xvcjogXCIjNmI3MjgwXCIsIGZvbnRTaXplOiAxMiB9fT57cHJvcHMuYXBLfTwvdGQ+XG4gICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246IFwicmlnaHRcIiwgY29sb3I6IFwiIzZiNzI4MFwiLCBmb250U2l6ZTogMTIgfX0+e3Byb3BzLnJlcCAhPSBudWxsID8gcHJvcHMucmVwIDogXCJcIn08L3RkPlxuICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiBcInJpZ2h0XCIsIGNvbG9yOiBcIiM2YjcyODBcIiwgZm9udFNpemU6IDEyIH19Pntwcm9wcy5yZXBLfTwvdGQ+XG4gICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246IFwicmlnaHRcIiwgZm9udFdlaWdodDogcHJvcHMuYm9sZCA/IDcwMCA6IDQwMCwgY29sb3I6IFwiIzExMVwiLCBmb250U2l6ZTogMTIgfX0+e2Fic308L3RkPlxuICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiBcInJpZ2h0XCIsIGZvbnRXZWlnaHQ6IHByb3BzLmJvbGQgPyA3MDAgOiA0MDAsIGNvbG9yOiBwcm9wcy5ib2xkID8gXCIjZTUzZTNlXCIgOiBcIiMxMTFcIiwgZm9udFNpemU6IDEyIH19Pnthbn08L3RkPlxuICAgICAgPC90cj5cbiAgICApO1xuICB9XG5cbiAgLy8gU3VidmlzdGFzXG4gIGlmIChzdWJ2aXN0YSA9PT0gXCJvYnNlcnZhY2lvbmVzXCIpIHtcbiAgICB2YXIgc3YgPSA8U3VidmlzdGFPYnNlcnZhY2lvbmVzIG9ic2VydmFjaW9uZXM9e2Qub2JzZXJ2YWNpb25lc30gb25CYWNrPXtmdW5jdGlvbigpIHsgc2V0U3VidmlzdGEobnVsbCk7IH19IC8+O1xuICAgIGlmIChpbmxpbmUpIHJldHVybiBzdjtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBvbkNsaWNrPXtvbkNsb3NlfSBzdHlsZT17eyBwb3NpdGlvbjogXCJmaXhlZFwiLCBpbnNldDogMCwgYmFja2dyb3VuZDogXCJyZ2JhKDAsMCwwLDAuMTgpXCIsIHpJbmRleDogMjAwLCBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJmbGV4LWVuZFwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgPGRpdiBvbkNsaWNrPXtmdW5jdGlvbihlKSB7IGUuc3RvcFByb3BhZ2F0aW9uKCk7IH19IHN0eWxlPXt7IGJhY2tncm91bmQ6IFwiI2ZmZlwiLCBib3JkZXJSYWRpdXM6IFwiMTZweCAxNnB4IDAgMFwiLCB3aWR0aDogXCIxMDAlXCIsIG1heFdpZHRoOiA0ODAsIG1heEhlaWdodDogXCI5MnZoXCIsIGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH19Pntzdn08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgaWYgKHN1YnZpc3RhID09PSBcInJlc2VuYXNcIikge1xuICAgIHZhciBzdjIgPSA8U3VidmlzdGFSZXNlbmFzIHJlc2VuYXM9e2QucmVzZW5hc30gb25CYWNrPXtmdW5jdGlvbigpIHsgc2V0U3VidmlzdGEobnVsbCk7IH19IC8+O1xuICAgIGlmIChpbmxpbmUpIHJldHVybiBzdjI7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgb25DbGljaz17b25DbG9zZX0gc3R5bGU9e3sgcG9zaXRpb246IFwiZml4ZWRcIiwgaW5zZXQ6IDAsIGJhY2tncm91bmQ6IFwicmdiYSgwLDAsMCwwLjE4KVwiLCB6SW5kZXg6IDIwMCwgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiZmxleC1lbmRcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIgfX0+XG4gICAgICAgIDxkaXYgb25DbGljaz17ZnVuY3Rpb24oZSkgeyBlLnN0b3BQcm9wYWdhdGlvbigpOyB9fSBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIiNmZmZcIiwgYm9yZGVyUmFkaXVzOiBcIjE2cHggMTZweCAwIDBcIiwgd2lkdGg6IFwiMTAwJVwiLCBtYXhXaWR0aDogNDgwLCBtYXhIZWlnaHQ6IFwiOTJ2aFwiLCBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9fT57c3YyfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHZhciBib2R5ID0gKFxuICAgIDxkaXYgc3R5bGU9e3sgZm9udEZhbWlseTogXCInRE0gU2FucycsIHNhbnMtc2VyaWZcIiwgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIGhlaWdodDogXCIxMDAlXCIgfX0+XG5cbiAgICAgIHsvKiBIZWFkZXIgc3RpY2t5IGNvbiBkcm9wZG93biAqL31cbiAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwic3RpY2t5XCIsIHRvcDogMCwgYmFja2dyb3VuZDogXCIjZmZmXCIsIHpJbmRleDogMTAsIGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgI2YzZjRmNlwiLCBmbGV4U2hyaW5rOiAwIH19PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsIHBhZGRpbmc6IFwiMTJweCAyMHB4XCIgfX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH19PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtmdW5jdGlvbigpIHsgc2V0RGRPcGVuKGZ1bmN0aW9uKG8pIHsgcmV0dXJuICFvOyB9KTsgfX1cbiAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogXCJub25lXCIsIGJvcmRlcjogXCJub25lXCIsIGN1cnNvcjogXCJwb2ludGVyXCIsIGRpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBnYXA6IDUsIHBhZGRpbmc6IDAsIGZvbnRGYW1pbHk6IFwiaW5oZXJpdFwiIH19PlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogMTQsIGZvbnRXZWlnaHQ6IDYwMCwgY29sb3I6IFwiIzExMVwiIH19PntzZWNMYWJlbH08L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAxMSwgY29sb3I6IFwiIzZiNzI4MFwiIH19PnY8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIHtkZE9wZW4gJiYgKFxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHRvcDogXCJjYWxjKDEwMCUgKyA2cHgpXCIsIGxlZnQ6IDAsIGJhY2tncm91bmQ6IFwiI2ZmZlwiLCBib3JkZXI6IFwiMXB4IHNvbGlkICNlNWU3ZWJcIiwgYm9yZGVyUmFkaXVzOiAxMCwgYm94U2hhZG93OiBcIjAgNHB4IDE2cHggcmdiYSgwLDAsMCwwLjEwKVwiLCB6SW5kZXg6IDUwLCBtaW5XaWR0aDogMjYwLCBwYWRkaW5nOiBcIjZweCAwXCIsIG1heEhlaWdodDogNDAwLCBvdmVyZmxvd1k6IFwiYXV0b1wiIH19PlxuICAgICAgICAgICAgICAgIHtTRUNDSU9ORVMubWFwKGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtzLmlkfSBvbkNsaWNrPXtmdW5jdGlvbigpIHsgZ29UbyhzLmlkKTsgfX1cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiBcIjlweCAxNnB4XCIsIGZvbnRTaXplOiAxMywgY29sb3I6IHNlY2Npb24gPT09IHMuaWQgPyBcIiM3YzNhZWRcIiA6IFwiIzM3NDE1MVwiLCBmb250V2VpZ2h0OiBzZWNjaW9uID09PSBzLmlkID8gNjAwIDogNDAwLCBjdXJzb3I6IFwicG9pbnRlclwiLCBiYWNrZ3JvdW5kOiBzZWNjaW9uID09PSBzLmlkID8gXCIjZjVmM2ZmXCIgOiBcInRyYW5zcGFyZW50XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAge3MubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25DbG9zZX0gc3R5bGU9e3sgYmFja2dyb3VuZDogXCJub25lXCIsIGJvcmRlcjogXCJub25lXCIsIGZvbnRTaXplOiAyMCwgY3Vyc29yOiBcInBvaW50ZXJcIiwgY29sb3I6IFwiIzljYTNhZlwiLCBsaW5lSGVpZ2h0OiAxIH19Png8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIENvbnRlbmlkbyBzY3JvbGxhYmxlICovfVxuICAgICAgPGRpdiByZWY9e3Njcm9sbFJlZn0gc3R5bGU9e3sgZmxleDogMSwgb3ZlcmZsb3dZOiBcImF1dG9cIiwgcGFkZGluZzogXCIwIDIwcHggODBweFwiIH19PlxuXG4gICAgICAgIHsvKiBSRVNVTUVOICovfVxuICAgICAgICA8ZGl2IHJlZj17ZnVuY3Rpb24oZWwpIHsgcmVmcy5jdXJyZW50W1wicmVzdW1lblwiXSA9IGVsOyB9fSBzdHlsZT17eyBwYWRkaW5nVG9wOiAxNiB9fT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZ3JpZFwiLCBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjFmciAxZnIgMWZyIDFmclwiLCBnYXA6IDgsIG1hcmdpbkJvdHRvbTogMTIgfX0+XG4gICAgICAgICAgICA8ZGl2PjxMYmw+RXN0YWRvPC9MYmw+PGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTIsIGNvbG9yOiBlc3RhZG9Db2xvcltkLmVzdGFkb10gfHwgXCIjMzc0MTUxXCIgfX0+e2QuZXN0YWRvfTwvZGl2PjwvZGl2PlxuICAgICAgICAgICAgPGRpdj48TGJsPkdlc3RvcjwvTGJsPjxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDEyLCBjb2xvcjogXCIjN2MzYWVkXCIsIGZvbnRXZWlnaHQ6IDUwMCB9fT57ZC5nZXN0b3J9IHtkLmdlc3RvclJhdGluZ30gKjwvZGl2PjwvZGl2PlxuICAgICAgICAgICAgPGRpdj48TGJsPkVzdHJhdGVnaWE8L0xibD48ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgY29sb3I6IFwiIzExMVwiIH19PntkLmVzdHJhdGVnaWF9PC9kaXY+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PjxMYmw+VGlwbzwvTGJsPjxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDEyLCBjb2xvcjogXCIjMTExXCIgfX0+e2QudGlwb308L2Rpdj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZ3JpZFwiLCBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjFmciAxZnIgMWZyXCIsIGdhcDogOCwgbWFyZ2luQm90dG9tOiAxNCB9fT5cbiAgICAgICAgICAgIDxkaXY+PExibD5NZXNlczwvTGJsPjxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDEyLCBjb2xvcjogXCIjMTExXCIgfX0+e2QubWVzZXN9PC9kaXY+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PjxMYmw+UHJvdmluY2lhPC9MYmw+PGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTIsIGNvbG9yOiBcIiMxMTFcIiB9fT57ZC5wcm92aW5jaWF9PC9kaXY+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PjxMYmw+RmVjaGEgZGUgaW5pY2lvPC9MYmw+PGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTIsIGNvbG9yOiBcIiMxMTFcIiB9fT57ZC5mZWNoYUluaWNpb308L2Rpdj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgIDx0YWJsZSBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGJvcmRlckNvbGxhcHNlOiBcImNvbGxhcHNlXCIsIG1hcmdpbkJvdHRvbTogNCB9fT5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246IFwibGVmdFwiLCBjb2xvcjogXCIjOWNhM2FmXCIsIGZvbnRXZWlnaHQ6IDQwMCwgcGFkZGluZ0JvdHRvbTogNSwgZm9udFNpemU6IDExIH19PjwvdGg+XG4gICAgICAgICAgICAgICAge1tcIkFwb3J0ICVcIixcIksgRVVSXCIsXCJSZXAgJVwiLFwiSyBFVVJcIixcIlJPSSBhYnNcIixcImFuXCJdLm1hcChmdW5jdGlvbihoKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gPHRoIGtleT17aH0gc3R5bGU9e3sgdGV4dEFsaWduOiBcInJpZ2h0XCIsIGNvbG9yOiBcIiM5Y2EzYWZcIiwgZm9udFdlaWdodDogNDAwLCBwYWRkaW5nQm90dG9tOiA1LCBmb250U2l6ZTogMTEgfX0+e2h9PC90aD47XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICA8RWNvblJvdyBsYWJlbD1cIkdlc3RvclwiICAgYXA9e2dBcH0gYXBLPXtnQXBLfSByZXA9e2dSZXB9IHJlcEs9e2dSZXBLfSAvPlxuICAgICAgICAgICAgICA8RWNvblJvdyBsYWJlbD1cIkludmVyc29yXCIgYXA9e2lBcH0gYXBLPXtpQXBLfSByZXA9e2lSZXB9IHJlcEs9e2lSZXBLfSBib2xkIC8+XG4gICAgICAgICAgICAgIDx0ciBzdHlsZT17eyBib3JkZXJUb3A6IFwiMXB4IHNvbGlkICNmM2Y0ZjZcIiB9fT5cbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogXCI1cHggMFwiLCBmb250V2VpZ2h0OiA1MDAsIGNvbG9yOiBcIiMzNzQxNTFcIiwgZm9udFNpemU6IDEyIH19PlRvdGFsPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiBcInJpZ2h0XCIsIGNvbG9yOiBcIiM2YjcyODBcIiwgZm9udFNpemU6IDEyIH19Pnt0QXBLfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogXCJyaWdodFwiLCBjb2xvcjogXCIjNmI3MjgwXCIsIGZvbnRTaXplOiAxMiB9fT57dFJlcEt9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiBcInJpZ2h0XCIsIGNvbG9yOiBcIiMxMTFcIiwgZm9udFNpemU6IDEyIH19Pntyb2lBYnModFJlcEssIHRBcEspfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogXCJyaWdodFwiLCBjb2xvcjogXCIjMTExXCIsIGZvbnRTaXplOiAxMiB9fT57cm9pQW4ocm9pQWJzKHRSZXBLLCB0QXBLKSwgZC5tZXNlcyl9PC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgPGRpdiByZWY9e2Z1bmN0aW9uKGVsKSB7IHJlZnMuY3VycmVudFtcInNvYnJlbWlcIl0gPSBlbDsgfX0+XG4gICAgICAgICAgPFNlY1RpdGxlPlNvYnJlIG1pPC9TZWNUaXRsZT48VHh0IHRleHQ9e2Quc29icmVNaX0gLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgPGRpdiByZWY9e2Z1bmN0aW9uKGVsKSB7IHJlZnMuY3VycmVudFtcImVxdWlwb1wiXSA9IGVsOyB9fT5cbiAgICAgICAgICA8U2VjVGl0bGU+RXF1aXBvPC9TZWNUaXRsZT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZ3JpZFwiLCBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjFmciAxZnJcIiwgZ2FwOiAxMCB9fT5cbiAgICAgICAgICAgIHtbW1wiQXJxdWl0ZWN0b1wiLCBkLmVxdWlwby5hcnF1aXRlY3RvXSwgW1wiUHJvamVjdCBtYW5hZ2VyXCIsIGQuZXF1aXBvLnByb2plY3RNYW5hZ2VyXSwgW1wiSW50ZXJpb3Jpc3RhXCIsIGQuZXF1aXBvLmludGVyaW9yaXN0YV0sIFtcIkZpc2NhbGlzdGFcIiwgZC5lcXVpcG8uZmlzY2FsaXN0YV1dXG4gICAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24oeCkgeyByZXR1cm4geFsxXTsgfSlcbiAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbih4KSB7IHJldHVybiA8ZGl2IGtleT17eFswXX0+PExibD57eFswXX08L0xibD48ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMywgY29sb3I6IFwiIzM3NDE1MVwiIH19Pnt4WzFdfTwvZGl2PjwvZGl2PjsgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgIDxkaXYgcmVmPXtmdW5jdGlvbihlbCkgeyByZWZzLmN1cnJlbnRbXCJlc3RhZG9hY3R1YWxcIl0gPSBlbDsgfX0+XG4gICAgICAgICAgPFNlY1RpdGxlPkVzdGFkbyBhY3R1YWw8L1NlY1RpdGxlPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxMiB9fT48TGJsPlZhbG9yYWNpb24gZW4gdmVudGE8L0xibD48ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxNSwgZm9udFdlaWdodDogNjAwLCBjb2xvcjogXCIjMTExXCIgfX0+e2QuZXN0YWRvQWN0dWFsLnZhbG9yYWNpb259PC9kaXY+PC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDEyIH19PjxMYmw+RGVzY3JpcGNpb248L0xibD48VHh0IHRleHQ9e2QuZXN0YWRvQWN0dWFsLmRlc2NyaXBjaW9ufSAvPjwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxMiB9fT5cbiAgICAgICAgICAgIDxMYmw+Q2FyYWN0ZXJpc3RpY2FzIGRlIGxhIHByb3BpZWRhZDwvTGJsPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleFdyYXA6IFwid3JhcFwiLCBnYXA6IDYsIG1hcmdpblRvcDogNCB9fT5cbiAgICAgICAgICAgICAge2QuZXN0YWRvQWN0dWFsLmNhcmFjdGVyaXN0aWNhcy5tYXAoZnVuY3Rpb24oYykgeyByZXR1cm4gPHNwYW4ga2V5PXtjfSBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIiNmM2Y0ZjZcIiwgYm9yZGVyUmFkaXVzOiAyMCwgcGFkZGluZzogXCIzcHggMTBweFwiLCBmb250U2l6ZTogMTIsIGNvbG9yOiBcIiMzNzQxNTFcIiB9fT57Y308L3NwYW4+OyB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxMiB9fT5cbiAgICAgICAgICAgIDxMYmw+VWJpY2FjaW9uPC9MYmw+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiAxMDAsIGJhY2tncm91bmQ6IFwiI2U1ZTdlYlwiLCBib3JkZXJSYWRpdXM6IDgsIGRpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiwgZm9udFNpemU6IDEyLCBjb2xvcjogXCIjOWNhM2FmXCIgfX0+TWFwYSAtIEVzdGVwb25hLCBNYWxhZ2E8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPExibD5Gb3RvcyBkZWwgZXN0YWRvIGFjdHVhbDwvTGJsPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImdyaWRcIiwgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCJyZXBlYXQoNCwxZnIpXCIsIGdhcDogNiwgbWFyZ2luVG9wOiA0IH19PlxuICAgICAgICAgICAgICB7W1wiI2U1ZTdlYlwiLFwiI2QxZDVkYlwiLFwiI2M0YzRjNFwiLFwiI2IwYjBiMFwiXS5tYXAoZnVuY3Rpb24oYywgaSkge1xuICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17aX0gb25DbGljaz17ZnVuY3Rpb24oKSB7IHNldExiKHsgb3BlbjogdHJ1ZSwgaW5kZXg6IGksIGl0ZW1zOiBbXCJGb3RvIDFcIixcIkZvdG8gMlwiLFwiRm90byAzXCIsXCJGb3RvIDRcIl0gfSk7IH19IHN0eWxlPXt7IGhlaWdodDogNjAsIGJhY2tncm91bmQ6IGMsIGJvcmRlclJhZGl1czogNiwgY3Vyc29yOiBcInBvaW50ZXJcIiB9fSAvPjtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgIDxkaXYgcmVmPXtmdW5jdGlvbihlbCkgeyByZWZzLmN1cnJlbnRbXCJwcm9ibGVtYVwiXSA9IGVsOyB9fT5cbiAgICAgICAgICA8U2VjVGl0bGU+UHJvYmxlbWEgeSBhcG9ydGFjaW9uIGRlIHZhbG9yPC9TZWNUaXRsZT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTIgfX0+PExibD5Qcm9ibGVtYTwvTGJsPjxUeHQgdGV4dD17ZC5wcm9ibGVtYX0gLz48L2Rpdj5cbiAgICAgICAgICA8ZGl2PjxMYmw+U29sdWNpb248L0xibD48VHh0IHRleHQ9e2Quc29sdWNpb259IC8+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgIDxkaXYgcmVmPXtmdW5jdGlvbihlbCkgeyByZWZzLmN1cnJlbnRbXCJmYXNlc1wiXSA9IGVsOyB9fT5cbiAgICAgICAgICA8U2VjVGl0bGU+RmFzZXMgZGUgbGEgb3BlcmFjaW9uPC9TZWNUaXRsZT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLCBnYXA6IDggfX0+XG4gICAgICAgICAgICB7ZC5mYXNlcy5tYXAoZnVuY3Rpb24oZiwgaSkge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBzdHlsZT17eyBkaXNwbGF5OiBcImdyaWRcIiwgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIxZnIgMmZyIDFmclwiLCBnYXA6IDgsIHBhZGRpbmc6IFwiMTBweCAxMnB4XCIsIGJhY2tncm91bmQ6IFwiI2Y5ZmFmYlwiLCBib3JkZXJSYWRpdXM6IDggfX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2PjxMYmw+RmFzZTwvTGJsPjxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDEyLCBmb250V2VpZ2h0OiA2MDAsIGNvbG9yOiBcIiMxMTFcIiB9fT57Zi5mYXNlfTwvZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj48TGJsPkFjY2lvbmVzPC9MYmw+PGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTIsIGNvbG9yOiBcIiMzNzQxNTFcIiwgbGluZUhlaWdodDogMS41IH19PntmLmFjY2lvbmVzfTwvZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj48TGJsPkR1cmFjaW9uPC9MYmw+PGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTIsIGNvbG9yOiBcIiM2YjcyODBcIiB9fT57Zi5kdXJhY2lvbn08L2Rpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICA8ZGl2IHJlZj17ZnVuY3Rpb24oZWwpIHsgcmVmcy5jdXJyZW50W1wic2l0dWFjaW9uXCJdID0gZWw7IH19PlxuICAgICAgICAgIDxTZWNUaXRsZT5TaXR1YWNpb24gYWN0dWFsIHkgcHJveGltb3MgcGFzb3M8L1NlY1RpdGxlPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxMiB9fT48TGJsPlNpdHVhY2lvbiBhY3R1YWw8L0xibD48VHh0IHRleHQ9e2Quc2l0dWFjaW9uQWN0dWFsfSAvPjwvZGl2PlxuICAgICAgICAgIDxkaXY+PExibD5Qcm94aW1vcyBwYXNvczwvTGJsPjxUeHQgdGV4dD17ZC5wcm94aW1vc1Bhc29zfSAvPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICA8ZGl2IHJlZj17ZnVuY3Rpb24oZWwpIHsgcmVmcy5jdXJyZW50W1wiYW5hbGlzaXNcIl0gPSBlbDsgfX0+XG4gICAgICAgICAgPFNlY1RpdGxlPkFuYWxpc2lzIGVjb25vbWljbzwvU2VjVGl0bGU+PFR4dCB0ZXh0PXtkLmFuYWxpc2lzRWNvbm9taWNvfSAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICA8ZGl2IHJlZj17ZnVuY3Rpb24oZWwpIHsgcmVmcy5jdXJyZW50W1wiZGVzZ2xvc2VcIl0gPSBlbDsgfX0+XG4gICAgICAgICAgPFNlY1RpdGxlPkRlc2dsb3NlIGRlIGxhIGludmVyc2lvbjwvU2VjVGl0bGU+XG4gICAgICAgICAge1tkLmRlc2dsb3NlLnQxLCBkLmRlc2dsb3NlLnQyLCBkLmRlc2dsb3NlLnQzXS5tYXAoZnVuY3Rpb24odGFibGEsIHRpKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17dGl9IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTQgfX0+XG4gICAgICAgICAgICAgICAge3RhYmxhLm1hcChmdW5jdGlvbihyb3cpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtyb3dbMF19IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsIHBhZGRpbmc6IFwiNHB4IDBcIiwgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCAjZjlmYWZiXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IDEyLCBjb2xvcjogXCIjMzc0MTUxXCIgfX0+e3Jvd1swXX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IDEyLCBjb2xvcjogXCIjMTExXCIsIGZvbnRXZWlnaHQ6IHRpID09PSAyID8gNjAwIDogNDAwIH19Pntyb3dbMV19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgPGRpdiByZWY9e2Z1bmN0aW9uKGVsKSB7IHJlZnMuY3VycmVudFtcImRlc3Rpbm9cIl0gPSBlbDsgfX0+XG4gICAgICAgICAgPFNlY1RpdGxlPkRlc3Rpbm8geSBwb3IgcXVlPC9TZWNUaXRsZT48VHh0IHRleHQ9e2QuZGVzdGlub30gLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgPGRpdiByZWY9e2Z1bmN0aW9uKGVsKSB7IHJlZnMuY3VycmVudFtcImVzY2VuYXJpb3NcIl0gPSBlbDsgfX0+XG4gICAgICAgICAgPFNlY1RpdGxlPkVzY2VuYXJpb3M8L1NlY1RpdGxlPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJncmlkXCIsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMWZyIDFmciAxZnJcIiwgZ2FwOiAxMCwgbWFyZ2luQm90dG9tOiAxMiB9fT5cbiAgICAgICAgICAgIHtbW1wiUGVzaW1pc3RhXCIsIGQuZXNjZW5hcmlvcy5wZXNpbWlzdGEsIFwiI2ZlZjNjN1wiXSwgW1wiUmVhbGlzdGFcIiwgZC5lc2NlbmFyaW9zLnJlYWxpc3RhLCBcIiNmMGZkZjRcIl0sIFtcIk9wdGltaXN0YVwiLCBkLmVzY2VuYXJpb3Mub3B0aW1pc3RhLCBcIiNlZmY2ZmZcIl1dLm1hcChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2VbMF19IHN0eWxlPXt7IGJhY2tncm91bmQ6IGVbMl0sIGJvcmRlclJhZGl1czogOCwgcGFkZGluZzogXCIxMHB4IDEycHhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxuICAgICAgICAgICAgICAgICAgPExibD57ZVswXX08L0xibD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDE0LCBmb250V2VpZ2h0OiA3MDAsIGNvbG9yOiBcIiMxMTFcIiB9fT57ZVsxXX0gRVVSPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8TGJsPkV4cGxpY2FjaW9uPC9MYmw+PFR4dCB0ZXh0PXtkLmVzY2VuYXJpb3MuZXhwbGljYWNpb259IC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgIDxkaXYgcmVmPXtmdW5jdGlvbihlbCkgeyByZWZzLmN1cnJlbnRbXCJmaXNjYWxpZGFkXCJdID0gZWw7IH19PlxuICAgICAgICAgIDxTZWNUaXRsZT5GaXNjYWxpZGFkIHkgUEJDPC9TZWNUaXRsZT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTAgfX0+PExibD5GaXNjYWxpZGFkIGRlIGxhIGNvbXByYTwvTGJsPjxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDEzLCBjb2xvcjogXCIjMzc0MTUxXCIgfX0+e2QuZmlzY2FsaWRhZC5jb21wcmF9PC9kaXY+PC9kaXY+XG4gICAgICAgICAgPGRpdj48TGJsPlByZXZlbmNpb24gZGUgYmxhbnF1ZW8gZGUgY2FwaXRhbGVzPC9MYmw+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLCBiYWNrZ3JvdW5kOiBkLmZpc2NhbGlkYWQucGJjID09PSBcIk5lY2VzYXJpYVwiID8gXCIjZmVmM2M3XCIgOiBcIiNmMGZkZjRcIiwgYm9yZGVyUmFkaXVzOiAyMCwgcGFkZGluZzogXCIzcHggMTJweFwiLCBmb250U2l6ZTogMTIsIGZvbnRXZWlnaHQ6IDYwMCwgY29sb3I6IGQuZmlzY2FsaWRhZC5wYmMgPT09IFwiTmVjZXNhcmlhXCIgPyBcIiM5MjQwMGVcIiA6IFwiIzE2NjUzNFwiIH19PntkLmZpc2NhbGlkYWQucGJjfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgPGRpdiByZWY9e2Z1bmN0aW9uKGVsKSB7IHJlZnMuY3VycmVudFtcInNvbHZlbmNpYVwiXSA9IGVsOyB9fT5cbiAgICAgICAgICA8U2VjVGl0bGU+U29sdmVuY2lhIHkgdHJhbnNwYXJlbmNpYTwvU2VjVGl0bGU+XG4gICAgICAgICAge1tbXCJDb21wcmFkb3JcIiwgZC5zb2x2ZW5jaWEuY29tcHJhZG9yXSwgW1wiQ29tdW5pY2FjaW9uIHkgcGVyaW9kaWNpZGFkXCIsIGQuc29sdmVuY2lhLmNvbXVuaWNhY2lvbl0sIFtcIkJhbmNvXCIsIGQuc29sdmVuY2lhLmJhbmNvXSwgW1wiQ3VlbnRhIGJhbmNhcmlhXCIsIGQuc29sdmVuY2lhLmN1ZW50YV0sIFtcIlVsdGltbyBlc3RhZG8gZGUgbGEgY3VlbnRhXCIsIGQuc29sdmVuY2lhLmVzdGFkb0N1ZW50YV1dLm1hcChmdW5jdGlvbih4KSB7XG4gICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e3hbMF19IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTAgfX0+PExibD57eFswXX08L0xibD48ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMywgY29sb3I6IFwiIzM3NDE1MVwiLCBsaW5lSGVpZ2h0OiAxLjUgfX0+e3hbMV19PC9kaXY+PC9kaXY+O1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICA8ZGl2IHJlZj17ZnVuY3Rpb24oZWwpIHsgcmVmcy5jdXJyZW50W1wiZG9jdW1lbnRhY2lvblwiXSA9IGVsOyB9fT5cbiAgICAgICAgICA8U2VjVGl0bGU+RG9jdW1lbnRhY2lvbjwvU2VjVGl0bGU+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwgZ2FwOiA2IH19PlxuICAgICAgICAgICAge2QuZG9jdW1lbnRvcy5tYXAoZnVuY3Rpb24oZG9jLCBpKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9e2l9IG9uQ2xpY2s9e2Z1bmN0aW9uKCkgeyBzZXRMYih7IG9wZW46IHRydWUsIGluZGV4OiBpLCBpdGVtczogZC5kb2N1bWVudG9zIH0pOyB9fVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGdhcDogMTAsIHBhZGRpbmc6IFwiMTBweCAxMnB4XCIsIGJhY2tncm91bmQ6IFwiI2Y5ZmFmYlwiLCBib3JkZXI6IFwiMXB4IHNvbGlkICNmM2Y0ZjZcIiwgYm9yZGVyUmFkaXVzOiA4LCBjdXJzb3I6IFwicG9pbnRlclwiLCBmb250RmFtaWx5OiBcImluaGVyaXRcIiwgdGV4dEFsaWduOiBcImxlZnRcIiB9fT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgY29sb3I6IFwiIzljYTNhZlwiLCBmb250V2VpZ2h0OiA1MDAgfX0+UERGPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IDEzLCBjb2xvcjogXCIjMzc0MTUxXCIsIGZvbnRXZWlnaHQ6IDUwMCB9fT57ZG9jfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogT0JTRVJWQUNJT05FUyDigJQgcHJldmlldyAqL31cbiAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgPGRpdiByZWY9e2Z1bmN0aW9uKGVsKSB7IHJlZnMuY3VycmVudFtcIm9ic2VydmFjaW9uZXNcIl0gPSBlbDsgfX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBtYXJnaW5Cb3R0b206IDEwIH19PlxuICAgICAgICAgICAgPFNlY1RpdGxlPk9ic2VydmFjaW9uZXMgeSBwcmVndW50YXM8L1NlY1RpdGxlPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtmdW5jdGlvbigpIHsgc2V0U3VidmlzdGEoXCJvYnNlcnZhY2lvbmVzXCIpOyB9fSBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIm5vbmVcIiwgYm9yZGVyOiBcIm5vbmVcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiwgY29sb3I6IFwiIzdjM2FlZFwiLCBmb250U2l6ZTogMTIsIGZvbnRXZWlnaHQ6IDYwMCwgZm9udEZhbWlseTogXCJpbmhlcml0XCIsIHBhZGRpbmc6IDAgfX0+XG4gICAgICAgICAgICAgIFZlciB0b2RhcyAoe2Qub2JzZXJ2YWNpb25lcy5sZW5ndGh9KSDihpJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtkLm9ic2VydmFjaW9uZXMuc2xpY2UoMCwgMikubWFwKGZ1bmN0aW9uKG8sIGkpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBzdHlsZT17eyBwYWRkaW5nOiBcIjEwcHggMFwiLCBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkICNmM2Y0ZjZcIiB9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgZm9udFdlaWdodDogNjAwLCBjb2xvcjogby5lc0dlc3RvciA/IFwiIzdjM2FlZFwiIDogXCIjMTExXCIsIG1hcmdpbkJvdHRvbTogMyB9fT57by5hdXRvcn08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMywgY29sb3I6IFwiIzM3NDE1MVwiIH19PntvLnRleHRvfTwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtmdW5jdGlvbigpIHsgc2V0U3VidmlzdGEoXCJvYnNlcnZhY2lvbmVzXCIpOyB9fSBzdHlsZT17eyBtYXJnaW5Ub3A6IDEwLCBiYWNrZ3JvdW5kOiBcIm5vbmVcIiwgYm9yZGVyOiBcIm5vbmVcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiwgY29sb3I6IFwiIzdjM2FlZFwiLCBmb250U2l6ZTogMTMsIGZvbnRXZWlnaHQ6IDYwMCwgZm9udEZhbWlseTogXCJpbmhlcml0XCIsIHBhZGRpbmc6IDAgfX0+XG4gICAgICAgICAgICBNb3N0cmFyIG1hcyAoe2Qub2JzZXJ2YWNpb25lcy5sZW5ndGggLSAyfSlcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIFJFU0VOQVMg4oCUIHByZXZpZXcgKi99XG4gICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgIDxkaXYgcmVmPXtmdW5jdGlvbihlbCkgeyByZWZzLmN1cnJlbnRbXCJyZXNlbmFzXCJdID0gZWw7IH19PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgbWFyZ2luQm90dG9tOiAxMCB9fT5cbiAgICAgICAgICAgIDxTZWNUaXRsZT5SZXNlbmFzPC9TZWNUaXRsZT5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17ZnVuY3Rpb24oKSB7IHNldFN1YnZpc3RhKFwicmVzZW5hc1wiKTsgfX0gc3R5bGU9e3sgYmFja2dyb3VuZDogXCJub25lXCIsIGJvcmRlcjogXCJub25lXCIsIGN1cnNvcjogXCJwb2ludGVyXCIsIGNvbG9yOiBcIiM3YzNhZWRcIiwgZm9udFNpemU6IDEyLCBmb250V2VpZ2h0OiA2MDAsIGZvbnRGYW1pbHk6IFwiaW5oZXJpdFwiLCBwYWRkaW5nOiAwIH19PlxuICAgICAgICAgICAgICBWZXIgdG9kYXMgKHtkLnJlc2VuYXMubGVuZ3RofSkg4oaSXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBnYXA6IDgsIG1hcmdpbkJvdHRvbTogMTIgfX0+XG4gICAgICAgICAgICA8U3RhcnMgbj17ZC5nZXN0b3JSYXRpbmd9IC8+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogMTMsIGZvbnRXZWlnaHQ6IDcwMCwgY29sb3I6IFwiIzExMVwiIH19PntkLmdlc3RvclJhdGluZ308L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogMTIsIGNvbG9yOiBcIiM5Y2EzYWZcIiB9fT4oe2QuZ2VzdG9yUmV2aWV3c30gdmFsb3JhY2lvbmVzKTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7ZC5yZXNlbmFzLnNsaWNlKDAsIDIpLm1hcChmdW5jdGlvbihyLCBpKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gc3R5bGU9e3sgcGFkZGluZzogXCIxMHB4IDBcIiwgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCAjZjNmNGY2XCIgfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLCBtYXJnaW5Cb3R0b206IDIgfX0+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogMTIsIGZvbnRXZWlnaHQ6IDYwMCwgY29sb3I6IFwiIzExMVwiIH19PntyLmF1dG9yfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAxMSwgY29sb3I6IFwiIzljYTNhZlwiIH19PntyLmZlY2hhfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMyB9fT48U3RhcnMgbj17ci5yYXRpbmd9IC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTMsIGNvbG9yOiBcIiMzNzQxNTFcIiB9fT57ci50ZXh0b308L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17ZnVuY3Rpb24oKSB7IHNldFN1YnZpc3RhKFwicmVzZW5hc1wiKTsgfX0gc3R5bGU9e3sgbWFyZ2luVG9wOiAxMCwgYmFja2dyb3VuZDogXCJub25lXCIsIGJvcmRlcjogXCJub25lXCIsIGN1cnNvcjogXCJwb2ludGVyXCIsIGNvbG9yOiBcIiM3YzNhZWRcIiwgZm9udFNpemU6IDEzLCBmb250V2VpZ2h0OiA2MDAsIGZvbnRGYW1pbHk6IFwiaW5oZXJpdFwiLCBwYWRkaW5nOiAwIH19PlxuICAgICAgICAgICAgTW9zdHJhciBtYXMgKHtkLnJlc2VuYXMubGVuZ3RoIC0gMn0pXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIEZvb3RlciBmaWpvICovfVxuICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjEycHggMjBweFwiLCBib3JkZXJUb3A6IFwiMXB4IHNvbGlkICNmM2Y0ZjZcIiwgZGlzcGxheTogXCJmbGV4XCIsIGdhcDogMTAsIGZsZXhTaHJpbms6IDAsIGJhY2tncm91bmQ6IFwiI2ZmZlwiIH19PlxuICAgICAgICA8YnV0dG9uIHN0eWxlPXt7IGZsZXg6IDEsIHBhZGRpbmc6IFwiMTBweFwiLCBib3JkZXI6IFwiMS41cHggc29saWQgI2U1ZTdlYlwiLCBib3JkZXJSYWRpdXM6IDgsIGJhY2tncm91bmQ6IFwiI2ZmZlwiLCBmb250U2l6ZTogMTMsIGZvbnRGYW1pbHk6IFwiaW5oZXJpdFwiLCBjdXJzb3I6IFwicG9pbnRlclwiLCBjb2xvcjogXCIjMzc0MTUxXCIsIGZvbnRXZWlnaHQ6IDUwMCB9fT5WZXIgcHJlc2VudGFjaW9uPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gc3R5bGU9e3sgZmxleDogMSwgcGFkZGluZzogXCIxMHB4XCIsIGJvcmRlcjogXCJub25lXCIsIGJvcmRlclJhZGl1czogOCwgYmFja2dyb3VuZDogXCIjN2MzYWVkXCIsIGZvbnRTaXplOiAxMywgZm9udEZhbWlseTogXCJpbmhlcml0XCIsIGN1cnNvcjogXCJwb2ludGVyXCIsIGNvbG9yOiBcIiNmZmZcIiwgZm9udFdlaWdodDogNjAwIH19PlNvbGljaXRhciBpbnZlcnRpcjwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHtsYi5vcGVuICYmIChcbiAgICAgICAgPExpZ2h0Ym94IGl0ZW1zPXtsYi5pdGVtc30gaW5kZXg9e2xiLmluZGV4fVxuICAgICAgICAgIG9uQ2xvc2U9e2Z1bmN0aW9uKCkgeyBzZXRMYih7IG9wZW46IGZhbHNlLCBpbmRleDogMCwgaXRlbXM6IFtdIH0pOyB9fVxuICAgICAgICAgIG9uUHJldj17ZnVuY3Rpb24oKSB7IHNldExiKGZ1bmN0aW9uKGwpIHsgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGwsIHsgaW5kZXg6IE1hdGgubWF4KDAsIGwuaW5kZXggLSAxKSB9KTsgfSk7IH19XG4gICAgICAgICAgb25OZXh0PXtmdW5jdGlvbigpIHsgc2V0TGIoZnVuY3Rpb24obCkgeyByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgbCwgeyBpbmRleDogTWF0aC5taW4obC5pdGVtcy5sZW5ndGggLSAxLCBsLmluZGV4ICsgMSkgfSk7IH0pOyB9fSAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcblxuICBpZiAoaW5saW5lKSByZXR1cm4gYm9keTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IG9uQ2xpY2s9e29uQ2xvc2V9IHN0eWxlPXt7IHBvc2l0aW9uOiBcImZpeGVkXCIsIGluc2V0OiAwLCBiYWNrZ3JvdW5kOiBcInJnYmEoMCwwLDAsMC4xOClcIiwgekluZGV4OiAyMDAsIGRpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImZsZXgtZW5kXCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiIH19PlxuICAgICAgPGRpdiBvbkNsaWNrPXtmdW5jdGlvbihlKSB7IGUuc3RvcFByb3BhZ2F0aW9uKCk7IH19IHN0eWxlPXt7IGJhY2tncm91bmQ6IFwiI2ZmZlwiLCBib3JkZXJSYWRpdXM6IFwiMTZweCAxNnB4IDAgMFwiLCB3aWR0aDogXCIxMDAlXCIsIG1heFdpZHRoOiA0ODAsIG1heEhlaWdodDogXCI5MnZoXCIsIGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH19PlxuICAgICAgICB7Ym9keX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sImZpbGUiOiIvVXNlcnMvY2FybG9zL0Rlc2t0b3AvaW4tb3BvcnR1bmlkYWRlcy9zcmMvY29tcG9uZW50cy9QYW5lbERldGFsbGUuanN4In0=