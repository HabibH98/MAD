
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Pressable,
} from 'react-native';

import { router } from 'expo-router';

const nieuwsBerichten = [
  {
    id: 1,
    categorie: 'Nieuw gerecht',
    titel: 'Ontdek onze Italiaanse pizza!',
    datum: '25 november 2026',
    beschrijving:
      'Geniet van onze heerlijke Margherita Pizza met verse mozzarella, tomatensaus en basilicum.',
    foto: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80',
  },
  {
    id: 2,
    categorie: 'Aanbieding',
    titel: 'Gezellig uit eten in het weekend',
    datum: '23 november 2026',
    beschrijving:
      'Kom samen met vrienden of familie genieten van heerlijke gerechten en een gezellige sfeer.',
    foto: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
  },
  {
    id: 3,
    categorie: 'Restaurantnieuws',
    titel: 'Onze nieuwe restaurant-app!',
    datum: '18 november 2026',
    beschrijving:
      'Bekijk onze menukaart, ontdek het laatste nieuws en reserveer eenvoudig een tafel via onze app.',
    foto: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80',
  },
];

export default function NieuwsScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>
        Nieuws & aanbiedingen
      </Text>

      <Text style={styles.description}>
        Blijf op de hoogte van onze nieuwste gerechten,
        aanbiedingen en restaurantnieuws.
      </Text>

      {/* Nieuwsberichten */}
      {nieuwsBerichten.map((bericht) => (
        <View key={bericht.id} style={styles.card}>
          <Image
            source={{ uri: bericht.foto }}
            style={styles.foto}
            resizeMode="cover"
          />

          <View style={styles.cardContent}>
            <View style={styles.categorie}>
              <Text style={styles.categorieTekst}>
                {bericht.categorie}
              </Text>
            </View>

            <Text style={styles.datum}>
              {bericht.datum}
            </Text>

            <Text style={styles.berichtTitel}>
              {bericht.titel}
            </Text>

            <Text style={styles.berichtTekst}>
              {bericht.beschrijving}
            </Text>
          </View>
        </View>
      ))}

      {/* Reserveringskaart */}
      <View style={styles.reserveerCard}>
        <Text style={styles.reserveerTitel}>
          Zin in een gezellig diner?
        </Text>

        <Text style={styles.reserveerTekst}>
          Reserveer eenvoudig een tafel en kom genieten
          bij ons restaurant.
        </Text>

        <Pressable
          style={styles.button}
          onPress={() => router.push('/reserveren')}
        >
          <Text style={styles.buttonText}>
            Reserveer een tafel
          </Text>
        </Pressable>
      </View>

      <Text style={styles.footer}>
        Graag tot ziens bij Mijn Restaurant!
      </Text>
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
    paddingBottom: 120,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#c45a2d',
    marginTop: 15,
    marginBottom: 10,
  },

  description: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    marginBottom: 25,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#f0e5da',
  },

  foto: {
    width: '100%',
    height: 190,
    backgroundColor: '#eee',
  },

  cardContent: {
    padding: 18,
  },

  categorie: {
    backgroundColor: '#fbe8d9',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 12,
  },

  categorieTekst: {
    color: '#c45a2d',
    fontSize: 13,
    fontWeight: 'bold',
  },

  datum: {
    fontSize: 13,
    color: '#777',
    marginBottom: 8,
  },

  berichtTitel: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },

  berichtTekst: {
    fontSize: 15,
    color: '#555',
    lineHeight: 24,
  },

  reserveerCard: {
    backgroundColor: '#fbe8d9',
    borderRadius: 16,
    padding: 20,
    marginTop: 5,
  },

  reserveerTitel: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },

  reserveerTekst: {
    fontSize: 15,
    color: '#555',
    lineHeight: 23,
    marginBottom: 18,
  },

  button: {
    backgroundColor: '#c45a2d',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  footer: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    marginTop: 25,
  },
});
