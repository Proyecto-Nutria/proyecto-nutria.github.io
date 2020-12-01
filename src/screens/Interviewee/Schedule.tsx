import React, { useReducer, useState } from "react"
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
import { actionData, scheduleData } from "structure/types/dataTypes"

import UIMainContainer from "components/UI/UIBoxContainer"
import IntervieweeSchedule from "components/Interviewee/Schedule/IntervieweeSchedule"

const reducer = (
  currentSchedule: scheduleData,
  action: actionData
): scheduleData => {
  switch (action.type) {
    case "create": {
      const newSchedule = JSON.parse(
        JSON.stringify(currentSchedule)
      ) as scheduleData
      const indexes = (Object.keys(currentSchedule) as unknown) as Array<number>
      const newIndex = indexes.length === 0 ? 0 : Math.max(...indexes) + 1
      newSchedule[newIndex] = { day: null, interval: [null, null] }

      return newSchedule
    }

    case "delete": {
      const newSchedule = JSON.parse(JSON.stringify(currentSchedule))
      delete newSchedule[action.id]
      return newSchedule as scheduleData
    }

    case "updateStart": {
      const newSchedule = JSON.parse(
        JSON.stringify(currentSchedule)
      ) as scheduleData
      newSchedule[action.id].interval[0] = action.start

      return newSchedule
    }

    case "updateDay": {
      const newSchedule = JSON.parse(
        JSON.stringify(currentSchedule)
      ) as scheduleData
      newSchedule[action.id].day = action.day

      return newSchedule
    }
  }

  throw new Error("Bad action")
}

const IntervieweeMock = () => {
  const [enterToPool, { error: mutationError }] = useMutation(ENTER_POOL)

  const history = useHistory()
  const [interviewType, setInterviewTypeValue] = useState("")
  const [rol, setRolValue] = useState("")
  const [numberInterviews, setNumberInterviewsValue] = useState(1)
  const [languages, setLanguagesValue] = useState()
  const [company, setCompanyValue] = useState()
  const [schedule, dispatchSchedule] = useReducer(reducer, {})

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
    state: schedule,
    setter: dispatchSchedule,
  }

  const createMock = () => {
    Data.callMutationAndRedirectToHome(
      enterToPool,
      Data.fromInputToMock(staticInputs, dynamicInputs),
      history
    )
  }

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
