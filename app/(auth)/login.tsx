import SignInForm from '@/components/SignInForm';
import { Href, Link, useRouter } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import useAuthStore from '../../store/authStore';

export default function Login() {
  const { loading } = useAuthStore();

  if (loading) return <Text>Loading...</Text>;
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text className="bg-blue-300 w-full text-center">LOGIN SCREEN</Text>
      <Link href={'/profile' as Href}>Go to Profile</Link>
      <SignInForm />
      <Link href={'/register' as Href}>No Account? Sign up here</Link>
    </View>
  );
}
