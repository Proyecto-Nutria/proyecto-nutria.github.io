import { Box, Text, DataTable, CheckBox, ColumnConfig, Anchor } from "grommet"
import React, { useState } from "react"

const InterviewInfoList = (props: any) => {
  return (
    <Box
      align="center"
      pad="small"
      background="background-front"
      alignSelf="center"
      round={true}
      flex={{ shrink: 0 }}
      overflow={{ vertical: "auto" }}
    ></Box>
  )
}

export default InterviewInfoList
