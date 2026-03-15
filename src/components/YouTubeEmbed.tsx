"use client";

import { useEffect, useId } from "react";
import Image from "next/image";
import { useVideo } from "@/lib/VideoContext";

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
}

export default function YouTubeEmbed({ videoId, title }: YouTubeEmbedProps) {
  const uid = useId();
  const { activeId, play, stop } = useVideo();
  const isPlaying = activeId === uid;

  useEffect(() => {
    return () => stop(uid);
  }, [uid, stop]);

  if (isPlaying) {
    return (
      <div
        className="relative w-full overflow-hidden rounded-2xl bg-night-sky"
        style={{ paddingBottom: "56.25%" }}
      >
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
    <button
      onClick={() => play(uid)}
      className="relative w-full overflow-hidden rounded-2xl group cursor-pointer block bg-night-sky"
      style={{ paddingBottom: "56.25%" }}
      aria-label={`Play: ${title}`}
    >
      <Image
        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
        unoptimized
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10 group-hover:from-black/60 transition-all duration-500" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-sand-gold/90 group-hover:bg-sand-gold group-hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-2xl">
          <svg className="w-6 h-6 text-night-sky ms-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 p-4">
        <p className="text-white/80 text-xs font-medium tracking-wide">{title}</p>
      </div>
    </button>
  );
}
