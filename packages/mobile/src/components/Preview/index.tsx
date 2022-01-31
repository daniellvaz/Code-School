import React from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './styles';
import Thumbnail from "../../../assets/thumbnail.png";

const Preview = () => {
  return (
    <View style={styles.previewCard}>
      <View>
        <Text style={styles.previewTitle}>
          Aproveite para {"\n"}
          continuar de onde parou!
        </Text>
        <Text style={styles.previewSubTitle}>Restam 28 min.</Text>
      </View>
      <Image source={Thumbnail}/>
    </View>
  );
}

export default Preview;