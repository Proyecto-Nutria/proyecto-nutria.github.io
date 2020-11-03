import React from "react"

import { Grid, Box, Select, Button } from "grommet"
import { /*FormSubtract,*/ Add } from "grommet-icons"

const IntervieweeSchedule = (props: any) => (
  <Grid gap="medium" margin="xlarge">
    <Box>
      Rol:
      <Select
        placeholder="Select one"
        options={["Explorer/STEP", "Internship", "FullTime"]}
        value={props.data.rol}
        onChange={({ option }) => props.data.setRolValue(option)}
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
        value={props.data.company}
        onChange={({ option }) => props.data.setCompanyValue(option)}
      />
    </Box>
    <Box>
      Type of interview:
      <Select
        placeholder="Select one"
        options={["Algorithms/Data Structures", "Data science", "Machine Learning", "Desing (POO)"]}
        value={props.data.typeInterview}
        onChange={({ option }) => props.data.setTypeInterviewValue(option)}
      />
    </Box>

    <h2>When?</h2>
    <Box direction="column-reverse" gap="xsmall">
      {Object.entries(props.data.rangesOfTime).map(([dayName, currentRanges]) => {
        return {}
        // TODO: Refactor the props to send the type of the data
        /*
        const currentDay = props.day[dayName as keyof typeof props.data.day]
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
                options={props.data.listOfDays}
                value={currentDay.toString()}
                onChange={event => {
                  const newDay = event.option
                  props.setRangesOfTime((ranges: any) => {
                    const newRanges = JSON.parse(JSON.stringify(ranges))
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
                options={props.data.listOfHoursDisplay}
                value={props.data.hourToDisplay(startHour)}
                onChange={event => {
                  const newStartingHour = parseInt(event.option.slice(0, 2))
                  props.data.setRangesOfTime((ranges: any) => {
                    const newRanges = JSON.parse(JSON.stringify(ranges))
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
                options={props.data.listOfHoursDisplay}
                value={props.data.hourToDisplay(endHour)}
                onChange={event => {
                  const newEndHour = parseInt(event.option.slice(0, 2))
                  props.data.setRangesOfTime((ranges: any) => {
                    const newRanges = JSON.parse(JSON.stringify(ranges))
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
              <Button
                icon={<FormSubtract />}
                hoverIndicator
                onClick={() => {
                  props.data.setRangesOfTime((ranges: any) => {
                    const newRanges = JSON.parse(JSON.stringify(ranges))
                    newRanges[currentDay].splice(index, 1)
                    return newRanges
                  })
                }}
              />
            </Box>
          </Box>
        )) */
      })}
    </Box>
    <Box round="full" overflow="hidden" background="neutral-1" width="xxsmall" height="xxsmall">
      <Button
        icon={<Add />}
        hoverIndicator
        onClick={() => {
          props.data.setRangesOfTime((ranges: any) => {
            const newRanges = JSON.parse(JSON.stringify(ranges))
            newRanges["Monday"].push({
              startHour: props.data.hour.h13,
              endHour: props.data.hour.h15,
            })
            return newRanges
          })
        }}
      />
    </Box>
    <h2>How often?</h2>
    <Box>
      <Button label="Schedule Mock" onClick={() => {}} size="large" primary />
    </Box>
  </Grid>
)

export default IntervieweeSchedule
