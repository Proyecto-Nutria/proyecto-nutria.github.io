import UIMainContainer from 'components/UI/UIBoxContainer';
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
    <UIMainContainer>
      <Box mt={4} mb={4}>
        <Typography variant="h4">Schedule Interview</Typography>
        <br />
        <form noValidate>
          {props.inputs.map((input: any, id: any) => {
            const type = input.type;
            if (type === 'Select') {
              return (
                <FormControl fullWidth key={id}>
                  <InputLabel>{input.label}</InputLabel>
                  <Select
                    value={input.state}
                    onChange={event => input.setter(event.target.value)}
                  >
                    {input.values.map((name: any, id: any) => (
                      <MenuItem key={id} value={name}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                  <br />
                </FormControl>
              );
            } else if (type === 'Check') {
              return (
                <FormControl fullWidth component="fieldset" key={id}>
                  <FormLabel component="legend">{input.label}</FormLabel>
                  <FormGroup row>
                    {input.values.map((value: any, id: any) => (
                      <FormControlLabel
                        key={id}
                        control={
                          <Checkbox
                            name={value}
                            checked={input.state[value]}
                            onChange={event =>
                              input.setter({
                                ...input.state,
                                [event.target.name]: event.target.checked,
                              })
                            }
                          />
                        }
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
    </UIMainContainer>
  );
};

export default IntervieweeSchedule;
