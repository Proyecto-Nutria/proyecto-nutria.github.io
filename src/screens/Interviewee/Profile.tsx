import IntervieweeProfile from 'components/Interviewee/Profile/IntervieweeProfile';
// import UserError from 'components/User/UserError';
import UserLoading from 'components/User/UserLoading';
import { useIsFirstLogin } from 'hooks/UserHooks';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { HOME_PATH } from 'routes/paths';
import { INTERVIEWEE_PROFILE_COPY } from 'utils/constants/copy';
import {
  // CREATE_INTERVIEWEE,
  // UPDATE_INTERVIEWEE,
  UPLOAD_RESUME_TO_FOLDER_OR_UPDATE,
} from 'utils/constants/endpoints';
import { SLICE_METADATA, UNIVERSITIES } from 'utils/constants/values';

import { useLazyQuery /*, useMutation */ } from '@apollo/client';
import { useEffect } from 'react';

const IntervieweeEditProfile = () => {
  let history = useHistory();
  const newUser = useIsFirstLogin();
  // let profileMutation = CREATE_INTERVIEWEE;
  useEffect(() => {
    if (!newUser) {
      history.push(HOME_PATH);
    }
  }, [newUser, history]);
  // if (!newUser) profileMutation = UPDATE_INTERVIEWEE;

  const [
    uploadResumeOrUpdate,
    { loading: uploadResumeToFolderRLoading, data: responseStatus },
  ] = useLazyQuery(UPLOAD_RESUME_TO_FOLDER_OR_UPDATE);

  const [resume, setResume] = React.useState(new Blob());
  const [school, setSchoolValue] = React.useState('');
  const [resumeName, setResumeName] = React.useState('');
  const [resumeLoaded, setResumeLoaded] = React.useState(false);
  const schoolsOptions = Object.keys(UNIVERSITIES);

  const onFileChange = (event: any) => {
    const file = event.target.files[0];
    setResume(file);
    setResumeName(file.name);
    setResumeLoaded(true);
  };
  console.log('usernew', newUser);

  const editInterviewee = () => {
    var fileReader = new FileReader();
    var base64: string | ArrayBuffer | null | undefined = null;

    // Event handler executed when the load event is fired
    fileReader.onload = fileLoadedEvent => {
      base64 = fileLoadedEvent?.target?.result;
      console.log('school', school);
      if (base64 && resumeLoaded && school) {
        const base64Resume = base64.slice(SLICE_METADATA);
        uploadResumeOrUpdate({
          variables: {
            resume: base64Resume,
            firstTime: newUser,
            school: school,
          },
        });
      }
    };

    //readAsDataURL is used to read the contents of the specified Blob or File.
    fileReader.readAsDataURL(resume);
  };

  useEffect(() => {
    if (responseStatus) {
      window.location.reload();
    }
  }, [responseStatus, history]);

  if (uploadResumeToFolderRLoading) return <UserLoading />;

  return (
    <IntervieweeProfile
      copy={INTERVIEWEE_PROFILE_COPY}
      school={school}
      schoolSet={setSchoolValue}
      allSchools={schoolsOptions}
      resumeName={resumeName}
      onFileChanged={onFileChange}
      editIntervieweeMutation={editInterviewee}
    />
  );
};

export default IntervieweeEditProfile;
