import React, { useContext } from "react"

import { UserContext } from "utils/providers/UserProvider"
import { Redirect, useHistory } from "react-router-dom"

import UIMainContainer from "components/UI/UIBoxContainer"
import VisitorHeader from "components/Visitor/Landing/LandingHeader"
import VisitorInfo from "components/Visitor/Landing/LandingInfo"
import VisitorFooter from "components/Visitor/Landing/LandingFooter"
import VisitorAbout from "components/Visitor/Landing/LandingAbout"
import VisitorContributor from "components/Visitor/Landing/LandingContributors"

const Login = () => {
  const user = useContext(UserContext)
  const history = useHistory()

  if (user) {
    return <Redirect to={{ pathname: "/home" }} />
  }

  return (
    <UIMainContainer>
      <VisitorHeader />
      <VisitorInfo signUpOnClick={()=> history.push("/home")} />
      <VisitorAbout />
      <VisitorContributor />
      <VisitorFooter />
    </UIMainContainer>
  )
}

export default Login
