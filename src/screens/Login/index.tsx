import React, { useContext } from "react"

import { Grid, Box, Image, Heading, Button, ResponsiveContext } from "grommet";
import { User, Google } from "grommet-icons";

import { Redirect } from "react-router-dom";

import styles from "./login.module.css";

import { signInWithGoogle } from "./../../firebase";
import { UserContext } from "../../providers/UserProvider";

const Login = () => {
  const user = useContext(UserContext);
  const size = useContext(ResponsiveContext);
  const end_left_c = size === "small" ? 1 : 0;
  const end_left_r = size === "small" ? 0 : 1;
  const start_right_c = size === "small" ? 0 : 1;
  const start_right_r = size === "small" ? 1 : 0;

  if (user) {
    return <Redirect to={{ pathname: "/home" }} />
  }

  return (
    <Box justify="center" height="100vh" className={styles.backgroundBox}>
      <Grid 
        margin="xlarge" 
        justifyContent="center"
        responsive={true}
        rows={['small', 'small']}
        columns={['1/4', '1/3']}
        areas={[
          { name: 'loginLeft', start: [0, 0], end: [end_left_c, end_left_r] },
          { name: 'loginRight', start: [start_right_c, start_right_r], end: [1, 1] }
        ]}
      >
        <Box gridArea="loginLeft" justify="center" align="center" className={size === "small" ? styles.boxTop : styles.boxLeft}>
          <Image src="./images/nutria_transparente.png" fit="contain" className={styles.leftImg} />
        </Box>
        <Box gridArea="loginRight" justify="center" align="center" gap="medium" className={size === "small" ? styles.boxBottom : styles.boxRight}>
          <Box justify="center" align="center">
            <Heading margin="none" color="white">Welcome</Heading>
          </Box>
          <Box justify="center" align="center">
            <User size = "large" color="white"/>
          </Box>
          <Box
            justify="center"
            align="center"
            // height="100px"
            // width="auto"
          >
            <Button 
              icon={<Google size="medium"/>} 
              label="Sign In" 
              size="large" 
              onClick={signInWithGoogle} 
              primary
            />
          </Box>
        </Box>
      </Grid>
    </Box>
  )
}

export default Login
