import UIMainContainer from 'components/UI/UIBoxContainer';
import React from 'react';
import { IntervieweeProfileProps } from 'utils/ts/propsInterfaces';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const IntervieweeProfile: React.FC<IntervieweeProfileProps> = ({
  copy,
  school,
  schoolSet,
  allSchools,
  onFileChanged,
  editIntervieweeMutation,
}) => {
  let inputFile: HTMLInputElement | null = null;

  // Triggers input file click
  const uploadClick = (event: any) => {
    event.preventDefault();
    inputFile?.click();
  };

  return (
    <UIMainContainer>
      <Typography variant="h4">{copy.header}</Typography>
      <br />
      <form
        onSubmit={event => {
          event.preventDefault();
          editIntervieweeMutation();
        }}
      >
        <Box>
          <InputLabel id="demo-simple-select-label">
            {copy.form.schoolLabel}
          </InputLabel>
          <Select
            fullWidth
            value={school}
            onChange={event => schoolSet(event.target.value)}
          >
            {allSchools.map((name: any, id: any) => (
              <MenuItem key={id} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
          <input
            type="file"
            id="file"
            style={{ display: 'none' }}
            onChange={onFileChanged}
            ref={input => {
              inputFile = input as HTMLInputElement;
            }}
          />
          <br /> <br />
          <Button onClick={uploadClick} startIcon={<CloudUploadIcon />}>
            {copy.form.uploadResumeBtn}
          </Button>
          <br /> <br />
          <Button type="submit" variant="contained" color="primary">
            {copy.form.updateProfileBtn}
          </Button>
        </Box>
      </form>
    </UIMainContainer>
  );
};

export default IntervieweeProfile;
