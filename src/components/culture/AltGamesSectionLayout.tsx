"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "../ScrollReveal";
import SectionTitle from "../SectionTitle";
import type { CultureAccent } from "../SectionTitle";

export type AltGameItem = {
  name: string;
  aka: string;
  image: string;
  description: string;
  occasion: string;
  players: string;
  rules: readonly string[];
};

const GAME_ACCENTS: Record<CultureAccent, {
  badge: string;
  badgeText: string;
  tagBg: string;
  tagBorder: string;
  tagText: string;
  ruleCircleBg: string;
  ruleCircleText: string;
  howToPlayText: string;
  numberColor: string;
  patternHex: string;
}> = {
  soninke: {
    badge: "bg-indigo-500",
    badgeText: "text-white",
    tagBg: "bg-indigo-500/10",
    tagBorder: "border-indigo-400/15",
    tagText: "text-indigo-300/80",
    ruleCircleBg: "bg-indigo-500/10",
    ruleCircleText: "text-indigo-400/60",
    howToPlayText: "text-indigo-400/50",
    numberColor: "text-indigo-500/15",
    patternHex: "6366f1",
  },
  wolof: {
    badge: "bg-teal-500",
    badgeText: "text-white",
    tagBg: "bg-teal-500/10",
    tagBorder: "border-teal-400/15",
    tagText: "text-teal-300/80",
    ruleCircleBg: "bg-teal-500/10",
    ruleCircleText: "text-teal-400/60",
    howToPlayText: "text-teal-400/50",
    numberColor: "text-teal-500/15",
    patternHex: "14b8a6",
  },
  pulaar: {
    badge: "bg-emerald-500",
    badgeText: "text-white",
    tagBg: "bg-emerald-500/10",
    tagBorder: "border-emerald-400/15",
    tagText: "text-emerald-300/80",
    ruleCircleBg: "bg-emerald-500/10",
    ruleCircleText: "text-emerald-400/60",
    howToPlayText: "text-emerald-400/50",
    numberColor: "text-emerald-500/15",
    patternHex: "10b981",
  },
};

export default function AltGamesSectionLayout({
  sectionId,
  subtitle,
  title,
  description,
  howToPlay,
  items,
  cultureAccent,
}: {
  sectionId: string;
  subtitle: string;
  title: string;
  description: string;
  howToPlay: string;
  items: readonly AltGameItem[];
  cultureAccent: CultureAccent;
}) {
  const numbers = ["01", "02", "03"];
  const accent = GAME_ACCENTS[cultureAccent];

  return (
    <section id={sectionId} className="relative">
      <div className="relative overflow-hidden bg-night-sky">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${accent.patternHex}' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="container-main relative z-10 py-24 lg:py-32">
          <SectionTitle subtitle={subtitle} title={title} description={description} light cultureAccent={cultureAccent} />

          <div className="mt-4">
            {items.map((game, i) => {
              const isReversed = i % 2 !== 0;
              const isRemote = game.image.startsWith("http");
              const isLast = i === items.length - 1;

              return (
                <div key={game.name} className={isLast ? "" : "mb-24 lg:mb-32"}>
                  <ScrollReveal delay={i * 0.08}>
                    <div className="relative">
                      {/* Large number watermark */}
                      <div className={`pointer-events-none absolute -top-4 font-heading text-6xl font-black leading-none select-none sm:-top-8 sm:text-[8rem] lg:-top-12 lg:text-[12rem] ${isReversed ? "right-4" : "left-4"} ${accent.numberColor}`}>
                        {numbers[i]}
                      </div>

                      <div className={`relative grid grid-cols-1 items-stretch gap-0 overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] lg:grid-cols-5`}>
                        {/* Image — takes 2/5 */}
                        <div className={`relative min-h-[260px] overflow-hidden lg:col-span-2 lg:min-h-[400px] ${isReversed ? "lg:order-2" : ""}`}>
                          <Image
                            src={game.image}
                            alt={game.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                            sizes="(max-width: 1023px) 100vw, 40vw"
                            unoptimized={isRemote}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:bg-none" />
                          {isReversed
                            ? <div className="absolute inset-0 hidden bg-gradient-to-l from-transparent to-[#1A1A2E]/60 lg:block" />
                            : <div className="absolute inset-0 hidden bg-gradient-to-r from-transparent to-[#1A1A2E]/60 lg:block" />}
                          <div className="absolute top-5 left-5">
                            <span className={`rounded-full ${accent.badge} px-3 py-1.5 text-xs font-bold tracking-wide ${accent.badgeText}`}>
                              {game.aka}
                            </span>
                          </div>
                        </div>

                        {/* Content — takes 3/5 */}
                        <div className={`flex flex-col justify-center lg:col-span-3 ${isReversed ? "lg:order-1" : ""}`} style={{ padding: "clamp(2rem, 5vw, 5rem)" }}>
                          <h3 className="font-heading mb-5 text-xl font-bold text-cream lg:text-2xl">{game.name}</h3>

                          <div className="mb-6 flex flex-wrap items-center gap-3">
                            <span className={`rounded-lg border ${accent.tagBorder} ${accent.tagBg} px-3 py-1.5 text-xs font-medium ${accent.tagText}`}>
                              {game.occasion}
                            </span>
                            <span className="rounded-lg border border-cream/10 bg-cream/5 px-3 py-1.5 text-xs font-medium text-cream/40">
                              {game.players}
                            </span>
                          </div>

                          <p className="mb-8 text-sm leading-8 text-cream/45">{game.description}</p>

                          <div className="border-t border-white/[0.06] pt-6">
                            <h4 className={`mb-5 text-xs font-semibold uppercase tracking-[0.15em] ${accent.howToPlayText}`}>{howToPlay}</h4>
                            <div className="space-y-3.5">
                              {game.rules.map((rule, j) => (
                                <div key={j} className="flex items-start gap-3.5">
                                  <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${accent.ruleCircleBg} text-[10px] font-bold ${accent.ruleCircleText}`}>
                                    {j + 1}
                                  </span>
                                  <span className="text-sm leading-relaxed text-cream/40">{rule}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
