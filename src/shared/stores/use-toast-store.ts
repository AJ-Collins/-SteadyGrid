import { create } from "zustand";

export interface Toast {
  id: string;
  title: string;
  description?: string;
}

interface ToastState {
  toasts: Toast[];
  pushToast: (t: Omit<Toast, "id">) => void;
  dismissToast: (id: string) => void;
}

// Zustand owns ONLY: toast queue (ephemeral UI state).
export const useToastStore = create<ToastState>()((set) => ({
  toasts: [],
  pushToast: (t) =>
    set((s) => ({
      toasts: [...s.toasts, { ...t, id: crypto.randomUUID() }].slice(-5),
    })),
  dismissToast: (id) =>
    set((s) => ({ toasts: s.toasts.filter((t) => t.id !== id) })),
}));
