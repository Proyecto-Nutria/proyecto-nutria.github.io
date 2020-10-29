import React from "react";
import { Box } from "grommet"

const UIMainContainer = (props:any) => (
    <Box
    fill
    align="center"
    justify="center"
    background="background-back">
        {props.children}
    </Box>
)

export default UIMainContainer