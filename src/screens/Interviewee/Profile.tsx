// @ts-nocheck
import React from 'react';
import { useHistory } from 'react-router-dom';

import { useMutation, useLazyQuery } from '@apollo/client';
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

  const [uploadResume, { loading, data }] = useLazyQuery(UPLOAD_FOLDER);

  const [resume, setResume] = React.useState(null);
  const [school, setSchoolValue] = React.useState('');
  const schoolsOptions = Data.getSchools();

  const onFileChange = (event: any) => {
    setResume(event.target.files[0]);
  };

  const editInterviewee = () => {
    var fileReader = new FileReader();
    var base64;
    fileReader.onload = fileLoadedEvent => {
      base64 = fileLoadedEvent.target.result;
      const metadataCharacters = 28;
      const base64Resume = base64.slice(metadataCharacters);
      uploadResume({
        variables: { resume: base64Resume },
      });
    };
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

  if (loading) return <p>Loading ...</p>;

  if (data) {
    console.log('File uploaded');
    console.log(data.upload_resume_and_create_folder.id);
  }

  const allData = {
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
        data={allData}
      />
    </UIMainContainer>
  );
};

export default IntervieweeEditProfile;
