import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>🍽 Рецепты на день</Text>

      {/* Завтрак */}
      <View style={styles.card}>
        <Text style={styles.mealTitle}>Завтрак</Text>
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0' }} 
          style={styles.image} 
        />
        <Text style={styles.recipe}>Овсянка с фруктами</Text>
        <Text style={styles.description}>
          Овсяные хлопья, молоко, банан, мед. Варить 5-7 минут.
        </Text>
      </View>

      {/* Обед */}
      <View style={styles.card}>
        <Text style={styles.mealTitle}>Обед</Text>
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1547592180-85f173990554' }} 
          style={styles.image} 
        />
        <Text style={styles.recipe}>Куриный суп</Text>
        <Text style={styles.description}>
          Курица, картофель, морковь, лук. Варить 30 минут.
        </Text>
      </View>

      {/* Ужин */}
      <View style={styles.card}>
        <Text style={styles.mealTitle}>Ужин</Text>
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1525755662778-989d0524087e' }} 
          style={styles.image} 
        />
        <Text style={styles.recipe}>Паста с сыром</Text>
        <Text style={styles.description}>
          Макароны, сыр, сливки. Смешать и прогреть 10 минут.
        </Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
  },

  mealTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  recipe: {
    fontSize: 18,
    color: 'green',
    marginTop: 10,
  },

  description: {
    fontSize: 14,
    color: '#555',
  },

  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
});