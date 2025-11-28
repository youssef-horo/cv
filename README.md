# Youssef Horo - Resume Website

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyoussef-horo%2Fwebsite) [![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/) [![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?logo=typescript)](https://www.typescriptlang.org/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/) [![npm](https://img.shields.io/badge/npm-9+-CB3837?logo=npm)](https://www.npmjs.com/) [![Docker](https://img.shields.io/badge/Docker-ready-2496ED?logo=docker)](https://www.docker.com/)

Personal resume website built with Next.js, TypeScript, and TailwindCSS – including a bilingual profile page and a print‑optimized German CV.

## ✨ Features

- **Bilingual resume**: English and German content with a language toggle in the header (preference is stored in `localStorage`).
- **Main profile page**: `src/app/page.tsx` renders About, Work Experience, Selected Projects, Skills, Certifications, and Education.
- **German CV page**: `/cv` uses the German translation (`translations.de`) and a compact two‑column A4 layout.
- **PDF export**: On `/cv`, the **“Als PDF speichern”** button creates a downloadable PDF directly in the browser using `html2pdf.js`.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests once
npm run test:run

# Run tests with coverage
npm run test:coverage
```

For more details, see [Development Guide](docs/development.md).

## 🐳 Docker

```bash
# Build image
./build.sh

# Run with docker compose
docker compose up -d
```

For detailed Docker setup and deployment instructions, see [Deployment Guide](docs/deployment.md).

## 🔒 Security

The website implements comprehensive security measures including security headers, Content Security Policy, and HTTPS enforcement.

**Security Scan Results:**
- **GitHub Security Tab** → Code scanning (Trivy results)
- **GitHub Security Tab** → Dependabot alerts (npm vulnerabilities)
- **GitHub Actions** → Security Audit job (detailed logs)

For detailed security information, see [Security Guide](docs/security.md).
For test and security results locations, see [Testing and Security Results](docs/testing-and-security.md).

## 📚 Documentation

- [Development Guide](docs/development.md) - Testing, linting, and development setup
- [Deployment Guide](docs/deployment.md) - Docker, Nginx Proxy Manager, and CI/CD
- [Security Guide](docs/security.md) - Security measures and best practices
- [Testing and Security Results](docs/testing-and-security.md) - Where to find test and security scan results

## 📝 Editing Content

The resume content and all sections are in `src/app/page.tsx`.

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [TailwindCSS](https://tailwindcss.com/)
- **Testing:** [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/react)
- **Containerization:** [Docker](https://www.docker.com/)

---
