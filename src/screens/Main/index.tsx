import React from "react";
import Header from "./Header";

import styles from "./main.module.css";

import { Main as MainGrommet, Grid, Box } from "grommet";
import { signOutWithGoogle, auth } from "./../../firebase";

const doStuff = async () => {
  const token = await auth?.currentUser?.getIdToken();
  if (!token) return;

  const request = await fetch("https://your-api-url/articles", {
    headers: new Headers({
      Authorization: token,
    }),
  });

  const data = await request.json();
  console.log(data);
};

const Main = () => {
  return (
    <>
      <Header position="fixed" />
      <Header position="relative" />
      <MainGrommet pad="large">
        <Grid
          rows={["small", "small"]}
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
            onClick={doStuff}
          >
            Endpoint
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
