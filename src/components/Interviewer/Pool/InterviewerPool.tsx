import UIMainContainer from 'components/UI/UIBoxContainer';
import React from 'react';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

const InterviewerPool = (props: any) => (
  <UIMainContainer>
    <Typography variant="h4">Match</Typography>
    <br />
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">Languages</TableCell>
            <TableCell align="center">Awaiting</TableCell>
            <TableCell align="center">Role</TableCell>
            <TableCell align="center">Company</TableCell>
            <TableCell align="center">Availability</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.pool.map((row: any, id: any) => (
            <TableRow key={id}>
              <TableCell align="left">{row.languages}</TableCell>
              <TableCell align="center">{row.awaiting}</TableCell>
              <TableCell align="center">{row.role}</TableCell>
              <TableCell align="center">{row.company}</TableCell>
              <TableCell align="center">
                <FormControl>
                  <Select
                    value={props.data.poolR[row.uid] || ''}
                    onChange={event =>
                      props.data.setPool({
                        type: 'create',
                        id: row.uid,
                        schedule: event.target.value,
                      })
                    }
                  >
                    {row.availability.map((date: any, id: any) => (
                      <MenuItem key={id} value={date}>
                        {date}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell align="center">
                <Button color="secondary" target="_blank" href={row.folder}>
                  Resume
                </Button>
              </TableCell>
              <TableCell align="center">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    props.data.createInterview(
                      row.interviewee,
                      props.data.poolR[row.uid]
                    );
                  }}
                >
                  Schedule
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </UIMainContainer>
);

export default InterviewerPool;
