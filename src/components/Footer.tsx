"use client";

import Image from "next/image";
import { useLang } from "@/lib/LanguageContext";

const PORTFOLIO_URL = "https://portfolio-drhx.vercel.app";

export default function Footer() {
  const { t, lang } = useLang();
  const isRtl = lang === "ar";

  const explore = [
    { href: "#", label: isRtl ? "الرئيسية" : "Accueil" },
    { href: "#mahadra", label: t.nav.mahadra },
    { href: "#music", label: t.nav.music },
    { href: "#instruments", label: t.nav.instruments },
    { href: "#games", label: t.nav.games },
  ];

  const resources = [
    { label: "UNESCO – ICH", href: "https://ich.unesco.org", external: true },
    { label: "Patrimoine Mauritanien", href: "#", external: false },
    { label: "Archives Nationales", href: "#", external: false },
  ];

  return (
    <footer
      dir={isRtl ? "rtl" : "ltr"}
      className="relative w-full"
      style={{ background: "#111122" }}
    >
      <div style={{ height: 3, background: "linear-gradient(90deg, #006233 30%, #D4A84B 50%, #006233 70%)" }} />

      <div className="w-full max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">

        <div
          className="grid grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-10 lg:gap-x-10"
          style={{ paddingTop: "clamp(2.5rem, 5vw, 4rem)", paddingBottom: "clamp(2.5rem, 4vw, 3.5rem)" }}
        >

          {/* Brand */}
          <div className="col-span-2 lg:col-span-6">
            <div className="flex items-center gap-3 mb-5">
              <Image src="/logo.png" alt="Logo" width={32} height={32} className="rounded-lg" />
              <span className="font-heading font-bold text-sm text-cream/90 tracking-tight">{t.footer.brand}</span>
            </div>
            <p className="text-[13px] text-cream/30 leading-7 max-w-md">{t.footer.desc}</p>
          </div>

          {/* Navigation */}
          <div className="col-span-1 lg:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.14em] text-cream/40 font-semibold mb-4 lg:mb-5">
              {t.footer.navTitle}
            </h4>
            <ul className="space-y-3">
              {explore.map((l) => (
                <li key={l.href + l.label}>
                  <a href={l.href} className="text-[13px] text-cream/30 hover:text-cream/70 transition-colors duration-200 leading-none">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sources */}
          <div className="col-span-1 lg:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.14em] text-cream/40 font-semibold mb-4 lg:mb-5">
              {t.footer.sourcesTitle}
            </h4>
            <ul className="space-y-3">
              {resources.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="text-[13px] text-cream/30 hover:text-cream/70 transition-colors duration-200 leading-none inline-flex items-center gap-1.5"
                  >
                    {l.label}
                    {l.external && (
                      <svg className="w-2.5 h-2.5 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px" style={{ background: "rgba(245,240,225,0.06)" }} />

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ paddingTop: "1.25rem", paddingBottom: "1.25rem" }}
        >
          <p className="text-[11px] text-cream/15">{t.footer.copyright}</p>

          <p className="text-[11px] text-cream/15">
            {t.footer.madeBy}{" "}
            <a
              href={PORTFOLIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/25 hover:text-sand-gold transition-colors duration-200 font-medium"
            >
              {t.footer.espStudents}
            </a>
          </p>

          <div className="flex items-center gap-3">
            <p className="text-[11px] text-cream/15 font-arabic">{t.footer.republic}</p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center justify-center w-7 h-7 rounded-md bg-transparent border border-cream/[0.06] hover:border-cream/15 transition-colors duration-200 cursor-pointer group"
              aria-label="Back to top"
            >
              <svg className="w-3 h-3 text-cream/20 group-hover:text-cream/50 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
