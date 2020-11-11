import React from "react"
import {
  Heading,
  Box,
  Button,
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
              render: ({ confirmed }) => <CheckBox checked={confirmed} />,
            },
            {
              property: "confirm",
              sortable: false,
              render: ({ confirmed, id, timestamp }) => {
                if (confirmed === false) {
                  return (
                    <Button
                      label="confirm"
                      onClick={() => props.confirmMutation(id, timestamp)}
                    />
                  )
                }
                return <></>
              },
            },
            {
              property: "cancel",
              sortable: false,
              render: ({ id, timestamp }) => (
                <Button
                  label="cancel"
                  onClick={() => props.cancelMutation(id, timestamp)}
                />
              ),
            },
          ]}
        />
      </Box>
    </Box>
  )
}

export default InterviewsIncoming
