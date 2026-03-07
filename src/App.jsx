import { useState, useEffect } from "react";

// Importa los tres componentes
// import SidebarFiltros from "./SidebarFiltros";
// import Lista from "./Lista";
// import PanelDetalle from "./PanelDetalle";

// ─── Datos ────────────────────────────────────────────────────────────────────
const OPORTUNIDADES = [
  { id: 1,  titulo: "3 viv Barcelona",             gestor: "Bruce Wayne",            estrategia: "V", roi: 49, meses: 18, tipo: "IB",   estado: "Capitalizando" },
  { id: 2,  titulo: "Edificio en Cartagena",        gestor: "Peter Parker",           estrategia: "A", roi: 42, meses: 12, tipo: "IB",   estado: "En marcha" },
  { id: 3,  titulo: "Cambio de uso en Madrid",      gestor: "Eddie Brok",             estrategia: "V", roi: 39, meses: 6,  tipo: "IB",   estado: "Capitalizando" },
  { id: 4,  titulo: "1 edificio en Mallorca",       gestor: "Nick Fury",              estrategia: "A", roi: 36, meses: 12, tipo: "JV W", estado: "Tanteo" },
  { id: 5,  titulo: "83 trasteros en Badajoz",      gestor: "Clark Kent",             estrategia: "V", roi: 31, meses: 16, tipo: "IB",   estado: "Finalizada" },
  { id: 6,  titulo: "2 viviendas en Castellon",     gestor: "Diana Prince",           estrategia: "V", roi: 29, meses: 12, tipo: "IB",   estado: "Capitalizando" },
  { id: 7,  titulo: "1 edificio okupado",           gestor: "Kara Kent",              estrategia: "V", roi: 25, meses: 17, tipo: "IB",   estado: "Tanteo" },
  { id: 8,  titulo: "5 viviendas en Tarrag...",     gestor: "Donald Blake",           estrategia: "V", roi: 23, meses: 10, tipo: "JV",   estado: "Capitalizando" },
  { id: 9,  titulo: "3 trasteros en La Man...",     gestor: "Felicia Hardy",          estrategia: "V", roi: 22, meses: 12, tipo: "IB+S", estado: "Tanteo" },
  { id: 10, titulo: "Vivienda en Fuenjirola",       gestor: "Matt Murdock",           estrategia: "V", roi: 21, meses: 14, tipo: "IB",   estado: "Capitalizando" },
  { id: 11, titulo: "3 viviendas Badajoz",          gestor: "Helen Parr",             estrategia: "V", roi: 20, meses: 6,  tipo: "IB",   estado: "Capitalizando" },
  { id: 12, titulo: "Apartamento en Sagunto",       gestor: "Bob Parr",               estrategia: "V", roi: 19, meses: 6,  tipo: "IB",   estado: "Capitalizando" },
  { id: 13, titulo: "Cambio de uso Extremadura",    gestor: "Diego de la Vega",       estrategia: "V", roi: 18, meses: 6,  tipo: "IB",   estado: "En marcha" },
  { id: 14, titulo: "6 viviendas en Andalucia",     gestor: "Clint Barton",           estrategia: "V", roi: 49, meses: 6,  tipo: "IB",   estado: "Capitalizando" },
  { id: 15, titulo: "3 viviendas en Sevilla",       gestor: "Marinette Dupain",       estrategia: "V", roi: 49, meses: 6,  tipo: "IB",   estado: "Capitalizando" },
  { id: 16, titulo: "21 viviendas en Alicante",     gestor: "Linda Danvers",          estrategia: "A", roi: 26, meses: 14, tipo: "IB+S", estado: "En marcha" },
];

// Detalle mock — en produccion vendria de una API segun op.id
const DETALLE = {
  gestor: "Eddie Brok", gestorRating: 4.9, gestorReviews: 12,
  estrategia: "CA-Venta", tipo: "Joint Venture", estado: "Capitalizando",
  meses: 18, provincia: "Alicante", fechaInicio: "28.10.25",
  sobreMi: "RUBEN VELASCO\nVallisoletano (1977), casado, dos hijos y residente en Estepona desde 2020. Licenciado en Investigacion y Tecnicas de Mercado, MBA Inmobiliario REBS. En el Programa IN desde 2022.\n\nJOSE JULIO LUQUE\nMalageno (1968), casado, un hijo. Diplomado como Experto Tecnico Inmobiliario y Perito Tasador Judicial. En el Programa IN desde 2022.",
  equipo: { arquitecto: "Nick Fury", projectManager: "Linda Danvers", interiorista: "Diana Prince", fiscalista: "Bob Parr" },
  estadoActual: {
    valoracion: "350.000 EUR",
    descripcion: "Chalet independiente de 113 m2 construidos sobre parcela de 554 m2 en el Valle Romano de Estepona, Malaga.",
    caracteristicas: ["Chalet", "1 vivienda", "4 habitaciones", "250 m2", "Trastero", "Terraza", "Piscina", "3 banos", "Jardin", "1 garaje"],
  },
  problema: "Chalet independiente de 113 m2 construidos sobre parcela de 554 m2 en el Valle Romano de Estepona. Propiedad recientemente iniciada la reforma, que venden directamente los propietarios por necesidades de liquidez inmediata.",
  solucion: "Consulta previa al Ayuntamiento para garantizar la viabilidad de las obras necesarias. Se realizara una reforma de la cocina y banos. Estilo mediterraneo, contemporaneo y con un listo para vivir 3 estrellas.",
  fases: [
    { fase: "Compraventa del activo", acciones: "Acuerdo de condiciones de compra con la propiedad, solicitud del informe urbanistico favorable", duracion: "2 semanas diciembre" },
    { fase: "Captacion de capital", acciones: "Presentacion de la propuesta de INversion para seleccionar y agrupar la nomina de participes", duracion: "Primera semana enero" },
    { fase: "Firma CCP", acciones: "Presentacion a los inversores del CCP redactado por el asesor fiscal, revision y firma", duracion: "Primera semana diciembre" },
    { fase: "Obras", acciones: "Realizacion de los trabajos de reforma interior, jardin, solarium y zona de barbacoa", duracion: "2 meses feb-abr" },
    { fase: "Comercializacion", acciones: "Comercializacion en colaboracion con captacion de compradores interesados", duracion: "Feb a abr, 2 meses" },
  ],
  situacionActual: "Publicado paso 4 para completar el estudio de mercado. Tenemos firmado el contrato de arras para la compra de la vivienda antes del 30 de septiembre.",
  proximosPasos: "Verificar el precio suelo de venta con la aportacion de valor.\n\nProximos pasos:\n- Seleccion de inversores\n- Presentacion de CCP\n- Firma del CCP y aportaciones a la cuenta de la operacion",
  analisisEconomico: "Esta propiedad se presenta como una de las escasas oportunidades de adquirir una de las tipologias de vivienda de gran demanda en la zona. La reforma con estilo mediterraneo contemporaneo dotara a la vivienda de las mejoras necesarias.",
  desglose: {
    t1: [["Impuesto", "Andalucia"], ["% ITP", "7%"], ["Valor de referencia", "150.000"]],
    t2: [
      ["Precio de venta", "350.000"], ["Precio de compra", "150.000"],
      ["Notaria, registro y gestion", "2.500"], ["Impuestos de la compra", "10.500"],
      ["Certificado energetico", "300"], ["Honorarios de profesionales", "3.000"],
      ["Comisiones inmobiliarias", "7.000"], ["Tasacion", "500"],
      ["IBI", "800"], ["Suministros / basura", "400"],
      ["Cuotas comunidad de propietarios", "600"], ["Seguros", "500"],
      ["Reforma", "35.000"], ["Adecuacion", "5.000"], ["Limpieza extrema", "800"],
    ],
    t3: [
      ["Inversion hasta la venta", "216.100"], ["Total inversion con complementaria", "216.100"],
      ["Beneficio CON complementaria", "133.900"], ["Rentabilidad neta CON complementaria", "61,9%"],
    ],
  },
  destino: "El inmueble se destina a la venta a finalista para uso como vivienda habitual o segunda residencia, muy demandado por publico extranjero en la zona.",
  escenarios: {
    pesimista: "320.000", realista: "350.000", optimista: "450.000",
    explicacion: "Planteamos la propuesta con un enfoque prudente, priorizando el plazo de venta al precio.",
  },
  fiscalidad: { compra: "Compra con 7% de ITP", pbc: "Necesaria" },
  solvencia: {
    comprador: "Compra a traves de la sociedad EASYVENTA, S.L. Esta sociedad fue constituida este mismo ano, sin empleados ni mas actividad que la propia.",
    comunicacion: "Grupo de Whatsapp con los INversores, reunion mensual por Zoom",
    banco: "Caixabank", cuenta: "---", estadoCuenta: "Exclusiva para el proyecto",
  },
  documentos: ["Nota simple", "Ficha catastral", "Valor de referencia", "Plano estado actual", "Plano aportacion de valor"],
  observaciones: [
    { autor: "Bruce Wayne",  esGestor: false, texto: "El presupuesto para la cocina me parece muy bajo. Como lo has planteado?", fecha: "12 ene" },
    { autor: "Eddie Brok",   esGestor: true,  texto: "Es el modelo Bormujos de Obramat. Cuatro muebles altos y cuatro bajos. La encimera es de Encimeras Economicas. En la documentacion puedes encontrar el presupuesto.", fecha: "12 ene" },
    { autor: "Clark Kent",   esGestor: false, texto: "En la nota simple pone que esta en un area de necesidad de vivienda. Necesita tanteo y retracto?", fecha: "13 ene" },
    { autor: "Eddie Brok",   esGestor: true,  texto: "Tenemos el tanteo y retracto! Lo acabo de adjuntar.", fecha: "13 ene" },
    { autor: "Matt Murdock", esGestor: false, texto: "Que opina la comunidad de propietarios?", fecha: "14 ene" },
    { autor: "Eddie Brok",   esGestor: true,  texto: "La comunidad de propietarios no se puede oponer a un cambio de uso a vivienda, y en los estatutos hay permiso expreso de division.", fecha: "14 ene" },
  ],
  resenas: [
    { autor: "Tony Stark",             rating: 5, texto: "Eddie nos mantuvo al corriente una vez al mes y nos dio un 1% mas de rentabilidad de lo estimado.", fecha: "Nov 24" },
    { autor: "Chiquito de la calzada", rating: 1, texto: "Me habria gustado que nos diese mas beneficio aun. Es un fistro de la pradera.", fecha: "Oct 24" },
    { autor: "Chiquito de la calzada", rating: 5, texto: "Muy bien.", fecha: "Oct 24" },
    { autor: "Donald Blake",           rating: 5, texto: "Buena comunicacion y rentabilidad segun lo previsto.", fecha: "Sep 24" },
    { autor: "Felicia Hardy",          rating: 5, texto: "Excelente trabajo!", fecha: "Sep 24" },
    { autor: "Marienette Dupain-Cheng",rating: 5, texto: "Estoy impaciente a que vuelvas a proponer otra transaccion.", fecha: "Ago 24" },
    { autor: "Nick Fury",              rating: 5, texto: "FENOMENAL.", fecha: "Ago 24" },
  ],
};

// ─── Constantes ───────────────────────────────────────────────────────────────
const ORDEN_OPTIONS = ["Rentabilidad para inversor", "Meses (menor a mayor)", "Meses (mayor a menor)", "Nombre A-Z"];

// ─── Nav items ────────────────────────────────────────────────────────────────
const NAV_ITEMS = ["Novedades", "Mi perfil", "Oportunidades", "Servicios", "Productos", "Comunidad"];

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  var [filtros, setFiltros] = useState({ buscar: "", estados: [], tipos: [], estrategias: [], orden: ORDEN_OPTIONS[0] });
  var [showFiltroMobile, setShowFiltroMobile] = useState(false);
  var [selected, setSelected] = useState(null);
  var [isDesktop, setIsDesktop] = useState(typeof window !== "undefined" && window.innerWidth >= 768);

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

  // Filtrar y ordenar
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
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#fff", minHeight: "100vh" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />

      {/* NAV */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 20px", borderBottom: "1px solid #f3f4f6", position: "sticky", top: 0, background: "#fff", zIndex: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 30, height: 30, border: "2px solid #e53e3e", borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 12, color: "#e53e3e", flexShrink: 0 }}>IN</div>
          {isDesktop ? (
            <nav style={{ display: "flex", gap: 24 }}>
              {NAV_ITEMS.map(function(item) {
                return (
                  <span key={item} style={{ fontSize: 13, color: item === "Oportunidades" ? "#111" : "#6b7280", fontWeight: item === "Oportunidades" ? 600 : 400, cursor: "pointer", borderBottom: item === "Oportunidades" ? "2px solid #111" : "none", paddingBottom: 2 }}>
                    {item}
                  </span>
                );
              })}
            </nav>
          ) : (
            <span style={{ fontSize: 16, fontWeight: 600, color: "#111" }}>Oportunidades</span>
          )}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {isDesktop && <span style={{ fontSize: 13, color: "#374151" }}>Carlos Perez</span>}
          <span style={{ fontSize: 18, cursor: "pointer", color: "#374151" }}>&#9776;</span>
        </div>
      </div>

      {/* BODY: 3 columnas en desktop */}
      <div style={{ display: "flex", height: "calc(100vh - 55px)" }}>

        {/* Col 1: Sidebar filtros (desktop) */}
        {isDesktop && (
          <div style={{ width: 200, borderRight: "1px solid #f3f4f6", overflowY: "auto", flexShrink: 0 }}>
            {/* <SidebarFiltros filtros={filtros} setFiltros={setFiltros} isMobile={false} /> */}
            <SidebarFiltros filtros={filtros} setFiltros={setFiltros} isMobile={false} />
          </div>
        )}

        {/* Col 2: Lista */}
        {/* <Lista filtradas={filtradas} selected={selected} setSelected={setSelected} isDesktop={isDesktop} totalFiltros={totalFiltros} onAbrirFiltroMobile={function() { setShowFiltroMobile(true); }} /> */}
        <Lista
          filtradas={filtradas}
          selected={selected}
          setSelected={setSelected}
          isDesktop={isDesktop}
          totalFiltros={totalFiltros}
          onAbrirFiltroMobile={function() { setShowFiltroMobile(true); }}
        />

        {/* Col 3: Panel detalle (desktop) */}
        {isDesktop && (
          <div style={{ width: 480, borderLeft: "1px solid #f3f4f6", flexShrink: 0, display: "flex", flexDirection: "column" }}>
            {selected
              ? /* <PanelDetalle detalle={DETALLE} onClose={function() { setSelected(null); }} inline={true} /> */
                <PanelDetalle detalle={DETALLE} onClose={function() { setSelected(null); }} inline={true} />
              : <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", color: "#d1d5db", fontSize: 13 }}>Selecciona una oportunidad</div>
            }
          </div>
        )}
      </div>

      {/* Mobile: filtro bottom sheet */}
      {!isDesktop && showFiltroMobile && (
        /* <SidebarFiltros filtros={filtros} setFiltros={setFiltros} isMobile={true} onClose={function() { setShowFiltroMobile(false); }} /> */
        <SidebarFiltros filtros={filtros} setFiltros={setFiltros} isMobile={true} onClose={function() { setShowFiltroMobile(false); }} />
      )}

      {/* Mobile: panel detalle bottom sheet */}
      {!isDesktop && selected && (
        /* <PanelDetalle detalle={DETALLE} onClose={function() { setSelected(null); }} inline={false} /> */
        <PanelDetalle detalle={DETALLE} onClose={function() { setSelected(null); }} inline={false} />
      )}
    </div>
  );
}

// ─── Inline components (borrar cuando uses imports reales) ────────────────────
// Pega aqui el contenido de SidebarFiltros.jsx, Lista.jsx y PanelDetalle.jsx
// mientras trabajas en una sola conversacion, o usa imports si tienes bundler.
