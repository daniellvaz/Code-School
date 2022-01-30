import React from 'react';
import { AntDesign } from "@expo/vector-icons"
import { Link } from '@react-navigation/native';

import { Image, Text, View } from 'react-native';

import Button from '../../components/Button';
import LinearGradient from '../../components/LinearGradient';

import { styles } from './styles';
import Ilustration from '../../../assets/ilustration.png';

const Home: React.FC = () => {
  return (
    <LinearGradient>
      <View style={styles.container}>
        <Text style={styles.title}>
          Seu próximo {'\n'}
          curso de {'\n'}
          técnologia  {'\n'}
          esta aqui! 😎
        </Text>
        <Image 
          source={Ilustration}
          style={styles.image}
        />
        <Button style={styles.button}>
          <Link to="/SignIn">
            <AntDesign 
              name="arrowright" 
              size={32} 
              color="#e2e2e2" 
            />
          </Link> 
        </Button>
      </View> 
    </LinearGradient>
  );
}

export default Home;