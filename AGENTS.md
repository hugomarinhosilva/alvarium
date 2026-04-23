# AGENTS.md

## Project

Alvarium

## Official Domain

https://alvarium.cloud

## Description

Alvarium is a modern cloud hosting control platform designed as a lightweight, secure and operationally useful alternative to legacy panels like cPanel/WHM.

The system should reflect the idea of a "guardian" — protecting infrastructure and providing clarity to operators.

---

## Development Principles

* Keep architecture modular
* Avoid legacy complexity
* Prioritize performance
* Always think about security
* Prefer explicit over magic behavior
* Maintain clean and readable code

---

## Stack

Frontend:

* Next.js
* TypeScript
* Tailwind
* shadcn/ui

Backend:

* NestJS
* PostgreSQL
* Prisma
* Redis
* BullMQ

Agent:

* Go

---

## Project Structure

* apps/web → frontend
* apps/api → backend
* apps/agent → node agent
* packages/ui → shared UI
* packages/types → shared types

---

## MVP Priorities

1. Auth (JWT)
2. Users
3. Roles (RBAC)
4. Plans
5. Hosting Accounts
6. Nodes
7. Audit Logs
8. Dashboard (mocked data first)

---

## Security Rules

* All endpoints must be protected
* Use JWT authentication
* Implement RBAC
* Log critical actions (audit_logs)
* Validate all inputs
* Agent must authenticate with token

---

## Dashboard Rules

Dashboard must show:

* system health
* critical alerts
* node status
* disk usage
* hot accounts
* email activity

It should answer:

* what is wrong?
* where is the problem?
* who is causing it?

---

## Agent Rules

The agent must:

* be lightweight
* run securely
* authenticate to API
* send heartbeat
* execute commands safely

---

## Installation Philosophy

Core:
https://get.alvarium.cloud

Agent:
https://get.alvarium.cloud/agent

---

## Coding Style

* Use TypeScript strictly
* Keep functions small
* Avoid large files
* Use clear naming
* Separate concerns by module

---

## Important

Do not build a cPanel clone.

Build a modern hosting platform focused on:

* simplicity
* performance
* security
* real operational needs
