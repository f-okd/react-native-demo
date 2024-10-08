import { Href, Redirect } from 'expo-router';
import useAuthStore from '../store/authStore';
import { AppState } from 'react-native';
import { supabase } from '@/lib/supabase/supabase';

// Tells Supabase Auth to continuously refresh the session automatically if
// the app is in the foreground. When this is added, you will continue to receive
// `onAuthStateChange` events with the `TOKEN_REFRESHED` or `SIGNED_OUT` event
// if the user's session is terminated. This should only be registered once.
AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});

export default function Index() {
  const user = useAuthStore((state) => state.session?.user);

  if (user) {
    return <Redirect href="/home" />;
  }

  return <Redirect href={'/login' as Href} />;
}
