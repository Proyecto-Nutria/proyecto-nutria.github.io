import React from 'react';

import { DataTable } from 'grommet';

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
    <DataTable
      primaryKey={false}
      sortable={true}
      size="large"
      data={data}
      columns={[personColumn, folderColumn, ...dayHourColumn]}
    />
  );
};

export default MatchTable;
