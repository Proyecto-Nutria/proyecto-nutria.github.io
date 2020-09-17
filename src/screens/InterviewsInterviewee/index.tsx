import React from "react";
import { DataTable, Text, Box, CheckBox } from "grommet";

interface IInterviewsInterviewee {
  date: string;
  time: string;
  document: string;
  place: string;
  confirmed: boolean;
}

interface IInterviewsIntervieweeProps {
  data: [IInterviewsInterviewee];
}

const InterviewsInterviewee = (props: IInterviewsIntervieweeProps) => {
  return (
    <Box align="center" pad="large">
      <DataTable
        alignSelf="center"
        columns={[
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

export default InterviewsInterviewee;
