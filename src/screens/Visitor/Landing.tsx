import React, { useContext } from "react"

import { UserContext } from "utils/providers/UserProvider"
import { Redirect, useHistory } from "react-router-dom"

import UIMainContainer from "components/UI/UIBoxContainer"
import VisitorHeader from "components/Visitor/VisitorHeader"
import VisitorInfo from "components/Visitor/VisitorInfo"
import VisitorFooter from "components/Visitor/VisitorFooter"
import VisitorAbout from "components/Visitor/VisitorAbout"
import VisitorContributor from "components/Visitor/VisitorContributors"

const Login = () => {
  const user = useContext(UserContext)
  const history = useHistory()

  if (user) {
    return <Redirect to={{ pathname: "/home" }} />
  }

  return (
    <UIMainContainer>
      <VisitorHeader />
      <VisitorInfo signUponClick={()=> history.push("/home")} />
      <VisitorAbout />
      <VisitorContributor />
      <VisitorFooter />
    </UIMainContainer>
  )
}

export default Login
