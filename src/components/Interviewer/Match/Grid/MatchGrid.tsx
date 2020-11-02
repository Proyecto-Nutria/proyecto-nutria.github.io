import React from "react"
import { Grid, Box, Text } from "grommet"

import ModalConfirm from "components/Interviewer/Match/ModalConfirm"
import ModalAbout from "components/Interviewer/Match/ModalAbout"
import CandidatesTable from "components/Interviewer/Match/CandidateTable/CandidateTable"
import Filter from "components/Interviewer/Match/Filter"
import styles from "components/Interviewer/Match/Grid/schedule.module.css"

const MatchGrid = (props: any) => (
  <Grid gap="medium" margin="xlarge">
    <Filter setData={(filterData: any) => props.data.setData(filterData)} />
    <Box direction="row-responsive" fill="horizontal" justify="start" gap="small">
      <Box direction="row-responsive" justify="start" alignSelf="start" width="medium" gap="small">
        <Box className={`${styles.box1} ${styles.stripe}`}></Box>
        <Text weight="bold" size="medium">
          &nbsp;Interview scheduled
        </Text>
      </Box>
      <Box direction="row-responsive" justify="start" alignSelf="start" width="medium" gap="small">
        <Box className={styles.box2} border={{ color: "brand", size: "small" }}></Box>
        <Text weight="bold" size="medium">
          &nbsp;Has Real Interview
        </Text>
      </Box>
    </Box>
    <CandidatesTable
      data={props.data.data}
      setQueryAbout={(newQueryAbout: any) => props.data.setQueryAbout(newQueryAbout)}
      setShowAbout={(newShowAbout: Boolean) => props.data.setShowAbout(newShowAbout)}
      setAvailableHours={(newAvailableHours: any) =>
        props.data.setAvailableHours(newAvailableHours)
      }
      setNewInterviewData={(updatedInterviewData: any) =>
        props.data.setNewInterviewData(updatedInterviewData)
      }
      setShowConfirm={(newShowConfirm: Boolean) => props.data.setShowConfirm(newShowConfirm)}
    />
    {props.data.showAbout && (
      <ModalAbout
        setShowAbout={(newShowAbout: Boolean) => props.data.setShowAbout(newShowAbout)}
        queryAbout={props.data.queryAbout}
      />
    )}
    {props.data.showConfirm && (
      <ModalConfirm
        setShowConfirm={(newShowConfirm: Boolean) => props.data.setShowConfirm(newShowConfirm)}
        setNewInterviewData={(updatedInterviewData: any) =>
          props.data.setNewInterviewData(updatedInterviewData)
        }
        pastInterviewData={props.data.newInterviewData}
        availableHours={props.data.availableHours}
      />
    )}
  </Grid>
)

export default MatchGrid
