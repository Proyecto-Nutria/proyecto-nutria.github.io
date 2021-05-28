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
import AddIcon from '@material-ui/icons/Add';

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

          <Button
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={() => props.dynamicInput.setter({ type: 'create' })}
          >
            Schedule preference
          </Button>

          {Object.entries(props.dynamicInput.state).map(([id, data]) => {
            const current = props.dynamicInput.state[id];
            const { day, interval } = current;
            const [start, end] = interval;
            const updater = props.dynamicInput.setter;
            return (
              <FormControl key={id}>
                <InputLabel>Day</InputLabel>
                <Select
                  value={day}
                  onChange={event =>
                    updater({
                      type: 'updateDay',
                      id,
                      day: event.target.value,
                    })
                  }
                >
                  {props.dynamicInput.values.days.map((day: any, id: any) => (
                    <MenuItem key={id} value={day}>
                      {day}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            );
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
