import { Anchor, Box, Heading } from "grommet"
import React from "react"
import InterviewInfoList from "components/Interview/Info"
import DetailField from "components/Interviewee/DetailField"

const data = [
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

const IntervieweeDetails = () => {
  return (
    <>
      <Heading level={2} margin="10px">
        Interviewee Details
      </Heading>
      <Box flex={{ shrink: 0 }} background="background-front" round={true} pad="medium">
        <DetailField property="Name" value="Sergio G. Sanchez Valencia" />
        <DetailField property="Email" value="serchgabriel97@gmail.com" />
        <DetailField property="Phone #" value="+52 5512345678" />
        <DetailField property="Resume" value={<Anchor color="brand" href={"/"} label="Link" />} />
        <DetailField property="Global Score" value="Strongly Hire" />
      </Box>
      <Heading level={2} margin="10px">
        Past Interviews
      </Heading>
      <InterviewInfoList showName={false} info={data} onRowClick={_ => {}} />
    </>
  )
}

export default IntervieweeDetails
