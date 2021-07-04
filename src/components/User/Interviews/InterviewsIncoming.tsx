import UIMainContainer from 'components/UI/UIBoxContainer';
import React from 'react';
import { IncomingInterviewsProps } from 'utils/ts/propsInterfaces';

import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

const InterviewsIncoming: React.FC<IncomingInterviewsProps> = ({
  copy,
  interviewsData,
  cancelInterviewMutation,
  confirmInterviewMutation,
  interviewerRole,
}): JSX.Element => {
  return (
    <UIMainContainer>
      <Typography variant="h4">{copy.header}</Typography>
      <br />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">{copy.table.head.dayHead}</TableCell>
              <TableCell align="left">{copy.table.head.hourHead}</TableCell>
              <TableCell align="left">{copy.table.head.documentHead}</TableCell>
              <TableCell align="left">{copy.table.head.roomHead}</TableCell>
              <TableCell align="left">{copy.table.head.confirmed}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {interviewsData.map((interview, id) => (
              <TableRow key={id}>
                <TableCell align="left">{interview.date}</TableCell>
                <TableCell align="left">{interview.time}</TableCell>
                <TableCell align="left">{interview.document}</TableCell>
                <TableCell align="left">{interview.room}</TableCell>

                <TableCell align="left">
                  {interview.confirmed ? (
                    <CheckBoxIcon color="disabled" />
                  ) : (
                    <CheckBoxOutlineBlankIcon color="disabled" />
                  )}
                </TableCell>

                <TableCell align="right">
                  {interview.confirmed ? (
                    <Button
                      color="secondary"
                      onClick={() => {
                        cancelInterviewMutation.cancelMutation(interview.id);
                      }}
                    >
                      {copy.table.body.cancelBtn}
                    </Button>
                  ) : (
                    [
                      interviewerRole && (
                        <Button
                          color="primary"
                          onClick={() => {
                            confirmInterviewMutation.confirmationMutation(
                              interview.id
                            );
                          }}
                        >
                          {copy.table.body.confirmBtn}
                        </Button>
                      ),
                    ]
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </UIMainContainer>
  );
};

export default InterviewsIncoming;
