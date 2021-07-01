import InterviewerProfileForm from 'components/Interviewer/Profile/InterviewerProfileForm';
import UserError from 'components/User/UserError';
import UserLoading from 'components/User/UserLoading';
import { useIsFirstLogin } from 'hooks/UserHooks';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { CREATE_INTERVIEWER, UPDATE_INTERVIEWER } from 'utils/constants/endpoints';
import Data from 'utils/helpers/Data';
import Path from 'utils/helpers/Path';

import { useMutation } from '@apollo/client';

const InterviewerEditProfile = () => {
  const newUser = useIsFirstLogin();
  let profileMutation = CREATE_INTERVIEWER;
  if (!newUser) profileMutation = UPDATE_INTERVIEWER;

  const [modifyInterviewee, { error }] = useMutation(profileMutation);

  const [appear, setAppearValue] = React.useState(false);
  const [about, setAboutValue] = React.useState('');

  if (error) return <UserError />;

  const editInterviewer = () => {
    modifyInterviewee({
      variables: {
        mentioned: appear,
        information: about,
      },
    });
  };

  const data = {
    appear,
    setAppearValue,
    about,
    setAboutValue,
  };

  return <InterviewerProfileForm mutation={editInterviewer} data={data} />;
};

export default InterviewerEditProfile;
