import React from "react"

import { Box, Heading } from "grommet"
import InterviewInfoList from "components/Interview/Info"

const MatchGrid = (props: any) => (
  <Box>
    <Heading level={2} margin="20px">
      Incoming Interviews
    </Heading>
    <InterviewInfoList
      showName={true}
      info={props.incomingInterviews}
      onRowClick={_ => {
        props.history.push("/intervieweeDetails")
      }}
    />
    <Heading level={2} margin="20px">
      Past Interviews
    </Heading>
    <InterviewInfoList
      showName={true}
      info={props.pastInterviews}
      onRowClick={_ => {
        props.history.push("/intervieweeDetails")
      }}
    />
  </Box>
)

export default MatchGrid
