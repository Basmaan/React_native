import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import COLORS from './consts/colors';
import DetailScreen from './screens/DetailScreen';
import ImageScreen from './screens/ImageScreen';
import { Nunito_400Regular, Nunito_800ExtraBold, Nunito_600SemiBold } from '@expo-google-fonts/nunito';
import { Satisfy_400Regular } from '@expo-google-fonts/satisfy';
import { Baskervville_400Regular_Italic } from '@expo-google-fonts/baskervville';
import { Audiowide_400Regular } from '@expo-google-fonts/audiowide';
import AppLoading from 'expo-app-loading';
import * as Font from "expo-font";

const Stack = createNativeStackNavigator();

const Mytheme = {
  colors: {
    background: COLORS.white
  }
}

const getFonts = () =>
  Font.loadAsync({
    Nunito_600SemiBold,
    Nunito_400Regular,
    Nunito_800ExtraBold,
    Baskervville_400Regular_Italic,
    Satisfy_400Regular,
    Audiowide_400Regular,
    nunito: require("./assets/fonts/Nunito-Regular.ttf")
  });

export default function App() {
  const [fontsloaded, setFontsLoaded] = useState(false);

  if (fontsloaded) {
    return (
      <NavigationContainer theme={Mytheme}>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ title: '', headerShown: false }}
          />
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: '', headerShown: false }} />
          <Stack.Screen name="DetailScreen" component={DetailScreen} options={{ title: '', headerShown: false }} />
          <Stack.Screen name="ImageScreen" component={ImageScreen} options={{ title: '', headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => {
          setFontsLoaded(true);
        }}
        onError={console.warn}
      />
    )
  }
}
