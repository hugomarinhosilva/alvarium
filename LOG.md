# LOG.md

## 2026-04-22 — Project start

### Project name

Defined as **Alvarium**

Reason:

* inspired by the name Álvaro
* represents protection and control
* strong branding potential

---

### Domain decision

Official domain defined as:

https://alvarium.cloud

Reason:

* aligns with hosting and infrastructure context
* stronger enterprise positioning
* better than generic TLDs

---

### Product direction

Alvarium will NOT be a cPanel/WHM clone.

Instead:

* modern hosting platform
* lightweight
* operationally focused

---

### Tech stack

* Next.js
* NestJS
* PostgreSQL
* Redis
* Go (agent)

---

### Architecture

* Core (API + Web)
* Agent (node layer)

---

### License

AGPLv3

---

### UI direction

* SaaS style
* light + dark mode
* minimalistic dashboard
* operational focus

---

### Security strategy

* JWT authentication
* RBAC
* audit logs
* secure agent communication

---

### Initial focus

* project structure
* dashboard UI (mock)
* auth system
* core entities

---

### Vision

* open-source core
* future SaaS model
* strong observability
* automation and intelligence

---

## 2026-04-22 — Monorepo bootstrap

### Initial structure created

* root configured with `pnpm-workspace.yaml`
* `apps/web` created with Next.js + TypeScript
* `apps/api` created with NestJS-style modular bootstrap in TypeScript
* `apps/agent` created with Go bootstrap
* `packages/ui` and `packages/types` added for future shared code

### Scope

* no business rules implemented
* development foundation only
* structure prepared for modular growth

---

## 2026-04-22 — API database foundation

### Backend structure prepared

* Prisma added to `apps/api`
* PostgreSQL configured via `DATABASE_URL`
* initial schema created for `users`, `plans`, `hosting_accounts`, `nodes` and `audit_logs`
* NestJS modules prepared for future domain growth

### Scope

* no complex business rules yet
* database layer separated from domain modules
* ready for future migrations and Prisma client generation
