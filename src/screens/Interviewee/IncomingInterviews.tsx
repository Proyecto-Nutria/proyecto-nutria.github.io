import React from "react"

import Data from "utils/helpers/Data"
import { IIncomingInterviewsData } from "structure/interfaces/IIncomingInterviews"

import { useQuery, useMutation } from "@apollo/client"
import {
  INCOMING_INTERVIEWS,
  CONFIRM_INTERVIEW,
  CANCEL_INTERVIEW,
} from "utils/constants/endpoints"

import UIMainContainer from "components/UI/UIBoxContainer"
import InterviewsIncoming from "components/User/Interviews/InterviewsIncoming"

const IntervieweeIncomingInterviews = () => {
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

  let incomingInterviews: IIncomingInterviewsData[] = Data.fromAPItoIncoming(
    data
  )
  const confirmInterview = (id: string, timestamp: string) => {
    confirmation({
      variables: {
        confirmation: Data.fromInputToConfirmInterview(id, timestamp),
      },
    })
  }
  const cancelInterview = (id: string, timestamp: string) => {
    cancellation({
      variables: {
        cancellation: Data.fromInputToCancelInterview(id, timestamp),
      },
    })
  }

  return (
    <UIMainContainer>
      <InterviewsIncoming
        data={incomingInterviews}
        showName={false}
        onSort={setSort}
        sort={sort}
        confirmMutation={confirmInterview}
        cancelMutation={cancelInterview}
        isInterviewee={true}
      />
    </UIMainContainer>
  )
}

export default IntervieweeIncomingInterviews
