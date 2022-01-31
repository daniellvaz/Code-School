import React, { ReactNode } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';


type Props = TouchableOpacityProps & {
  children: ReactNode
}

const Button = ({children,...rest}: Props) => {
  return (
    <TouchableOpacity {...rest}>
      {children}
    </TouchableOpacity>
  );
}

export default Button;