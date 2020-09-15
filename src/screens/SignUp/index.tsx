import React from "react";

import { Grid, TextInput, Box, CheckBox, TextArea, Button } from "grommet";

const SignUp = () => {
  const [valueName, setNameValue] = React.useState('');
  const [checked, setChecked] = React.useState(true);
  const [valueAboutYou, setAboutYouValue] = React.useState('');

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
        <CheckBox
          checked={checked}
          label="Check if you want to appear as a contributor"
          reverse = {true}
          onChange={(event) => setChecked(event.target.checked)}
        />
      </Box>
      { checked &&
        <Box gap="xsmall">
            Describe yourself:
            <TextArea
              placeholder="Maximum 250 characters"
              value={valueAboutYou}
              onChange={event => setAboutYouValue(event.target.value)}
            />
        </Box>
      }
      <Box >
        <Button primary label="Sign Up" />
      </Box>
    </Grid>
  );
}

export default SignUp;
