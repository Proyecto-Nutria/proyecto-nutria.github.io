import React from "react"

import Data from "utils/helpers/Data"

import { useMutation } from "@apollo/client"
import { CREATE_INTERVIEWEE } from "utils/constants/endpoints"

import UIMainContainer from "components/UI/UIBoxContainer"
import IntervieweeProfile from "components/Interviewee/Profile/IntervieweeProfile"

const IntervieweeEditProfile = () => {
  const [uploadInterviewee, { error: mutationError }] = useMutation(
    CREATE_INTERVIEWEE
  )

  const [resume, setResume] = React.useState(null)
  const [school, setSchoolValue] = React.useState("")
  const schoolsOptions = Data.getSchools()

  const onFileChange = (e: any) => {
    setResume(e.target.files[0])
  }

  const createNewInterviewer = () => {
    uploadInterviewee({
      variables: Data.fromInputToCreateInterviewee(resume, school),
    })
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
        mutation={createNewInterviewer}
        onMutationError={mutationError}
        data={data}
      />
    </UIMainContainer>
  )
}

export default IntervieweeEditProfile
