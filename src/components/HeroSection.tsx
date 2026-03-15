"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";
import SandParticles from "./SandParticles";

export default function HeroSection() {
  const { t, isRTL } = useLang();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, #1A1A2E 0%, #1A1A2E 40%, #2a2520 70%, #3E2723 85%, #C8B896 100%)" }}
      />
      <div className="absolute bottom-0 inset-x-0 pointer-events-none">
        <svg viewBox="0 0 1440 320" className="w-full block" preserveAspectRatio="none">
          <defs>
            <linearGradient id="heroDuneGrad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#C8B896" />
              <stop offset="100%" stopColor="#F5F0E1" />
            </linearGradient>
          </defs>
          <path
            fill="url(#heroDuneGrad)"
            d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,234.7C672,245,768,235,864,213.3C960,192,1056,160,1152,160C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
      <SandParticles count={40} />

      <div className="relative z-10 container-main text-center py-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="flex flex-col items-center gap-3 mb-8"
        >
          <div className="w-16 h-16 border-2 border-sand-gold/40 rotate-45 flex items-center justify-center">
            <div className="w-11 h-11 border border-sand-gold/60 flex items-center justify-center">
              <span className="font-arabic text-sand-gold text-base -rotate-45">موريتانيا</span>
            </div>
          </div>
          <p className="font-arabic text-sand-gold/80 text-base tracking-[0.3em] uppercase mt-1">
            {t.hero.badge}
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className={`font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-cream leading-tight mb-16 ${isRTL ? "font-arabic" : ""}`}
        >
          {t.hero.titleLine1}
          <br />
          <span className="text-gradient">{t.hero.titleLine2}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-cream/40 text-sm tracking-widest uppercase">{t.hero.discover}</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-sand-gold/40 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 bg-sand-gold rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
