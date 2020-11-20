import React from "react"

import Data from "utils/helpers/Data"

import { useMutation } from "@apollo/client"
import { CREATE_INTERVIEWER } from "utils/constants/endpoints"

import UIMainContainer from "components/UI/UIBoxContainer"
import InterviewerProfileForm from "components/Interviewer/Profile/InterviewerProfileForm"

const InterviewerEditProfile = () => {
  const [uploadInterviewer, { error: mutationError }] = useMutation(
    CREATE_INTERVIEWER
  )

  const [appear, setAppearValue] = React.useState(false)
  const [about, setAboutValue] = React.useState("")

  const createNewInterviewer = () => {
    Data.callMutationAndRedirectToHome(
      uploadInterviewer,
      Data.fromInputToCreateInterviewer(appear, about),
      history
    )
  }

  const data = {
    appear,
    setAppearValue,
    about,
    setAboutValue,
  }

  return (
    <UIMainContainer>
      <InterviewerProfileForm
        mutation={createNewInterviewer}
        onMutationError={mutationError}
        data={data}
      />
    </UIMainContainer>
  )
}

export default InterviewerEditProfile
