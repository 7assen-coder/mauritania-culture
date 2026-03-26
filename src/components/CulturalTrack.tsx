"use client";

import { useCulture } from "@/lib/CultureContext";
import MahadraSection from "@/components/MahadraSection";
import MusicSection from "@/components/MusicSection";
import InstrumentsSection from "@/components/InstrumentsSection";
import GamesSection from "@/components/GamesSection";
import AlternateCultureTrack from "@/components/AlternateCultureTrack";

export default function CulturalTrack() {
  const { activeCulture } = useCulture();

  return (
    <div
      id="culture-track-panel"
      role="tabpanel"
      aria-labelledby={`culture-tab-${activeCulture}`}
      className="relative"
    >
      {activeCulture === "bidan" ? (
        <>
          <MahadraSection />
          <MusicSection />
          <InstrumentsSection />
          <GamesSection />
        </>
      ) : (
        <AlternateCultureTrack culture={activeCulture} />
      )}
    </div>
  );
}
