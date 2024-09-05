import React, { useEffect } from 'react';
import useAuthStore from '@/store/authStore';
import { Redirect, Slot, useRouter } from 'expo-router';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Layout() {
  const router = useRouter();
  const { session, loading } = useAuthStore();

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={{ borderColor: 'orange', borderWidth: 5, padding: 3 }}>
      <Text>Authenticated: {session?.user.email}</Text>
      <View style={{ borderWidth: 5, padding: 3, borderColor: 'red' }}>
        <Slot />
      </View>
    </View>
  );
}
