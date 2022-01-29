import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { createContext, ReactNode, useContext, useState } from 'react';
import { RootStackParamList } from '../../routes/unauthenticated.routes';
import api from '../../service/api';

interface ISignIn {
  email: string;
  password: string;
}

interface IContext {
  isAuthenticated: boolean;
  handleSignIn: (data: any) => void
}

interface IAuthContext {
  children: ReactNode
}

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

export const AuthContext = createContext({} as IContext)

export const AuthProvider = ({ children }: IAuthContext) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { navigate } = useNavigation<homeScreenProp>()

  const handleSignIn = async (data: ISignIn) => {
    try {
      const response = await api.get('/users');

      if(!response) {
        navigate("Create")
        return;
      }
      
      const user = response.find(user => data.email === user.email && data.password === user.password);

      if(!user) {
        navigate("Home")
        return;
      }
      
      setIsAuthenticated(true);
      navigate("Dashboard")

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AuthContext.Provider value={{isAuthenticated, handleSignIn}}>
      { children }
    </AuthContext.Provider>
  );
}
export default AuthContext;

export const useAuthContext = () => useContext(AuthContext) 