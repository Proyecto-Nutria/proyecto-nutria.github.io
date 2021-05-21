import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Box from '@material-ui/core/Box';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const InterviewsIncoming = (props: any) => {
  return (
    <Box mt={4}>
      <Typography variant="h4">Incoming Interviews</Typography>
      <br />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">Day</TableCell>
              <TableCell align="left">Hour (24hrs)</TableCell>
              <TableCell align="left">Document</TableCell>
              <TableCell align="left">Room</TableCell>
              <TableCell align="left">Confirmed</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.map((row: any, id: any) => (
              <TableRow key={id}>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">{row.time}</TableCell>
                <TableCell align="left">{row.document}</TableCell>
                <TableCell align="left">{row.place}</TableCell>

                <TableCell align="left">
                  {row.confirmed ? (
                    <CheckBoxIcon color="disabled" />
                  ) : (
                    <CheckBoxOutlineBlankIcon color="disabled" />
                  )}
                </TableCell>

                <TableCell align="right">
                  {row.confirmed ? (
                    <Button color="secondary">Cancel</Button>
                  ) : (
                    <Button color="primary">Confirm</Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default InterviewsIncoming;
