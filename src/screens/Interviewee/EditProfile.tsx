import React from "react"

import UIMainContainer from "components/UI/UIBoxContainer"
import IntervieweeProfile from "components/Interviewee/Profile/IntervieweeProfile"

const EditProfile = () => {
  const [valueName, setNameValue] = React.useState("")
  const [school, setSchoolValue] = React.useState("")
  const [programming, setProgrammingValues] = React.useState([""])
  const data = {
    valueName,
    setNameValue,
    school,
    setSchoolValue,
    programming,
    setProgrammingValues,
  }

  return (
    <UIMainContainer>
      <IntervieweeProfile data={data} />
    </UIMainContainer>
  )
}

export default EditProfile
