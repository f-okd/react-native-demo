import { Href, Redirect } from 'expo-router';
import { useAuthStore } from '../store/authStore';

export default function Index() {
  const user = useAuthStore((state) => state.user);

  if (user) {
    return <Redirect href="/home" />;
  }

  return <Redirect href={"/login" as Href} />;
}
