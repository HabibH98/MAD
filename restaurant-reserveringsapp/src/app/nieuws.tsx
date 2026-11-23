
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';

const nieuwsBerichten = [
  {
    id: 1,
    titel: 'Nieuw gerecht op de menukaart!',
    datum: '23-11-2026',
    beschrijving:
      'We hebben een nieuw gerecht toegevoegd aan onze menukaart. Kom het binnenkort proberen!',
  },
  {
    id: 2,
    titel: 'Weekendaanbieding',
    datum: '21-11-2026',
    beschrijving:
      'Dit weekend hebben we een speciale aanbieding voor onze gasten.',
  },
  {
    id: 3,
    titel: 'Welkom bij ons restaurant!',
    datum: '18-11-2026',
    beschrijving:
      'Via onze nieuwe app kun je gerechten bekijken en eenvoudig een tafel reserveren.',
  },
];

export default function NieuwsScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.title}>Restaurantnieuws</Text>

      <Text style={styles.description}>
        Bekijk het laatste nieuws en onze aanbiedingen.
      </Text>

      {nieuwsBerichten.map((bericht) => (
        <View key={bericht.id} style={styles.card}>
          <Text style={styles.datum}>{bericht.datum}</Text>

          <Text style={styles.berichtTitel}>
            {bericht.titel}
          </Text>

          <Text style={styles.berichtTekst}>
            {bericht.beschrijving}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff8f0',
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 25,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
  },
  datum: {
    fontSize: 13,
    color: '#c45a2d',
    marginBottom: 8,
  },
  berichtTitel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  berichtTekst: {
    fontSize: 15,
    color: '#555',
    lineHeight: 23,
  },
});
