import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useApp } from '../context/AppContext';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  foodName: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  warningText: {
    color: '#ef4444',
    marginTop: 4,
  },
  addButton: {
    backgroundColor: '#16a34a',
    marginTop: 12,
    padding: 8,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default function FoodCard({ food }: any) {
  const { addToCart } = useApp();

  return (
    <View style={styles.container}>
      <Text style={styles.foodName}>{food.name}</Text>
      <Text>LKR {food.price}</Text>

      {!food.healthSafe && (
        <Text style={styles.warningText}>
          ⚠ Not recommended for your health
        </Text>
      )}

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => addToCart(food)}
      >
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}
