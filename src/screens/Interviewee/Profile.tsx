import React from "react"
import { useHistory } from "react-router-dom"

import { useMutation } from "@apollo/client"
import { CREATE_INTERVIEWEE } from "utils/constants/endpoints"

import Data from "utils/helpers/Data"

import UIMainContainer from "components/UI/UIBoxContainer"
import IntervieweeProfile from "components/Interviewee/Profile/IntervieweeProfile"

const IntervieweeEditProfile = () => {
  const [uploadInterviewee, { error: mutationError }] = useMutation(
    CREATE_INTERVIEWEE
  )

  const history = useHistory()
  const [resume, setResume] = React.useState(null)
  const [school, setSchoolValue] = React.useState("")
  const schoolsOptions = Data.getSchools()

  const onFileChange = (event: any) => {
    setResume(event.target.files[0])
  }

  const createNewInterviewee = () => {
    Data.callMutationAndRedirectToHome(
      uploadInterviewee,
      Data.fromInputToCreateInterviewee(resume, school),
      history
    )
  }

  const data = {
    resume,
    setResume,
    school,
    setSchoolValue,
    onFileChange,
    schoolsOptions,
  }

  return (
    <UIMainContainer>
      <IntervieweeProfile
        mutation={createNewInterviewee}
        onMutationError={mutationError}
        data={data}
      />
    </UIMainContainer>
  )
}

export default IntervieweeEditProfile
