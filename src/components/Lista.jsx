import { estadoColor } from "../theme";

// Props:
// - filtradas: op[] — lista ya filtrada y ordenada
// - selected: op | null
// - setSelected: fn
// - isDesktop: bool
// - totalFiltros: number — para el badge del embudo
// - onAbrirFiltroMobile: fn — solo en mobile

export default function Lista({ filtradas, selected, setSelected, isDesktop, totalFiltros, onAbrirFiltroMobile }) {
  return (
    <div style={{ flex: 1, overflowY: "auto", minWidth: 0 }}>

      {/* Toolbar */}
      <div style={{ display: "flex", alignItems: "center", padding: "10px 16px", borderBottom: "1px solid #f3f4f6", gap: 10 }}>
        <button
          onClick={function() { if (!isDesktop && onAbrirFiltroMobile) onAbrirFiltroMobile(); }}
          style={{ position: "relative", background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center" }}
        >
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
            <line x1="0" y1="2" x2="18" y2="2" stroke={totalFiltros ? "#7c3aed" : "#374151"} strokeWidth="1.8" />
            <line x1="3" y1="7" x2="15" y2="7" stroke={totalFiltros ? "#7c3aed" : "#374151"} strokeWidth="1.8" />
            <line x1="6" y1="12" x2="12" y2="12" stroke={totalFiltros ? "#7c3aed" : "#374151"} strokeWidth="1.8" />
          </svg>
          {totalFiltros > 0 && (
            <span style={{ position: "absolute", top: -6, right: -8, background: "#7c3aed", color: "#fff", borderRadius: "50%", width: 16, height: 16, fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>
              {totalFiltros}
            </span>
          )}
        </button>

        <button style={{ background: "none", border: "none", cursor: "pointer", color: "#9ca3af", fontSize: 20, lineHeight: 1, padding: 0 }}>+</button>

        <div style={{ flex: 1 }} />

        {/* Cabeceras */}
        <div style={{ display: "flex", alignItems: "center", fontSize: 12, color: "#9ca3af" }}>
          <span style={{ width: 46, textAlign: "right" }}>Estrat.</span>
          <span style={{ width: 50, textAlign: "right" }}>ROI</span>
          <span style={{ width: 36, textAlign: "right" }}>Mes.</span>
          <span style={{ width: 50, textAlign: "right" }}>Tipo</span>
          {isDesktop && <span style={{ width: 120, paddingLeft: 12 }}>Estado</span>}
          {isDesktop && <span style={{ width: 170, paddingLeft: 12 }}>Gestor</span>}
        </div>
      </div>

      {/* Filas */}
      {filtradas.map(function(op) {
        var isSelected = selected && selected.id === op.id;
        return (
          <div
            key={op.id}
            onClick={function() { setSelected(op); }}
            style={{
              display: "flex", alignItems: "center", padding: "9px 16px",
              cursor: "pointer", borderBottom: "1px solid #f9fafb",
              background: isSelected ? "#f5f3ff" : "transparent",
              transition: "background 0.1s",
            }}
          >
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#111", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {op.titulo}
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
              <span style={{ width: 46, textAlign: "right", fontSize: 12, color: "#6b7280" }}>{op.estrategia}</span>
              <span style={{ width: 50, textAlign: "right", fontSize: 12, fontWeight: 700, color: "#111" }}>{op.roi} %</span>
              <span style={{ width: 36, textAlign: "right", fontSize: 12, color: "#6b7280" }}>{op.meses}</span>
              <span style={{ width: 50, textAlign: "right", fontSize: 12, color: "#6b7280" }}>{op.tipo}</span>
              {isDesktop && (
                <span style={{ width: 120, paddingLeft: 12, fontSize: 12, color: estadoColor[op.estado] || "#374151", fontWeight: 500 }}>
                  {op.estado}
                </span>
              )}
              {isDesktop && (
                <span style={{ width: 170, paddingLeft: 12, fontSize: 12, color: "#374151", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {op.gestor}
                </span>
              )}
            </div>
          </div>
        );
      })}

      {filtradas.length === 0 && (
        <div style={{ padding: "40px 20px", textAlign: "center", color: "#9ca3af", fontSize: 13 }}>
          No hay oportunidades con los filtros seleccionados
        </div>
      )}
    </div>
  );
}
