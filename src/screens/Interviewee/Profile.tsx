import IntervieweeProfile from 'components/Interviewee/Profile/IntervieweeProfile';
import UserError from 'components/User/UserError';
import UserLoading from 'components/User/UserLoading';
import { useIsFirstLogin } from 'hooks/UserHooks';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { HOME_PATH } from 'routes/paths';
import { INTERVIEWEE_PROFILE_COPY } from 'utils/constants/copy';
import {
    CREATE_INTERVIEWEE, UPDATE_INTERVIEWEE, UPLOAD_RESUME_TO_FOLDER_OR_UPDATE
} from 'utils/constants/endpoints';
import { SLICE_METADATA, UNIVERSITIES } from 'utils/constants/values';

import { useLazyQuery, useMutation } from '@apollo/client';

const IntervieweeEditProfile = () => {
  let history = useHistory();
  const newUser = useIsFirstLogin();
  let profileMutation = CREATE_INTERVIEWEE;
  if (!newUser) profileMutation = UPDATE_INTERVIEWEE;

  const [
    uploadResumeOrUpdate,
    { loading: uploadResumeToFolderRLoading, data: gFolderData },
  ] = useLazyQuery(UPLOAD_RESUME_TO_FOLDER_OR_UPDATE);
  const [
    createOrUpdateInterviewee,
    { error: createOrUpdateIntervieweeMutationError },
  ] = useMutation(profileMutation);

  const [resume, setResume] = React.useState(new Blob());
  const [school, setSchoolValue] = React.useState('');
  const schoolsOptions = Object.keys(UNIVERSITIES);

  const onFileChange = (event: any) => {
    setResume(event.target.files[0]);
  };

  const editInterviewee = () => {
    var fileReader = new FileReader();
    var base64: string | ArrayBuffer | null | undefined = null;

    // Event handler executed when the load event is fired
    fileReader.onload = fileLoadedEvent => {
      base64 = fileLoadedEvent?.target?.result;
      if (base64) {
        const base64Resume = base64.slice(SLICE_METADATA);
        uploadResumeOrUpdate({
          variables: {
            resume: base64Resume,
            firstTime: newUser,
          },
        });
      }
    };

    //readAsDataURL is used to read the contents of the specified Blob or File.
    fileReader.readAsDataURL(resume);
  };

  if (uploadResumeToFolderRLoading) return <UserLoading />;
  if (createOrUpdateIntervieweeMutationError) return <UserError />;

  if (gFolderData) {
    if (newUser) {
      createOrUpdateInterviewee({
        variables: {
          information: {
            folder: gFolderData.upload_resume_and_create_folder.id,
            school: school,
          },
        },
      });
    } else {
      createOrUpdateInterviewee({
        variables: {
          school: school,
        },
      });
    }
    //TODO: Bug: Cannot redirect after first time
    history.push(HOME_PATH);
  }

  return (
    <IntervieweeProfile
      copy={INTERVIEWEE_PROFILE_COPY}
      school={school}
      schoolSet={setSchoolValue}
      allSchools={schoolsOptions}
      onFileChanged={onFileChange}
      editIntervieweeMutation={editInterviewee}
    />
  );
};

export default IntervieweeEditProfile;
