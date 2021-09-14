import InterviewerProfileForm from 'components/Interviewer/Profile/InterviewerProfileForm';
import UserError from 'components/User/UserError';
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { HOME_PATH } from 'routes/paths';
import { INTERVIEWER_PROFILE_COPY } from 'utils/constants/copy';
import {
  CREATE_INTERVIEWER,
  UPDATE_INTERVIEWER,
} from 'utils/constants/endpoints';

import { useMutation } from '@apollo/client';
import { UserStatusContext } from 'providers/UserStatusProvider';

const InterviewerEditProfile = () => {
  let history = useHistory();
  const { isNewUser, setIsNewUser } = useContext(UserStatusContext);
  const [ableToRedirect, setAbleToRedirect] = React.useState(true);
  let profileMutation = CREATE_INTERVIEWER;
  if (!isNewUser) profileMutation = UPDATE_INTERVIEWER;

  const [
    modifyInterviewer,
    { error: modifyInterviewerMutationError, data: responseStatus },
  ] = useMutation(profileMutation);

  const [appear, setAppearValue] = React.useState(false);
  const [about, setAboutValue] = React.useState('');

  useEffect(() => {
    if (responseStatus && ableToRedirect) {
      setIsNewUser(false);
      setAbleToRedirect(false);
      history.push(HOME_PATH);
    }
  }, [
    ableToRedirect,
    history,
    responseStatus,
    setIsNewUser,
    setAbleToRedirect,
  ]);

  if (modifyInterviewerMutationError) return <UserError />;

  const editInterviewer = () => {
    if (isNewUser) {
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
