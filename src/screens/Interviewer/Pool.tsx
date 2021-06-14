import InterviewerPool from 'components/Interviewer/Pool/InterviewerPool';
import UserError from 'components/User/UserError';
import UserLoading from 'components/User/UserLoading';
import React, { useReducer } from 'react';
import { CREATE_INTERVIEW, UPDATE_POOL, VIEW_POOL } from 'utils/constants/endpoints';
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
  const { loading, error, data } = useQuery(VIEW_POOL, {
    fetchPolicy: 'no-cache',
  });
  const [creation, { error: cancellationMutationError }] =
    useMutation(CREATE_INTERVIEW);
  const [updatePool, { error: updatePoolError }] = useMutation(UPDATE_POOL);
  const [poolR, setPool] = useReducer(reducer, {});

  if (loading) return <UserLoading />;
  if (error) return <UserError />;

  const pool = Data.parseAPIDataToPool(data);

  const createInterview = (
    poolId: number,
    awaitingInterviews: number,
    intervieweeId: string,
    dateOfInterview: string
  ) => {
    creation({
      variables: Data.parseInputToInterviewAPI(intervieweeId, dateOfInterview),
    });
    updatePool({
      variables: {
        id: poolId,
        awaiting: awaitingInterviews - 1,
      },
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
