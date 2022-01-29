import React from 'react';
import { Control, Controller, ControllerProps, FieldValues, RegisterOptions } from 'react-hook-form';
import { Text, TextInput, TextInputProps } from 'react-native';
import { theme } from '../../global/theme';

interface Props extends TextInputProps {
  name: string;
  control: Control<any, object>;
  error?: FieldValues;
  rules?: RegisterOptions
}

interface IErrorProps {
  message: string;
}

function Error({ message }: IErrorProps) {
  return (
    <Text 
      style={{
        color: theme.colors.primary,
        marginBottom: 5,
      }}
    >
      {message}
    </Text>
  )
}

export default function Input({ name, control, error = {}, rules, ...rest }: Props) {
  return (
    <Controller 
      control={control}
      rules={rules}
      render={({field: { onBlur, onChange, value }}) => (
        <>
          <TextInput 
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            {...rest}
          />
          {name in error && <Error message={error[name].message}/>}
        </>
      )}
      name={name}
    />
  );
}