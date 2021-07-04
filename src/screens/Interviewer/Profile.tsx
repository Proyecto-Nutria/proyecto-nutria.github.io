import InterviewerProfileForm from 'components/Interviewer/Profile/InterviewerProfileForm';
import UserError from 'components/User/UserError';
import { useIsFirstLogin } from 'hooks/UserHooks';
import React from 'react';
import { INTERVIEWER_PROFILE_COPY } from 'utils/constants/copy';
import { CREATE_INTERVIEWER, UPDATE_INTERVIEWER } from 'utils/constants/endpoints';

import { useMutation } from '@apollo/client';

const InterviewerEditProfile = () => {
  const newUser = useIsFirstLogin();
  let profileMutation = CREATE_INTERVIEWER;
  if (!newUser) profileMutation = UPDATE_INTERVIEWER;

  const [modifyInterviewer, { error: modifyInterviewerMutationError }] =
    useMutation(profileMutation);

  const [appear, setAppearValue] = React.useState(false);
  const [about, setAboutValue] = React.useState('');

  if (modifyInterviewerMutationError) return <UserError />;

  const editInterviewer = () => {
    modifyInterviewer({
      variables: {
        mentioned: appear,
        information: about,
      },
    });
  };

  return (
    <InterviewerProfileForm
      copy={INTERVIEWER_PROFILE_COPY}
      modifyInterviewerMutation={editInterviewer}
      appear={appear}
      appearSet={setAppearValue}
      about={about}
      aboutSet={setAboutValue}
    />
  );
};

export default InterviewerEditProfile;
