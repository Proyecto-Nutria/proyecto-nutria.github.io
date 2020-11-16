import React from "react"

import { Box, Text, Select } from "grommet"

import { day, hour, languages } from "utils/constants/values"

import SERVER_DATA from "./server_data"
import DateTime from "utils/helpers/DateTime"

type range = { startHour: hour; endHour: hour }
const listOfDays = DateTime.getDaysOfWeek()
const listOfProgrammingLanguages = Object.values(languages)
const listOfHoursDisplay = DateTime.getHoursToScheduleMock()

const TableFilter = (props: { setData: Function }) => {
  const { setData } = props

  return (
    <Box direction="row-responsive" fill="horizontal" gap="medium">
      <Box justify="center">
        <Text weight="bold" size="large">
          Filter By:&nbsp;
        </Text>
      </Box>
      <Box direction="row-responsive" align="center" gap="small">
        <Text size="small">Day</Text>
        <Select
          size="small"
          placeholder="All"
          options={listOfDays}
          onChange={({ value }: { value: Array<day> }) => {
            if (value.length === 0) setData(SERVER_DATA)
            else
              setData(
                SERVER_DATA.filter(person =>
                  value.some(day => person[day].length !== 0)
                )
              )
          }}
          multiple={true}
        />
      </Box>
      <Box direction="row-responsive" align="center" gap="small">
        <Text size="small">Hour</Text>
        <Select
          size="small"
          placeholder="All"
          options={listOfHoursDisplay}
          onChange={({ value }) => {
            const selectedHour = parseInt(value.slice(0, 2)) as hour
            const hasAvailable = ({ startHour, endHour }: range) =>
              startHour <= selectedHour && selectedHour <= endHour

            setData(
              SERVER_DATA.filter(person =>
                listOfDays.some(day => person[day].some(hasAvailable))
              )
            )
          }}
        />
      </Box>
      <Box direction="row-responsive" align="center" gap="small">
        <Text size="small">Programming Language</Text>
        <Select
          size="small"
          placeholder="All"
          options={listOfProgrammingLanguages}
          onChange={({ value }: { value: Array<languages> }) => {
            if (value.length === 0) setData(SERVER_DATA)
            else
              setData(
                SERVER_DATA.filter(person =>
                  value.some(language =>
                    person.programmingLanguages.includes(language)
                  )
                )
              )
          }}
          multiple={true}
        />
      </Box>
    </Box>
  )
}

export default TableFilter
