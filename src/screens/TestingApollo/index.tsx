import React from "react"
import { useQuery, gql } from "@apollo/client"

const NAMES = gql`
  query persons {
    name
  }
`

const Schedule = () => {
  const token = localStorage.getItem("token") ?? ""

  fetch("https://us-central1-nutria-system.cloudfunctions.net/graphql=query=Persons{name}", {
    headers: new Headers({ Authorization: token }),
  })
    .then(x => x.json())
    .then(data => console.log(data))

  return null
}

export default Schedule
