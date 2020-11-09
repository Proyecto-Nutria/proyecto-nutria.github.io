import React, { useState } from "react"

import UIMainContainer from "components/UI/UIBoxContainer"
import IntervieweeSchedule from "components/Interviewee/Schedule/IntervieweeSchedule"

import { useMutation } from "@apollo/client"
import { ENTER_POOL } from "utils/constants/endpoints"

import { ranges } from "types/timeTypes"

import DateTime from "utils/helpers/DateTime"
import {
  TYPES_OF_INTERVIEW,
  INTERVIEW_ROLES,
  PROGRAMMING_LANGUAGES,
  COMPANIES,
} from "utils/constants/values"

const listOfDays = DateTime.getDaysOfWeek()
const listOfHoursDisplay = DateTime.getHoursToScheduleMock()

const Schedule = () => {
  const [enterToPool, { error: mutationError }] = useMutation(ENTER_POOL)

  const numberOfInterviews = [1, 2, 3]
  const [interviewType, setInterviewTypeValue] = useState("")
  const [rol, setRolValue] = useState("")
  const [numberInterviews, setNumberInterviewsValue] = useState(1)
  const [languages, setLanguagesValue] = useState()
  const [company, setCompanyValue] = useState()

  const [rangesOfTime, setRangesOfTime] = useState<ranges>(
    DateTime.getDefaultDayTimeRanges
  )
  const [count, setCount] = useState(0)
  const [dynamic, setDynamic] = useState({})

  const [typeInterview, setTypeInterviewValue] = useState("")

  const allInputs = [
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
      values: numberOfInterviews,
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

  const mapValues = () => {
    const mappedValues = { availability: [] }

    for (const element of allInputs) {
      let value = null
      if (element.apiMap === "role") {
        //@ts-expect-error
        value = INTERVIEW_ROLES[element.state]
      } else if (element.apiMap === "type") {
        //@ts-expect-error
        value = TYPES_OF_INTERVIEW[element.state]
      } else {
        value = element.state
      }
      //@ts-expect-error
      mappedValues[element.apiMap] = value
    }

    for (const id in dynamic) {
      const intervals = []

      //@ts-expect-error
      for (const interval of dynamic[id].interval) {
        intervals.push(interval.replace(" PT", ""))
      }

      let prev = mappedValues.availability
      prev.push({
        //@ts-expect-error
        day: dynamic[id]["day"],
        //@ts-expect-error
        interval: intervals,
      })
    }

    return mappedValues
  }

  const data = {
    setCount,
    count,
    rol,
    setRolValue,
    company,
    setCompanyValue,
    typeInterview,
    setTypeInterviewValue,
    rangesOfTime,
    setRangesOfTime,
    listOfDays,
    listOfHoursDisplay,
    dynamic,
    setDynamic,
    languages,
    setLanguagesValue,
  }

  return (
    <UIMainContainer>
      <IntervieweeSchedule
        mapper={mapValues}
        inputs={allInputs}
        mutation={enterToPool}
        onMutationError={mutationError}
        data={data}
      />
    </UIMainContainer>
  )
}

export default Schedule
