// ─── Datos mock ───────────────────────────────────────────────────────────────
// En producción esto vendrá de una API según op.id

export const OPORTUNIDADES = [
  { id: 1,  titulo: "3 viv Barcelona",             gestor: "Bruce Wayne",            estrategia: "V", roi: 49, meses: 18, tipo: "IB",   estado: "Capitalizando", porCapitalizar: 50 },
  { id: 2,  titulo: "Edificio en Cartagena",        gestor: "Peter Parker",           estrategia: "A", roi: 42, meses: 12, tipo: "IB",   estado: "En marcha" },
  { id: 3,  titulo: "Cambio de uso en Madrid",      gestor: "Eddie Brok",             estrategia: "V", roi: 39, meses: 6,  tipo: "IB",   estado: "Capitalizando", porCapitalizar: 32 },
  { id: 4,  titulo: "1 edificio en Mallorca",       gestor: "Nicholas Joseph Fury",              estrategia: "A", roi: 36, meses: 12, tipo: "JV W", estado: "Tanteo" },
  { id: 5,  titulo: "83 trasteros en Badajoz",      gestor: "Clark Kent",             estrategia: "V", roi: 31, meses: 16, tipo: "IB",   estado: "Finalizada" },
  { id: 6,  titulo: "2 viviendas en Castellon",     gestor: "Diana Prince",           estrategia: "V", roi: 29, meses: 12, tipo: "IB",   estado: "Capitalizando", porCapitalizar: 28 },
  { id: 7,  titulo: "1 edificio okupado",           gestor: "Kara Kent",              estrategia: "V", roi: 25, meses: 17, tipo: "IB",   estado: "Tanteo" },
  { id: 8,  titulo: "5 viviendas en Tarrag...",     gestor: "Donald Blake",           estrategia: "V", roi: 23, meses: 10, tipo: "JV",   estado: "Capitalizando", porCapitalizar: 44 },
  { id: 9,  titulo: "3 trasteros en La Man...",     gestor: "Felicia Hardy",          estrategia: "V", roi: 22, meses: 12, tipo: "IB+S", estado: "Tanteo" },
  { id: 10, titulo: "Vivienda en Fuenjirola",       gestor: "Matt Murdock",           estrategia: "V", roi: 21, meses: 14, tipo: "IB",   estado: "Capitalizando", porCapitalizar: 21 },
  { id: 11, titulo: "3 viviendas Badajoz",          gestor: "Helen Parr",             estrategia: "V", roi: 20, meses: 6,  tipo: "IB",   estado: "Capitalizando", porCapitalizar: 18 },
  { id: 12, titulo: "Apartamento en Sagunto",       gestor: "Bob Parr",               estrategia: "V", roi: 19, meses: 6,  tipo: "IB",   estado: "Capitalizando", porCapitalizar: 15 },
  { id: 13, titulo: "Cambio de uso Extremadura",    gestor: "Diego de la Vega",       estrategia: "V", roi: 18, meses: 6,  tipo: "IB",   estado: "En marcha" },
  { id: 14, titulo: "6 viviendas en Andalucia",     gestor: "Clint Barton",           estrategia: "V", roi: 49, meses: 6,  tipo: "IB",   estado: "Capitalizando", porCapitalizar: 63 },
  { id: 15, titulo: "3 viviendas en Sevilla",       gestor: "Marinette Dupain",       estrategia: "V", roi: 49, meses: 6,  tipo: "IB",   estado: "Capitalizando", porCapitalizar: 37 },
  { id: 16, titulo: "21 viviendas en Alicante",     gestor: "Linda Danvers",          estrategia: "A", roi: 26, meses: 14, tipo: "IB+S", estado: "En marcha" },

  { id: 17, titulo: "Local comercial en Zaragoza",      gestor: "Anthony Stark",       estrategia: "A", roi: 38, meses: 14, tipo: "IB",   estado: "En marcha" },
  { id: 18, titulo: "2 apartamentos en Torrevieja",     gestor: "Natalie Rushman", estrategia: "V", roi: 33, meses: 8,  tipo: "IB",   estado: "Capitalizando", porCapitalizar: 22 },
  { id: 19, titulo: "Nave industrial en Valladolid",    gestor: "Steven Grant Rogers",     estrategia: "A", roi: 31, meses: 20, tipo: "JV",   estado: "Tanteo" },
  { id: 20, titulo: "4 viviendas en Cordoba",           gestor: "Wanda Frank",   estrategia: "V", roi: 28, meses: 10, tipo: "IB",   estado: "Capitalizando", porCapitalizar: 18 },
  { id: 21, titulo: "Piso en el centro de Bilbao",      gestor: "Victor Shade",           estrategia: "V", roi: 27, meses: 9,  tipo: "IB",   estado: "En marcha" },
  { id: 22, titulo: "Chalet en Marbella",               gestor: "Samuel Thomas Wilson",       estrategia: "V", roi: 44, meses: 12, tipo: "IB+S", estado: "Capitalizando", porCapitalizar: 35 },
  { id: 23, titulo: "7 trasteros en Murcia",            gestor: "James Buchanan Barnes",     estrategia: "V", roi: 20, meses: 7,  tipo: "IB",   estado: "Finalizada" },
  { id: 24, titulo: "Edificio de oficinas en Valencia", gestor: "Scott Edward Lang",       estrategia: "A", roi: 35, meses: 24, tipo: "JV W", estado: "Tanteo" },
  { id: 25, titulo: "3 bajos en Granada",               gestor: "Hope Pym",    estrategia: "V", roi: 24, meses: 11, tipo: "IB",   estado: "Capitalizando", porCapitalizar: 14 },
  { id: 26, titulo: "Residencial en Pamplona",          gestor: "Donald Blake",     estrategia: "A", roi: 32, meses: 18, tipo: "JV",   estado: "En marcha" },
  { id: 27, titulo: "2 pisos en Santander",             gestor: "Loki Odinson",   estrategia: "V", roi: 22, meses: 8,  tipo: "IB",   estado: "En marcha" },
  { id: 28, titulo: "Solar edificable en Salamanca",    gestor: "Jane Foster",      estrategia: "V", roi: 41, meses: 16, tipo: "IB+S", estado: "Tanteo" },
  { id: 29, titulo: "Apartamento en Palma de Mallorca", gestor: "Virginia Potts",     estrategia: "V", roi: 30, meses: 10, tipo: "IB",   estado: "Capitalizando", porCapitalizar: 20 },
  { id: 30, titulo: "6 estudios en Alicante centro",   gestor: "James Rupert Rhodes",     estrategia: "A", roi: 26, meses: 15, tipo: "IB",   estado: "En marcha" },
  { id: 31, titulo: "Casa rural en Asturias",           gestor: "Nicholas Joseph Fury",        estrategia: "V", roi: 37, meses: 13, tipo: "JV",   estado: "Capitalizando", porCapitalizar: 28 },
  { id: 32, titulo: "Dúplex en San Sebastián",          gestor: "Maria Lorraine Hill",       estrategia: "V", roi: 29, meses: 9,  tipo: "IB",   estado: "En marcha" },
  { id: 33, titulo: "10 plazas de garaje en Madrid",   gestor: "Phillip James Coulson",     estrategia: "A", roi: 18, meses: 6,  tipo: "IB",   estado: "Capitalizando", porCapitalizar: 10 },
  { id: 34, titulo: "Hostal en Toledo",                 gestor: "Melinda Qiaolian May",      estrategia: "V", roi: 45, meses: 20, tipo: "JV W", estado: "Tanteo" },
  { id: 35, titulo: "Piso turístico en Sevilla",        gestor: "Mary Sue Poots",    estrategia: "A", roi: 33, meses: 12, tipo: "IB+S", estado: "En marcha" },
  { id: 36, titulo: "3 locales en Valladolid",          gestor: "Leopold James Fitz",         estrategia: "A", roi: 21, meses: 10, tipo: "IB",   estado: "Finalizada" },
  { id: 37, titulo: "Villa en Ibiza",                   gestor: "Jemma Anne Simmons",    estrategia: "V", roi: 52, meses: 18, tipo: "JV",   estado: "Capitalizando", porCapitalizar: 60 },
  { id: 38, titulo: "Edificio en rehabilitación Cádiz", gestor: "Barbara Morse",      estrategia: "V", roi: 38, meses: 22, tipo: "IB+S", estado: "En marcha" },
  { id: 39, titulo: "2 naves en Burgos",                gestor: "Lance Hunter",     estrategia: "A", roi: 25, meses: 14, tipo: "JV",   estado: "Tanteo" },
  { id: 40, titulo: "Piso en Logroño",                  gestor: "Alphonso Mackenzie",estrategia: "V", roi: 19, meses: 7,  tipo: "IB",   estado: "En marcha" },
  { id: 41, titulo: "4 áticos en Málaga",               gestor: "Elena Rodriguez",  estrategia: "V", roi: 43, meses: 15, tipo: "IB",   estado: "Capitalizando", porCapitalizar: 40 },
  { id: 42, titulo: "Residencia de estudiantes Murcia", gestor: "Elena Rodriguez",  estrategia: "A", roi: 36, meses: 30, tipo: "JV W", estado: "Tanteo" },
  { id: 43, titulo: "5 pisos en Vitoria",               gestor: "Roberto Reyes",     estrategia: "V", roi: 28, meses: 11, tipo: "IB",   estado: "Capitalizando", porCapitalizar: 16 },
  { id: 44, titulo: "Local con vivienda en Tarragona",  gestor: "Skye Johnson",            estrategia: "V", roi: 31, meses: 9,  tipo: "IB+S", estado: "En marcha" },
  { id: 45, titulo: "Complejo turístico en Lanzarote",  gestor: "Roberto Reyes",      estrategia: "A", roi: 47, meses: 24, tipo: "JV",   estado: "Tanteo" },
  { id: 46, titulo: "8 viviendas en Huelva",            gestor: "Barbara Morse",      estrategia: "V", roi: 23, meses: 13, tipo: "IB",   estado: "En marcha" },
];

export const DETALLE = {
  gestor: "Eddie Brok", gestorRating: 4.9, gestorReviews: 12,
  estrategia: "CA-Venta", tipo: "Joint Venture", estado: "Capitalizando",
  meses: 18, provincia: "Alicante", fechaInicio: "28.10.25",
  sobreMi: "RUBEN VELASCO\nVallisoletano (1977), casado, dos hijos y residente en Estepona desde 2020. Licenciado en Investigacion y Tecnicas de Mercado, MBA Inmobiliario REBS. En el Programa IN desde 2022.\n\nJOSE JULIO LUQUE\nMalageno (1968), casado, un hijo. Diplomado como Experto Tecnico Inmobiliario y Perito Tasador Judicial. En el Programa IN desde 2022.",
  equipo: { arquitecto: "Nicholas Joseph Fury", projectManager: "Linda Danvers", interiorista: "Diana Prince", fiscalista: "Bob Parr" },
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
  porQueRentable: "Esta propiedad se presenta como una de las escasas oportunidades de adquirir una de las tipologías de vivienda de gran demanda en la zona. Debido a sus características, permite conseguir con una pequeña aportación de valor, un chalet idóneo para muchos potenciales compradores deseosos de residir en la Costa del Sol. La reforma con estilo mediterráneo contemporáneo, actual y confortable dotará a la vivienda de las mejoras que le permitirá posicionarse conforme a las necesidades de la demanda de compradores de chalet en la zona, pudiendo llegar a cerrar un acuerdo de venta una vez finalizada la aportación de valor.",
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
  fiscalidad: { compra: "Compra con 7% de ITP", pbc: "Innecesario" },
  fiscalidadCompra: "Compraventa al 10% de ITP",
  pbc: "Innecesario",
  titulo: "21 viviendas en Alicante",
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
    { autor: "Anthony Stark",              rating: 5, texto: "Eddie nos mantuvo al corriente una vez al mes y nos dio un 1% mas de rentabilidad de lo estimado.", fecha: "Nov 24" },
    { autor: "Chiquito de la calzada",  rating: 1, texto: "Me habria gustado que nos diese mas beneficio aun. Es un fistro de la pradera.", fecha: "Oct 24" },
    { autor: "Chiquito de la calzada",  rating: 5, texto: "Muy bien.", fecha: "Oct 24" },
    { autor: "Donald Blake",            rating: 5, texto: "Buena comunicacion y rentabilidad segun lo previsto.", fecha: "Sep 24" },
    { autor: "Felicia Hardy",           rating: 5, texto: "Excelente trabajo!", fecha: "Sep 24" },
    { autor: "Marienette Dupain-Cheng", rating: 5, texto: "Estoy impaciente a que vuelvas a proponer otra transaccion.", fecha: "Ago 24" },
    { autor: "Nicholas Joseph Fury",               rating: 5, texto: "FENOMENAL.", fecha: "Ago 24" },
  ],
  precioVenta: {
    // FORMULARIO GESTOR — campos del paso 0 (ficha del inmueble)
    // El inversor ve solo un resumen legible (superficies, tipo, cargas).
    // El gestor rellena todos estos campos en el formulario de alta:
    //   referencia        → "Referencia catastral"
    //   localidad         → "Localidad"
    //   municipio         → "Municipio"
    //   cp                → "CP"
    //   provincia         → "Provincia"
    //   tipoInmueble      → "Tipo de inmueble"
    //   superficieTerreno → "Sup. terreno (m²)"
    //   superficieConstruida → "Sup. construida (m²)"
    //   habitaciones      → "Habitaciones"
    //   banos             → "Baños"
    //   garajes           → "Garajes"
    //   trasteros         → "Trasteros"
    //   piscina           → "Piscina" (bool)
    //   jardin            → "Jardín" (bool)
    //   estadoConservacion→ "Estado de conservación"
    //   cargas[]          → "Cargas" (acreedor, importe, tipo)
    paso0: {
      referencia: "3742801WH3474S0001KP",
      localidad: "Estepona",
      municipio: "Estepona",
      cp: "29680",
      provincia: "Málaga",
      tipoInmueble: "Chalet independiente",
      superficieTerreno: 554,
      superficieConstruida: 113,
      habitaciones: 4,
      banos: 3,
      garajes: 1,
      trasteros: 1,
      piscina: true,
      jardin: true,
      estadoConservacion: "Reforma iniciada",
      cargas: [
        { acreedor: "Banco Santander", importe: "45.000 EUR", tipo: "Hipoteca" },
      ],
    },
    // FORMULARIO GESTOR — campos del paso 1 (comparables vendidos)
    // El inversor ve: agencia, precio, dirección y teléfono de contacto.
    // El gestor rellena estos campos por cada comparable:
    //   agencia      → "Agencia"
    //   contacto     → "Nombre del contacto"
    //   telefono     → "Teléfono"
    //   direccion    → "Dirección del inmueble"
    //   precioVenta  → "Precio de venta (€)"
    //   feedback     → "Feedback de la agencia"
    paso1: [
    {
      agencia: "RE/MAX Estepona",
      contacto: "Álvaro Fernández",
      telefono: "952 80 14 23",
      direccion: "Av. Litoral, 12 · Estepona",
      precioVenta: 360000,
      feedback: "Propiedad con buena acogida en el mercado. El perfil de comprador habitual en la zona es extranjero (norte de Europa) y valora especialmente la piscina privada y el jardín. Recomiendan fijar precio entre 350.000 y 370.000 EUR."
    },
    {
      agencia: "Engel & Völkers Costa del Sol",
      contacto: "Sandra Müller",
      telefono: "951 33 72 10",
      direccion: "C/ Real, 8 · Estepona Centro",
      precioVenta: 355000,
      feedback: "El chalet encaja bien con la demanda de familias que buscan primera o segunda residencia. La reforma mediterránea contemporánea será un diferencial claro. Aconsejan destacar la parcela de 554 m² en la comercialización."
    },
    {
      agencia: "Inmobiliaria Costa & Mar",
      contacto: "Raúl Domínguez",
      telefono: "952 79 55 41",
      direccion: "Urb. Valle Romano, local 3 · Estepona",
      precioVenta: 345000,
      feedback: "Buena ubicación dentro del valle. Señalan que el trastero y el garaje son puntos de venta fuertes. Estiman un plazo de venta de 6-8 semanas una vez terminada la reforma si se fija precio competitivo."
    },
  ],
        // FORMULARIO GESTOR — campos del paso 2 (comparables en venta)
    // El inversor ve: título, precio, m², días en venta.
    // El gestor rellena estos campos por cada comparable:
    //   titulo       → "Título del anuncio"
    //   precio       → "Precio de venta (€)"
    //   m2           → "Superficie construida (m²)"
    //   diasEnVenta  → "Días en venta"
    //   url          → "URL del anuncio"
    paso2: [
      { titulo: "Chalet Valle Romano", precio: "395.000", m2: 118, diasEnVenta: 45, url: "https://idealista.com/a1" },
      { titulo: "Villa Estepona Golf", precio: "445.000", m2: 140, diasEnVenta: 90, url: "https://idealista.com/a2" },
      { titulo: "Casa adosada centro", precio: "320.000", m2: 105, diasEnVenta: 30, url: "https://fotocasa.es/a3" },
    ],
    paso3: {
      conclusiones: "El precio de venta objetivo de 350.000 EUR está en línea con el mercado. Los comparables vendidos oscilan entre 320.000 y 445.000 EUR para tipologías similares. Con la reforma de cocina y baños en estilo mediterráneo contemporáneo estimamos posicionarnos en la franja media-alta.",
    },
    paso4: {
      url: "https://idealista.com/inmueble/98765432/",
      fechaPublicacion: "15.02.2025",
      dias: [
      { visitas: 312, contactos: 4, favoritos: 28, bajada: 0 },
      { visitas: 278, contactos: 3, favoritos: 31, bajada: 0 },
      { visitas: 245, contactos: 2, favoritos: 27, bajada: 0 },
      { visitas: 301, contactos: 5, favoritos: 34, bajada: 0 },
      { visitas: 189, contactos: 1, favoritos: 22, bajada: 0 },
      { visitas: 223, contactos: 3, favoritos: 29, bajada: 0 },
    ],
            interesados: [
        { nombre: "John Smith", telefono: "+44 7911 123456", nacionalidad: "Británico", comentarios: "Busca segunda residencia, presupuesto hasta 380k" },
        { nombre: "Hans Mueller", telefono: "+49 171 9876543", nacionalidad: "Alemán", comentarios: "Muy interesado, visita prevista semana próxima" },
      ],
      comentarios: "Buen ritmo de visitas para la primera semana. Pendiente de recibir oferta formal de Hans Mueller.",
    },
  },
};

export const ORDEN_OPTIONS = [
  "Rentabilidad para inversor",
  "Meses (menor a mayor)",
  "Meses (mayor a menor)",
  "Nombre A-Z",
];

export const NAV_ITEMS = ["Novedades", "Mi perfil", "Oportunidades", "Servicios", "Productos", "Comunidad"];
