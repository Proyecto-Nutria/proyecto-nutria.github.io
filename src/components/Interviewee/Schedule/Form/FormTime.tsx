import React from "react"
import { FormSubtract } from "grommet-icons"
import { Box, Select, Button } from "grommet"

const FormTime = (props: any) => {
  // TODO: Refactor the onChange method to call a utils function
  return (
    <Box direction="row-responsive" flex={true} gap="medium">
      <Box justify="center">On</Box>
      <Box>
        <Select
          size="small"
          placeholder="Select one"
          options={props.dynamicInput.values.days}
          onChange={({ option }) => {
            let copiedInfo = { ...props.dynamicInput.state }
            copiedInfo[props.id]["day"] = option
            copiedInfo[props.id]["interval"] = []
            props.dynamicInput.setter(copiedInfo)
          }}
        />
      </Box>
      <Box justify="center">from</Box>
      <Box>
        <Select
          size="small"
          placeholder="Select one"
          options={props.dynamicInput.values.hours}
          onChange={({ option }) => {
            let copiedInfo = { ...props.dynamicInput.state }
            const interval = copiedInfo[props.id]["interval"]
            const finalInterval = [...interval, option]
            copiedInfo[props.id]["interval"] = finalInterval
            props.dynamicInput.setter(copiedInfo)
          }}
        />
      </Box>
      <Box justify="center">to</Box>
      <Box width="small">
        <Select
          size="small"
          placeholder="Select one"
          options={props.dynamicInput.values.hours}
          onChange={({ option }) => {
            let copiedInfo = { ...props.dynamicInput.state }
            const interval = copiedInfo[props.id]["interval"]
            const finalInterval = [...interval, option]
            copiedInfo[props.id]["interval"] = finalInterval
            props.dynamicInput.setter(copiedInfo)
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
