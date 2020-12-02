import React from "react"

import { Box, Text } from "grommet"

const MatchTablePersonColumn = () => {
  return {
    property: "name",
    header: (
      <Text weight="bold" size="large">
        Interviewee
      </Text>
    ),
    search: true,
    size: "small",
    render: (row: any) => (
      <Box>
        <Text>{row.name}</Text>
        <Text size="xsmall">{row.languages.join(", ")}</Text>
        <Text size="xsmall">
          {row.interviewType} - {row.role}
        </Text>
      </Box>
    ),
  }
}

export default MatchTablePersonColumn
