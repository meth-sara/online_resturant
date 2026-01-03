import { Stack } from 'expo-router';
import { AppProvider } from '../context/AppContext';

export default function RootLayout() {
  return (
    <AppProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="splash" />
        <Stack.Screen name="login" />
        <Stack.Screen name="health-profile" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="order-success" />
      </Stack>
    </AppProvider>
  );
}
