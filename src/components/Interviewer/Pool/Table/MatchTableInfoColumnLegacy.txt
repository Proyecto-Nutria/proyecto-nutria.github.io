import React from "react"

import { Anchor } from "grommet"

const MatchTableInfoColumn = () => {
  return {
    property: "folder",
    size: "small",
    render: (row: any) => (
      <Anchor
        alignSelf="center"
        label="Resume"
        href={row.folder}
        target="_blank"
        size="small"
      />
    ),
  }
}

export default MatchTableInfoColumn
