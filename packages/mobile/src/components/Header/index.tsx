import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Olá, Daniel 👋</Text>
      <Image
        style={styles.avatar}
        source={{ uri: "https://github.com/daniellvaz.png" }}
      />
    </View>
  );
}
