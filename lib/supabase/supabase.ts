import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = String(process.env.EXPO_PUBLIC_SUPABASE_URL);
const supabaseAnonKey =String(process.env.EXPO_PUBLIC_SUPABASE_PUBLIC_KEY)
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
