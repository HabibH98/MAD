
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { router } from 'expo-router'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mijn Restaurant</Text>

      <Text style={styles.description}>
        Welkom bij ons restaurant!
        Bekijk onze gerechten en reserveer eenvoudig een tafel.
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => router.push('/menu')}
      >
        <Text style={styles.buttonText}>Bekijk menukaart</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#fff8f0',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  description: {
    fontSize: 17,
    textAlign: 'center',
    lineHeight: 26,
    marginBottom: 30,
    color: '#555',
  },
  button: {
    backgroundColor: '#c45a2d',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})
