import React from "react"

import { Grid } from "grommet"

/* import Filter from "./Filter" */
import CandidatesTable from "./CandidatesTable"

const Schedule = () => {
  return (
    <Grid gap="medium" margin="xlarge">
      {/*<Filter />*/}
      <CandidatesTable />
    </Grid>
  )
}

export default Schedule