import React from "react"
import { Heading, Box, Text, DataTable, Anchor } from "grommet"

const InterviewsPast = (props: any) => {
  return (
    <Box pad="xlarge">
      <Heading>Past Interviews</Heading>
      <Box
        round
        pad="large"
        align="center"
        background="dark-1"
        alignSelf="center"
        flex={{ shrink: 0 }}
      >
        <DataTable
          size="medium"
          data={props.data}
          sort={props.sort}
          onSort={props.onSort}
          primaryKey={false}
          columns={[
            {
              property: "date",
              header: <Text>Date</Text>,
            },
            {
              property: "document",
              header: <Text>Document</Text>,
              sortable: false,
              render: ({ document }) => (
                <Anchor color="brand" href={document} label="Link" />
              ),
            },
          ]}
        />
      </Box>
    </Box>
  )
}

export default InterviewsPast
