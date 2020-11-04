import React from "react"
import { Avatar, Box } from "grommet"
import BoxResponsive from "components/Visitor/Landing/LandingBoxResponsive"
import TextSection from "components/Visitor/Landing/LandingTextSection"

const VisitorContributors = () => (
  <BoxResponsive background="">
    <TextSection
      level={"3"}
      gap={""}
      title={"Contributors"}
      text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit,"}
    >
      <Box direction="row" pad="medium" align="center" gap="small" justify="center">
        <Avatar background="dark-2" size="xlarge">
          S
        </Avatar>
        <Avatar background="dark-2" size="xlarge">
          R
        </Avatar>
        <Avatar background="dark-2" size="xlarge">
          D
        </Avatar>
        <Avatar background="dark-2" size="xlarge">
          A
        </Avatar>
      </Box>
    </TextSection>
  </BoxResponsive>
)

export default VisitorContributors
