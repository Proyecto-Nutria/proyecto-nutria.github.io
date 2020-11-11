import React from "react"
import { IIncomingInterviewsData } from "structure/interfaces/IIncomingInterviews"

import { useQuery, useMutation } from "@apollo/client"
import {
  INCOMING_INTERVIEWS,
  CONFIRM_INTERVIEW,
  CANCEL_INTERVIEW,
} from "utils/constants/endpoints"

import UIMainContainer from "components/UI/UIBoxContainer"
import InterviewsIncoming from "components/User/Interviews/Incoming/InterviewsIncoming"

const IncomingInterviews = () => {
  const { loading, error, data } = useQuery(INCOMING_INTERVIEWS)
  // eslint-disable-next-line
  const [confirmation, { error: confirmationMutationError }] = useMutation(
    CONFIRM_INTERVIEW
  )
  // eslint-disable-next-line
  const [cancellation, { error: cancellationMutationError }] = useMutation(
    CANCEL_INTERVIEW
  )

  const [sort, setSort] = React.useState({
    property: "name",
    direction: "desc",
  })

  if (loading) return <p> Loading </p>
  if (error) return <p> Error </p>

  let finalData: IIncomingInterviewsData[] = []
  let counter = 0
  for (var value of data.getIncomingInterviews) {
    const currentTime = new Date(value.date)
    console.log(value)
    let elem: IIncomingInterviewsData = {
      id: value.uid,
      name: "Unknown",
      date: `${currentTime.getMonth()}/${currentTime.getDate()}/${currentTime.getFullYear()}`,
      time: `${currentTime.getHours()}:${currentTime.getMinutes()}`,
      timestamp: value.date.toString(),
      document: "Link",
      place: counter.toString(10),
      confirmed: value.confirmed,
      score: counter.toString(10),
    }
    counter += 10
    finalData.push(elem)
  }

  // API
  const confirmInterview = (id: string, timestamp: string) => {
    //TODO: Change in the api to not retrieve the interviewee/wer uid
    const confirmationData = {
      interviewUid: id,
      intervieweeUid: "",
      interviewDate: timestamp,
    }
    console.log(confirmationData)
    confirmation({ variables: { confirmation: confirmationData } })
  }

  const cancelInterview = (id: string, timestamp: string) => {
    //TODO: See if exposing the id of the interviewer is a potential risk
    const cancellationData = {
      interviewUid: id,
      interviewerUid: "",
      interviewDate: timestamp,
    }
    cancellation({ variables: { cancellation: cancellationData } })
  }

  return (
    <UIMainContainer>
      <InterviewsIncoming
        data={finalData}
        showName={false}
        onSort={setSort}
        sort={sort}
        confirmMutation={confirmInterview}
        cancelMutation={cancelInterview}
      />
    </UIMainContainer>
  )
}

export default IncomingInterviews
