import React from "react"
import { Box, Heading, Paragraph } from 'grommet'

const VisitorAbout = () => (
    <Box
    direction="column"
    align='center'
    justify='center'
    height="25em"
    border={{ color: 'brand'}}>
        <Heading margin="none" level="3" >Our Mission</Heading>
        <Paragraph margin="none">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut
        labore et dolore magna aliqua.
        </Paragraph>
    </Box>
)

export default VisitorAbout