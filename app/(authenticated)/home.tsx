import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { Href, Link, useRouter } from 'expo-router';
import useAuthStore from '../../store/authStore';
import { supabase } from '@/lib/supabase/supabase';
import { Session } from '@supabase/supabase-js';

export default function Home() {
  const signOut = useAuthStore((state) => state.signOut);
  const router = useRouter();

  const handleLogout = () => {
    signOut();
    router.replace('/login' as Href);
  };

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen (Authenticated) </Text>
      <Link className="m-10 text-blue-600" href={'/profile' as Href}>
        Go to Profile
      </Link>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}
