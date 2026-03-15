"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";

export default function Navbar() {
  const { t, toggleLang, isRTL } = useLang();
  const [active, setActive] = useState("");
  const [pastHero, setPastHero] = useState(false);
  const [hoveredDesktop, setHoveredDesktop] = useState<string | null>(null);

  const sections = [
    { id: "mahadra", label: t.nav.mahadra, num: "01" },
    { id: "music", label: t.nav.music, num: "02" },
    { id: "instruments", label: t.nav.instruments, num: "03" },
    { id: "games", label: t.nav.games, num: "04" },
  ];

  const navIcons: Record<string, React.ReactNode> = {
    home: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12l9-8 9 8" /><path d="M5 10v9a1 1 0 001 1h3v-5h6v5h3a1 1 0 001-1v-9" />
      </svg>
    ),
    mahadra: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 6s1.5-2 5-2 5 2 5 2v14s-1.5-1-5-1-5 1-5 1V6z" /><path d="M12 6s1.5-2 5-2 5 2 5 2v14s-1.5-1-5-1-5 1-5 1V6z" />
      </svg>
    ),
    music: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" />
      </svg>
    ),
    instruments: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v18M5 8l14 8M5 16l14-8" />
      </svg>
    ),
    games: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
  };

  useEffect(() => {
    const ids = sections.map((s) => s.id);
    const onScroll = () => {
      setPastHero(window.scrollY > window.innerHeight * 0.6);
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.getBoundingClientRect().top <= 250) {
          setActive(ids[i]);
          return;
        }
      }
      setActive("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const go = useCallback((id: string) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const sidePos = isRTL ? { left: "24px" } : { right: "24px" };
  const labelSide = isRTL
    ? { left: "100%", marginLeft: "12px" }
    : { right: "100%", marginRight: "12px" };
  const indicatorSide = isRTL ? { right: 0 } : { left: 0 };

  return (
    <>
      <div className="mr-stripe fixed top-0 inset-x-0 z-[70]" />

      {/* ── Desktop: 3D glass capsule ── */}
      <motion.div
        initial={{ opacity: 0, x: isRTL ? -30 : 30, scale: 0.9 }}
        animate={{
          opacity: pastHero ? 1 : 0,
          x: pastHero ? 0 : (isRTL ? -30 : 30),
          scale: pastHero ? 1 : 0.9,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className="hidden lg:flex fixed z-50 flex-col items-center"
        style={{ ...sidePos, top: "50%", transform: "translateY(-50%)" }}
      >
        <div
          className="relative flex flex-col items-center gap-0 rounded-[28px] overflow-visible"
          style={{
            padding: "14px 12px",
            background: "linear-gradient(170deg, rgba(26,26,46,0.75) 0%, rgba(26,26,46,0.55) 100%)",
            backdropFilter: "blur(24px) saturate(1.6)",
            WebkitBackdropFilter: "blur(24px) saturate(1.6)",
            border: "1px solid rgba(245,240,225,0.08)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.35), 0 2px 8px rgba(0,0,0,0.2), inset 0 1px 0 rgba(245,240,225,0.06), inset 0 -1px 0 rgba(0,0,0,0.15)",
          }}
        >
          {/* Home */}
          <motion.button
            onClick={() => go("top")}
            className="relative flex items-center justify-center bg-transparent border-none cursor-pointer p-0"
            style={{ width: 36, height: 36, marginBottom: 4 }}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
          >
            <span style={{ color: active === "" ? "var(--sand-gold)" : "rgba(245,240,225,0.3)" }}>{navIcons.home}</span>
          </motion.button>

          <div style={{ width: 16, height: 1, background: "rgba(245,240,225,0.08)", borderRadius: 1, marginBottom: 4 }} />

          {sections.map((s, i) => {
            const isActive = active === s.id;
            const isHovered = hoveredDesktop === s.id;
            return (
              <motion.button
                key={s.id}
                onClick={() => go(s.id)}
                className="relative flex items-center justify-center bg-transparent border-none cursor-pointer p-0"
                style={{ width: 36, height: 36, marginBottom: i < sections.length - 1 ? 4 : 0 }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.85 }}
                onMouseEnter={() => setHoveredDesktop(s.id)}
                onMouseLeave={() => setHoveredDesktop(null)}
              >
                <AnimatePresence>
                  {isActive && (
                    <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }}
                      className="absolute inset-0 rounded-xl"
                      style={{ background: "linear-gradient(135deg, rgba(212,168,75,0.2), rgba(184,134,11,0.1))", boxShadow: "0 0 20px rgba(212,168,75,0.15)" }}
                    />
                  )}
                </AnimatePresence>
                <AnimatePresence>
                  {isHovered && !isActive && (
                    <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }}
                      className="absolute inset-0 rounded-xl" style={{ background: "rgba(245,240,225,0.04)" }}
                    />
                  )}
                </AnimatePresence>
                <motion.span className="relative z-10"
                  animate={{ color: isActive ? "var(--sand-gold)" : isHovered ? "rgba(245,240,225,0.7)" : "rgba(245,240,225,0.3)" }}
                >
                  {navIcons[s.id]}
                </motion.span>
                <AnimatePresence>
                  {(isHovered || isActive) && (
                    <motion.div
                      initial={{ opacity: 0, x: isRTL ? -8 : 8, scale: 0.8 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: isRTL ? -8 : 8, scale: 0.8 }}
                      transition={{ type: "spring", stiffness: 500, damping: 25 }}
                      className="absolute whitespace-nowrap pointer-events-none flex items-center gap-2"
                      style={{
                        ...labelSide,
                        padding: "6px 12px", borderRadius: 10,
                        background: "linear-gradient(135deg, rgba(26,26,46,0.9), rgba(26,26,46,0.8))",
                        backdropFilter: "blur(12px)", border: "1px solid rgba(245,240,225,0.08)",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.3), inset 0 0.5px 0 rgba(245,240,225,0.06)",
                      }}
                    >
                      <span className="text-[10px] font-mono text-sand-gold/40">{s.num}</span>
                      <span className="text-[11px] font-semibold" style={{ color: isActive ? "var(--sand-gold)" : "rgba(245,240,225,0.7)" }}>
                        {s.label}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}

          <div style={{ width: 16, height: 1, background: "rgba(245,240,225,0.08)", borderRadius: 1, marginTop: 4, marginBottom: 4 }} />

          {/* Language toggle */}
          <motion.button
            onClick={toggleLang}
            className="relative flex items-center justify-center bg-transparent border-none cursor-pointer p-0"
            style={{ width: 36, height: 36 }}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.85 }}
            onMouseEnter={() => setHoveredDesktop("lang")}
            onMouseLeave={() => setHoveredDesktop(null)}
          >
            <AnimatePresence>
              {hoveredDesktop === "lang" && (
                <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }}
                  className="absolute inset-0 rounded-xl" style={{ background: "rgba(245,240,225,0.04)" }}
                />
              )}
            </AnimatePresence>
            <span className="relative z-10 text-[13px] font-bold" style={{ color: "rgba(245,240,225,0.45)", fontFamily: isRTL ? "Inter, sans-serif" : "'Amiri', serif" }}>
              {t.nav.langSwitch.slice(0, 2)}
            </span>
            <AnimatePresence>
              {hoveredDesktop === "lang" && (
                <motion.div
                  initial={{ opacity: 0, x: isRTL ? -8 : 8, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: isRTL ? -8 : 8, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 500, damping: 25 }}
                  className="absolute whitespace-nowrap pointer-events-none"
                  style={{
                    ...labelSide,
                    padding: "6px 12px", borderRadius: 10,
                    background: "linear-gradient(135deg, rgba(26,26,46,0.9), rgba(26,26,46,0.8))",
                    backdropFilter: "blur(12px)", border: "1px solid rgba(245,240,225,0.08)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                  }}
                >
                  <span className="text-[11px] font-semibold text-cream/60">{t.nav.langSwitch}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Active indicator bar */}
          <motion.div
            className="absolute rounded-full"
            style={{
              ...indicatorSide,
              width: 2.5, height: 20,
              background: "linear-gradient(to bottom, var(--sand-gold), var(--deep-gold))",
              boxShadow: "0 0 10px rgba(212,168,75,0.4)",
              borderRadius: 2,
            }}
            animate={{
              top: active === ""
                ? 14 + 18
                : 14 + 36 + 4 + 1 + 4 + sections.findIndex((s) => s.id === active) * 40 + 8,
              opacity: pastHero ? 1 : 0,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          />
        </div>
      </motion.div>

      {/* ── Mobile: 3D floating bottom bar ── */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: pastHero ? 0 : 100, opacity: pastHero ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 28 }}
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50"
        style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      >
        <div
          className="mx-3 mb-3 rounded-[22px] overflow-hidden"
          style={{
            background: "linear-gradient(170deg, rgba(26,26,46,0.88) 0%, rgba(26,26,46,0.78) 100%)",
            backdropFilter: "blur(28px) saturate(1.5)",
            WebkitBackdropFilter: "blur(28px) saturate(1.5)",
            border: "1px solid rgba(245,240,225,0.07)",
            boxShadow: "0 -4px 40px rgba(0,0,0,0.35), 0 -1px 10px rgba(0,0,0,0.2), inset 0 1px 0 rgba(245,240,225,0.06)",
          }}
        >
          <div className="flex items-stretch" style={{ padding: "6px 4px" }}>
            <MobileTab id="home" label={isRTL ? "الرئيسية" : "Accueil"} icon={navIcons.home} isActive={active === ""} onClick={() => go("top")} />
            {sections.map((s) => (
              <MobileTab key={s.id} id={s.id} label={s.label} icon={navIcons[s.id]} isActive={active === s.id} onClick={() => go(s.id)} />
            ))}
            {/* Language toggle in mobile */}
            <motion.button
              onClick={toggleLang}
              className="relative flex flex-col items-center justify-center flex-1 bg-transparent border-none cursor-pointer gap-[5px]"
              style={{ padding: "8px 2px", borderRadius: 14 }}
              whileTap={{ scale: 0.88 }}
            >
              <span className="relative z-10 text-[13px] font-bold" style={{ color: "rgba(245,240,225,0.4)", fontFamily: isRTL ? "Inter, sans-serif" : "'Amiri', serif" }}>
                {t.nav.langSwitch.slice(0, 2)}
              </span>
              <span className="relative z-10 text-[8px] font-semibold tracking-wider" style={{ color: "rgba(245,240,225,0.2)" }}>
                {t.nav.langSwitch.length > 2 ? t.nav.langSwitch.slice(0, 4) : t.nav.langSwitch}
              </span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </>
  );
}

function MobileTab({ label, icon, isActive, onClick }: { id: string; label: string; icon: React.ReactNode; isActive: boolean; onClick: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      className="relative flex flex-col items-center justify-center flex-1 bg-transparent border-none cursor-pointer gap-[5px]"
      style={{ padding: "8px 2px", borderRadius: 14 }}
      whileTap={{ scale: 0.88 }}
    >
      <AnimatePresence>
        {isActive && (
          <motion.div layoutId="mobileActivePill" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-1 rounded-xl"
            style={{ background: "linear-gradient(145deg, rgba(212,168,75,0.15), rgba(212,168,75,0.06))", boxShadow: "inset 0 0 12px rgba(212,168,75,0.08)" }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        )}
      </AnimatePresence>
      <motion.span className="relative z-10" animate={{ color: isActive ? "var(--sand-gold)" : "rgba(245,240,225,0.3)", y: isActive ? -1 : 0 }}>
        {icon}
      </motion.span>
      <motion.span className="relative z-10 text-[9px] font-semibold tracking-wider" animate={{ color: isActive ? "var(--sand-gold)" : "rgba(245,240,225,0.25)" }}>
        {label}
      </motion.span>
      <AnimatePresence>
        {isActive && (
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
            className="absolute bottom-1 w-1 h-1 rounded-full"
            style={{ background: "var(--sand-gold)", boxShadow: "0 0 6px rgba(212,168,75,0.5)" }}
          />
        )}
      </AnimatePresence>
    </motion.button>
  );
}
