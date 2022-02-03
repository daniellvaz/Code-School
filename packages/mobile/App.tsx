import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import LinearGradient from './src/components/LinearGradient';

import Routes from './src/routes/routes';

import { AuthProvider } from './src/context/AuthContext';
import { KeyboardAvoidingView } from 'react-native';

export default function App() {
  return (
    <LinearGradient> 
      <StatusBar 
        backgroundColor='transparent' 
        style='light' 
        translucent
      />
      <AuthProvider>
          <Routes />
      </AuthProvider>
    </LinearGradient>
  );
}
