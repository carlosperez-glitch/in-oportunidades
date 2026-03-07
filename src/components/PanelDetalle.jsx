import { useState, useRef, useEffect } from "react";
import { estadoColor, colors } from "../theme";

// ─── Secciones del desplegable ────────────────────────────────────────────────
// El nombre de la sección seleccionada aparece en el header (no en la barra lateral)
const SECCIONES = [
  { id: "resumen",       label: "Resumen" },
  { id: "equipo",        label: "Equipo gestor" },
  { id: "gestion",       label: "Gestión" },
  { id: "analisis",      label: "Análisis económico" },
  { id: "precio",        label: "Precio de venta" },
  { id: "solvencia",     label: "Solvencia y transparencia" },
  { id: "documentacion", label: "Documentación" },
  { id: "observaciones", label: "Observaciones y preguntas" },
  { id: "resenas",       label: "Reseñas de la operación" },
];

// ─── Helpers de UI ────────────────────────────────────────────────────────────
function Lbl({ children }) {
  return <div style={{ fontSize: 12, color: "#737373", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 3, marginTop: 8 }}>{children}</div>;
}
function Divider() {
  return <div style={{ height: 1, background: "#dbdbdb", margin: "22px 0 18px" }} />;
}
function SecTitle({ children }) {
  return <div style={{ fontSize: 13, fontWeight: 700, color: "#374151", marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.06em" }}>{children}</div>;
}
function Txt({ text }) {
  if (!text) return null;
  var paras = String(text).split(/\n\n+/);
  return (
    <div style={{ fontSize: 14, color: colors.secondary, lineHeight: 1.6 }}>
      {paras.map(function(p, i) {
        return <p key={i} style={{ margin: 0, marginBottom: i < paras.length - 1 ? 1 : 0, whiteSpace: "pre-line" }}>{p}</p>;
      })}
    </div>
  );
}
function Stars({ n, interactive, onSet }) {
  return (
    <span>
      {[1,2,3,4,5].map(function(i) {
        return (
          <span key={i} onClick={interactive ? function() { onSet(i); } : undefined}
            style={{ color: i <= Math.round(n) ? colors.starOn : colors.starOff, fontSize: interactive ? 22 : 13, cursor: interactive ? "pointer" : "default" }}>
            {i <= Math.round(n) ? "★" : "☆"}
          </span>
        );
      })}
    </span>
  );
}
// Campo clave-valor — si valor está vacío no se renderiza
// PATRÓN: campos vacíos invisibles
function Campo({ label, valor }) {
  if (!valor && valor !== 0) return null;
  return (
    <div style={{ marginBottom: 12 }}>
      <Lbl>{label}</Lbl>
      <div style={{ fontSize: 15, color: colors.secondary }}>{valor}</div>
    </div>
  );
}
// ─── Lightbox ─────────────────────────────────────────────────────────────────
function Lightbox({ items, index, onClose, onPrev, onNext }) {
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div onClick={function(e) { e.stopPropagation(); }} style={{ background: "#fff", borderRadius: 10, padding: "28px 32px", minWidth: 280, textAlign: "center", position: "relative" }}>
        <div style={{ fontSize: 16, fontWeight: 600, color: "#111", marginBottom: 12 }}>{items[index]}</div>
        <div style={{ width: 240, height: 160, background: "#f3f4f6", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", color: "#9ca3af", fontSize: 14, margin: "0 auto 16px" }}>Documento</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <button onClick={onPrev} disabled={index === 0} style={{ border: "1.5px solid #e5e7eb", borderRadius: 6, padding: "5px 12px", cursor: index === 0 ? "default" : "pointer", background: "#fff", color: index === 0 ? "#d1d5db" : "#374151", fontFamily: "inherit", fontSize: 14 }}>Anterior</button>
          <span style={{ fontSize: 13, color: "#9ca3af" }}>{index + 1} / {items.length}</span>
          <button onClick={onNext} disabled={index === items.length - 1} style={{ border: "1.5px solid #e5e7eb", borderRadius: 6, padding: "5px 12px", cursor: index === items.length - 1 ? "default" : "pointer", background: "#fff", color: index === items.length - 1 ? "#d1d5db" : "#374151", fontFamily: "inherit", fontSize: 14 }}>Siguiente</button>
        </div>
        <button onClick={onClose} style={{ position: "absolute", top: 8, right: 12, background: "none", border: "none", fontSize: 22, cursor: "pointer", color: "#9ca3af" }}>x</button>
      </div>
    </div>
  );
}

// ─── Subvista Observaciones ───────────────────────────────────────────────────
function SubvistaObservaciones({ observaciones: initialObs, onBack }) {
  var [obs, setObs] = useState(initialObs);
  var [input, setInput] = useState("");

  function enviar() {
    if (!input.trim()) return;
    setObs(function(prev) { return prev.concat({ autor: "Carlos Perez", esGestor: false, texto: input.trim(), fecha: "Ahora" }); });
    setInput("");
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", overflow: "hidden", fontFamily: "'DM Sans', sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", padding: "20px 24px", borderBottom: "1px solid " + colors.border, flexShrink: 0 }}>
        <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", padding: 0, marginRight: 4 }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M13 4L7 10L13 16" stroke="#374151" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <span style={{ fontSize: 16, fontWeight: 600, color: "#111" }}>Observaciones y preguntas</span>
      </div>
      <div style={{ flex: 1, overflowY: "auto", padding: "16px 24px" }}>
        {obs.map(function(o, i) {
          return (
            <div key={i} style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#111", marginBottom: 4 }}>{o.autor}</div>
              <div style={{ fontSize: 15, color: colors.secondary, lineHeight: 1.5 }}>{o.texto}</div>
              <div style={{ fontSize: 13, color: "#9ca3af", marginTop: 2 }}>{o.fecha}</div>
            </div>
          );
        })}
      </div>
      <div style={{ padding: "12px 24px", borderTop: "1px solid #f3f4f6", display: "flex", gap: 8, flexShrink: 0, background: "#fff" }}>
        <input value={input} onChange={function(e) { setInput(e.target.value); }} onKeyDown={function(e) { if (e.key === "Enter") enviar(); }}
          placeholder="Observación o pregunta"
          style={{ flex: 1, padding: "10px 14px", border: "1.5px solid #e5e7eb", borderRadius: 8, fontSize: 15, fontFamily: "inherit", outline: "none" }} />
        <button onClick={enviar} style={{ padding: "10px 18px", background: colors.accion, color: "#fff", border: "none", borderRadius: 8, fontSize: 15, fontWeight: 600, fontFamily: "inherit", cursor: "pointer" }}>Enviar</button>
      </div>
    </div>
  );
}

// ─── Subvista Reseñas ─────────────────────────────────────────────────────────
function SubvistaResenas({ resenas: initialResenas, onBack }) {
  var [resenas, setResenas] = useState(initialResenas);
  var [inputText, setInputText] = useState("");
  var [inputRating, setInputRating] = useState(0);

  var media = resenas.length > 0
    ? (resenas.reduce(function(s, r) { return s + r.rating; }, 0) / resenas.length).toFixed(1)
    : "0.0";

  function valorar() {
    if (!inputText.trim() || inputRating === 0) return;
    setResenas(function(prev) { return prev.concat({ autor: "Carlos Perez", rating: inputRating, texto: inputText.trim(), fecha: "Ahora" }); });
    setInputText("");
    setInputRating(0);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", fontFamily: "'DM Sans', sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", padding: "12px 24px", borderBottom: "1px solid #f3f4f6", flexShrink: 0 }}>
        <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", padding: 0, marginRight: 8 }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M13 4L7 10L13 16" stroke="#374151" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <span style={{ fontSize: 16, fontWeight: 600, color: "#111" }}>Reseñas de la operación</span>
      </div>
      <div style={{ flex: 1, overflowY: "auto", padding: "16px 24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16, paddingBottom: 16, borderBottom: "1px solid #f3f4f6" }}>
          <div>
            <Lbl>Valoración media</Lbl>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontSize: 20, fontWeight: 700, color: "#111" }}>{media}</span>
              <Stars n={parseFloat(media)} />
            </div>
          </div>
          <div style={{ borderLeft: "1px solid #f3f4f6", paddingLeft: 16 }}>
            <Lbl>Total reseñas</Lbl>
            <div style={{ fontSize: 20, fontWeight: 700, color: "#111" }}>{resenas.length}</div>
          </div>
        </div>
        {resenas.map(function(r, i) {
          return (
            <div key={i} style={{ marginBottom: 16, paddingBottom: 16, borderBottom: "1px solid #f3f4f6" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: "#111" }}>{r.autor}</span>
                <span style={{ fontSize: 13, color: "#9ca3af" }}>{r.fecha}</span>
              </div>
              <div style={{ marginBottom: 3 }}><Stars n={r.rating} /></div>
              <div style={{ fontSize: 15, color: colors.secondary }}>{r.texto}</div>
            </div>
          );
        })}
      </div>
      <div style={{ padding: "12px 24px", borderTop: "1px solid #f3f4f6", flexShrink: 0, background: "#fff" }}>
        <div style={{ marginBottom: 8 }}><Stars n={inputRating} interactive onSet={setInputRating} /></div>
        <div style={{ display: "flex", gap: 8 }}>
          <input value={inputText} onChange={function(e) { setInputText(e.target.value); }} onKeyDown={function(e) { if (e.key === "Enter") valorar(); }}
            placeholder="Tu reseña"
            style={{ flex: 1, padding: "10px 14px", border: "1.5px solid #e5e7eb", borderRadius: 8, fontSize: 15, fontFamily: "inherit", outline: "none" }} />
          <button onClick={valorar} style={{ padding: "10px 18px", background: colors.accion, color: "#fff", border: "none", borderRadius: 8, fontSize: 15, fontWeight: 600, fontFamily: "inherit", cursor: "pointer" }}>Valorar</button>
        </div>
      </div>
    </div>
  );
}

// ─── PanelDetalle ─────────────────────────────────────────────────────────────
// Props:
// - detalle: objeto DETALLE completo (de mock.js)
// - onClose: fn para cerrar el panel
// - inline: true → columna derecha desktop | false → bottom sheet mobile
export default function PanelDetalle({ detalle: d, onClose, inline }) {
  var [seccion, setSeccion]   = useState("resumen");
  var [ddOpen, setDdOpen]     = useState(false);
  var [subvista, setSubvista] = useState(null); // null | "observaciones" | "resenas"
  var [lb, setLb]             = useState({ open: false, index: 0, items: [] });
  var scrollRef = useRef(null);
  var refs      = useRef({});

  function goTo(id) {
    setDdOpen(false);
    setSeccion(id);
    var el = refs.current[id];
    if (el && scrollRef.current) {
      scrollRef.current.scrollTo({ top: el.offsetTop - 8, behavior: "smooth" });
    }
  }

  var secLabel = (SECCIONES.find(function(s) { return s.id === seccion; }) || {}).label || "Resumen";

  // Actualiza el item del dropdown según la sección visible al hacer scroll
  useEffect(function() {
    var container = scrollRef.current;
    if (!container) return;
    function onScroll() {
      var headerH = 45; // altura aproximada del header sticky del panel
      var trigger = headerH;
      var current = null;
      SECCIONES.forEach(function(s) {
        var el = refs.current[s.id];
        if (!el) return;
        var top = el.getBoundingClientRect().top - container.getBoundingClientRect().top;
        if (top <= trigger) current = s.id;
      });
      if (current) setSeccion(current);
    }
    container.addEventListener('scroll', onScroll, { passive: true });
    return function() { container.removeEventListener('scroll', onScroll); };
  }, []);


  // Tabla resumen aportación/reparto
  var ap = d.aportacion || { gestor: { ap: 40, apK: 92, rep: 60, repK: 120 }, inversor: { ap: 60, apK: 138, rep: 40, repK: 80 } };
  function roiAbs(repK, apK) { return apK > 0 ? Math.round((repK / apK) * 100) : 0; }
  function roiAn(abs, m)     { return m > 0 ? Math.round((abs / m) * 12) : 0; }
  var tApK  = ap.gestor.apK  + ap.inversor.apK;
  var tRepK = ap.gestor.repK + ap.inversor.repK;

  function EconRow(props) {
    var abs = roiAbs(props.repK, props.apK);
    var an  = roiAn(abs, d.meses);
    return (
      <tr style={{ borderTop: "1px solid #f3f4f6" }}>
        <td style={{ padding: "5px 0", fontWeight: 500, color: colors.secondary, fontSize: 14 }}>{props.label}</td>
        <td style={{ textAlign: "right", color: "#6b7280", fontSize: 14 }}>{props.ap != null ? props.ap : ""}</td>
        <td style={{ textAlign: "right", color: "#6b7280", fontSize: 14 }}>{props.apK}</td>
        <td style={{ textAlign: "right", color: "#6b7280", fontSize: 14 }}>{props.rep != null ? props.rep : ""}</td>
        <td style={{ textAlign: "right", color: "#6b7280", fontSize: 14 }}>{props.repK}</td>
        <td style={{ textAlign: "right", fontWeight: props.bold ? 700 : 400, color: "#111", fontSize: 14 }}>{abs}</td>
        <td style={{ textAlign: "right", fontWeight: props.bold ? 700 : 400, color: props.bold ? colors.roiHighlight : "#111", fontSize: 14 }}>{an}</td>
      </tr>
    );
  }

  // Subvistas a pantalla completa
  if (subvista === "observaciones") {
    var sv = <SubvistaObservaciones observaciones={d.observaciones} onBack={function() { setSubvista(null); }} />;
    if (inline) return sv;
    return (
      <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.18)", zIndex: 200, display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
        <div onClick={function(e) { e.stopPropagation(); }} style={{ background: "#fff", borderRadius: "16px 16px 0 0", width: "100%", maxWidth: 480, maxHeight: "92vh", display: "flex", flexDirection: "column" }}>{sv}</div>
      </div>
    );
  }
  if (subvista === "resenas") {
    var sv2 = <SubvistaResenas resenas={d.resenas} onBack={function() { setSubvista(null); }} />;
    if (inline) return sv2;
    return (
      <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.18)", zIndex: 200, display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
        <div onClick={function(e) { e.stopPropagation(); }} style={{ background: "#fff", borderRadius: "16px 16px 0 0", width: "100%", maxWidth: 480, maxHeight: "92vh", display: "flex", flexDirection: "column" }}>{sv2}</div>
      </div>
    );
  }

  var pv = d.precioVenta || {};

  var body = (
    <div style={{ fontFamily: "'DM Sans', sans-serif", display: "flex", flexDirection: "column", height: "100%", overflow: "hidden" }}>

      {/* Header sticky con dropdown de secciones */}
      <div style={{ position: "sticky", top: 0, background: "#fff", zIndex: 10, borderBottom: "1px solid " + colors.border, flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 20px" }}>
          <div style={{ position: "relative" }}>
            <button onClick={function() { setDdOpen(function(o) { return !o; }); }}
              style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 5, padding: 0, fontFamily: "inherit" }}>
              <span style={{ fontSize: 16, fontWeight: 600, color: "#111" }}>{secLabel}</span>
              <span style={{ fontSize: 13, color: colors.secondary }}>▾</span>
            </button>
            {ddOpen && (
              <div style={{ position: "absolute", top: "calc(100% + 6px)", left: 0, background: "#fff", border: "1px solid #e5e7eb", borderRadius: 10, boxShadow: "0 4px 16px rgba(0,0,0,0.10)", zIndex: 50, minWidth: 240, padding: "6px 0" }}>
                {SECCIONES.map(function(s) {
                  return (
                    <div key={s.id} onClick={function() { goTo(s.id); }}
                      style={{ padding: "9px 16px", fontSize: 15, color: seccion === s.id ? colors.accion : "#374151", fontWeight: seccion === s.id ? 600 : 400, cursor: "pointer", background: seccion === s.id ? colors.accionLight : "transparent" }}>
                      {s.label}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <button onClick={onClose} style={{ background: "none", border: "none", fontSize: 22, cursor: "pointer", color: "#9ca3af", lineHeight: 1 }}>×</button>
        </div>
      </div>

      {/* Contenido scrollable */}
      <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: "0 24px 80px" }}>

        {/* ── RESUMEN ──────────────────────────────────────────────────────── */}
        <div ref={function(el) { refs.current["resumen"] = el; }} style={{ paddingTop: 16 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 24px", marginBottom: 12 }}>
            <div style={{ width: "fit-content" }}><Lbl>Operación</Lbl><div style={{ fontSize: 14, color: colors.secondary }}>{d.titulo}</div></div>
            <div style={{ width: "fit-content" }}><Lbl>Estado</Lbl><div style={{ fontSize: 14, color: colors.secondary }}>{d.estado}</div></div>
            <div style={{ width: "fit-content" }}><Lbl>Gestor</Lbl><a href="#" style={{ fontSize: 14, color: "#1d4ed8", fontWeight: 500, textDecoration: "underline" }}>{d.gestor}</a><span style={{ fontSize: 14, color: colors.secondary }}> {d.gestorRating}</span></div>
            <div style={{ width: "fit-content" }}><Lbl>Estrategia</Lbl><div style={{ fontSize: 14, color: "#111" }}>{d.estrategia}</div></div>
            <div style={{ width: "fit-content" }}><Lbl>Tipo</Lbl><div style={{ fontSize: 14, color: "#111" }}>{d.tipo}</div></div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 24px", marginBottom: 14 }}>
            <div style={{ width: "fit-content" }}><Lbl>Meses</Lbl><div style={{ fontSize: 14, color: "#111" }}>{d.meses}</div></div>
            <div style={{ width: "fit-content" }}><Lbl>Provincia</Lbl><div style={{ fontSize: 14, color: "#111" }}>{d.provincia}</div></div>
            <div style={{ width: "fit-content" }}><Lbl>Inicio</Lbl><div style={{ fontSize: 14, color: "#111" }}>{d.fechaInicio}</div></div>
          </div>
          <Divider />
          {/* Tabla aportación / reparto */}
          <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 4 }}>
            <thead>
              <tr>
                <th style={{ textAlign: "left",  color: "#9ca3af", fontWeight: 400, paddingBottom: 5, fontSize: 13 }}></th>
                {["Aport %", "K EUR", "Rep %", "K EUR", "ROI abs", "anual"].map(function(h) {
                  return <th key={h} style={{ textAlign: "right", color: "#9ca3af", fontWeight: 400, paddingBottom: 5, fontSize: 13 }}>{h}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              <EconRow label="Gestor"   ap={ap.gestor.ap}   apK={ap.gestor.apK}   rep={ap.gestor.rep}   repK={ap.gestor.repK} />
              <EconRow label="Inversor" ap={ap.inversor.ap} apK={ap.inversor.apK} rep={ap.inversor.rep} repK={ap.inversor.repK} bold />
              <tr style={{ borderTop: "1px solid #f3f4f6" }}>
                <td style={{ padding: "5px 0", fontWeight: 500, color: colors.secondary, fontSize: 14 }}>Total</td>
                <td></td>
                <td style={{ textAlign: "right", color: "#6b7280", fontSize: 14 }}>{tApK}</td>
                <td></td>
                <td style={{ textAlign: "right", color: "#6b7280", fontSize: 14 }}>{tRepK}</td>
                <td style={{ textAlign: "right", color: "#111", fontSize: 14 }}>{roiAbs(tRepK, tApK)}</td>
                <td style={{ textAlign: "right", color: "#111", fontSize: 14 }}>{roiAn(roiAbs(tRepK, tApK), d.meses)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ── EQUIPO GESTOR ────────────────────────────────────────────────── */}
        <Divider />
        <div ref={function(el) { refs.current["equipo"] = el; }}>
          <div style={{ marginBottom: 12 }}><Lbl>Gestor</Lbl><Txt text={d.sobreMi} /></div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 24px" }}>
            {[
              ["Arquitecto",      d.equipo.arquitecto],
              ["Project manager", d.equipo.projectManager],
              ["Interiorista",    d.equipo.interiorista],
              ["Fiscalista",      d.equipo.fiscalista],
            ].filter(function(x) { return !!x[1]; })
             .map(function(x) {
               return <div key={x[0]}><Lbl>{x[0]}</Lbl><div style={{ fontSize: 15, color: colors.secondary }}>{x[1]}</div></div>;
             })}
          </div>
        </div>

        {/* ── GESTIÓN ──────────────────────────────────────────────────────── */}
        <Divider />
        <div ref={function(el) { refs.current["gestion"] = el; }}>
          <div style={{ marginBottom: 14 }}>
            <div style={{ marginBottom: 12 }}><Lbl>Valoración en venta</Lbl><div style={{ fontSize: 14, color: colors.secondary }}>{d.estadoActual.valoracion}</div></div>
            <div style={{ marginBottom: 12 }}><Lbl>Descripción</Lbl><Txt text={d.estadoActual.descripcion} /></div>
            <div style={{ marginBottom: 12 }}><Lbl>Características</Lbl></div><div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 8 }}>
              {d.estadoActual.caracteristicas.map(function(c) {
                return <span key={c} style={{ background: "#f3f4f6", borderRadius: 20, padding: "3px 10px", fontSize: 14, color: colors.secondary }}>{c}</span>;
              })}
            </div>
            <div style={{ marginBottom: 12 }}><Lbl>Ubicación</Lbl></div><div style={{ width: "100%", height: 80, background: "#e5e7eb", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, color: "#9ca3af", marginBottom: 0 }}>Mapa</div>
          </div>
          <Divider />
          <div style={{ marginBottom: 14 }}>
            <div style={{ marginBottom: 12 }}><Lbl>Problema</Lbl><Txt text={d.problema} /></div>
            <div><Lbl>Solución</Lbl><Txt text={d.solucion} /></div>
          </div>
          <div style={{ marginBottom: 14 }}>
            <Divider />
          <div>
              {/* Cabecera única */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 8, padding: "0 10px 4px" }}>
                <Lbl>Fase</Lbl>
                <Lbl>Acciones</Lbl>
              </div>
              {d.fases.map(function(f, i) {
                return (
                  <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 8, padding: "8px 10px", background: i % 2 === 0 ? "#f9fafb" : "#fff", borderRadius: 6, marginBottom: 2 }}>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 500, color: "#111" }}>{f.fase}</div>
                      <div style={{ fontSize: 12, color: "#9ca3af", marginTop: 2 }}>{f.duracion}</div>
                    </div>
                    <div style={{ fontSize: 14, color: colors.secondary, lineHeight: 1.5 }}>{f.acciones}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div style={{ marginBottom: 14 }}>
            <Divider />
            <div style={{ marginBottom: 12 }}><Lbl>Situación actual</Lbl><Txt text={d.situacionActual} /></div>
            <div><Lbl>Próximos pasos</Lbl><Txt text={d.proximosPasos} /></div>
          </div>
          {d.estrategiaVenta ? (
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#374151", marginBottom: 8 }}>Estrategia de venta</div>
              <Txt text={d.estrategiaVenta} />
            </div>
          ) : null}
        </div>

        {/* ── ANÁLISIS ECONÓMICO ───────────────────────────────────────────── */}
        <Divider />
        <div ref={function(el) { refs.current["analisis"] = el; }}>
          <div style={{ marginBottom: 14 }}>
            <Lbl>Por qué es rentable</Lbl>
            <Txt text={d.porQueRentable} />
          </div>
          <div style={{ marginBottom: 14 }}>
            <Lbl>Desglose de la inversión</Lbl>
            {[d.desglose.t1, d.desglose.t2, d.desglose.t3].map(function(tabla, ti) {
              return (
                <div key={ti} style={{ marginBottom: 10 }}>
                  {tabla.map(function(row) {
                    return (
                      <div key={row[0]} style={{ display: "flex", justifyContent: "space-between", padding: "4px 0", borderBottom: "1px solid #f9fafb" }}>
                        <span style={{ fontSize: 14, color: colors.secondary }}>{row[0]}</span>
                        <span style={{ fontSize: 14, color: "#111", fontWeight: ti === 2 ? 600 : 400 }}>{row[1]}</span>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <Divider />
          <div style={{ marginBottom: 14 }}>
            <Lbl>Destino del activo y por qué</Lbl>
            <Txt text={d.destino} />
          </div>
          <div style={{ marginBottom: 14 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 8 }}>
              {[["Pesimista", d.escenarios.pesimista], ["Realista", d.escenarios.realista], ["Optimista", d.escenarios.optimista]].map(function(e) {
                return (
                  <div key={e[0]}>
                    <Lbl>{e[0]}</Lbl>
                    <div style={{ fontSize: 14, color: colors.secondary }}>{e[1]} EUR</div>
                  </div>
                );
              })}
            </div>
            <Txt text={d.escenarios.explicacion} />
          </div>
          <div style={{ marginBottom: 12 }}>
            <Lbl>Fiscalidad de la compraventa</Lbl>
            <Txt text={d.fiscalidadCompra} />
          </div>
          <div>
            <Lbl>Prevención de blanqueo de capitales</Lbl>
            <Txt text={d.pbc} />
          </div>
        </div>

        {/* ── PRECIO DE VENTA ──────────────────────────────────────────────── */}
        <Divider />
        <div ref={function(el) { refs.current["precio"] = el; }}>
          <div style={{ marginBottom: 16 }}>
            <Lbl>Paso 0 · Ficha del inmueble</Lbl>
            <div style={{ marginTop: 6, fontSize: 14, color: colors.secondary, lineHeight: 1.8 }}>
              {[
                pv.paso0.superficieTerreno ? pv.paso0.superficieTerreno + " m² de terreno" : null,
                pv.paso0.superficieConstruida ? pv.paso0.superficieConstruida + " m² construidos" : null,
                pv.paso0.tipoInmueble || null,
                [pv.paso0.localidad, pv.paso0.provincia].filter(Boolean).join(", ") || null,
              ].filter(Boolean).map(function(line, i) {
                return <div key={i}>{line}</div>;
              })}
            </div>
            {pv.paso0 && pv.paso0.cargas && pv.paso0.cargas.filter(function(c) { return !!c.acreedor; }).length > 0 && (
              <div style={{ marginTop: 4 }}>
                {pv.paso0.cargas.filter(function(c) { return !!c.acreedor; }).map(function(c, i) {
                  return <div key={i} style={{ fontSize: 14, color: colors.secondary }}>{"Carga de " + c.acreedor + (c.importe ? ": " + c.importe.toLocaleString() + " €" : "")}</div>;
                })}
              </div>
            )}
          </div>
          {pv.paso1 && pv.paso1.filter(function(x) { return !!x.agencia; }).length > 0 && (
            <div style={{ marginBottom: 16 }}>
              <Lbl>Paso 1 · Comparables vendidos</Lbl>
              {pv.paso1.filter(function(x) { return !!x.agencia; }).map(function(item, i) {
                return (
                  <div key={i} style={{ padding: "10px 12px", background: "#f9fafb", borderRadius: 8, marginBottom: 6 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                      <span style={{ fontSize: 15, fontWeight: 500, color: "#111" }}>{item.agencia}</span>
                      <span style={{ fontSize: 15, fontWeight: 500, color: "#374151" }}>{item.precioVenta ? item.precioVenta.toLocaleString() + " €" : ""}</span>
                    </div>
                    <div style={{ fontSize: 14, color: colors.secondary }}>{item.direccion} · {item.contacto} · {item.telefono}</div>
                  </div>
                );
              })}
            </div>
          )}
          {pv.paso2 && pv.paso2.filter(function(x) { return !!x.titulo; }).length > 0 && (
            <div style={{ marginBottom: 16 }}>
              <Lbl>Paso 2 · Comparables en venta</Lbl>
              {pv.paso2.filter(function(x) { return !!x.titulo; }).map(function(item, i) {
                return (
                  <div key={i} style={{ padding: "10px 12px", background: "#f9fafb", borderRadius: 8, marginBottom: 6 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                      <span style={{ fontSize: 15, fontWeight: 500, color: "#111" }}>{item.titulo}</span>
                      <span style={{ fontSize: 15, fontWeight: 500, color: "#374151" }}>{item.precio ? item.precio.toLocaleString() + " €" : ""}</span>
                    </div>
                    <div style={{ fontSize: 14, color: colors.secondary }}>
                      {[item.tipo, item.m2 ? item.m2 + " m2" : "", item.dormBanos ? item.dormBanos + " dorm/baños" : "", item.estado, item.fechaAnuncio].filter(Boolean).join(" · ")}
                    </div>
                    {item.comentarios && <div style={{ fontSize: 14, color: "#9ca3af", marginTop: 3 }}>{item.comentarios}</div>}
                  </div>
                );
              })}
            </div>
          )}
          {pv.paso3 && (
            <div style={{ marginBottom: 16 }}>
              <Lbl>Paso 3 · Conclusiones</Lbl>
              <div style={{ padding: "12px 14px", fontSize: 14, color: colors.secondary, lineHeight: 1.6 }}>
                <Lbl>Conclusión</Lbl>{pv.paso3.conclusiones || <span style={{ color: "#9ca3af" }}>Sin conclusiones aún</span>}
              </div>
            </div>
          )}
          {pv.paso4 && (
            <div>
              <Lbl>Paso 4 · Seguimiento del anuncio</Lbl>
              <Campo label="" valor={pv.paso4.url} />
              <Campo label="" valor={pv.paso4.fechaPublicacion} />              {pv.paso4.dias && pv.paso4.dias.length > 0 && (
                <div style={{ marginBottom: 10, marginTop: 8 }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                    <thead>
                      <tr style={{ borderBottom: "2px solid #e5e7eb" }}>
                        {["", ...pv.paso4.dias.map(function(d, i) { return String(i+1); }), "Total"].map(function(h) {
                          return <th key={h} style={{ padding: "4px 8px", textAlign: h === "" ? "left" : "right", color: "#9ca3af", fontWeight: 600 }}>{h}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: "1px solid #f3f4f6" }}>
                        <td style={{ padding: "4px 8px", color: "#9ca3af", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em" }}>Día</td>
                        <td style={{ padding: "4px 8px" }}></td>
                        {pv.paso4.dias.map(function(dia, i) {
                          return <td key={i} style={{ padding: "4px 8px", textAlign: "right", color: "#9ca3af", fontSize: 11, fontWeight: 600 }}>{i+1}</td>;
                        })}
                      </tr>
                      {[
                        { label: "Contactos totales", key: "contactosTotales" },
                        { label: "Llamadas",          key: "llamadas" },
                        { label: "WhatsApp/Telegram", key: "whatsapp" },
                        { label: "Email portales",    key: "email" },
                        { label: "Precio (€)",        key: "precio" },
                      ].map(function(row) {
                        var total = row.key !== "precio"
                          ? pv.paso4.dias.reduce(function(s, d) { return s + (d[row.key] || 0); }, 0)
                          : "";
                        return (
                          <tr key={row.label} style={{ borderBottom: "1px solid #f3f4f6" }}>
                            <td style={{ padding: "4px 8px", color: "#374151", fontWeight: 500 }}>{row.label}</td>
                            <td style={{ padding: "4px 8px", textAlign: "right", fontWeight: 600, color: "#111" }}>{total}</td>
                            {pv.paso4.dias.map(function(dia, i) {
                              return <td key={i} style={{ padding: "4px 8px", textAlign: "right", color: "#6b7280" }}>{dia[row.key]}</td>;
                            })}
                          </tr>
                        );
                      })}
                      <tr style={{ borderBottom: "1px solid #f3f4f6" }}>
                        <td style={{ padding: "4px 8px", color: "#374151", fontWeight: 500 }}>Fecha</td>
                        <td></td>
                        {pv.paso4.dias.map(function(dia, i) {
                          return <td key={i} style={{ padding: "4px 8px", textAlign: "right", color: "#9ca3af", fontSize: 12 }}>{dia.fecha}</td>;
                        })}
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
              {pv.paso4.interesados && pv.paso4.interesados.length > 0 && (
                <div style={{ marginBottom: 12 }}>
                  <Lbl>Interesados</Lbl>
                  {pv.paso4.interesados.map(function(p, i) {
                    return (
                      <div key={i} style={{ padding: "8px 0", borderBottom: "1px solid #f3f4f6", fontSize: 14, color: colors.secondary }}>
                        <span style={{ fontWeight: 600 }}>{p.nombre}</span> · {p.telefono} · {p.nacionalidad}
                        {p.comentarios && <div style={{ color: "#9ca3af", marginTop: 2 }}>{p.comentarios}</div>}
                      </div>
                    );
                  })}
                </div>
              )}
              {pv.paso4.comentarios && (
                <div style={{ marginTop: 8 }}>
                  <Lbl>Conclusión</Lbl>
                  <div style={{ fontSize: 14, color: colors.secondary }}>{pv.paso4.comentarios}</div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* ── SOLVENCIA Y TRANSPARENCIA ────────────────────────────────────── */}
        <Divider />
        <div ref={function(el) { refs.current["solvencia"] = el; }}>
          <Campo label="Quién compra"                     valor={d.solvencia.comprador} />
          <Campo label="Comunicación y periodicidad"      valor={d.solvencia.comunicacion} />
          <Campo label="Banco"                            valor={d.solvencia.banco} />
          <Campo label="Cuenta bancaria del proyecto"     valor={d.solvencia.cuenta} />
          <Campo label="Estado de la cuenta"              valor={d.solvencia.estadoCuenta} />
          <Campo label="Cert. al corriente en Hacienda"   valor={d.solvencia.certHacienda} />
          <Campo label="Cert. al corriente Seg. Social"   valor={d.solvencia.certSegSocial} />
          <Campo label="CIRBE"                            valor={d.solvencia.cirbe} />
          <Campo label="Cuenta de pérdidas y ganancias"   valor={d.solvencia.cuentaPyG} />
        </div>

        {/* ── DOCUMENTACIÓN ────────────────────────────────────────────────── */}
        <Divider />
        <div ref={function(el) { refs.current["documentacion"] = el; }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {d.documentos.filter(function(doc) { return !!doc.nombre; }).length === 0 && (
              <div style={{ fontSize: 14, color: "#9ca3af" }}>No hay documentación</div>
            )}
            {d.documentos.filter(function(doc) { return !!doc.nombre; }).map(function(doc, i) {
              return (
                <button key={i}
                  onClick={function() { setLb({ open: true, index: i, items: d.documentos.filter(function(d) { return !!d.nombre; }).map(function(d) { return d.nombre; }) }); }}
                  style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", background: "#f9fafb", border: "1px solid #f3f4f6", borderRadius: 8, cursor: "pointer", fontFamily: "inherit", textAlign: "left" }}>
                  <span style={{ fontSize: 14, color: "#9ca3af", fontWeight: 500 }}>PDF</span>
                  <span style={{ fontSize: 15, color: colors.secondary, fontWeight: 500 }}>{doc.nombre}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── OBSERVACIONES Y PREGUNTAS ─────────────────────────────────────── */}
        <Divider />
        <div ref={function(el) { refs.current["observaciones"] = el; }}>
          {d.observaciones.slice(0, 2).map(function(o, i) {
            return (
              <div key={i} style={{ padding: "10px 0", borderBottom: "1px solid #f3f4f6" }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#111", marginBottom: 3 }}>{o.autor}</div>
                <div style={{ fontSize: 15, color: colors.secondary }}>{o.texto}</div>
              </div>
            );
          })}
          <button onClick={function() { setSubvista("observaciones"); }} style={{ background: "none", border: "none", cursor: "pointer", color: "#1d4ed8", fontSize: 13, fontWeight: 400, fontFamily: "inherit", padding: 0, textDecoration: "underline" }}>
            Ver todas ({d.observaciones.length}) →
          </button>
        </div>

        {/* ── RESEÑAS DE LA OPERACIÓN ──────────────────────────────────────── */}
        <Divider />
        <div ref={function(el) { refs.current["resenas"] = el; }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <Stars n={d.gestorRating} />
            <span style={{ fontSize: 15, fontWeight: 700, color: "#111" }}>{d.gestorRating}</span>
            <span style={{ fontSize: 14, color: "#9ca3af" }}>({d.gestorReviews} valoraciones)</span>
          </div>
          {d.resenas.slice(0, 2).map(function(r, i) {
            return (
              <div key={i} style={{ padding: "10px 0", borderBottom: "1px solid #f3f4f6" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 2 }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#111" }}>{r.autor}</span>
                  <span style={{ fontSize: 13, color: "#9ca3af" }}>{r.fecha}</span>
                </div>
                <div style={{ marginBottom: 3 }}><Stars n={r.rating} /></div>
                <div style={{ fontSize: 15, color: colors.secondary }}>{r.texto}</div>
              </div>
            );
          })}
          <button onClick={function() { setSubvista("resenas"); }} style={{ background: "none", border: "none", cursor: "pointer", color: "#1d4ed8", fontSize: 13, fontWeight: 400, fontFamily: "inherit", padding: 0, textDecoration: "underline" }}>
            Ver todas ({d.resenas.length}) →
          </button>
        </div>

      </div>

      {/* Footer fijo */}
      <div style={{ padding: "12px 24px", borderTop: "1px solid #f3f4f6", display: "flex", gap: 10, flexShrink: 0, background: "#fff" }}>
        <button style={{ flex: 1, padding: "10px", border: "1.5px solid #e5e7eb", borderRadius: 8, background: "#fff", fontSize: 15, fontFamily: "inherit", cursor: "pointer", color: "#374151", fontWeight: 500 }}>Ver presentación</button>
        <button style={{ flex: 1, padding: "10px", border: "none", borderRadius: 8, background: "#1C0963", fontSize: 15, fontFamily: "inherit", cursor: "pointer", color: "#fff", fontWeight: 600 }}>Solicitar invertir</button>
      </div>

      {lb.open && (
        <Lightbox items={lb.items} index={lb.index}
          onClose={function() { setLb({ open: false, index: 0, items: [] }); }}
          onPrev={function() { setLb(function(l) { return Object.assign({}, l, { index: Math.max(0, l.index - 1) }); }); }}
          onNext={function() { setLb(function(l) { return Object.assign({}, l, { index: Math.min(l.items.length - 1, l.index + 1) }); }); }} />
      )}
    </div>
  );

  if (inline) return body;
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.18)", zIndex: 200, display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
      <div onClick={function(e) { e.stopPropagation(); }} style={{ background: "#fff", borderRadius: "16px 16px 0 0", width: "100%", maxWidth: 480, maxHeight: "92vh", display: "flex", flexDirection: "column" }}>
        {body}
      </div>
    </div>
  );
}
