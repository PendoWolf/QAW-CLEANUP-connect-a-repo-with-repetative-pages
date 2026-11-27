# QAWolf Outdoor Shop (repetitive pages)

A small React + Express fixture for testing how Novus maps an app whose pages repeat.
Template repo: `PendoWolf/qawolf-pendo-repetitive-pages`.

## Pages

| Route | What it is |
| --- | --- |
| `/` | Home |
| `/products` | Product list linking to all 20 products |
| `/products/:productId` | **One templated route rendered for 20 items** (`/products/1` … `/products/20`): same layout, different data from `web/src/data/products.ts` |
| `/help/shipping`, `/help/returns`, `/help/payments`, `/help/warranty` | **Near-duplicate static pages**: four separate components with the same structure and small text differences |
| `*` | Not found |

## Structure

- `server/` — Express server that serves the built SPA (with a fallback to `index.html`) and `GET /api/health`, port **3001**
- `web/` — Vite + React + TS + React Router UI, port **5173**

## Run

```bash
npm run install:all   # installs root, server, and web deps
npm run dev           # runs server + web together
```

Deploy (what QA Wolf's `deployRepo()` runs):

```bash
npm --prefix web install && npm --prefix web run build && npm --prefix server install
npm --prefix server start
```

## Pendo (installed by Novus)

`web/index.html` carries the Pendo install snippet and `web/src/main.tsx` calls
`pendo.initialize`, as in `PendoWolf/qawolf-pendo-test-0`. Load the repo into **Novus**, which
scans it and opens a PR that sets up the agent. The product page's "Add to cart" button calls
`window.pendo.track("shop-add-to-cart")` through `web/src/track.ts` (a no-op until the agent is present).
