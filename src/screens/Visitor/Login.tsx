import React, { useContext } from "react"
import { Redirect } from "react-router-dom"

import { signInWithGoogle } from "services/firebaseService"
import { UserContext } from "utils/providers/UserProvider"

import UIMainContainer from "components/UI/UIBoxContainer"
import LoginGrid from "components/Visitor/Login/Grid/LoginGrid"

const Login = () => {
  const user = useContext(UserContext)

  if (user) {
    return <Redirect to={{ pathname: "/home" }} />
  }

  return (
    <UIMainContainer>
      <LoginGrid signUpOnClick={signInWithGoogle} />
    </UIMainContainer>
  )
}

export default Login
