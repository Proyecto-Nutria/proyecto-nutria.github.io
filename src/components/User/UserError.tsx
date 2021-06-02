import React from 'react';

import Grid from '@material-ui/core/Grid';

const UserError = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Grid item>
        <h1>Error loading your data</h1>
      </Grid>
    </Grid>
  );
};

export default UserError;
