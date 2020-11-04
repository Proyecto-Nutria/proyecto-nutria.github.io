import React from "react"

import { Grid, Box } from "grommet"
import styles from "components/Interviewee/Board/board.module.css"

const IntervieweeBoard = (props: any) => (
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
      onClick={() => props.history.push("/scheduleInterviewee")}
    >
      Schedule a Mock Interview (Interviewee)
    </Box>
    <Box
      background="brand"
      className={styles.bigSectionButton}
      onClick={() => props.history.push("/scheduleInterviewer")}
    >
      Schedule a Mock Interview (Interviewer)
    </Box>
    <Box
      background="brand"
      className={styles.bigSectionButton}
      onClick={() => props.history.push("/interviewsInterviewee")}
    >
      Check my interviews history (Interviewee)
    </Box>
    <Box
      background="brand"
      className={styles.bigSectionButton}
      onClick={() => props.history.push("/interviewsInterviewer")}
    >
      Check my interviews history (Interviewer)
    </Box>
    <Box
      background="brand"
      className={styles.bigSectionButton}
      onClick={() => props.history.push("/intervieweeDetails")}
    >
      Interviewee Profile
    </Box>
  </Grid>
)

export default IntervieweeBoard
