"use client";

import { LanguageProvider } from "@/lib/LanguageContext";
import { VideoProvider } from "@/lib/VideoContext";
import { CultureProvider } from "@/lib/CultureContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CultureUpNavbar from "@/components/CultureUpNavbar";
import CulturalTrack from "@/components/CulturalTrack";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <VideoProvider>
        <main className="overflow-hidden">
          <Navbar />
          <HeroSection />
          <CultureProvider>
            <CultureUpNavbar />
            <CulturalTrack />
          </CultureProvider>
          <Footer />
        </main>
      </VideoProvider>
    </LanguageProvider>
  );
}
