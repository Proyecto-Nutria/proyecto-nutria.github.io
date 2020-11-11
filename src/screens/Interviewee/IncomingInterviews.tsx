import React, { useState } from "react"

import { useQuery } from "@apollo/client"
import { INCOMING_INTERVIEWS } from "utils/constants/endpoints"
import { IIncomingInterviewsData } from "structure/interfaces/IIncomingInterviews"

import UIMainContainer from "components/UI/UIBoxContainer"
import InterviewsIncoming from "components/User/Interviews/Incoming/InterviewsIncoming"

const dataA: IIncomingInterviewsData = {
  id: "1",
  name: "Jose Manuel Calva Hernandez",
  time: "11",
  date: "november",
  document: "Link",
  place: "room-4",
  confirmed: false,
  score: "0",
}

const IncomingInterviews = () => {
  const { loading, error, data } = useQuery(INCOMING_INTERVIEWS)
  const [sort, setSort] = React.useState({
    property: "name",
    direction: "desc",
  })

  let [interviews, setInterviews] = useState([dataA])
  if (loading) return <p> Loading </p>
  if (error) return <p> Error </p>

  let finalData: IIncomingInterviewsData[] = []
  let counter = 0
  for (var value of data.getIncomingInterviews) {
    const currentTime = new Date(value.date)
    let elem: IIncomingInterviewsData = {
      id: "0",
      name: "Unknown",
      date: `${currentTime.getMonth()}/${currentTime.getDate()}/${currentTime.getFullYear()}`,
      time: `${currentTime.getHours()}:${currentTime.getMinutes()}`,
      document: "Link",
      place: counter.toString(10),
      confirmed: value.confirmed,
      score: counter.toString(10),
    }
    counter += 10
    finalData.push(elem)
  }

  return (
    <UIMainContainer>
      <InterviewsIncoming
        data={finalData}
        showName={false}
        onRowClick={_ => {}}
        state={interviews}
        setter={setInterviews}
        onSort={setSort}
        sort={sort}
      />
    </UIMainContainer>
  )
}

export default IncomingInterviews
