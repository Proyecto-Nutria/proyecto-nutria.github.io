import InterviewsIncoming from 'components/User/Interviews/InterviewsIncoming';
import UserError from 'components/User/UserError';
import UserLoading from 'components/User/UserLoading';
import React from 'react';
import {
    CANCEL_INTERVIEW, CONFIRM_INTERVIEW, INCOMING_INTERVIEWS
} from 'utils/constants/endpoints';
import Data from 'utils/helpers/Data';
import DateTime from 'utils/helpers/DateTime';
import { IncomingInterview } from 'utils/ts/dataTypes';

import { useMutation, useQuery } from '@apollo/client';

const now = DateTime.getCurrentDate();

const InterviewerIncomingInterviews = () => {
  const {
    loading: incomingInterviewsLoading,
    error: incomingInterviewsQueryError,
    data: incomingInterviewsAPIData,
  } = useQuery(INCOMING_INTERVIEWS, {
    variables: { now },
    fetchPolicy: 'no-cache',
  });
  const [cancelInterviewMutation, { error: cancellationMutationError }] =
    useMutation(CANCEL_INTERVIEW);
  const [confirmInterviewMutation, { error: confirmationMutationError }] =
    useMutation(CONFIRM_INTERVIEW);

  if (incomingInterviewsLoading) return <UserLoading />;
  if (
    incomingInterviewsQueryError ||
    confirmationMutationError ||
    cancellationMutationError
  )
    return <UserError />;

  let incomingInterviews: IncomingInterview[] =
    Data.fromAPItoIncomingInterviews(incomingInterviewsAPIData);

  const confirmInterview = (id: string) => {
    confirmInterviewMutation({
      variables: {
        id: id,
      },
    });
  };
  const cancelInterview = (id: string) => {
    cancelInterviewMutation({
      variables: {
        id: id,
      },
    });
  };

  return (
    <InterviewsIncoming
      data={incomingInterviews}
      cancelMutation={cancelInterview}
      confirmationMutation={confirmInterview}
    />
  );
};

export default InterviewerIncomingInterviews;
