import React from "react";
import { DataTable, Text, Box, CheckBox } from "grommet";
// import './interviewsInterviewer.module.css'

interface IInterviewsInterviewer {
  name: string;
  date: string;
  time: string;
  document: string;
  place: string;
  confirmed: boolean;
}

interface IInterviewsInterviewerProps {
  data: [IInterviewsInterviewer];
}

const InterviewsInterviewer = (props: IInterviewsInterviewerProps) => {
  return (
    <Box align="center" pad="small">
      <DataTable
        size="medium"
        alignSelf="center"
        onClickRow={(event) => {
          // redirect to next page
          console.log(event);
          return;
        }}
        columns={[
          {
            align: "center",
            property: "name",
            header: <Text>Name</Text>,
          },
          {
            align: "center",
            property: "date",
            header: <Text>Date</Text>,
          },
          {
            align: "center",
            property: "time",
            header: <Text>Time</Text>,
          },
          {
            align: "center",
            property: "document",
            header: <Text>Document</Text>,
          },
          {
            align: "center",
            property: "place",
            header: <Text>Place</Text>,
          },
          {
            align: "center",
            property: "confirmed",
            header: <Text>Confirmed</Text>,
            render: ({ confirmed }) => {
              return (
                <Box alignSelf="center" align="center">
                  <CheckBox checked={confirmed} />
                </Box>
              );
            },
          },
        ]}
        data={props.data}
      />
    </Box>
  );
};

export default InterviewsInterviewer;
