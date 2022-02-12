import LinearGradient from '../../components/LinearGradient';
import React, {useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Text, View, ScrollView, Animated } from 'react-native';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { styles } from './styles'
import { theme } from '../../global/theme';
import useProfile from './hooks/useProfile';


const Profile = () => {
  const animated = Animated
  const { control, handleSubmit, formState } = useForm();
  const [opacity] = useState(new Animated.Value(1))
  const { 
    handleUserData,
    saveUserProfile,
    scroll,
    user,
    address 
  } = useProfile(animated, opacity)
  

  useEffect(() => {
    handleUserData()
  }, [])

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
          <Text style={styles.name}>{ user.firstName + " " + user.lastName }</Text>
        </View>
        <View style={styles.form}>
          <Input 
            name="firstName" 
            placeholder="Nome"
            placeholderTextColor={theme.colors.text}
            control={control} 
            style={styles.input}
            defaultValue={user.firstName}
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
              defaultValue={user.birthday}
            />
            <Input 
              name="phone" 
              placeholder="Telefone/Celular"
              placeholderTextColor={theme.colors.text}
              control={control} 
              style={styles.inputDate}
              defaultValue={user.phone}
            />
          </View>
          <Input 
            name="address" 
            placeholder="Endereço"
            placeholderTextColor={theme.colors.text}
            control={control} 
            style={styles.input}
            defaultValue={address.address || "Carregando..."}
          />
          <View style={styles.ageContainer}>
            <Input 
              name="number" 
              placeholder="Numero"
              placeholderTextColor={theme.colors.text}
              control={control} 
              style={styles.inputDate}
              defaultValue={!address.number ? "Carregando..." : address.number.toString()}
            />
            <Input 
              name="zipCode" 
              placeholder="Código postal"
              placeholderTextColor={theme.colors.text}
              control={control} 
              style={styles.inputDate}
              defaultValue={address.zipCode || "Carregando..."}
            />
          </View>
          <Input 
            name="image" 
            placeholder="Imagem"
            placeholderTextColor={theme.colors.text}
            control={control} 
            style={styles.input}
            defaultValue={user.image || "Carregando..."}
          />
          <Button 
            onPress={handleSubmit(saveUserProfile)}
            style={styles.button}
          >
            { formState.isSubmitted ? <Text style={styles.text}>Salvando</Text> : <Text style={styles.text}>Salvar</Text> }
          </Button>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

export default Profile;