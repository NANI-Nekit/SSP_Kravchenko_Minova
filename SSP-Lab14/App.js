import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>🍽 Рецепты на день</Text>

      {/* Карточка */}
      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0' }}
          style={styles.image}
        />
        <View style={styles.textBlock}>
          <Text style={styles.mealTitle}>Завтрак</Text>
          <Text style={styles.recipe}>Овсянка с фруктами</Text>
          <Text style={styles.description}>
            Овсяные хлопья, молоко, банан, мед.
          </Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1547592180-85f173990554' }}
          style={styles.image}
        />
        <View style={styles.textBlock}>
          <Text style={styles.mealTitle}>Обед</Text>
          <Text style={styles.recipe}>Куриный суп</Text>
          <Text style={styles.description}>
            Курица, картофель, морковь, лук.
          </Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1525755662778-989d0524087e' }}
          style={styles.image}
        />
        <View style={styles.textBlock}>
          <Text style={styles.mealTitle}>Ужин</Text>
          <Text style={styles.recipe}>Паста с сыром</Text>
          <Text style={styles.description}>
            Макароны, сыр, сливки.
          </Text>
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  card: {
    flexDirection: 'row', // выравнивание элементов
    backgroundColor: '#fff',
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },

  image: {
    width: '40%', 
    height: 120,
  },

  textBlock: {
    flex: 1, // чтобы занимало остальное пространство
    padding: 10,
    justifyContent: 'center',
  },

  mealTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  recipe: {
    fontSize: 16,
    color: 'green',
  },

  description: {
    fontSize: 13,
    color: '#555',
  },
});