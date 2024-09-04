import { create } from 'zustand';

type User = {
  id: string;
  name: string;
} | null;

type AuthStore = {
  user: User;
  signIn: () => void;
  signOut: () => void;
  signUp: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  signIn: () => set({ user: { id: '1', name: 'John Doe' } }),
  signOut: () => set({ user: null }),
  signUp: () => set({ user: { id: '1', name: 'John Doe' } }),
}));
