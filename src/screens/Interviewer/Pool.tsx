import InterviewerPool from 'components/Interviewer/Pool/InterviewerPool';
import UserError from 'components/User/UserError';
import UserLoading from 'components/User/UserLoading';
import React, { useReducer } from 'react';
import { CREATE_INTERVIEW, VIEW_POOL } from 'utils/constants/endpoints';
import Data from 'utils/helpers/Data';

import { useMutation, useQuery } from '@apollo/client';

const reducer = (currentPool: any, action: any): any => {
  switch (action.type) {
    case 'create': {
      return {
        ...currentPool,
        [action.id]: action.schedule,
      };
    }
  }

  throw new Error();
};

const Pool = () => {
  const { loading, error, data } = useQuery(VIEW_POOL);
  const [creation, { error: cancellationMutationError }] =
    useMutation(CREATE_INTERVIEW);
  const [poolR, setPool] = useReducer(reducer, {});

  if (loading) return <UserLoading />;
  if (error) return <UserError />;

  const pool = Data.parseAPIDataToPool(data);

  const createInterview = (intervieweeId: string, dateOfInterview: string) => {
    console.log(intervieweeId, dateOfInterview);
    creation({
      variables: Data.parseInputToInterviewAPI(intervieweeId, dateOfInterview),
    });
  };

  const allData = {
    pool,
    poolR,
    setPool,
    createInterview,
  };

  return <InterviewerPool data={allData} />;
};

export default Pool;
