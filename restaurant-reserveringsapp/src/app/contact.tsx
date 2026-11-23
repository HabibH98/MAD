
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  Linking,
  Alert,
} from 'react-native';

export default function ContactScreen() {
  function openLink(url: string) {
    Linking.openURL(url).catch(() => {
      Alert.alert('Fout', 'Kan de link niet openen.');
    });
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.title}>Contact</Text>

      <Text style={styles.description}>
        Heb je vragen? Neem gerust contact met ons op.
      </Text>

      <View style={styles.card}>
        <Text style={styles.heading}>📍 Adres</Text>
        <Text style={styles.info}>
          Voorbeeldstraat 10, 8011 AB Zwolle
        </Text>

        <Text style={styles.heading}>📞 Telefoon</Text>
        <Pressable
          onPress={() => openLink('tel:+31000000000')}
        >
          <Text style={styles.link}>Telefoonnummer bekijken</Text>
        </Pressable>

        <Text style={styles.heading}>✉️ E-mail</Text>
        <Pressable
          onPress={() => openLink('mailto:info@voorbeeldrestaurant.nl')}
        >
          <Text style={styles.link}>
            info@voorbeeldrestaurant.nl
          </Text>
        </Pressable>

        <Text style={styles.heading}>🕒 Openingstijden</Text>
        <Text style={styles.info}>
          Maandag t/m zondag: 17:00 - 22:00
        </Text>
      </View>

      <Pressable
        style={styles.button}
        onPress={() =>
          openLink(
            'https://www.google.com/maps/search/?api=1&query=Zwolle'
          )
        }
      >
        <Text style={styles.buttonText}>
          Bekijk locatie op Google Maps
        </Text>
      </Pressable>

      <Text style={styles.note}>
        Dit zijn voorbeeldgegevens. Vervang ze later door de
        gegevens van jouw restaurant.
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
    marginBottom: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 18,
    marginBottom: 8,
  },
  info: {
    fontSize: 16,
    color: '#555',
  },
  link: {
    fontSize: 16,
    color: '#c45a2d',
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#c45a2d',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  note: {
    fontSize: 13,
    color: '#777',
    textAlign: 'center',
    marginTop: 20,
  },
});