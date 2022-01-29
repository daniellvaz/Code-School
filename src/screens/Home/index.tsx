import React from 'react';

import { Image, Text, View } from 'react-native';

import Ilustration from '../../../assets/ilustration.png';
import Arrow from '../../../assets/Arrow.png'
import Button from '../../components/Button';
import { styles } from './styles';
import { Link } from '@react-navigation/native';

const Home: React.FC = () => {
  return (
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
      <Button>
        <Link to="/SignIn">
          <Image source={Arrow}/>
        </Link> 
      </Button>
    </View> 
  );
}

export default Home;