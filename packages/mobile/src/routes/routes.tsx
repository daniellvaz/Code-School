import React from "react";
import { NavigationContainer } from '@react-navigation/native';


import Authenticated from "./authenticated.routes";
import Unauthenticated from "./unauthenticated.routes";
import { useAuthContext } from "../context/AuthContext";


export default function Routes() {
  const { isAuthenticated } = useAuthContext()

  return (
    <NavigationContainer>
      { isAuthenticated ? <Authenticated/> : <Unauthenticated /> }
    </NavigationContainer>
  )
}