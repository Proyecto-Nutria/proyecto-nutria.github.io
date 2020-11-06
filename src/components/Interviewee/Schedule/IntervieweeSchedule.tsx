import React from "react"

import { Text, Box, Select, Button, Heading } from "grommet"
import { /*FormSubtract,*/ Add } from "grommet-icons"

const IntervieweeSchedule = (props: any) => {
  const mutationFunction = props.mutation

  let myData: any
  const info = {
    companies: ["Google"],
    availability: [
      {
        day: "monday",
        interval: ["12-14", "14-16"],
      },
      {
        day: "friday",
        interval: ["12-14", "14-16"],
      },
    ],
    language: ["python"],
    pending: 10,
    role: "FTE",
    type: "se",
  }
  return (
    <Box pad="xlarge">
      <Heading>Mock Interview</Heading>
      <Box pad="large" gap="large" round background="light-1">
        <Box gap="small">
          <Text>Type of Interview</Text>
          <Select
            placeholder="Select one"
            options={["Explorer/STEP", "Internship", "FullTime"]}
            value={props.data.rol}
            onChange={({ option }) => props.data.setRolValue(option)}
          />
        </Box>
        <Box>
          <form
            onSubmit={e => {
              e.preventDefault()
              mutationFunction({ variables: { preferences: myData.value /*info*/ } })
            }}
          >
            <input
              ref={node => {
                myData = node
              }}
            />
            <button type="submit">Add Todo</button>
          </form>
        </Box>
        {props.onMutationError && <p>Error :( Please try again</p>}
      </Box>
    </Box>
  )
}

export default IntervieweeSchedule
