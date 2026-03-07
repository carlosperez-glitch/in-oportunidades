// ─── Tokens de diseño ─────────────────────────────────────────────────────────

export const colors = {
  // Marca
  logo:        "#e53e3e",
  accion:      "#7c3aed",
  accionLight: "#f5f3ff",

  // Estados
  capitalizando: "#d97706",
  enMarcha:      "#6b7280",
  finalizada:    "#9ca3af",
  tanteo:        "#d97706",
  abierta:       "#7c3aed",

  // Texto
  primary:   "#111111",
  secondary: "#333333",
  muted:     "#6b7280",
  placeholder: "#9ca3af",

  // Bordes y fondos
  border:      "#dbdbdb",
  borderMid:   "#e5e7eb",
  borderStrong:"#d1d5db",
  bgPage:      "#ffffff",
  bgRow:       "#f9fafb",
  bgTag:       "#f3f4f6",
  bgSelected:  "#f5f3ff",
  bgInput:     "#ffffff",

  // Semáforo escenarios
  pesimista:  "#fef3c7",
  realista:   "#f0fdf4",
  optimista:  "#eff6ff",

  // PBC
  pbcNecesaria:     "#fef3c7",
  pbcNecesariaText: "#92400e",
  pbcOk:            "#f0fdf4",
  pbcOkText:        "#166534",

  // ROI inversor
  roiHighlight: "#e53e3e",

  // Estrellas
  starOn:  "#f59e0b",
  starOff: "#e5e7eb",
};

export const font = {
  family: "'DM Sans', sans-serif",
  xs:   10,
  sm:   11,
  base: 12,
  md:   13,
  lg:   14,
  xl:   15,
  xxl:  16,
  h:    18,
};

export const radius = {
  sm:   6,
  md:   8,
  lg:   10,
  pill: 20,
  card: 16,
};

export const spacing = {
  xs:  4,
  sm:  8,
  md:  12,
  lg:  16,
  xl:  20,
  xxl: 24,
};

// Mapa de colores por estado (para usar en Lista y PanelDetalle)
export const estadoColor = {
  "Capitalizando": colors.capitalizando,
  "En marcha":     colors.enMarcha,
  "Finalizada":    colors.finalizada,
  "Tanteo":        colors.tanteo,
  "Abierta":       colors.abierta,
};
