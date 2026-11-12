
import { View, Text, ScrollView, StyleSheet } from 'react-native'

const gerechten = [
  {
    id: 1,
    naam: 'Margherita Pizza',
    beschrijving: 'Pizza met tomatensaus, mozzarella en basilicum.',
    prijs: 12.50,
  },
  {
    id: 2,
    naam: 'Pasta Carbonara',
    beschrijving: 'Pasta met romige saus, ei en Parmezaanse kaas.',
    prijs: 14.50,
  },
  {
    id: 3,
    naam: 'Caesar Salad',
    beschrijving: 'Salade met kip, sla en dressing.',
    prijs: 11.50,
  },
]

export default function MenuScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Onze Menukaart</Text>

      {gerechten.map((gerecht) => (
        <View key={gerecht.id} style={styles.card}>
          <Text style={styles.name}>{gerecht.naam}</Text>
          <Text style={styles.description}>
            {gerecht.beschrijving}
          </Text>
          <Text style={styles.price}>
            € {gerecht.prijs.toFixed(2)}
          </Text>
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff8f0',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 25,
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 15,
    borderRadius: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 15,
    marginTop: 8,
    color: '#555',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 12,
    color: '#c45a2d',
  },
})
