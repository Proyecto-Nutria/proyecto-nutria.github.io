import React from "react"
import { Button, Image, Box } from "grommet"
import UIBoxResponsive from "components/Visitor/Landing/LandingBoxResponsive"
import TextSection from "components/Visitor/Landing/LandingTextSection"

import infoImage from "assets/imgs/Visitor/info.png"

const VisitorInfo = (props: any) => (
  <UIBoxResponsive background="light-1">
    <TextSection
      gap={"2em"}
      level={"1"}
      title={"Believe in your otter side"}
      text={
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }
    >
      <Button primary label="Sign Up" onClick={props.signUpOnClick} />
    </TextSection>
    <Box flex align="center" justify="center">
      <Image fit="contain" src={infoImage} />
    </Box>
  </UIBoxResponsive>
)

export default VisitorInfo
