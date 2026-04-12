import * as React from 'react';
import { Button, Text, View, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// 🏠 Главный экран
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍽 Рецепты</Text>

      <Button
        title="Завтрак"
        onPress={() => navigation.navigate('Category', { type: 'Завтрак' })}
      />
      <Button
        title="Обед"
        onPress={() => navigation.navigate('Category', { type: 'Обед' })}
      />
      <Button
        title="Ужин"
        onPress={() => navigation.navigate('Category', { type: 'Ужин' })}
      />
    </View>
  );
}

// 🍳 Экран категории
function CategoryScreen({ route, navigation }) {
  const { type } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{type}</Text>

      <Button
        title="Открыть рецепт"
        onPress={() =>
          navigation.navigate('Recipe', {
            name: `${type} блюдо`,
          })
        }
      />
    </View>
  );
}

// 📖 Экран рецепта
function RecipeScreen({ route }) {
  const { name } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>

      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0' }}
        style={styles.image}
      />

      <Text>Описание рецепта: вкусное и простое блюдо.</Text>
    </View>
  );
}

// 🚀 Навигация
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Category" component={CategoryScreen} />
        <Stack.Screen name="Recipe" component={RecipeScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },

  title: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
  },

  image: {
    width: 200,
    height: 150,
    marginVertical: 10,
  },
});