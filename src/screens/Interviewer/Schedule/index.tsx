import React, { useState } from "react"

import { Grid, Box, Text } from "grommet"

import Filter from "./Filter"
import ModalConfirm from "./ModalConfirm"
import ModalAbout from "./ModalAbout"
import CandidatesTable from "./CandidatesTable"

import styles from "./schedule.module.css"

import { day, hour, languages } from "./../../../general/values"
/* import { QueryManager } from "@apollo/client/core/QueryManager" */

import SERVER_DATA from "./server_data"

type range = { startHour: hour; endHour: hour }
type ranges = { [key in day]: Array<range> }
type personData = ranges & { uid: String; name: String; programmingLanguages: Array<languages>; hasRealInterview: Boolean; hasInterviews: Array<Boolean> }
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

const Schedule = () => {
  const [data, setData] = useState<Array<personData>>(SERVER_DATA)
  const [queryAbout, setQueryAbout] = useState<queryData>(defaultQueryData)
  const [showAbout, setShowAbout] = useState<Boolean>(false)
  const [availableHours, setAvailableHours] = useState<Array<range>>(defaultRanges)
  const [newInterviewData, setNewInterviewData] = useState<interviewData>(defaultInterviewData)
  const [showConfirm, setShowConfirm] = useState<Boolean>(false)

  return (
    <Grid gap="medium" margin="xlarge">
      <Filter setData={(filterData: Array<personData>) => setData(filterData)} />
      <Box direction="row-responsive" fill="horizontal" justify="start" gap="small">
        <Box direction="row-responsive" justify="start" alignSelf="start" width="medium" gap="small">
          <Box className={`${styles.box1} ${styles.stripe}`} ></Box>
          <Text weight="bold" size="medium">&nbsp;Interview scheduled</Text>
        </Box>
        <Box direction="row-responsive" justify="start" alignSelf="start" width="medium" gap="small">
          <Box className={styles.box2} border={{ color: 'brand', size: 'small' }} ></Box>
          <Text weight="bold" size="medium">&nbsp;Has Real Interview</Text>
        </Box>
      </Box>
      <CandidatesTable 
        data={data}
        setQueryAbout={(newQueryAbout: queryData) => setQueryAbout(newQueryAbout)}
        setShowAbout={(newShowAbout: Boolean) => setShowAbout(newShowAbout)} 
        setAvailableHours={(newAvailableHours: Array<range>) => setAvailableHours(newAvailableHours)} 
        setNewInterviewData={(updatedInterviewData: interviewData) => setNewInterviewData(updatedInterviewData)} 
        setShowConfirm={(newShowConfirm: Boolean) => setShowConfirm(newShowConfirm)} 
      />
      { 
        showAbout && (
          <ModalAbout 
            setShowAbout={(newShowAbout: Boolean) => setShowAbout(newShowAbout)} 
            queryAbout={queryAbout}
          />
        )}
      { 
        showConfirm && (
          <ModalConfirm 
            setShowConfirm={(newShowConfirm: Boolean) => setShowConfirm(newShowConfirm)} 
            setNewInterviewData={(updatedInterviewData: interviewData) => setNewInterviewData(updatedInterviewData)}
            pastInterviewData={newInterviewData}
            availableHours={availableHours}
          />
        )}
    </Grid>
  )
}

export default Schedule
