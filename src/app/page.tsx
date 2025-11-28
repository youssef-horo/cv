"use client";

import { useEffect, useState } from 'react';

export const translations = {
  en: {
    hero: {
      badge: 'Building resilient cloud platforms',
      role: 'DevOps Engineer · AI Cloud Platforms',
      location: '@BITMARCK · Bochum, North Rhine-Westphalia, Germany',
    },
    about: [
      'Experienced Cloud and DevOps Engineer specializing in Kubernetes platform engineering, multi-cloud infrastructure (AWS, GCP), and GitOps-based deployments. Strong focus on security, compliance, and Infrastructure as Code to build scalable and reliable cloud-native solutions.',
      'Team player with sharp attention to detail, ownership mentality, and openness to adopt new technologies when it helps the platform and the product teams.',
    ],
    sections: {
      about: 'About Me',
      experience: 'Work Experience',
      projects: 'Selected Projects',
      skills: 'Skills',
      certifications: 'Certifications',
      education: 'Education',
    },
    experience: [
      {
        role: 'DevOps Engineer AI Cloud',
        company: 'BITMARCK',
        timeframe: 'October 2024 - Present · Essen, North Rhine-Westphalia',
        bullets: [],
        highlight: undefined,
      },
      {
        role: 'Kubernetes Platform Engineer',
        company: 'Kassenärztliche Vereinigung Westfalen-Lippe (KVWL)',
        timeframe: 'January 2024 - September 2025 · Dortmund, North Rhine-Westphalia',
        bullets: [
          'Provisioned and managed Kubernetes clusters on VMware Tanzu',
          'Operated GitOps workflows with FluxCD for automated application deployments',
          'Implemented security controls (Trivy Operator, Kyverno, Antrea Zero-Trust Policies)',
          'Configured cert-manager for automated SSL/TLS lifecycle',
          'Introduced centralized secrets management with HashiCorp Vault and guided a co-op student through Terraform-based installation and configuration',
          'Installed External Secrets on every cluster and migrated application secrets into Vault to standardize compliance',
          'Built monitoring and alerting with the Grafana-Prometheus stack',
          'Handled IT security requirements and compliance reviews',
          'Maintained core Kubernetes platform services for developers',
        ],
        highlight: 'Highlight projects: Healthcare Multi-Tenant Kubernetes Platform & Vault-based Secrets Modernization (see “Selected Projects”).',
      },
      {
        role: 'System Engineer',
        company: 'itemis AG',
        timeframe: 'July 2022 - December 2023 · Lünen, North Rhine-Westphalia',
        bullets: [
          'Provisioned Kubernetes clusters across AWS (EKS), GCP (GKE), and Azure (AKS)',
          'Implemented Infrastructure as Code using Terraform and AWS CDK',
          'Deployed bespoke Kubernetes clusters for Workadventure on GCP',
          'Created AWS CDK deployments for Nexus Repository Manager',
          'Maintained GitOps workflows via FluxCD',
          'Extended Ansible repositories for infrastructure automation',
          'Maintained GitLab CI/CD pipelines',
          'Handled Linux system administration (Debian, CentOS)',
          'Resolved incidents and supported customers',
        ],
        highlight: 'Highlight project: Multi-Cloud Kubernetes Provisioning (see “Selected Projects”).',
      },
      {
        role: 'System Engineer',
        company: 'meap GmbH',
        timeframe: 'October 2022 - March 2023 · Bochum, North Rhine-Westphalia',
        bullets: [
          'Automated infrastructure with Ansible (server provisioning, process automation)',
          'Set up and operated Graylog for centralized logging',
          'Delivered customer hosting services (web, email, DNS, domains)',
          'Renewed internal and external SSL certificates',
          'Maintained monitoring, backups, and scheduled jobs',
          'Deployed VoIP systems for customers',
          'Provided first-level support for internal staff and customers',
        ],
        highlight: undefined,
      },
      {
        role: 'IT Support Engineer',
        company: 'Computacenter',
        timeframe: 'January 2018 - June 2020 · Dortmund, North Rhine-Westphalia',
        bullets: [
          'Linux system administration and troubleshooting (Debian, Ubuntu, CentOS)',
          'Website maintenance and support',
          'DNS zone management',
          'Incident resolution and ticket handling',
          'Network troubleshooting and configuration',
        ],
        highlight: undefined,
      },
    ],
    projects: [
      {
        title: 'Vault-based Secrets Modernization',
        context: 'Healthcare platform · 2024',
        bullets: [
          'Mentored a dual-study student to automate HashiCorp Vault deployment via Terraform modules',
          'Rolled out External Secrets on every Kubernetes cluster and wired it to Vault',
          'Migrated all application secrets into Vault to centralize compliance and auditing',
        ],
      },
      {
        title: 'Healthcare Multi-Tenant Kubernetes Platform',
        context: 'Regional medical associations · 2024/25',
        bullets: [
          'Provisioned two VMware Tanzu clusters (DMZ + internal) with GitOps deployment via FluxCD',
          'Built a security stack with Kyverno, Trivy Operator, External Secrets, and Antrea zero-trust policies',
          'Delivered the platform in sync with the regulatory go-live for three public healthcare associations',
        ],
      },
      {
        title: 'Multi-Cloud Kubernetes Provisioning',
        context: 'Technology consulting company · 2022/23',
        bullets: [
          'Built comparable clusters on AWS EKS, GCP GKE, and Azure AKS to validate the product across providers',
          'Automated deployments with Terraform & AWS CDK and standardized ingress controllers',
          'Documented differences (storage, networking, cost) to guide future customer rollouts',
        ],
      },
    ],
    skills: [
      {
        title: 'Cloud & Containerization',
        items: [
          'Kubernetes, Docker',
          'AWS (EKS), GCP (GKE)',
          'VMware Tanzu',
          'Infrastructure as Code (Terraform, AWS CDK)',
          'Container Security Scanning',
        ],
      },
      {
        title: 'Kubernetes Ecosystem',
        items: ['Helm', 'Ingress Controllers', 'cert-manager, External-DNS', 'External Secrets Operator', 'Kyverno, Antrea'],
      },
      {
        title: 'DevOps & CI/CD',
        items: ['GitOps (FluxCD, ArgoCD)', 'GitLab CI', 'Ansible'],
      },
      {
        title: 'Monitoring & Observability',
        items: ['Grafana, Prometheus', 'Log Management (Loki, Graylog)'],
      },
      {
        title: 'Security & Compliance',
        items: ['IT Security Requirements', 'Compliance Standards', 'Zero-Trust Network Policies', 'Policy Enforcement'],
      },
      {
        title: 'System Administration',
        items: ['Linux (Debian, Ubuntu, CentOS)', 'Network Troubleshooting', 'DNS Management', 'SSL/TLS Certificate Management'],
      },
    ],
    certifications: [
      {
        label: 'Kubernetes Administration',
        href: 'https://www.credly.com/badges/3cddf4ce-ba97-45b0-b9b3-7751335473e2/linked_in',
      },
      {
        label: 'Microsoft Certified: Azure Administrator Associate',
        href: 'https://learn.microsoft.com/api/credentials/share/en-us/youssefhoro-9487/9CDD052E32E58E7C?sharingId',
      },
      {
        label: 'AWS Certified SysOps Administrator · Associate',
        href: 'https://www.credly.com/badges/4e20ea3b-a1eb-4177-80db-9c94495e08b2/linked_in_profile',
      },
      {
        label: 'LPIC-2 · Certified Linux Engineer',
        href: 'https://cs.lpi.org/caf/Xamman/certification/verify/LPI000506038/pbmcysu5da',
      },
      {
        label: 'LPIC-1 · Certified Linux Administrator',
        href: 'https://cs.lpi.org/caf/Xamman/certification/verify/LPI000506038/pbmcysu5da',
      },
    ],
    education: {
      degree: 'Mathematics',
      school: 'Ruhr-Universität Bochum',
      period: 'September 2016 - March 2019',
    },
  },
  de: {
    hero: {
      badge: 'Resiliente Cloud-Plattformen bauen',
      role: 'DevOps Engineer · AI Cloud Platformen',
      location: '@BITMARCK · Bochum, Nordrhein-Westfalen, Deutschland',
    },
    about: [
      'Cloud- und DevOps-Engineer mit Fokus auf Kubernetes-Plattformen, Multi-Cloud-Infrastruktur (AWS, GCP) und GitOps-Deployments. Hoher Anspruch an Security, Compliance und Infrastructure as Code, um stabile und skalierbare Plattformen zu liefern.',
      'Teamplayer mit Blick fürs Detail, Verantwortungsbewusstsein und der Bereitschaft, neue Technologien einzusetzen, wenn sie Entwicklerteams und Produkte voranbringen.',
    ],
    sections: {
      about: 'Über mich',
      experience: 'Berufserfahrung',
      projects: 'Ausgewählte Projekte',
      skills: 'Skills',
      certifications: 'Zertifizierungen',
      education: 'Ausbildung',
    },
    experience: [
      {
        role: 'DevOps Engineer AI Cloud',
        company: 'BITMARCK',
        timeframe: 'Oktober 2024 - heute · Essen, Nordrhein-Westfalen',
        bullets: [],
        highlight: undefined,
      },
      {
        role: 'Kubernetes Platform Engineer',
        company: 'Kassenärztliche Vereinigung Westfalen-Lippe (KVWL)',
        timeframe: 'Januar 2024 - September 2025 · Dortmund, Nordrhein-Westfalen',
        bullets: [
          'Provisionierung und Betrieb von Kubernetes-Clustern auf VMware Tanzu',
          'GitOps-Automatisierung mit FluxCD für wiederholbare Deployments',
          'Security-Tooling mit Trivy Operator, Kyverno und Antrea Zero-Trust Policies',
          'cert-manager für automatisiertes SSL/TLS-Zertifikatsmanagement',
          'External-DNS und External Secrets Operator für sichere Automatisierung',
          'HashiCorp Vault mit Terraform eingeführt und einen dualen Studenten bei Installation und Konfiguration begleitet',
          'External Secrets auf allen Clustern ausgerollt und Applikations-Secrets nach Vault migriert',
          'Monitoring & Alerting mit Grafana-Prometheus-Stack',
          'Begleitung von IT-Security- und Compliance-Anforderungen',
          'Betrieb und Wartung der Kubernetes-Basiskomponenten',
        ],
        highlight: 'Leuchtturmprojekte: Healthcare Multi-Tenant Kubernetes Platform & Vault-basierte Secrets-Modernisierung (siehe „Ausgewählte Projekte“).',
      },
      {
        role: 'System Engineer',
        company: 'itemis AG',
        timeframe: 'Juli 2022 - Dezember 2023 · Lünen, Nordrhein-Westfalen',
        bullets: [
          'Kubernetes-Cluster in AWS (EKS), GCP (GKE) und Azure (AKS) aufgesetzt',
          'Infrastructure as Code mit Terraform und AWS CDK',
          'Workadventure-spezifische Cluster in GCP automatisiert bereitgestellt',
          'AWS-CDK-Umgebungen für Nexus Repository Manager erstellt',
          'GitOps mit FluxCD betrieben',
          'Multi-Cloud-Administration (AWS, GCP)',
          'Ansible-Repositories für Automatisierung erweitert',
          'GitLab CI/CD gepflegt',
          'Linux-Systemadministration (Debian, CentOS)',
          'Incident- und Ticketbearbeitung für Kunden',
        ],
        highlight: 'Leuchtturmprojekt: Multi-Cloud Kubernetes Provisioning (siehe „Ausgewählte Projekte“).',
      },
      {
        role: 'System Engineer',
        company: 'meap GmbH',
        timeframe: 'Oktober 2022 - März 2023 · Bochum, Nordrhein-Westfalen',
        bullets: [
          'Infrastruktur-Automatisierung mit Ansible (Provisionierung, Prozesse)',
          'Aufbau und Betrieb von Graylog',
          'Hosting-Dienstleistungen (Web, E-Mail, DNS, Domains)',
          'Verwaltung interner und externer SSL-Zertifikate',
          'Monitoring, Backups und Scheduled Jobs betreut',
          'VoIP-Lösungen für Kunden ausgerollt',
          'First-Level-Support für interne Teams und Kunden',
        ],
        highlight: undefined,
      },
      {
        role: 'IT Support Engineer',
        company: 'Computacenter',
        timeframe: 'Januar 2018 - Juni 2020 · Dortmund, Nordrhein-Westfalen',
        bullets: [
          'Linux-Administration und Troubleshooting (Debian, Ubuntu, CentOS)',
          'Webseiten betreut und gepflegt',
          'DNS-Zonen verwaltet',
          'Server-Monitoring und Log-Analysen durchgeführt',
          'Tickets und Incidents bearbeitet',
          'Netzwerk-Support und Konfiguration',
        ],
        highlight: undefined,
      },
    ],
    projects: [
      {
        title: 'Vault-basierte Secrets-Modernisierung',
        context: 'Gesundheitsplattform · 2024',
        bullets: [
          'HashiCorp Vault per Terraform automatisiert eingeführt und einen dualen Studenten bei Aufbau & Betrieb gecoacht',
          'External Secrets auf allen Kubernetes-Clustern installiert und an Vault angebunden',
          'Alle Applikations-Secrets in Vault migriert, um Compliance & Audits zu vereinheitlichen',
        ],
      },
      {
        title: 'Healthcare Multi-Tenant Kubernetes Platform',
        context: 'Regionale KVen · 2024/25',
        bullets: [
          'Zwei VMware-Tanzu-Cluster (DMZ + intern) mit FluxCD kurzfristig bereitgestellt',
          'Security-Stack mit Kyverno, Trivy Operator, External Secrets und Antrea Zero-Trust Policies',
          'Go-Live fristgerecht zum Inkrafttreten der regulatorischen Vorgaben für drei KVen sichergestellt',
        ],
      },
      {
        title: 'Multi-Cloud Kubernetes Provisioning',
        context: 'Technologieberatung · 2022/23',
        bullets: [
          'Vergleichbare Cluster auf AWS EKS, GCP GKE und Azure AKS aufgebaut',
          'Automatisierung mit Terraform & AWS CDK und einheitliche Ingress-Strategie',
          'Unterschiede bei Storage, Networking und Kosten dokumentiert',
        ],
      },
    ],
    skills: [
      {
        title: 'Cloud & Containerisierung',
        items: [
          'Kubernetes, Docker',
          'AWS (EKS), GCP (GKE)',
          'VMware Tanzu',
          'Infrastructure as Code (Terraform, AWS CDK)',
          'Container Security Scanning',
        ],
      },
      {
        title: 'Kubernetes-Ökosystem',
        items: ['Helm', 'Ingress Controllers', 'cert-manager, External-DNS', 'External Secrets Operator', 'Kyverno, Antrea'],
      },
      {
        title: 'DevOps & CI/CD',
        items: ['GitOps (FluxCD, ArgoCD)', 'GitLab CI', 'Ansible'],
      },
      {
        title: 'Monitoring & Observability',
        items: ['Grafana, Prometheus', 'Log Management (Loki, Graylog)'],
      },
      {
        title: 'Security & Compliance',
        items: ['IT-Sicherheitsanforderungen', 'Compliance-Standards', 'Zero-Trust-Netzwerk-Richtlinien', 'Policy Enforcement'],
      },
      {
        title: 'Systemadministration',
        items: ['Linux (Debian, Ubuntu, CentOS)', 'Netzwerk-Fehlersuche', 'DNS-Verwaltung', 'SSL/TLS-Zertifikatsmanagement'],
      },
    ],
    certifications: [
      {
        label: 'Kubernetes Administration',
        href: 'https://www.credly.com/badges/3cddf4ce-ba97-45b0-b9b3-7751335473e2/linked_in',
      },
      {
        label: 'Microsoft Certified: Azure Administrator Associate',
        href: 'https://learn.microsoft.com/api/credentials/share/en-us/youssefhoro-9487/9CDD052E32E58E7C?sharingId',
      },
      {
        label: 'AWS Certified SysOps Administrator · Associate',
        href: 'https://www.credly.com/badges/4e20ea3b-a1eb-4177-80db-9c94495e08b2/linked_in_profile',
      },
      {
        label: 'LPIC-2 · Certified Linux Engineer',
        href: 'https://cs.lpi.org/caf/Xamman/certification/verify/LPI000506038/pbmcysu5da',
      },
      {
        label: 'LPIC-1 · Certified Linux Administrator',
        href: 'https://cs.lpi.org/caf/Xamman/certification/verify/LPI000506038/pbmcysu5da',
      },
    ],
    education: {
      degree: 'Mathematik',
      school: 'Ruhr-Universität Bochum',
      period: 'September 2016 - März 2019',
    },
  },
} as const;

const leftIcons = [
  { src: '/cncf-logos/kubernetes-icon-color.svg', alt: 'Kubernetes', top: 360, rotate: 6 },
  { src: '/cncf-logos/argo-icon-color.svg', alt: 'ArgoCD', top: 520, rotate: -5 },
  { src: '/cncf-logos/flux-icon-color.svg', alt: 'FluxCD', top: 680, rotate: 8 },
  { src: '/cncf-logos/cert-manager-icon-color.svg', alt: 'cert-manager', top: 840, rotate: -3 },
  { src: '/cncf-logos/eso-icon-color.svg', alt: 'External Secrets', top: 1000, rotate: 6 },
  { src: '/cncf-logos/antrea-icon-color.svg', alt: 'Antrea', top: 1160, rotate: 4 },
  { src: '/cncf-logos/istio-icon-color.svg', alt: 'Istio', top: 1320, rotate: -7 },
];

const rightIcons = [
  { src: '/cncf-logos/harbor-icon-color.svg', alt: 'Harbor', top: 360, rotate: -7 },
  { src: '/cncf-logos/kyverno-icon-color.svg', alt: 'Kyverno', top: 520, rotate: 5 },
  { src: '/cncf-logos/helm-icon-color.svg', alt: 'Helm', top: 680, rotate: -6 },
  { src: '/cncf-logos/envoy-icon-color.svg', alt: 'Envoy', top: 840, rotate: 9 },
  { src: '/cncf-logos/crossplane-icon-color.svg', alt: 'Crossplane', top: 1000, rotate: -4 },
  { src: '/cncf-logos/etcd-icon-color.svg', alt: 'etcd', top: 1160, rotate: 7 },
  { src: '/cncf-logos/fluentbit-icon-color.svg', alt: 'Fluent Bit', top: 1320, rotate: -5 },
];

export default function Home() {
  const [lang, setLang] = useState<'en' | 'de'>('en');

  useEffect(() => {
    try {
      const stored = localStorage.getItem('lang');
      if (stored === 'en' || stored === 'de') {
        setLang(stored);
      }
    } catch {
      // localStorage not available (e.g. SSR), ignore
    }
  }, []);

  const handleLanguageChange = (code: 'en' | 'de') => {
    setLang(code);
    try {
      localStorage.setItem('lang', code);
    } catch {
      // ignore
    }
  };
  const t = translations[lang];

  const cardBase =
    'bg-white/90 rounded-2xl border border-slate-100/80 shadow-md shadow-slate-200/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100/70';
  const sectionHeading = 'text-2xl font-bold text-slate-900';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 relative overflow-hidden">
      {/* CNCF Icons as soft blurred blobs */}
      {leftIcons.map((icon) => (
        <div
          key={icon.alt}
          className="pointer-events-none select-none absolute left-4 w-24 h-24 opacity-60 z-0 hidden md:block"
          style={{ top: `${icon.top}px`, transform: `rotate(${icon.rotate}deg)` }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-200/60 via-white/40 to-blue-100/60 blur-2xl" aria-hidden="true" />
          <div className="relative flex h-full w-full items-center justify-center">
            <img
              src={icon.src}
              alt={icon.alt}
              className="h-12 w-12 opacity-60 mix-blend-luminosity"
            />
      </div>
      </div>
      ))}
      {rightIcons.map((icon) => (
        <div
          key={icon.alt}
          className="pointer-events-none select-none absolute right-4 w-24 h-24 opacity-60 z-0 hidden md:block"
          style={{ top: `${icon.top}px`, transform: `rotate(${icon.rotate}deg)` }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-100/60 via-white/40 to-indigo-200/70 blur-2xl" aria-hidden="true" />
          <div className="relative flex h-full w-full items-center justify-center">
            <img
              src={icon.src}
              alt={icon.alt}
              className="h-12 w-12 opacity-60 mix-blend-luminosity"
            />
      </div>
      </div>
      ))}

      {/* Header Section */}
      <header className="relative z-10 border-b border-blue-100/60 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-8 space-y-5 sm:px-6">
          <div className="flex justify-end">
            <div className="inline-flex rounded-full border border-blue-100 bg-white/80 p-1 shadow-sm">
              {[
                { code: 'en' as const, label: 'EN', flag: '🇬🇧' },
                { code: 'de' as const, label: 'DE', flag: '🇩🇪' },
              ].map(({ code, label, flag }) => (
                <button
                  key={code}
                  type="button"
                  aria-pressed={lang === code}
                  onClick={() => handleLanguageChange(code)}
                  className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-semibold transition ${
                    lang === code ? 'bg-blue-600 text-white shadow' : 'text-slate-600 hover:text-blue-600'
                  }`}
                >
                  <span aria-hidden="true">{flag}</span>
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex-1 space-y-3">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-blue-100/80 bg-blue-50/80 px-4 py-1 text-sm font-semibold text-blue-700 shadow-sm">
                  <span aria-hidden="true">🚀</span>
                  {t.hero.badge}
                </p>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl lg:text-6xl">Youssef Horo</h1>
              <p className="text-xl font-semibold text-blue-600 sm:text-2xl">{t.hero.role}</p>
              <p className="text-base text-slate-600 sm:text-lg">{t.hero.location}</p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="mailto:yhoro@yhoro.de"
                  className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <span aria-hidden="true">✉️</span> yhoro@yhoro.de
                </a>
                <a
                  href="https://www.linkedin.com/in/youssef-horo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <span aria-hidden="true">💼</span>
                  <span className="inline-flex items-center gap-1">
                    LinkedIn
                    <span aria-hidden="true" className="text-xs">
                      ↗
                    </span>
                  </span>
                </a>
                <a
                  href="https://github.com/youssef-horo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <span aria-hidden="true">⚡</span>
                  <span className="inline-flex items-center gap-1">
                    GitHub
                    <span aria-hidden="true" className="text-xs">
                      ↗
                    </span>
                  </span>
                </a>
                <a
                  href="/cv"
                  className="screen-only inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <span aria-hidden="true">📄</span>
                  <span className="inline-flex items-center gap-1">
                    CV (DE)
                    <span aria-hidden="true" className="text-xs">
                      ↗
                    </span>
                  </span>
                </a>
              </div>
              </div>
              <div className="flex-shrink-0">
              <div className="relative group">
                <div
                  className="absolute -inset-6 rounded-full bg-gradient-to-br from-blue-200/70 via-white/40 to-indigo-200/70 blur-3xl opacity-90 transition group-hover:scale-105"
                  aria-hidden="true"
                />
                <div className="relative rounded-full bg-gradient-to-br from-white/90 via-blue-50/70 to-slate-100/90 p-1 shadow-2xl shadow-blue-200/70">
                  <div className="relative rounded-full bg-white/80 p-2 shadow-inner shadow-white/70 backdrop-blur">
                    <span
                      className="pointer-events-none absolute -top-1.5 -left-1.5 h-16 w-16 rounded-full bg-white/70 blur-2xl opacity-70"
                      aria-hidden="true"
                    />
                    <span
                      className="pointer-events-none absolute -bottom-2 -right-2 h-20 w-20 rounded-full bg-blue-200/40 blur-3xl opacity-80"
                      aria-hidden="true"
                    />
                <img 
                  src="/fotos/profile.jpg"
                  alt="Youssef Horo" 
                      className="w-32 h-32 md:w-44 md:h-44 rounded-full object-cover object-center shadow-xl shadow-blue-300/40 ring-4 ring-white/80"
                      width={176}
                      height={176}
                      loading="eager"
                />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-10 sm:px-6 sm:py-12 relative z-10">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Left Column - Main Content */}
          <div className="md:col-span-2 space-y-8">
            {/* About Section */}
            <section className={`${cardBase}`}>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-10 w-1 rounded-full bg-blue-500" aria-hidden />
                <h2 className={sectionHeading}>{t.sections.about}</h2>
              </div>
              {t.about.map((paragraph) => (
                <p key={paragraph} className="text-gray-700 leading-relaxed">
                  {paragraph}
              </p>
              ))}
            </section>

            {/* Experience Section */}
            <section className={`${cardBase}`}>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-10 w-1 rounded-full bg-blue-500" aria-hidden />
                <h2 className={sectionHeading}>{t.sections.experience}</h2>
              </div>
              <div className="space-y-6">
                {t.experience.map((job) => (
                  <div key={`${job.role}-${job.company}`} className="border-l-4 border-blue-500/80 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900">{job.role}</h3>
                    <p className="text-blue-600 font-medium">{job.company}</p>
                    <p className="text-sm text-gray-600 mt-1">{job.timeframe}</p>
                    {job.bullets.length > 0 && (
                      <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-gray-700">
                        {job.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500" aria-hidden />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {job.highlight && <p className="mt-3 text-sm text-slate-500">{job.highlight}</p>}
                  </div>
                ))}
                </div>
            </section>

            {/* Selected Projects */}
            <section className={`${cardBase}`}>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-10 w-1 rounded-full bg-blue-500" aria-hidden />
                <h2 className={sectionHeading}>{t.sections.projects}</h2>
                </div>
              <div className="space-y-6">
                {t.projects.map((project) => (
                  <article
                    key={project.title}
                    className="rounded-2xl border border-blue-50/80 bg-gradient-to-br from-white/90 via-blue-50/30 to-white/90 p-5 shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-blue-500/10 text-blue-600 flex items-center justify-center text-lg">
                        ✦
                </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
                        <p className="text-sm text-slate-500">{project.context}</p>
                </div>
                </div>
                    <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-slate-700">
                      {project.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500" aria-hidden />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Skills */}
            <section className={`${cardBase}`}>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-10 w-1 rounded-full bg-blue-500" aria-hidden />
                <h2 className="text-xl font-bold text-slate-900">{t.sections.skills}</h2>
              </div>
              <div className="space-y-4">
                {t.skills.map((section) => (
                  <div key={section.title}>
                    <h3 className="font-semibold text-gray-900 mb-2">{section.title}</h3>
                    <ul className="space-y-1.5 text-sm text-gray-700">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" aria-hidden />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Certifications */}
            <section className={`${cardBase}`}>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-10 w-1 rounded-full bg-blue-500" aria-hidden />
                <h2 className="text-xl font-bold text-slate-900">{t.sections.certifications}</h2>
              </div>
              <ul className="space-y-3">
                {t.certifications.map((cert) => (
                  <li key={cert.label}>
                    <a
                      href={cert.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex w-full items-start gap-3 rounded-xl border border-blue-100/80 bg-white/90 px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50/80"
                    >
                      <span className="flex flex-1 items-start gap-2 text-blue-700 text-sm sm:text-base leading-snug">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" aria-hidden />
                        <span className="break-words whitespace-normal">{cert.label}</span>
                      </span>
                      <svg
                        className="h-4 w-4 flex-shrink-0 text-blue-400 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            {/* Education */}
            <section className={`${cardBase}`}>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-10 w-1 rounded-full bg-blue-500" aria-hidden />
                <h2 className="text-xl font-bold text-slate-900">{t.sections.education}</h2>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{t.education.degree}</h3>
                <p className="text-blue-600">{t.education.school}</p>
                <p className="text-sm text-gray-600 mt-1">{t.education.period}</p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
