import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "../screens/Dashboard";

export type RootStackParamList = {
  Dashboard: undefined;
  Home: undefined;
};

const { Navigator, Screen } = createBottomTabNavigator<RootStackParamList>();

export default function Authenticated() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name="Dashboard" component={Dashboard}/>
    </Navigator>
  );
}