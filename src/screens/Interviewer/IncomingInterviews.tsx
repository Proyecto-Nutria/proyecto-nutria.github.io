import InterviewsIncoming from 'components/User/Interviews/InterviewsIncoming';
import UserError from 'components/User/UserError';
import UserLoading from 'components/User/UserLoading';
import React from 'react';
import { IIncomingInterviewsData } from 'structure/interfaces/IIncomingInterviews';
import {
    CANCEL_INTERVIEW, CONFIRM_INTERVIEW, INCOMING_INTERVIEWS
} from 'utils/constants/endpoints';
import Data from 'utils/helpers/Data';
import DateTime from 'utils/helpers/DateTime';

import { useMutation, useQuery } from '@apollo/client';

const now = DateTime.getCurrentDate();

const InterviewerIncomingInterviews = () => {
  const { loading, error, data } = useQuery(INCOMING_INTERVIEWS, {
    variables: { now },
  });
  const [cancellation, { error: cancellationMutationError }] =
    useMutation(CANCEL_INTERVIEW);
  const [confirmation, { error: confirmationMutationError }] =
    useMutation(CONFIRM_INTERVIEW);

  if (loading) return <UserLoading />;
  if (error) return <UserError />;

  let incomingInterviews: IIncomingInterviewsData[] =
    Data.fromAPItoIncomingInterviews(data);

  const cancelInterview = (interviewId: string) => {
    console.log(interviewId);
    console.log('entered here');
    /*
    cancellation({
      variables: Data.fromInputToCancelInterview(id, timestamp),
    });*/
  };

  return (
    <InterviewsIncoming
      data={incomingInterviews}
      cancelMutation={cancelInterview}
    />
  );
};

export default InterviewerIncomingInterviews;
