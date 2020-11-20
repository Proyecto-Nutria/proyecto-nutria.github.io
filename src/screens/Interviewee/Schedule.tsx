import React, { useState } from "react"
import { useHistory } from "react-router-dom"

import { useMutation } from "@apollo/client"
import { ENTER_POOL } from "utils/constants/endpoints"

import Data from "utils/helpers/Data"
import DateTime from "utils/helpers/DateTime"
import {
  TYPES_OF_INTERVIEW,
  INTERVIEW_ROLES,
  PROGRAMMING_LANGUAGES,
  COMPANIES,
} from "utils/constants/values"

import UIMainContainer from "components/UI/UIBoxContainer"
import IntervieweeSchedule from "components/Interviewee/Schedule/IntervieweeSchedule"

const IntervieweeMock = () => {
  const [enterToPool, { error: mutationError }] = useMutation(ENTER_POOL)

  const history = useHistory()
  const [interviewType, setInterviewTypeValue] = useState("")
  const [rol, setRolValue] = useState("")
  const [numberInterviews, setNumberInterviewsValue] = useState(1)
  const [languages, setLanguagesValue] = useState()
  const [company, setCompanyValue] = useState()
  const [count, setCount] = useState(0)
  const [dynamic, setDynamic] = useState({})

  const staticInputs = [
    {
      label: "Type Of Interview",
      type: "Select",
      values: Object.keys(TYPES_OF_INTERVIEW),
      state: interviewType,
      setter: setInterviewTypeValue,
      apiMap: "type",
    },
    {
      label: "Role applying to",
      type: "Select",
      values: Object.keys(INTERVIEW_ROLES),
      state: rol,
      setter: setRolValue,
      apiMap: "role",
    },
    {
      label: "Number Of Interviews",
      type: "Select",
      values: [1, 2, 3],
      state: numberInterviews,
      setter: setNumberInterviewsValue,
      apiMap: "pending",
    },
    {
      label: "Programming languages to use in the interview",
      type: "Check",
      values: Object.keys(PROGRAMMING_LANGUAGES),
      state: languages,
      setter: setLanguagesValue,
      apiMap: "language",
    },
    {
      label: "Companies applying to",
      type: "Check",
      values: Object.keys(COMPANIES),
      state: company,
      setter: setCompanyValue,
      apiMap: "companies",
    },
  ]
  const dynamicInputs = {
    label: "Time to schedule a mock",
    values: {
      days: DateTime.getDaysOfWeek(),
      hours: DateTime.getHoursToScheduleMock(),
    },
    state: dynamic,
    setter: setDynamic,
    countState: count,
    countSetter: setCount,
  }

  const createMock = () => {
    Data.callMutationAndRedirectToHome(
      enterToPool,
      Data.fromInputToMock(staticInputs, dynamicInputs),
      history
    )
  }

  //TODO: Fix Cannot update a component (`IntervieweeMock`) while rendering a different component (`IntervieweeSchedule`).
  return (
    <UIMainContainer>
      <IntervieweeSchedule
        inputs={staticInputs}
        dynamicInput={dynamicInputs}
        mutation={createMock}
        onMutationError={mutationError}
      />
    </UIMainContainer>
  )
}

export default IntervieweeMock
