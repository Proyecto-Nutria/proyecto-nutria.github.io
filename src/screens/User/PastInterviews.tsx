import React from 'react';
import { IPastInterviewsData } from 'structure/interfaces/IPastInterviews';
import Data from 'utils/helpers/Data';
import DateTime from 'utils/helpers/DateTime';

import { useQuery } from '@apollo/client';
import { PAST_INTERVIEWS } from 'utils/constants/endpoints';

import UIMainContainer from 'components/UI/UIBoxContainer';
import InterviewsPast from 'components/User/Interviews/InterviewsPast';

const now = DateTime.getCurrentDate();

const PastInterviews = () => {
  const { loading, error, data } = useQuery(PAST_INTERVIEWS, {
    variables: { now },
  });

  const [sort, setSort] = React.useState({
    property: 'name',
    direction: 'desc',
  });

  if (loading) return <p> Loading </p>;
  if (error) return <p> Error </p>;

  let pastInterviews: IPastInterviewsData[] = Data.fromAPItoPast(data);

  return (
    <UIMainContainer>
      <InterviewsPast data={pastInterviews} onSort={setSort} sort={sort} />
    </UIMainContainer>
  );
};

export default PastInterviews;
