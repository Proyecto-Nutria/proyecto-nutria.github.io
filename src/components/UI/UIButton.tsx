import React from "react";
import { Button } from "grommet"

const UIButton = (props:any) => (
    <Button
        style={{ maxWidth: "15rem" }}
        label={props.label}
        primary
        onClick={props.fn}
  />
)

export default UIButton