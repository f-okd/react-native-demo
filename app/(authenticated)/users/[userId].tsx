import { Link, useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  const { userId } = useLocalSearchParams();

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text className="mb-7">Profile Screen (Authenticated)</Text>
      <Text>Username:  </Text>
      <Text>Following:  </Text>
      <Link className="text-blue-600 m-10" href="/home">
        Go to Home
      </Link>
    </View>
  );
}
