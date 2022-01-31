import React from "react";
import { Entypo, Feather, Ionicons } from "@expo/vector-icons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import Dashboard from "../screens/Dashboard";
import Search from "../screens/Search";
import Courses from "../screens/Courses";
import Destak from "../screens/Destak";
import Profile from "../screens/Profile";
import { theme } from "../global/theme";
import Button from "../components/Button";
import { Link } from "@react-navigation/native";

export type RootStackParamList = {
  Dashboard: undefined;
  Home: undefined;
  Courses: undefined;
  Search: undefined;
  Destak: undefined;
  Profile: undefined;
};

const { Navigator, Screen } = createBottomTabNavigator<RootStackParamList>();

export default function Authenticated() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 64,
          backgroundColor: theme.colors.background
        },
        tabBarActiveTintColor: theme.colors.primary
      }}
    >
      <Screen 
        name="Dashboard" 
        options={{
          tabBarIcon: () => (<Entypo name="home" size={24} color="#e2e2e2" />)
        }} 
        component={Dashboard}
      />
      <Screen 
        name="Courses"
        component={Courses}
        options={{
          tabBarIcon: () => (<Feather name="book-open" size={24} color="#e2e2e2" />)
        }} 
      />
      <Screen 
        name="Search" 
        component={Search}
        options={{
          title: "",
          tabBarButton: () => (
              <Button style={{
                width: 64,
                height: 64,
                marginTop: -8,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: theme.colors.primary,
                borderRadius: 8
              }}>
                <Link to="/Search">
                  <Feather name="search" size={24} color="#e2e2e2" />
                </Link>
              </Button>
          )
        }} 
      />
      <Screen 
        name="Destak" 
        component={Destak}
        options={{
          tabBarIcon: () => (<Entypo name="star" size={24} color="#e2e2e2" />)
        }} 
      />
      <Screen 
        name="Profile" 
        component={Profile}
        options={{
          tabBarIcon: () => (<Ionicons name="person" size={24} color="#e2e2e2" />)
        }} 
      />
    </Navigator>
  );
}