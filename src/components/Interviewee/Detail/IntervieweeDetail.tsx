import React from "react"
import { Anchor, Box, Heading } from "grommet"
import DetailField from "components/Interviewee/Detail/DetailField"
import InterviewInfoList from "components/Interview/Info"

const IntervieweeDetail = (props: any) => (
  <Box>
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
    <InterviewInfoList showName={false} info={props.data} onRowClick={_ => {}} />
  </Box>
)

export default IntervieweeDetail
