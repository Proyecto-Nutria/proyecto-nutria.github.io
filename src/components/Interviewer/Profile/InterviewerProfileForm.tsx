import UIMainContainer from 'components/UI/UIBoxContainer';
import React from 'react';

import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const InterviewerProfileForm = (props: any) => {
  return (
    <UIMainContainer>
      <Typography variant="body2" gutterBottom>
        By clicking on this box you give Proyecto Nutria the permission to share
        brief details on the way your are contributing to this project. See
        examples on our official website
      </Typography>
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
          <TextField
            fullWidth
            label="Your brief description"
            multiline
            rowsMax={4}
            onChange={event => props.data.setAboutValue(event.target.value)}
          />
        )}
        <br />
        <br />
        <Button type="submit" variant="contained" color="primary">
          Update Information
        </Button>
      </form>
    </UIMainContainer>
  );
};

export default InterviewerProfileForm;
