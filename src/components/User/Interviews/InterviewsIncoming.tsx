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
  const confirmationColumn: ColumnConfig<IIncomingInterviewsData>[] = props.isInterviewee
    ? [
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
      ]
    : []

  return (
    <Box pad="xlarge">
      <Heading level="3">Incoming Interviews</Heading>
      <Box
        round
        pad="large"
        align="center"
        background="main-box"
        elevation="large"
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
              render: ({ document }) =>
                document !== "" ? (
                  <Anchor
                    color="brand"
                    target="_blank"
                    href={document}
                    label="Link"
                  />
                ) : (
                  <></>
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
            ...confirmationColumn,
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
