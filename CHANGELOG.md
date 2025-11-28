# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.1.0] - 2025-11-25

### Added
- Sitemap.xml for better SEO and Google Search Console integration
- robots.txt for search engine crawler configuration
- Emoji font support in Tailwind configuration for proper emoji rendering
- Enhanced favicon configuration with multiple icon formats

### Fixed
- Emoji rendering issues (📧, 💼, ⚡) by adding explicit font-family support
- Middleware configuration to exclude sitemap.xml and robots.txt from processing

### Changed
- Updated Tailwind font-family to include emoji fonts (Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol)
- Added inline styles for emoji spans to ensure proper rendering across browsers
## [1.0.0] - 2025-11-21

### Added
- Initial release
- Resume website with Next.js, TypeScript, and TailwindCSS
- Docker support with build script
- GitHub Actions CI/CD pipeline
- Security headers and Content Security Policy
- Unit tests with Vitest
- Comprehensive documentation

## [1.2.0] - 2025-11-27

### Added
- Comprehensive skills section in resume sidebar with organized categories (Cloud & Containerization, Kubernetes Ecosystem, DevOps & CI/CD, Monitoring & Observability, Security & Compliance, System Administration)
- Cache cleanup workflow for GitHub Actions with manual trigger and weekly automatic cleanup schedule
- Docker build test job with artifact sharing between build and test jobs

### Changed
- Enhanced About Me section with specific technical expertise (Kubernetes platform engineering, multi-cloud infrastructure AWS/GCP, GitOps-based deployments, security, compliance, Infrastructure as Code)
- Extended work experience descriptions with detailed technical implementations (KVWL: GitOps workflows, security tools, monitoring; itemis: multi-cloud Kubernetes provisioning)
- Improved skills organization and logical sorting

### Fixed
- Docker build test: Fixed image loading issue by using docker driver instead of docker-container driver
- Docker build test: Improved build performance by sharing build artifacts between jobs
- Release naming: Removed 'v' prefix from release tags (e.g., 1.2.0 instead of v1.2.0)

## [1.5.0] - 2025-11-27

### Changes
- fix: improve Docker build, increase icon opacity, and fix layout issues (7c4aaf2)

## [1.6.0] - 2025-11-28

### Changes
- fix: use docker-container driver for Docker Buildx to support GHA cache (5159334)

## [2.0.0] - 2025-11-28

### Changes
- fix: restore translations and certification links (9461455)

