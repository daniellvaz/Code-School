import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './styles';

import Stars from "../../../assets/stars.png";

const Card = () => {
  return (
    <View style={styles.card}>
      <Image style={styles.cardThumbnail} source={{uri: "https://images.unsplash.com/photo-1583339793403-3d9b001b6008?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aHRtbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"}}/>
      <View>
        <Text style={styles.cardTitle}>Responsividade na prática</Text>
        <Text style={styles.cardSubTitle}>
          Aprenda a criar sites responsivos usando as {"\n"}
          melhores técnicas domercado.
        </Text>
      </View>
      <View style={styles.cardContent}>
        <Image style={styles.cardAvaliation} source={Stars}/>
        <Text style={styles.cardText}>
          84 horas 
          <Text style={styles.cardTextBold}> {" "} 29,99 R$</Text>
        </Text>
      </View>
    </View>
  );
}

export default Card;