import React from 'react';
import { useForm, Controller } from "react-hook-form";
import { Image, Text, TextInput, View, TouchableOpacity } from 'react-native';

import * as yup from 'yup';
import Input from '../../components/Input';
import Animation from '../../components/Animation';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuthContext } from '../../context/AuthContext';
import Ilustration from '../../../assets/Illustration-login.png';

import { theme } from '../../global/theme';
import { styles } from './styles';

interface IUserData {
  email: string;
  password: string;
}

const validationSchema = yup.object().shape({
  email: yup.string().required("O E-mail é obrigatório!").email("Email inválido!"),
  password: yup.string().min(6, "A senha deve ter mais de 6 caracteres!")
})

const SignIn: React.FC = () => {
  const { handleSignIn } = useAuthContext()
  const { control, handleSubmit, formState: {errors, isSubmitting} } = useForm<IUserData>({
    resolver: yupResolver(validationSchema)
  });

  if(isSubmitting) {
    return <Animation />
  }

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
          <Input 
            name="email"
            error={errors}
            rules={{
              required: true
            }}
            control={control}
            placeholder='E-mail' 
            placeholderTextColor={theme.colors.text}
            style={styles.input} 
            autoCapitalize='none'
            keyboardType='email-address'
            autoCorrect={false}
            textContentType='emailAddress'
          />
          <Input 
            name="password"
            error={errors}
            rules={{
              min: 6
            }}
            control={control}
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
          <TouchableOpacity onPress={handleSubmit(handleSignIn)}  style={styles.button}>
            <Text style={styles.text}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default SignIn;