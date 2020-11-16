import React, { useState } from "react"

import { Layer, Box, Heading, Select, Button } from "grommet"

import { day, hour } from "utils/constants/values"

type range = { startHour: hour; endHour: hour }
type interviewData = { uid: String; interviewDay: day; interviewHour: hour }

const defaultInterviewData: interviewData = {
  uid: "",
  interviewDay: day.Monday,
  interviewHour: hour.h0,
}

const hourToDisplay = (hour: number | string) =>
  `${hour < 10 ? "0" : ""}${hour}:00 PT`

const availableHoursToDisplay = (availableHours: Array<range>) => {
  const newHours: string[] = []
  availableHours.forEach((oneRange: range) => {
    for (let i = oneRange.startHour; i <= oneRange.endHour; i++) {
      newHours.push(hourToDisplay(i))
    }
  })
  return newHours
}

const updateHour = (
  pastInterviewData: interviewData,
  newStartingHour: hour
) => {
  const newInterviewData = JSON.parse(
    JSON.stringify(pastInterviewData)
  ) as interviewData
  newInterviewData.interviewHour = newStartingHour
  return newInterviewData
}

const ModalConfirm = (props: {
  setShowConfirm: Function
  setNewInterviewData: Function
  pastInterviewData: interviewData
  availableHours: Array<range>
  createInterview: Function
}) => {
  const {
    setShowConfirm,
    setNewInterviewData,
    pastInterviewData,
    availableHours,
    createInterview,
  } = props
  const [newData, setNewData] = useState<interviewData>(defaultInterviewData)

  return (
    <Layer
      onEsc={() => {
        setShowConfirm(false)
      }}
      onClickOutside={() => {
        setShowConfirm(false)
      }}
    >
      <Box
        width="medium"
        gap="medium"
        background="background-contrast"
        pad="medium"
      >
        <Heading textAlign="center" level={4}>
          Confirmation
        </Heading>
        <Select
          size="small"
          placeholder="Select one"
          options={availableHoursToDisplay(availableHours)}
          onChange={({ value }) => {
            const newStartingHour = parseInt(value.slice(0, 2)) as hour
            setNewData(updateHour(pastInterviewData, newStartingHour))
            setNewInterviewData(newData)
          }}
        />
        <Button
          label="Ok"
          size="small"
          margin="medium"
          type="submit"
          onClick={() => {
            createInterview(
              newData.uid,
              newData.interviewDay,
              newData.interviewHour
            )
            setShowConfirm(false)
          }}
        />
      </Box>
    </Layer>
  )
}

export default ModalConfirm
