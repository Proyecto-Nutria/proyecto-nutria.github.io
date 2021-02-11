import React from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';

const InterviewerProfileForm = (props: any) => {
  return (
    <Grid container spacing={3} component={Paper}>
      <form
        noValidate
        onSubmit={event => {
          event.preventDefault();
          props.mutation();
        }}
      >
        <FormControlLabel
          control={
            <Checkbox
              onChange={event =>
                props.data.setAppearValue(event.target.checked)
              }
            />
          }
          label="Mention"
        />
        {props.data.appear && (
          <Grid item xs={12}>
            <TextField
              label="Description"
              multiline
              rowsMax={4}
              onChange={event => props.data.setAboutValue(event.target.value)}
            />
          </Grid>
        )}
        <Button type="submit" fullWidth variant="contained" color="primary">
          Sign Up
        </Button>
      </form>
    </Grid>
  );
};

export default InterviewerProfileForm;
