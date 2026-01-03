import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useApp } from '../../context/AppContext';

export default function ProfileScreen() {
  const router = useRouter();
  const { healthProfile } = useApp();

  return (
    <View className="p-4">
      <Text className="text-2xl font-bold mb-4">Profile 👤</Text>

      <View className="bg-white p-4 rounded-xl shadow mb-4">
        <Text className="font-bold mb-1">Health Profile</Text>

        {healthProfile ? (
          <Text className="text-green-600">
            Health profile saved ✅
          </Text>
        ) : (
          <Text className="text-red-500">
            No health profile found
          </Text>
        )}
      </View>

      <TouchableOpacity
        className="bg-blue-600 p-3 rounded-xl mb-3"
        onPress={() => router.push('/health-profile')}
      >
        <Text className="text-white text-center">
          Edit Health Profile
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="bg-gray-300 p-3 rounded-xl"
        onPress={() => router.push('/login')}
      >
        <Text className="text-center">Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
