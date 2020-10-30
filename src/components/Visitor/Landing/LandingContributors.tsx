import React from "react"
import { Avatar, Box, Heading, Paragraph } from 'grommet'

const VisitorContributors = () => (
    <Box
    direction="column"
    align='center'
    justify='center'
    height="25em"
    border={{ color: 'brand'}}>
        <Heading margin="none" level="3" >Contributors</Heading>
        <Paragraph margin="none">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut
        labore et dolore magna aliqua.
        </Paragraph>
        <Box direction="row" pad="large" align="center" gap="small">
        <Avatar background="dark-2" size="xlarge">
          S
        </Avatar>
        <Avatar background="dark-2" size="xlarge">
          LS
        </Avatar>
        <Avatar background="dark-2" size="xlarge">
          JF
        </Avatar>
        <Avatar background="dark-2" size="xlarge">
          SY
        </Avatar>
      </Box>
    </Box>
)

export default VisitorContributors