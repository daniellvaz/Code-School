import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Text, View } from "react-native";
import { useAuthContext } from "../../context/AuthContext";
import { RootStackParamList } from "../../routes/authenticated.routes";

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

     
export default function Dashboard() {   
  const { isAuthenticated } = useAuthContext();
  const { navigate } = useNavigation<homeScreenProp>()

  if(!isAuthenticated) {
    navigate("Home")
  }

  return (
    <View>
      <Text>Dashboard</Text>
    </View>
  )
}