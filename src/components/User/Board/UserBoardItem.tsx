import React from "react"

import { Image, Box, Text, Button } from "grommet"

const BoardItem = (props: any) => (
  <Box
    round
    direction="row"
    pad="medium"
    gap="medium"
    elevation="large"
    background="main-box"
  >
    <Box height="medium" width="large">
      <Image fit="contain" fill src={props.img} />
    </Box>
    <Box justify="center" gap="large">
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
        veniam tempora quam molestias, distinctio maiores veritatis officiis?
        Qui dolorem, voluptatem excepturi necessitatibus doloremque placeat,
        laboriosam, quisquam amet vitae soluta natus!
      </Text>
      <Button
        fill={false}
        primary
        alignSelf="start"
        label={props.label}
        onClick={props.onClick}
      />
    </Box>
  </Box>
)

export default BoardItem
