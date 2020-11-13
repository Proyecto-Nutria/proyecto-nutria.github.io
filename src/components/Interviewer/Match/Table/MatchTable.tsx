import React from "react"

import { DataTable, Box, Text, Button } from "grommet"

import { day, hour, languages } from "../../../../utils/constants/values"
/* import { QueryManager } from "@apollo/client/core/QueryManager" */

import QUERY_DATA from "../Table/query_data"

const listOfDays = Object.values(day)

const hourToDisplay = (hour: number | string) =>
  `${hour < 10 ? "0" : ""}${hour}:00 PT`
const makeQuery = (key: string) => {
  return QUERY_DATA[parseInt(key, 10) - 1]
}

type range = { startHour: hour; endHour: hour }
type ranges = { [key in day]: Array<range> }
type personData = ranges & {
  uid: String
  name: String
  programmingLanguages: Array<languages>
}
type interviewData = { uid: String; interviewDay: day; interviewHour: hour }

const Ranges: React.FC<{ ranges: Array<range> }> = ({ ranges }) => (
  <>
    {ranges.map(({ startHour, endHour }) => (
      <Box pad={{ vertical: "xxsmall" }} key={startHour}>
        <Text size="50%">
          {hourToDisplay(startHour)} - {hourToDisplay(endHour)}
        </Text>
      </Box>
    ))}
  </>
)

const MatchTable = (props: {
  data: Array<personData>
  setQueryAbout: Function
  setShowAbout: Function
  setAvailableHours: Function
  setNewInterviewData: Function
  setShowConfirm: Function
}) => {
  const {
    data,
    setQueryAbout,
    setShowAbout,
    setAvailableHours,
    setNewInterviewData,
    setShowConfirm,
  } = props

  const nameColumn: Array<any> = [
    {
      property: "name",
      header: (
        <Text weight="bold" size="large">
          Interviewee
        </Text>
      ),
      search: true,
      size: "small",
      render: (row: personData) => (
        <Box
          border={{
            color: "brand",
            size: "small",
          }}
          background="background-contrast"
          round={true}
          fill={true}
        >
          <Button
            key={row.uid.toString()}
            size="small"
            fill
            onClick={event => {
              setQueryAbout(makeQuery(row.uid.toString()))
              setShowAbout(true)
            }}
          >
            <Box pad={{ vertical: "xsmall" }} alignSelf="center" margin="small">
              <Text>{row.name}</Text>
              <Text size="50%">{row.programmingLanguages.join(", ")}</Text>
            </Box>
          </Button>
        </Box>
      ),
    },
  ]

  const otherColumns: Array<any> = listOfDays.map(day => ({
    property: day,
    header: <strong>{day}</strong>,
    align: "center",
    render: (row: personData) =>
      typeof row[day] != "undefined" ? (
        <Box
          border={{
            color: "brand",
            size: "small",
            style: "dashed",
          }}
          background="background-front"
          round={true}
        >
          <Button
            key={row.uid.toString()}
            size="small"
            fill
            onClick={() => {
              // @ts-ignore
              setNewInterviewData(pastInterviewData => {
                const newInterviewData = JSON.parse(
                  JSON.stringify(pastInterviewData)
                ) as interviewData
                newInterviewData.interviewDay = day
                newInterviewData.uid = row.uid
                return newInterviewData
              })
              setAvailableHours(row[day])
              setShowConfirm(true)
            }}
          >
            <Ranges ranges={row[day]} />
          </Button>
        </Box>
      ) : (
        <></>
      ),
  }))

  return (
    <DataTable
      primaryKey={false}
      sortable={true}
      size="large"
      columns={[...nameColumn, ...otherColumns]}
      data={data}
    />
  )
}

export default MatchTable
