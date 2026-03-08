import { estadoColor, colors } from "../theme";

const COL = "250px 50px 56px 44px 66px 130px";

export default function Lista({ filtradas, selected, setSelected, isDesktop, totalFiltros, onAbrirFiltroMobile }) {
  return (
    <div style={{ flex: 1, overflowY: "auto", minWidth: 0, display: "flex", flexDirection: "column" }}>

      {/* Toolbar */}
      <div style={{ flexShrink: 0, borderBottom: "1px solid " + colors.border }}>

        {/* Botones */}
        <div style={{ display: "flex", alignItems: "center", padding: "10px 16px", gap: 10 }}>
          <button
            onClick={function() { if (!isDesktop && onAbrirFiltroMobile) onAbrirFiltroMobile(); }}
            style={{ position: "relative", background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center", marginRight: 10 }}
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
        </div>

        {/* Cabeceras */}
        <div style={{ display: "grid", gridTemplateColumns: COL, padding: "0 16px 8px", fontSize: 12, color: "#9ca3af" }}>
          <span></span>
          <span style={{ textAlign: "left" }}>Estrat.</span>
          <span style={{ textAlign: "right" }}>ROI</span>
          <span style={{ textAlign: "right" }}>Mes.</span>
          <span style={{ paddingLeft: 8 }}>Tipo</span>
          {isDesktop && <span style={{ paddingLeft: 8 }}>Estado</span>}
        </div>
      </div>

      {/* Filas */}
      <div style={{ flex: 1, overflowY: "auto" }}>
        {filtradas.map(function(op) {
          var isSel = selected && selected.id === op.id;
          return (
            <div
              key={op.id}
              onClick={function() { setSelected(op); }}
              style={{
                display: "grid",
                gridTemplateColumns: COL,
                alignItems: "center",
                padding: "9px 16px",
                cursor: "pointer",
                borderTop: isSel ? "1px solid #b3d3e6" : "1px solid transparent",
                borderBottom: isSel ? "1px solid #b3d3e6" : "1px solid #f9fafb",
                background: isSel ? "#def3ff" : "transparent",
                transition: "background 0.1s",
              }}
            >
              {/* Col 1: título + gestor */}
              <div style={{ width: 250, overflow: "hidden" }}>
                <div style={{ fontSize: 15, fontWeight: 400, color: "#111", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {op.titulo}
                </div>
                {isDesktop && (
                  <div style={{ fontSize: 12, color: "#9ca3af", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginTop: 1 }}>
                    {op.gestor}
                  </div>
                )}
              </div>

              {/* Estrat */}
              <span style={{ fontSize: 14, color: "#6b7280" }}>{op.estrategia}</span>

              {/* ROI */}
              <span style={{ fontSize: 14, fontWeight: 700, color: "#111", textAlign: "right" }}>{op.roi} %</span>

              {/* Meses */}
              <span style={{ fontSize: 14, color: "#6b7280", textAlign: "right" }}>{op.meses}</span>

              {/* Tipo */}
              <span style={{ fontSize: 14, color: "#6b7280", paddingLeft: 8 }}>{op.tipo}</span>

              {/* Estado */}
              {isDesktop && (
                <span style={{ fontSize: 14, color: op.porCapitalizar ? "#d97706" : (estadoColor[op.estado] || "#374151"), fontWeight: 500, paddingLeft: 8, whiteSpace: "nowrap" }}>
                  {op.porCapitalizar ? "Por capitalizar " + op.porCapitalizar + " K€" : op.estado}
                </span>
              )}
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
