import InterviewsPast from 'components/User/Interviews/InterviewsPast';
import UserError from 'components/User/UserError';
import UserLoading from 'components/User/UserLoading';
import React from 'react';
import { IPastInterviewsData } from 'structure/interfaces/IPastInterviews';
import { PAST_INTERVIEWS } from 'utils/constants/endpoints';
import Data from 'utils/helpers/Data';
import DateTime from 'utils/helpers/DateTime';

import { useQuery } from '@apollo/client';

const now = DateTime.getCurrentDate();

const PastInterviews = () => {
  const { loading, error, data } = useQuery(PAST_INTERVIEWS, {
    variables: { now },
  });

  if (loading) return <UserLoading />;
  if (error) return <UserError />;

  const pastInterviewsData: IPastInterviewsData[] =
    Data.parseAPIDataToPastInterview(data);

  return <InterviewsPast data={pastInterviewsData} />;
};

export default PastInterviews;
