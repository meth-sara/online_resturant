import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useApp } from '../../context/AppContext';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from 'react';

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  cartTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  emptyText: {
    color: '#999',
  },
  itemName: {
    fontWeight: 'bold',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  orderButton: {
    backgroundColor: '#16a34a',
    padding: 12,
    borderRadius: 12,
  },
  orderButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default function CartScreen() {
  const { cart } = useApp();
  const router = useRouter();

  const total = cart.reduce((sum: number, item: any) => sum + item.price, 0);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.cartTitle}>Your Cart 🛒</Text>

      {cart.length === 0 && (
        <Text style={styles.emptyText}>Your cart is empty</Text>
      )}

      {cart.map((item: { name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; price: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }, index: Key | null | undefined) => (
        <View
          key={index}
          style={{ backgroundColor: 'white', padding: 12, borderRadius: 12, marginBottom: 12 }}
        >
          <Text style={styles.itemName}>{item.name}</Text>
          <Text>LKR {item.price}</Text>
        </View>
      ))}

      {cart.length > 0 && (
        <View style={{ marginTop: 24 }}>
          <Text style={styles.totalText}>
            Total: LKR {total}
          </Text>

          <TouchableOpacity
            style={styles.orderButton}
            onPress={() => router.push('/order-success')}
          >
            <Text style={styles.orderButtonText}>
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}
