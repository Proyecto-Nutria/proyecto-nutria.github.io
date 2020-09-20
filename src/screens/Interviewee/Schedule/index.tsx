import React, { useState } from "react"

import { Grid, Box, Select, Button } from "grommet"
import { FormSubtract, Add } from "grommet-icons"
import { day, hour } from "../../../general/values"

const listOfDays = Object.values(day)
const listOfHours = Object.values(hour)

const hourToDisplay = (hour: number | string) => `${hour < 10 ? "0" : ""}${hour}:00 PT`
const listOfHoursDisplay = listOfHours.filter(h => typeof h !== "string").map(hourToDisplay)

type range = { startHour: hour; endHour: hour }
type ranges = Record<day, Array<range>>

const defaultRange: ranges = {
  [day.Monday]: [],
  [day.Tuesday]: [{ startHour: hour.h13, endHour: hour.h15 }],
  [day.Wednesday]: [],
  [day.Thursday]: [],
  [day.Friday]: [],
  [day.Saturday]: [],
  [day.Sunday]: [],
}

const Schedule = () => {
  const [rol, setRolValue] = useState("")
  const [company, setCompanyValue] = useState("")
  const [typeInterview, setTypeInterviewValue] = useState("")

  const [rangesOfTime, setRangesOfTime] = useState<ranges>(defaultRange)

  return (
    <Grid gap="medium" margin="xlarge">
      <Box>
        Rol:
        <Select
          placeholder="Select one"
          options={["Explorer/STEP", "Internship", "FullTime"]}
          value={rol}
          onChange={({ option }) => setRolValue(option)}
        />
      </Box>
      <Box>
        Company:
        <Select
          placeholder="Select one"
          options={[
            "Amazon",
            "Apple",
            "Facebook",
            "Google",
            "Microsoft",
            "Netflix",
            "Twitter",
            "Other",
          ]}
          value={company}
          onChange={({ option }) => setCompanyValue(option)}
        />
      </Box>
      <Box>
        Type of interview:
        <Select
          placeholder="Select one"
          options={[
            "Algorithms/Data Structures",
            "Data science",
            "Machine Learning",
            "Desing (POO)",
          ]}
          value={typeInterview}
          onChange={({ option }) => setTypeInterviewValue(option)}
        />
      </Box>

      <h2>When?</h2>
      <Box direction="column-reverse" gap="xsmall">
        {Object.entries(rangesOfTime).map(([dayName, currentRanges]) => {
          const currentDay = day[dayName as keyof typeof day]

          return currentRanges.map(({ startHour, endHour }, index) => (
            <Box
              key={index}
              direction="row-responsive"
              flex={true}
              justify="center"
              align="center"
              alignContent="center"
            >
              <Box width="xxsmall" align="center">
                On
              </Box>
              <Box width="small">
                <Select
                  size="small"
                  placeholder="Select one"
                  options={listOfDays}
                  value={currentDay.toString()}
                  onChange={event => {
                    const newDay = event.option as day
                    setRangesOfTime(ranges => {
                      const newRanges = JSON.parse(JSON.stringify(ranges)) as ranges
                      newRanges[newDay].push({ startHour, endHour })
                      newRanges[currentDay].splice(index, 1)
                      return newRanges
                    })
                  }}
                />
              </Box>
              <Box width="xsmall" align="center">
                from
              </Box>
              <Box width="small">
                <Select
                  size="small"
                  placeholder="Select one"
                  options={listOfHoursDisplay}
                  value={hourToDisplay(startHour)}
                  onChange={event => {
                    const newStartingHour = parseInt(event.option.slice(0, 2)) as hour
                    setRangesOfTime(ranges => {
                      const newRanges = JSON.parse(JSON.stringify(ranges)) as ranges
                      newRanges[currentDay].push({ startHour: newStartingHour, endHour })
                      newRanges[currentDay].splice(index, 1)
                      return newRanges
                    })
                  }}
                />
              </Box>
              <Box width="xxsmall" align="center">
                to
              </Box>
              <Box width="small">
                <Select
                  size="small"
                  placeholder="Select one"
                  options={listOfHoursDisplay}
                  value={hourToDisplay(endHour)}
                  onChange={event => {
                    const newEndHour = parseInt(event.option.slice(0, 2)) as hour
                    setRangesOfTime(ranges => {
                      const newRanges = JSON.parse(JSON.stringify(ranges)) as ranges
                      newRanges[currentDay].push({ startHour, endHour: newEndHour })
                      newRanges[currentDay].splice(index, 1)
                      return newRanges
                    })
                  }}
                />
              </Box>
              <Box
                width="xxxsmall"
                round="full"
                overflow="hidden"
                background="#DC3123"
                align="center"
              >
                <Button icon={<FormSubtract />} hoverIndicator onClick={() => {
                  setRangesOfTime(ranges => {
                    const newRanges = JSON.parse(JSON.stringify(ranges)) as ranges
                    newRanges[currentDay].splice(index, 1)
                    return newRanges
                  })
                }} />
              </Box>
            </Box>
          ))
        })}
      </Box>
      <Box round="full" overflow="hidden" background="neutral-1" width="xxsmall" height="xxsmall">
        <Button icon={<Add />} hoverIndicator onClick={() => {
          setRangesOfTime(ranges => {
            const newRanges = JSON.parse(JSON.stringify(ranges)) as ranges
            newRanges["Monday"].push({ startHour: hour.h13, endHour: hour.h15 })
            return newRanges
          })
        }}  />
      </Box>
      <h2>How often?</h2>
      <Box>
        <Button label="Schedule Mock" onClick={() => {}} size="large" primary />
      </Box>
    </Grid>
  )
}

export default Schedule