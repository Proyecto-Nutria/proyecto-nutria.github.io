import React, { useContext } from "react"
import { Redirect } from "react-router-dom"

import Path from "utils/helpers/Path"
import { signInWithGoogle } from "services/firebaseService"
import { UserContext } from "utils/providers/UserProvider"

import UIMainContainer from "components/UI/UIBoxContainer"
import LoginGrid from "components/Visitor/Login/Grid/LoginGrid"

const Login = () => {
  if (useContext(UserContext)) {
    return <Redirect to={{ pathname: Path.getPathToRedirect() }} />
  }

  return (
    <UIMainContainer>
      <LoginGrid signUpOnClick={signInWithGoogle} />
    </UIMainContainer>
  )
}

export default Login
