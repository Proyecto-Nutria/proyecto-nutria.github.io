import React from "react"
import { useQuery } from "@apollo/client"

import UIMainContainer from "components/UI/UIBoxContainer"
import IntervieweeBoard from "components/Interviewee/Board/IntervieweeBoard"
import { HOUR_IN_MILLISECONDS } from "utils/constants/values"
import { signOutWithGoogle } from "services/firebaseService"
import { useHistory } from "react-router-dom"

import { VIEW_POOL } from "utils/constants/api"

const Main = () => {
  const history = useHistory()

  const { loading, error, data } = useQuery(VIEW_POOL, {
    pollInterval: HOUR_IN_MILLISECONDS,
  })

  if (loading) return <p>Loading...</p>
  if (error) {
    console.log(error)
    return <p>Error :(</p>
  }

  return (
    <UIMainContainer>
      <IntervieweeBoard history={history} signOutWithGoogle={signOutWithGoogle} />
      {data.viewPool.map(({ type }: { type: string }) => (
        <h1 key={type}> {type}</h1>
      ))}
    </UIMainContainer>
  )
}

export default Main
