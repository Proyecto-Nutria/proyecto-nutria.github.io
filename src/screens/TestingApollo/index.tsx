import React from "react"
import { useQuery, gql } from "@apollo/client"

const NAMES = gql`
  {
    persons {
      name
    }
  }
`

const Schedule = () => {
  const { loading, error, data } = useQuery(NAMES)

  if (loading) return <p>Loading...</p>
  if (error) {
    console.log(error)
    return <p>Error :(</p>
  }

  return (
    <>
      {data.persons.map(({ name }: { name: string }) => (
        <h1 key={name}> {name}</h1>
      ))}
    </>
  )
}

export default Schedule
