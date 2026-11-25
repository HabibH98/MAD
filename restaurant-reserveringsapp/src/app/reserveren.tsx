
import { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  StyleSheet,
  Alert,
  Platform,
  Keyboard,
} from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';

export default function ReserverenScreen() {
  const [naam, setNaam] = useState('');
  const [email, setEmail] = useState('');
  const [datum, setDatum] = useState('');
  const [tijd, setTijd] = useState('');
  const [personen, setPersonen] = useState(2);

  const [toonDatum, setToonDatum] = useState(false);
  const [toonTijd, setToonTijd] = useState(false);

  const [gekozenDatum, setGekozenDatum] = useState(new Date());
  const [gekozenTijd, setGekozenTijd] = useState(new Date());

  // Datum opmaken
  function datumOpmaak(waarde: Date) {
    const dag = String(waarde.getDate()).padStart(2, '0');
    const maand = String(waarde.getMonth() + 1).padStart(2, '0');
    const jaar = waarde.getFullYear();

    return `${dag}-${maand}-${jaar}`;
  }

  // Tijd opmaken
  function tijdOpmaak(waarde: Date) {
    const uur = String(waarde.getHours()).padStart(2, '0');
    const minuut = String(waarde.getMinutes()).padStart(2, '0');

    return `${uur}:${minuut}`;
  }

  // Formulier leegmaken
  function resetFormulier() {
    setNaam('');
    setEmail('');
    setDatum('');
    setTijd('');
    setPersonen(2);
    setGekozenDatum(new Date());
    setGekozenTijd(new Date());
    setToonDatum(false);
    setToonTijd(false);
  }

  // Reservering controleren
  function bevestigReservering() {
    Keyboard.dismiss();

    if (!naam.trim() || !email.trim() || !datum || !tijd) {
      Alert.alert('Let op', 'Vul alle velden in.');
      return;
    }

    const emailControle = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailControle.test(email.trim())) {
      Alert.alert(
        'Ongeldig e-mailadres',
        'Vul een geldig e-mailadres in.'
      );
      return;
    }

    const reserveringsMoment = new Date(
      gekozenDatum.getFullYear(),
      gekozenDatum.getMonth(),
      gekozenDatum.getDate(),
      gekozenTijd.getHours(),
      gekozenTijd.getMinutes()
    );

    if (reserveringsMoment <= new Date()) {
      Alert.alert(
        'Ongeldige datum of tijd',
        'Kies een datum en tijd in de toekomst.'
      );
      return;
    }

    const minuten =
      gekozenTijd.getHours() * 60 +
      gekozenTijd.getMinutes();

    if (minuten < 17 * 60 || minuten > 22 * 60) {
      Alert.alert(
        'Buiten openingstijden',
        'Je kunt reserveren tussen 17:00 en 22:00.'
      );
      return;
    }

    if (personen < 1 || personen > 10) {
      Alert.alert(
        'Ongeldig aantal personen',
        'Kies minimaal 1 en maximaal 10 personen.'
      );
      return;
    }

    // Bevestigingsmelding
    Alert.alert(
      'Reservering ontvangen! 🎉',
      `Bedankt ${naam.trim()}!\n\n` +
        `E-mail: ${email.trim()}\n` +
        `Datum: ${datum}\n` +
        `Tijd: ${tijd}\n` +
        `Aantal personen: ${personen}\n\n` +
        'Dit is een testbevestiging.',
      [
        {
          text: 'OK',
          onPress: resetFormulier,
        },
      ]
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      {/* Titel */}
      <Text style={styles.title}>
        Reserveer een tafel
      </Text>

      <Text style={styles.description}>
        Wij kijken uit naar je bezoek!
        Kies hieronder jouw gewenste datum en tijd.
      </Text>

      {/* Openingstijden */}
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>
          🕒 Openingstijden
        </Text>

        <Text style={styles.infoText}>
          Iedere dag van 17:00 tot 22:00
        </Text>
      </View>

      {/* Aantal personen */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          1. Aantal personen
        </Text>

        <View style={styles.personenRij}>
          <Pressable
            disabled={personen <= 1}
            style={[
              styles.aantalKnop,
              personen <= 1 && styles.disabledKnop,
            ]}
            onPress={() =>
              setPersonen((aantal) => Math.max(1, aantal - 1))
            }
          >
            <Text style={styles.aantalKnopTekst}>−</Text>
          </Pressable>

          <View style={styles.personenInfo}>
            <Text style={styles.personenIcoon}>👥</Text>

            <Text style={styles.aantalTekst}>
              {personen}
            </Text>

            <Text style={styles.personenTekst}>
              {personen === 1 ? 'persoon' : 'personen'}
            </Text>
          </View>

          <Pressable
            disabled={personen >= 10}
            style={[
              styles.aantalKnop,
              personen >= 10 && styles.disabledKnop,
            ]}
            onPress={() =>
              setPersonen((aantal) => Math.min(10, aantal + 1))
            }
          >
            <Text style={styles.aantalKnopTekst}>+</Text>
          </Pressable>
        </View>

        <Text style={styles.hint}>
          Maximaal 10 personen per reservering
        </Text>
      </View>

      {/* Datum en tijd */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          2. Datum en tijd
        </Text>

        <Text style={styles.label}>Datum</Text>

        <Pressable
          style={styles.keuzeVeld}
          onPress={() => {
            Keyboard.dismiss();
            setToonDatum(!toonDatum);
            setToonTijd(false);
          }}
        >
          <Text style={styles.icoon}>📅</Text>

          <Text style={styles.keuzeTekst}>
            {datum || 'Kies een datum'}
          </Text>

          <Text style={styles.pijl}>›</Text>
        </Pressable>

        {toonDatum && (
          <View style={styles.kiezer}>
            <DateTimePicker
              value={gekozenDatum}
              mode="date"
              display={
                Platform.OS === 'ios' ? 'spinner' : 'default'
              }
              minimumDate={new Date()}
              themeVariant="light"
              textColor="#333333"
              onChange={(event, selectedDate) => {
                if (Platform.OS === 'android') {
                  setToonDatum(false);
                }

                if (event.type === 'set' && selectedDate) {
                  setGekozenDatum(selectedDate);
                  setDatum(datumOpmaak(selectedDate));
                }
              }}
            />

            {Platform.OS === 'ios' && (
              <Pressable
                style={styles.gereedKnop}
                onPress={() => {
                  setDatum(datumOpmaak(gekozenDatum));
                  setToonDatum(false);
                }}
              >
                <Text style={styles.buttonText}>Gereed</Text>
              </Pressable>
            )}
          </View>
        )}

        <Text style={styles.label}>Tijd</Text>

        <Pressable
          style={styles.keuzeVeld}
          onPress={() => {
            Keyboard.dismiss();
            setToonTijd(!toonTijd);
            setToonDatum(false);
          }}
        >
          <Text style={styles.icoon}>🕒</Text>

          <Text style={styles.keuzeTekst}>
            {tijd || 'Kies een tijd'}
          </Text>

          <Text style={styles.pijl}>›</Text>
        </Pressable>

        {toonTijd && (
          <View style={styles.kiezer}>
            <DateTimePicker
              value={gekozenTijd}
              mode="time"
              display={
                Platform.OS === 'ios' ? 'spinner' : 'default'
              }
              is24Hour={true}
              themeVariant="light"
              textColor="#333333"
              onChange={(event, selectedTime) => {
                if (Platform.OS === 'android') {
                  setToonTijd(false);
                }

                if (event.type === 'set' && selectedTime) {
                  setGekozenTijd(selectedTime);
                  setTijd(tijdOpmaak(selectedTime));
                }
              }}
            />

            {Platform.OS === 'ios' && (
              <Pressable
                style={styles.gereedKnop}
                onPress={() => {
                  setTijd(tijdOpmaak(gekozenTijd));
                  setToonTijd(false);
                }}
              >
                <Text style={styles.buttonText}>Gereed</Text>
              </Pressable>
            )}
          </View>
        )}
      </View>

      {/* Persoonlijke gegevens */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          3. Jouw gegevens
        </Text>

        <Text style={styles.label}>Naam</Text>

        <TextInput
          style={styles.input}
          placeholder="Vul je naam in"
          placeholderTextColor="#888"
          value={naam}
          onChangeText={setNaam}
          autoCapitalize="words"
        />

        <Text style={styles.label}>E-mailadres</Text>

        <TextInput
          style={styles.input}
          placeholder="voorbeeld@email.nl"
          placeholderTextColor="#888"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* Reserveringsoverzicht */}
      <View style={styles.overzicht}>
        <Text style={styles.sectionTitle}>
          Jouw reservering
        </Text>

        <Text style={styles.overzichtTekst}>
          👥 {personen} {personen === 1 ? 'persoon' : 'personen'}
        </Text>

        <Text style={styles.overzichtTekst}>
          📅 {datum || 'Nog geen datum gekozen'}
        </Text>

        <Text style={styles.overzichtTekst}>
          🕒 {tijd || 'Nog geen tijd gekozen'}
        </Text>
      </View>

      {/* Bevestigingsknop */}
      <Pressable
        style={styles.button}
        onPress={bevestigReservering}
      >
        <Text style={styles.buttonText}>
          Reservering bevestigen
        </Text>
      </Pressable>

      <Text style={styles.footer}>
        Graag tot ziens bij Mijn Restaurant!
      </Text>
    </ScrollView>
  );
}

// Vormgeving
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
    marginBottom: 20,
  },

  infoCard: {
    backgroundColor: '#fbe8d9',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
  },

  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#c45a2d',
    marginBottom: 6,
  },

  infoText: {
    fontSize: 14,
    color: '#555',
  },

  card: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#f0e5da',
    marginBottom: 18,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 18,
  },

  personenRij: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },

  aantalKnop: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#c45a2d',
    justifyContent: 'center',
    alignItems: 'center',
  },

  disabledKnop: {
    opacity: 0.3,
  },

  aantalKnopTekst: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },

  personenInfo: {
    alignItems: 'center',
  },

  personenIcoon: {
    fontSize: 28,
  },

  aantalTekst: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#c45a2d',
  },

  personenTekst: {
    fontSize: 15,
    color: '#555',
  },

  hint: {
    fontSize: 12,
    color: '#777',
    textAlign: 'center',
    marginTop: 18,
  },

  label: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },

  input: {
    backgroundColor: '#fafafa',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
  },

  keuzeVeld: {
    backgroundColor: '#fafafa',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  keuzeTekst: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },

  icoon: {
    fontSize: 23,
    marginRight: 12,
  },

  pijl: {
    fontSize: 26,
    color: '#c45a2d',
  },

  kiezer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
  },

  gereedKnop: {
    backgroundColor: '#c45a2d',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },

  overzicht: {
    backgroundColor: '#fbe8d9',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
  },

  overzichtTekst: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },

  button: {
    backgroundColor: '#c45a2d',
    padding: 18,
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
    marginTop: 20,
  },
});
