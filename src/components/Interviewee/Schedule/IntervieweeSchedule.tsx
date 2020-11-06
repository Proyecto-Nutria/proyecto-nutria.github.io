import React from "react"

import {
  Box,
  Select,
  Button,
  Heading,
  Form,
  FormField,
  CheckBoxGroup,
} from "grommet"
import { /*FormSubtract,*/ Add } from "grommet-icons"

const IntervieweeSchedule = (props: any) => {
  const mutationFunction = props.mutation
  const mapper = props.mapper

  return (
    <Box pad="xlarge">
      <Heading>Mock Interview</Heading>
      <Box round background="light-1" pad="large">
        <Form
          onSubmit={e => {
            e.preventDefault()
            mapper()
            /*
            mutationFunction(
              mapper() //{ variables: { preferences: myData.value  } }
            )*/
          }}
        >
          <Box gap="medium">
            {props.inputs.map((input: any) => {
              const type = input.type
              if (type === "Select") {
                return (
                  <FormField label={input.label}>
                    <Select
                      placeholder="Select one"
                      options={input.values}
                      value={input.state}
                      onChange={({ option }) => input.setter(option)}
                    />
                  </FormField>
                )
              } else if (type === "Check") {
                return (
                  <FormField label={input.label}>
                    <CheckBoxGroup
                      id="check-box-group-id"
                      name="controlled"
                      value={input.state}
                      //@ts-expect-error
                      onChange={({ value: nextValue }) =>
                        input.setter(nextValue)
                      }
                      options={input.values}
                    />
                  </FormField>
                )
              }
            })}
          </Box>
          <Box margin={{ top: "medium" }}>
            <Button
              alignSelf="start"
              type="submit"
              primary
              label="Schedule Mock"
            />
          </Box>
        </Form>
      </Box>

      {props.onMutationError && <p>Error :( Please try again</p>}
    </Box>
  )
}

export default IntervieweeSchedule
