"use client";

import type { FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";
import { useCulture, type MauritaniaCultureId } from "@/lib/CultureContext";

const ORDER: MauritaniaCultureId[] = ["bidan", "soninke", "wolof", "pulaar"];

/* ── Culture accent colours ── */
const CULTURE_COLORS: Record<MauritaniaCultureId, { active: string; ring: string; glow: string; accent: string }> = {
  bidan:   { active: "bg-night-sky",       ring: "ring-sand-gold/50",   glow: "shadow-[0_8px_28px_rgba(212,168,75,0.18)]",  accent: "text-sand-gold" },
  soninke: { active: "bg-[#2D1B69]",       ring: "ring-indigo-400/50",  glow: "shadow-[0_8px_28px_rgba(99,102,241,0.18)]",  accent: "text-indigo-400" },
  wolof:   { active: "bg-[#1A3A3A]",       ring: "ring-teal-400/50",    glow: "shadow-[0_8px_28px_rgba(45,160,160,0.18)]",  accent: "text-teal-400" },
  pulaar:  { active: "bg-[#1A3320]",       ring: "ring-emerald-400/50", glow: "shadow-[0_8px_28px_rgba(52,211,153,0.18)]",  accent: "text-emerald-400" },
};

/* ── SVG icons per culture ── */
function IconBidan({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className={active ? "opacity-100" : "opacity-60"} aria-hidden>
      <path d="M12 3L4 21h16L12 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 3v18" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="12" cy="14" r="2" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

function IconSoninke({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className={active ? "opacity-100" : "opacity-60"} aria-hidden>
      <rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 10h16" stroke="currentColor" strokeWidth="1.2" />
      <path d="M9 10v8M15 10v8" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <circle cx="12" cy="8" r="1" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

function IconWolof({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className={active ? "opacity-100" : "opacity-60"} aria-hidden>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 4v16M4 12h16" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="12" cy="12" r="1" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

function IconPulaar({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className={active ? "opacity-100" : "opacity-60"} aria-hidden>
      <path d="M12 4C8 4 4 7 4 12s4 8 8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 4c4 0 8 3 8 8s-4 8-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 4v16" stroke="currentColor" strokeWidth="1.2" />
      <ellipse cx="12" cy="12" rx="4" ry="8" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    </svg>
  );
}

const icons: Record<MauritaniaCultureId, FC<{ active: boolean }>> = {
  bidan: IconBidan,
  soninke: IconSoninke,
  wolof: IconWolof,
  pulaar: IconPulaar,
};

/* ── Tab button (shared between desktop & mobile) ── */
function CultureTab({
  id,
  active,
  onClick,
  variant,
  labels,
}: {
  id: MauritaniaCultureId;
  active: boolean;
  onClick: () => void;
  variant: "desktop" | "mobile";
  labels: { label: string; arabic: string };
}) {
  const Icon = icons[id];
  const colors = CULTURE_COLORS[id];

  if (variant === "mobile") {
    return (
      <button
        type="button"
        role="tab"
        aria-selected={active}
        onClick={onClick}
        className="relative flex w-full flex-col items-center justify-center gap-0.5 px-1 py-2.5 outline-none"
      >
        {active && (
          <motion.span
            layoutId="mobile-culture-pill"
            className={`absolute inset-x-1 -top-0.5 h-[3px] rounded-full ${colors.active}`}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        )}
        <span className={active ? colors.accent : "text-cream/50"}>
          <Icon active={active} />
        </span>
        <span className={`text-[0.625rem] font-semibold uppercase tracking-wider ${active ? "text-cream" : "text-cream/40"}`}>
          {labels.label}
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      aria-controls="culture-track-panel"
      id={`culture-tab-${id}`}
      onClick={onClick}
      className="relative flex w-full min-h-[5rem] flex-col items-center justify-center gap-1.5 overflow-hidden rounded-2xl px-1 py-3 outline-none transition-colors focus-visible:ring-2 focus-visible:ring-sand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cream sm:min-h-[5.5rem] sm:px-2 sm:py-4"
    >
      {active && (
        <motion.span
          layoutId="culture-tab-highlight"
          className={`absolute inset-0 rounded-2xl ${colors.active} ${colors.glow} ring-1 ${colors.ring}`}
          transition={{ type: "spring", stiffness: 400, damping: 32 }}
        />
      )}
      <span className={`relative z-10 flex flex-col items-center gap-1 ${active ? "text-cream" : "text-night-sky"}`}>
        <Icon active={active} />
        <span className="text-center font-body text-[0.72rem] font-semibold uppercase leading-tight tracking-[0.14em] sm:text-[0.78rem]">
          {labels.label}
        </span>
        <span
          className={`font-arabic text-center text-[0.72rem] leading-snug sm:text-[0.82rem] ${
            active ? "text-cream/85" : "text-night-sky/45"
          }`}
        >
          {labels.arabic}
        </span>
      </span>
    </button>
  );
}

export default function CultureUpNavbar() {
  const { t, isRTL } = useLang();
  const { activeCulture, setActiveCulture } = useCulture();
  const { cultures, aria } = t.cultureNav;

  return (
    <>
      {/* ───── Desktop top nav (hidden on mobile) ───── */}
      <section
        className="relative z-20 hidden border-b border-night-sky/[0.07] md:block"
        style={{ background: "linear-gradient(180deg, #E8DFCC 0%, #F2EBDC 38%, #F5F0E1 100%)" }}
        aria-label={aria}
      >
        <div className="container-main py-5 lg:py-6">
          <nav
            role="tablist"
            aria-label={aria}
            className="relative grid w-full grid-cols-4 gap-2 rounded-2xl border border-night-sky/[0.08] bg-[#F5F0E1]/95 p-2 shadow-[0_4px_24px_rgba(26,26,46,0.06),0_1px_0_rgba(255,255,255,0.6)_inset] backdrop-blur-md sm:rounded-3xl"
            dir={isRTL ? "rtl" : "ltr"}
          >
            {ORDER.map((id) => (
              <CultureTab
                key={id}
                id={id}
                active={activeCulture === id}
                onClick={() => setActiveCulture(id)}
                variant="desktop"
                labels={cultures[id]}
              />
            ))}
          </nav>
        </div>
      </section>

      {/* ───── Mobile top sticky navbar (hidden on desktop) ───── */}
      <div
        className="sticky top-0 z-40 border-b border-white/[0.08] md:hidden"
        style={{
          background: "linear-gradient(180deg, rgba(26,26,46,0.95) 0%, rgba(26,26,46,0.88) 100%)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <nav
          role="tablist"
          aria-label={aria}
          className="grid grid-cols-4 gap-0"
          dir={isRTL ? "rtl" : "ltr"}
        >
          {ORDER.map((id) => (
            <CultureTab
              key={id}
              id={id}
              active={activeCulture === id}
              onClick={() => setActiveCulture(id)}
              variant="mobile"
              labels={cultures[id]}
            />
          ))}
        </nav>
      </div>
    </>
  );
}
