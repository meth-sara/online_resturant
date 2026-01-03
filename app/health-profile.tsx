import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useApp } from '../context/AppContext';

const styles = StyleSheet.create({
  scrollView: {
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  label: {
    marginBottom: 8,
  },
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 3,
  },
  button: {
    backgroundColor: '#16a34a',
    padding: 12,
    borderRadius: 12,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default function HealthProfileScreen() {
  const router = useRouter();
  const { setHealthProfile } = useApp();

  const saveProfile = () => {
    setHealthProfile({
      diabetes: true,
      bp: false,
    });
    router.replace('/(tabs)');
  };

  return (
    <ScrollView style={styles.scrollView}>
      <Text style={styles.title}>
        Health Profile 🩺
      </Text>

      <Text style={styles.label}>Select your conditions:</Text>

      <View style={styles.card}>
        <Text>☑ Diabetes</Text>
        <Text>☐ High Blood Pressure</Text>
        <Text>☐ Cholesterol</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={saveProfile}
      >
        <Text style={styles.buttonText}>
          Save & Continue
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
