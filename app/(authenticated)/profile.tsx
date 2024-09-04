import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Screen (Authenticated)</Text>
      <Link href="/home">Go to Home</Link>
    </View>
  );
}
