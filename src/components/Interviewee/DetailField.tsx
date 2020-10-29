import { Box, Heading } from "grommet";
import React from "react"

export interface DetailFieldProps {
  property: string;
  value: React.ReactNode;
}

const DetailField = (props: DetailFieldProps) => {
  return (
    <>
      <Box direction="row" align="center">
        <Heading margin="5px" level="5">{props.property}:</Heading>
        <Heading margin="5px" level="5">{props.value}</Heading>
      </Box>
    </>
  )
};

export default DetailField;