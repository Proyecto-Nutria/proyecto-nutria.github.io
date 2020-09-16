import React from "react"
import { useQuery, gql } from "@apollo/client"

const NAMES = gql`
  query persons {
    name
  }
`

const Schedule = () => {
  return null
}

export default Schedule
