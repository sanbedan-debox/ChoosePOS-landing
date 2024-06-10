import { create } from "zustand";

type Store = {
  isModalOpen: boolean;
  toggleModal: () => void;
  emailp: string;
  setEmailp: (emailp: string) => void;
  toast: { message: string; type: "success" | "error" | "warning" } | null;
  setToast: (
    toast: { message: string; type: "success" | "error" | "warning" } | null
  ) => void;
};

const useStore = create<Store>((set) => ({
  isModalOpen: false,
  toggleModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
  emailp: "",
  setEmailp: (emailp) => set((state) => ({ emailp: emailp })),
  toast: null,
  setToast: (toast) => set((state) => ({ toast })),
}));

export default useStore;
