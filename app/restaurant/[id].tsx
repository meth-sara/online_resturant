import { View, Text, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { foods } from '../../data/dummy';
import FoodCard from '../../components/FoodCard';

export default function RestaurantMenuScreen() {
  const { id } = useLocalSearchParams();

  return (
    <ScrollView style={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 8 }}>
        Restaurant Menu 🍛
      </Text>
      <Text style={{ color: '#999', marginBottom: 16 }}>
        Restaurant ID: {id}
      </Text>

      {foods.map((food) => (
        <FoodCard key={food.id} food={food} />
      ))}
    </ScrollView>
  );
}
