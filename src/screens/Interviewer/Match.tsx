import React, { useState } from "react"

import { useQuery } from "@apollo/client"
import { VIEW_POOL } from "utils/constants/endpoints"

import Data from "utils/helpers/Data"

import UIMainContainer from "components/UI/UIBoxContainer"
import InterviewerMatch from "components/Interviewer/Match/InterviewerMatch"

import { day, hour } from "utils/constants/values"
import type { queryData, interviewData } from "structure/types/dataTypes"
import type { hourRange } from "structure/types/timeTypes"

const defaultRanges: Array<hourRange> = [
  { startHour: hour.h0, endHour: hour.h23 },
]
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
  const { loading, error, data } = useQuery(VIEW_POOL)

  const [queryAbout, setQueryAbout] = useState<queryData>(defaultQueryData)
  const [showAbout, setShowAbout] = useState<Boolean>(false)
  const [availableHours, setAvailableHours] = useState<Array<hourRange>>(
    defaultRanges
  )
  const [newInterviewData, setNewInterviewData] = useState<interviewData>(
    defaultInterviewData
  )
  const [showConfirm, setShowConfirm] = useState<Boolean>(false)

  if (loading) return <p> Loading </p>
  if (error) return <p> Error </p>

  let pool = Data.fromAPItoMatch(data)

  const allData = {
    pool,
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
