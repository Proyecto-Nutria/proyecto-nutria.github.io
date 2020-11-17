import React from "react"

import UIMainContainer from "components/UI/UIBoxContainer"
import IntervieweeProfile from "components/Interviewee/Profile/IntervieweeProfile"

const EditProfile = () => {
  const [resume, setResume] = React.useState(null)

  const [school, setSchoolValue] = React.useState("")
  const [programming, setProgrammingValues] = React.useState([""])

  const onFileChange = (e: any) => {
    setResume(e.target.files[0])
  }

  const data = {
    resume,
    setResume,
    school,
    setSchoolValue,
    programming,
    setProgrammingValues,
    onFileChange,
  }

  return (
    <UIMainContainer>
      <IntervieweeProfile data={data} />
    </UIMainContainer>
  )
}

export default EditProfile
