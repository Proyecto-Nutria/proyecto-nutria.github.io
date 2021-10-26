import UIMainContainer from 'components/UI/UIBoxContainer';
import React, { useEffect, useState } from 'react';
import { MONTHS } from 'utils/constants/values';
import DateTime from 'utils/helpers/DateTime';
import { IntervieweePoolAvailabilityProps } from 'utils/ts/propsInterfaces';

import { Grid } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const IntervieweeAvailability: React.FC<IntervieweePoolAvailabilityProps> = ({
  poolCandidate,
  setSelectedDateOfInterview,
}) => {
  const useStyles = makeStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: '15px',
    },
    container: {
      maxHeight: 640,
    },
  });
  const classes = useStyles();

  const [currentStartWeek, setCurrentStartWeek] = useState(
    DateTime.getCurrentStartWeekFrom(DateTime.getCurrentDateTimeInPT())
  );

  function isTimeReservedByCandidate(day: number, hour: number) {
    let availability: Array<string> = poolCandidate.availability.map(
      (date: any) => {
        return date;
      }
    );
    return availability.some(
      date =>
        date === DateTime.addDaysAndHoursToDate(currentStartWeek, day, hour)
    );
  }

  function isHourInAvailability(hour: string) {
    let availability: Array<string> = poolCandidate.availability.map(
      (time: any) => {
        return time;
      }
    );
    availability = availability.filter(time => {
      return currentStartWeek === DateTime.getCurrentStartWeekFrom(time);
    });
    return availability.some(date => date.split('T')[1] === hour);
  }

  function setWeekWithOffset(offset: number) {
    setCurrentStartWeek(DateTime.addDaysToDate(currentStartWeek, offset));
  }

  const hoursOfDay: Array<number> = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23,
  ];
  const days: Array<number> = [0, 1, 2, 3, 4, 5, 6];

  useEffect(() => {});

  return (
    <UIMainContainer>
      <FormControl component="fieldset">
        <RadioGroup>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Grid container item xs={2} justifyContent="center">
              <IconButton onClick={() => setWeekWithOffset(-1)}>
                <ArrowBackIosIcon />
              </IconButton>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="h5" align="center">
                {MONTHS[DateTime.getMonthFromStr(currentStartWeek)]}
              </Typography>
            </Grid>
            <Grid container item xs={2} justifyContent="center">
              <IconButton onClick={() => setWeekWithOffset(1)}>
                <ArrowForwardIosIcon />
              </IconButton>
            </Grid>
          </Grid>

          <TableContainer component={Paper} className={classes.container}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell align="center">Time/Day</TableCell>
                  <TableCell align="center">
                    Sun {DateTime.addDaysToDateAndGetDay(currentStartWeek, 0)}
                  </TableCell>
                  <TableCell align="center">
                    Mon {DateTime.addDaysToDateAndGetDay(currentStartWeek, 1)}
                  </TableCell>
                  <TableCell align="center">
                    Tue {DateTime.addDaysToDateAndGetDay(currentStartWeek, 2)}
                  </TableCell>
                  <TableCell align="center">
                    Wed {DateTime.addDaysToDateAndGetDay(currentStartWeek, 3)}
                  </TableCell>
                  <TableCell align="center">
                    Thu {DateTime.addDaysToDateAndGetDay(currentStartWeek, 4)}
                  </TableCell>
                  <TableCell align="center">
                    Fri {DateTime.addDaysToDateAndGetDay(currentStartWeek, 5)}
                  </TableCell>
                  <TableCell align="center">
                    Sat {DateTime.addDaysToDateAndGetDay(currentStartWeek, 6)}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {hoursOfDay
                  .filter(hour =>
                    isHourInAvailability(DateTime.getFormattedHour(hour))
                  )
                  .map((hour: any) => (
                    <TableRow key={hour}>
                      <TableCell component="th" scope="row" align="center">
                        {DateTime.getFormattedHour(hour)}
                      </TableCell>
                      {days.map((day: any) => (
                        <TableCell
                          component="th"
                          scope="row"
                          key={day}
                          align="center"
                        >
                          {isTimeReservedByCandidate(day, hour) ? (
                            <FormControlLabel
                              onChange={() => {
                                setSelectedDateOfInterview(
                                  DateTime.addDaysAndHoursToDate(
                                    currentStartWeek,
                                    day,
                                    hour
                                  )
                                );
                              }}
                              value={DateTime.addDaysAndHoursToDate(
                                currentStartWeek,
                                day,
                                hour
                              )}
                              label=""
                              control={<Radio />}
                              classes={classes}
                            />
                          ) : null}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </RadioGroup>
      </FormControl>
    </UIMainContainer>
  );
};

export default IntervieweeAvailability;
