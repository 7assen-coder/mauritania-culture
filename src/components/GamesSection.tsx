"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import SectionTitle from "./SectionTitle";
import { useLang } from "@/lib/LanguageContext";

export default function GamesSection() {
  const { t } = useLang();
  const games = t.games;
  const numbers = ["01", "02", "03"];

  return (
    <section id="games" className="relative">
      <div className="relative py-24 lg:py-32 bg-night-sky overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A84B' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        <div className="container-main relative z-10">
          <SectionTitle subtitle={games.subtitle} title={games.title} description={games.description} light={true} />

          <div className="space-y-24 lg:space-y-32">
            {games.items.map((game, i) => {
              const isReversed = i % 2 !== 0;

              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <motion.div whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 200, damping: 25 }} className="group relative">
                    <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-sand-gold/20 via-transparent to-sand-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative rounded-2xl overflow-hidden bg-surface border border-border/60 grid grid-cols-1 lg:grid-cols-2">
                      <div className={`relative min-h-[280px] lg:min-h-[360px] overflow-hidden ${isReversed ? "lg:order-2" : ""}`}>
                        <Image src={game.image} alt={game.name} fill className="object-cover group-hover:scale-[1.03] transition-transform duration-700" sizes="(max-width: 1023px) 100vw, 50vw" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#222233]/70 to-transparent lg:from-transparent lg:to-transparent" />
                        <div className={`absolute inset-0 hidden lg:block ${isReversed ? "bg-gradient-to-l" : "bg-gradient-to-r"} from-transparent via-transparent to-[#222233]/80`} />
                        <div className="absolute top-5 left-5">
                          <span className="px-3 py-1.5 rounded-full bg-sand-gold text-night-sky text-xs font-bold tracking-wide">{game.aka}</span>
                        </div>
                        <div className="absolute bottom-5 left-5">
                          <span className="font-heading text-6xl lg:text-7xl font-black text-cream/10 leading-none select-none">{numbers[i]}</span>
                        </div>
                      </div>

                      <div className={`flex flex-col justify-center ${isReversed ? "lg:order-1" : ""}`} style={{ padding: "clamp(2rem, 5vw, 5rem)" }}>
                        <h3 className="font-heading font-bold text-2xl lg:text-3xl text-cream" style={{ marginBottom: "1.5rem" }}>{game.name}</h3>
                        <div className="flex items-center gap-3 flex-wrap" style={{ marginBottom: "2rem" }}>
                          <span className="px-4 py-2 rounded-lg bg-sand-gold/10 text-sand-gold/80 text-xs border border-sand-gold/15 font-medium">{game.occasion}</span>
                          <span className="px-4 py-2 rounded-lg bg-cream/5 text-cream/40 text-xs border border-cream/10 font-medium">{game.players}</span>
                        </div>
                        <p className="text-base text-cream/50 leading-8" style={{ marginBottom: "2.5rem" }}>{game.description}</p>
                        <div style={{ paddingTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                          <h4 className="text-xs uppercase tracking-[0.15em] text-sand-gold/50 font-semibold" style={{ marginBottom: "1.5rem" }}>{games.howToPlay}</h4>
                          <div className="space-y-4">
                            {game.rules.map((rule, j) => (
                              <div key={j} className="flex items-start gap-4">
                                <span className="w-6 h-6 rounded-full bg-sand-gold/10 flex items-center justify-center text-[10px] text-sand-gold/60 font-bold shrink-0 mt-0.5">{j + 1}</span>
                                <span className="text-sm text-cream/40 leading-6">{rule}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
