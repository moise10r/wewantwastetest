import { create, StateCreator } from "zustand";
import { Skip } from "@/interfaces/skip"; // Assuming "@/interfaces/skip" is correct

interface SkipState {
  selectedSkip: Skip | null;
  skips: Skip[];
  selectSkip: (skip: Skip | null) => void;
  setSkips: (skips: Skip[]) => void;
}

const skipStore: StateCreator<SkipState> = (set) => ({
  selectedSkip: null,
  skips: [],
  selectSkip: (skip) => set({ selectedSkip: skip }),
  setSkips: (skips) => set({ skips: skips }),
});

export const useSkipStore = create<SkipState>()(skipStore);
