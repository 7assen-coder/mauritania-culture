"use client";

import ScrollReveal from "./ScrollReveal";

interface SectionTitleProps {
  subtitle: string;
  title: string;
  description?: string;
  light?: boolean;
}

export default function SectionTitle({ subtitle, title, description, light = false }: SectionTitleProps) {
  return (
    <ScrollReveal className="text-center mb-20 lg:mb-24">
      <span
        className={`inline-block font-arabic text-sm tracking-[0.25em] uppercase mb-6 ${
          light ? "text-sand-gold/80" : "text-terracotta"
        }`}
      >
        {subtitle}
      </span>
      <h2
        className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-7 leading-tight ${
          light ? "text-cream" : "text-night-sky"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base leading-7 ${
            light ? "text-cream/55" : "text-night-sky/55"
          }`}
          style={{ maxWidth: "36rem", marginInline: "auto", textAlign: "center" }}
        >
          {description}
        </p>
      )}
      <div className="flex items-center justify-center gap-3 mt-10">
        <div className={`h-px w-12 ${light ? "bg-sand-gold/30" : "bg-terracotta/30"}`} />
        <div className={`w-2.5 h-2.5 rotate-45 border ${light ? "border-sand-gold/40" : "border-terracotta/40"}`} />
        <div className={`h-px w-12 ${light ? "bg-sand-gold/30" : "bg-terracotta/30"}`} />
      </div>
    </ScrollReveal>
  );
}
