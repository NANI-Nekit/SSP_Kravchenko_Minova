import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Animated,
  Alert,
  Dimensions,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ImageBackground } from 'react-native';

const Stack = createNativeStackNavigator();
const { width } = Dimensions.get('window');


// 🔥 Splash Screen
function SplashScreen({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 2500);

    return () => clearTimeout(timer);
  }, [fadeAnim, navigation]);

  return (
    <Animated.View style={[styles.center, { opacity: fadeAnim }]}>
      <Text style={styles.title}>🍽 Recipe App</Text>
    </Animated.View>
  );
}


// 🔐 Login
function LoginScreen({ navigation }) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    Alert.alert('Успех', 'Авторизация прошла успешно');
    navigation.replace('Home');
  };

  return (
    <View style={styles.authContainer}>
      <Text style={styles.title}>Вход</Text>

      <TextInput
        style={styles.input}
        placeholder="Логин"
        value={login}
        onChangeText={setLogin}
      />

      <TextInput
        style={styles.input}
        placeholder="Пароль"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Войти</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.link}>Нет аккаунта? Зарегистрироваться</Text>
      </TouchableOpacity>
    </View>
  );
}


// 📝 Register
function RegisterScreen({ navigation }) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
  Alert.alert('Успех', 'Регистрация прошла успешно');

  navigation.replace('Welcome', {
    username: login,
  });
};

  return (
    <View style={styles.authContainer}>
      <Text style={styles.title}>Регистрация</Text>

      <TextInput
        style={styles.input}
        placeholder="Логин"
        value={login}
        onChangeText={setLogin}
      />

      <TextInput
        style={styles.input}
        placeholder="Пароль"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Зарегистрироваться</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Уже есть аккаунт? Войти</Text>
      </TouchableOpacity>
    </View>
  );
}


// 🏠 Home
function HomeScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>🍽 Рецепты</Text>

      <View style={styles.buttonsContainer}>
        {['Завтрак', 'Обед', 'Ужин'].map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.button}
            onPress={() => navigation.navigate('Category', { type: item })}
          >
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}


// 🍳 Category
function CategoryScreen({ route, navigation }) {
  const { type } = route.params;

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>{type}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Recipe')}
      >
        <Text style={styles.buttonText}>Открыть рецепт</Text>
      </TouchableOpacity>
    </View>
  );
}


// Recipe
function RecipeScreen() {
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

      <View style={styles.contentWrapper}>
        
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          style={styles.slider}
        >
          {images.map((img, i) => (
            <Image key={i} source={{ uri: img }} style={styles.sliderImage} />
          ))}
        </ScrollView>

        <Text style={styles.description}>
          Вкусное блюдо, которое легко приготовить дома.
        </Text>

      </View>

    </Animated.View>
  );
}

//welcome
function WelcomeScreen({ route, navigation }) {
  const { username } = route.params;

  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352' }}
      style={styles.welcomeContainer}
    >
      <Text style={styles.welcomeTitle}>Добро пожаловать!</Text>

      <Text style={styles.welcomeText}>
        Привет, {username} 👋
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.replace('Home')}
      >
        <Text style={styles.buttonText}>Начать</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

//  App
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">

        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Category" component={CategoryScreen} />
        <Stack.Screen name="Recipe" component={RecipeScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


// 🎨 Стили
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  screen: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },

  authContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  buttonsContainer: {
    marginTop: 20,
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
    fontWeight: 'bold',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    backgroundColor: '#fff',
  },

  link: {
    textAlign: 'center',
    color: '#4CAF50',
    marginTop: 10,
  },

  contentWrapper: {
  marginTop: 10,
  },

  recipeScreen: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: '#fff',
  },

  recipeTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  slider: {
    marginBottom: 20,
  },

  sliderImage: {
    width: width,
    height: 220,
  },

  description: {
    textAlign: 'center',
    fontSize: 16,
    paddingHorizontal: 100,
  },

  welcomeContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 20,
  backgroundColor: '#f5f5f5',
  },

  welcomeText: {
    fontSize: 25,
    marginBottom: 20,
    color: '#fff',
  },

  welcomeTitle: {
  fontSize: 28,
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: 20,
  color: '#fff',
  },

});