import React from "react"

import { Box, Text, Button } from "grommet"

import type { personData } from "structure/types/dataTypes"

const MatchTablePersonColumn = (setShowAbout: any) => {
  return {
    property: "name",
    header: (
      <Text weight="bold" size="large">
        Interviewee
      </Text>
    ),
    search: true,
    size: "small",
    render: (row: personData) => (
      <Box
        border={{
          color: "brand",
          size: "small",
        }}
        background="background-contrast"
        round={true}
        fill={true}
      >
        <Button
          key={row.uid.toString()}
          size="small"
          fill
          onClick={_ => {
            // setQueryAbout(makeQuery(row.uid.toString())) // Query to get user info
            setShowAbout(true)
          }}
        >
          <Text>{row.name}</Text>
          <Text size="50%">{row.programmingLanguages.join(", ")}</Text>
        </Button>
      </Box>
    ),
  }
}

export default MatchTablePersonColumn
