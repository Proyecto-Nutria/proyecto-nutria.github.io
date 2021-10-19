import WEEIncomingInterviews from 'components/Interviewee/WEEIncomingInterviews';
import UserError from 'components/User/UserError';
import UserLoading from 'components/User/UserLoading';
import { useUserRole } from 'hooks/UserHooks';
import React from 'react';
import { NO_CACHE } from 'utils/constants/apollo';
import { INCOMING_INTERVIEWS_COPY } from 'utils/constants/copy';
import {
    CANCEL_INTERVIEW, CONFIRM_INTERVIEW, WEEINCOMING_INTERVIEWS
} from 'utils/constants/endpoints';
import { UserRole } from 'utils/constants/values';
import Data from 'utils/helpers/Data';
import DateTime from 'utils/helpers/DateTime';
import { IncomingInterview } from 'utils/ts/dataTypes';

import { useMutation, useQuery } from '@apollo/client';

const now = DateTime.getCurrentDateTimeInPT();

const WEEIncomingInterviewsContainer = () => {
  const intervieweeRole = useUserRole() === UserRole[UserRole.interviewee];
  const {
    loading: incomingInterviewsLoading,
    error: incomingInterviewsQueryError,
    data: incomingInterviewsAPIData,
  } = useQuery(WEEINCOMING_INTERVIEWS, {
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
    Data.parseAPItoIncomingInterviews(incomingInterviewsAPIData);

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
    <WEEIncomingInterviews
      copy={INCOMING_INTERVIEWS_COPY}
      interviewsData={incomingInterviews}
      cancelInterviewMutation={cancelInterview}
      confirmInterviewMutation={confirmInterview}
      intervieweeRole={intervieweeRole}
    />
  );
};

export default WEEIncomingInterviewsContainer;
