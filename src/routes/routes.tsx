import React from "react";
import { useAuthContext } from "../context/AuthContext";
import Authenticated from "./authenticated.routes";
import Unauthenticated from "./unauthenticated.routes";

export default function Routes() {
  const { isAuthenticated } = useAuthContext()

  if(isAuthenticated) {
    return (
      <Authenticated />
    )
  }

  return (
    <Unauthenticated />
  )
}