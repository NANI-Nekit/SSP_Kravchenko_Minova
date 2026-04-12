import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  TextInput,
  Image,
  Button,
  Alert
} from 'react-native';

export default function App() {

  const [search, setSearch] = useState('');

  const handlePress = () => {
    Alert.alert('Поиск', `Вы ищете: ${search}`);
  };

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>🍽 Рецепты</Text>

      {/* Поле ввода */}
      <TextInput
        style={styles.input}
        placeholder="Введите блюдо..."
        value={search}
        onChangeText={setSearch}
      />

      {/* Кнопка */}
      <Button title="Найти рецепт" onPress={handlePress} />

      <ScrollView style={styles.list}>

        {/* Карточка */}
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0' }}
            style={styles.image}
          />
          <Text style={styles.meal}>Завтрак</Text>
          <Text>Овсянка с фруктами</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1547592180-85f173990554' }}
            style={styles.image}
          />
          <Text style={styles.meal}>Обед</Text>
          <Text>Куриный суп</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1525755662778-989d0524087e' }}
            style={styles.image}
          />
          <Text style={styles.meal}>Ужин</Text>
          <Text>Паста с сыром</Text>
        </View>

      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 30,
  },

  title: {
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
  },

  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },

  list: {
    marginTop: 10,
  },

  card: {
    marginBottom: 15,
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
  },

  image: {
    width: '100%',
    height: 120,
    borderRadius: 10,
  },

  meal: {
    fontWeight: 'bold',
    marginTop: 5,
  },
});