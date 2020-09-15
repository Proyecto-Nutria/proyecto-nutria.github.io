import React from "react";

import { Box, Button } from "grommet";

import { signInWithGoogle, signOutWithGoogle } from "./../../firebase";

const Login = () => {
  return (
    <Box align="center" background="neutral-2">
      <Button label="Login" primary onClick={signInWithGoogle} />
    </Box>
  );
};

export default Login;
