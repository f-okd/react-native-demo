import useAuthStore from '@/store/authStore';
import { Redirect, Slot } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

export default function Layout() {
  const { session, loading } = useAuthStore();

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (!session?.user){ 
    return <Redirect href={"/login"}/>
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
