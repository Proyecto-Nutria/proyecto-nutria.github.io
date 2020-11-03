import React from "react"

import { Grid, TextInput, Box, Select, Button } from "grommet"
import { DocumentUpload } from "grommet-icons"

const IntervieweeProfile = (props: any) => (
  <>
    <Grid gap="medium" margin="xlarge">
      <Box basis="medium">
        <TextInput
          placeholder="Name"
          value={props.data.valueName}
          onChange={event => props.data.setNameValue(event.target.value)}
        />
      </Box>
      <Box>
        School:
        <Select
          placeholder="Select one"
          options={["ESCOM", "UNAM", "Other"]}
          value={props.data.school}
          onChange={({ option }) => props.data.setSchoolValue(option)}
        />
      </Box>
      <Box>
        Programming Languages:
        <Select
          multiple={true}
          placeholder="Select your programming languages"
          options={["C", "C++", "Python", "Java", "JavaScript", "Other"]}
          value={props.data.programming}
          onChange={({ option }) => {
            let exists = false
            const programming = props.data.programming
            for (let i = 0; i < programming.length; i++) {
              if (programming[i] === option) {
                exists = true
                break
              }
            }
            if (exists) {
              props.data.setProgrammingValues(programming.filter((elem: any) => elem !== option))
            } else {
              props.data.setProgrammingValues([...programming, option])
            }
          }}
        />
      </Box>
      <Box direction="row">
        <Box pad="small" alignContent="start">
          Upload Resume:
        </Box>
        <Button
          icon={<DocumentUpload size="medium" />}
          label="Upload"
          size="medium"
          onClick={() => {}}
        />
      </Box>
      <Box
      // justify="center"
      // align="center"
      // height="100px"
      // width="auto"
      >
        <Button label="Update" onClick={() => {}} size="large" primary />
      </Box>
    </Grid>
  </>
)

export default IntervieweeProfile
