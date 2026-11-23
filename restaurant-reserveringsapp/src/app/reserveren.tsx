
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
} from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';

export default function ReserverenScreen() {
  // Gegevens van het formulier
  const [naam, setNaam] = useState('');
  const [email, setEmail] = useState('');
  const [datum, setDatum] = useState('');
  const [tijd, setTijd] = useState('');
  const [personen, setPersonen] = useState('');

  // Datum- en tijdkiezer
  const [toonDatum, setToonDatum] = useState(false);
  const [toonTijd, setToonTijd] = useState(false);

  const [gekozenDatum, setGekozenDatum] = useState(new Date());
  const [gekozenTijd, setGekozenTijd] = useState(new Date());

  // Datum omzetten naar DD-MM-JJJJ
  function datumOpmaak(waarde: Date) {
    const dag = String(waarde.getDate()).padStart(2, '0');
    const maand = String(waarde.getMonth() + 1).padStart(2, '0');
    const jaar = waarde.getFullYear();

    return `${dag}-${maand}-${jaar}`;
  }

  // Tijd omzetten naar UU:MM
  function tijdOpmaak(waarde: Date) {
    const uur = String(waarde.getHours()).padStart(2, '0');
    const minuut = String(waarde.getMinutes()).padStart(2, '0');

    return `${uur}:${minuut}`;
  }

  // Reserveringsformulier controleren
  function bevestigReservering() {
    // 1. Controleren of alles is ingevuld
    if (
      !naam.trim() ||
      !email.trim() ||
      !datum ||
      !tijd ||
      !personen.trim()
    ) {
      Alert.alert('Let op', 'Vul alle velden in.');
      return;
    }

    // 2. E-mailadres controleren
    const emailControle = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailControle.test(email.trim())) {
      Alert.alert(
        'Ongeldig e-mailadres',
        'Vul een geldig e-mailadres in.'
      );
      return;
    }

    // 3. Datum en tijd controleren
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

    // 4. Openingstijden controleren
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

    // 5. Aantal personen controleren
    const aantal = Number(personen.trim());

    if (
      !/^\d+$/.test(personen.trim()) ||
      aantal < 1 ||
      aantal > 10
    ) {
      Alert.alert(
        'Ongeldig aantal personen',
        'Je kunt reserveren voor 1 tot en met 10 personen.'
      );
      return;
    }

    // 6. Bevestiging tonen
    Alert.alert(
      'Reservering ontvangen',
      `Bedankt ${naam.trim()}!\n\n` +
      `E-mail: ${email.trim()}\n` +
      `Datum: ${datum}\n` +
      `Tijd: ${tijd}\n` +
      `Aantal personen: ${aantal}\n\n` +
      'Dit is een testbevestiging.'
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.title}>Tafel reserveren</Text>

      <Text style={styles.description}>
        Vul je gegevens in om een tafel te reserveren.
      </Text>

      {/* Naam */}
      <Text style={styles.label}>Naam</Text>
      <TextInput
        style={styles.input}
        placeholder="Jouw naam"
        placeholderTextColor="#888"
        value={naam}
        onChangeText={setNaam}
      />

      {/* E-mailadres */}
      <Text style={styles.label}>E-mailadres</Text>
      <TextInput
        style={styles.input}
        placeholder="voorbeeld@email.nl"
        placeholderTextColor="#888"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      {/* Datum */}
      <Text style={styles.label}>Datum</Text>

      <Pressable
        style={styles.keuzeVeld}
        onPress={() => {
          setToonDatum(!toonDatum);
          setToonTijd(false);
        }}
      >
        <Text style={styles.keuzeTekst}>
          {datum || 'Kies een datum'}
        </Text>
        <Text style={styles.icoon}>📅</Text>
      </Pressable>

      {toonDatum && (
        <View style={styles.kiezer}>
          <DateTimePicker
            value={gekozenDatum}
            mode="date"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
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
              <Text style={styles.gereedTekst}>Gereed</Text>
            </Pressable>
          )}
        </View>
      )}

      {/* Tijd */}
      <Text style={styles.label}>Tijd</Text>

      <Pressable
        style={styles.keuzeVeld}
        onPress={() => {
          setToonTijd(!toonTijd);
          setToonDatum(false);
        }}
      >
        <Text style={styles.keuzeTekst}>
          {tijd || 'Kies een tijd'}
        </Text>
        <Text style={styles.icoon}>🕒</Text>
      </Pressable>

      {toonTijd && (
        <View style={styles.kiezer}>
          <DateTimePicker
            value={gekozenTijd}
            mode="time"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
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
              <Text style={styles.gereedTekst}>Gereed</Text>
            </Pressable>
          )}
        </View>
      )}

      {/* Aantal personen */}
      <Text style={styles.label}>Aantal personen</Text>
      <TextInput
        style={styles.input}
        placeholder="1 t/m 10"
        placeholderTextColor="#888"
        keyboardType="number-pad"
        value={personen}
        onChangeText={setPersonen}
      />

      {/* Reserveringsknop */}
      <Pressable
        style={styles.button}
        onPress={bevestigReservering}
      >
        <Text style={styles.buttonText}>
          Reservering bevestigen
        </Text>
      </Pressable>
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
    paddingBottom: 60,
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
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    marginBottom: 18,
    color: '#333',
  },
  keuzeVeld: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 14,
    marginBottom: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  keuzeTekst: {
    fontSize: 16,
    color: '#333',
  },
  icoon: {
    fontSize: 22,
  },
  kiezer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 18,
    padding: 10,
  },
  gereedKnop: {
    backgroundColor: '#c45a2d',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  gereedTekst: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#c45a2d',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
