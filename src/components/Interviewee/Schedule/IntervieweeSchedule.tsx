import React from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const IntervieweeSchedule = (props: any) => {
  const mutationFunction = props.mutation;
  return (
    <Grid container spacing={3} component={Paper}>
      <form noValidate>
        {props.inputs.map((input: any) => {
          const type = input.type;
          if (type === 'Select') {
            return (
              <Grid item xs={12}>
                <FormControl>
                  <InputLabel>{input.label}</InputLabel>
                  <Select onChange={input.state}>
                    {input.values.map((name: any) => (
                      <MenuItem key={name} value={name}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            );
          } else if (type === 'Check') {
            return (
              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">{input.label}</FormLabel>
                  <FormGroup>
                    {input.values.map((value: any) => (
                      <FormControlLabel
                        control={<Checkbox name={value} />}
                        label={value}
                      />
                    ))}
                  </FormGroup>
                </FormControl>
              </Grid>
            );
          }
        })}

        <Button type="submit" fullWidth variant="contained" color="primary">
          Sign Up
        </Button>
      </form>
      {props.onMutationError && <p>Error :( Please try again</p>}
    </Grid>
  );
};

export default IntervieweeSchedule;
