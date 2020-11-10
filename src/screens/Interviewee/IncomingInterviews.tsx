import React from "react"
import Util from "utils/helpers/Util"
import { useQuery } from "@apollo/client"
import { INCOMING_INTERVIEWS } from "utils/constants/endpoints"

import UIMainContainer from "components/UI/UIBoxContainer"
import IntervieweeInterviews from "components/Interviewee/Interview/InterviewInfo"

const dataA = [
  {
    id: "1",
    name: "Jose Manuel Calva Hernandez",
    document: "Link",
    place: "room-4",
    confirmed: false,
    timestamp: new Date(2020, 8, 21, 15, 30),
    score: "--",
  },
  {
    id: "2",
    name: "Sergio Gabriel Sanchez Valencia",
    document: "Link",
    place: "room-2",
    confirmed: true,
    timestamp: new Date(2020, 8, 22, 13, 30),
    score: "Undetermined",
  },
  {
    id: "3",
    name: "Abigail Nicolas Sayago",
    document: "Link",
    place: "room-4",
    confirmed: false,
    timestamp: new Date(2020, 8, 21, 14, 30),
    score: "--",
  },
  {
    id: "4",
    name: "Roberto Reyes Fragoso",
    document: "Link",
    place: "room-5",
    confirmed: true,
    timestamp: new Date(2020, 8, 13, 14, 30),
    score: "Strongly Hire",
  },
  {
    id: "5",
    name: "Hugo Duhart",
    document: "Link",
    place: "room-1",
    confirmed: true,
    timestamp: new Date(2020, 8, 14, 14, 30),
    score: "Hire",
  },
]

const InterviewsInterviewer = () => {
  let [first, second] = Util.splitByTime(dataA, new Date())
  // let [incomingInterviews, setIncomingInterviews] = useState(
  //   first.sort(Util.datesComparator).reverse()
  // )

  // let [pastInterviews, setPastInterviews] = useState(second.sort(Util.datesComparator).reverse())
  const incomingInterviews = first.sort(Util.datesComparator).reverse()
  const pastInterviews = second.sort(Util.datesComparator).reverse()
  const allData = { dataA, incomingInterviews, pastInterviews }

  const { loading, error, data } = useQuery(INCOMING_INTERVIEWS)

  if (loading) return <p>Loading...</p>
  if (error) {
    console.log(error)
    return <p>Error :(</p>
  }

  return (
    <UIMainContainer>
      <IntervieweeInterviews data={allData} />
      {data.getIncomingInterviews.map((interview: any) => (
        <h1>
          {interview.confirmed.toString()} {interview.date}
        </h1>
      ))}
    </UIMainContainer>
  )
}

export default InterviewsInterviewer
