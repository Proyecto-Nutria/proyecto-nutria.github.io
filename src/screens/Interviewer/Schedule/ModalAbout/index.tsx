import React from "react"

import { Layer, Box, Heading, Button, Text } from "grommet"

import InterviewsTable from "./InterviewsTable"

import { languages } from "./../../../../general/values"

type realInterviewData = { company: String; rol: String; date: String }
type queryData = { name: String; linkResume: String; programmingLanguages: Array<languages>; score: Number; position: String, realInterviews: Array<realInterviewData> }

const ModalAbout = (props: { 
  setShowAbout: Function,
  queryAbout: queryData
 }) => {

  const { setShowAbout, queryAbout } = props

  return (
    <Layer
      onEsc={() => {setShowAbout(false)}}
      onClickOutside={() => {setShowAbout(false)}}
    >
      <Box width="large" background="background-contrast" pad="medium" justify="center" align="center">
        <Heading textAlign="center" level={4} margin="small" >About {queryAbout.name.toString()}</Heading>
        <Box direction="row-responsive" fill={true} justify="between">
          <Box justify="center" align="center" margin="medium">
            <Button label="Resume" href={queryAbout.linkResume.toString()} target="_blank" size="small" primary />
          </Box>
          <Box justify="center" alignSelf="start" margin="medium">
            <Text size="small">Score:&nbsp;{queryAbout.score.toString()}</Text>
          </Box>
          <Box justify="center" alignSelf="start" margin="medium">
            <Text size="small">Position:&nbsp;{queryAbout.position.toString()}</Text>
          </Box>
        </Box>
        <Box pad={{ vertical: "xsmall" }} fill="vertical" alignSelf="start" margin="medium">
          <Text wordBreak="break-word">Programming Languages:&nbsp;{queryAbout.programmingLanguages.join(", ")}</Text>
        </Box>
        <Heading textAlign="start" level={4} margin="small" alignSelf="start" >Real Interviews</Heading>
        <InterviewsTable realInterviews={queryAbout.realInterviews} />
        <Button label="Close" size="small" margin="medium" type="submit" onClick={() => {setShowAbout(false)}} />
      </Box>
    </Layer>
  )
}

export default ModalAbout
