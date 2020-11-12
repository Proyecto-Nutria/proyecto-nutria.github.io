import React, { useContext } from "react"

import { UserContext } from "utils/providers/UserProvider"
import { Redirect, useHistory } from "react-router-dom"

import UIMainContainer from "components/UI/UIBoxContainer"
import VisitorHeader from "components/Visitor/Landing/LandingHeader"
import VisitorInfo from "components/Visitor/Landing/LandingInfo"
import VisitorFooter from "components/Visitor/Landing/LandingFooter"
import VisitorAbout from "components/Visitor/Landing/LandingAbout"
import VisitorContributor from "components/Visitor/Landing/LandingContributors"
import { WEE_BOARD_PATH, WER_BOARD_PATH } from "utils/constants/paths"
const Login = () => {
  const user = useContext(UserContext)
  const history = useHistory()

  if (user) {
    return <Redirect to={{ pathname: WER_BOARD_PATH }} />
  }

  return (
    <UIMainContainer>
      <VisitorHeader />
      <VisitorInfo signUpOnClick={() => history.push(WEE_BOARD_PATH)} />
      <VisitorAbout />
      <VisitorContributor />
      <VisitorFooter />
    </UIMainContainer>
  )
}

export default Login
