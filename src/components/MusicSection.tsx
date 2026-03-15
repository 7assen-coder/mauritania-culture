"use client";

import { useEffect, useId } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import SectionTitle from "./SectionTitle";
import { useLang } from "@/lib/LanguageContext";
import { useVideo } from "@/lib/VideoContext";

function SoundWave({ delay = 0 }: { delay?: number }) {
  return (
    <div className="flex items-end gap-[3px] h-5">
      {[0.6, 1, 0.4, 0.8, 0.5].map((h, i) => (
        <motion.div
          key={i}
          className="w-[3px] rounded-full bg-sand-gold/30"
          animate={{ height: [`${h * 20}px`, `${h * 8}px`, `${h * 20}px`] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: delay + i * 0.15, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

function FloatingNotes() {
  const notes = ["♪", "♫", "♩", "♬", "♪"];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {notes.map((note, i) => (
        <motion.span
          key={i}
          className="absolute text-sand-gold/[0.06] text-4xl select-none font-serif"
          style={{ left: `${15 + i * 18}%`, top: `${20 + (i % 3) * 25}%` }}
          animate={{ y: [-10, 10, -10], rotate: [-5, 5, -5], opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 4 + i * 0.5, repeat: Infinity, delay: i * 0.8, ease: "easeInOut" }}
        >
          {note}
        </motion.span>
      ))}
    </div>
  );
}

function VinylVideo({ videoId, title, index, trackLabel }: { videoId: string; title: string; index: number; trackLabel: string }) {
  const uid = useId();
  const { activeId, play, stop } = useVideo();
  const isPlaying = activeId === uid;

  useEffect(() => {
    return () => stop(uid);
  }, [uid, stop]);

  if (isPlaying) {
    return (
      <div className="relative w-full overflow-hidden rounded-2xl bg-night-sky" style={{ paddingBottom: "56.25%" }}>
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    );
  }

  return (
    <motion.div className="group relative cursor-pointer" onClick={() => play(uid)} whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
      <div className="relative overflow-hidden rounded-2xl bg-surface border border-border/60">
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <Image src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" unoptimized />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div className="relative" whileHover={{ scale: 1.1 }}>
              <motion.div className="absolute rounded-full border-2 border-sand-gold/30 border-dashed" animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} style={{ top: "-8px", left: "-8px", width: "calc(100% + 16px)", height: "calc(100% + 16px)" }} />
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sand-gold to-deep-gold flex items-center justify-center shadow-2xl relative">
                <div className="absolute inset-[6px] rounded-full border border-night-sky/20" />
                <svg className="w-5 h-5 text-night-sky ms-0.5 relative z-10" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </div>
            </motion.div>
          </div>
        </div>
        <div style={{ padding: "1rem 1.25rem" }}>
          <div className="flex items-center gap-3">
            <div className="flex items-end gap-[2px] opacity-50">
              {[3, 5, 4, 6, 3].map((h, j) => (
                <div key={j} className="w-[2px] rounded-full bg-sand-gold" style={{ height: `${h}px` }} />
              ))}
            </div>
            <span className="text-cream/40 text-[10px] font-mono uppercase tracking-widest">{trackLabel} {index + 1}</span>
          </div>
          <p className="text-cream/70 text-xs font-medium mt-2 leading-relaxed">{title}</p>
        </div>
      </div>
    </motion.div>
  );
}

function ArtistCard({ artist, compact }: { artist: { name: string; role: string; desc: string }; compact?: boolean }) {
  if (compact) {
    return (
      <div className="flex items-center gap-4 bg-surface/60 backdrop-blur-sm rounded-xl border border-border/40 px-5 py-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sand-gold/20 to-sand-gold/5 flex items-center justify-center text-sand-gold font-heading font-bold text-sm shrink-0 border border-sand-gold/20">
          {artist.name.charAt(0)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2">
            <h4 className="text-sm font-semibold text-cream">{artist.name}</h4>
            <span className="text-[10px] text-sand-gold/50 font-medium">{artist.role}</span>
          </div>
          <p className="text-xs text-cream/40 leading-relaxed mt-1 line-clamp-2">{artist.desc}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative h-full">
      <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-sand-gold/20 via-transparent to-sand-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative bg-surface rounded-xl border border-border hover:border-sand-gold/30 transition-all duration-300 h-full flex flex-col" style={{ padding: "clamp(1.5rem, 3vw, 2.5rem)" }}>
        <div className="flex items-center gap-5 mb-6">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-sand-gold/20 to-sand-gold/5 flex items-center justify-center text-sand-gold font-heading font-bold text-base shrink-0 border border-sand-gold/20">
            {artist.name.charAt(0)}
          </div>
          <div>
            <h4 className="text-sm font-semibold text-cream">{artist.name}</h4>
            <span className="text-[11px] text-sand-gold/60 mt-1.5 block font-medium tracking-wide">{artist.role}</span>
          </div>
        </div>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-sand-gold/15 to-transparent mb-5" />
        <p className="text-sm text-cream/50 leading-7 flex-1">{artist.desc}</p>
      </div>
    </div>
  );
}

export default function MusicSection() {
  const { t } = useLang();
  const music = t.music;

  const pairs = [
    { video: { id: "9mq0vDCVQ8k", caption: music.videoCaption3 }, artist: music.artists[0] },
    { video: { id: "OK5RkqWfNs0", caption: music.videoCaption2 }, artist: music.artists[1] },
    { video: { id: "4Dva-geDirI", caption: music.videoCaption1 }, artist: music.artists[2] },
  ];

  return (
    <section id="music" className="relative">
      <div className="relative py-24 lg:py-32 bg-night-sky overflow-hidden">
        <FloatingNotes />
        <div className="container-main relative z-10">
          <SectionTitle subtitle={music.subtitle} title={music.title} description={music.description} light={true} />

          {/* Mobile: video + artist paired */}
          <div className="flex flex-col gap-10 md:hidden">
            {pairs.map((pair, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex flex-col gap-5">
                  <VinylVideo videoId={pair.video.id} title={pair.video.caption} index={i} trackLabel={music.trackLabel} />
                  <ArtistCard artist={pair.artist} compact />
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Desktop: videos row then artists row */}
          <div className="hidden md:block">
            <ScrollReveal>
              <div className="grid grid-cols-3 gap-6 lg:gap-8">
                {pairs.map((pair, i) => (
                  <VinylVideo key={i} videoId={pair.video.id} title={pair.video.caption} index={i} trackLabel={music.trackLabel} />
                ))}
              </div>
            </ScrollReveal>

            <div style={{ height: "clamp(3rem, 5vw, 5rem)" }} />

            <ScrollReveal delay={0.1}>
              <div className="flex items-center justify-center gap-4 mb-12">
                <SoundWave delay={0} />
                <div className="w-8 h-0.5 bg-sand-gold/40 rounded-full" />
                <h3 className="text-base font-heading font-semibold text-cream tracking-wide">{music.artistsTitle}</h3>
                <div className="w-8 h-0.5 bg-sand-gold/40 rounded-full" />
                <SoundWave delay={0.3} />
              </div>
              <div className="grid grid-cols-3 gap-8 lg:gap-10">
                {pairs.map((pair, i) => (
                  <ArtistCard key={i} artist={pair.artist} />
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <div className="relative h-12 lg:h-16 bg-gradient-to-b from-[#1A1A2E] to-[#252538]" />
      <div className="relative">
        <svg viewBox="0 0 1440 220" className="w-full block" preserveAspectRatio="none" style={{ height: "140px" }}>
          <defs>
            <linearGradient id="darkToCream" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#252538" />
              <stop offset="40%" stopColor="#4a4555" />
              <stop offset="70%" stopColor="#a09880" />
              <stop offset="100%" stopColor="#F5F0E1" />
            </linearGradient>
          </defs>
          <path fill="url(#darkToCream)" d="M0,60 C360,120 720,30 1080,80 C1260,100 1380,70 1440,60 L1440,220 L0,220 Z" />
        </svg>
      </div>
    </section>
  );
}
