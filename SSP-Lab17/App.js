import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import {
  Text,
  View,
  Button,
  Image,
  StyleSheet,
  Animated,
  ScrollView,
  Dimensions
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';

const Stack = createNativeStackNavigator();
const { width } = Dimensions.get('window');


//  Splash Screen (анимация)
function SplashScreen({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
  Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 2000,
    useNativeDriver: true,
  }).start();

  const timer = setTimeout(() => {
    navigation.replace('Home');
  }, 2500);

  return () => clearTimeout(timer);
}, [fadeAnim, navigation]);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Text style={styles.title}>🍽 Recipe App</Text>
    </Animated.View>
  );
}


//  Home
function HomeScreen({ navigation }) {
  return (
    <View style={styles.screen}>

      <Text style={styles.title}>🍽 Рецепты</Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Category', { type: 'Завтрак' })}
        >
          <Text style={styles.buttonText}>🍳 Завтрак</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Category', { type: 'Обед' })}
        >
          <Text style={styles.buttonText}>🍲 Обед</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Category', { type: 'Ужин' })}
        >
          <Text style={styles.buttonText}>🍝 Ужин</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}


//  Category
function CategoryScreen({ route, navigation }) {
  const { type } = route.params;

  return (
    <View style={styles.screen}>

      <Text style={styles.title}>{type}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Recipe', { type })}
      >
        <Text style={styles.buttonText}>Открыть рецепт</Text>
      </TouchableOpacity>

    </View>
  );
}


//  Recipe (слайдер + анимация)
function RecipeScreen({ route }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const images = [
    'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0',
    'https://images.unsplash.com/photo-1547592180-85f173990554',
    'https://images.unsplash.com/photo-1525755662778-989d0524087e',
  ];

  return (
    <Animated.View style={styles.recipeScreen}>

      <Text style={styles.recipeTitle}>Рецепт</Text>

      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.slider}
      >
        {images.map((img, index) => (
          <Image
            key={index}
            source={{ uri: img }}
            style={styles.sliderImage}
          />
        ))}
      </ScrollView>

      <Text style={styles.description}>
        Вкусное блюдо, которое легко приготовить дома. 
        Попробуйте приготовить его на завтрак, обед или ужин.
      </Text>

    </Animated.View>
  );
}

//  App
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">

        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Category" component={CategoryScreen} />
        <Stack.Screen name="Recipe" component={RecipeScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


//  Стили
const styles = StyleSheet.create({
  screen: {
  flex: 1,
  paddingTop: 60,
  paddingHorizontal: 20,
  backgroundColor: '#f5f5f5',
},

buttonsContainer: {
  marginTop: 30,
  gap: 15,
},

button: {
  backgroundColor: '#4CAF50',
  padding: 15,
  borderRadius: 12,
  alignItems: 'center',
},

buttonText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: 'bold',
},

recipeTitle: {
  fontSize: 26,
  fontWeight: 'bold',
  textAlign: 'center',
  marginTop: 60,
  marginBottom: 20, //  отступ от слайдера
},

slider: {
  marginBottom: 20, //  отступ перед текстом
},

description: {
  textAlign: 'center',
  fontSize: 16,
  paddingHorizontal: 20,
  color: '#333',
},

sliderImage: {
  width: Dimensions.get('window').width,
  height: 220,
},

title: {
  fontSize: 26,
  fontWeight: 'bold',
  textAlign: 'center',
},

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },  
});
