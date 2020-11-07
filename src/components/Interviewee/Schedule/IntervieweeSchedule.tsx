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

          <Button
            icon={<Add />}
            hoverIndicator
            onClick={() => {
              props.data.setCount(props.data.count + 1)
            }}
          />

          {Array(props.data.count)
            .fill(0)
            .map((_, id) => {
              if (!(id in props.data.dynamic)) {
                let copyFoo = { ...props.data.dynamic }
                copyFoo[id] = {}
                props.data.setDynamic(copyFoo)
              }
              return <FormTime data={props.data} id={id} />
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
