import InterviewerPool from 'components/Interviewer/Pool/InterviewerPool';
import UserError from 'components/User/UserError';
import UserLoading from 'components/User/UserLoading';
import React, { useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { HOME_PATH } from 'routes/paths';
import { NO_CACHE } from 'utils/constants/apollo';
import { INTERVIEWER_POOL_COPY } from 'utils/constants/copy';
import { CREATE_INTERVIEW, UPDATE_POOL, VIEW_POOL } from 'utils/constants/endpoints';
import { UPDATE_ACTION } from 'utils/constants/reducer';
import Data from 'utils/helpers/Data';
import { Pool as PoolType } from 'utils/ts/dataTypes';

import { useMutation, useQuery } from '@apollo/client';

const poolReducer = (currentPool: any, action: any): any => {
  switch (action.type) {
    case UPDATE_ACTION: {
      return {
        ...currentPool,
        [action.id]: action.schedule,
      };
    }
  }
};

const Pool = () => {
  let history = useHistory();
  const {
    loading: poolLoading,
    error: poolQueryError,
    data: poolAPIData,
  } = useQuery(VIEW_POOL, {
    fetchPolicy: NO_CACHE,
  });
  const [
    creation,
    { error: cancellationMutationError, loading: cancellationLoading },
  ] = useMutation(CREATE_INTERVIEW);
  const [
    updatePool,
    { error: updatePoolMutationError, loading: updateLoading },
  ] = useMutation(UPDATE_POOL);
  const [pool, setPool] = useReducer(poolReducer, {});

  if (poolLoading || cancellationLoading || updateLoading)
    return <UserLoading />;
  if (poolQueryError || cancellationMutationError || updatePoolMutationError)
    return <UserError />;

  const pools: PoolType[] = Data.parseAPIDataToPool(poolAPIData);

  const createInterview = (
    poolId: number,
    awaitingInterviews: number,
    intervieweeId: string,
    dateOfInterview: string
  ) => {
    creation({
      variables: {
        interview: {
          interviewee_id: intervieweeId,
          date: dateOfInterview,
        },
      },
    });
    updatePool({
      variables: {
        id: poolId,
        awaiting: awaitingInterviews - 1,
      },
    });
    history.push(HOME_PATH);
  };

  return (
    <InterviewerPool
      copy={INTERVIEWER_POOL_COPY}
      poolsData={pools}
      pool={pool}
      poolSet={setPool}
      poolUpdateReducer={UPDATE_ACTION}
      createInterviewMutation={createInterview}
    />
  );
};

export default Pool;
