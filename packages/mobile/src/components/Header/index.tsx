import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";

interface Props {
  username?: string;
  image?: string;
}

export default function Header({ username, image }: Props) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Olá, {username} 👋</Text>
      <Image
        style={styles.avatar}
        source={{ uri: image }}
      />
    </View>
  );
}
