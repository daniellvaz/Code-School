import LinearGradient from '../../components/LinearGradient';
import React, {useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Image, Text, View, ScrollView, Animated, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { styles } from './styles'
import { theme } from '../../global/theme';
import setLocalStorage from '../../service/localStorage';
import { UserResponse } from '../../../@types/users';

const Profile = () => {
  const animated = Animated
  const [user, setUser] = useState({} as UserResponse);
  const [opacity] = useState(new Animated.Value(0))
  const { control, handleSubmit } = useForm();

  async function handleUserData() {
    const data = await setLocalStorage().getItem('user');

    if(!data) {
      return;
    }

    const response = JSON.parse(data)
    setUser(response.user);
  }

  async function saveUserProfile(data: any) {
    try {
      console.log(data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleUserData()
  }, [])

  function scroll(e: NativeSyntheticEvent<NativeScrollEvent>) {
    if(e.nativeEvent.contentOffset.y < 25) {
      animated.timing(opacity, {
        toValue: 1,
        useNativeDriver: true
      }).start();
      return;
    }

    animated.timing(opacity, {
      toValue: 0,
      useNativeDriver: true
    }).start();
  }

  return (
    <LinearGradient>
      <ScrollView 
        style={[styles.container]}
        onScroll={scroll}
      >
        <View style={[styles.header]}>
          <Animated.Image 
            source={{uri: user.image}}
            style={[styles.avatar, { opacity }]}
            fadeDuration={10}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.link}>Editar imagem</Text>
          <Text style={styles.name}>Daniel Murilo Vaz</Text>
        </View>
        <View style={styles.form}>
          <Input 
            name="firstName" 
            placeholder="Nome"
            placeholderTextColor={theme.colors.text}
            control={control} 
            style={styles.input}
            defaultValue={user.name}
          />
          <Input 
            name="lastName" 
            placeholder="Sobre nome"
            placeholderTextColor={theme.colors.text}
            control={control} 
            style={styles.input}
            defaultValue={user.lastName}
            
          />
          <Input 
            name="email" 
            placeholder="Email"
            placeholderTextColor={theme.colors.text}
            control={control} 
            style={styles.input}
            defaultValue={user.email}
            autoCapitalize='none'
            keyboardType='email-address'
            autoCorrect={false}
            textContentType='emailAddress'
          />
          <View style={styles.ageContainer}>
            <Input 
              name="age" 
              placeholderTextColor={theme.colors.text}
              control={control} 
              style={styles.inputDate}
              defaultValue="10/07/1992"
            />
            <Input 
              name="gener" 
              placeholder="Genero"
              placeholderTextColor={theme.colors.text}
              control={control} 
              style={styles.inputDate}
              defaultValue="Masculino"
            />
          </View>
          <Input 
            name="address" 
            placeholder="Endereço"
            placeholderTextColor={theme.colors.text}
            control={control} 
            style={styles.input}
            defaultValue="Rua das Oliveiras, 89"
          />
          <Input 
            name="password" 
            placeholder="Senha"
            placeholderTextColor={theme.colors.text}
            control={control} 
            style={styles.input}
            defaultValue="123456"
            secureTextEntry
          />
          <Input 
            name="confirmPassword" 
            placeholder="Confirmação da senha"
            placeholderTextColor={theme.colors.text}
            control={control} 
            style={styles.input}
            defaultValue="123456"
            secureTextEntry
          />
          <Button 
            onPress={handleSubmit(saveUserProfile)}
            style={styles.button}
          >
            <Text style={styles.text}>Salvar</Text>
          </Button>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

export default Profile;