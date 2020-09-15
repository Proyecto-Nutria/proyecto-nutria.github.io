import React from "react";

import { Box, Button } from "grommet";

const Login = () => {
  return (
    <Box align="center" background="neutral-2">
      <Button
        label="Landing page"
        primary
        onClick={() => alert("Hello, world")}
      />
    </Box>
  );
};

export default Login;
