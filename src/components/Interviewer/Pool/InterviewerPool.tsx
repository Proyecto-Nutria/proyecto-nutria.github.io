import UIMainContainer from 'components/UI/UIBoxContainer';
import React, { useEffect, useState } from 'react';
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
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props: any) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const InterviewerPool: React.FC<InterviewerPoolsProps> = ({
  copy,
  poolsData,
  pool,
  poolSet,
  poolUpdateReducer,
  createInterviewMutation,
  isLoading,
  isError,
}) => {
  const [successSnackBarOpen, setSuccessSnackBarOpen] = useState(false);
  const [failSnackBarOpen, setFailSnackBarOpen] = useState(false);
  useEffect(() => {
    if (isError) {
      setFailSnackBarOpen(true);
    } else {
      setFailSnackBarOpen(false);
    }
  }, [isError]);
  return (
    <UIMainContainer>
      <Snackbar open={isLoading}>
        <Alert severity="info">Loading...</Alert>
      </Snackbar>
      <Snackbar
        open={successSnackBarOpen}
        autoHideDuration={6000}
        onClose={() => setSuccessSnackBarOpen(false)}
      >
        <Alert severity="success">
          You have succesfully scheduled an interview, remember to arrive on
          time :D
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

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">
                {copy.table.head.languagesHead}
              </TableCell>
              <TableCell align="center">
                {copy.table.head.awaitingHead}
              </TableCell>
              <TableCell align="center">{copy.table.head.roleHead}</TableCell>
              <TableCell align="center">
                {copy.table.head.companyHead}
              </TableCell>
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
                <TableCell align="center">
                  {poolCandidate.scheduled} / {poolCandidate.awaiting}
                </TableCell>
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
                        poolCandidate.intervieweeId.toString(),
                        pool[poolCandidate.uid],
                        () => {
                          setSuccessSnackBarOpen(true);
                        },
                        () => {}
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
};

export default InterviewerPool;
