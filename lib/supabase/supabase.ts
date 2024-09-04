import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rfvdkrfwscvkihwjcbfq.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJmdmRrcmZ3c2N2a2lod2pjYmZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU0NDQzOTUsImV4cCI6MjA0MTAyMDM5NX0.vVmJnJx1YzKQcEp5Ld-m2ZlRaF5DPYkDecMnIhenfIY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
