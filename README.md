# Candle Cadence

A modern e-commerce web app for browsing and purchasing candles, built with React and Firebase.

## What this project is

Candle Cadence is a full-stack React SPA where customers can browse products, manage their cart, place orders, and track them — while admins can manage the product catalog and fulfil orders. Authentication is handled through Firebase.

> This project is in early development. Features listed below reflect the planned scope and will be updated as they are completed.

## Planned Features

- **Browse & Shop** — product listing with search and filtering
- **Cart** — add, remove, and adjust quantities before checkout
- **Authentication** — sign up and log in with email/password via Firebase
- **My Orders** — view order history and status for logged-in customers
- **Admin Panel** — manage products (add, edit, delete) and process orders

## Tech Stack

| Layer | Choice |
|---|---|
| UI Framework | React 19 |
| Build Tool | Vite |
| Routing | React Router v7 |
| State Management | Redux Toolkit |
| Backend / Auth / DB | Firebase |
| Styling | Bootstrap 5.3 + Bootstrap Icons |
| Notifications | React Toastify, SweetAlert2 |

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app runs at `http://localhost:5173` by default.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
  components/layout/   # Header, Footer
  pages/
    auth/              # Login, Register
    shop/              # Cart
    order/             # My Orders
    admin/             # Product & Order management
  router/              # Route definitions
  utility/             # Shared constants (route paths, etc.)
```

## Current Status

| Area | Status |
|---|---|
| Routing & layout shell | Done |
| Firebase integration | Planned |
| Redux store setup | Planned |
| Authentication (Login / Register) | Planned |
| Product listing | Planned |
| Cart | Planned |
| Checkout & Orders | Planned |
| Admin panel | Planned |
