import React, { useState } from "react"

import { Grid, TextInput, Box, CheckBox, TextArea, Button } from "grommet"

import style from "./signUp.module.css"

const SignUp = () => {
  const [valueName, setNameValue] = useState("")
  const [checked, setChecked] = useState(true)
  const [valueAboutYou, setAboutYouValue] = useState("")

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
          reverse={true}
          onChange={event => setChecked(event.target.checked)}
        />
      </Box>
      {checked && (
        <Box gap="xsmall">
          Describe yourself:
          <TextArea
            placeholder="Maximum 250 characters"
            value={valueAboutYou}
            onChange={event => setAboutYouValue(event.target.value)}
          />
        </Box>
      )}
      <Box>
        <Button className={style.buttonSignUp} primary label="Sign Up" />
      </Box>
    </Grid>
  )
}

export default SignUp
