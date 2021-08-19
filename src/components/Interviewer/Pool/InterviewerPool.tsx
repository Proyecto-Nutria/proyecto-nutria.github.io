import UIMainContainer from 'components/UI/UIBoxContainer';
import React from 'react';
import { InterviewerPoolsProps } from 'utils/ts/propsInterfaces';

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

const InterviewerPool: React.FC<InterviewerPoolsProps> = ({
  copy,
  poolsData,
  pool,
  poolSet,
  poolUpdateReducer,
  createInterviewMutation,
}) => (
  <UIMainContainer>
    <Typography variant="h4">{copy.header}</Typography>
    <br />
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">
              {copy.table.head.languagesHead}
            </TableCell>
            <TableCell align="center">{copy.table.head.awaitingHead}</TableCell>
            <TableCell align="center">{copy.table.head.roleHead}</TableCell>
            <TableCell align="center">{copy.table.head.companyHead}</TableCell>
            <TableCell align="center">
              {copy.table.head.availabilityHead}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {poolsData.map((poolCandidate, id) => (
            <TableRow key={id}>
              <TableCell align="center">{poolCandidate.name}</TableCell>
              <TableCell align="center">{poolCandidate.languages}</TableCell>
              <TableCell align="center">{poolCandidate.awaiting}</TableCell>
              <TableCell align="center">{poolCandidate.role}</TableCell>
              <TableCell align="center">{poolCandidate.company}</TableCell>
              <TableCell align="center">
                <FormControl>
                  <Select
                    value={pool[poolCandidate.uid] || ''}
                    onChange={event =>
                      poolSet({
                        type: poolUpdateReducer,
                        id: poolCandidate.uid,
                        schedule: event.target.value,
                      })
                    }
                  >
                    {poolCandidate.availability.map((date, id) => (
                      <MenuItem key={id} value={date}>
                        {date}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell align="center">
                <Button
                  color="secondary"
                  target="_blank"
                  href={poolCandidate.folder}
                >
                  Resume
                </Button>
              </TableCell>
              <TableCell align="center">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    createInterviewMutation(
                      poolCandidate.uid,
                      poolCandidate.awaiting,
                      poolCandidate.intervieweeId,
                      pool[poolCandidate.uid]
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
