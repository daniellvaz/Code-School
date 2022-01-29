import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import Home from "../screens/Home";
import SignIn from "../screens/SignIn";
import Dashboard from "../screens/Dashboard";

export type RootStackParamList = {
  Home: undefined;
  SignIn: undefined;
  Dashboard: undefined;
  Create: undefined;
};

const { Navigator, Screen } = createStackNavigator<RootStackParamList>()

export default function Unauthenticated() {
  return (
    <Navigator 
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#2f2f2f'
        }
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Dashboard" component={Dashboard} />
    </Navigator>
  );
}