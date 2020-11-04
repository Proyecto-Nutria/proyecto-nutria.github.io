import React from "react"
import { Text, Nav, Anchor, Box } from "grommet"
import * as Icons from "grommet-icons"
import { useHistory } from "react-router-dom"

const AppHeader = () => {
  const history = useHistory()
  return (
    <Box
      flex={{ grow: 0, shrink: 0 }}
      direction="row"
      justify="between"
      background="background-front"
      align="center"
    >
      <Box pad="small" onClick={() => history.push("/home")}>
        <Text>{"Yet An Otter System"}</Text>
      </Box>
      <Nav direction="row" pad="xsmall">
        <Anchor color="brand" icon={<Icons.User />} />
        <Anchor color="brand" icon={<Icons.Notification />} />
        <Anchor color="brand" icon={<Icons.ChatOption />} />
      </Nav>
    </Box>
  )
}

export default AppHeader