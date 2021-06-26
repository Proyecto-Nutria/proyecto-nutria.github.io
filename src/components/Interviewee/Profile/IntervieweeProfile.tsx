import UIMainContainer from 'components/UI/UIBoxContainer';
import React from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const IntervieweeProfile = (props: any) => {
  const mutationFunction = props.mutation;
  let inputFile: HTMLInputElement | null = null;

  // Triggers input file click
  const uploadClick = (event: any) => {
    event.preventDefault();
    //@ts-expect-error
    inputFile.click();
  };

  return (
    <UIMainContainer>
      <Typography variant="h4">Nutri Profile</Typography>
      <br />
      <form
        onSubmit={event => {
          event.preventDefault();
          mutationFunction();
        }}
      >
        <Box>
          <InputLabel id="demo-simple-select-label">School</InputLabel>
          <Select
            fullWidth
            value={props.data.school}
            onChange={event => props.data.setSchoolValue(event.target.value)}
          >
            {props.data.schoolsOptions.map((name: any, id: any) => (
              <MenuItem key={id} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
          <input
            type="file"
            id="file"
            style={{ display: 'none' }}
            onChange={props.data.onFileChange}
            ref={input => {
              inputFile = input as HTMLInputElement;
            }}
          />
          <br /> <br />
          <Button onClick={uploadClick} startIcon={<CloudUploadIcon />}>
            Upload Your Resume
          </Button>
          <br /> <br />
          <Button type="submit" variant="contained" color="primary">
            Update profile
          </Button>
        </Box>
      </form>
    </UIMainContainer>
  );
};

export default IntervieweeProfile;
