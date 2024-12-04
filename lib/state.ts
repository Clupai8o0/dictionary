import { create } from "zustand";

interface FontState {
  font: string;
  setFont: (font: string) => void;
}

export const useFontState = create<FontState>()((set) => ({
  font: "sans-serif",
  setFont: (font) => set({ font }),
}))