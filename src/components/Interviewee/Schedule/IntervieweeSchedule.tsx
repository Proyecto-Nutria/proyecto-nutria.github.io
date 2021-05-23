import React from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';

const IntervieweeSchedule = (props: any) => {
  const mutationFunction = props.mutation;
  return (
    <Box mt={4} mb={4}>
      <Typography variant="h4">Schedule Interview</Typography>
      <br />
      <form noValidate>
        {props.inputs.map((input: any) => {
          const type = input.type;
          if (type === 'Select') {
            return (
              <FormControl fullWidth>
                <InputLabel>{input.label}</InputLabel>
                <Select onChange={input.state}>
                  {input.values.map((name: any) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
                <br />
              </FormControl>
            );
          } else if (type === 'Check') {
            return (
              <FormControl fullWidth component="fieldset">
                <FormLabel component="legend">{input.label}</FormLabel>
                <FormGroup row>
                  {input.values.map((value: any) => (
                    <FormControlLabel
                      control={<Checkbox name={value} />}
                      label={value}
                    />
                  ))}
                </FormGroup>
                <br />
              </FormControl>
            );
          }
        })}

        <Button type="submit" variant="contained" color="primary">
          Schedule
        </Button>
      </form>
      {props.onMutationError && <p>Error :( Please try again</p>}
    </Box>
  );
};

export default IntervieweeSchedule;
