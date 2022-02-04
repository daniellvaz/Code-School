import api from '../../service/api';
import setLocalStorage from '../../service/localStorage'
import React, { createContext, ReactNode, useContext, useState } from 'react';
import { Users } from '../../../@types/users';

interface ISignIn {
  email: string;
  password: string;
}

interface IContext {
  isAuthenticated: boolean;
  handleSignIn: (data: any) => void
}

interface Response {
  message: "ok";
  token: string;
  user: Users
}

interface IAuthContext {
  children: ReactNode
}

export const AuthContext = createContext({} as IContext)

export const AuthProvider = ({ children }: IAuthContext) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  const handleSignIn = async (user: ISignIn) => {
    try {      
      
      const { data } = await api.post<Response>('/auth', user)

      console.log(data);
      
      if(!data) {
        return;
      }

      await setLocalStorage().setItem('user', JSON.stringify(data.user))
      
      setIsAuthenticated(true);
    } catch (error) {
      console.log((error as Error).message)
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