import { Href, Link, useRouter } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import RegistrationForm from '@/components/RegistrationForm';

export default function Register() {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text className="bg-blue-300 w-full text-center">Registration Screen</Text>
      <RegistrationForm />
      <Link className="mb-10" href={'/login' as Href}>
        Already have an account? Login here
      </Link>
    </View>
  );
}
