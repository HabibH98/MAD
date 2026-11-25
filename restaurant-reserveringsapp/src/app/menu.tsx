
import { useState } from 'react';

import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  StyleSheet,
} from 'react-native';

// Categorieën
const categorieen = [
  'Alles',
  'Voorgerechten',
  'Hoofdgerechten',
  'Desserts',
  'Dranken',
];

// Gerechten
const gerechten = [
  {
    id: 1,
    naam: 'Caesar Salad',
    prijs: 11.50,
    categorie: 'Voorgerechten',
    beschrijving: 'Verse sla, Parmezaanse kaas en krokante croutons.',
    foto: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80',
  },
  {
    id: 2,
    naam: 'Margherita Pizza',
    prijs: 12.50,
    categorie: 'Hoofdgerechten',
    beschrijving: 'Italiaanse pizza met tomatensaus, mozzarella en basilicum.',
    foto: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80',
  },
  {
    id: 3,
    naam: 'Pasta Carbonara',
    prijs: 14.50,
    categorie: 'Hoofdgerechten',
    beschrijving: 'Romige Italiaanse pasta met ei, kaas en pancetta.',
    foto: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=600&q=80',
  },
  {
    id: 4,
    naam: 'Gegrilde kip',
    prijs: 18.50,
    categorie: 'Hoofdgerechten',
    beschrijving: 'Malse gegrilde kip met verse groenten.',
    foto: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=600&q=80',
  },
  {
    id: 5,
    naam: 'Chocoladetaart',
    prijs: 7.50,
    categorie: 'Desserts',
    beschrijving: 'Heerlijke chocoladetaart voor de zoete liefhebber.',
    foto: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80',
  },
  {
    id: 6,
    naam: 'Vanille-ijs',
    prijs: 5.50,
    categorie: 'Desserts',
    beschrijving: 'Romig ijs als afsluiting van je diner.',
    foto: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80',
  },
  {
    id: 7,
    naam: 'Cappuccino',
    prijs: 3.50,
    categorie: 'Dranken',
    beschrijving: 'Verse koffie met een zachte laag melkschuim.',
    foto: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80',
  },
  {
    id: 8,
    naam: 'Verse jus d’orange',
    prijs: 4.50,
    categorie: 'Dranken',
    beschrijving: 'Versgeperst sinaasappelsap.',
    foto: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&q=80',
  },
];

export default function MenuScreen() {
  const [gekozenCategorie, setGekozenCategorie] =
    useState('Alles');

  // Gerechten filteren op categorie
  const gefilterdeGerechten =
    gekozenCategorie === 'Alles'
      ? gerechten
      : gerechten.filter(
          (gerecht) =>
            gerecht.categorie === gekozenCategorie
        );

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Titel */}
      <Text style={styles.title}>Onze menukaart</Text>

      <Text style={styles.description}>
        Ontdek onze heerlijke gerechten, bereid met
        verse ingrediënten.
      </Text>

      {/* Categorieën */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categorieLijst}
      >
        {categorieen.map((categorie) => (
          <Pressable
            key={categorie}
            onPress={() => setGekozenCategorie(categorie)}
            style={[
              styles.categorieKnop,
              gekozenCategorie === categorie &&
                styles.actieveCategorie,
            ]}
          >
            <Text
              style={[
                styles.categorieTekst,
                gekozenCategorie === categorie &&
                  styles.actieveCategorieTekst,
              ]}
            >
              {categorie}
            </Text>
          </Pressable>
        ))}
      </ScrollView>

      {/* Aantal gerechten */}
      <Text style={styles.resultaten}>
        {gefilterdeGerechten.length} gerechten en dranken
      </Text>

      {/* Gerechten tonen */}
      {gefilterdeGerechten.map((gerecht) => (
        <View key={gerecht.id} style={styles.card}>
          <Image
            source={{ uri: gerecht.foto }}
            style={styles.foto}
            resizeMode="cover"
          />

          <View style={styles.cardContent}>
            <Text style={styles.categorieLabel}>
              {gerecht.categorie}
            </Text>

            <View style={styles.naamPrijs}>
              <Text style={styles.gerechtNaam}>
                {gerecht.naam}
              </Text>

              <Text style={styles.prijs}>
                € {gerecht.prijs.toFixed(2).replace('.', ',')}
              </Text>
            </View>

            <Text style={styles.gerechtBeschrijving}>
              {gerecht.beschrijving}
            </Text>
          </View>
        </View>
      ))}

      <Text style={styles.footer}>
        Eet smakelijk!
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
    marginBottom: 25,
  },

  categorieLijst: {
    marginBottom: 20,
  },

  categorieKnop: {
    backgroundColor: '#fff',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#c45a2d',
    marginRight: 10,
  },

  actieveCategorie: {
    backgroundColor: '#c45a2d',
  },

  categorieTekst: {
    color: '#c45a2d',
    fontSize: 14,
    fontWeight: 'bold',
  },

  actieveCategorieTekst: {
    color: '#fff',
  },

  resultaten: {
    fontSize: 14,
    color: '#777',
    marginBottom: 15,
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

  categorieLabel: {
    color: '#c45a2d',
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  naamPrijs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  gerechtNaam: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    marginRight: 10,
  },

  prijs: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#c45a2d',
  },

  gerechtBeschrijving: {
    fontSize: 15,
    color: '#555',
    lineHeight: 23,
  },

  footer: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#c45a2d',
    textAlign: 'center',
    marginTop: 10,
  },
});
