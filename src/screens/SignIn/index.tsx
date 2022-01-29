import React from 'react';

import { Image, Text, TextInput, View, TouchableOpacity } from 'react-native';

import Ilustration from '../../../assets/Illustration-login.png';

import { theme } from '../../global/theme';
import { styles } from './styles';

const SignIn: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Que bom te ver {'\n'}
        por aqui novamente!
      </Text>
      <Text style={styles.subTitle}>
        Faça o login para começar!
      </Text>
      <Image style={styles.image} source={Ilustration} />
      <View style={styles.form}>
        <View>
          <TextInput 
            placeholder='E-mail' 
            placeholderTextColor={theme.colors.text}
            style={styles.input} 
          />
          <TextInput 
            secureTextEntry
            placeholder='Senha' 
            placeholderTextColor={theme.colors.text}
            style={styles.input}
          />
        </View>
        <View>
          <Text style={styles.text}>
            Perdeu sua senha? <Text style={styles.link}>Click aqui</Text>
          </Text>
          <Text style={styles.text}>
            Ainda não tem uma conta? <Text style={styles.link}>Cadastrar-se</Text>
          </Text>
          <TouchableOpacity  style={styles.button}>
            <Text style={styles.text}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default SignIn;