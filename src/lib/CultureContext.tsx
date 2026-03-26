"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";

export type MauritaniaCultureId = "bidan" | "soninke" | "wolof" | "pulaar";

type CultureContextType = {
  activeCulture: MauritaniaCultureId;
  setActiveCulture: (c: MauritaniaCultureId) => void;
};

const CultureContext = createContext<CultureContextType | null>(null);

export function CultureProvider({ children }: { children: ReactNode }) {
  const [activeCulture, setActiveCultureState] = useState<MauritaniaCultureId>("bidan");
  const setActiveCulture = useCallback((c: MauritaniaCultureId) => {
    setActiveCultureState(c);
  }, []);

  return (
    <CultureContext.Provider value={{ activeCulture, setActiveCulture }}>{children}</CultureContext.Provider>
  );
}

export function useCulture() {
  const ctx = useContext(CultureContext);
  if (!ctx) throw new Error("useCulture must be used within CultureProvider");
  return ctx;
}
