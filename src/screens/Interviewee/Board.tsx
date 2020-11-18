import React from "react"
import {
  WEE_MOCK_PATH,
  WEE_INTERVIEWS_PATH,
  USER_PAST_INTERVIEWS_PATH,
} from "utils/constants/paths"

import UIMainContainer from "components/UI/UIBoxContainer"
import UserBoard from "components/User/Board/UserBoard"
import { useHistory } from "react-router-dom"

import scheduleImage from "assets/imgs/Interviewee/schedule.png"
import logImage from "assets/imgs/Interviewee/log.png"
import incomingImage from "assets/imgs/Interviewee/incoming.png"

const IntervieweeMain = () => {
  const history = useHistory()
  const boardElements = [
    {
      img: scheduleImage,
      label: "Schedule a Mock Interview",
      onClick: () => history.push(WEE_MOCK_PATH),
    },
    {
      img: incomingImage,
      label: "Incoming Interviews",
      onClick: () => history.push(WEE_INTERVIEWS_PATH),
    },
    {
      img: logImage,
      label: "Previous Interviews",
      onclick: () => history.push(USER_PAST_INTERVIEWS_PATH),
    },
  ]

  return (
    <UIMainContainer>
      <UserBoard heading={"Interviews"} elements={boardElements} />
    </UIMainContainer>
  )
}

export default IntervieweeMain
