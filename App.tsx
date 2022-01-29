import 'react-native-gesture-handler';
import React from 'react';
import { theme } from './src/global/theme';
import { StatusBar } from 'expo-status-bar';
import LinearGradient from './src/components/LinearGradient';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes/routes';

import { AuthProvider } from './src/context/AuthContext';

export default function App() {
  return (
    <LinearGradient 
      first={theme.colors.background} 
      second={theme.colors.gray}
    > 
        <NavigationContainer>
          <StatusBar style="light" />
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </NavigationContainer>
    </LinearGradient>
  );
}
