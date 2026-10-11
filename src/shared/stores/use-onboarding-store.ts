import { create } from "zustand";
import { persist } from "zustand/middleware";

interface OnboardingState {
  step: number;
  setStep: (step: number) => void;
  complete: () => void;
  completed: boolean;
}

// Zustand owns ONLY: onboarding progress (local UI flow).
export const useOnboardingStore = create<OnboardingState>()(
  persist(
    (set) => ({
      step: 0,
      completed: false,
      setStep: (step) => set({ step }),
      complete: () => set({ completed: true }),
    }),
    { name: "steadygrid-onboarding" },
  ),
);
