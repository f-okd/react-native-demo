import { Href, Link, useRouter } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import RegistrationForm from '@/components/RegistrationForm';

export default function Register() {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login Screen</Text>
      <Link className="mb-10" href={"/login" as Href}>Already have an account? Login here</Link>
      
      <RegistrationForm/>
    </View>
  );
}
