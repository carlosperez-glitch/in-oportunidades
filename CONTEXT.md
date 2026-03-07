# Plataforma IN — Contexto del proyecto

## Descripción
App React de gestión de oportunidades de inversión inmobiliaria. Interfaz de 3 columnas (desktop) con filtros, lista y panel de detalle.

## Repo GitHub
- **URL**: https://github.com/carlosperez-glitch/in-oportunidades
- **Usuario**: carlosperez-glitch
- **Rama**: main
- **Stack**: React 18 + Vite 4

## Estructura de archivos
```
in-oportunidades/
  index.html
  package.json
  vite.config.js
  src/
    App.jsx          ← estado global, filtrado, layout
    index.jsx        ← punto de entrada
    theme.js         ← tokens de diseño (colores, tipografía)
    data/
      mock.js        ← OPORTUNIDADES (16 items), DETALLE, constantes
    components/
      Lista.jsx      ← toolbar + filas de oportunidades
      SidebarFiltros.jsx  ← filtros desktop/mobile
      PanelDetalle.jsx    ← 16 secciones, subvistas, lightbox
```

## Diseño / tokens (theme.js)
- Fuente: DM Sans (Google Fonts)
- Rojo logo: `#e53e3e`
- Morado acción/filtros: `#7c3aed`
- Capitalizando/Tanteo: `#d97706`
- En marcha: `#6b7280`
- Finalizada: `#9ca3af`
- Fondo fila seleccionada: `#f5f3ff`
- Estilos: 100% inline (sin CSS externo, sin Tailwind)

## Componentes

### App.jsx
- Importa datos de `./data/mock`
- Importa componentes de `./components/`
- Estado: `filtros`, `selected`, `isDesktop`, `showFiltroMobile`
- `isDesktop = window.innerWidth >= 768` + listener resize
- Layout desktop: 200px sidebar | flex lista | 480px panel detalle

### SidebarFiltros.jsx
- Props: `filtros`, `setFiltros`, `isMobile`, `onClose`
- Desktop: aplica filtros en tiempo real
- Mobile: bottom sheet modal con Cancelar/Aplicar
- Filtros: Estado, Tipo, Estrategia, búsqueda libre, ordenación
- Tags activos con × para eliminar
- Importa `ORDEN_OPTIONS` de `../data/mock`

### Lista.jsx
- Props: `filtradas`, `selected`, `setSelected`, `isDesktop`, `totalFiltros`, `onAbrirFiltroMobile`
- Toolbar: icono embudo con badge numérico, botón +
- Columnas: Título | Estrat. | ROI% | Mes. | Tipo | Estado (color) | Gestor
- Desktop muestra Estado y Gestor; mobile los oculta
- Importa `estadoColor` de `../theme`

### PanelDetalle.jsx
- Props: `detalle`, `onClose`, `inline`
- `inline=true`: columna derecha desktop
- `inline=false`: bottom sheet modal mobile
- Header sticky con dropdown de 16 secciones
- Subvistas: `"observaciones"` | `"resenas"` | `null`
- Lightbox para fotos y documentos
- Footer fijo: "Ver presentación" + "Solicitar invertir"
- Importa `estadoColor`, `colors` de `../theme`

## Datos mock (data/mock.js)
- `OPORTUNIDADES`: array de 16 oportunidades con campos: id, titulo, gestor, estrategia, roi, meses, tipo, estado
- `DETALLE`: objeto completo con todas las secciones del panel
- `ORDEN_OPTIONS`: ["Rentabilidad para inversor", "Meses (menor a mayor)", "Meses (mayor a menor)", "Nombre A-Z"]
- `NAV_ITEMS`: ["Novedades", "Mi perfil", "Oportunidades", "Servicios", "Productos", "Comunidad"]

## Estado actual del desarrollo
- ✅ Estructura refactorizada y limpia en GitHub
- ✅ theme.js con tokens centralizados
- ✅ data/mock.js con datos extraídos de App.jsx
- ✅ Todos los componentes en src/components/
- ✅ Archivos duplicados eliminados
- ⏳ Verificar que compila correctamente (local o StackBlitz)

## Próximas tareas pendientes
1. Verificar que el proyecto compila y se previsualiza correctamente
2. Pantalla de creación de oportunidad (formulario del gestor)
3. Funcionalidad real de "Solicitar invertir" y "Ver presentación"
4. Mapa real en sección Estado actual
5. Upload real de fotos y documentos
6. Resto de pestañas: Novedades, Mi perfil, Servicios, Productos, Comunidad

## Cómo arrancar en local
```bash
git clone https://github.com/carlosperez-glitch/in-oportunidades
cd in-oportunidades
npm install
npm run dev
# Abre http://localhost:5173
```

## Cómo previsualizar en StackBlitz
https://stackblitz.com/github/carlosperez-glitch/in-oportunidades

## Instrucciones para Claude en nueva conversación
1. Leer este archivo CONTEXT.md del repo para entender el estado
2. El token de GitHub puede haber expirado — pedir al usuario que regenere
   el token "Plataforma inversión inmobiliaria Claude" en:
   https://github.com/settings/tokens
   y lo pegue en el chat o ejecute `window.__TOKEN__ = "ghp_..."` en la consola del navegador
3. Para hacer cambios: editar archivos y hacer PUT vía GitHub API con el token
