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

import { Add } from "grommet-icons"
import FormTime from "components/Interviewee/Schedule/Form/FormTime"

const IntervieweeSchedule = (props: any) => {
  const mutationFunction = props.mutation
  return (
    <Box pad="xlarge">
      <Heading>Mock Interview</Heading>
      <Box round background="main-box" elevation="large" pad="large">
        <Form
          onSubmit={e => {
            e.preventDefault()
            mutationFunction()
          }}
        >
          <Box gap="medium">
            {props.inputs.map((input: any) => {
              const type = input.type
              if (type === "Select") {
                return (
                  <FormField key={input.label} label={input.label}>
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
                  <FormField key={input.label} label={input.label}>
                    <CheckBoxGroup
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
              return <></>
            })}
          </Box>

          <Button
            icon={<Add />}
            hoverIndicator
            onClick={() => props.dynamicInput.setter({ type: "create" })}
          />

          {Object.entries(props.dynamicInput.state).map(([id, data]) => {
            const current = props.dynamicInput.state[id]
            const { day, interval } = current
            const [start, end] = interval
            return (
              <FormTime
                values={props.dynamicInput.values}
                key={id}
                updater={props.dynamicInput.setter}
                day={day}
                start={start}
                end={end}
                id={+id}
              />
            )
          })}

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
