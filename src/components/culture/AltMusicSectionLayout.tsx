"use client";

import { useId } from "react";
import type { CultureAccent } from "../SectionTitle";
import SectionTitle from "../SectionTitle";
import ScrollReveal from "../ScrollReveal";
import { ArtistCard, FloatingNotes, SoundWave, VinylVideo } from "./musicShared";

export type AltMusicContent = {
  subtitle: string;
  title: string;
  description: string;
  artistsTitle: string;
  trackLabel: string;
  videos: readonly { id: string; caption: string }[];
  artists: readonly { name: string; role: string; desc: string }[];
};

/* ── Culture-specific accent colors for dark music section ── */
const MUSIC_ACCENTS: Record<CultureAccent, { bar: string; divider: string }> = {
  soninke: { bar: "bg-indigo-400/30", divider: "bg-indigo-400/40" },
  wolof:   { bar: "bg-teal-400/30",   divider: "bg-teal-400/40" },
  pulaar:  { bar: "bg-emerald-400/30", divider: "bg-emerald-400/40" },
};

export default function AltMusicSectionLayout({
  sectionId,
  music,
  cultureAccent,
}: {
  sectionId: string;
  music: AltMusicContent;
  cultureAccent: CultureAccent;
}) {
  const waveId = useId().replace(/:/g, "");
  const pairs = music.videos.map((video, i) => ({
    video,
    artist: music.artists[i] ?? music.artists[0],
  }));
  const accent = MUSIC_ACCENTS[cultureAccent];

  return (
    <section id={sectionId} className="relative">
      <div className="relative overflow-hidden bg-night-sky py-24 lg:py-32">
        <FloatingNotes />
        <div className="container-main relative z-10">
          <SectionTitle
            subtitle={music.subtitle}
            title={music.title}
            description={music.description}
            light
            cultureAccent={cultureAccent}
          />

          <div className="flex flex-col gap-10 md:hidden">
            {pairs.map((pair, i) => (
              <ScrollReveal key={pair.video.id} delay={i * 0.1}>
                <div className="flex flex-col gap-5">
                  <VinylVideo videoId={pair.video.id} title={pair.video.caption} index={i} trackLabel={music.trackLabel} />
                  <ArtistCard artist={pair.artist} compact />
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="hidden md:block">
            <ScrollReveal>
              <div className="grid grid-cols-3 gap-6 lg:gap-8">
                {pairs.map((pair, i) => (
                  <VinylVideo key={pair.video.id} videoId={pair.video.id} title={pair.video.caption} index={i} trackLabel={music.trackLabel} />
                ))}
              </div>
            </ScrollReveal>

            <div style={{ height: "clamp(3rem, 5vw, 5rem)" }} />

            <ScrollReveal delay={0.1}>
              <div className="mb-12 flex items-center justify-center gap-4">
                <SoundWave delay={0} barColor={accent.bar} />
                <div className={`h-0.5 w-8 rounded-full ${accent.divider}`} />
                <h3 className="font-heading text-base font-semibold tracking-wide text-cream">{music.artistsTitle}</h3>
                <div className={`h-0.5 w-8 rounded-full ${accent.divider}`} />
                <SoundWave delay={0.3} barColor={accent.bar} />
              </div>
              <div className="grid grid-cols-3 gap-8 lg:gap-10">
                {pairs.map((pair) => (
                  <ArtistCard key={`${pair.video.id}-artist`} artist={pair.artist} />
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <div className="relative h-12 bg-gradient-to-b from-[#1A1A2E] to-[#252538] lg:h-16" />
      <div className="relative">
        <svg viewBox="0 0 1440 220" className="block h-20 w-full sm:h-28 lg:h-36" preserveAspectRatio="none">
          <defs>
            <linearGradient id={`${waveId}-altDarkToCream`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#252538" />
              <stop offset="40%" stopColor="#4a4555" />
              <stop offset="70%" stopColor="#a09880" />
              <stop offset="100%" stopColor="#F5F0E1" />
            </linearGradient>
          </defs>
          <path fill={`url(#${waveId}-altDarkToCream)`} d="M0,60 C360,120 720,30 1080,80 C1260,100 1380,70 1440,60 L1440,220 L0,220 Z" />
        </svg>
      </div>
    </section>
  );
}
