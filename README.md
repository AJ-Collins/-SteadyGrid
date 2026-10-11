# SteadyGrid — Next.js (App Router) + Postgres

Solar storefront, admin console, and content studio in **one deployment**.
The hostname picks the surface (see `src/middleware.ts`):

| URL (dev)                        | Surface | What lives there |
|----------------------------------|---------|------------------|
| http://localhost:3000            | **web**   | Storefront, shop, cart, checkout, account, auth |
| http://admin.localhost:3000      | **admin** | Dashboard, products, orders, users (login required) |
| http://cms.localhost:3000        | **cms**   | Content blocks, items for sale (login required) |

Production mirrors this with `steadygrid.com`, `admin.steadygrid.com`, `cms.steadygrid.com`.

## Prerequisites

- Node.js 22, npm
- Docker (for Postgres + Redis)
- One line in `/etc/hosts` so the dev subdomains resolve:
  ```
  127.0.0.1 localhost admin.localhost cms.localhost
  ```

## Setup (first time)

```bash
cd steadygrid-next

# 1. Start infrastructure (Postgres :5433, Redis :6379)
docker start steadygrid-pg steadygrid-redis 2>/dev/null || \
  docker run -d --name steadygrid-pg -e POSTGRES_USER=postgres \
    -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=steadygrid -p 5433:5432 postgres:16 && \
  docker run -d --name steadygrid-redis -p 6379:6379 redis:7

# 2. Env + deps + database
cp .env.example .env
npm install
npm run db:migrate   # versioned migrations in prisma/migrations
npm run db:seed      # brands, categories, products, admin user, hero content
```

> Object storage defaults to MinIO (`STORAGE_DRIVER=minio`). If you can't run
> MinIO locally, set `STORAGE_DRIVER=local` in `.env` — same key/URL semantics
> on disk. Only uploads are affected; everything else works either way.

## Run

```bash
npm run dev        # http://localhost:3000
```

Open each domain:

- **Web** — http://localhost:3000 — home, `/shop/batteries`, `/shop/solar-kits`,
  `/shop/brands`, `/shop/our-store`, `/shop/projects`, `/discover-more/about-us`,
  `/discover-more/contact-us`, `/discover-more/our-blog`, `/discover-more/faq`,
  `/cart`, `/checkout`, `/account`, `/auth/login`
- **Admin** — http://admin.localhost:3000/ — dashboard at `/`, then `/products`,
  `/orders`, `/users`. Unauthenticated visits redirect to the surface-local
  login at `/login` (same split-screen design as the storefront, gated to the
  `ADMIN` role) and return via `callbackUrl`. (`/admin/...` URLs 308 to
  canonical root form.)
- **CMS** — http://cms.localhost:3000/ — content overview at `/`, `/products`
  edits the items sold on the site. Same dedicated `/login` (gated to
  `ADMIN` / `MARKETER`).

Seeded login (use it on the surface you want to enter):

- Email `admin@steadygrid.local` · password `Admin123!` (role `ADMIN`)

> Why separate logins per surface? On localhost, browsers won't share cookies
> across subdomains, so a web-host login can never reach the admin host in dev.
> Each surface logs in on its own host. In production, `SITE_COOKIE_DOMAIN`
> shares one login everywhere.

## Production

```bash
npm run build
npm run start      # serves all three surfaces on one port
```

1. DNS: `A` records for `steadygrid.com`, `admin.steadygrid.com`, `cms.steadygrid.com`
   (a wildcard `*.steadygrid.com` also covers it). Optional nginx edge in
   `infrastructure/nginx/` + `docker-compose.yml`.
2. Env to change: `DATABASE_URL`, `AUTH_SECRET` (32+ chars), `SITE_APEX_DOMAIN`,
   `SITE_COOKIE_DOMAIN=.steadygrid.com` (shares the login across subdomains),
   `TRUSTED_PROXIES` (required behind nginx/CDN for correct rate-limit keys),
   `REDIS_URL`, MinIO `MINIO_*` (+ `MINIO_SECRET_KEY`).

## API

One shared API on every host (`/api/*`), single JSON envelope:

- Success → `{ success: true, data, meta? }` (`meta` = `{ page, pageSize, total, totalPages }`)
- Failure → `{ success: false, error: { code, message, retryAfterSeconds? } }`

Auth is cookie-only (short-lived access JWT + rotating refresh token, both
`HttpOnly` — nothing in `localStorage`). Rate limits are named in
`src/server/rate-limit/limiters.ts`; 429s carry `Retry-After`.

## Roles & permissions

Single matrix in `src/server/access/permissions.ts` enforced at three depths:
edge (session presence), controller (`requirePermission`), and page layout
(`console:admin` / `console:cms`).

| Capability | `ADMIN` | `MARKETER` | `CUSTOMER` |
|---|---|---|---|
| Admin console (`console:admin`, dashboard, products, orders, users) | ✅ | — | — |
| Catalog / order reads, user reads, stats | ✅ | — | — |
| Catalog writes (`catalog:write`) | ✅ | — | — |
| Content studio (`console:cms`, `content:write`, uploads) | ✅ | ✅ | — |
| Buy + read catalog/content (`orders:create`) | ✅ | ✅ | ✅ |
| Guest checkout (no session) | ✅ (public `/api/orders` POST) | | |

Surfaces log in separately: `/login` on each host, role-gated on submit
(admin needs `ADMIN`, CMS needs `ADMIN`/`MARKETER`).

## Useful commands

```bash
npm run dev          # dev server with subdomain routing
npm run build        # production build (runs prisma generate)
npm test             # vitest unit/integration (needs DATABASE_URL for DB tests)
npm run test:e2e     # playwright (needs dev server)
npm run db:migrate   # prisma migrate dev (creates versioned SQL)
npm run db:seed      # seed demo catalog + admin user
```
