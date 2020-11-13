import React from "react"

import type { interviewData, personData } from "structure/types/dataTypes"
import DateTime from "utils/helpers/DateTime"

import { DataTable, Box, Text, Button } from "grommet"

// TODO
import QUERY_DATA from "../Table/query_data"

const makeQuery = (key: string) => {
  return QUERY_DATA[parseInt(key, 10) - 1]
}

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

  const otherColumns: Array<any> = DateTime.getDaysOfWeek().map(day => ({
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
            {row[day].map(({ startHour, endHour }) => (
              <Box pad={{ vertical: "xxsmall" }} key={startHour}>
                <Text size="50%">
                  {startHour} - {endHour}
                </Text>
              </Box>
            ))}
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
      columns={[
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
                onClick={_ => {
                  setQueryAbout(makeQuery(row.uid.toString()))
                  setShowAbout(true)
                }}
              >
                <Box
                  pad={{ vertical: "xsmall" }}
                  alignSelf="center"
                  margin="small"
                >
                  <Text>{row.name}</Text>
                  <Text size="50%">{row.programmingLanguages.join(", ")}</Text>
                </Box>
              </Button>
            </Box>
          ),
        },
        ...otherColumns,
      ]}
      data={data}
    />
  )
}

export default MatchTable
