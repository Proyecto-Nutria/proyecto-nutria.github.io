import React from "react"

import { Button } from "grommet"

const MatchTableInfoColumn = () => {
  return {
    property: "folder",
    size: "small",
    render: (row: any) => (
      <Button
        alignSelf="center"
        label="Resume"
        href={"https://drive.google.com/drive/folders/" + row.folder}
        target="_blank"
        size="small"
        secondary
      />
    ),
  }
}

export default MatchTableInfoColumn
