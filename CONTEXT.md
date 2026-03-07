# IN — Plataforma de inversión inmobiliaria

## Qué es este proyecto
Aplicación web para un grupo de inversores que han realizado el mismo curso de inversión inmobiliaria. Les permite publicar y explorar oportunidades de inversión en activos inmobiliarios en España.

## Roles de usuario
Todos los miembros pueden actuar como **gestor** o como **inversor** indistintamente:
- **Gestor**: respecto a las oportunidades que él mismo crea y publica. Puede editar esas oportunidades.
- **Inversor**: respecto a las oportunidades creadas por otros, si decide participar. Solo puede leer y comentar.

Un mismo usuario puede ser gestor de unas operaciones e inversor en otras simultáneamente.

## Datos de prueba (mocks)
Mientras no existe servidor real, los datos son ficticios y están hardcodeados en `src/data/mock.js`:
- `OPORTUNIDADES`: array con las 16 oportunidades que aparecen en la lista.
- `DETALLE`: objeto con todos los campos de una operación concreta (el chalet de Estepona con "Eddie Brok"). En producción, este objeto vendrá de una llamada a la API usando el id de la oportunidad seleccionada.

Los datos ficticios son deliberados — no son errores ni placeholders olvidados.

## Estructura del proyecto
```
in-oportunidades/
  index.html / package.json / vite.config.js
  src/
    App.jsx            ← estado global, filtrado, layout de 3 columnas
    index.jsx
    theme.js           ← tokens de diseño (colores, etc.) — usar siempre desde aquí
    data/
      mock.js          ← OPORTUNIDADES, DETALLE y constantes
    components/
      Lista.jsx        ← columna central con filas de oportunidades
      SidebarFiltros.jsx ← columna izquierda (desktop) / bottom sheet (mobile)
      PanelDetalle.jsx ← columna derecha (desktop) / bottom sheet (mobile)
```

## Entorno local
- **Mac mini** macOS 13.7, Node v24 (instalado desde nodejs.org — NO usar Homebrew en macOS 13, tarda horas)
- **Arrancar**: `cd ~/Desktop/in-oportunidades && npm run dev`
- **URL local**: http://localhost:5174

## Repo GitHub
- **URL**: https://github.com/carlosperez-glitch/in-oportunidades
- **Rama**: main
- **Token**: guardado aparte (no comitear)

## Flujo de trabajo con Claude
1. Claude edita archivos y los sube a GitHub vía API desde el browser del usuario
2. Usuario hace `git pull` en terminal
3. Vite recarga automáticamente (HMR)

## ⚠️ BUG DE ENCODING UTF-8 — LEER ANTES DE SUBIR ARCHIVOS
`btoa()` en el browser NO maneja caracteres acentuados (á, é, ó, ú, ñ...).
Si se usa directamente, los acentos llegan corruptos a GitHub.

**Solución obligatoria** para subir archivos vía GitHub API desde el browser:
```js
function toBase64UTF8(str) {
  const bytes = new TextEncoder().encode(str);
  let binary = '';
  bytes.forEach(b => binary += String.fromCharCode(b));
  return btoa(binary);
}
// Usar toBase64UTF8(contenido) en lugar de btoa(contenido)
```

Adicionalmente, pasar el contenido como template literal (`...`) en lugar de
construir strings con concatenación, para que los acentos se preserven.

## Decisiones de diseño
- **Todo inline style**: sin CSS externo, sin Tailwind, sin módulos CSS. Decisión deliberada para mantener todo el contexto en un solo archivo por componente.
- **Responsive manual**: el layout cambia entre mobile y desktop con `isDesktop` (detectado en App.jsx). No hay breakpoints de CSS.
- **Campos vacíos invisibles**: el componente `Campo` en PanelDetalle no renderiza nada si `valor` es falsy. Patrón usado en todo el panel de detalle.
