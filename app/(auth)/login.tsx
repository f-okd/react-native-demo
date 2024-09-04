import React from 'react';
import { View, Text, Button } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { useAuthStore } from '../../store/authStore';

export default function Login() {
  const signIn = useAuthStore((state) => state.signIn);
  const router = useRouter();

  const handleLogin = () => {
    signIn();
    router.replace('/home');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login Screen</Text>
      <Button title="Login" onPress={handleLogin} />
      <Link href="/signup">Go to Signup</Link>
    </View>
  );
}
