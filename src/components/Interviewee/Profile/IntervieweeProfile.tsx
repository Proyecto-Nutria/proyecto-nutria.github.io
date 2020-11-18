import React from "react"

import { Form, Box, Select, Button, Heading } from "grommet"
import { DocumentUpload } from "grommet-icons"

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
    <Box pad="xlarge">
      <Heading>Nutri Profile</Heading>
      <Box round background="light-1" pad="large">
        <Form
          onSubmit={event => {
            event.preventDefault()
            mutationFunction()
          }}
        >
          <Box direction="column" gap="small">
            <Select
              placeholder="School"
              options={props.data.schoolsOptions}
              value={props.data.school}
              onChange={({ option }) => props.data.setSchoolValue(option)}
            />

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
              alignSelf="start"
              icon={<DocumentUpload size="medium" />}
              label="Upload Resume"
              onClick={uploadClick}
            />

            <Button alignSelf="start" type="submit" label="Submit" primary />
          </Box>
        </Form>
      </Box>
    </Box>
  )
}

export default IntervieweeProfile
