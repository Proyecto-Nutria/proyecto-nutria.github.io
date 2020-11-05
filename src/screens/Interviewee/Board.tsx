import React from "react"
// import { useQuery } from "@apollo/client"

import UIMainContainer from "components/UI/UIBoxContainer"
import IntervieweeBoard from "components/User/Board/UserBoard"
// import { HOUR_IN_MILLISECONDS } from "utils/constants/values"
import { useHistory } from "react-router-dom"

import scheduleImage from "assets/imgs/Interviewee/schedule.png"
import logImage from "assets/imgs/Interviewee/log.png"
import incomingImage from "assets/imgs/Interviewee/incoming.png"

// import { VIEW_POOL } from "utils/constants/api"

const Main = () => {
  const history = useHistory()
  const boardElements = [
    {
      img: scheduleImage,
      label: "Schedule a Mock Interview",
      onClick: () => history.push("/scheduleInterviewer"),
    },
    {
      img: incomingImage,
      label: "Incoming Interviews",
      onClick: () => history.push("/scheduleInterviewee"),
    },
    {
      img: logImage,
      label: "Previous Interviews",
      onclick: () => history.push("/interviewsInterviewee"),
    },
  ]

  /*
  const { loading, error, data } = useQuery(VIEW_POOL, {
    pollInterval: HOUR_IN_MILLISECONDS,
  })


  if (loading) return <p>Loading...</p>
  if (error) {
    console.log(error)
    return <p>Error :(</p>
  }


  {data.viewPool.map(({ type }: { type: string }) => (
        <h1 key={type}> {type}</h1>
      ))}
  */

  return (
    <UIMainContainer>
      <IntervieweeBoard heading={"Interviews"} elements={boardElements} />
    </UIMainContainer>
  )
}

export default Main
