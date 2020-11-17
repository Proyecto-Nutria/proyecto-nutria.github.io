import React from "react"

import { Grid, Form, Box, Select, Button } from "grommet"
import { DocumentUpload } from "grommet-icons"

const IntervieweeProfile = (props: any) => {
  // will hold a reference for our real input file
  let inputFile: HTMLInputElement | null = null

  // function to trigger our input file click
  const uploadClick = (e: any) => {
    e.preventDefault()
    //@ts-expect-error
    inputFile.click()
  }

  return (
    <Form
      onSubmit={e => {
        // Create an object of formData
        const formData = new FormData()

        // Update the formData object
        formData.append("myFile", props.data.resume, props.data.resume.name)

        // Details of the uploaded file
        console.log(props.data.resume)

        //Post
      }}
    >
      <Grid gap="medium" margin="xlarge">
        <Box>
          School:
          <Select
            placeholder="Select one"
            options={["ESCOM", "UNAM", "Other"]}
            value={props.data.school}
            onChange={({ option }) => props.data.setSchoolValue(option)}
          />
        </Box>
        <Box direction="row">
          <Box pad="small" alignContent="start">
            Your Resume:
          </Box>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={props.data.onFileChange}
            ref={input => {
              // assigns a reference so we can trigger it later
              inputFile = input as HTMLInputElement
            }}
          />
          <Button
            icon={<DocumentUpload size="medium" />}
            label="Upload"
            size="medium"
            onClick={uploadClick}
          />
        </Box>
        <Box>
          <Button type="submit" label="Update" size="large" primary />
        </Box>
      </Grid>
    </Form>
  )
}

export default IntervieweeProfile
