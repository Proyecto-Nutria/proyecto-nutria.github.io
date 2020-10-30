import React from "react"
import { Button, Paragraph, Heading, Box } from 'grommet'

const VisitorInfo = (props:any) => (
    <Box
    direction="row"
    height="25em"
    border={{ color: 'brand'}}>
        <Box
        flex align='center'
        justify='center'
        gap="2em">
            <Heading
            margin="none"
            level="2" >
                Believe in your otter side
            </Heading>
            <Paragraph margin="none">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut
            labore et dolore magna aliqua.
            </Paragraph>
            <Button
            primary
            style={{ maxWidth: "15rem" }}
            label="Sign Up"
            onClick={props.signUponClick}
            />
        </Box>
        <Box
        flex
        background='light-2'
        align='center'
        justify='center'>
        </Box>
    </Box>
)

export default VisitorInfo