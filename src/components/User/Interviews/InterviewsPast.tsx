import React from 'react';

import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const InterviewsPast = (props: any) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Document</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((row: any) => (
            <TableRow key={row.name}>
              <TableCell>{row.date}</TableCell>
              <TableCell align="right">
                <a href={row.document}>
                  <Button variant="contained" color="primary">
                    Document
                  </Button>
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default InterviewsPast;
