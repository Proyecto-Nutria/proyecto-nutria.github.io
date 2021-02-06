// @ts-nocheck
import React from 'react';
import { useHistory } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import {
  UPLOAD_FOLDER,
  CREATE_INTERVIEWEE,
  UPDATE_INTERVIEWEE,
} from 'utils/constants/endpoints';

import Data from 'utils/helpers/Data';
import Path from 'utils/helpers/Path';

import UIMainContainer from 'components/UI/UIBoxContainer';
import IntervieweeProfile from 'components/Interviewee/Profile/IntervieweeProfile';

const IntervieweeEditProfile = () => {
  const history = useHistory();
  const update = Path.isEditProfile(history);

  let profileMutation = CREATE_INTERVIEWEE;
  if (update) profileMutation = UPDATE_INTERVIEWEE;

  /*
  const [modifyInterviewee, { error: mutationError }] = useMutation(
    profileMutation
  );*/

  const [uploadResume, { error: mutationError }] = useMutation(UPLOAD_FOLDER);

  const [resume, setResume] = React.useState(null);
  const [school, setSchoolValue] = React.useState('');
  const schoolsOptions = Data.getSchools();

  const onFileChange = (event: any) => {
    setResume(event.target.files[0]);
  };

  const editInterviewee = () => {
    // FileReader function for read the file.
    var fileReader = new FileReader();
    var base64;
    // Onload of file read the file content
    fileReader.onload = function (fileLoadedEvent) {
      base64 = fileLoadedEvent.target.result;
      const metadataCharacters = 28;
      const base64Resume = base64.slice(metadataCharacters);
      uploadResume({
        variables: { resume: base64Resume },
      });
    };
    // Convert data to base64
    fileReader.readAsDataURL(resume);

    /*
    if (update) {
      Data.callMutationAndRedirectToHome(
        modifyInterviewee,
        Data.fromInputToUpdateInterviewee(resume, school),
        history
      )
    } else {
      Data.callMutationAndRedirectToHome(
        modifyInterviewee,
        Data.fromInputToCreateInterviewee(resume, school),
        history
      )
    }*/
  };

  const data = {
    resume,
    setResume,
    school,
    setSchoolValue,
    onFileChange,
    schoolsOptions,
  };

  return (
    <UIMainContainer>
      <IntervieweeProfile
        mutation={editInterviewee}
        onMutationError={null}
        data={data}
      />
    </UIMainContainer>
  );
};

export default IntervieweeEditProfile;
