// @ts-nocheck

import IntervieweeProfile from 'components/Interviewee/Profile/IntervieweeProfile';
import UserError from 'components/User/UserError';
import UserLoading from 'components/User/UserLoading';
import { useIsFirstLogin } from 'hooks/UserHooks';
import React from 'react';
import {
    CREATE_INTERVIEWEE, UPDATE_INTERVIEWEE, UPLOAD_RESUME_TO_FOLDER_OR_UPDATE
} from 'utils/constants/endpoints';
import Data from 'utils/helpers/Data';

import { useLazyQuery, useMutation } from '@apollo/client';

const newUser = useIsFirstLogin();

const IntervieweeEditProfile = () => {
  let profileMutation = CREATE_INTERVIEWEE;
  if (!newUser) profileMutation = UPDATE_INTERVIEWEE;

  const [uploadResumeOrUpdate, { loading, data }] = useLazyQuery(
    UPLOAD_RESUME_TO_FOLDER_OR_UPDATE
  );
  const [createInterviewee, { error }] = useMutation(CREATE_INTERVIEWEE);

  const [resume, setResume] = React.useState(null);
  const [school, setSchoolValue] = React.useState('');
  const schoolsOptions = Data.getSchools();

  const onFileChange = (event: any) => {
    setResume(event.target.files[0]);
  };

  const editInterviewee = () => {
    var fileReader = new FileReader();
    var base64;
    console.log(newUser);
    fileReader.onload = fileLoadedEvent => {
      base64 = fileLoadedEvent.target.result;
      const metadataCharacters = 28;
      const base64Resume = base64.slice(metadataCharacters);
      uploadResumeOrUpdate({
        variables: {
          resume: base64Resume,
          firstTime: newUser,
        },
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

  if (loading) return <UserLoading />;
  if (error) return <UserError />;

  if (data) {
    if (newUser) {
      createInterviewee({
        variables: {
          folder: data.upload_resume_and_create_folder.id,
          school: school,
        },
      });
    }
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
    <IntervieweeProfile
      mutation={editInterviewee}
      onMutationError={null}
      data={allData}
    />
  );
};

export default IntervieweeEditProfile;
