import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { restaurants } from '../../data/dummy';

export default function RestaurantsScreen() {
  const router = useRouter();

  return (
    <ScrollView className="p-4">
      <Text className="text-2xl font-bold mb-4">Restaurants 🍽️</Text>

      {restaurants.map((res) => (
        <TouchableOpacity
          key={res.id}
          className="bg-white p-4 rounded-xl mb-3 shadow"
          onPress={() => router.push(`/restaurant/${res.id}`)}
        >
          <Text className="text-lg font-bold">{res.name}</Text>
          <Text className="text-gray-600">
            ⭐ {res.rating} • {res.distance}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
