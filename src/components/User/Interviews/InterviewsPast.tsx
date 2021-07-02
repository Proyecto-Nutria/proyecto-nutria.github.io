import UIMainContainer from 'components/UI/UIBoxContainer';
import React from 'react';
import { PastInterviewsProps } from 'utils/ts/propsInterfaces';

import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

const InterviewsPast: React.FC<PastInterviewsProps> = ({
  interviewsData,
}): JSX.Element => {
  return (
    <UIMainContainer>
      <Typography variant="h4">Past Interviews</Typography>
      <br />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Document URL</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {interviewsData.map((pastInterview, id) => (
              <TableRow key={id}>
                <TableCell>{pastInterview.date}</TableCell>
                <TableCell align="right">
                  {pastInterview.document && (
                    <Button
                      color="primary"
                      target="_blank"
                      href={pastInterview.document}
                    >
                      Document
                    </Button>
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

export default InterviewsPast;
