import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import {
  IIncomingInterviewsData,
  IIncomingInterviewsProps,
} from 'structure/interfaces/IIncomingInterviews';

const InterviewsIncoming = (props: IIncomingInterviewsProps) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="right">Day</TableCell>
            <TableCell align="right">Hour (24hrs)</TableCell>
            <TableCell align="right">Document</TableCell>
            <TableCell align="right">Place</TableCell>
            <TableCell align="right">Confirmed</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map(row => (
            <TableRow key={row.name}>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">{row.document}</TableCell>
              <TableCell align="right">{row.place}</TableCell>
              <TableCell align="right">{row.confirmed}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default InterviewsIncoming;
