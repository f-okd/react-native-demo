import { supabase } from '@/lib/supabase/supabase';
import { Session, User } from '@supabase/supabase-js';
import { create } from 'zustand';

interface ICredentials {
  username?: string;
  email: string;
  password: string;
}

type AuthState = {
  user: User | null;
  session: Session | null;
  loading: boolean;
};

type AuthActions = {
  signIn: ({ email, password }: ICredentials) => void;
  signOut: () => Promise<void>;
  signUp: ({ username, email, password }: ICredentials) => Promise<void>;
  updateCurrentUser: ({
    password,
    username,
  }: {
    password?: string;
    username?: string;
  }) => Promise<void>;
};

const useAuthStore = create<AuthState & AuthActions>((set) => ({
  user: null,
  session: null,
  loading: false,
  setUser: (user: User) => set({ user }),
  signIn: async ({ email, password }) => {
    set({ loading: true });
    const {
      data: { user, session },
      error,
    } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.warn('Incorrect credentials');
      set({ loading: false });
      return;
    }

    set({ user, session, loading: false });
  },
  signOut: async () => {
    set({ loading: true });
    const { error } = await supabase.auth.signOut();
    if (error) {
      set({ loading: false });
      console.warn(error);
    }
    set({ user: null, session: null, loading: false });
  },
  signUp: async ({ username, email, password }) => {
    set({ loading: true });
    const {
      data: { user, session },
      error,
    } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username,
        },
      },
    });

    if (error) {
      console.warn(error);
      set({ loading: false });
      throw new Error(error.message);
    }
    set({ user, session, loading: false });
  },
  // Either update password or username, not both
  updateCurrentUser: async ({ password, username }) => {
    set({ loading: true });

    let updateData;
    if (password) {
      updateData = { password };
    } else {
      updateData = { data: { username } };
    }

    const {
      data: { user },
      error,
    } = await supabase.auth.updateUser(updateData);
    if (error) {
      set({ loading: false });
      throw new Error(error.message);
    }

    set({ user, loading: false });
  },
}));

export default useAuthStore;
