import useAuthStore from '@/store/authStore';
import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

export default function Profile() {
  const { session } = useAuthStore();

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text className="mb-7">Profile Screen (Authenticated)</Text>
      <Text>Email: {session?.user?.email ?? 'NOT LOGGED IN'} </Text>
      <Text>Username: {session?.user?.user_metadata.username ?? 'NOT LOGGED IN'} </Text>
      <Link className="text-blue-600 m-10" href="/home">
        Go to Home
      </Link>
    </View>
  );
}
