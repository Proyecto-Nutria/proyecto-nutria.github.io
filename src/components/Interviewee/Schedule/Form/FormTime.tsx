import React from "react"
import { FormSubtract } from "grommet-icons"
import { Box, Select, Button } from "grommet"

const FormTime = (props: any) => {
  return (
    <Box direction="row-responsive" flex={true} gap="medium">
      <Box justify="center">On</Box>
      <Box>
        <Select
          size="small"
          placeholder="Select one"
          options={props.data.listOfDays}
          onChange={({ option }) => {
            let copyFoo = { ...props.data.dynamic }
            copyFoo[props.id]["day"] = option
            copyFoo[props.id]["interval"] = []
            props.data.setDynamic(copyFoo)
            //props.data.setDynamic([...props.data.dynamic, option])
          }}
        />
      </Box>
      <Box justify="center">from</Box>
      <Box>
        <Select
          size="small"
          placeholder="Select one"
          options={props.data.listOfHoursDisplay}
          onChange={({ option }) => {
            let copyFoo = { ...props.data.dynamic }
            const interval = copyFoo[props.id]["interval"]
            const finalInterval = [...interval, option]
            copyFoo[props.id]["interval"] = finalInterval
            props.data.setDynamic(copyFoo)
            console.log(props.data.dynamic)
          }}
        />
      </Box>
      <Box justify="center">to</Box>
      <Box width="small">
        <Select
          size="small"
          placeholder="Select one"
          options={props.data.listOfHoursDisplay}
          onChange={({ option }) => {
            let copyFoo = { ...props.data.dynamic }
            const interval = copyFoo[props.id]["interval"]
            const finalInterval = [...interval, option]
            copyFoo[props.id]["interval"] = finalInterval
            props.data.setDynamic(copyFoo)
            console.log(props.data.dynamic)
          }}
        />
      </Box>
      <Box overflow="hidden" align="center">
        <Button icon={<FormSubtract />} hoverIndicator />
      </Box>
    </Box>
  )
}

export default FormTime
