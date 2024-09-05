import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Link } from 'expo-router';
import { supabase } from '@/lib/supabase/supabase';
import { Session } from '@supabase/supabase-js';
import useAuthStore from '@/store/authStore';

export default function Profile() {
  const {session} = useAuthStore()

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text className="mb-7">Profile Screen (Authenticated)</Text>
      <Text>Email: {session?.user?.email ?? 'NOT LOGGED IN'} </Text>
      <Text>Username: {session?.user?.user_metadata.username ?? 'NOT LOGGED IN'} </Text>
      <Link className="text-blue-600 m-10" href="/home">
        Go to Home
      </Link>
    </View>
  );
}