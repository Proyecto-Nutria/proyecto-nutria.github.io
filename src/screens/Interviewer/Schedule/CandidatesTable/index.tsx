import React, { useState } from "react"

import { DataTable, Select, Box, Text, Button, Layer, Heading, Meter, Table, TableHeader, TableRow, TableCell, TableBody } from "grommet"

import { day, hour } from "./../../../../general/values"
import { QueryManager } from "@apollo/client/core/QueryManager"

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
const availableHoursToDisplay = (availableHours: Array<range>) => {
  const newHours: string[] = []
  availableHours.forEach((oneRange: range) => {
    for(let i = oneRange.startHour; i <= oneRange.endHour; i++){
      newHours.push(hourToDisplay(i))
    }
  })
  return newHours
}
const makeQuery = (key: string) => {
  return QUERY_DATA[parseInt(key,10)-1];
}
const listOfHoursDisplay = listOfHours.filter(h => typeof h !== "string").map(hourToDisplay)

type range = { startHour: hour; endHour: hour }
type ranges = { [key in day]: Array<range> }
type personData = ranges & { uid: String; name: String; programmingLanguages: Array<languages> }
type realInterviewData = { company: String; rol: String; date: String }
type queryData = { name: String; linkResume: String; programmingLanguages: Array<languages>; score: Number; position: String, realInterviews: Array<realInterviewData> }
type interviewData = { uid: String; interviewDay: day; interviewHour: hour }

const defaultRanges: Array<range> = [{ startHour: hour.h0, endHour: hour.h23 }]
const defaultQueryData: queryData = {
  name: "",
  linkResume: "",
  programmingLanguages: [],
  score: -1,
  position: "",
  realInterviews: [],
}
const defaultInterviewData: interviewData = { uid: "", interviewDay: day.Monday, interviewHour: hour.h0}

const SERVER_DATA: Array<personData> = [
  {
    uid: "1",
    name: "Manuel Calva",
    Monday: [],
    Tuesday: [{ startHour: hour.h9, endHour: hour.h10 }, { startHour: hour.h19, endHour: hour.h21 }],
    Wednesday: [{ startHour: hour.h7, endHour: hour.h10 }],
    Thursday: [{ startHour: hour.h13, endHour: hour.h15 }],
    Friday: [],
    Saturday: [{ startHour: hour.h9, endHour: hour.h15 }],
    Sunday: [{ startHour: hour.h13, endHour: hour.h15 }],
    programmingLanguages: [languages["C"], languages["C++"], languages["Java"]],
  },
  {
    uid: "2",
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
    uid: "3",
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
    uid: "4",
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

const QUERY_DATA: Array<queryData> = [
  {
    name: "Manuel Calva",
    linkResume: "https://www.google.com.mx/",
    programmingLanguages: [languages["C"], languages["C++"], languages["Java"]],
    score: 4,
    position: "Internship",
    realInterviews: [
      {
        company: "Twitter",
        rol: "Internship",
        date: "10/01/20",
      },
    ],
  },
  {
    name: "Sergio Sanchez",
    linkResume: "https://www.google.com.mx/",
    programmingLanguages: [languages["C++"], languages["Python"], languages["JavaScript"]],
    score: 4,
    position: "Internship",
    realInterviews: [
      {
        company: "Google",
        rol: "Internship",
        date: "09/30/20",
      },
      {
        company: "Amazon",
        rol: "Internship",
        date: "10/11/20",
      },
    ],
  },
  {
    name: "Roberto Reyes",
    linkResume: "https://www.google.com.mx/",
    programmingLanguages: [languages["Python"], languages["Other"], languages["JavaScript"]],
    score: 4,
    position: "Full-Time",
    realInterviews: [],
  },
  {
    name: "Hugo Duhart",
    linkResume: "https://www.google.com.mx/",
    programmingLanguages: [languages["C"], languages["C++"], languages["Python"]],
    score: 4,
    position: "Full-Time",
    realInterviews: [
      {
        company: "Indie",
        rol: "Full-Time",
        date: "12/01/20",
      },
    ],
  },
]

const Ranges: React.FC<{ ranges: Array<range> }> = ({ ranges }) => (
  <>
    {ranges.map(({ startHour, endHour }) => (
      <Box pad={{ vertical: "xxsmall" }}>
        <Text size="50%">
          {hourToDisplay(startHour)} - {hourToDisplay(endHour)}
        </Text>
      </Box>
    ))}
  </>
)

const CandidatesTable: React.FC = () => {
  const [data, setData] = useState(SERVER_DATA)
  const [queryAbout, setQueryAbout] = useState<queryData>(defaultQueryData)
  const [showAbout, setShowAbout] = useState()
  const [availableHours, setAvailableHours] = useState<Array<range>>(defaultRanges)
  const [newInterviewData, setNewInterviewData] = useState<interviewData>(defaultInterviewData)
  const [showConfirm, setShowConfirm] = useState()

  const nameColumn: Array<any> = [
    {
      property: "name",
      header: "Name",
      primary: true,
      search: true,
      size: "small",
      render: (row: personData) => (
        <Button 
          key={row.uid.toString()}
          primary
          size="small"
          fill
          onClick={event => {
            setQueryAbout(makeQuery(row.uid.toString()))
            // @ts-ignore
            setShowAbout(true)
          }} 
        >
          <Box pad={{ vertical: "xsmall" }} alignSelf="center" margin="small">
            <Text>{row.name}</Text>
            <Text size="50%">{row.programmingLanguages.join(", ")}</Text>
          </Box>
        </Button>
      ),
    },
  ]
  
  const otherColumns: Array<any> = listOfDays.map(day => ({
    property: day,
    header: day,
    render: (row: personData) => 
      row[day].length !== 0 ?
        <>
          <Button 
            key={row.uid.toString()}
            size="small"
            fill
            onClick={() => {
              // @ts-ignore
              setNewInterviewData(pastInterviewData => {
                const newInterviewData = JSON.parse(JSON.stringify(pastInterviewData)) as interviewData
                newInterviewData.interviewDay = day
                newInterviewData.uid = row.uid
                return newInterviewData
              })
              setAvailableHours(row[day])
              // @ts-ignore
              setShowConfirm(true)
            }} 
          >
            <Ranges ranges={row[day]} />
          </Button>
        </>
        :
        <></>
      ,
  }))
  
  const columns = [...nameColumn, ...otherColumns]

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
      { 
        showConfirm && (
          <Layer
            onEsc={() => {
              // @ts-ignore
              setShowConfirm(false)
            }}
            onClickOutside={() => {
              // @ts-ignore
              setShowConfirm(false)
            }}
          >
            <Box width="medium" gap="medium" background="background-contrast" pad="medium">
              <Heading textAlign="center" level={4} >Confirmation</Heading>
              <Select
                size="small"
                placeholder="Select one"
                options={availableHoursToDisplay(availableHours)}
                onChange={({ value }) => {
                  const newStartingHour = parseInt(value.slice(0, 2)) as hour
                  setNewInterviewData(pastInterviewData => {
                    const newInterviewData = JSON.parse(JSON.stringify(pastInterviewData)) as interviewData
                    newInterviewData.interviewHour = newStartingHour
                    return newInterviewData
                  })
                }}
              />
              <Button label="Ok" size="small" margin="medium" type="submit" onClick={() => {
                console.log(newInterviewData)
                console.log(typeof newInterviewData.interviewDay)
                console.log(newInterviewData.interviewDay)
                // @ts-ignore
                console.log(`New Interview Scheduled with ${newInterviewData.uid} at ${newInterviewData.interviewDay.toString()} ${newInterviewData.interviewHour}`)
                // @ts-ignore
                setShowConfirm(false)
              }} />
            </Box>
          </Layer>
        )}
      { 
        showAbout && (
          <Layer
            onEsc={() => {
              // @ts-ignore
              setShowAbout(false)
            }}
            onClickOutside={() => {
              // @ts-ignore
              setShowAbout(false)
            }}
          >
            <Box width="large" gap="medium" background="background-contrast" pad="medium">
              <Heading textAlign="center" level={4} >About {queryAbout.name.toString()}</Heading>
              <Box direction="row-responsive" fill="horizontal" justify="between" gap="small">
                <Box direction="row-responsive" justify="center" align="center">
                  <Button label="Resume" href={queryAbout.linkResume.toString()} target="_blank" size="small" primary />
                </Box>
                <Box direction="row-responsive" justify="center" align="center">
                  <Text size="small">Score:&nbsp;</Text>
                  <Meter
                    values={[{
                      value: parseInt(queryAbout.score.toString(),10),
                      label: queryAbout.score.toString(),
                    }]}
                    max={4}
                    aria-label="meter"
                  />
                </Box>
                <Box direction="row-responsive" justify="center" align="center">
                  <Text size="small">Position:&nbsp;{queryAbout.position.toString()}</Text>
                </Box>
              </Box>
              <Box pad={{ vertical: "xsmall" }} alignSelf="start" margin="small">
                <Text size="small">Programming Languages:&nbsp;{queryAbout.programmingLanguages.join(", ")}</Text>
              </Box>
              <Heading textAlign="start" level={4} >Real Interviews</Heading>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCell scope="col" border="bottom">
                      Company
                    </TableCell>
                    <TableCell scope="col" border="bottom">
                      Position
                    </TableCell>
                    <TableCell scope="col" border="bottom">
                      Date
                    </TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {queryAbout.realInterviews.map(realInterview => (
                    <TableRow>
                      <TableCell scope="row">
                        <strong>{realInterview.company}</strong>
                      </TableCell>
                      <TableCell>{realInterview.rol}</TableCell>
                      <TableCell>{realInterview.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Button label="Close" size="small" margin="medium" type="submit" onClick={() => {
                // @ts-ignore
                setShowAbout(false)
              }} />
            </Box>
          </Layer>
        )}
    </>
  )
}

export default CandidatesTable
