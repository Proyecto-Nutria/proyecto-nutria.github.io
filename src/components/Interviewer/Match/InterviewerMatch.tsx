import UIMainContainer from 'components/UI/UIBoxContainer';
import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

const InterviewerMatch = (props: any) => (
  <UIMainContainer>
    <Typography variant="h4">Match</Typography>
    <br />
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Candidate</TableCell>
            <TableCell align="right">Resume</TableCell>
            <TableCell align="right">Availability</TableCell>
            <TableCell align="right">Languages</TableCell>
            <TableCell align="right">Role</TableCell>
            <TableCell align="right">Company</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.pool.map((row: any, id: any) => (
            <TableRow key={id}>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.folder}</TableCell>
              <TableCell align="right">{row.availability}</TableCell>
              <TableCell align="right">{row.languages}</TableCell>
              <TableCell align="right">{row.role}</TableCell>
              <TableCell align="right">{row.company}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </UIMainContainer>
);

export default InterviewerMatch;
