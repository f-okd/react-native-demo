import { useUser } from "@/hooks/useUser";
import useAuthStore from "@/store/authStore";
import { Slot, useRouter } from 'expo-router';
import { Text } from "react-native";

export default function Layout() {
  const router = useRouter()
  const User = useUser()
  const {session} = useAuthStore()
 
  // if (!User) {
  //   router.replace("/login")
  //   console.warn("NOT AUTHENTICATED")
  // }
  
  return (
    <>
      <Text>Authenticated: {session?.user?.email ?? 'L'}</Text>
      <Slot />
    </>
  );
}