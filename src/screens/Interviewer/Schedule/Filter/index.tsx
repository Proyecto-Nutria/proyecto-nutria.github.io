import React from "react"

import { Box, Text, Select } from "grommet"

import { day, hour, languages } from "./../../../../utils/constants/values"

import SERVER_DATA from "./../server_data"

const listOfDays = Object.values(day)
const listOfHours = Object.values(hour)
const listOfProgrammingLanguages = Object.values(languages)
type range = { startHour: hour; endHour: hour }
const hourToDisplay = (hour: number | string) => `${hour < 10 ? "0" : ""}${hour}:00 PT`
const listOfHoursDisplay = listOfHours.filter(h => typeof h !== "string").map(hourToDisplay)

const Filter = (props: { setData: Function }) => {

  const { setData } = props

  return (
    <Box direction="row-responsive" fill="horizontal" justify="between" gap="small">
      <Box direction="row-responsive" justify="center" alignSelf="center" width="small">
        <Text weight="bold" size="large">Filter By:&nbsp;</Text>
      </Box>
      <Box direction="row-responsive" justify="center" align="center" round={true} background="background-front" pad="small">
        <Text size="small">Day:&nbsp;</Text>
        <Select
          size="small"
          placeholder="All"
          options={listOfDays}
          onChange={({ value }: { value: Array<day> }) => {
            if (value.length === 0) setData(SERVER_DATA)
            else
            setData(SERVER_DATA.filter(person => value.some(day => person[day].length !== 0)))
          }}
          multiple={true}
        />
      </Box>
      <Box direction="row-responsive" justify="center" align="center" round={true} background="background-front" pad="small">
        <Text size="small">Hour:&nbsp;</Text>
        <Select
          size="small"
          placeholder="All"
          options={listOfHoursDisplay}
          onChange={({ value }) => {
            const selectedHour = parseInt(value.slice(0, 2)) as hour
            const hasAvailable = ({ startHour, endHour }: range) =>
            startHour <= selectedHour && selectedHour <= endHour

            setData(
            SERVER_DATA.filter(person => listOfDays.some(day => person[day].some(hasAvailable)))
            )
          }}
        />
      </Box>
      <Box direction="row-responsive" justify="center" align="center" round={true} background="background-front" pad="small">
        <Text size="small">Programming Language:&nbsp;</Text>
        <Select
          size="small"
          placeholder="All"
          options={listOfProgrammingLanguages}
          onChange={({ value }: { value: Array<languages> }) => {
            if (value.length === 0) setData(SERVER_DATA)
            else
            setData(
              SERVER_DATA.filter(person =>
              value.some(language => person.programmingLanguages.includes(language))
              )
            )
          }}
          multiple={true}
        />
      </Box>
    </Box>
  )
}

export default Filter
