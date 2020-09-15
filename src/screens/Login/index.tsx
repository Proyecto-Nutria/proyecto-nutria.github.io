import React, { useContext } from "react";

import { Box, Button } from "grommet";

import { Redirect } from "react-router-dom";

import { signInWithGoogle } from "./../../firebase";
import { UserContext } from "../../providers/UserProvider";

const Login = () => {
  const user = useContext(UserContext);

  if (user) {
    return <Redirect to={{ pathname: "/home" }} />;
  }

  return (
    <Box align="center" background="neutral-2">
      <Button label="Login" primary onClick={signInWithGoogle} />
    </Box>
  );
};

export default Login;
