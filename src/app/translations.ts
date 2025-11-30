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



