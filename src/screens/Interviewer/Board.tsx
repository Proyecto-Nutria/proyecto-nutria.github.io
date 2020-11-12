import React from "react"

import UIMainContainer from "components/UI/UIBoxContainer"
import UserBoard from "components/User/Board/UserBoard"
import { useHistory } from "react-router-dom"

import scheduleImage from "assets/imgs/Interviewee/schedule.png"
import logImage from "assets/imgs/Interviewee/log.png"
import incomingImage from "assets/imgs/Interviewee/incoming.png"

const InterviewerMain = () => {
  const history = useHistory()
  const boardElements = [
    {
      img: scheduleImage,
      label: "Match",
      onClick: () => history.push("/scheduleInterviewee"),
    },
    {
      img: incomingImage,
      label: "Incoming Interviews",
      onClick: () => history.push("/interviewsInterviewee"),
    },
    {
      img: logImage,
      label: "Previous Interviews",
      onclick: () => history.push("/interviewsInterviewee"),
    },
  ]

  return (
    <UIMainContainer>
      <UserBoard heading={"Interviews"} elements={boardElements} />
    </UIMainContainer>
  )
}

export default InterviewerMain
