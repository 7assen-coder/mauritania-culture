"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

type VideoCtx = {
  activeId: string | null;
  play: (id: string) => void;
  stop: (id: string) => void;
};

const Ctx = createContext<VideoCtx>({ activeId: null, play: () => {}, stop: () => {} });

export function VideoProvider({ children }: { children: ReactNode }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const play = useCallback((id: string) => setActiveId(id), []);
  const stop = useCallback((id: string) => setActiveId((prev) => (prev === id ? null : prev)), []);
  return <Ctx.Provider value={{ activeId, play, stop }}>{children}</Ctx.Provider>;
}

export const useVideo = () => useContext(Ctx);
