import React from "react";
import Header from "./Header";

import styles from "./main.module.css";

import { Main as MainGrommet, Grid, Box } from "grommet";
import { signOutWithGoogle } from "./../../firebase";

const Main = () => {
  return (
    <>
      <Header position="fixed" />
      <Header position="relative" />
      <MainGrommet pad="large">
        <Grid
          rows={["small"]}
          align="stretch"
          justify="stretch"
          columns={["1fr", "1fr", "1fr"]}
          gap="medium"
        >
          <Box background="brand" className={styles.bigSectionButton}>
            Schedule a Mock Interview
          </Box>
          <Box background="brand" className={styles.bigSectionButton}>
            Check my interviews history
          </Box>
          <Box
            background="brand"
            className={styles.bigSectionButton}
            onClick={signOutWithGoogle}
          >
            Log Out
          </Box>
        </Grid>
      </MainGrommet>
    </>
  );
};

export default Main;
