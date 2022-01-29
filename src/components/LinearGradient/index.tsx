import React, { ReactNode } from 'react';
import { LinearGradient as Gradient } from 'expo-linear-gradient';
import { styles } from './styles';

type Props = {
  children: ReactNode,
  first: string;
  second: string;
}

const LinearGradient = ({children, first, second}: Props) => {
  return (
    <Gradient 
      colors={[first, second]}
      style={styles.container}
    >
      {children}
    </Gradient>
  );
}

export default LinearGradient;