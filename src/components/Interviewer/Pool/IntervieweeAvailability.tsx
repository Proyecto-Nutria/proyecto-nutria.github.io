import UIMainContainer from 'components/UI/UIBoxContainer';
import React, { useEffect, useState } from 'react';
import { IntervieweePoolAvailabilityProps } from 'utils/ts/propsInterfaces';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import {GrNext, GrPrevious} from 'react-icons/gr'; 
import { Button } from '@material-ui/core';
import DateTime from 'utils/helpers/DateTime';
import { off } from 'process';

const IntervieweeAvailability: React.FC<IntervieweePoolAvailabilityProps> = ({
  poolCandidate,
  setSelectedDateOfInterview
}) => {
  const [currentStartWeek, setCurrentStartWeek] = useState(getStartWeekDay(new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"})));

  function getStartWeekDay(date: string) {
    var d = new Date(date);
    d.setHours(0, 0, 0, 0);
    var day = d.getDay();
    var diff = d.getDate() - day; // adjust when day is sunday
    return new Date(d.setDate(diff)).toLocaleString("en-US", {timeZone: "America/Los_Angeles"});
  }

  function isTimeReservedByCandidate(date: string) {
    let times: Array<string> = poolCandidate.availability. map((time: any) => {
      return time;
    });
    return times.some(t => DateTime.getUtcDate(t) === date);
  }

  function isTimeReservedInAnyDayByCandidate(day: string) {
    let times: Array<string> = poolCandidate.availability. map((time: any) => {
      return time;
    });
    times = times.filter(t => currentStartWeek === getStartWeekDay(t));
    return times.some(t => new Date(t).toLocaleTimeString("en-US", {timeZone: "America/Los_Angeles"}) === day);
  }

  function GoToOffsetWeek(offset: number) {
    setCurrentStartWeek(DateTime.getOffsetDateAndHour(currentStartWeek, 7 * offset, new Date(currentStartWeek).getHours()));
  }

  const dayHours: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
  const days: Array<number> = [0, 1, 2, 3, 4, 5, 6];
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  useEffect(() => {
  });

  const divStyle = {
    width: '100vh'
  };

  return (
    <UIMainContainer>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="datetime"
          defaultValue="default"
          name="radio-buttons-group"
        >
          <div style={{display: 'flex', justifyContent: 'center', marginBottom: '12px'}}>
            <Button
              variant="contained"
              onClick={() => GoToOffsetWeek(-1)}>
              <GrPrevious />
            </Button>
            <h3 style={{margin: '4px 20px 0 20px'}}>
              {monthNames[new Date((DateTime.getOffsetDateAndHour(currentStartWeek, 0, 0))).getMonth()]}
            </h3>
            <Button
              variant="contained"
              onClick={() => GoToOffsetWeek(1)}>
              <GrNext />
            </Button>
          </div>
          <TableContainer component={Paper}>
          <Table style={divStyle} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Time/Day</TableCell>
                <TableCell align="center">Sun {new Date((DateTime.getOffsetDateAndHour(currentStartWeek, 0, 0))).getDate()}</TableCell>
                <TableCell align="center">Mon {new Date((DateTime.getOffsetDateAndHour(currentStartWeek, 1, 0))).getDate()}</TableCell>
                <TableCell align="center">Tue {new Date((DateTime.getOffsetDateAndHour(currentStartWeek, 2, 0))).getDate()}</TableCell>
                <TableCell align="center">Wed {new Date((DateTime.getOffsetDateAndHour(currentStartWeek, 3, 0))).getDate()}</TableCell>
                <TableCell align="center">Thu {new Date((DateTime.getOffsetDateAndHour(currentStartWeek, 4, 0))).getDate()}</TableCell>
                <TableCell align="center">Fri {new Date((DateTime.getOffsetDateAndHour(currentStartWeek, 5, 0))).getDate()}</TableCell>
                <TableCell align="center">Sat {new Date((DateTime.getOffsetDateAndHour(currentStartWeek, 6, 0))).getDate()}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dayHours.filter(d => isTimeReservedInAnyDayByCandidate(DateTime.getUtcDay(d))).map((hour: any) => (
                <TableRow key={hour}>
                  <TableCell component="th" scope="row">
                    {DateTime.getUtcDay(hour)}
                  </TableCell>
                  {days.map((day: any) => (
                    <TableCell component="th" scope="row" key={DateTime.getOffsetDateAndHour(currentStartWeek, day, hour)}>
                      {isTimeReservedByCandidate(DateTime.getOffsetDateAndHour(currentStartWeek, day, hour)) ? 
                        <FormControlLabel onChange={() => {
                          setSelectedDateOfInterview(DateTime.getOffsetDateAndHour(currentStartWeek, day, hour));
                        }} value={DateTime.getOffsetDateAndHour(currentStartWeek, day, hour)} control={<Radio />} label='' />
                        : null}
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