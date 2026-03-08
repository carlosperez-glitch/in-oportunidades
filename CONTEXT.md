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

## Jerarquía visual en PanelDetalle

Hay tres niveles de texto, y la elección correcta es semántica:

| Elemento | Cuándo usarlo | Aspecto |
|---|---|---|
| `<SecTitle>` | Nombre de una **sección de navegación** (las del dropdown). Se ha eliminado de dentro del contenido porque el dropdown ya cumple esa función. | 11px, uppercase, bold, #374151 |
| `<Lbl>` | Etiqueta de un **campo o grupo de campos** dentro de una sección. La mayoría de textos descriptivos son esto. | 12px, uppercase, #737373 |
| Texto de campo | El **valor** de un campo. Usa `<Txt>` para párrafos o un `<div>` con fontSize 14, color #374151. | 14px, #374151 |

**Regla práctica**: si hay un valor debajo, es un `<Lbl>`. Si es el título de un bloque navegable, es `<SecTitle>` (y probablemente ya está en el dropdown, así que no hace falta repetirlo dentro del contenido).

## Patrón: campos del formulario de gestor vs. vista del inversor

Algunos campos que el gestor rellena **no se muestran como etiquetas individuales** en la vista del inversor — se presentan condensados en texto legible o se usan solo internamente.

**Regla**: el lugar canónico para los labels de formulario y la nota de visibilidad es `src/data/mock.js`, en el comentario encima de cada objeto `pasoN`. No duplicar aquí.

### Principio general por paso

| Paso | Qué ve el inversor | Qué queda interno |
|------|--------------------|-------------------|
| paso0 | Una línea con superficie, tipo, localidad y cargas | referencia catastral, cp, municipio, estado de conservación, habitaciones/baños/extras (aparecen en "Características") |
| paso1 | Comparables: agencia, precio, dirección, teléfono | campos de cálculo interno del gestor |
| paso2 | Precio de compra acordado, fecha, condiciones | datos de due diligence internos |
| paso3 | Conclusión de precio de venta | cálculos intermedios del gestor |
| paso4 | Precio de venta definitivo y justificación | —  |

### Cuándo un campo es "interno"

Un campo es interno cuando:
- El usuario (inversor) **nunca necesita verlo** para tomar la decisión de inversión
- Solo lo usa el sistema para **calcular** otro valor que sí se muestra
- Es un dato **administrativo** (referencia catastral, CP) que aparecerá en documentos pero no en la ficha
- Lo usa el gestor para **su propio seguimiento** pero no aporta transparencia al inversor

### Campos que sí se preguntan al LLM en conversaciones internas

Cuando se pida a un LLM que genere o valide datos de una oportunidad, se le pueden pasar todos los campos del mock incluidos los internos. El LLM debe conocerlos para:
- Validar coherencia (ej. que la superficie construida no supere la del terreno)
- Generar texto condensado para la vista del inversor
- Calcular ROI y escenarios

## Lecciones aprendidas (bugs resueltos)

### Encoding UTF-8 al subir archivos via GitHub API
- **NUNCA usar `btoa(string)`** — corrompe caracteres UTF-8 (á, é, ó, ─, etc.)
- **SIEMPRE usar FileReader + Blob:**
  ```js
  const blob = new Blob([txt], { type: 'text/plain' });
  const b64 = await new Promise((res, rej) => {
    const fr = new FileReader();
    fr.onload = () => res(fr.result.split(',')[1]);
    fr.onerror = rej;
    fr.readAsDataURL(blob);
  });
  ```

### git pull no actualiza el archivo local
- Si Vite sigue fallando tras `git pull`, usar:
  ```
  git fetch origin && git reset --hard origin/main
  ```
- Si Vite sigue cacheado tras reset: `rm -rf node_modules/.vite && npm run dev`
- Si el terminal queda bloqueado (Vite corriendo): cerrar y abrir terminal nuevo

### Caché de Vite
- El error "Failed to parse source for import analysis" puede ser caché aunque el archivo local esté correcto
- Limpiar siempre con `rm -rf node_modules/.vite` antes de reiniciar

### Punto y coma suelto en JSX (`;` solo en una línea)
- Un `;` en una línea dentro de una función de componente React genera un nodo vacío visible
- Síntoma: aparece un "mini apartado" o div vacío antes del contenido esperado
- Buscar con: `lines.findIndex(l => l.trim() === ';')`

### Llaves desbalanceadas en mock.js al editar con str_replace via API
- Tras cada edición de mock.js, verificar balance de llaves:
  ```js
  let depth = 0;
  for (const c of txt) { if (c==='{') depth++; else if (c==='}') depth--; }
  // debe ser 0
  ```
- El error "Expected X but found Y" de esbuild apunta a la línea donde se detecta el desbalance,
  no necesariamente donde está el problema real — buscar hacia arriba
