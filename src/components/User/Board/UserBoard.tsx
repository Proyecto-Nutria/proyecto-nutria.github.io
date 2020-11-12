import React from "react"

import { Heading, Box } from "grommet"
import BoardItem from "components/User/Board/UserBoardItem"

const UserBoard = (props: any) => (
  <Box pad="xlarge">
    <Heading level="4">{props.heading}</Heading>
    <Box direction="column" gap="small">
      {props.elements.map((information: any) => (
        <BoardItem
          key={information.label}
          img={information.img}
          label={information.label}
          onClick={information.onClick}
        />
      ))}
    </Box>
  </Box>
)

export default UserBoard
