import React from "react"

import { Grid, TextInput, Box, Select, Button } from "grommet"
import { DocumentUpload } from "grommet-icons"

const EditProfile = () => {
  const [valueName, setNameValue] = React.useState("")
  const [school, setSchooleValue] = React.useState("")
  const [programming, setProgrammingValues] = React.useState([""])

  return (
    <Grid gap="medium" margin="xlarge">
      <Box basis="medium">
        <TextInput
          placeholder="Name"
          value={valueName}
          onChange={event => setNameValue(event.target.value)}
        />
      </Box>
      <Box>
        School:
        <Select
          placeholder="Select one"
          options={["ESCOM", "UNAM", "Other"]}
          value={school}
          onChange={({ option }) => setSchooleValue(option)}
        />
      </Box>
      <Box>
        Programming Languages:
        <Select
          multiple={true}
          placeholder="Select your programming languages"
          options={["C", "C++", "Python", "Java", "JavaScript", "Other"]}
          value={programming}
          onChange={({ option }) => {
            let exists = false
            for (let i = 0; i < programming.length; i++) {
              if (programming[i] === option) {
                exists = true
                break
              }
            }
            if (exists) {
              setProgrammingValues(programming.filter(elem => elem !== option))
            } else {
              setProgrammingValues([...programming, option])
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
        <Button label="Sign Up" onClick={() => {}} size="large" primary />
      </Box>
    </Grid>
  )
}

export default EditProfile
