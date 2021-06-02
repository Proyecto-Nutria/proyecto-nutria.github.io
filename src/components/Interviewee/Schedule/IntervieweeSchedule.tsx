import UIMainContainer from 'components/UI/UIBoxContainer';
import React, { Fragment, useState } from 'react';

import MomentUtils from '@date-io/moment';
import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import { KeyboardDateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

const IntervieweeSchedule = (props: any) => {
  const [selectedDate, handleDateChange] = useState(new Date());

  const mutationFunction = props.mutation;
  return (
    <UIMainContainer>
      <Typography variant="h4">Schedule Interview</Typography>
      <br />
      <form
        noValidate
        onSubmit={event => {
          event.preventDefault();
          mutationFunction();
        }}
      >
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
        <br />
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <KeyboardDateTimePicker
            variant="inline"
            ampm={false}
            label="With keyboard"
            value={selectedDate}
            onChange={e => console.log(e)}
            onError={console.log}
            disablePast
            format="yyyy/MM/dd HH:mm"
          />
        </MuiPickersUtilsProvider>
        {Object.entries(props.dynamicInput.state).map(([id, data]) => {
          const current = props.dynamicInput.state[id];
          const { day, interval } = current;
          const [start, end] = interval;
          const updater = props.dynamicInput.setter;
          return (
            <div key={id}>
              <br />
              <Grid container spacing={3}>
                <Grid item xs>
                  <FormControl fullWidth={true}>
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
                      {props.dynamicInput.values.days.map(
                        (day: any, id: any) => (
                          <MenuItem key={id} value={day}>
                            {day}
                          </MenuItem>
                        )
                      )}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs>
                  <FormControl fullWidth={true}>
                    <InputLabel>Start</InputLabel>
                    <Select
                      value={start}
                      onChange={event =>
                        updater({
                          type: 'updateStart',
                          id,
                          start: event.target.value,
                        })
                      }
                    >
                      {props.dynamicInput.values.hours.map(
                        (start: any, id: any) => (
                          <MenuItem key={id} value={start}>
                            {start}
                          </MenuItem>
                        )
                      )}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs>
                  <FormControl fullWidth={true}>
                    <InputLabel>End</InputLabel>
                    <Select
                      value={end}
                      onChange={event =>
                        updater({
                          type: 'updateEnd',
                          id,
                          end: event.target.value,
                        })
                      }
                    >
                      {props.dynamicInput.values.hours.map(
                        (end: any, id: any) => (
                          <MenuItem key={id} value={end}>
                            {end}
                          </MenuItem>
                        )
                      )}
                    </Select>
                  </FormControl>
                </Grid>
                <IconButton onClick={() => updater({ type: 'delete', id })}>
                  <DeleteIcon />
                </IconButton>
              </Grid>
            </div>
          );
        })}
        <br />
        <Box>
          <Button type="submit" variant="contained" color="primary">
            Schedule
          </Button>
        </Box>
      </form>
      {props.onMutationError && <p>Error :( Please try again</p>}
    </UIMainContainer>
  );
};

export default IntervieweeSchedule;
