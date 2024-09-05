import { useUser } from '@/hooks/useUser';
import useAuthStore from '@/store/authStore';
import { Slot, useRouter } from 'expo-router';
import { Text } from 'react-native';

export default function RootLayout() {
  const router = useRouter();
  const { session } = useAuthStore();

  if (session?.user) {
    router.replace('/home');
  }

  return (
    <>
      <Text>Unauthenticated</Text>
      <Slot />
    </>
  );
}
