"use client";

import ScrollReveal from "./ScrollReveal";

export type CultureAccent = "soninke" | "wolof" | "pulaar";

const accentSubtitle: Record<CultureAccent, string> = {
  soninke: "text-indigo-800",
  wolof: "text-teal-700",
  pulaar: "text-emerald-800",
};

const accentLine: Record<CultureAccent, string> = {
  soninke: "bg-indigo-500/35",
  wolof: "bg-teal-600/35",
  pulaar: "bg-emerald-700/35",
};

const accentDiamond: Record<CultureAccent, string> = {
  soninke: "border-indigo-600/45",
  wolof: "border-teal-600/45",
  pulaar: "border-emerald-700/45",
};

interface SectionTitleProps {
  subtitle: string;
  title: string;
  description?: string;
  light?: boolean;
  /** Accent for alternate culture tracks only; default matches Bidan sections. */
  cultureAccent?: CultureAccent;
}

export default function SectionTitle({
  subtitle,
  title,
  description,
  light = false,
  cultureAccent,
}: SectionTitleProps) {
  const sub = light
    ? "text-sand-gold/80"
    : cultureAccent
      ? accentSubtitle[cultureAccent]
      : "text-terracotta";
  const line = light ? "bg-sand-gold/30" : cultureAccent ? accentLine[cultureAccent] : "bg-terracotta/30";
  const diamond = light ? "border-sand-gold/40" : cultureAccent ? accentDiamond[cultureAccent] : "border-terracotta/40";

  return (
    <ScrollReveal className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
      <span className={`inline-block font-arabic text-sm tracking-[0.25em] uppercase mb-6 ${sub}`}>{subtitle}</span>
      <h2
        className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-7 leading-tight ${
          light ? "text-cream" : "text-night-sky"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base leading-7 ${light ? "text-cream/55" : "text-night-sky/55"}`}
          style={{ maxWidth: "36rem", marginInline: "auto", textAlign: "center" }}
        >
          {description}
        </p>
      )}
      <div className="flex items-center justify-center gap-3 mt-10">
        <div className={`h-px w-12 ${line}`} />
        <div className={`w-2.5 h-2.5 rotate-45 border ${diamond}`} />
        <div className={`h-px w-12 ${line}`} />
      </div>
    </ScrollReveal>
  );
}
