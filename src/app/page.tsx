"use client";

import { LanguageProvider } from "@/lib/LanguageContext";
import { VideoProvider } from "@/lib/VideoContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MahadraSection from "@/components/MahadraSection";
import MusicSection from "@/components/MusicSection";
import InstrumentsSection from "@/components/InstrumentsSection";
import GamesSection from "@/components/GamesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <VideoProvider>
        <main className="overflow-hidden">
          <Navbar />
          <HeroSection />
          <MahadraSection />
          <MusicSection />
          <InstrumentsSection />
          <GamesSection />
          <Footer />
        </main>
      </VideoProvider>
    </LanguageProvider>
  );
}
