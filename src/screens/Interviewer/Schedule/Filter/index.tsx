import React from "react"

import { Box, Select, Text } from "grommet"

import { day, hour } from "./../../../../general/values"

const listOfDays = Object.values(day)
const listOfHours = Object.values(hour)
const listOfProgrammingLanguages = ["C", "C++", "Python", "Java", "JavaScript", "Other"]

const hourToDisplay = (hour: number | string) => `${hour < 10 ? "0" : ""}${hour}:00 PT`
const listOfHoursDisplay = listOfHours.filter(h => typeof h !== "string").map(hourToDisplay)

const Filter = () => {
  return (
    <>
    <h2>Filter By:</h2>
      <Box direction="row-responsive" fill="horizontal" justify="between" gap="small">
          <Box direction="row-responsive" justify="center" align="center">
            <Text size="small">Day:&nbsp;</Text>
            <Select
              size="small"
              placeholder="Select one"
              options={listOfDays}
              onChange={event => {}}
              multiple={true}
            />
          </Box>
          <Box direction="row-responsive" justify="center" align="center">
            <Text size="small">Hour:&nbsp;</Text>
            <Select
              size="small"
              placeholder="Select one"
              options={listOfHoursDisplay}
              onChange={event => {}}
              multiple={true}
            />
          </Box>
          <Box direction="row-responsive" justify="center" align="center">
            <Text size="small">Programming Language:&nbsp;</Text>
            <Select
              size="small"
              placeholder="Select one"
              options={listOfProgrammingLanguages}
              onChange={event => {}}
              multiple={true}
            />
          </Box>
      </Box>
    </>
  )
}

export default Filter
