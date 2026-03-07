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
  CONTEXT.md         ← este archivo
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

## Entorno local del usuario
- **Mac mini** con macOS 13.7
- **Node**: v24.14.0 (instalado via nodejs.org .pkg)
- **Proyecto clonado en**: ~/Desktop/in-oportunidades
- **Arrancar**: cd ~/Desktop/in-oportunidades && npm run dev
- **URL local**: http://localhost:5173 (o 5174 si el puerto está ocupado)
- **Homebrew**: instalado pero NO usar para Node (macOS 13 compila desde fuente, tarda horas)

## Flujo de trabajo
1. Claude edita archivos via GitHub API (necesita token)
2. Usuario hace `git pull` en ~/Desktop/in-oportunidades
3. Vite recarga automáticamente (HMR)

## Token GitHub
- Nombre: "Plataforma inversión inmobiliaria Claude"
- Regenerar en: https://github.com/settings/tokens
- Permisos necesarios: solo `repo`
- Asignarlo con: `window.__TOKEN__ = "ghp_..."` en consola del navegador

## Bugs corregidos
- ✅ theme.js corrupto (línea `CapI=$talizando`) — fix subido
- ✅ Typo `DETARLE` en App.jsx — fix subido

## Estado actual (Mar 7, 2026)
- ✅ Proyecto funcionando en local: http://localhost:5173
- ✅ Estructura limpia en GitHub (sin duplicados)
- ✅ Nav, filtros, lista y panel de detalle funcionando
- ✅ Click en oportunidad muestra panel detalle
- ⏳ Columnas de lista ligeramente estrechas (Estado/Gestor se truncan)

## Próximas tareas pendientes
1. Revisar layout de columnas en Lista (Estado/Gestor truncados)
2. Pantalla de creación de oportunidad (formulario del gestor)
3. Funcionalidad real de "Solicitar invertir" y "Ver presentación"
4. Mapa real en sección Estado actual
5. Upload real de fotos y documentos
6. Resto de pestañas: Novedades, Mi perfil, Servicios, Productos, Comunidad

## Instrucciones para Claude en nueva conversación
1. Leer este archivo CONTEXT.md
2. Pedir al usuario token GitHub si hace falta (regenerar en https://github.com/settings/tokens)
3. Para ver la app: el usuario abre Terminal, cd ~/Desktop/in-oportunidades && npm run dev, abre http://localhost:5173
4. Para hacer cambios: editar via GitHub API con PUT, luego usuario hace git pull en la segunda pestaña de Terminal
5. La primera pestaña de Terminal siempre tiene Vite corriendo (no se puede escribir ahí)
