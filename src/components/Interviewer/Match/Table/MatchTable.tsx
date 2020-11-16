import React from "react"

import { DataTable } from "grommet"

import type { personData } from "structure/types/dataTypes"
import HourColumn from "components/Interviewer/Match/Table/MatchTableDayHourColumn"
import PersonColumn from "components/Interviewer/Match/Table/MatchTablePersonColumn"

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
    setShowAbout,
    setAvailableHours,
    setNewInterviewData,
    setShowConfirm,
  } = props

  const dayHourColumn: Array<any> = HourColumn(
    setNewInterviewData,
    setAvailableHours,
    setShowConfirm
  )

  const personColumn = PersonColumn(setShowAbout)

  return (
    <DataTable
      primaryKey={false}
      sortable={true}
      size="large"
      data={data}
      columns={[personColumn, ...dayHourColumn]}
    />
  )
}

export default MatchTable
