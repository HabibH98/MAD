
import {
  View,
  Text,
  Image,
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
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>Contact & locatie</Text>

      <Text style={styles.description}>
        Heb je vragen of wil je meer informatie?
        Wij helpen je graag!
      </Text>

      {/* Restaurantfoto */}
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80',
        }}
        style={styles.foto}
        resizeMode="cover"
      />

      {/* Adres */}
      <View style={styles.card}>
        <Text style={styles.icoon}>📍</Text>

        <Text style={styles.cardTitel}>Ons adres</Text>

        <Text style={styles.info}>
          Mijn Restaurant
        </Text>

        <Text style={styles.info}>
          Voorbeeldstraat 10
        </Text>

        <Text style={styles.info}>
          8011 AB Zwolle
        </Text>

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
      </View>

      {/* Telefoon */}
      <View style={styles.card}>
        <Text style={styles.icoon}>📞</Text>

        <Text style={styles.cardTitel}>Bel ons</Text>

        <Text style={styles.info}>
          Heb je een vraag over je reservering?
          Neem telefonisch contact met ons op.
        </Text>

        <Text style={styles.contactGegeven}>
          038 - 000 00 00
        </Text>

        <Pressable
          style={styles.outlineButton}
          onPress={() =>
            Alert.alert(
              'Voorbeeldnummer',
              'Het echte telefoonnummer is nog niet ingesteld.'
            )
          }
        >
          <Text style={styles.outlineButtonText}>
            Bel het restaurant
          </Text>
        </Pressable>
      </View>

      {/* E-mail */}
      <View style={styles.card}>
        <Text style={styles.icoon}>✉️</Text>

        <Text style={styles.cardTitel}>Mail ons</Text>

        <Text style={styles.info}>
          Stuur ons een bericht voor vragen of
          meer informatie.
        </Text>

        <Text style={styles.contactGegeven}>
          info@voorbeeldrestaurant.nl
        </Text>

        <Pressable
          style={styles.outlineButton}
          onPress={() =>
            openLink(
              'mailto:info@voorbeeldrestaurant.nl'
            )
          }
        >
          <Text style={styles.outlineButtonText}>
            Stuur een e-mail
          </Text>
        </Pressable>
      </View>

      {/* Openingstijden */}
      <View style={styles.card}>
        <Text style={styles.icoon}>🕒</Text>

        <Text style={styles.cardTitel}>
          Openingstijden
        </Text>

        {[
          'Maandag',
          'Dinsdag',
          'Woensdag',
          'Donderdag',
          'Vrijdag',
          'Zaterdag',
          'Zondag',
        ].map((dag) => (
          <View key={dag} style={styles.tijdenRij}>
            <Text style={styles.dag}>{dag}</Text>

            <Text style={styles.tijd}>
              17:00 - 22:00
            </Text>
          </View>
        ))}
      </View>

      {/* Afsluiting */}
      <View style={styles.welkomCard}>
        <Text style={styles.welkomTitel}>
          Graag tot ziens! ❤️
        </Text>

        <Text style={styles.welkomTekst}>
          Wij kijken ernaar uit om je te verwelkomen
          bij Mijn Restaurant.
        </Text>
      </View>

      <Text style={styles.footer}>
        Dit zijn voorbeeldgegevens voor ons schoolproject.
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

  foto: {
    width: '100%',
    height: 220,
    borderRadius: 16,
    marginBottom: 20,
    backgroundColor: '#eee',
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#f0e5da',
  },

  icoon: {
    fontSize: 30,
    marginBottom: 10,
  },

  cardTitel: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },

  info: {
    fontSize: 16,
    color: '#555',
    lineHeight: 25,
  },

  contactGegeven: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#c45a2d',
    marginTop: 12,
  },

  button: {
    backgroundColor: '#c45a2d',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 18,
  },

  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },

  outlineButton: {
    borderWidth: 1.5,
    borderColor: '#c45a2d',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 18,
  },

  outlineButtonText: {
    color: '#c45a2d',
    fontSize: 15,
    fontWeight: 'bold',
  },

  tijdenRij: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0e5da',
  },

  dag: {
    fontSize: 15,
    color: '#333',
  },

  tijd: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#c45a2d',
  },

  welkomCard: {
    backgroundColor: '#fbe8d9',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
  },

  welkomTitel: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#c45a2d',
    marginBottom: 10,
  },

  welkomTekst: {
    fontSize: 15,
    color: '#555',
    textAlign: 'center',
    lineHeight: 24,
  },

  footer: {
    fontSize: 12,
    color: '#777',
    textAlign: 'center',
    marginTop: 20,
  },
});
