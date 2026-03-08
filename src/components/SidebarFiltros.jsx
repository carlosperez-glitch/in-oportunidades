import { useState, useEffect } from "react";
import { ORDEN_OPTIONS } from "../data/mock";

const ESTRATEGIA_LABEL = { V: "CA-Venta", A: "CA-Alquiler" };
const TODOS_ESTADOS = ["Capitalizando", "En marcha", "Finalizada", "Tanteo", "Abierta"];
const TODOS_TIPOS = ["IB", "IB+S", "JV", "JV W"];
const TODAS_ESTRATEGIAS = ["V", "A"];

// Props:
// - filtros: { buscar, estados[], tipos[], estrategias[], orden }
// - setFiltros: fn
// - isMobile: bool — si true, se renderiza como bottom sheet modal
// - onClose: fn — solo en mobile

export default function SidebarFiltros({ filtros, setFiltros, isMobile, onClose }) {
  var [local, setLocal] = useState(Object.assign({}, filtros));
  useEffect(function() { setLocal(Object.assign({}, filtros)); }, [JSON.stringify(filtros)]);

  // Desktop: aplica en tiempo real
  useEffect(function() { if (!isMobile) setFiltros(Object.assign({}, local)); }, [JSON.stringify(local)]);

  function toggle(campo, valor) {
    setLocal(function(p) {
      var arr = p[campo] || [];
      return Object.assign({}, p, {
        [campo]: arr.includes(valor) ? arr.filter(function(v) { return v !== valor; }) : arr.concat(valor)
      });
    });
  }

  function removeTag(campo, valor) {
    var next = Object.assign({}, filtros, { [campo]: (filtros[campo] || []).filter(function(v) { return v !== valor; }) });
    setFiltros(next);
    setLocal(next);
  }

  function apply() { setFiltros(Object.assign({}, local)); if (onClose) onClose(); }
  function cancel() { setLocal(Object.assign({}, filtros)); if (onClose) onClose(); }

  var activeTags = []
    .concat((filtros.estados || []).map(function(v) { return { campo: "estados", valor: v, label: v }; }))
    .concat((filtros.tipos || []).map(function(v) { return { campo: "tipos", valor: v, label: v }; }))
    .concat((filtros.estrategias || []).map(function(v) { return { campo: "estrategias", valor: v, label: ESTRATEGIA_LABEL[v] || v }; }));

  function TagBtn(props) {
    var activo = (local[props.campo] || []).includes(props.valor);
    return (
      <button
        onClick={function() { toggle(props.campo, props.valor); }}
        style={{
          padding: "3px 10px", borderRadius: 20,
          border: "1.5px solid " + (activo ? "#7c3aed" : "#d1d5db"),
          background: activo ? "#7c3aed" : "#fff",
          color: activo ? "#fff" : "#374151",
          fontSize: 15, cursor: "pointer", fontFamily: "inherit",
          fontWeight: activo ? 600 : 400, lineHeight: 1.6,
        }}
      >
        {props.label}
      </button>
    );
  }

  var inner = (
    <div style={{ padding: isMobile ? "20px 20px 32px" : "16px 14px", fontFamily: "'DM Sans', sans-serif" }}>
      {isMobile && <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 14, color: "#111" }}>Filtrar</div>}

      <input
        placeholder="Buscar"
        value={local.buscar || ""}
        onChange={function(e) { setLocal(function(p) { return Object.assign({}, p, { buscar: e.target.value }); }); }}
        style={{ width: "100%", padding: "7px 12px", border: "1.5px solid #e5e7eb", borderRadius: 8, fontSize: 15, fontFamily: "inherit", marginBottom: 12, boxSizing: "border-box", outline: "none" }}
      />

      {!isMobile && <div style={{ fontSize: 15, color: "#6b7280", marginBottom: 8, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em" }}>Filtrar</div>}

      {[
        { label: "Estado",     campo: "estados",     opciones: TODOS_ESTADOS },
        { label: "Tipo",       campo: "tipos",       opciones: TODOS_TIPOS },
        { label: "Estrategia", campo: "estrategias", opciones: TODAS_ESTRATEGIAS },
      ].map(function(g) {
        return (
          <div key={g.campo} style={{ marginBottom: 10 }}>
            <div style={{ fontSize: 15, color: "#9ca3af", marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.04em" }}>{g.label}</div>
            <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
              {g.opciones.map(function(val) {
                return <TagBtn key={val} campo={g.campo} valor={val} label={g.campo === "estrategias" ? ESTRATEGIA_LABEL[val] : val} />;
              })}
            </div>
          </div>
        );
      })}

      {/* Tags activos (solo desktop) */}
      {!isMobile && activeTags.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 10, marginTop: 4 }}>
          {activeTags.map(function(t) {
            return (
              <span key={t.campo + t.valor} style={{ display: "inline-flex", alignItems: "center", gap: 4, background: "#f3f4f6", borderRadius: 20, padding: "3px 10px", fontSize: 15, color: "#374151" }}>
                {t.label}
                <button onClick={function() { removeTag(t.campo, t.valor); }} style={{ background: "none", border: "none", cursor: "pointer", color: "#9ca3af", fontSize: 15, padding: 0, lineHeight: 1 }}>x</button>
              </span>
            );
          })}
        </div>
      )}

      <div style={{ marginBottom: isMobile ? 20 : 4 }}>
        <div style={{ fontSize: 15, color: "#9ca3af", marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.04em" }}>Ordenar por</div>
        <select
          value={local.orden || ORDEN_OPTIONS[0]}
          onChange={function(e) { setLocal(function(p) { return Object.assign({}, p, { orden: e.target.value }); }); }}
          style={{ width: "100%", padding: "7px 10px", border: "1.5px solid #e5e7eb", borderRadius: 8, fontSize: 15, fontFamily: "inherit", background: "#fff", outline: "none" }}
        >
          {ORDEN_OPTIONS.map(function(o) { return <option key={o}>{o}</option>; })}
        </select>
      </div>

      {/* Botones solo en mobile */}
      {isMobile && (
        <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
          <button onClick={cancel} style={{ flex: 1, padding: "11px", border: "1.5px solid #e5e7eb", borderRadius: 10, background: "#fff", fontSize: 15, fontFamily: "inherit", cursor: "pointer", color: "#374151" }}>Cancelar</button>
          <button onClick={apply} style={{ flex: 1, padding: "11px", border: "none", borderRadius: 10, background: "#7c3aed", fontSize: 15, fontFamily: "inherit", cursor: "pointer", color: "#fff", fontWeight: 600 }}>Aplicar</button>
        </div>
      )}
    </div>
  );

  // Desktop: renderiza inline
  if (!isMobile) return inner;

  // Mobile: bottom sheet modal
  return (
    <div onClick={cancel} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.18)", zIndex: 200, display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
      <div onClick={function(e) { e.stopPropagation(); }} style={{ background: "#fff", borderRadius: "16px 16px 0 0", width: "100%", maxWidth: 480 }}>
        {inner}
      </div>
    </div>
  );
}
