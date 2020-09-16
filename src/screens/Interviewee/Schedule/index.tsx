import React from "react"

import { Grid, Box, Select, Button } from "grommet"
import { FormSubtract } from "grommet-icons"

type hour =
  | "00:00 PT"
  | "01:00 PT"
  | "02:00 PT"
  | "03:00 PT"
  | "04:00 PT"
  | "05:00 PT"
  | "06:00 PT"
  | "07:00 PT"
  | "08:00 PT"

const hours = [
  "00:00 PT",
  "01:00 PT",
  "02:00 PT",
  "03:00 PT",
  "04:00 PT",
  "05:00 PT",
  "06:00 PT",
  "07:00 PT",
  "08:00 PT",
]

type day = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday"
type range = { startHour: hour; endHour: hour }
type ranges = Record<day, Array<range>>

const Schedule = () => {
  const [rol, setRolValue] = React.useState("")
  const [company, setCompanyValue] = React.useState("")
  const [typeInterview, setTypeInterviewValue] = React.useState("")

  const [rangesOfTime, setRangesOfTime] = React.useState<ranges>({
    Monday: [],
    Tuesday: [{ startHour: "03:00 PT", endHour: "04:00 PT" }],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
  })

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
      <Box direction="column">
        {Object.entries(rangesOfTime).map(entry => {
          const day = entry[0] as day
          const currentRanges = entry[1] as Array<range>

          return currentRanges.map(({ startHour, endHour }, index) => (
            <Box
              key={day + startHour}
              direction="row-responsive"
              flex={true}
              justify="center"
              alignContent="center"
            >
              <Box width="xxsmall" background="green" align="center">
                On
              </Box>
              <Box width="small" background="pink">
                <Select
                  size="small"
                  placeholder="Select one"
                  options={[
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ]}
                  value={day}
                  onChange={event => {
                    const newDay = event.option as day
                    setRangesOfTime(ranges => {
                      const newRanges = JSON.parse(JSON.stringify(ranges)) as ranges
                      newRanges[newDay].push({ startHour, endHour })
                      newRanges[day].splice(index, 1)
                      return newRanges
                    })
                  }}
                />
              </Box>
              <Box width="xxsmall" background="green">
                from
              </Box>
              <Box width="small" background="pink">
                <Select size="small" placeholder="Select one" options={hours} value={startHour}
                onChange={event => {
                  const newStartingHour = event.option as hour
                  setRangesOfTime(ranges => {
                    const newRanges = JSON.parse(JSON.stringify(ranges)) as ranges
                    newRanges[day].push({ startHour: newStartingHour, endHour })
                    newRanges[day].splice(index, 1)
                    return newRanges
                  })
                }}
                />
              </Box>
              <Box width="xxsmall" background="green">
                to
              </Box>
              <Box width="small" background="pink">
                <Select size="small" placeholder="Select one" options={hours} value={endHour} />
              </Box>
              <Box
                width="xxxsmall"
                round="full"
                overflow="hidden"
                background="#DC3123"
                align="center"
              >
                <Button icon={<FormSubtract />} hoverIndicator onClick={() => {}} />
              </Box>
            </Box>
          ))
        })}
      </Box>

      <Box>
        <Button label="AGREGA OTRO" onClick={() => {}} size="large" primary />
      </Box>
      <Box>
        <Button label="Schedule Mock" onClick={() => {}} size="large" primary />
      </Box>
    </Grid>
  )
}

export default Schedule
