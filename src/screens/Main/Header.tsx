import React from "react";
import { Text, Nav, Anchor, Box } from "grommet";
import { Header } from "grommet-controls";
import * as Icons from "grommet-icons";
interface IHeaderProps {
  position: "fixed" | "absolute" | "sticky" | "static" | "relative" | undefined;
}

const MyHeader = (props: IHeaderProps) => {
  return (
    <Header position={props.position} background="brand" justify="between" pad="xsmall">
      <Box pad="small">
        <Text>{"Yet An Otter System"}</Text>
      </Box>
      <Nav direction="row" background="brand" pad="none">
        <Anchor icon={<Icons.User />} />
        <Anchor icon={<Icons.Notification />} />
        <Anchor icon={<Icons.ChatOption />} />
      </Nav>
    </Header>
  );
};

export default MyHeader;
