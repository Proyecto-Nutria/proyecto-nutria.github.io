import InterviewsIncoming from 'components/User/Interviews/InterviewsIncoming';
import React from 'react';
import { IIncomingInterviewsData } from 'structure/interfaces/IIncomingInterviews';
import {
    CANCEL_INTERVIEW, CONFIRM_INTERVIEW, INCOMING_INTERVIEWS
} from 'utils/constants/endpoints';
import Data from 'utils/helpers/Data';
import DateTime from 'utils/helpers/DateTime';

import { useMutation, useQuery } from '@apollo/client';

const now = DateTime.getCurrentDate();

const IntervieweeIncomingInterviews = () => {
  const { loading, error, data } = useQuery(INCOMING_INTERVIEWS, {
    variables: { now },
  });
  // eslint-disable-next-line
  const [confirmation, { error: confirmationMutationError }] =
    useMutation(CONFIRM_INTERVIEW);
  // eslint-disable-next-line
  const [cancellation, { error: cancellationMutationError }] =
    useMutation(CANCEL_INTERVIEW);

  if (loading) return <p> Loading </p>;
  if (error) return <p> Error </p>;

  let incomingInterviews: IIncomingInterviewsData[] =
    Data.fromAPItoIncomingInterviews(data);

  const confirmInterview = (id: string) => {
    confirmation({
      variables: {
        id: id,
      },
    });
  };
  const cancelInterview = (id: string) => {
    cancellation({
      variables: {
        id: id,
      },
    });
  };

  return (
    <InterviewsIncoming
      data={incomingInterviews}
      confirmMutation={confirmInterview}
      cancelMutation={cancelInterview}
      isInterviewee={true}
    />
  );
};

export default IntervieweeIncomingInterviews;
