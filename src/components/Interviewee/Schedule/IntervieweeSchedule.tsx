import UIMainContainer from 'components/UI/UIBoxContainer';
import React from 'react';
import {
    CREATE_ACTION, DELETE_ACTION, UPDATE_DAY_ACTION, UPDATE_END_ACTION, UPDATE_START_ACTION
} from 'utils/constants/reducer';
import DateTime from 'utils/helpers/DateTime';
import { IntervieweeScheduleProps } from 'utils/ts/propsInterfaces';

import MomentUtils from '@date-io/moment';
import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

const IntervieweeSchedule: React.FC<IntervieweeScheduleProps> = ({
  copy,
  interviewInformationFields,
  intervieweeAvaliabilityFields,
  enterToPoolMutation,
}) => {
  return (
    <UIMainContainer>
      <Typography variant="h4">{copy.header}</Typography>
      <br />
      <form
        noValidate
        onSubmit={event => {
          event.preventDefault();
          enterToPoolMutation();
        }}
      >
        {interviewInformationFields.map((input, id) => {
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
        })}

        <Button
          variant="outlined"
          startIcon={<AddIcon />}
          onClick={() =>
            intervieweeAvaliabilityFields.setter({ type: CREATE_ACTION })
          }
        >
          {copy.form.avaliabilityLabel}
        </Button>
        <br />
        {Object.entries(intervieweeAvaliabilityFields.state).map(
          ([id, data]) => {
            const current = intervieweeAvaliabilityFields.state[id];
            const { day, interval } = current;
            const [start, end] = interval;
            const updater = intervieweeAvaliabilityFields.setter;
            return (
              <div key={id}>
                <br />
                <Grid container spacing={2}>
                  <Grid item>
                    <MuiPickersUtilsProvider utils={MomentUtils}>
                      <DatePicker
                        variant="inline"
                        maxDate={DateTime.oneMonthAhead()}
                        label={copy.form.dayLabel}
                        value={day}
                        onChange={momentObject =>
                          updater({
                            type: UPDATE_DAY_ACTION,
                            id,
                            day: momentObject,
                          })
                        }
                        disablePast
                      />
                    </MuiPickersUtilsProvider>
                  </Grid>
                  <Grid item xs>
                    <FormControl fullWidth={true}>
                      <InputLabel>{copy.form.startLabel}</InputLabel>
                      <Select
                        value={start}
                        onChange={event =>
                          updater({
                            type: UPDATE_START_ACTION,
                            id,
                            start: event.target.value,
                          })
                        }
                      >
                        {intervieweeAvaliabilityFields.values.hours.map(
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
                      <InputLabel> {copy.form.endLabel}</InputLabel>
                      <Select
                        value={end}
                        onChange={event =>
                          updater({
                            type: UPDATE_END_ACTION,
                            id,
                            end: event.target.value,
                          })
                        }
                      >
                        {intervieweeAvaliabilityFields.values.hours.map(
                          (end: any, id: any) => (
                            <MenuItem key={id} value={end}>
                              {end}
                            </MenuItem>
                          )
                        )}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item>
                    <IconButton
                      onClick={() => updater({ type: DELETE_ACTION, id })}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </div>
            );
          }
        )}
        <br />
        <Box>
          <Button type="submit" variant="contained" color="primary">
            {copy.form.scheduleBtn}
          </Button>
        </Box>
      </form>
    </UIMainContainer>
  );
};

export default IntervieweeSchedule;
