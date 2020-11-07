import React, { useState } from "react"

import { day, hour } from "utils/constants/values"

import UIMainContainer from "components/UI/UIBoxContainer"
import IntervieweeSchedule from "components/Interviewee/Schedule/IntervieweeSchedule"

import { useMutation } from "@apollo/client"
import { ENTER_POOL } from "utils/constants/api"

import {
  TYPES_OF_INTERVIEW,
  INTERVIEW_ROLES,
  PROGRAMMING_LANGUAGES,
  COMPANIES,
} from "utils/constants/values"

const info = {
  companies: ["Google"],
  availability: [
    {
      day: "monday",
      interval: ["12-14", "14-16"],
    },
    {
      day: "friday",
      interval: ["12-14", "14-16"],
    },
  ],
  language: ["python"],
  pending: 10, //input
  role: "FTE",
  type: "se",
}

const listOfDays = Object.values(day)
const listOfHours = Object.values(hour)

const hourToDisplay = (hour: number | string) =>
  `${hour < 10 ? "0" : ""}${hour}:00 PT`
const listOfHoursDisplay = listOfHours
  .filter(h => typeof h !== "string")
  .map(hourToDisplay)

type range = { startHour: hour; endHour: hour }
type ranges = Record<day, Array<range>>

let state = []

const defaultRange: ranges = {
  [day.Monday]: [],
  [day.Tuesday]: [],
  [day.Wednesday]: [],
  [day.Thursday]: [],
  [day.Friday]: [],
  [day.Saturday]: [],
  [day.Sunday]: [],
}

const defstate = { id: 1, name: "Some Name" }

const Schedule = () => {
  const numberOfInterviews = [1, 2, 3]
  const [interviewType, setInterviewTypeValue] = useState("")
  const [rol, setRolValue] = useState("")
  const [numberInterviews, setNumberInterviewsValue] = useState("")
  const [languages, setLanguagesValue] = useState("")
  const [company, setCompanyValue] = useState("")

  const [rangesOfTime, setRangesOfTime] = useState<ranges>(defaultRange)
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
    },
    {
      label: "Role applying to",
      type: "Select",
      values: Object.keys(INTERVIEW_ROLES),
      state: rol,
      setter: setRolValue,
    },
    {
      label: "Number Of Interviews",
      type: "Select",
      values: numberOfInterviews,
      state: numberInterviews,
      setter: setNumberInterviewsValue,
    },
    {
      label: "Programming languages to use in the interview",
      type: "Check",
      values: Object.keys(PROGRAMMING_LANGUAGES),
      state: languages,
      setter: setLanguagesValue,
    },
    {
      label: "Companies applying to",
      type: "Check",
      values: Object.keys(COMPANIES),
      state: company,
      setter: setCompanyValue,
    },
  ]

  const fval = {
    companies: "",
  }

  const inputData = TYPES_OF_INTERVIEW

  const mapValues = () => {
    console.log(languages)

    //console.log(languages)
    //return { variables: { preferences: rol } }
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
    hourToDisplay,
    listOfHoursDisplay,
    day,
    hour,
    dynamic,
    setDynamic,
  }

  const [enterToPool, { error: mutationError }] = useMutation(ENTER_POOL)

  return (
    <UIMainContainer>
      <IntervieweeSchedule
        mapper={mapValues}
        inputs={allInputs}
        mutation={enterToPool}
        onMutationError={mutationError}
        data={data}
        defstate={defstate}
      />
    </UIMainContainer>
  )
}

export default Schedule
