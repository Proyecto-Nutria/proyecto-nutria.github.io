import React, { useState } from "react"

import { day, hour } from "utils/constants/values"

import UIMainContainer from "components/UI/UIBoxContainer"
import IntervieweeSchedule from "components/Interviewee/Schedule/IntervieweeSchedule"

const listOfDays = Object.values(day)
const listOfHours = Object.values(hour)

const hourToDisplay = (hour: number | string) => `${hour < 10 ? "0" : ""}${hour}:00 PT`
const listOfHoursDisplay = listOfHours.filter(h => typeof h !== "string").map(hourToDisplay)

type range = { startHour: hour; endHour: hour }
type ranges = Record<day, Array<range>>

const defaultRange: ranges = {
  [day.Monday]: [],
  [day.Tuesday]: [{ startHour: hour.h13, endHour: hour.h15 }],
  [day.Wednesday]: [],
  [day.Thursday]: [],
  [day.Friday]: [],
  [day.Saturday]: [],
  [day.Sunday]: [],
}

const Schedule = () => {
  const [rol, setRolValue] = useState("")
  const [company, setCompanyValue] = useState("")
  const [typeInterview, setTypeInterviewValue] = useState("")

  const [rangesOfTime, setRangesOfTime] = useState<ranges>(defaultRange)

  const data = {
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
  }

  return (
    <UIMainContainer>
      <IntervieweeSchedule data={data} />
    </UIMainContainer>
  )
}

export default Schedule
