import React from "react"

import styles from "components/Interviewee/Board/board.module.css"

import { Grid, Box } from "grommet"
import { signOutWithGoogle } from "../../utils/wrappers/firebaseWrapper"
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
        <Box
          background="brand"
          className={styles.bigSectionButton}
          onClick={() => history.push("/intervieweeDetails")}
        >
          Interviewee Profile
        </Box>
        <Box background="brand" className={styles.bigSectionButton}>
          Endpoint
        </Box>
        <Box
          background="brand"
          className={styles.bigSectionButton}
          onClick={() => {
            signOutWithGoogle()
            history.push("/login")
          }}
        >
          Log Out
        </Box>
      </Grid>
    </>
  )
}

export default Main
