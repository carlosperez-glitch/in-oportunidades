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


---

## Procedimiento de trabajo con Claude — aprendizajes

### Flujo óptimo para editar un archivo (todo en UNA llamada javascript_tool)
1. GET /contents/{path} — obtiene content (base64) + SHA en una sola llamada
2. Decodificar UTF-8 correctamente (ver snippet abajo)
3. Modificar en JS (split / filter / replace)
4. Verificar resultado con .filter() antes de subir
5. Recodificar y hacer PUT con el SHA obtenido en paso 1

Evitar: usar bash_tool para leer archivos, múltiples roundtrips, asumir que /home/claude/ está sincronizado.

### Encoding UTF-8 — CRÍTICO (sin esto se corrompen ó, é, ñ...)
Decode: const b=Uint8Array.from(atob(s.replace(/\n/g,'')),c=>c.charCodeAt(0)); new TextDecoder('utf-8').decode(b)
Encode: const e=new TextEncoder().encode(s); let r=''; e.forEach(b=>r+=String.fromCharCode(b)); btoa(r)

### Regla de oro al inicio de cada sesión
Hacer siempre GET del archivo desde GitHub para obtener contenido real y SHA actual.
No asumir que /home/claude/ está sincronizado (puede ser de sesión anterior).
Si el contexto compactado dice que un cambio "ya estaba hecho", verificarlo con GET.

### Por qué las sesiones se alargan
Casi siempre por re-descubrir el estado real del código al inicio. Solución: GET antes de tocar nada.

### Credenciales
Token GitHub: ver en Keychain del Mac (no guardar en el repo).
Repo: carlosperez-glitch/in-oportunidades — rama: main — URL local: http://localhost:5174
