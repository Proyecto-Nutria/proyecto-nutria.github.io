import UIMainContainer from 'components/UI/UIBoxContainer';
import InterviewsIncoming from 'components/User/Interviews/InterviewsIncoming';
import UserError from 'components/User/UserError';
import UserLoading from 'components/User/UserLoading';
import React from 'react';
import { IIncomingInterviewsData } from 'structure/interfaces/IIncomingInterviews';
import { CANCEL_INTERVIEW, INCOMING_INTERVIEWS } from 'utils/constants/endpoints';
import Data from 'utils/helpers/Data';
import DateTime from 'utils/helpers/DateTime';

import { useMutation, useQuery } from '@apollo/client';

const now = DateTime.getCurrentDate();

const InterviewerIncomingInterviews = () => {
  const { loading, error, data } = useQuery(INCOMING_INTERVIEWS, {
    variables: { now },
  });
  // eslint-disable-next-line
  const [cancellation, { error: cancellationMutationError }] =
    useMutation(CANCEL_INTERVIEW);

  const [sort, setSort] = React.useState({
    property: 'name',
    direction: 'desc',
  });

  if (loading) return <UserLoading />;
  if (error) return <UserError />;

  let incomingInterviews: IIncomingInterviewsData[] =
    Data.fromAPItoIncomingInterviews(data);

  const cancelInterview = (id: string, timestamp: string) => {
    cancellation({
      variables: Data.fromInputToCancelInterview(id, timestamp),
    });
  };

  return (
    <UIMainContainer>
      <InterviewsIncoming
        data={incomingInterviews}
        showName={false}
        onSort={setSort}
        sort={sort}
        cancelMutation={cancelInterview}
        isInterviewee={false}
      />
    </UIMainContainer>
  );
};

export default InterviewerIncomingInterviews;
