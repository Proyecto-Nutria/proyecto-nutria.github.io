import InterviewsIncoming from 'components/User/Interviews/InterviewsIncoming';
import UserError from 'components/User/UserError';
import UserLoading from 'components/User/UserLoading';
import { useUserRole } from 'hooks/UserHooks';
import React from 'react';
import { NO_CACHE } from 'utils/constants/apollo';
import { INCOMING_INTERVIEWS_COPY } from 'utils/constants/copy';
import {
    CANCEL_INTERVIEW, CONFIRM_INTERVIEW, INCOMING_INTERVIEWS
} from 'utils/constants/endpoints';
import { INTERVIEWER_ROLE } from 'utils/constants/values';
import Data from 'utils/helpers/Data';
import DateTime from 'utils/helpers/DateTime';
import { IncomingInterview } from 'utils/ts/dataTypes';

import { useMutation, useQuery } from '@apollo/client';

const now = DateTime.getCurrentDate();

const IncomingInterviews = () => {
  const interviewerRole = useUserRole() === INTERVIEWER_ROLE;
  const {
    loading: incomingInterviewsLoading,
    error: incomingInterviewsQueryError,
    data: incomingInterviewsAPIData,
  } = useQuery(INCOMING_INTERVIEWS, {
    variables: { now },
    fetchPolicy: NO_CACHE,
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
      copy={INCOMING_INTERVIEWS_COPY}
      interviewsData={incomingInterviews}
      cancelInterviewMutation={cancelInterview}
      confirmInterviewMutation={confirmInterview}
      interviewerRole={interviewerRole}
    />
  );
};

export default IncomingInterviews;
