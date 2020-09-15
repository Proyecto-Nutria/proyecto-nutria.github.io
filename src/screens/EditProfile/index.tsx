import React from "react";

import { Grid, TextInput, Box, Select, Button } from "grommet";

const EditProfile = () => {
  const [valueName, setNameValue] = React.useState('');
  const [school, setSchooleValue] = React.useState('');

  return (
    <Grid gap="medium" margin="xlarge">
      <Box basis="medium">
        <TextInput
          placeholder="Name"
          value={valueName}
          onChange={event => setNameValue(event.target.value)}
        />
      </Box>
      <Box>
        <Select
            placeholder="Select one"
            options={['ESCOM', 'UNAM', 'Other']}
            value={school}
            onChange={({ option }) => setSchooleValue(option)}
        />
      </Box>
      <Box >
        <Button primary label="Sign Up" />
      </Box>
    </Grid>
  );
}

export default EditProfile;
