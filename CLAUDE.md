# IN — Oportunidades

## What is this
React SPA for a real estate investment community ("Programa IN"). Members of a real estate investment training program publish and browse investment opportunities in Spanish properties. Any user can be a **gestor** (manages their own deals) or **inversor** (participates in others' deals) — the same person can hold both roles simultaneously across different deals.

## Tech stack
- **React 18** + **Vite 4** — no TypeScript, no framework
- **All inline styles** — no CSS files, no Tailwind, no CSS modules. This is intentional.
- Design tokens live in `src/theme.js` — always import `colors`, `font`, `radius`, `spacing` from there
- No state management library — plain `useState`/`useEffect`
- No router — single-page with conditional rendering
- Mock data only — no backend, no API calls yet

## Project structure
```
src/
  index.jsx              Entry point (ReactDOM.createRoot)
  App.jsx                Root component: nav bar, 3-column layout, filtering, responsive logic
  theme.js               Design tokens (colors, font sizes, radius, spacing, estadoColor map)
  data/
    mock.js              OPORTUNIDADES (list), DETALLE (single deal detail), constants
  components/
    Lista.jsx            Center column — grid of opportunity rows
    SidebarFiltros.jsx   Left column (desktop) / bottom sheet (mobile) — filters
    PanelDetalle.jsx     Right column (desktop) / bottom sheet (mobile) — deal detail with sections
```

## Key patterns

### Responsive
- `isDesktop` state in App.jsx (breakpoint: 768px) — no CSS media queries
- Desktop: 3-column flex layout (sidebar | list | detail panel)
- Mobile: list only, filters and detail are bottom sheets

### Sidebar and detail are mutually exclusive
Selecting an opportunity closes the sidebar; opening the sidebar clears the selection.

### PanelDetalle sections
Navigated via a dropdown (SECCIONES array). Three text hierarchy levels:

| Element | When to use | Style |
|---|---|---|
| `<SecTitle>` | Section heading (matches dropdown navigation items) | 11px, uppercase, bold, #374151 |
| `<Lbl>` | Field label or group label within a section | 12px, uppercase, #737373 |
| `<Txt>` / plain div | Field value (text content) | 14px, #374151 |

**Rule**: if there's a value underneath, it's a `<Lbl>`. If it's a navigable block title, it's `<SecTitle>` (and it's probably already in the dropdown, so don't repeat it).

### Campo component
In PanelDetalle, empty/falsy values render nothing — fields are invisible when blank.

### Gestor form fields vs. investor view
Some fields the gestor fills in are **not shown individually** to the investor — they're condensed into readable text or kept internal. The canonical place for form labels and visibility notes is `src/data/mock.js`, in the comments above each `pasoN` object.

### Mock data
- `OPORTUNIDADES`: array of ~46 deals (id, titulo, gestor, estrategia, roi, meses, tipo, estado)
- `DETALLE`: single detailed deal object (used for all selections while mocks are in place)
- Fictional data is deliberate — not placeholder bugs

## Business context

### Operation types
- **CA-Venta (V)**: Buy + add value + sell to third party
- **CA-Alquiler (A)**: Buy + add value + rent
- **IB**: Investment with gestor + investor capital under a CCP (profit-sharing contract)
- **IB+S**: IB with additional guarantee or insurance
- **JV**: Joint Venture — temporary partnership between gestor and investor
- **JV W**: Joint Venture with Willington (program entity) participation

### Operation lifecycle (estados)
1. **Tanteo** — gestor detects an asset and publishes the opportunity
2. **Capitalizando** — raising capital from investors (may show `porCapitalizar` amount)
3. **En marcha** — CCP signed, asset purchased, reform/commercialization underway
4. **Finalizada** — asset sold/rented, profits distributed

### Precio de venta — the 4 steps
The detail panel has a "Precio de venta" section with 4 tabs:
1. **Agencias (paso1)**: valuations from local real estate agencies
2. **Anuncios (paso2)**: comparable listings on portals (Idealista, etc.)
3. **Conclusión (paso3)**: reasoned target price
4. **Seguimiento (paso4)**: listing performance (visits, contacts, price drops) and interested buyers

### Key vocabulary
- **Aportación de valor**: reform/improvements that increase asset price
- **CCP**: Contrato de Cuentas en Participación — legal contract governing gestor-investor relationship
- **Tanteo y retracto**: government's preferential acquisition right (applies in some Spanish zones)

## Dev environment
- macOS 13.7, Mac mini, Node v24 (installed from nodejs.org — not Homebrew)
- `npm run dev` → http://localhost:5174
- Clear Vite cache if stale: `rm -rf node_modules/.vite && npm run dev`
- If Vite errors persist after git pull: `git fetch origin && git reset --hard origin/main`, then Ctrl+C Vite, clear cache, restart

## Conventions
- **Commit and push after every significant change** — don't accumulate uncommitted work. Commit as soon as a fix or feature is verified, then push to GitHub.
- Use `var` (not `const`/`let`) and `function` keyword — matches existing code style
- Use `Object.assign({}, ...)` instead of spread — matches existing code style
- No arrow functions — existing code uses `function` expressions throughout
- Keep components in single files with inline styles
- Spanish UI text, English code/comments are acceptable
- Commit messages in English

## Common pitfalls
- **UTF-8 encoding**: if uploading files via GitHub API from browser, never use raw `btoa()` — it corrupts accented characters. Use `TextEncoder`/`FileReader+Blob` approach.
- **JSX div balance**: PanelDetalle is large — always verify `<div>`/`</div>` balance after edits. A stray `</div>` can close the scroll container early. Use the diagnostic snippet from CONTEXT.md to check scrollRef height vs scrollHeight in browser console.
- **Vite cache**: "Failed to parse source" errors may persist after fixing code — clear `node_modules/.vite`.
- **Semicolons in JSX**: a lone `;` on a line inside a component creates a visible empty node.
- **Brace balance in mock.js**: after edits, verify `{` and `}` counts match. esbuild error line numbers point to where the imbalance is *detected*, not where the bug is — search upward.
- **Multi-element JSX lines**: lines like `<div><Lbl>X</Lbl></div><div style=...>` are traps — the first `</div>` can close a parent early. Ensure each line has balanced open/close div counts.

## GitHub
- Repo: `carlosperez-glitch/in-oportunidades`
- Branch: `main`
- No secrets in the repo — token stored separately
