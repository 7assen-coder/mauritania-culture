"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import SectionTitle from "./SectionTitle";
import YouTubeEmbed from "./YouTubeEmbed";
import { useLang } from "@/lib/LanguageContext";

const typeColors: Record<string, { bg: string; text: string; border: string }> = {
  Cordes: { bg: "bg-amber-500/10", text: "text-amber-600", border: "border-amber-500/20" },
  Percussion: { bg: "bg-rose-500/10", text: "text-rose-500", border: "border-rose-500/20" },
  Vent: { bg: "bg-teal/10", text: "text-teal", border: "border-teal/20" },
};

const typeIcons: Record<string, string> = {
  Cordes: "𝄞",
  Percussion: "◎",
  Vent: "𝄢",
};

export default function InstrumentsSection() {
  const { t } = useLang();
  const instruments = t.instruments;

  return (
    <section id="instruments" className="relative">
      <div className="relative py-24 lg:py-32 bg-cream overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23D4A84B' stroke-width='0.5'%3E%3Ccircle cx='40' cy='40' r='30'/%3E%3Ccircle cx='40' cy='40' r='20'/%3E%3Cline x1='40' y1='10' x2='40' y2='70'/%3E%3Cline x1='10' y1='40' x2='70' y2='40'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        <div className="container-main relative z-10">
          <SectionTitle subtitle={instruments.subtitle} title={instruments.title} description={instruments.description} light={false} />

          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10" style={{ marginBottom: "clamp(4rem, 7vw, 8rem)" }}>
              {[
                { id: "j-S0crRuRmA", caption: instruments.videoCaption1 },
                { id: "CVXifrDdnwQ", caption: instruments.videoCaption2 },
              ].map((video, i) => (
                <motion.div key={i} className="w-full min-w-0" whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                  <YouTubeEmbed videoId={video.id} title={video.caption} />
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="bg-white rounded-2xl border border-border-light overflow-hidden" style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
              <div className="hidden lg:grid grid-cols-12 gap-6 bg-cream-dark/60 border-b border-border-light" style={{ padding: "1.5rem 3rem" }}>
                <div className="col-span-3">
                  <span className="text-xs font-semibold text-night-sky/50 uppercase tracking-wider">{instruments.tableHeaders.instrument}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-xs font-semibold text-night-sky/50 uppercase tracking-wider">{instruments.tableHeaders.type}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-xs font-semibold text-night-sky/50 uppercase tracking-wider">{instruments.tableHeaders.origin}</span>
                </div>
                <div className="col-span-5">
                  <span className="text-xs font-semibold text-night-sky/50 uppercase tracking-wider">{instruments.tableHeaders.description}</span>
                </div>
              </div>

              {instruments.list.map((inst, i) => {
                const colors = typeColors[inst.type] || typeColors.Cordes;
                const icon = typeIcons[inst.type] || "♪";
                const typeLabel = instruments.typeLabels[inst.type] || inst.type;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                    whileHover={{ backgroundColor: "rgba(212, 168, 75, 0.04)" }}
                    className={`group transition-colors ${i < instruments.list.length - 1 ? "border-b border-border-light/40" : ""}`}
                    style={{ padding: "1.75rem 3rem" }}
                  >
                    <div className="hidden lg:grid grid-cols-12 gap-6 items-center">
                      <div className="col-span-3 flex items-center gap-3">
                        <motion.span className="text-sand-gold/40 text-lg" whileHover={{ scale: 1.3, rotate: 15 }}>{icon}</motion.span>
                        <h4 className="font-heading font-semibold text-sm text-night-sky group-hover:text-sand-gold transition-colors duration-300">{inst.name}</h4>
                      </div>
                      <div className="col-span-2">
                        <span className={`text-xs px-3 py-1.5 rounded-full ${colors.bg} ${colors.text} ${colors.border} border inline-flex items-center gap-1.5 font-medium`}>
                          {typeLabel}
                        </span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-xs text-night-sky/50">{inst.origin}</span>
                      </div>
                      <div className="col-span-5">
                        <p className="text-sm text-night-sky/55 leading-relaxed">{inst.desc}</p>
                      </div>
                    </div>

                    <div className="lg:hidden space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-sand-gold/40 text-base">{icon}</span>
                        <h4 className="font-heading font-semibold text-sm text-night-sky">{inst.name}</h4>
                        <span className={`text-xs px-2.5 py-1 rounded-full ${colors.bg} ${colors.text} ${colors.border} border font-medium`}>
                          {typeLabel}
                        </span>
                      </div>
                      <p className="text-xs text-night-sky/50">{inst.origin}</p>
                      <p className="text-sm text-night-sky/55 leading-relaxed">{inst.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="flex items-center justify-center gap-2 mt-10 opacity-40">
              <span className="text-sand-gold text-lg">𝄞</span>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-sand-gold/40 to-transparent" />
              <span className="text-xs text-night-sky/40 font-medium tracking-wider uppercase">{instruments.footerCount}</span>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-sand-gold/40 to-transparent" />
              <span className="text-sand-gold text-lg">𝄢</span>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="relative h-12 lg:h-16 bg-gradient-to-b from-[#F5F0E1] to-[#E8DCC8]" />
      <div className="relative">
        <svg viewBox="0 0 1440 220" className="w-full block" preserveAspectRatio="none" style={{ height: "140px" }}>
          <defs>
            <linearGradient id="creamToDark" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#E8DCC8" />
              <stop offset="35%" stopColor="#6b5d4a" />
              <stop offset="70%" stopColor="#2a2535" />
              <stop offset="100%" stopColor="#1A1A2E" />
            </linearGradient>
          </defs>
          <path fill="url(#creamToDark)" d="M0,70 C360,130 720,20 1080,80 C1260,110 1380,60 1440,70 L1440,220 L0,220 Z" />
        </svg>
      </div>
    </section>
  );
}
