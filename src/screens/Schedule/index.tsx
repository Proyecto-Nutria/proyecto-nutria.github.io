import React from "react"
import { useQuery, gql } from "@apollo/client"

const NAMES = gql`
  query persons {
    name
  }
`

const Schedule = () => {
  const { loading, error, data } = useQuery(NAMES)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  console.log(data)

  return <>hello</>
}

export default Schedule
