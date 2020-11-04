import React from "react"
import { Heading, Paragraph, Box } from "grommet"

const LandingTextSection = (props: any) => (
  <Box flex align="center" justify="center" gap={props.gap}>
    <Heading level={props.level}>{props.title}</Heading>
    <Paragraph>{props.text}</Paragraph>
    {props.children}
  </Box>
)

export default LandingTextSection
