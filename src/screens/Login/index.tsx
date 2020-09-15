import React from "react";

import { Box, Button } from "grommet";

import { signInWithGoogle } from "./../../firebase";

const Login = () => {
  return (
    <Box align="center" background="neutral-2">
      <Button
        label="Login world"
        primary
        onClick={signInWithGoogle}
      />
    </Box>
  );
};

export default Login;
