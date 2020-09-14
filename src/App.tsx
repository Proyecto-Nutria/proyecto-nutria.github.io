import React from 'react';
import { Grommet, Box, Button } from 'grommet';

function App() {
  const theme = {
    global: {
      font: {
        family: 'sans-serif',
        size: '18px',
        height: '20px',
      },
    },
  };
  return (
    <Grommet theme={theme}>
      <Box align="center" background="neutral-2">
        <Button
          label="Hello world"
          primary
          onClick={() => alert('Hello, world')}
        />
      </Box>
    </Grommet>
  );
}

export default App;
