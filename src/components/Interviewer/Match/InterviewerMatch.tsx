import React from 'react';

import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { DataGrid } from '@material-ui/data-grid';

const InterviewerMatch = (props: any) => (
  <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Candidate</TableCell>
            <TableCell align="right">Resume</TableCell>
            <TableCell align="right">Availability</TableCell>
            <TableCell align="right">Header&nbsp;(g)</TableCell>
            <TableCell align="right">Header&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {props.data.pool.map((row: any, id: any) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
              {row.name} {row.languages} {row.interviewType} - {row.role}
              </TableCell>
              <TableCell align="right">{row.folder}</TableCell>
              <TableCell align="right">{row.availability}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
);

export default InterviewerMatch;
