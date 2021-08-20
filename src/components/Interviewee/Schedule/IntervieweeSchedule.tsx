import UIMainContainer from 'components/UI/UIBoxContainer';
import React, { useState } from 'react';
import InfoIcon from '@material-ui/icons/Info';
import {
  CREATE_ACTION,
  DELETE_ACTION,
  UPDATE_DAY_ACTION,
  UPDATE_END_ACTION,
  UPDATE_START_ACTION,
} from 'utils/constants/reducer';
import DateTime from 'utils/helpers/DateTime';
import { IntervieweeScheduleProps } from 'utils/ts/propsInterfaces';

import MomentUtils from '@date-io/moment';
import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import CardContent from '@material-ui/core/CardContent';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useEffect } from 'react';

function Alert(props: any) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const IntervieweeSchedule: React.FC<IntervieweeScheduleProps> = ({
  copy,
  interviewInformationFields,
  intervieweeAvaliabilityFields,
  enterToPoolMutation,
  isLoading,
}) => {
  const [successSnackBarOpen, setSuccessSnackBarOpen] = useState(false);
  const [failSnackBarOpen, setFailSnackBarOpen] = useState(false);
  const [loadingSnackBarOpen, setLoadingSnackBarOpen] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setLoadingSnackBarOpen(true);
    } else {
      setLoadingSnackBarOpen(false);
    }
  }, [isLoading]);
  return (
    <UIMainContainer>
      <Snackbar open={loadingSnackBarOpen}>
        <Alert severity="info">Loading...</Alert>
      </Snackbar>
      <Snackbar
        open={successSnackBarOpen}
        autoHideDuration={6000}
        onClose={() => setSuccessSnackBarOpen(false)}
      >
        <Alert severity="success">
          Your Request has been sent! Please keep an eye on your email for the
          following days :)
        </Alert>
      </Snackbar>
      <Snackbar
        open={failSnackBarOpen}
        autoHideDuration={6000}
        onClose={() => setFailSnackBarOpen(false)}
      >
        <Alert severity="error">
          An Error occurred, please try again later
        </Alert>
      </Snackbar>
      <Typography variant="h4">{copy.header}</Typography>
      <br />
      <form
        noValidate
        onSubmit={event => {
          event.preventDefault();
          enterToPoolMutation(
            () => setSuccessSnackBarOpen(true),
            () => setFailSnackBarOpen(true)
          );
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

        <Box m={2} />
        {/* TODO: Extract this Card as an Admonition component for reuse */}
        <Card variant="elevation">
          <CardContent>
            <div
              style={{
                display: 'flex',
                alignContent: 'center',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignContent: 'center',
                  alignItems: 'center',
                }}
              >
                <InfoIcon />
              </div>
              <div style={{ width: '8px' }} />
              <div
                style={{
                  display: 'flex',
                  alignContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Typography variant="h6">Note</Typography>
              </div>
            </div>
            <div style={{ height: '8px' }} />
            <Typography variant="body1">
              In Proyecto Nutria we work with the Pacific Timezone, therefore
              you should provide your availability in PT (usually CDMX time -2
              hours). Navigate to{' '}
              <a style={{ color: 'pink' }} href="https://time.is/PT">
                https://time.is/PT
              </a>{' '}
              to see current exact time in PT.
            </Typography>
            <div style={{ height: '12px' }} />
            <Typography>
              <span style={{ fontWeight: 600 }}>Example:</span> If you set a
              time between 2:00pm and 5:00pm then your interview will be between
              4:00pm and 7:00pm CDMX time.
            </Typography>
          </CardContent>
        </Card>
        <div style={{ height: '10px' }} />
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
                        autoOk={true}
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
        <div style={{ display: 'flex' }}>
          <Button type="submit" variant="contained" color="primary">
            {copy.form.scheduleBtn}
          </Button>
          <div style={{ width: '10px' }} />
          <Button
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={() =>
              intervieweeAvaliabilityFields.setter({ type: CREATE_ACTION })
            }
          >
            {copy.form.availabilityLabel}
          </Button>
        </div>
      </form>
    </UIMainContainer>
  );
};

export default IntervieweeSchedule;
