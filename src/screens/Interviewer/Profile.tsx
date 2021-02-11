import React from 'react';
import { useHistory } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import {
  CREATE_INTERVIEWER,
  UPDATE_INTERVIEWER,
} from 'utils/constants/endpoints';

import Data from 'utils/helpers/Data';
import Path from 'utils/helpers/Path';

import UIMainContainer from 'components/UI/UIBoxContainer';
import InterviewerProfileForm from 'components/Interviewer/Profile/InterviewerProfileForm';

const InterviewerEditProfile = () => {
  const history = useHistory();
  const update = Path.isEditProfile(history);

  let profileMutation = CREATE_INTERVIEWER;
  if (update) profileMutation = UPDATE_INTERVIEWER;

  const [modifyInterviewee, { error: mutationError }] = useMutation(
    profileMutation
  );

  const [appear, setAppearValue] = React.useState(false);
  const [about, setAboutValue] = React.useState('');

  const editInterviewer = () => {
    if (update) {
      Data.callMutationAndRedirectToHome(
        modifyInterviewee,
        Data.fromInputToUpdateInterviewee(appear, about),
        history
      );
    } else {
      Data.callMutationAndRedirectToHome(
        modifyInterviewee,
        Data.fromInputToCreateInterviewer(appear, about),
        history
      );
    }
  };

  const data = {
    appear,
    setAppearValue,
    about,
    setAboutValue,
  };

  return (
    <UIMainContainer>
      <InterviewerProfileForm
        mutation={editInterviewer}
        onMutationError={mutationError}
        data={data}
      />
    </UIMainContainer>
  );
};

export default InterviewerEditProfile;
