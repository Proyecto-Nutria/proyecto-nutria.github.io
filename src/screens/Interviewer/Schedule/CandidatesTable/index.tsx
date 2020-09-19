import React, { useState } from "react"

import { DataTable, Select, Box, Text } from 'grommet'

import { day, hour } from "./../../../../general/values"

const listOfDays = Object.values(day)
const listOfHours = Object.values(hour)
const listOfProgrammingLanguages = ["C", "C++", "Python", "Java", "JavaScript", "Other"]

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

const columns = [
  {
    property: 'Name',
    header: 'Name',
    primary: true,
    search: true,
    size: 'small',
  },
  {
    property: 'Monday',
    header: 'Monday',
    render: (datum: any) => (
      <Box pad={{ vertical: 'xsmall' }}>
        {datum.Monday ? 
          <>
          <Text>{datum.Monday.range.startHour}</Text>
          <Text>{datum.Monday.range.endHour}</Text>
          </>
          :
          <></>
        }
      </Box>
    ),
  },
  {
    property: 'Tuesday',
    header: 'Tuesday',
    render: (datum: any) => (
      <Box pad={{ vertical: 'xsmall' }}>
        {datum.Tuesday ? 
          <>
          <Text>{datum.Tuesday.range.startHour}</Text>
          <Text>{datum.Tuesday.range.endHour}</Text>
          </>
          :
          <></>
        }
      </Box>
    ),
  },
  {
    property: 'Wednesday',
    header: 'Wednesday',
    render: (datum: any) => (
      <Box pad={{ vertical: 'xsmall' }}>
        {datum.Wednesday ? 
          <>
          <Text>{datum.Wednesday.range.startHour}</Text>
          <Text>{datum.Wednesday.range.endHour}</Text>
          </>
          :
          <></>
        }
      </Box>
    ),
  },
  {
    property: 'Thursday',
    header: 'Thursday',
    render: (datum: any) => (
      <Box pad={{ vertical: 'xsmall' }}>
        {datum.Thursday ? 
          <>
          <Text>{datum.Thursday.range.startHour}</Text>
          <Text>{datum.Thursday.range.endHour}</Text>
          </>
          :
          <></>
        }
      </Box>
    ),
  },
  {
    property: 'Friday',
    header: 'Friday',
    render: (datum: any) => (
      <Box pad={{ vertical: 'xsmall' }}>
        {datum.Friday ? 
          <>
          <Text>{datum.Friday.range.startHour}</Text>
          <Text>{datum.Friday.range.endHour}</Text>
          </>
          :
          <></>
        }
      </Box>
    ),
  },
  {
    property: 'Saturday',
    header: 'Saturday',
    render: (datum: any) => (
      <Box pad={{ vertical: 'xsmall' }}>
        {datum.Saturday ? 
          <>
          <Text>{datum.Saturday.range.startHour}</Text>
          <Text>{datum.Saturday.range.endHour}</Text>
          </>
          :
          <></>
        }
      </Box>
    ),
  },
  {
    property: 'Sunday',
    header: 'Sunday',
    render: (datum: any) => (
      <Box pad={{ vertical: 'xsmall' }}>
        {datum.Sunday ? 
          <>
          <Text>{datum.Sunday.range.startHour}</Text>
          <Text>{datum.Sunday.range.endHour}</Text>
          </>
          :
          <></>
        }
      </Box>
    ),
  },
];
const DATA = [
  {
    Name: 'Manuel Calva',
    Monday: null,
    Tuesday: {day: day.Tuesday, range: { startHour: hour.h13, endHour: hour.h15 }},
    Wednesday: {day: day.Wednesday, range: { startHour: hour.h13, endHour: hour.h15 }},
    Thursday: {day: day.Thursday, range: { startHour: hour.h13, endHour: hour.h15 }},
    Friday: null,
    Saturday: {day: day.Saturday, range: { startHour: hour.h13, endHour: hour.h15 }},
    Sunday: {day: day.Sunday, range: { startHour: hour.h13, endHour: hour.h15 }},
    ProgrammingLanguages: ["C", "C++", "Java"]
  },
  {
    Name: 'Sergio Sanchez',
    Monday: {day: day.Tuesday, range: { startHour: hour.h13, endHour: hour.h15 }},
    Tuesday: {day: day.Tuesday, range: { startHour: hour.h13, endHour: hour.h15 }},
    Wednesday: null,
    Thursday: {day: day.Thursday, range: { startHour: hour.h13, endHour: hour.h15 }},
    Friday: {day: day.Friday, range: { startHour: hour.h13, endHour: hour.h15 }},
    Saturday: {day: day.Saturday, range: { startHour: hour.h13, endHour: hour.h15 }},
    Sunday: null,
    ProgrammingLanguages: ["C", "C++", "Python", "JavaScript"],
  },
  {
    Name: 'Roberto Reyes',
    Monday: null,
    Tuesday: {day: day.Tuesday, range: { startHour: hour.h13, endHour: hour.h15 }},
    Wednesday: {day: day.Wednesday, range: { startHour: hour.h13, endHour: hour.h15 }},
    Thursday: {day: day.Thursday, range: { startHour: hour.h13, endHour: hour.h15 }},
    Friday: {day: day.Friday, range: { startHour: hour.h13, endHour: hour.h15 }},
    Saturday: null,
    Sunday: null,
    ProgrammingLanguages: ["Python", "JavaScript", "Other"],
  },
  {
    Name: 'Hugo Duhart',
    Monday: null,
    Tuesday: {day: day.Tuesday, range: { startHour: hour.h13, endHour: hour.h15 }},
    Wednesday: null,
    Thursday: null,
    Friday: null,
    Saturday: null,
    Sunday: {day: day.Sunday, range: { startHour: hour.h13, endHour: hour.h15 }},
    ProgrammingLanguages: ["C", "C++", "Python"],
  },
];

const CandidatesTable = () => {
  const [data, setData] = useState(DATA)

  return (
    <>
    <Box direction="row-responsive" fill="horizontal" justify="between" gap="small">
          <Box direction="row-responsive" justify="center" align="center">
            <Text size="small">Day:&nbsp;</Text>
            <Select
              size="small"
              placeholder="Select one"
              options={listOfDays}
              onChange={({ value }) => {
                if(value.length === 0){
                  setData(DATA);
                }else{
                  const auxData = new Set();
                  // @ts-ignore
                  value.forEach((selectedDay: string) => {
                    DATA.forEach(row => {
                      if (!auxData.has(row)) {
                        switch (selectedDay) {
                          case day.Monday:
                            if (row.Monday){
                              auxData.add(row);
                            }
                            break;
                          case day.Tuesday:
                            if (row.Tuesday){
                              auxData.add(row);
                            }
                            break;
                          case day.Thursday:
                            if (row.Thursday){
                              auxData.add(row);
                            }
                            break;
                          case day.Wednesday:
                            if (row.Wednesday){
                              auxData.add(row);
                            }
                            break;
                          case day.Friday:
                            if (row.Friday){
                              auxData.add(row);
                            }
                            break;
                          case day.Saturday:
                            if (row.Saturday){
                              auxData.add(row);
                            }
                            break;
                          case day.Sunday:
                            if (row.Sunday){
                              auxData.add(row);
                            }
                            break;
                        
                          default:
                            break;
                        }
                      }
                    })
                  })
                  // @ts-ignore
                  setData([...auxData])
                }
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
                const formattedHour = parseInt(value.slice(0, 2)) as hour
                setData(DATA.filter(row => 
                  {
                    if (row.Monday && 
                      ( row.Monday.range.startHour <= formattedHour &&
                        formattedHour <= row.Monday.range.endHour )
                    ) {
                      return true;
                    } else if (row.Tuesday && 
                      ( row.Tuesday.range.startHour <= formattedHour &&
                        formattedHour <= row.Tuesday.range.endHour )
                    ) {
                      return true;
                    } else if (row.Wednesday && 
                      ( row.Wednesday.range.startHour <= formattedHour &&
                        formattedHour <= row.Wednesday.range.endHour )
                    ) {
                      return true;
                    } else if (row.Thursday && 
                      ( row.Thursday.range.startHour <= formattedHour &&
                        formattedHour <= row.Thursday.range.endHour )
                    ) {
                      return true;
                    } else if (row.Friday && 
                      ( row.Friday.range.startHour <= formattedHour &&
                        formattedHour <= row.Friday.range.endHour )
                    ) {
                      return true;
                    } else if (row.Saturday && 
                      ( row.Saturday.range.startHour <= formattedHour &&
                        formattedHour <= row.Saturday.range.endHour )
                    ) {
                      return true;
                    } else if (row.Sunday && 
                      ( row.Sunday.range.startHour <= formattedHour &&
                        formattedHour <= row.Sunday.range.endHour )
                    ) {
                      return true;
                    } else {
                      return false;
                    }
                  }
                ))
              }}
            />
          </Box>
          <Box direction="row-responsive" justify="center" align="center">
            <Text size="small">Programming Language:&nbsp;</Text>
            <Select
              size="small"
              placeholder="Select one"
              options={listOfProgrammingLanguages}
              onChange={({ value }) => {
                if(value.length === 0){
                  setData(DATA);
                }else{
                  setData(DATA.filter(row => 
                    value.filter((key: string) => row.ProgrammingLanguages.includes(key)).length !== 0
                  ))
                }
              }}
              multiple={true}
            />
          </Box>
      </Box>
      <DataTable 
        sortable={true} 
        size='large' 
        columns={columns} 
        data={data} 
      />
    </>
  )
}

export default CandidatesTable
