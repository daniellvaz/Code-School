import React, { createContext, ReactNode, useContext, useState } from 'react';
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

export const AuthContext = createContext({} as IContext)

export const AuthProvider = ({ children }: IAuthContext) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  const handleSignIn = async (data: ISignIn) => {
    try {
      const response = await api.get('/users');

      if(!response) {
        return;
      }
      
      const user = response.find(user => data.email === user.email && data.password === user.password);

      if(!user) {
        return;
      }
      
      setIsAuthenticated(true);
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