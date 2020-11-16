import React from "react"

import { Box, Table, TableHeader, TableBody, TableRow, TableCell } from "grommet"

type realInterviewData = { company: String; rol: String; date: String }

const InterviewsTable = (props: { realInterviews: Array<realInterviewData> }) => {

  return (
    <Box fill={true} >
        <Table margin="medium" style={{ width: "auto" }}>
            <TableHeader>
            <TableRow>
                <TableCell scope="col" border="bottom">
                Company
                </TableCell>
                <TableCell scope="col" border="bottom">
                Position
                </TableCell>
                <TableCell scope="col" border="bottom">
                Date
                </TableCell>
            </TableRow>
            </TableHeader>
            <TableBody>
            {props.realInterviews.map((realInterview: realInterviewData) => (
                <TableRow key={realInterview.company.toString()}>
                <TableCell scope="row">
                    <strong>{realInterview.company}</strong>
                </TableCell>
                <TableCell>{realInterview.rol}</TableCell>
                <TableCell>{realInterview.date}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </Box>
  )
}

export default InterviewsTable
