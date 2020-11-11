import React from "react"
import {
  Heading,
  Box,
  Text,
  DataTable,
  CheckBox,
  ColumnConfig,
  Anchor,
} from "grommet"

import {
  IIncomingInterviewsData,
  IIncomingInterviewsProps,
} from "structure/interfaces/IIncomingInterviews"

const InterviewsIncoming = (props: IIncomingInterviewsProps) => {
  const nameColumn: ColumnConfig<IIncomingInterviewsData>[] = props.showName
    ? [
        {
          align: "center",
          property: "name",
          header: <Text>Interviewee</Text>,
          sortable: false,
          search: true,
        },
      ]
    : []

  return (
    <Box pad="xlarge">
      <Heading>Incoming Interviews</Heading>
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
          onClickRow={event => props.onRowClick(event.datum)}
          sort={props.sort}
          onSort={props.onSort}
          columns={[
            ...nameColumn,
            {
              property: "date",
              header: <Text>Day</Text>,
            },
            {
              property: "time",
              header: <Text>Hour (24 hrs)</Text>,
            },
            {
              property: "document",
              header: <Text>Document</Text>,
              sortable: false,
              render: ({ document }) => (
                <Anchor color="brand" href={document} label="Link" />
              ),
            },
            {
              property: "place",
              header: <Text>Place</Text>,
            },
            {
              property: "score",
              header: <Text>Score</Text>,
            },
            {
              property: "confirmed",
              header: <Text>Confirmed</Text>,
              render: ({ confirmed }) => (
                <Box>
                  <CheckBox checked={confirmed} />
                </Box>
              ),
            },
          ]}
        />
      </Box>
    </Box>
  )
}

export default InterviewsIncoming
