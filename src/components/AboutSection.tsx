"use client";

import ScrollReveal from "./ScrollReveal";
import SectionTitle from "./SectionTitle";
import { useLang } from "@/lib/LanguageContext";

export default function AboutSection() {
  const { t, lang } = useLang();
  const isRtl = lang === "ar";

  return (
    <section
      id="about"
      dir={isRtl ? "rtl" : "ltr"}
      className="relative bg-cream"
    >
      {/* Cream area — pt for space after Games wave */}
      <div className="relative pt-20 lg:pt-28 py-24 pb-24 lg:pb-32">
        <div className="container-main">
          <SectionTitle
            subtitle={t.about.subtitle}
            title={t.about.title}
            description={t.about.description}
            light={false}
          />

          {/* Influence cards — clear space from title */}
          <ScrollReveal>
            <div className="grid sm:grid-cols-3 gap-6 lg:gap-8 mt-20 lg:mt-24 mb-20 lg:mb-24">
              {t.about.influences.map((inf, i) => (
                <div key={i} className="card card-light p-6 lg:p-8 text-center">
                  <span className="text-3xl mb-3 block">{inf.icon}</span>
                  <span className="text-xs uppercase tracking-wider text-sand-gold font-medium">
                    {t.about.influencePrefix}
                  </span>
                  <h4 className="font-heading font-semibold text-lg text-night-sky mt-1 mb-2">
                    {inf.name}
                  </h4>
                  <p className="text-xs text-night-sky/50 leading-relaxed">
                    {inf.desc}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* UNESCO Banner — clear space from cards */}
          <ScrollReveal delay={0.15}>
            <div className="relative overflow-hidden rounded-2xl bg-night-sky p-8 md:p-10 shadow-lg">
            {/* Decorative orb */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-sand-gold/5 rounded-full blur-[80px]" />

            <div className="relative z-10 grid md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-0.5 bg-sand-gold/40 rounded-full" />
                  <span className="text-xs uppercase tracking-wider text-sand-gold-light font-medium">
                    {t.about.unescoTitle}
                  </span>
                </div>
                <p className="text-sm text-cream/60 leading-relaxed">
                  {t.about.unescoText}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 justify-start md:justify-end">
                {t.about.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1.5 rounded-full bg-sand-gold/10 text-sand-gold-light border border-sand-gold/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
        </div>
      </div>

      {/* Spacer — no fusion with wave */}
      <div
        className="relative h-12 lg:h-16"
        style={{ background: "linear-gradient(180deg, #F5F0E1 0%, #E8DCC8 100%)" }}
      />

      {/* Smooth wave: cream → dark for Footer */}
      <div className="relative">
        <svg
          viewBox="0 0 1440 200"
          className="w-full block"
          preserveAspectRatio="none"
          style={{ height: "120px" }}
        >
          <defs>
            <linearGradient id="creamToDarkFooter" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#E8DCC8" />
              <stop offset="40%" stopColor="#5a5045" />
              <stop offset="100%" stopColor="#1A1A2E" />
            </linearGradient>
          </defs>
          <path
            fill="url(#creamToDarkFooter)"
            d="M0,50 C360,100 720,20 1080,60 C1260,80 1380,50 1440,50 L1440,200 L0,200 Z"
          />
        </svg>
      </div>
    </section>
  );
}
