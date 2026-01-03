import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

type Props = {
  restaurant: {
    id: string;
    name: string;
    rating: number;
    distance: string;
  };
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  ratingText: {
    color: '#999',
  },
  distanceText: {
    color: '#ccc',
  },
});

export default function RestaurantCard({ restaurant }: Props) {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => router.push(`/restaurant/${restaurant.id}`)}
    >
      <Text style={styles.restaurantName}>
        {restaurant.name}
      </Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={styles.ratingText}>
          ⭐ {restaurant.rating}
        </Text>

        <Text style={styles.distanceText}>
          📍 {restaurant.distance}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
