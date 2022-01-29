import React, { ReactElement, ReactNode } from 'react';
import { IconType } from 'react-icons';
import { Image, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { styles } from './styles';

type Props = TouchableOpacityProps & {
  children: ReactNode;
  left?: string;
  rigth?: string;
}

const Button = ({children, left, rigth, ...rest}: Props) => {
  return (
    <TouchableOpacity
      style={styles.container}
      {...rest}
    >
      <Text style={styles.content}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}

export default Button;