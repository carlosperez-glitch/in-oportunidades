import { useMemo } from "react";
import { estadoColor, colors } from "../theme";

// Props:
// - filtradas: op[] — lista ya filtrada y ordenada
// - selected: op | null
// - setSelected: fn
// - isDesktop: bool
// - totalFiltros: number — para el badge del embudo
// - showSidebar: bool — estado del sidebar en desktop
// - onToggleSidebar: fn — toggle sidebar en desktop
// - onAbrirFiltroMobile: fn — solo en mobile

export default function Lista({ filtradas, selected, setSelected, isDesktop, totalFiltros, showSidebar, onToggleSidebar, onAbrirFiltroMobile }) {
  function handleEmbudo() {
    if (isDesktop) { if (onToggleSidebar) onToggleSidebar(); }
    else { if (onAbrirFiltroMobile) onAbrirFiltroMobile(); }
  }

  var embudoActivo = isDesktop ? showSidebar : totalFiltros > 0;


  // Medir el texto más largo de los títulos visibles
  const tituloMinWidth = 250;

  return (
    <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", overflow: "hidden" }}>

      {/* Toolbar */}
      <div style={{ display: "flex", alignItems: "center", padding: "10px 16px", borderBottom: "1px solid #f3f4f6", flexShrink: 0 }}>
        <div style={{ flex: 1, minWidth: tituloMinWidth, display: "flex", alignItems: "center" }}>
        <button
          onClick={handleEmbudo}
          style={{ position: "relative", background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center", marginRight: 10 }}
        >
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
            <line x1="0" y1="2" x2="18" y2="2" stroke={embudoActivo ? colors.accion : "#374151"} strokeWidth="1.8" />
            <line x1="3" y1="7" x2="15" y2="7" stroke={embudoActivo ? colors.accion : "#374151"} strokeWidth="1.8" />
            <line x1="6" y1="12" x2="12" y2="12" stroke={embudoActivo ? colors.accion : "#374151"} strokeWidth="1.8" />
          </svg>
          {!isDesktop && totalFiltros > 0 && (
            <span style={{ position: "absolute", top: -6, right: -8, background: colors.accion, color: "#fff", borderRadius: "50%", width: 16, height: 16, fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>
              {totalFiltros}
            </span>
          )}
        </button>

        <button style={{ background: "none", border: "none", cursor: "pointer", color: "#9ca3af", fontSize: 20, lineHeight: 1, padding: 0, marginLeft: 10 }}>+</button>
        </div>

        

        {/* Cabeceras */}
        <div style={{ display: "flex", alignItems: "center", fontSize: 14, color: "#9ca3af" }}>
          <span style={{ width: 46, textAlign: "left" }}>Estrat.</span>
          <span style={{ width: 50, textAlign: "right" }}>ROI</span>
          <span style={{ width: 36, textAlign: "right" }}>Mes.</span>
          <span style={{ width: 50, paddingLeft: 8, textAlign: "left" }}>Tipo</span>
          {isDesktop && <span style={{ width: 148, paddingLeft: 12, textAlign: "left" }}>Estado</span>}
          
        </div>
      </div>

      {/* Filas */}
      <div style={{ flex: 1, overflowY: "auto", overflowX: "hidden" }}>
      {filtradas.map(function(op) {
        var isSelected = selected && selected.id === op.id;
        return (
          <div
            key={op.id}
            onClick={function() { setSelected(op); }}
            style={{
              display: "flex", alignItems: "center", padding: "9px 16px",
              cursor: "pointer",
              borderTop: isSelected ? "1px solid #b3d3e6" : "1px solid transparent",
              borderBottom: isSelected ? "1px solid #b3d3e6" : "1px solid #f9fafb",
              background: isSelected ? "#def3ff" : "transparent",
              transition: "background 0.1s",
            }}
          >
            <div style={{ flex: 1, minWidth: tituloMinWidth, overflow: "hidden" }}>
              <div style={{ fontSize: 15, fontWeight: 400, color: "#111", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {op.titulo}
              </div>
              {isDesktop && (
                <div style={{ fontSize: 12, color: "#9ca3af", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginTop: 1 }}>
                  {op.gestor}
                </div>
              )}
            </div>
            <div style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
              <span style={{ width: 46, textAlign: "left", fontSize: 14, color: "#6b7280" }}>{op.estrategia}</span>
              <span style={{ width: 50, textAlign: "right", fontSize: 14, fontWeight: 400, color: "#111" }}>{op.roi} %</span>
              <span style={{ width: 36, textAlign: "right", fontSize: 14, color: "#6b7280" }}>{op.meses}</span>
              <span style={{ width: 50, paddingLeft: 8, textAlign: "left", fontSize: 14, color: "#6b7280" }}>{op.tipo}</span>
              {isDesktop && (
                <span style={{ width: 148, paddingLeft: 12, fontSize: 14, color: estadoColor[op.estado] || "#374151", fontWeight: 500, whiteSpace: "nowrap" }}>
                  {op.porCapitalizar ? "Por capitalizar " + op.porCapitalizar + " K€" : op.estado}
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
    </div>
  );
}
