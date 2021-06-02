import InterviewerMatch from 'components/Interviewer/Match/InterviewerMatch';
import React, { useState } from 'react';
import { CREATE_INTERVIEW, VIEW_POOL } from 'utils/constants/endpoints';
import { day, hour } from 'utils/constants/values';
import Data from 'utils/helpers/Data';
import DateTime from 'utils/helpers/DateTime';

import { useMutation, useQuery } from '@apollo/client';

import type { queryData, interviewData } from 'structure/types/dataTypes';
import type { hourRange } from 'structure/types/timeTypes';

const defaultRanges: Array<hourRange> = [
  { startHour: hour.h0, endHour: hour.h23 },
];
const defaultQueryData: queryData = {
  name: '',
  linkResume: '',
  programmingLanguages: [],
  score: -1,
  position: '',
  realInterviews: [],
};
const defaultInterviewData: interviewData = {
  uid: '',
  interviewDay: day.Monday,
  interviewHour: hour.h0,
};

const InterviewerMatchInterview = () => {
  const { loading, error, data } = useQuery(VIEW_POOL);
  // eslint-disable-next-line
  const [creation, { error: cancellationMutationError }] =
    useMutation(CREATE_INTERVIEW);

  const [queryAbout, setQueryAbout] = useState<queryData>(defaultQueryData);
  const [showAbout, setShowAbout] = useState<Boolean>(false);
  const [availableHours, setAvailableHours] =
    useState<Array<hourRange>>(defaultRanges);
  const [newInterviewData, setNewInterviewData] =
    useState<interviewData>(defaultInterviewData);
  const [showConfirm, setShowConfirm] = useState<Boolean>(false);

  if (loading) return <p> Loading </p>;
  if (error) return <p> Error </p>;

  let pool = Data.fromAPItoMatch(data);

  const createInterview = (id: string, day: string, hour: string) => {
    creation({
      variables: Data.fromInputToCreateInterview(
        id,
        id,
        DateTime.getDateOfMatchInterview(day, hour),
        2
      ),
    });
  };

  const allData = {
    pool,
    queryAbout,
    setQueryAbout,
    showAbout,
    setShowAbout,
    availableHours,
    setAvailableHours,
    newInterviewData,
    setNewInterviewData,
    showConfirm,
    setShowConfirm,
    createInterview,
  };

  return <InterviewerMatch data={allData} />;
};

export default InterviewerMatchInterview;
