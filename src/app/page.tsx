"use client";

import { useEffect, useState } from 'react';
import { translations } from './translations';

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
