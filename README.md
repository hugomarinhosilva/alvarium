# Alvarium

**Built to protect. Designed to perform.**

Alvarium is a modern hosting control platform designed to simplify, secure and operate infrastructure with intelligence.

Inspired by the meaning of the name **Álvaro** — a guardian — Alvarium was created with a clear purpose: protect servers, data and customers while delivering a clean and modern experience.

---

## 🚀 Vision

Alvarium is **not a clone of cPanel/WHM**.

It is a new generation hosting platform focused on what actually matters:

* Hosting accounts
* Domains and websites
* Email management
* Databases
* SSL automation
* Backups
* Monitoring
* Alerts
* Security and operational visibility

---

## 🎯 Goals

* Replace legacy hosting panels with a modern alternative
* Provide a clean and intuitive user experience
* Deliver real operational insights for hosting providers
* Be lightweight, fast and secure by default
* Build a strong open-source core (AGPLv3)

---

## 🧠 Core Principles

* Simplicity over complexity
* Performance over legacy
* Security by default
* Observability built-in
* API-first architecture

---

## 🏗️ Architecture

### Core (Control Plane)

* Next.js (Frontend)
* NestJS (Backend API)
* PostgreSQL
* Redis

### Agent (Node Layer)

* Go-based service running on servers
* Responsible for:

  * provisioning
  * SSL
  * metrics
  * system operations

---

## 🖥️ Supported Systems (initial)

* Ubuntu 22.04 / 24.04
* AlmaLinux 9

---

## ⚙️ Installation (future goal)

### Core

```bash
curl -fsSL https://get.alvarium.io | bash
```

### Agent

```bash
curl -fsSL https://get.alvarium.io/agent | bash
```

---

## 🔐 Security Philosophy

Security is not optional.

Alvarium is designed to include:

* authentication and RBAC
* audit logs for all critical actions
* agent-to-core secure communication
* operational alerts (spam, abuse, disk, etc.)
* SSL automation by default

---

## 📊 Product Differentiators

Alvarium focuses on real-world hosting problems:

* spam and abuse detection
* blacklist monitoring
* high connection alerts
* hot account detection
* disk and inode visibility
* operational intelligence dashboards

---

## 🎨 UI Direction

* Modern SaaS style
* Light and Dark mode
* Black & white base with accent color
* Clean cards and dashboards
* Minimalist and operational

---

## 📄 License

AGPLv3

---

## 🤝 Contributing

Contributions are welcome.

Please read AGENTS.md before contributing.

---

## 👨‍💻 Author

**Hugo Marinho**

DevOps • Cloud • Infrastructure • Systems Engineering

Creator and maintainer of Alvarium.

🔗 GitHub: https://github.com/hugomarinhosilva  
🔗 LinkedIn: https://www.linkedin.com/in/hugomarinhosilva/
