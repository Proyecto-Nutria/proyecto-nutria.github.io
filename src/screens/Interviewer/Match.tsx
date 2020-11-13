import React, { useState } from "react"

import { day, hour, languages } from "utils/constants/values"
/* import { QueryManager } from "@apollo/client/core/QueryManager" */

import SERVER_DATA from "components/Interviewer/Match/Filter/server_data"

import UIMainContainer from "components/UI/UIBoxContainer"
import InterviewerMatch from "components/Interviewer/Match/InterviewerMatch"

type range = { startHour: hour; endHour: hour }
type ranges = { [key in day]: Array<range> }
type personData = ranges & {
  uid: String
  name: String
  programmingLanguages: Array<languages>
  hasRealInterview: Boolean
  hasInterviews: Array<Boolean>
}
type realInterviewData = { company: String; rol: String; date: String }
type queryData = {
  name: String
  linkResume: String
  programmingLanguages: Array<languages>
  score: Number
  position: String
  realInterviews: Array<realInterviewData>
}
type interviewData = { uid: String; interviewDay: day; interviewHour: hour }

const defaultRanges: Array<range> = [{ startHour: hour.h0, endHour: hour.h23 }]
const defaultQueryData: queryData = {
  name: "",
  linkResume: "",
  programmingLanguages: [],
  score: -1,
  position: "",
  realInterviews: [],
}
const defaultInterviewData: interviewData = {
  uid: "",
  interviewDay: day.Monday,
  interviewHour: hour.h0,
}

const Match = () => {
  const [data, setData] = useState<Array<personData>>(SERVER_DATA)
  const [queryAbout, setQueryAbout] = useState<queryData>(defaultQueryData)
  const [showAbout, setShowAbout] = useState<Boolean>(false)
  const [availableHours, setAvailableHours] = useState<Array<range>>(
    defaultRanges
  )
  const [newInterviewData, setNewInterviewData] = useState<interviewData>(
    defaultInterviewData
  )
  const [showConfirm, setShowConfirm] = useState<Boolean>(false)
  const allData = {
    data,
    setData,
    queryAbout,
    setQueryAbout,
    showAbout,
    setShowAbout,
    availableHours,
    setAvailableHours,
    newInterviewData,
    setNewInterviewData,
    showConfirm,
    setShowConfirm,
  }

  return (
    <UIMainContainer>
      <InterviewerMatch data={allData} />
    </UIMainContainer>
  )
}

export default Match
