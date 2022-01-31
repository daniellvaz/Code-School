import React, { ReactNode } from 'react';
import { LinearGradient as Gradient } from 'expo-linear-gradient';
import { styles } from './styles';
import { theme } from '../../global/theme';

type Props = {
  children: ReactNode,
}

const LinearGradient = ({ children }: Props) => {
  const { background, gray } = theme.colors

  return (
    <Gradient 
      colors={[background, gray]}
      style={styles.container}
    >
      {children}
    </Gradient>
  );
}

export default LinearGradient;