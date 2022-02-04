import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useAuthContext } from "../../context/AuthContext";
import { ScrollView, Text, View } from "react-native";
import LinearGradient from "../../components/LinearGradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../routes/authenticated.routes";

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

import Card from "../../components/Card";
import Preview from "../../components/Preview";

import { styles } from "./styles";
import Header from "../../components/Header";
import setLocalStorage from "../../service/localStorage";

import { Users } from '../../../@types/users' 
     
export default function Dashboard() {   
  const { isAuthenticated } = useAuthContext();
  const { navigate } = useNavigation<homeScreenProp>();
  const [user, setUserData] = useState<Users>({} as Users);


  if(!isAuthenticated) {
    navigate("Home")
  }

  async function HandleUserInformation() {
    const data = await setLocalStorage().getItem("user");

    if(!data) {
      return;
    }

    setUserData(JSON.parse(data));
  }

  useEffect(() => {
    HandleUserInformation()
  }, [])
  
  return (
    <LinearGradient>
      <View style={styles.container}>
        <Header username={user && user.firstName} image={user && user.image}/>
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