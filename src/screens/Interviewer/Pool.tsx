import InterviewerPool from 'components/Interviewer/Pool/InterviewerPool';
import { useReducer } from 'react';
import { NO_CACHE } from 'utils/constants/apollo';
import { INTERVIEWER_POOL_COPY } from 'utils/constants/copy';
import {
  CREATE_INTERVIEW,
  UPDATE_POOL,
  VIEW_POOL,
} from 'utils/constants/endpoints';
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
  const [pool, setPool] = useReducer(poolReducer, {});

  const isLoading = poolLoading || cancellationLoading;
  const isError = poolQueryError || cancellationMutationError;

  const pools: PoolType[] = poolAPIData
    ? Data.parseAPIDataToPool(poolAPIData)
    : [];

  const createInterview = (
    poolId: number,
    awaitingInterviews: number,
    intervieweeId: string,
    dateOfInterview: string,
    onSuccess: () => void,
    onFail: () => void
  ) => {
    creation({
      variables: {
        interview: {
          interviewee_id: intervieweeId,
          date: dateOfInterview,
        },
      },
    })
      .then(_ => {
        onSuccess();
      })
      .catch(e => {
        console.log(e);
        onFail();
      });
  };

  return (
    <InterviewerPool
      copy={INTERVIEWER_POOL_COPY}
      poolsData={pools}
      pool={pool}
      poolSet={setPool}
      poolUpdateReducer={UPDATE_ACTION}
      createInterviewMutation={createInterview}
      isLoading={isLoading}
      isError={isError ? true : false}
    />
  );
};

export default Pool;
