import React from "react"

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

const IntervieweeProfile = (props: any) => {
  const mutationFunction = props.mutation
  let inputFile: HTMLInputElement | null = null

  // Triggers input file click
  const uploadClick = (event: any) => {
    event.preventDefault()
    //@ts-expect-error
    inputFile.click()
  }

  return (
    <Container >
        <form
          onSubmit={event => {
            event.preventDefault()
            mutationFunction()
          }}
        >
          <Box>

 
          <InputLabel id="demo-simple-select-label">School</InputLabel>
          <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.data.school}
          onChange={ option => props.data.setSchoolValue(option)}
        >

        {props.data.schoolsOptions.map((name: any) => (
                      <MenuItem key={name} value={name}>
                        {name}
                      </MenuItem>
                    ))}
        </Select>

            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={props.data.onFileChange}
              ref={input => {
                inputFile = input as HTMLInputElement
              }}
            />

            <Button
              onClick={uploadClick}
          >
            Upload
            </Button>

            <Button type="submit">
              Submit
            </Button>
          </Box>
        </form >
      </Container>
  )
}

export default IntervieweeProfile
