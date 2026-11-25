
import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
} from 'react-native';

import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Restaurantnaam */}
      <Text style={styles.restaurantNaam}>
        Mijn Restaurant
      </Text>

      <Text style={styles.subtitle}>
        Lekker eten, gezellig genieten
      </Text>

      {/* Restaurantfoto */}
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1000&q=80',
        }}
        style={styles.restaurantFoto}
      />

      {/* Welkomsttekst */}
      <Text style={styles.title}>
        Welkom bij ons restaurant!
      </Text>

      <Text style={styles.description}>
        Geniet van heerlijke gerechten, verse ingrediënten
        en een gezellige sfeer. Bekijk onze menukaart of
        reserveer eenvoudig een tafel via onze app.
      </Text>

      {/* Reserveringsknop */}
      <Pressable
        style={styles.button}
        onPress={() => router.push('/reserveren')}
      >
        <Text style={styles.buttonText}>
          📅 Reserveer een tafel
        </Text>
      </Pressable>

      {/* Menukaartknop */}
      <Pressable
        style={styles.menuButton}
        onPress={() => router.push('/menu')}
      >
        <Text style={styles.menuButtonText}>
          🍽️ Bekijk de menukaart
        </Text>
      </Pressable>

      {/* Restaurantinformatie */}
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>
          🕒 Openingstijden
        </Text>

        <Text style={styles.infoText}>
          Maandag t/m zondag
        </Text>

        <Text style={styles.infoText}>
          17:00 - 22:00
        </Text>
      </View>

      {/* Nieuws */}
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>
          📰 Nieuws & aanbiedingen
        </Text>

        <Text style={styles.infoText}>
          Ontdek onze nieuwste gerechten en aanbiedingen.
        </Text>

        <Pressable
          onPress={() => router.push('/nieuws')}
        >
          <Text style={styles.link}>
            Bekijk het laatste nieuws →
          </Text>
        </Pressable>
      </View>

      {/* Afsluiting */}
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
    paddingBottom: 40,
  },

  restaurantNaam: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#c45a2d',
    textAlign: 'center',
    marginTop: 15,
  },

  subtitle: {
    fontSize: 15,
    color: '#777',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 25,
  },

  restaurantFoto: {
    width: '100%',
    height: 220,
    borderRadius: 18,
    marginBottom: 25,
    backgroundColor: '#eee',
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },

  description: {
    fontSize: 16,
    color: '#555',
    lineHeight: 25,
    marginBottom: 25,
  },

  button: {
    backgroundColor: '#c45a2d',
    padding: 17,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },

  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },

  menuButton: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#c45a2d',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 25,
  },

  menuButtonText: {
    color: '#c45a2d',
    fontSize: 17,
    fontWeight: 'bold',
  },

  infoCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#f0e5da',
  },

  infoTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },

  infoText: {
    fontSize: 15,
    color: '#555',
    lineHeight: 23,
  },

  link: {
    color: '#c45a2d',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 12,
  },

  footer: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    marginTop: 15,
  },
});
