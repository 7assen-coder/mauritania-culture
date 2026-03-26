"use client";

import { useId } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { CultureAccent } from "./SectionTitle";
import SectionTitle from "./SectionTitle";
import ScrollReveal from "./ScrollReveal";
import YouTubeEmbed from "./YouTubeEmbed";
import { useLang } from "@/lib/LanguageContext";
import type { MauritaniaCultureId } from "@/lib/CultureContext";
import AltMusicSectionLayout from "./culture/AltMusicSectionLayout";
import AltGamesSectionLayout from "./culture/AltGamesSectionLayout";

type AltId = Exclude<MauritaniaCultureId, "bidan">;

const cultureDesign: Record<AltId, {
  heroBg: string;
  heroBottomBar: string;
  waveFromColor: string;
  accentGradient: string;
  accentBar: string;
  accentBorder: string;
  accentDivider: string;
  featureIconBg: string;
  featureIconColor: string;
  featureIconHoverBg: string;
  featureHoverBorder: string;
  statColor: string;
  patternHex: string;
  linkColor: string;
  linkDecoColor: string;
  linkHoverColor: string;
  cardHoverShadow: string;
  nameHoverColor: string;
  footerAccent: string;
}> = {
  soninke: {
    heroBg: "linear-gradient(180deg, #F5F0E1 0%, #E8E0F0 40%, #DDD5EB 85%, #B8A8D0 100%)",
    heroBottomBar: "from-[#B8A8D0] to-[#9888B8]",
    waveFromColor: "#9888B8",
    accentGradient: "from-indigo-500/15 to-violet-500/8",
    accentBar: "from-indigo-500 to-violet-500",
    accentBorder: "border-indigo-400/15",
    accentDivider: "bg-indigo-400/20",
    featureIconBg: "bg-indigo-500/10",
    featureIconColor: "text-indigo-600",
    featureIconHoverBg: "group-hover:bg-indigo-500/20",
    featureHoverBorder: "hover:border-indigo-400/20",
    statColor: "text-indigo-900",
    patternHex: "6366f1",
    linkColor: "text-indigo-500",
    linkDecoColor: "decoration-indigo-400/30",
    linkHoverColor: "hover:text-indigo-700",
    cardHoverShadow: "hover:shadow-indigo-200/40",
    nameHoverColor: "group-hover:text-indigo-500",
    footerAccent: "text-indigo-400",
  },
  wolof: {
    heroBg: "linear-gradient(180deg, #F5F0E1 0%, #E0EDE8 40%, #D0E5DD 85%, #A8C8B8 100%)",
    heroBottomBar: "from-[#A8C8B8] to-[#88B0A0]",
    waveFromColor: "#88B0A0",
    accentGradient: "from-teal-500/15 to-cyan-500/8",
    accentBar: "from-teal-500 to-cyan-600",
    accentBorder: "border-teal-400/15",
    accentDivider: "bg-teal-400/20",
    featureIconBg: "bg-teal-500/10",
    featureIconColor: "text-teal-600",
    featureIconHoverBg: "group-hover:bg-teal-500/20",
    featureHoverBorder: "hover:border-teal-400/20",
    statColor: "text-teal-900",
    patternHex: "14b8a6",
    linkColor: "text-teal-500",
    linkDecoColor: "decoration-teal-400/30",
    linkHoverColor: "hover:text-teal-700",
    cardHoverShadow: "hover:shadow-teal-200/40",
    nameHoverColor: "group-hover:text-teal-500",
    footerAccent: "text-teal-400",
  },
  pulaar: {
    heroBg: "linear-gradient(180deg, #F5F0E1 0%, #E0EBD8 40%, #D0E0C8 85%, #A8C898 100%)",
    heroBottomBar: "from-[#A8C898] to-[#88B080]",
    waveFromColor: "#88B080",
    accentGradient: "from-emerald-500/15 to-green-500/8",
    accentBar: "from-emerald-500 to-green-600",
    accentBorder: "border-emerald-400/15",
    accentDivider: "bg-emerald-400/20",
    featureIconBg: "bg-emerald-500/10",
    featureIconColor: "text-emerald-600",
    featureIconHoverBg: "group-hover:bg-emerald-500/20",
    featureHoverBorder: "hover:border-emerald-400/20",
    statColor: "text-emerald-900",
    patternHex: "10b981",
    linkColor: "text-emerald-500",
    linkDecoColor: "decoration-emerald-400/30",
    linkHoverColor: "hover:text-emerald-700",
    cardHoverShadow: "hover:shadow-emerald-200/40",
    nameHoverColor: "group-hover:text-emerald-500",
    footerAccent: "text-emerald-400",
  },
};

const typeColors: Record<string, { bg: string; text: string; border: string }> = {
  Cordes: { bg: "bg-amber-500/10", text: "text-amber-600", border: "border-amber-500/20" },
  Percussion: { bg: "bg-rose-500/10", text: "text-rose-500", border: "border-rose-500/20" },
  Vent: { bg: "bg-teal/10", text: "text-teal", border: "border-teal/20" },
  Mixte: { bg: "bg-violet-500/10", text: "text-violet-600", border: "border-violet-500/20" },
};

const featureIcons = [
  <svg key="1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="3" /><path d="M6 20v-1a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1" /></svg>,
  <svg key="2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
  <svg key="3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>,
  <svg key="4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 22h20L12 2z" /><path d="M12 2v20" /></svg>,
];

function accentOf(id: AltId): CultureAccent { return id; }

export default function AlternateCultureTrack({ culture }: { culture: AltId }) {
  const { t } = useLang();
  const track = t.altTracks[culture];
  const accent = accentOf(culture);
  const instruments = t.instruments;
  const gid = useId().replace(/:/g, "");
  const design = cultureDesign[culture];

  const h = track.heritage;
  const crafts = track.crafts;
  const social = track.social;

  return (
    <div className="relative overflow-hidden">

      {/* ═══════════ HERITAGE ═══════════ */}
      <section id={`${culture}-heritage`} className="relative overflow-hidden">
        <div className="pointer-events-none absolute top-0 inset-x-0 z-0 h-32 bg-gradient-to-b from-[#F5F0E1] to-transparent" />

        <div className="relative" style={{ background: design.heroBg }}>
          <div className="relative z-10 container-main py-24 lg:py-32">

            <SectionTitle cultureAccent={accent} subtitle={h.subtitle} title={h.title} description={h.description} />

            {/* ── Hero image — full width cinematic ── */}
            {h.heroImage && (
              <ScrollReveal>
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-2xl sm:aspect-[2/1]">
                  <Image
                    src={h.heroImage}
                    alt={h.heroImageCaption || h.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  {h.heroImageCaption && (
                    <p className="absolute bottom-5 inset-x-5 text-sm leading-relaxed text-white/80 drop-shadow-lg lg:text-base">
                      {h.heroImageCaption}
                    </p>
                  )}
                </div>
              </ScrollReveal>
            )}

            {/* ── Body text + stats — centered block ── */}
            <div style={{ height: "clamp(3rem, 5vw, 5rem)" }} />
            <ScrollReveal>
              <div className="mx-auto max-w-3xl">
                <div className={`mb-8 h-[3px] w-14 rounded-full bg-gradient-to-r ${design.accentBar}`} />
                <p className="text-base leading-[2] text-night-sky/60 lg:text-lg lg:leading-[2]">{h.body}</p>

                <div className={`mt-10 grid grid-cols-1 gap-6 border-t ${design.accentBorder} pt-8 sm:grid-cols-3 sm:gap-8`}>
                  {h.stats.map((s) => (
                    <div key={s.label} className="text-center">
                      <span className={`block font-heading text-xl font-bold ${design.statColor} sm:text-2xl lg:text-3xl`}>{s.value}</span>
                      <span className="mt-1.5 block text-[11px] uppercase tracking-wider text-night-sky/35">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* ── Video — centered, generous space ── */}
            <div style={{ height: "clamp(4rem, 7vw, 8rem)" }} />
            <ScrollReveal>
              <div className="mx-auto max-w-3xl">
                <div className="overflow-hidden rounded-xl shadow-xl">
                  <YouTubeEmbed videoId={h.videoId} title={h.videoCaption} />
                </div>
                <p className="mt-5 text-center text-xs tracking-wide text-night-sky/35">{h.videoCaption}</p>
              </div>
            </ScrollReveal>

            {/* ── Features — 2×2 grid with breathing room ── */}
            <div style={{ height: "clamp(4rem, 7vw, 8rem)" }} />
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-10">
              {h.features.map((feature, i) => (
                <ScrollReveal key={feature.title} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`group flex h-full items-start gap-5 rounded-xl border border-white/60 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 lg:p-8 ${design.featureHoverBorder}`}
                    style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06)" }}
                  >
                    <div className={`mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${design.featureIconBg} ${design.featureIconColor} transition-colors ${design.featureIconHoverBg}`}>
                      {featureIcons[i % featureIcons.length]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading mb-3 text-base font-semibold text-night-sky">{feature.title}</h3>
                      <p className="text-sm leading-7 text-night-sky/50">{feature.desc}</p>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* ── Wave transition to dark ── */}
        <div className={`relative h-16 bg-gradient-to-b ${design.heroBottomBar} lg:h-24`} />
        <div className="relative">
          <svg viewBox="0 0 1440 240" className="block h-24 w-full sm:h-32 lg:h-40" preserveAspectRatio="none">
            <defs>
              <linearGradient id={`${gid}-wave1`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={design.waveFromColor} />
                <stop offset="35%" stopColor="#6b5d4a" />
                <stop offset="70%" stopColor="#2a2535" />
                <stop offset="100%" stopColor="#1A1A2E" />
              </linearGradient>
            </defs>
            <path fill={`url(#${gid}-wave1)`} d="M0,80 C360,140 720,40 1080,100 C1260,130 1380,90 1440,80 L1440,240 L0,240 Z" />
          </svg>
        </div>
      </section>

      {/* ═══════════ MUSIC ═══════════ */}
      <AltMusicSectionLayout sectionId={`${culture}-music`} music={track.music} cultureAccent={accent} />

      {/* ═══════════ CRAFTS ═══════════ */}
      <section id={`${culture}-crafts`} className="relative">
        <div className="relative overflow-hidden bg-cream">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23${design.patternHex}' stroke-width='0.5'%3E%3Ccircle cx='40' cy='40' r='30'/%3E%3Ccircle cx='40' cy='40' r='20'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative z-10 container-main py-24 lg:py-32">

            <SectionTitle cultureAccent={accent} subtitle={crafts.subtitle} title={crafts.title} description={crafts.description} />

            {crafts.reference && (
              <ScrollReveal>
                <p className="mb-12 max-w-3xl text-sm leading-7 text-night-sky/55">
                  <a
                    href={crafts.reference.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-medium ${design.linkColor} underline ${design.linkDecoColor} underline-offset-2 transition-colors ${design.linkHoverColor}`}
                  >
                    {crafts.reference.label}
                  </a>
                  <span className="text-night-sky/40"> — {crafts.reference.hint}</span>
                </p>
              </ScrollReveal>
            )}

            {/* ── Videos — side by side ── */}
            <ScrollReveal>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
                {[
                  { id: crafts.videoId1, caption: crafts.videoCaption1 },
                  { id: crafts.videoId2, caption: crafts.videoCaption2 },
                ].map((video) => (
                  <div key={video.id} className="min-w-0">
                    <div className="overflow-hidden rounded-xl shadow-lg">
                      <YouTubeEmbed videoId={video.id} title={video.caption} />
                    </div>
                    <p className="mt-4 text-center text-xs tracking-wide text-night-sky/30">{video.caption}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* ── Craft items — spacious cards ── */}
            <div style={{ height: "clamp(4rem, 7vw, 8rem)" }} />
            <div className={`grid gap-10 ${crafts.items.length <= 2 ? "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto" : "grid-cols-1 sm:grid-cols-2"}`}>
              {crafts.items.map((inst, i) => {
                const colors = typeColors[inst.type] || typeColors.Mixte;
                const typeLabel = instruments.typeLabels[inst.type] || inst.type;
                const isRemote = inst.image?.startsWith("http");

                return (
                  <ScrollReveal key={inst.name} delay={i * 0.1}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 22 }}
                      className={`group relative h-full overflow-hidden rounded-2xl border border-border-light bg-white transition-shadow duration-300 ${design.cardHoverShadow}`}
                      style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.04), 0 8px 28px rgba(0,0,0,0.05)" }}
                    >
                      {inst.image && (
                        <div className="relative h-56 overflow-hidden sm:h-64">
                          <Image
                            src={inst.image}
                            alt={inst.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                            sizes="(max-width: 639px) 100vw, 50vw"
                            unoptimized={!!isRemote}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                          <div className="absolute bottom-4 left-4">
                            <span className={`inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur-sm bg-white/80 ${colors.text} ${colors.border}`}>
                              {typeLabel}
                            </span>
                          </div>
                        </div>
                      )}
                      <div className="p-6 lg:p-7">
                        <h4 className={`font-heading text-base font-semibold text-night-sky transition-colors duration-300 ${design.nameHoverColor}`}>
                          {inst.name}
                        </h4>
                        <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-night-sky/30">{inst.origin}</p>
                        <p className="mt-4 text-sm leading-7 text-night-sky/50">{inst.desc}</p>
                      </div>
                    </motion.div>
                  </ScrollReveal>
                );
              })}
            </div>

            <div className="mt-16 flex items-center justify-center gap-3 opacity-30">
              <span className={`text-lg ${design.footerAccent}`}>{"\u{1D11E}"}</span>
              <div className={`h-px w-20 ${design.accentDivider}`} />
              <span className="text-xs font-medium tracking-wider text-night-sky/35 uppercase">{crafts.footerCount}</span>
              <div className={`h-px w-20 ${design.accentDivider}`} />
              <span className={`text-lg ${design.footerAccent}`}>{"\u{1D122}"}</span>
            </div>
          </div>
        </div>

        {/* ── Wave transition to dark ── */}
        <div className="relative h-12 bg-gradient-to-b from-[#F5F0E1] to-[#E8DCC8] lg:h-16" />
        <div className="relative">
          <svg viewBox="0 0 1440 220" className="block h-20 w-full sm:h-28 lg:h-36" preserveAspectRatio="none">
            <defs>
              <linearGradient id={`${gid}-wave2`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#E8DCC8" />
                <stop offset="35%" stopColor="#6b5d4a" />
                <stop offset="70%" stopColor="#2a2535" />
                <stop offset="100%" stopColor="#1A1A2E" />
              </linearGradient>
            </defs>
            <path fill={`url(#${gid}-wave2)`} d="M0,70 C360,130 720,20 1080,80 C1260,110 1380,60 1440,70 L1440,220 L0,220 Z" />
          </svg>
        </div>
      </section>

      {/* ═══════════ SOCIAL / GAMES ═══════════ */}
      <AltGamesSectionLayout
        sectionId={`${culture}-social`}
        subtitle={social.subtitle}
        title={social.title}
        description={social.description}
        howToPlay={social.howToPlay}
        items={social.items}
        cultureAccent={accent}
      />
    </div>
  );
}
