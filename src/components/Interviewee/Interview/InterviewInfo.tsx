import React from "react"
import { Heading } from "grommet"
import InterviewInfoList from "components/Interview/Info"

const InterviewsInfo = (props: any) => (
  <>
    <Heading level={2} margin="20px">
      Incoming Interviews
    </Heading>
    <InterviewInfoList showName={false} info={props.data.incomingInterviews} onRowClick={_ => {}} />
    <Heading level={2} margin="20px">
      Past Interviews
    </Heading>
    <InterviewInfoList showName={false} info={props.data.pastInterviews} onRowClick={_ => {}} />
  </>
)

export default InterviewsInfo
