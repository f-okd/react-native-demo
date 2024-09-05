import { Slot } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Layout() {
  return (
    <SafeAreaView style={{ borderColor: 'blue', borderWidth: 5, padding: 3 }}>
      <Slot />
    </SafeAreaView>
  );
}
