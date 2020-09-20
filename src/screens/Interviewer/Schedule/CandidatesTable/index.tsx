import React, { useState } from "react"

import { DataTable, Select, Box, Text } from "grommet"

import { day, hour } from "./../../../../general/values"

enum languages {
  "C" = "C",
  "C++" = "C++",
  "Python" = "Python",
  "Java" = "Java",
  "JavaScript" = "JavaScript",
  "Other" = "Other",
}

const listOfDays = Object.values(day)
const listOfHours = Object.values(hour)
const listOfProgrammingLanguages = Object.values(languages)

const hourToDisplay = (hour: number | string) => `${hour < 10 ? "0" : ""}${hour}:00 PT`
const listOfHoursDisplay = listOfHours.filter(h => typeof h !== "string").map(hourToDisplay)

type range = { startHour: hour; endHour: hour }
type ranges = { [key in day]: Array<range> }
type personData = ranges & { name: String; programmingLanguages: Array<languages> }

const SERVER_DATA: Array<personData> = [
  {
    name: "Manuel Calva",
    Monday: [],
    Tuesday: [{ startHour: hour.h9, endHour: hour.h20 }],
    Wednesday: [{ startHour: hour.h7, endHour: hour.h10 }],
    Thursday: [{ startHour: hour.h13, endHour: hour.h15 }],
    Friday: [],
    Saturday: [{ startHour: hour.h9, endHour: hour.h15 }],
    Sunday: [{ startHour: hour.h13, endHour: hour.h15 }],
    programmingLanguages: [languages["C"], languages["C++"], languages["Java"]],
  },
  {
    name: "Sergio Sanchez",
    Monday: [{ startHour: hour.h13, endHour: hour.h20 }],
    Tuesday: [{ startHour: hour.h13, endHour: hour.h15 }],
    Wednesday: [],
    Thursday: [{ startHour: hour.h13, endHour: hour.h15 }],
    Friday: [{ startHour: hour.h13, endHour: hour.h15 }],
    Saturday: [{ startHour: hour.h13, endHour: hour.h15 }],
    Sunday: [],
    programmingLanguages: [languages["C++"], languages["Python"], languages["JavaScript"]],
  },
  {
    name: "Roberto Reyes",
    Monday: [{ startHour: hour.h13, endHour: hour.h15 }],
    Tuesday: [{ startHour: hour.h13, endHour: hour.h15 }],
    Wednesday: [{ startHour: hour.h13, endHour: hour.h15 }],
    Thursday: [{ startHour: hour.h13, endHour: hour.h15 }],
    Friday: [{ startHour: hour.h13, endHour: hour.h15 }],
    Saturday: [],
    Sunday: [],
    programmingLanguages: [languages["Python"], languages["Other"], languages["JavaScript"]],
  },
  {
    name: "Hugo Duhart",
    Monday: [],
    Tuesday: [{ startHour: hour.h13, endHour: hour.h15 }],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [{ startHour: hour.h13, endHour: hour.h15 }],
    programmingLanguages: [languages["C"], languages["C++"], languages["Python"]],
  },
]

const Ranges: React.FC<{ ranges: Array<range> }> = ({ ranges }) => (
  <>
    {ranges.map(({ startHour, endHour }) => (
      <Box pad={{ vertical: "xsmall" }}>
        <Text size="10%">
          {hourToDisplay(startHour)} - {hourToDisplay(endHour)}
        </Text>
      </Box>
    ))}
  </>
)

const nameColumn: Array<any> = [
  {
    property: "name",
    header: "Name",
    primary: true,
    search: true,
    size: "small",
    render: (row: personData) => (
      <Box pad={{ vertical: "xsmall" }}>
        <Text>{row.name}</Text>
        <Text size="10%">{row.programmingLanguages.join(", ")}</Text>
      </Box>
    ),
  },
]

const otherColumns: Array<any> = listOfDays.map(day => ({
  property: day,
  header: day,
  render: (row: personData) => <Ranges ranges={row[day]} />,
}))

const columns = [...nameColumn, ...otherColumns]

const CandidatesTable: React.FC = () => {
  const [data, setData] = useState(SERVER_DATA)

  return (
    <>
      <Box direction="row-responsive" fill="horizontal" justify="between" gap="small">
        <Box direction="row-responsive" justify="center" align="center">
          <Text size="small">Day:&nbsp;</Text>
          <Select
            size="small"
            placeholder="Select one"
            options={listOfDays}
            onChange={({ value }: { value: Array<day> }) => {
              if (value.length === 0) setData(SERVER_DATA)
              else
                setData(SERVER_DATA.filter(person => value.some(day => person[day].length !== 0)))
            }}
            multiple={true}
          />
        </Box>
        <Box direction="row-responsive" justify="center" align="center">
          <Text size="small">Hour:&nbsp;</Text>
          <Select
            size="small"
            placeholder="Select one"
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
        <Box direction="row-responsive" justify="center" align="center">
          <Text size="small">Programming Language:&nbsp;</Text>
          <Select
            size="small"
            placeholder="Select one"
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
      <DataTable sortable={true} size="large" columns={columns} data={data} />
    </>
  )
}

export default CandidatesTable
