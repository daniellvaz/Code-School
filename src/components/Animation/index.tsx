import React from 'react';
import { View } from 'react-native';
import Lottie from 'lottie-react-native' ;
import { styles } from './styles';


const Animation = () => {
  return (
    <View style={styles.container}>
      <Lottie 
        source={require("../../../assets/loading.json")}
        autoPlay
        loop
      />
    </View>
  );
}

export default Animation;