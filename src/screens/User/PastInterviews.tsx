import UIMainContainer from 'components/UI/UIBoxContainer';
import InterviewsPast from 'components/User/Interviews/InterviewsPast';
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

  if (loading) return <p> Loading </p>;
  if (error) return <p> Error </p>;

  let pastInterviews: IPastInterviewsData[] =
    Data.parseAPIDataToPastInterview(data);

  return <InterviewsPast data={pastInterviews} />;
};

export default PastInterviews;
