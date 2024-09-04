import React from 'react';
import { View, Text, Button } from 'react-native';
import { Href, Link, useRouter } from 'expo-router';
import { useAuthStore } from '../../store/authStore';

export default function Home() {
  const signOut = useAuthStore((state) => state.signOut);
  const router = useRouter();

  const handleLogout = () => {
    signOut();
    router.replace('/login' as Href);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen (Authenticated)</Text>
      <Link href={"/profile" as Href}>Go to Profile</Link>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}
