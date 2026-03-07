import { useState, useEffect, useRef } from "react";
import { estadoColor, colors } from "../theme";

// Props:

const SECCIONES = [
  { id: "resumen",       label: "Resumen" },
  { id: "sobremi",       label: "Sobre mi" },
  { id: "equipo",        label: "Equipo" },
  { id: "estadoactual",  label: "Estado actual" },
  { id: "problema",      label: "Problema y aportacion de valor" },
  { id: "fases",         label: "Fases de la operacion" },
  { id: "situacion",     label: "Situacion actual y proximos pasos" },
  { id: "analisis",      label: "Analisis economico" },
  { id: "desglose",      label: "Desglose de la inversion" },
  { id: "destino",       label: "Destino y por que" },
  { id: "escenarios",    label: "Escenarios" },
  { id: "fiscalidad",    label: "Fiscalidad y PBC" },
  { id: "solvencia",     label: "Solvencia y transparencia" },
  { id: "documentacion", label: "Documentacion" },
  { id: "observaciones", label: "Observaciones y preguntas" },
  { id: "resenas",       label: "Resenas" },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function Lbl({ children }) {
  return <div style={{ fontSize: 10, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 3 }}>{children}</div>;
}
function Divider() {
  return <div style={{ height: 1, background: "#f3f4f6", margin: "16px 0" }} />;
}
function SecTitle({ children }) {
  return <div style={{ fontSize: 11, fontWeight: 700, color: "#374151", marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.06em" }}>{children}</div>;
}
function Txt({ text }) {
  return <div style={{ fontSize: 13, color: "#374151", lineHeight: 1.6, whiteSpace: "pre-line" }}>{text}</div>;
}
function Stars({ n, interactive, onSet }) {
  return (
    <span>
      {[1,2,3,4,5].map(function(i) {
        return (
          <span key={i}
            onClick={interactive ? function() { onSet(i); } : undefined}
            style={{ color: i <= Math.round(n) ? "#f59e0b" : "#e5e7eb", fontSize: interactive ? 22 : 13, cursor: interactive ? "pointer" : "default" }}>
            {i <= Math.round(n) ? "★" : "☆"}
          </span>
        );
      })}
    </span>
  );
}

// ─── Lightbox ─────────────────────────────────────────────────────────────────
function Lightbox({ items, index, onClose, onPrev, onNext }) {
  useEffect(function() {
    function onKey(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();

    }
    window.addEventListener("keydown", onKey);
    return function() { window.removeEventListener("keydown", onKey); };
  }, []);
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div onClick={function(e) { e.stopPropagation(); }} style={{ background: "#fff", borderRadius: 10, padding: "28px 32px", minWidth: 280, textAlign: "center", position: "relative" }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: "#111", marginBottom: 12 }}>{items[index]}</div>
        <div style={{ width: 240, height: 160, background: "#f3f4f6", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", color: "#9ca3af", fontSize: 12, margin: "0 auto 16px" }}>Documento</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <button onClick={onPrev} disabled={index === 0} style={{ border: "1.5px solid #e5e7eb", borderRadius: 6, padding: "5px 12px", cursor: index === 0 ? "default" : "pointer", background: "#fff", color: index === 0 ? "#d1d5db" : "#374151", fontFamily: "inherit", fontSize: 12 }}>Anterior</button>
          <span style={{ fontSize: 11, color: "#9ca3af" }}>{index + 1} / {items.length}</span>
          <button onClick={onNext} disabled={index === items.length - 1} style={{ border: "1.5px solid #e5e7eb", borderRadius: 6, padding: "5px 12px", cursor: index === items.length - 1 ? "default" : "pointer", background: "#fff", color: index === items.length - 1 ? "#d1d5db" : "#374151", fontFamily: "inherit", fontSize: 12 }}>Siguiente</button>
        </div>
        <button onClick={onClose} style={{ position: "absolute", top: 8, right: 12, background: "none", border: "none", fontSize: 20, cursor: "pointer", color: "#9ca3af" }}>x</button>
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
    <div style={{ display: "flex", flexDirection: "column", height: "100%", fontFamily: "'DM Sans', sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", padding: "12px 20px", borderBottom: "1px solid #f3f4f6", flexShrink: 0 }}>
        <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", padding: 0, marginRight: 4, display: "flex", alignItems: "center" }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M13 4L7 10L13 16" stroke="#374151" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
      <div style={{ flex: 1, overflowY: "auto", padding: "16px 20px" }}>
        {obs.map(function(o, i) {
          return (
            <div key={i} style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: o.esGestor ? "#7c3aed" : "#111", marginBottom: 4 }}>{o.autor}</div>
              <div style={{ fontSize: 13, color: "#374151", lineHeight: 1.5 }}>{o.texto}</div>
            </div>
          );
        })}
      </div>
      <div style={{ padding: "12px 20px", borderTop: "1px solid #f3f4f6", display: "flex", gap: 8, flexShrink: 0, background: "#fff" }}>
        <input value={input} onChange={function(e) { setInput(e.target.value); }} onKeyDown={function(e) { if (e.key === "Enter") enviar(); }}
          placeholder="Observacion o pregunta"
          style={{ flex: 1, padding: "10px 14px", border: "1.5px solid #e5e7eb", borderRadius: 8, fontSize: 13, fontFamily: "inherit", outline: "none" }} />
        <button onClick={enviar} style={{ padding: "10px 18px", background: "#7c3aed", color: "#fff", border: "none", borderRadius: 8, fontSize: 13, fontWeight: 600, fontFamily: "inherit", cursor: "pointer" }}>Enviar</button>
      </div>
    </div>
  );
}

// ─── Subvista Resenas ─────────────────────────────────────────────────────────
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
      <div style={{ display: "flex", alignItems: "center", padding: "12px 20px", borderBottom: "1px solid #f3f4f6", flexShrink: 0 }}>
        <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", padding: 0, marginRight: 4, display: "flex", alignItems: "center" }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M13 4L7 10L13 16" stroke="#374151" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
      <div style={{ flex: 1, overflowY: "auto", padding: "16px 20px" }}>
        {/* Media */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16, paddingBottom: 16, borderBottom: "1px solid #f3f4f6" }}>
          <div>
            <div style={{ fontSize: 10, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 2 }}>Valoracion</div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontSize: 18, fontWeight: 700, color: "#111" }}>{media}</span>
              <Stars n={parseFloat(media)} />
            </div>
          </div>
          <div style={{ borderLeft: "1px solid #f3f4f6", paddingLeft: 16 }}>
            <div style={{ fontSize: 10, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 2 }}>Evaluaciones de esta transaccion</div>
            <div style={{ fontSize: 18, fontWeight: 700, color: "#111" }}>{resenas.length}</div>
          </div>
        </div>
        {/* Lista */}
        {resenas.map(function(r, i) {
          return (
            <div key={i} style={{ marginBottom: 16, paddingBottom: 16, borderBottom: "1px solid #f3f4f6" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 4 }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: "#111" }}>{r.autor}</span>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <Stars n={r.rating} />
                  <span style={{ fontSize: 11, color: "#9ca3af" }}>{r.fecha}</span>
                </div>
              </div>
              <div style={{ fontSize: 13, color: "#374151", lineHeight: 1.5 }}>{r.texto}</div>
            </div>
          );
        })}
      </div>
      <div style={{ padding: "12px 20px", borderTop: "1px solid #f3f4f6", flexShrink: 0, background: "#fff" }}>
        <div style={{ marginBottom: 8 }}><Stars n={inputRating} interactive onSet={setInputRating} /></div>
        <div style={{ display: "flex", gap: 8 }}>
          <input value={inputText} onChange={function(e) { setInputText(e.target.value); }} onKeyDown={function(e) { if (e.key === "Enter") valorar(); }}
            placeholder="Resena"
            style={{ flex: 1, padding: "10px 14px", border: "1.5px solid #e5e7eb", borderRadius: 8, fontSize: 13, fontFamily: "inherit", outline: "none" }} />
          <button onClick={valorar} style={{ padding: "10px 18px", background: "#7c3aed", color: "#fff", border: "none", borderRadius: 8, fontSize: 13, fontWeight: 600, fontFamily: "inherit", cursor: "pointer" }}>Valorar</button>
        </div>
      </div>
    </div>
  );
}

// ─── PanelDetalle ─────────────────────────────────────────────────────────────
export default function PanelDetalle({ detalle: d, onClose, inline }) {
  var [seccion, setSeccion] = useState("resumen");
  var [ddOpen, setDdOpen] = useState(false);
  var [subvista, setSubvista] = useState(null); // null | "observaciones" | "resenas"
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

  var secLabel = (SECCIONES.find(function(s) { return s.id === seccion; }) || {}).label || "Resumen";

  // ROI calculado
  var gAp = 40, gApK = 92, gRep = 60, gRepK = 120;
  var iAp = 60, iApK = 138, iRep = 40, iRepK = 80;
  var tApK = gApK + iApK, tRepK = gRepK + iRepK;
  function roiAbs(repK, apK) { return apK > 0 ? Math.round((repK / apK) * 100) : 0; }
  function roiAn(abs, m) { return m > 0 ? Math.round((abs / m) * 12) : 0; }

  function EconRow(props) {
    var abs = roiAbs(props.repK, props.apK);
    var an = roiAn(abs, d.meses);
    return (
      <tr style={{ borderTop: "1px solid #f3f4f6" }}>
        <td style={{ padding: "5px 0", fontWeight: 500, color: "#374151", fontSize: 12 }}>{props.label}</td>
        <td style={{ textAlign: "right", color: "#6b7280", fontSize: 12 }}>{props.ap != null ? props.ap : ""}</td>
        <td style={{ textAlign: "right", color: "#6b7280", fontSize: 12 }}>{props.apK}</td>
        <td style={{ textAlign: "right", color: "#6b7280", fontSize: 12 }}>{props.rep != null ? props.rep : ""}</td>
        <td style={{ textAlign: "right", color: "#6b7280", fontSize: 12 }}>{props.repK}</td>
        <td style={{ textAlign: "right", fontWeight: props.bold ? 700 : 400, color: "#111", fontSize: 12 }}>{abs}</td>
        <td style={{ textAlign: "right", fontWeight: props.bold ? 700 : 400, color: props.bold ? "#e53e3e" : "#111", fontSize: 12 }}>{an}</td>
      </tr>
    );
  }

  // Subvistas
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

  var body = (
    <div style={{ fontFamily: "'DM Sans', sans-serif", display: "flex", flexDirection: "column", height: "100%" }}>

      {/* Header sticky con dropdown */}
      <div style={{ position: "sticky", top: 0, background: "#fff", zIndex: 10, borderBottom: "1px solid #f3f4f6", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 20px" }}>
          <div style={{ position: "relative" }}>
            <button onClick={function() { setDdOpen(function(o) { return !o; }); }}
              style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 5, padding: 0, fontFamily: "inherit" }}>
              <span style={{ fontSize: 14, fontWeight: 600, color: "#111" }}>{secLabel}</span>
              <span style={{ fontSize: 11, color: "#6b7280" }}>v</span>
            </button>
            {ddOpen && (
              <div style={{ position: "absolute", top: "calc(100% + 6px)", left: 0, background: "#fff", border: "1px solid #e5e7eb", borderRadius: 10, boxShadow: "0 4px 16px rgba(0,0,0,0.10)", zIndex: 50, minWidth: 260, padding: "6px 0", maxHeight: 400, overflowY: "auto" }}>
                {SECCIONES.map(function(s) {
                  return (
                    <div key={s.id} onClick={function() { goTo(s.id); }}
                      style={{ padding: "9px 16px", fontSize: 13, color: seccion === s.id ? "#7c3aed" : "#374151", fontWeight: seccion === s.id ? 600 : 400, cursor: "pointer", background: seccion === s.id ? "#f5f3ff" : "transparent" }}>
                      {s.label}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <button onClick={onClose} style={{ background: "none", border: "none", fontSize: 20, cursor: "pointer", color: "#9ca3af", lineHeight: 1 }}>x</button>
        </div>
      </div>

      {/* Contenido scrollable */}
      <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: "0 20px 80px" }}>

        {/* RESUMEN */}
        <div ref={function(el) { refs.current["resumen"] = el; }} style={{ paddingTop: 16 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 8, marginBottom: 12 }}>
            <div><Lbl>Estado</Lbl><div style={{ fontSize: 12, color: estadoColor[d.estado] || "#374151" }}>{d.estado}</div></div>
            <div><Lbl>Gestor</Lbl><div style={{ fontSize: 12, color: "#7c3aed", fontWeight: 500 }}>{d.gestor} {d.gestorRating} *</div></div>
            <div><Lbl>Estrategia</Lbl><div style={{ fontSize: 12, color: "#111" }}>{d.estrategia}</div></div>
            <div><Lbl>Tipo</Lbl><div style={{ fontSize: 12, color: "#111" }}>{d.tipo}</div></div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 14 }}>
            <div><Lbl>Meses</Lbl><div style={{ fontSize: 12, color: "#111" }}>{d.meses}</div></div>
            <div><Lbl>Provincia</Lbl><div style={{ fontSize: 12, color: "#111" }}>{d.provincia}</div></div>
            <div><Lbl>Fecha de inicio</Lbl><div style={{ fontSize: 12, color: "#111" }}>{d.fechaInicio}</div></div>
          </div>
          <Divider />
          <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 4 }}>
            <thead>
              <tr>
                <th style={{ textAlign: "left", color: "#9ca3af", fontWeight: 400, paddingBottom: 5, fontSize: 11 }}></th>
                {["Aport %","K EUR","Rep %","K EUR","ROI abs","an"].map(function(h) {
                  return <th key={h} style={{ textAlign: "right", color: "#9ca3af", fontWeight: 400, paddingBottom: 5, fontSize: 11 }}>{h}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              <EconRow label="Gestor"   ap={gAp} apK={gApK} rep={gRep} repK={gRepK} />
              <EconRow label="Inversor" ap={iAp} apK={iApK} rep={iRep} repK={iRepK} bold />
              <tr style={{ borderTop: "1px solid #f3f4f6" }}>
                <td style={{ padding: "5px 0", fontWeight: 500, color: "#374151", fontSize: 12 }}>Total</td>
                <td></td>
                <td style={{ textAlign: "right", color: "#6b7280", fontSize: 12 }}>{tApK}</td>
                <td></td>
                <td style={{ textAlign: "right", color: "#6b7280", fontSize: 12 }}>{tRepK}</td>
                <td style={{ textAlign: "right", color: "#111", fontSize: 12 }}>{roiAbs(tRepK, tApK)}</td>
                <td style={{ textAlign: "right", color: "#111", fontSize: 12 }}>{roiAn(roiAbs(tRepK, tApK), d.meses)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Divider />
        <div ref={function(el) { refs.current["sobremi"] = el; }}>
          <SecTitle>Sobre mi</SecTitle><Txt text={d.sobreMi} />
        </div>

        <Divider />
        <div ref={function(el) { refs.current["equipo"] = el; }}>
          <SecTitle>Equipo</SecTitle>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {[["Arquitecto", d.equipo.arquitecto], ["Project manager", d.equipo.projectManager], ["Interiorista", d.equipo.interiorista], ["Fiscalista", d.equipo.fiscalista]]
              .filter(function(x) { return x[1]; })
              .map(function(x) { return <div key={x[0]}><Lbl>{x[0]}</Lbl><div style={{ fontSize: 13, color: "#374151" }}>{x[1]}</div></div>; })}
          </div>
        </div>

        <Divider />
        <div ref={function(el) { refs.current["estadoactual"] = el; }}>
          <SecTitle>Estado actual</SecTitle>
          <div style={{ marginBottom: 12 }}><Lbl>Valoracion en venta</Lbl><div style={{ fontSize: 15, fontWeight: 600, color: "#111" }}>{d.estadoActual.valoracion}</div></div>
          <div style={{ marginBottom: 12 }}><Lbl>Descripcion</Lbl><Txt text={d.estadoActual.descripcion} /></div>
          <div style={{ marginBottom: 12 }}>
            <Lbl>Caracteristicas de la propiedad</Lbl>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 4 }}>
              {d.estadoActual.caracteristicas.map(function(c) { return <span key={c} style={{ background: "#f3f4f6", borderRadius: 20, padding: "3px 10px", fontSize: 12, color: "#374151" }}>{c}</span>; })}
            </div>
          </div>
          <div style={{ marginBottom: 12 }}>
            <Lbl>Ubicacion</Lbl>
            <div style={{ width: "100%", height: 100, background: "#e5e7eb", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: "#9ca3af" }}>Mapa - Estepona, Malaga</div>
          </div>
          <div>
            <Lbl>Fotos del estado actual</Lbl>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 6, marginTop: 4 }}>
              {["#e5e7eb","#d1d5db","#c4c4c4","#b0b0b0"].map(function(c, i) {
                return <div key={i} onClick={function() { setLb({ open: true, index: i, items: ["Foto 1","Foto 2","Foto 3","Foto 4"] }); }} style={{ height: 60, background: c, borderRadius: 6, cursor: "pointer" }} />;
              })}
            </div>
          </div>
        </div>
        <Divider />
        <div ref={function(el) { refs.current["problema"] = el; }}>
          <SecTitle>Problema y aportacion de valor</SecTitle>
          <div style={{ marginBottom: 12 }}><Lbl>Problema</Lbl><Txt text={d.problema} /></div>
          <div><Lbl>Solucion</Lbl><Txt text={d.solucion} /></div>
        </div>

        <Divider />
        <div ref={function(el) { refs.current["fases"] = el; }}>
          <SecTitle>Fases de la operacion</SecTitle>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {d.fases.map(function(f, i) {
              return (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr", gap: 8, padding: "10px 12px", background: "#f9fafb", borderRadius: 8 }}>
                  <div><Lbl>Fase</Lbl><div style={{ fontSize: 12, fontWeight: 600, color: "#111" }}>{f.fase}</div></div>
                  <div><Lbl>Acciones</Lbl><div style={{ fontSize: 12, color: "#374151", lineHeight: 1.5 }}>{f.acciones}</div></div>
                  <div><Lbl>Duracion</Lbl><div style={{ fontSize: 12, color: "#6b7280" }}>{f.duracion}</div></div>
                </div>
              );
            })}
          </div>
        </div>

        <Divider />
        <div ref={function(el) { refs.current["situacion"] = el; }}>
          <SecTitle>Situacion actual y proximos pasos</SecTitle>
          <div style={{ marginBottom: 12 }}><Lbl>Situacion actual</Lbl><Txt text={d.situacionActual} /></div>
          <div><Lbl>Proximos pasos</Lbl><Txt text={d.proximosPasos} /></div>
        </div>

        <Divider />
        <div ref={function(el) { refs.current["analisis"] = el; }}>
          <SecTitle>Analisis economico</SecTitle><Txt text={d.analisisEconomico} />
        </div>

        <Divider />
        <div ref={function(el) { refs.current["desglose"] = el; }}>
          <SecTitle>Desglose de la inversion</SecTitle>
          {[d.desglose.t1, d.desglose.t2, d.desglose.t3].map(function(tabla, ti) {
            return (
              <div key={ti} style={{ marginBottom: 14 }}>
                {tabla.map(function(row) {
                  return (
                    <div key={row[0]} style={{ display: "flex", justifyContent: "space-between", padding: "4px 0", borderBottom: "1px solid #f9fafb" }}>
                      <span style={{ fontSize: 12, color: "#374151" }}>{row[0]}</span>
                      <span style={{ fontSize: 12, color: "#111", fontWeight: ti === 2 ? 600 : 400 }}>{row[1]}</span>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>

        <Divider />
        <div ref={function(el) { refs.current["destino"] = el; }}>
          <SecTitle>Destino y por que</SecTitle><Txt text={d.destino} />
        </div>

        <Divider />
        <div ref={function(el) { refs.current["escenarios"] = el; }}>
          <SecTitle>Escenarios</SecTitle>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 12 }}>
            {[["Pesimista", d.escenarios.pesimista, "#fef3c7"], ["Realista", d.escenarios.realista, "#f0fdf4"], ["Optimista", d.escenarios.optimista, "#eff6ff"]].map(function(e) {
              return (
                <div key={e[0]} style={{ background: e[2], borderRadius: 8, padding: "10px 12px", textAlign: "center" }}>
                  <Lbl>{e[0]}</Lbl>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#111" }}>{e[1]} EUR</div>
                </div>
              );
            })}
          </div>
          <Lbl>Explicacion</Lbl><Txt text={d.escenarios.explicacion} />
        </div>

        <Divider />
        <div ref={function(el) { refs.current["fiscalidad"] = el; }}>
          <SecTitle>Fiscalidad y PBC</SecTitle>
          <div style={{ marginBottom: 10 }}><Lbl>Fiscalidad de la compra</Lbl><div style={{ fontSize: 13, color: "#374151" }}>{d.fiscalidad.compra}</div></div>
          <div><Lbl>Prevencion de blanqueo de capitales</Lbl>
            <span style={{ display: "inline-block", background: d.fiscalidad.pbc === "Necesaria" ? "#fef3c7" : "#f0fdf4", borderRadius: 20, padding: "3px 12px", fontSize: 12, fontWeight: 600, color: d.fiscalidad.pbc === "Necesaria" ? "#92400e" : "#166534" }}>{d.fiscalidad.pbc}</span>
          </div>
        </div>

        <Divider />
        <div ref={function(el) { refs.current["solvencia"] = el; }}>
          <SecTitle>Solvencia y transparencia</SecTitle>
          {[["Comprador", d.solvencia.comprador], ["Comunicacion y periodicidad", d.solvencia.comunicacion], ["Banco", d.solvencia.banco], ["Cuenta bancaria", d.solvencia.cuenta], ["Ultimo estado de la cuenta", d.solvencia.estadoCuenta]].map(function(x) {
            return <div key={x[0]} style={{ marginBottom: 10 }}><Lbl>{x[0]}</Lbl><div style={{ fontSize: 13, color: "#374151", lineHeight: 1.5 }}>{x[1]}</div></div>;
          })}
        </div>

        <Divider />
        <div ref={function(el) { refs.current["documentacion"] = el; }}>
          <SecTitle>Documentacion</SecTitle>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {d.documentos.map(function(doc, i) {
              return (
                <button key={i} onClick={function() { setLb({ open: true, index: i, items: d.documentos }); }}
                  style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", background: "#f9fafb", border: "1px solid #f3f4f6", borderRadius: 8, cursor: "pointer", fontFamily: "inherit", textAlign: "left" }}>
                  <span style={{ fontSize: 12, color: "#9ca3af", fontWeight: 500 }}>PDF</span>
                  <span style={{ fontSize: 13, color: "#374151", fontWeight: 500 }}>{doc}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* OBSERVACIONES — preview */}
        <Divider />
        <div ref={function(el) { refs.current["observaciones"] = el; }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <SecTitle>Observaciones y preguntas</SecTitle>
            <button onClick={function() { setSubvista("observaciones"); }} style={{ background: "none", border: "none", cursor: "pointer", color: "#7c3aed", fontSize: 12, fontWeight: 600, fontFamily: "inherit", padding: 0 }}>
              Ver todas ({d.observaciones.length}) →
            </button>
          </div>
          {d.observaciones.slice(0, 2).map(function(o, i) {
            return (
              <div key={i} style={{ padding: "10px 0", borderBottom: "1px solid #f3f4f6" }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: o.esGestor ? "#7c3aed" : "#111", marginBottom: 3 }}>{o.autor}</div>
                <div style={{ fontSize: 13, color: "#374151" }}>{o.texto}</div>
              </div>
            );
          })}
          <button onClick={function() { setSubvista("observaciones"); }} style={{ marginTop: 10, background: "none", border: "none", cursor: "pointer", color: "#7c3aed", fontSize: 13, fontWeight: 600, fontFamily: "inherit", padding: 0 }}>
            Mostrar mas ({d.observaciones.length - 2})
          </button>
        </div>

        {/* RESENAS — preview */}
        <Divider />
        <div ref={function(el) { refs.current["resenas"] = el; }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <SecTitle>Resenas</SecTitle>
            <button onClick={function() { setSubvista("resenas"); }} style={{ background: "none", border: "none", cursor: "pointer", color: "#7c3aed", fontSize: 12, fontWeight: 600, fontFamily: "inherit", padding: 0 }}>
              Ver todas ({d.resenas.length}) →
            </button>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <Stars n={d.gestorRating} />
            <span style={{ fontSize: 13, fontWeight: 700, color: "#111" }}>{d.gestorRating}</span>
            <span style={{ fontSize: 12, color: "#9ca3af" }}>({d.gestorReviews} valoraciones)</span>
          </div>
          {d.resenas.slice(0, 2).map(function(r, i) {
            return (
              <div key={i} style={{ padding: "10px 0", borderBottom: "1px solid #f3f4f6" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 2 }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: "#111" }}>{r.autor}</span>
                  <span style={{ fontSize: 11, color: "#9ca3af" }}>{r.fecha}</span>
                </div>
                <div style={{ marginBottom: 3 }}><Stars n={r.rating} /></div>
                <div style={{ fontSize: 13, color: "#374151" }}>{r.texto}</div>
              </div>
            );
          })}
          <button onClick={function() { setSubvista("resenas"); }} style={{ marginTop: 10, background: "none", border: "none", cursor: "pointer", color: "#7c3aed", fontSize: 13, fontWeight: 600, fontFamily: "inherit", padding: 0 }}>
            Mostrar mas ({d.resenas.length - 2})
          </button>
        </div>

      </div>

      {/* Footer fijo */}
      <div style={{ padding: "12px 20px", borderTop: "1px solid #f3f4f6", display: "flex", gap: 10, flexShrink: 0, background: "#fff" }}>
        <button style={{ flex: 1, padding: "10px", border: "1.5px solid #e5e7eb", borderRadius: 8, background: "#fff", fontSize: 13, fontFamily: "inherit", cursor: "pointer", color: "#374151", fontWeight: 500 }}>Ver presentacion</button>
        <button style={{ flex: 1, padding: "10px", border: "none", borderRadius: 8, background: "#7c3aed", fontSize: 13, fontFamily: "inherit", cursor: "pointer", color: "#fff", fontWeight: 600 }}>Solicitar invertir</button>
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
