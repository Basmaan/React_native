import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import COLORS from './consts/colors';
import DetailScreen from './screens/DetailScreen';
import ImageScreen from './screens/ImageScreen';

const Stack = createNativeStackNavigator();

const Mytheme = {
  colors: {
    background: COLORS.white
  }
}

export default function App() {

  return (
    <NavigationContainer theme={Mytheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: '', headerShown: false }}
        />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: '', headerShown: false }} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} options={{ title: '', headerShown: false}} />
        <Stack.Screen name="ImageScreen" component={ImageScreen} options={{ title: '', headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
