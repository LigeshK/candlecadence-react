# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite HMR)
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

No test suite is configured.

## Architecture

**Candle Cadence** is a React 19 e-commerce SPA for candles, built with Vite. The stack is:

- **Routing**: React Router v7 — all routes defined in `src/router/router.jsx`, path strings centralized in `src/utility/constants.js` (`ROUTES` object). Always use `ROUTES.*` constants, never hardcode path strings.
- **State management**: Redux Toolkit + React Redux (installed, not yet wired up).
- **Backend**: Firebase (installed, not yet integrated).
- **UI**: Bootstrap 5.3 loaded via CDN in `index.html` (not npm). Bootstrap Icons also from CDN. No CSS modules or Tailwind — use Bootstrap utility classes.
- **Alerts/toasts**: `react-toastify` and `sweetalert2` are available.

**App shell** (`src/App.jsx`): wraps everything in `<BrowserRouter>`, renders `<Header>` / `<main><AppRoutes/></main>` / `<Footer>` with a flex-column full-height layout.

**Current page stubs** (all placeholder content, ready to implement):
- `src/pages/Home.jsx`
- `src/pages/auth/Login.jsx`, `Register.jsx`
- `src/pages/shop/Cart.jsx`
- `src/pages/order/MyOrders.jsx`
- `src/pages/admin/ProductManagement.jsx`, `OrderManagement.jsx`

**Header** (`src/components/layout/Header.jsx`): Bootstrap navbar with links to all routes. Auth state is not yet wired — Login/Sign Up links and the user dropdown are static.

## Key conventions

- JSX files use `.jsx` extension throughout.
- No TypeScript — plain JS/JSX only.
- ES modules (`"type": "module"` in package.json).
- Bootstrap classes handle all layout; avoid inline styles except for one-off pixel values.
