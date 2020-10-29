import React from "react";
import { Button } from "grommet"

const UIButton = (props:any) => (
    <Button
        primary
        style={{ maxWidth: "15rem" }}
        label={props.label}
        onClick={props.onClick}
    />
)

export default UIButton