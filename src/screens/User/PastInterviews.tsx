import InterviewsPast from 'components/User/Interviews/InterviewsPast';
import UserError from 'components/User/UserError';
import UserLoading from 'components/User/UserLoading';
import React from 'react';
import { PAST_INTERVIEWS_COPY } from 'utils/constants/copy';
import { PAST_INTERVIEWS } from 'utils/constants/endpoints';
import Data from 'utils/helpers/Data';
import DateTime from 'utils/helpers/DateTime';
import { PastInterview } from 'utils/ts/dataTypes';

import { useQuery } from '@apollo/client';

const now: string = DateTime.getCurrentDate();

const PastInterviews = () => {
  const {
    loading,
    error,
    data: pastInterviewsAPIData,
  } = useQuery(PAST_INTERVIEWS, {
    variables: { now },
  });

  if (loading) return <UserLoading />;
  if (error) return <UserError />;

  const pastInterviewsData: PastInterview[] = Data.parseAPIDataToPastInterview(
    pastInterviewsAPIData
  );

  return (
    <InterviewsPast
      copy={PAST_INTERVIEWS_COPY}
      interviewsData={pastInterviewsData}
    />
  );
};

export default PastInterviews;
