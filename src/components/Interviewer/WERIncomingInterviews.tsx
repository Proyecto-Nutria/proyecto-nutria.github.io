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

const WERIncomingInterviews: React.FC<IncomingInterviewsProps> = ({
  copy,
  interviewsData,
  cancelInterviewMutation,
  confirmInterviewMutation,
  intervieweeRole,
}) => {
  return (
    <UIMainContainer>
      <Typography variant="h4">{copy.header}</Typography>
      <br />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">{copy.table.head.dayHead}</TableCell>
              <TableCell align="center">{copy.table.head.hourHead}</TableCell>
              <TableCell align="center">
                {copy.table.head.documentHead}
              </TableCell>
              <TableCell align="center">{copy.table.head.roomHead}</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {interviewsData.map((interview, id) => (
              <TableRow key={id}>
                <TableCell align="center">{interview.date}</TableCell>
                <TableCell align="center">{interview.time}</TableCell>
                <TableCell align="center">
                  <a style={{ color: 'pink' }} href={interview.document}>
                    {interview.document}
                  </a>
                </TableCell>
                <TableCell align="center">{interview.room}</TableCell>

                <TableCell align="right">
                  <Button
                    color="secondary"
                    onClick={() => {
                      cancelInterviewMutation(interview.id);
                    }}
                  >
                    {copy.table.body.cancelBtn}
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

export default WERIncomingInterviews;
