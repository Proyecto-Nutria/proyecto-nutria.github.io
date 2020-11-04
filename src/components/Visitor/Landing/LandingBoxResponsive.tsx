import React from "react"
import { Box, ResponsiveContext } from "grommet"
import type { Direction } from "types/groometTypes"

const LandingBoxResponsive = (props: any) => (
  <ResponsiveContext.Consumer>
    {size => {
      let responsiveDirection = "row"
      let contentHeight = "25em"
      let pad = "none"
      if (size === "medium" || size === "small") {
        responsiveDirection = "column"
        contentHeight = "40em"
        pad = "0.6em"
      }
      return (
        <Box
          direction={responsiveDirection as Direction}
          height={contentHeight}
          background={props.background}
          pad={pad}
        >
          {props.children}
        </Box>
      )
    }}
  </ResponsiveContext.Consumer>
)

export default LandingBoxResponsive
