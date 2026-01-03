import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { restaurants } from '../../data/dummy';

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  card: { backgroundColor: '#fff', padding: 16, borderRadius: 12, marginBottom: 12 },
  restaurantName: { fontSize: 18, fontWeight: 'bold' },
  restaurantInfo: { color: '#999', marginTop: 4 }
});

export default function RestaurantsScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Restaurants 🍽️</Text>

      {restaurants.map((res) => (
        <TouchableOpacity
          key={res.id}
          style={styles.card}
          onPress={() => router.push(`/restaurant/${res.id}`)}
        >
          <Text style={styles.restaurantName}>{res.name}</Text>
          <Text style={styles.restaurantInfo}>
            ⭐ {res.rating} • {res.distance}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
 