import React from "react"

import { TextArea, CheckBox, Form, Box, Button, Heading } from "grommet"

const InterviewerProfileForm = (props: any) => {
  const mutationFunction = props.mutation

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
          <CheckBox
            checked={props.data.appear}
            label="Check if you want to appear as a contributor"
            reverse={true}
            onChange={event => props.data.setAppearValue(event.target.checked)}
          />
          {props.data.appear && (
            <TextArea
              placeholder=" Describe yourself, aximum 250 characters"
              value={props.data.about}
              onChange={event => props.data.setAboutValue(event.target.value)}
            />
          )}
          <Button alignSelf="start" type="submit" label="Submit" primary />
        </Form>
      </Box>
    </Box>
  )
}

export default InterviewerProfileForm
