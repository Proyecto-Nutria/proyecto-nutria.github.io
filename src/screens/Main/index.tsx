import React from "react"

import styles from "./main.module.css"

import { Grid, Box } from "grommet"
import { signOutWithGoogle } from "./../../firebase"
import { useHistory } from "react-router-dom"

const Main = () => {
  const history = useHistory()

  return (
    <>
      <Grid
        rows={["small", "small"]}
        align="stretch"
        justify="stretch"
        columns={["1fr", "1fr", "1fr"]}
        gap="medium"
      >
      <Box
        background="brand"
        className={styles.bigSectionButton}
        onClick={() => history.push("/scheduleInterviewee")}
      >
        Schedule a Mock Interview (Interviewee)
      </Box>
        <Box
          background="brand"
          className={styles.bigSectionButton}
          onClick={() => history.push("/scheduleInterviewer")}
        >
          Schedule a Mock Interview (Interviewer)
        </Box>
        <Box
          background="brand"
          className={styles.bigSectionButton}
          onClick={() => history.push("/interviewsInterviewee")}
        >
          Check my interviews history (Interviewee)
        </Box>
        <Box
          background="brand"
          className={styles.bigSectionButton}
          onClick={() => history.push("/interviewsInterviewer")}
        >
          Check my interviews history (Interviewer)
        </Box>
        <Box background="brand" className={styles.bigSectionButton}>
          Endpoint
        </Box>
        <Box background="brand" className={styles.bigSectionButton} onClick={signOutWithGoogle}>
          Log Out
        </Box>
      </Grid>
    </>
  )
}

export default Main
