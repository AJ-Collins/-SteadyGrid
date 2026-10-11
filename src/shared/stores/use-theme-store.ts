import { create } from "zustand";

interface ThemeState {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

// Zustand owns ONLY: theme preferences. No backend data here.
export const useThemeStore = create<ThemeState>()((set) => ({
  theme: "light",
  toggleTheme: () =>
    set((s) => ({ theme: s.theme === "light" ? "dark" : "light" })),
}));
