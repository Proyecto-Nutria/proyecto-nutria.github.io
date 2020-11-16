import React from "react"

import { Box, Text, Button } from "grommet"

import type { personData } from "structure/types/dataTypes"
import DateTime from "utils/helpers/DateTime"

const MatchTableDayHourColumn = (
  setNewInterviewData: any,
  setAvailableHours: any,
  setShowConfirm: any
) => {
  return DateTime.getDaysOfWeek().map(day => ({
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
                )
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
}

export default MatchTableDayHourColumn
