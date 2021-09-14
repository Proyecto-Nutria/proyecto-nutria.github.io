import IntervieweeProfile from 'components/Interviewee/Profile/IntervieweeProfile';
// import UserError from 'components/User/UserError';
import UserLoading from 'components/User/UserLoading';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { HOME_PATH } from 'routes/paths';
import { INTERVIEWEE_PROFILE_COPY } from 'utils/constants/copy';
import { UPLOAD_RESUME_TO_FOLDER_OR_UPDATE } from 'utils/constants/endpoints';
import { SLICE_METADATA, UNIVERSITIES } from 'utils/constants/values';

import { useMutation } from '@apollo/client';
import { useEffect } from 'react';
import { UserStatusContext } from 'providers/UserStatusProvider';

const IntervieweeEditProfile = () => {
  let history = useHistory();
  const { isNewUser, setIsNewUser } = useContext(UserStatusContext);

  const [
    uploadResumeOrUpdate,
    { loading: uploadResumeToFolderRLoading, data: responseStatus },
  ] = useMutation(UPLOAD_RESUME_TO_FOLDER_OR_UPDATE);

  const [resume, setResume] = React.useState(new Blob());
  const [school, setSchoolValue] = React.useState('');
  const [resumeName, setResumeName] = React.useState('');
  const [resumeLoaded, setResumeLoaded] = React.useState(false);
  const [ableToRedirect, setAbleToRedirect] = React.useState(true);
  const schoolsOptions = Object.keys(UNIVERSITIES);

  useEffect(() => {
    if (
      responseStatus?.upload_resume_and_create_folder?.result === 200 &&
      ableToRedirect
    ) {
      setIsNewUser(false);
      setAbleToRedirect(false);
      history.push(HOME_PATH);
    }
  }, [
    responseStatus,
    setIsNewUser,
    ableToRedirect,
    setAbleToRedirect,
    history,
  ]);

  const onFileChange = (event: any) => {
    const file = event.target.files[0];
    setResume(file);
    setResumeName(file.name);
    setResumeLoaded(true);
  };

  const editInterviewee = () => {
    var fileReader = new FileReader();
    var base64: string | ArrayBuffer | null | undefined = null;

    // Event handler executed when the load event is fired
    fileReader.onload = fileLoadedEvent => {
      base64 = fileLoadedEvent?.target?.result;
      if (base64 && resumeLoaded && school) {
        const base64Resume = base64.slice(SLICE_METADATA);
        uploadResumeOrUpdate({
          variables: {
            resume: base64Resume,
            firstTime: isNewUser,
            school: school,
          },
        });
      }
    };

    //readAsDataURL is used to read the contents of the specified Blob or File.
    fileReader.readAsDataURL(resume);
  };

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
