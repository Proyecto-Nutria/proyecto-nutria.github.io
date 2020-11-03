import React from "react"

import UIMainContainer from "components/UI/UIBoxContainer"
import IntervieweeBoard from "components/Interviewee/Board/IntervieweeBoard"

import { signOutWithGoogle } from "../../utils/wrappers/firebaseWrapper"
import { useHistory } from "react-router-dom"

const Main = () => {
  const history = useHistory()

  return (
    <UIMainContainer>
      <IntervieweeBoard history={history} signOutWithGoogle={signOutWithGoogle} />
    </UIMainContainer>
  )
}

export default Main
