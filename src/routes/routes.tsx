import React from "react";
import Authenticated from "./authenticated.routes";
import Unauthenticated from "./unauthenticated.routes";

export default function Routes() {
  const isAuthenticated = false

  if(isAuthenticated) {
    return (
      <Authenticated />
    )
  }

  return (
    <Unauthenticated />
  )
}