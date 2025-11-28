"use client";

import { Poppins } from "next/font/google";
import { translations } from "../page";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function CvPage() {
  const t = translations.de;

  // Filtere wiederholte Bullets aus den Jobbeschreibungen für das CV
  const cvExperience = t.experience.map((job) => {
    const filteredBullets = job.bullets.filter((bullet) => {
      // Entferne diese wiederholten Sätze
      if (bullet === "External-DNS und External Secrets Operator für sichere Automatisierung") return false;
      if (bullet === "Multi-Cloud-Administration (AWS, GCP)") return false;
      if (bullet === "Server-Monitoring und Log-Analysen durchgeführt") return false;
      if (bullet === "HashiCorp Vault mit Terraform eingeführt und einen dualen Studenten bei Installation und Konfiguration begleitet") return false;
      return true;
    });
    // Entferne Projekt-Hinweise (highlight) im PDF
    return { ...job, bullets: filteredBullets, highlight: undefined };
  });

  // Transformiere Skills für CV: Führe "Cloud & Containerisierung" und "Kubernetes-Ökosystem" zusammen
  const cvSkills = t.skills.reduce((acc, section) => {
    if (section.title === "Cloud & Containerisierung" || section.title === "Kubernetes-Ökosystem") {
      const existing = acc.find((s) => s.title === "Kubernetes & Containerization");
      if (existing) {
        existing.items = [...existing.items, ...section.items];
      } else {
        acc.push({
          title: "Kubernetes & Containerization",
          items: [...section.items],
        });
      }
    } else {
      acc.push(section);
    }
    return acc;
  }, [] as Array<{ title: string; items: string[] }>);

  const handleDownloadPdf = async () => {
    if (typeof window === "undefined") return;
    const element = document.getElementById("cv-area");
    if (!element) return;

    const html2pdf = (await import("html2pdf.js")).default as any;

    const opt = {
      margin: [8, 8, 8, 8],
      filename: "Lebenslauf_Youssef_Horo.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    document.body.classList.add("cv-exporting");
    const button = document.getElementById("cv-download-button");
    if (button) {
      button.style.display = "none";
    }
    try {
      await html2pdf().set(opt).from(element).save();
    } finally {
      if (button) {
        button.style.display = "";
      }
      document.body.classList.remove("cv-exporting");
    }
  };

  return (
    <div className={`${poppins.className} min-h-screen bg-slate-200 py-8 px-4 print:bg-white print:py-0`}>
      <main
        id="cv-area"
        className="mx-auto max-w-4xl bg-white rounded-3xl shadow-2xl shadow-slate-400/60 px-5 py-3 text-[13px] text-slate-800 print:px-4 print:py-2 print-page"
      >
        {/* Header */}
        <header className="border-b border-slate-200 pb-2 mb-2 flex items-start justify-between gap-3">
          <div className="flex-1">
            <h1 className="text-[24px] font-semibold tracking-[0.08em] text-slate-900 leading-tight uppercase">
              Youssef Horo
            </h1>
            <p className="mt-0 text-[10px] font-semibold uppercase tracking-[0.3em] text-blue-700">
              {t.hero.role}
            </p>
            <p className="mt-0 text-[9px] text-slate-500">
              {t.hero.location}
            </p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <div className="w-20 h-20 rounded-full overflow-hidden border border-slate-200 shadow-md">
              <img
                src="/fotos/profile.jpg"
                alt="Bewerbungsfoto von Youssef Horo"
                className="w-full h-full object-cover object-center"
                width={80}
                height={80}
                loading="eager"
              />
            </div>
            <button
              type="button"
              id="cv-download-button"
              onClick={handleDownloadPdf}
              className="screen-only mt-0 inline-flex items-center gap-1 rounded-full border border-blue-200 bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-700 shadow-sm hover:bg-blue-600 hover:text-white"
            >
              <span>Als PDF speichern</span>
            </button>
          </div>
        </header>

        {/* Hauptbereich: linke Sidebar + rechte Content-Spalte */}
        <section className="grid gap-3 md:grid-cols-[195px,minmax(0,1fr)]">
          {/* Linke Spalte */}
          <aside className="space-y-3 bg-slate-50 rounded-2xl border border-slate-100/80 px-2.5 py-2">
            {/* Kontakt */}
            <section className="break-inside-avoid">
              <h2 className="text-[10px] font-semibold uppercase tracking-wide text-slate-500 pb-0.5 border-b border-slate-300 border-opacity-40">
                Kontakt
              </h2>
              <div className="mt-1 space-y-1 text-[9px] leading-tight text-slate-600">
                <div className="flex items-start gap-1.5">
                  <svg className="w-3 h-3 text-slate-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="leading-tight">yhoro@yhoro.de</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <svg className="w-3 h-3 text-slate-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className="leading-tight">github.com/youssef-horo</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <svg className="w-3 h-3 text-slate-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span className="leading-tight">linkedin.com/in/youssef-horo</span>
                </div>
              </div>
            </section>

            {/* Skills */}
            <section className="break-inside-avoid">
              <h2 className="text-[10px] font-semibold uppercase tracking-wide text-slate-500 pb-0.5 border-b border-slate-300 border-opacity-40">
                {t.sections.skills}
              </h2>
              <div className="mt-1 space-y-0.5">
                {cvSkills.map((section) => (
                  <div key={section.title} className="mt-1 first:mt-0">
                    <p className="text-[9px] font-semibold tracking-wide text-slate-600 uppercase">{section.title}</p>
                    <ul className="ml-2.5 mt-0.5 list-disc text-[8px] leading-tight text-slate-600 marker:text-slate-500">
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Ausbildung & Zertifikate */}
            <section className="break-inside-avoid">
              <h2 className="text-[10px] font-semibold uppercase tracking-wide text-slate-500 pb-0.5 border-b border-slate-300 border-opacity-40">
                {t.sections.education}
              </h2>
              <div className="mt-1 space-y-0.5">
                <p className="text-[9px] font-semibold text-slate-700">{t.education.degree}</p>
                <p className="text-[8px] text-slate-600">{t.education.school}</p>
                <p className="text-[8px] text-slate-500">{t.education.period}</p>
              </div>

              <h2 className="mt-3 text-[10px] font-semibold uppercase tracking-wide text-slate-500 pb-0.5 border-b border-slate-300 border-opacity-40">
                {t.sections.certifications}
              </h2>
              <ul className="mt-1 space-y-0.5 text-[9px] leading-tight text-slate-600">
                {t.certifications.map((cert) => (
                  <li key={cert.label}>{cert.label}</li>
                ))}
              </ul>
            </section>
          </aside>

          {/* Rechte Spalte */}
          <div className="space-y-4 md:pl-4 md:border-l md:border-slate-300 md:border-opacity-50">
            {/* Berufserfahrung */}
            <section className="break-inside-avoid">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500 mb-2 pb-1 border-b border-slate-300 border-opacity-40">
                {t.sections.experience}
              </h2>
              <div className="mt-1 space-y-2.5">
                {cvExperience.map((job) => (
                  <article key={`${job.role}-${job.company}`} className="leading-relaxed">
                    <header className="text-[13px]">
                      <h3 className="font-semibold text-slate-900 leading-snug">{job.role}</h3>
                      <p className="text-blue-700 leading-snug">{job.company}</p>
                      <p className="text-[11px] text-slate-500 leading-snug">{job.timeframe}</p>
                    </header>
                    {job.bullets.length > 0 && (
                      <ul className="mt-1.5 space-y-0.5 text-[11px] leading-relaxed text-slate-700 list-disc list-outside ml-4 marker:text-slate-500">
                        {job.bullets.map((bullet) => (
                          <li key={bullet} className="leading-relaxed pl-1">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                    {job.highlight && (
                      <p className="mt-0.5 text-[10px] text-slate-500">
                        {job.highlight}
                      </p>
                    )}
                  </article>
                ))}
              </div>
            </section>

            {/* Ausgewählte Projekte */}
            <section className="break-inside-avoid">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500 mb-2 pb-1 border-b border-slate-300 border-opacity-40">
                {t.sections.projects}
              </h2>
              <div className="mt-1 space-y-2.5">
                {t.projects.map((project) => (
                  <article key={project.title} className="leading-relaxed">
                    <header className="text-[13px]">
                      <h3 className="font-semibold text-slate-900 leading-snug">{project.title}</h3>
                      <p className="text-[11px] text-slate-500 leading-snug">{project.context}</p>
                    </header>
                    <ul className="mt-1.5 space-y-0.5 text-[11px] leading-relaxed text-slate-700 list-disc list-outside ml-4 marker:text-slate-500">
                      {project.bullets.map((bullet) => (
                        <li key={bullet} className="leading-relaxed pl-1">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}


