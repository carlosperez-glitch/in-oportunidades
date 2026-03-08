import { useState, useEffect } from "react";
import { OPORTUNIDADES, DETALLE, ORDEN_OPTIONS, NAV_ITEMS } from "./data/mock";
import SidebarFiltros from "./components/SidebarFiltros";
import Lista from "./components/Lista";
import PanelDetalle from "./components/PanelDetalle";
import { colors } from "./theme";

export default function App() {
  var [filtros, setFiltros] = useState({ buscar: "", estados: [], tipos: [], estrategias: [], orden: ORDEN_OPTIONS[0] });
  var [showFiltroMobile, setShowFiltroMobile] = useState(false);
  var [selected, setSelected] = useState(null);
  var [showSidebar, setShowSidebar] = useState(true);
  var [isDesktop, setIsDesktop] = useState(typeof window !== "undefined" && window.innerWidth >= 768);

  // Sidebar filtros y panel detalle son mutuamente excluyentes en desktop
  function seleccionar(op) {
    setSelected(op);
    if (op) setShowSidebar(false); // seleccionar oportunidad cierra sidebar
  }
  function toggleSidebar() {
    setShowSidebar(function(v) {
      if (!v) setSelected(null); // abrir sidebar cierra detalle
      return !v;
    });
  }

  useEffect(function() {
    function h() { setIsDesktop(window.innerWidth >= 768); }
    window.addEventListener("resize", h);
    return function() { window.removeEventListener("resize", h); };
  }, []);

  var totalFiltros =
    (filtros.estados ? filtros.estados.length : 0) +
    (filtros.tipos ? filtros.tipos.length : 0) +
    (filtros.estrategias ? filtros.estrategias.length : 0) +
    (filtros.buscar ? 1 : 0);

  var filtradas = OPORTUNIDADES.filter(function(op) {
    if (filtros.buscar && op.titulo.toLowerCase().indexOf(filtros.buscar.toLowerCase()) === -1 && op.gestor.toLowerCase().indexOf(filtros.buscar.toLowerCase()) === -1) return false;
    if (filtros.estados && filtros.estados.length && filtros.estados.indexOf(op.estado) === -1) return false;
    if (filtros.tipos && filtros.tipos.length && filtros.tipos.indexOf(op.tipo) === -1) return false;
    if (filtros.estrategias && filtros.estrategias.length && filtros.estrategias.indexOf(op.estrategia) === -1) return false;
    return true;
  }).sort(function(a, b) {
    if (filtros.orden === ORDEN_OPTIONS[1]) return a.meses - b.meses;
    if (filtros.orden === ORDEN_OPTIONS[2]) return b.meses - a.meses;
    if (filtros.orden === ORDEN_OPTIONS[3]) return a.titulo.localeCompare(b.titulo);
    return b.roi - a.roi;
  });

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: colors.bgPage, minHeight: "100vh" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />

      {/* NAV */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 20px", borderBottom: "1px solid " + colors.border, position: "sticky", top: 0, background: colors.bgPage, zIndex: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 30, height: 30, border: "2px solid " + colors.logo, borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 12, color: colors.logo, flexShrink: 0 }}>IN</div>
          {isDesktop ? (
            <nav style={{ display: "flex", gap: 24 }}>
              {NAV_ITEMS.map(function(item) {
                var active = item === "Oportunidades";
                return (
                  <span key={item} style={{ fontSize: 15, color: active ? colors.primary : colors.muted, fontWeight: active ? 600 : 400, cursor: "pointer", borderBottom: active ? "2px solid " + colors.primary : "none", paddingBottom: 2 }}>
                    {item}
                  </span>
                );
              })}
            </nav>
          ) : (
            <span style={{ fontSize: 16, fontWeight: 600, color: colors.primary }}>Oportunidades</span>
          )}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {isDesktop && <span style={{ fontSize: 13, color: colors.secondary }}>Carlos Perez</span>}
          <span style={{ fontSize: 18, cursor: "pointer", color: colors.secondary }}>&#9776;</span>
        </div>
      </div>

      {/* BODY */}
      <div style={{ display: "flex", height: "calc(100vh - 55px)" }}>

        {/* Col 1: Sidebar filtros — visible solo si showSidebar */}
        {isDesktop && showSidebar && (
          <div style={{ width: 200, borderRight: "1px solid " + colors.border, overflowY: "auto", flexShrink: 0 }}>
            <SidebarFiltros filtros={filtros} setFiltros={setFiltros} isMobile={false} />
          </div>
        )}

        {/* Col 2: Lista */}
        <Lista
          filtradas={filtradas}
          selected={selected}
          setSelected={seleccionar}
          isDesktop={isDesktop}
          totalFiltros={totalFiltros}
          showSidebar={showSidebar}
          onToggleSidebar={toggleSidebar}
          onAbrirFiltroMobile={function() { setShowFiltroMobile(true); }}
        />

        {/* Col 3: Panel detalle — visible solo si hay selected */}
        {isDesktop && selected && (
          <div style={{ width: "fit-content", minWidth: 460, maxWidth: 700, borderLeft: "1px solid " + colors.border, flexShrink: 0, display: "flex", flexDirection: "column", overflow: "hidden" }}>
            <PanelDetalle detalle={DETALLE} onClose={function() { setSelected(null); }} inline={true} />
          </div>
        )}
        {isDesktop && !selected && !showSidebar && (
          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", color: colors.borderStrong, fontSize: 13 }}>Selecciona una oportunidad</div>
        )}
      </div>

      {/* Mobile: filtro bottom sheet */}
      {!isDesktop && showFiltroMobile && (
        <SidebarFiltros filtros={filtros} setFiltros={setFiltros} isMobile={true} onClose={function() { setShowFiltroMobile(false); }} />
      )}

      {/* Mobile: panel detalle bottom sheet */}
      {!isDesktop && selected && (
        <PanelDetalle detalle={DETALLE} onClose={function() { setSelected(null); }} inline={false} />
      )}
    </div>
  );
}
