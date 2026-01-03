import { View, Text, ScrollView } from 'react-native';
import { foods } from '../../data/dummy';
import FoodCard from '../../components/FoodCard';

export default function Home() {
  return (
    <ScrollView className="p-4">
      <Text className="text-2xl font-bold mb-4">
        Recommended for You 🍽️
      </Text>

      {foods.map((food) => (
        <FoodCard key={food.id} food={food} />
      ))}
    </ScrollView>
  );
}
