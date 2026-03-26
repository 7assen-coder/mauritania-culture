"use client";

import { useEffect, useId } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useVideo } from "@/lib/VideoContext";

export function SoundWave({ delay = 0, barColor }: { delay?: number; barColor?: string }) {
  return (
    <div className="flex h-5 items-end gap-[3px]">
      {[0.6, 1, 0.4, 0.8, 0.5].map((h, i) => (
        <motion.div
          key={i}
          className={`w-[3px] rounded-full ${barColor || "bg-sand-gold/30"}`}
          animate={{ height: [`${h * 20}px`, `${h * 8}px`, `${h * 20}px`] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: delay + i * 0.15, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

export function FloatingNotes() {
  const notes = ["♪", "♫", "♩", "♬", "♪"];
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {notes.map((note, i) => (
        <motion.span
          key={i}
          className="absolute font-serif text-4xl text-sand-gold/[0.06] select-none"
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

export function VinylVideo({
  videoId,
  title,
  index,
  trackLabel,
}: {
  videoId: string;
  title: string;
  index: number;
  trackLabel: string;
}) {
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
          className="absolute inset-0 h-full w-full"
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
    <motion.div
      className="group relative cursor-pointer"
      onClick={() => play(uid)}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-surface">
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <Image
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div className="relative" whileHover={{ scale: 1.1 }}>
              <motion.div
                className="absolute rounded-full border-2 border-dashed border-sand-gold/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                style={{ top: "-8px", left: "-8px", width: "calc(100% + 16px)", height: "calc(100% + 16px)" }}
              />
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-sand-gold to-deep-gold shadow-2xl">
                <div className="absolute inset-[6px] rounded-full border border-night-sky/20" />
                <svg className="relative z-10 ms-0.5 h-5 w-5 text-night-sky" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
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
            <span className="font-mono text-[10px] uppercase tracking-widest text-cream/40">
              {trackLabel} {index + 1}
            </span>
          </div>
          <p className="mt-2 text-xs font-medium leading-relaxed text-cream/70">{title}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function ArtistCard({
  artist,
  compact,
}: {
  artist: { name: string; role: string; desc: string };
  compact?: boolean;
}) {
  if (compact) {
    return (
      <div className="flex items-center gap-4 rounded-xl border border-border/40 bg-surface/60 px-5 py-4 backdrop-blur-sm">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-sand-gold/20 bg-gradient-to-br from-sand-gold/20 to-sand-gold/5 font-heading text-sm font-bold text-sand-gold">
          {artist.name.charAt(0)}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline gap-2">
            <h4 className="text-sm font-semibold text-cream">{artist.name}</h4>
            <span className="text-[10px] font-medium text-sand-gold/50">{artist.role}</span>
          </div>
          <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-cream/40">{artist.desc}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative h-full">
      <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-sand-gold/20 via-transparent to-sand-gold/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div
        className="relative flex h-full flex-col rounded-xl border border-border bg-surface transition-all duration-300 hover:border-sand-gold/30"
        style={{ padding: "clamp(1.5rem, 3vw, 2.5rem)" }}
      >
        <div className="mb-6 flex items-center gap-5">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-sand-gold/20 bg-gradient-to-br from-sand-gold/20 to-sand-gold/5 font-heading text-base font-bold text-sand-gold">
            {artist.name.charAt(0)}
          </div>
          <div>
            <h4 className="text-sm font-semibold text-cream">{artist.name}</h4>
            <span className="mt-1.5 block text-[11px] font-medium tracking-wide text-sand-gold/60">{artist.role}</span>
          </div>
        </div>
        <div className="mb-5 h-px w-full bg-gradient-to-r from-transparent via-sand-gold/15 to-transparent" />
        <p className="flex-1 text-sm leading-7 text-cream/50">{artist.desc}</p>
      </div>
    </div>
  );
}
