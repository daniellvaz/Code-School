import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useAuthContext } from "../../context/AuthContext";
import { Image, ScrollView, Text, View } from "react-native";
import LinearGradient from "../../components/LinearGradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../routes/authenticated.routes";

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

import Card from "../../components/Card";
import Preview from "../../components/Preview";

import { styles } from "./styles";
     
export default function Dashboard() {   
  const { isAuthenticated } = useAuthContext();
  const { navigate } = useNavigation<homeScreenProp>()

  if(!isAuthenticated) {
    navigate("Home")
  }

  return (
    <LinearGradient>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Olá, Daniel 👋</Text>
          <Image style={styles.avatar} source={{uri: "https://github.com/daniellvaz.png"}}/>
        </View>
        <View>
          <View style={styles.preview}>
            <Preview />
          </View>
        </View>
        <ScrollView style={styles.content}>
          <View style={styles.contentHeader}>
            <Text style={styles.title}>Desenvolvimento web</Text>
          </View>
          <ScrollView horizontal style={styles.section}>
            <Card />
            <Card />
            <Card />  
          </ScrollView>
          <View style={styles.contentHeader}>
            <Text style={styles.title}>Desenvolvimento Mobile</Text>
          </View>
          <ScrollView horizontal style={styles.section}>
            <Card />
            <Card />
            <Card />  
          </ScrollView>
        </ScrollView>
      </View>
    </LinearGradient>
  )
}