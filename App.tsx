import 'react-native-gesture-handler';
import { theme } from './src/global/theme';
import { StatusBar } from 'expo-status-bar';
import LinearGradient from './src/components/LinearGradient';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes/routes';

export default function App() {
  return (
    <LinearGradient 
      first={theme.colors.background} 
      second={theme.colors.gray}
    >
      <NavigationContainer>
          <StatusBar style="light" />
          <Routes />
      </NavigationContainer>
    </LinearGradient>
  );
}
