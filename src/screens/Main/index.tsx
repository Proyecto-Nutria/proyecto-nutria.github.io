import React from "react";

import { Box, Button } from "grommet";

const Main = () => {
  return (
    <Box align="center" background="neutral-2">
      <Button
        label="Hello world"
        primary
        onClick={() => alert("Hello, world")}
      />
    </Box>
  );
};

export default Main;
