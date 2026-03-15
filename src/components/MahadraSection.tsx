"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import SectionTitle from "./SectionTitle";
import YouTubeEmbed from "./YouTubeEmbed";
import { useLang } from "@/lib/LanguageContext";

const featureIcons = [
  <svg key="quran" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 6s1.5-2 5-2 5 2 5 2v14s-1.5-1-5-1-5 1-5 1V6z"/>
    <path d="M12 6s1.5-2 5-2 5 2 5 2v14s-1.5-1-5-1-5 1-5 1V6z"/>
    <path d="M12 6v14"/>
    <circle cx="7" cy="10" r="0.5" fill="currentColor" stroke="none"/>
    <path d="M8.5 11.5a2.5 2.5 0 0 1-3 0"/>
    <circle cx="17" cy="10" r="0.5" fill="currentColor" stroke="none"/>
    <path d="M18.5 11.5a2.5 2.5 0 0 1-3 0"/>
  </svg>,
  <svg key="scroll" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4"/><path d="M19 17V5a2 2 0 0 0-2-2H4"/><path d="M15 8h-5"/><path d="M15 12h-5"/></svg>,
  <svg key="people" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  <svg key="tent" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 22h20L12 2z"/><path d="M12 2v20"/><path d="M8 22l4-8 4 8"/></svg>,
];

const featureLinks: (string | null)[] = [
  "https://quran.com",
  "/%D8%AC%D9%85%D8%A7%D9%84%D9%8A%D8%A7%D8%AA_%D8%A7%D9%84%D8%B4%D8%B9%D8%B1_%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A_%D8%A7%D9%84%D8%AD%D8%B3%D8%A7%D9%86%D9%8A.pdf",
  null,
  null,
];

export default function MahadraSection() {
  const { t } = useLang();
  const mahadra = t.mahadra;

  return (
    <section id="mahadra" className="relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-32 pointer-events-none z-0 bg-gradient-to-b from-[#F5F0E1] to-transparent" />
      <div
        className="relative py-24 lg:py-32"
        style={{ background: "linear-gradient(180deg, #F5F0E1 0%, #EDE4D0 55%, #E2D9C4 85%, #C8B896 100%)" }}
      >
        <div className="relative z-10 container-main">
          <SectionTitle subtitle={mahadra.subtitle} title={mahadra.title} description={mahadra.description} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <div className="relative group">
                <div className="absolute -inset-3 bg-gradient-to-br from-sand-gold/15 to-terracotta/8 rounded-2xl -z-10" />
                <div className="rounded-xl overflow-hidden shadow-xl">
                  <YouTubeEmbed videoId="33oMTpfJymw" title={mahadra.videoCaption} />
                </div>
                <p className="text-xs text-night-sky/40 text-center tracking-wide" style={{ marginTop: "1rem" }}>{mahadra.videoCaption}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="w-14 h-[2px] bg-gradient-to-r from-sand-gold to-terracotta rounded-full mb-8" />
              <p className="text-night-sky/65 text-base lg:text-lg leading-8 mb-10">{mahadra.body}</p>
              <div className="flex gap-10 pt-8 border-t border-sand-gold/15 flex-wrap">
                <div>
                  <span className="block font-heading text-2xl font-bold text-night-sky">2023</span>
                  <span className="text-xs text-night-sky/40 uppercase tracking-wider mt-1.5 block">UNESCO</span>
                </div>
                <div className="w-px bg-sand-gold/20" />
                <div>
                  <span className="block font-heading text-2xl font-bold text-night-sky">100+</span>
                  <span className="text-xs text-night-sky/40 uppercase tracking-wider mt-1.5 block">{mahadra.statYears}</span>
                </div>
                <div className="w-px bg-sand-gold/20" />
                <div>
                  <span className="block font-heading text-2xl font-bold text-night-sky">&#8734;</span>
                  <span className="text-xs text-night-sky/40 uppercase tracking-wider mt-1.5 block">{mahadra.statHeritage}</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-12" style={{ marginTop: "clamp(5rem, 8vw, 10rem)" }}>
            {mahadra.features.map((feature, i) => {
              const link = featureLinks[i];
              const isClickable = !!link;
              const inner = (
                <>
                  <div className={`w-12 h-12 rounded-lg bg-sand-gold/10 flex items-center justify-center text-sand-gold shrink-0 mt-0.5 ${isClickable ? "group-hover:bg-sand-gold/20 transition-colors" : ""}`}>
                    {featureIcons[i]}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-heading text-base font-semibold text-night-sky mb-3">{feature.title}</h3>
                      {isClickable && (
                        <svg className="w-3.5 h-3.5 text-sand-gold/50 mb-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-4.5-6H18m0 0v4.5m0-4.5L10.5 13.5" /></svg>
                      )}
                    </div>
                    <p className="text-night-sky/50 text-sm leading-7">{feature.desc}</p>
                  </div>
                </>
              );

              return (
                <ScrollReveal key={i} delay={i * 0.08}>
                  {isClickable ? (
                    <motion.a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="group bg-white/80 backdrop-blur-sm rounded-xl border border-white/60 hover:border-sand-gold/20 transition-all duration-300 h-full flex items-start gap-6 no-underline"
                      style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06)", padding: "clamp(1.5rem, 3vw, 3rem)", display: "flex" }}
                    >
                      {inner}
                    </motion.a>
                  ) : (
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="group bg-white/80 backdrop-blur-sm rounded-xl border border-white/60 hover:border-sand-gold/20 transition-all duration-300 h-full flex items-start gap-6"
                      style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06)", padding: "clamp(1.5rem, 3vw, 3rem)" }}
                    >
                      {inner}
                    </motion.div>
                  )}
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative h-16 lg:h-24 bg-gradient-to-b from-[#C8B896] to-[#b8a886]" />
      <div className="relative">
        <svg viewBox="0 0 1440 240" className="w-full block" preserveAspectRatio="none" style={{ height: "160px" }}>
          <defs>
            <linearGradient id="waveGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#b8a886" />
              <stop offset="35%" stopColor="#6b5d4a" />
              <stop offset="70%" stopColor="#2a2535" />
              <stop offset="100%" stopColor="#1A1A2E" />
            </linearGradient>
          </defs>
          <path fill="url(#waveGrad)" d="M0,80 C360,140 720,40 1080,100 C1260,130 1380,90 1440,80 L1440,240 L0,240 Z" />
        </svg>
      </div>
    </section>
  );
}
