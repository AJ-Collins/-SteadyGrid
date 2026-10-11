import { create } from "zustand";

interface ModalState {
  activeModal: string | null;
  openModal: (id: string) => void;
  closeModal: () => void;
}

// Zustand owns ONLY: modal visibility. No server data.
export const useModalStore = create<ModalState>()((set) => ({
  activeModal: null,
  openModal: (id) => set({ activeModal: id }),
  closeModal: () => set({ activeModal: null }),
}));
