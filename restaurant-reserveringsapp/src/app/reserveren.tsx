
import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';

export default function ReserverenScreen() {
  const [naam, setNaam] = useState('');
  const [email, setEmail] = useState('');
  const [datum, setDatum] = useState('');
  const [tijd, setTijd] = useState('');
  const [personen, setPersonen] = useState('');

  function bevestigReservering() {
    if (!naam || !email || !datum || !tijd || !personen) {
      Alert.alert('Let op', 'Vul alle velden in.');
      return;
    }

    Alert.alert(
      'Reservering ontvangen',
      `Bedankt ${naam}!\n\nDatum: ${datum}\nTijd: ${tijd}\nAantal personen: ${personen}`
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Tafel reserveren</Text>
      <Text style={styles.description}>
        Vul je gegevens in om een tafel te reserveren.
      </Text>

      <Text style={styles.label}>Naam</Text>
      <TextInput
        style={styles.input}
        placeholder="Jouw naam"
        value={naam}
        onChangeText={setNaam}
      />

      <Text style={styles.label}>E-mailadres</Text>
      <TextInput
        style={styles.input}
        placeholder="voorbeeld@email.nl"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Datum</Text>
      <TextInput
        style={styles.input}
        placeholder="Bijvoorbeeld 20-11-2026"
        value={datum}
        onChangeText={setDatum}
      />

      <Text style={styles.label}>Tijd</Text>
      <TextInput
        style={styles.input}
        placeholder="Bijvoorbeeld 18:30"
        value={tijd}
        onChangeText={setTijd}
      />

      <Text style={styles.label}>Aantal personen</Text>
      <TextInput
        style={styles.input}
        placeholder="Bijvoorbeeld 2"
        keyboardType="number-pad"
        value={personen}
        onChangeText={setPersonen}
      />

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff8f0',
    padding: 20,
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
