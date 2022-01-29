import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import Home from "../screens/Home";
import SignIn from "../screens/SignIn";

const { Navigator, Screen } = createStackNavigator()

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
    </Navigator>
  );
}