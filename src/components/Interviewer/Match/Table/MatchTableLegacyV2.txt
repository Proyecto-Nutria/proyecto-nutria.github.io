import React from 'react';

import { DataTable } from 'grommet';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import type { personData } from 'structure/types/dataTypes';
import HourColumn from 'components/Interviewer/Match/Table/MatchTableDayHourColumnLegacy';
import PersonColumn from 'components/Interviewer/Match/Table/MatchTablePersonColumnLegacy';
import FolderColumn from 'components/Interviewer/Match/Table/MatchTableInfoColumnLegacy';

const MatchTable = (props: {
  data: Array<personData>;
  setAvailableHours: Function;
  setNewInterviewData: Function;
  setShowConfirm: Function;
}) => {
  const {
    data,
    setAvailableHours,
    setNewInterviewData,
    setShowConfirm,
  } = props;

  const dayHourColumn: Array<any> = HourColumn(
    setNewInterviewData,
    setAvailableHours,
    setShowConfirm
  );

  const personColumn = PersonColumn();
  const folderColumn = FolderColumn();

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="right">Candidate</TableCell>
            <TableCell align="right">Resume</TableCell>
            <TableCell align="right">Availability</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((row: any, id: any) => (
            <TableRow key={id}>
              <TableCell align="right">
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
};

/*
Usage:

<MatchTable
      data={props.data.pool}
      setAvailableHours={(newAvailableHours: any) =>
        props.data.setAvailableHours(newAvailableHours)
      }
      setNewInterviewData={(updatedInterviewData: any) =>
        props.data.setNewInterviewData(updatedInterviewData)
      }
      setShowConfirm={(newShowConfirm: Boolean) =>
        props.data.setShowConfirm(newShowConfirm)
      }
    />
*/

export default MatchTable;
