import React from 'react';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

const UIMainContainer = (props: any) => {
  return (
    <Container>
      <Box mt={6} mb={6} {...props}></Box>
    </Container>
  );
};

export default UIMainContainer;
