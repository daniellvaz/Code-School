import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import { Image, Text, View } from 'react-native';
import Stars from '../../../assets/stars1x.png'
import { Link } from '@react-navigation/native';

interface Props {
  uri: string;
  title: string;
  description: string;
  hours: number;
  price: number;
  slug: string;
}

import { styles } from './styles';

export default function SearchCard({ title, description, hours, uri, price, slug }: Props) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri}}/>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description.substring(0, 30) + '...'}</Text>
        <View>
          <Text style={styles.hour}>{`${hours} hours - ${price}R$`}</Text>
          <Image source={Stars}/>
        </View>
      </View>
      <Link to={`/${slug}`}>
        <AntDesign name="right" size={24} color="#e2e2e2" />
      </Link>
    </View>
  )
}