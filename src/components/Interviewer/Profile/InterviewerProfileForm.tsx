import UIMainContainer from 'components/UI/UIBoxContainer';
import React from 'react';
import { InterviewerProfileProps } from 'utils/ts/propsInterfaces';

import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const InterviewerProfileForm: React.FC<InterviewerProfileProps> = ({
  copy,
  modifyInterviewerMutation,
  appear,
  appearSet,
  about,
  aboutSet,
}) => {
  return (
    <UIMainContainer>
      <Typography variant="body2" gutterBottom>
        {copy.text}
      </Typography>
      <form
        noValidate
        onSubmit={event => {
          event.preventDefault();
          modifyInterviewerMutation();
        }}
      >
        <FormControlLabel
          control={
            <Checkbox onChange={event => appearSet(event.target.checked)} />
          }
          label={copy.form.mentionLabel}
        />
        {appear && (
          <TextField
            fullWidth
            label={copy.form.descriptionLabel}
            multiline
            rowsMax={4}
            value={about}
            onChange={event => aboutSet(event.target.value)}
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
