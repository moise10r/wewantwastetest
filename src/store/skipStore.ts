import { create } from "zustand";
import { Skip } from "@/interfaces/skip";

interface SkipState {
  selectedSkip: Skip | null;
  selectSkip: (skip: Skip) => void;
}

export const useSkipStore = create<SkipState>((set) => ({
  selectedSkip: null,
  selectSkip: (skip) => set({ selectedSkip: skip }),
}));
