import React from 'react';
import { useForm } from 'react-hook-form';
import { Image, Text, View } from 'react-native';

import Button from '../../components/Button';
import Input from '../../components/Input';

const Profile = () => {
  const { control, handleSubmit, formState } = useForm();

  async function saveUserProfile(data: any) {
    try {
      console.log(data);
      
    } catch (error) {
      
    }
  }

  return (
    <View>
      <View>
        <Image source={{uri: "https://github.com/daniellvaz.png"}}/>
      </View>
      <View>
        <Text>Editar imagem</Text>
        <Text>Daniel Murilo Vaz</Text>
      </View>
      <View>
        <Input name="firstName" control={control} />
        <Input name="lastName" control={control} />
        <Input name="email" control={control} />
        <View>
          <Input name="age" control={control} />
          <Input name="gener" control={control} />
        </View>
        <Input name="address" control={control} />
        <Input name="password" control={control} />
        <Input name="confirmPassword" control={control} />
        <Button onPress={handleSubmit(saveUserProfile)}>
          <Text>Salvar</Text>
        </Button>
      </View>
    </View>
  );
}

export default Profile;