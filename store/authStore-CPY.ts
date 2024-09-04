import { ICredentials, supabaseLogin, supabaseLogout, supabaseSignUp } from '@/lib/supabase/apiAuth';
import { User, Session, WeakPassword } from '@supabase/supabase-js';
import { create } from 'zustand';

type AuthStore = {
  user: User | null;
  signIn: ({ email, password }: ICredentials) => Promise<{
    user: User;
    session: Session;
    weakPassword?: WeakPassword | undefined;
  }>;
  signOut: () => void;
  signUp: ({ username, email, password }: ICredentials) => Promise<{
    user: User | null;
    session: Session | null;
  }>;
};

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  signIn: supabaseLogin,
  signOut: supabaseLogout,
  signUp: supabaseSignUp,
}));
