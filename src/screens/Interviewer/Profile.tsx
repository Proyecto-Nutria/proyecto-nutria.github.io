import InterviewerProfileForm from 'components/Interviewer/Profile/InterviewerProfileForm';
import UserError from 'components/User/UserError';
import { useIsFirstLogin } from 'hooks/UserHooks';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { LANDING_PATH } from 'routes/paths';
import { INTERVIEWER_PROFILE_COPY } from 'utils/constants/copy';
import { CREATE_INTERVIEWER, UPDATE_INTERVIEWER } from 'utils/constants/endpoints';

import { useMutation } from '@apollo/client';

const InterviewerEditProfile = () => {
  let history = useHistory();
  const newUser = useIsFirstLogin();
  let profileMutation = CREATE_INTERVIEWER;
  if (!newUser) profileMutation = UPDATE_INTERVIEWER;

  const [modifyInterviewer, { error: modifyInterviewerMutationError }] =
    useMutation(profileMutation);

  const [appear, setAppearValue] = React.useState(false);
  const [about, setAboutValue] = React.useState('');

  if (modifyInterviewerMutationError) return <UserError />;

  const editInterviewer = () => {
    if (newUser) {
      modifyInterviewer({
        variables: {
          information: {
            mentioned: appear,
            information: about,
          },
        },
      });
    } else {
      modifyInterviewer({
        variables: {
          mentioned: appear,
          information: about,
        },
      });
    }
    //TODO: Bug: Cannot redirect after first time
    history.push(LANDING_PATH);
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
