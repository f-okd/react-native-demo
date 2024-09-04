import { ICredentials, supabaseLogin, supabaseLogout, supabaseSignUp, supabaseGetCurrentUser, supabaseUpdateCurrentUser } from '@/lib/supabase/apiAuth';
import { User, Session, WeakPassword } from '@supabase/supabase-js';
import { create } from 'zustand';

type AuthState = {
  user: User | null;
  session: Session | null;
  loading: boolean;
}

type AuthActions = {
  signIn: ({ email, password }: ICredentials) => void;
  signOut: () => Promise<void>;
  signUp: ({ username, email, password }: ICredentials) => Promise<{
    user: User | null;
    session: Session | null;
  }>;
  getCurrentUser: () => Promise<User | null>;
  updateCurrentUser: ({ password, username }: { password?: string; username?: string }) => Promise<User>;
}

const useAuthStore = create<AuthState & AuthActions>((set, get) => ({
  user: null,
  session: null,
  loading: false,
  setUser: (user:User) => set({ user }),
  signIn: async ({ email, password }) => {
    set({ loading: true });
    const { user, session } = await supabaseLogin({ email, password });
    set({ user, session, loading: false });
  },
  signOut: async () => {
    set({ loading: true });
    await supabaseLogout();
    set({ user: null, session: null, loading: false });
  },
  signUp: async ({ username, email, password }) => {
    set({ loading: true });
    const { user, session } = await supabaseSignUp({ username, email, password });
    set({ user, session, loading: false });
    return { user, session };
  },
  getCurrentUser: async () => {
    set({ loading: true });
    const user = await supabaseGetCurrentUser();
    set({ user, loading: false });
    return user;
  },
  updateCurrentUser: async ({ password, username }) => {
    set({ loading: true });
    const { user: updatedUser } = await supabaseUpdateCurrentUser({ password, username });
    set({ user: updatedUser, loading: false });
    return updatedUser;
  },
}));

export default useAuthStore