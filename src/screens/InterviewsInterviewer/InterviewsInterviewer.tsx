import React, { useState } from "react"
import { Heading } from "grommet"
import Util from "../../general/Util"
import InterviewInfoList from "../InterviewInfoList/InterviewInfoList"
import { useHistory } from "react-router-dom"

const data = [
  {
    id: "1",
    name: "Jose Manuel Calva Hernandez",
    document: "Link",
    place: "room-4",
    confirmed: false,
    timestamp: new Date(2020, 8, 21, 15, 30),
    score: "--"
  },
  {
    id: "2",
    name: "Sergio Gabriel Sanchez Valencia",
    document: "Link",
    place: "room-2",
    confirmed: true,
    timestamp: new Date(2020, 8, 22, 13, 30),
    score: "Undetermined"
  },
  {
    id: "3",
    name: "Abigail Nicolas Sayago",
    document: "Link",
    place: "room-4",
    confirmed: false,
    timestamp: new Date(2020, 8, 21, 14, 30),
    score: "--"
  },
  {
    id: "4",
    name: "Roberto Reyes Fragoso",
    document: "Link",
    place: "room-5",
    confirmed: true,
    timestamp: new Date(2020, 8, 13, 14, 30),
    score: "Strongly Hire"
  },
  {
    id: "5",
    name: "Hugo Duhart",
    document: "Link",
    place: "room-1",
    confirmed: true,
    timestamp: new Date(2020, 8, 14, 14, 30),
    score: "Hire"
  },
]

const InterviewsInterviewer = () => {
  const history = useHistory()
  let [first, second] = Util.splitByTime(data, new Date())
  let [incomingInterviews] = useState(first.sort(Util.datesComparator).reverse())

  let [pastInterviews] = useState(second.sort(Util.datesComparator).reverse())

  return (
    <>
      <Heading level={2} margin="20px">
        Incoming Interviews
      </Heading>
      <InterviewInfoList showName={true} info={incomingInterviews} onRowClick={_ => {history.push("/intervieweeDetails")}} />
      <Heading level={2} margin="20px">
        Past Interviews
      </Heading>
      <InterviewInfoList showName={true} info={pastInterviews} onRowClick={_ => {history.push("/intervieweeDetails")}} />
    </>
  )
}

export default InterviewsInterviewer
