import React, { FunctionComponent as FC } from "react"
import { FormSubtract } from "grommet-icons"
import { Box, Select, Button } from "grommet"

import { formTimeProp } from "structure/types/propsTypes"
/*
type props = {
  updater: (action: action) => void
  day: string
  start: string
  end: string
  id: number
  values: any
}*/

const FormTime: FC<formTimeProp> = ({
  updater,
  day,
  start,
  end,
  id,
  values,
}) => {
  return (
    <Box direction="row-responsive" flex={true} gap="medium">
      <Box justify="center">On</Box>
      <Box>
        <Select
          size="small"
          placeholder="Select one"
          value={day}
          options={values.days}
          onChange={({ option }) =>
            updater({ type: "updateDay", id, day: option })
          }
        />
      </Box>
      <Box justify="center">from</Box>
      <Box>
        <Select
          size="small"
          placeholder="Select one"
          value={start}
          options={values.hours}
          onChange={({ option }) =>
            updater({ type: "updateStart", id, start: option })
          }
        />
      </Box>
      <Box justify="center">to</Box>
      <Box width="small">
        <Select
          value={end}
          size="small"
          placeholder="Select one"
          options={values.hours}
        />
      </Box>
      <Box overflow="hidden" align="center">
        <Button
          onClick={() => updater({ type: "delete", id })}
          icon={<FormSubtract />}
          hoverIndicator
        />
      </Box>
    </Box>
  )
}

export default FormTime
