import React, { useContext } from "react"

import { Main, Button, Heading } from "grommet"
import { UserContext } from "../../providers/UserProvider"
import { useHistory } from "react-router-dom"

const Login = () => {
  const user = useContext(UserContext)
  const history = useHistory()

  return (
    <Main pad="large" background="background-back">
      <Heading margin="medium">Landing Page</Heading>
      {user ? (
        <Button
          style={{ maxWidth: "15rem" }}
          label="Go to home"
          primary
          onClick={() => history.push("/home")}
        />
      ) : (
        <Button
          style={{ maxWidth: "15rem" }}
          label="Go to login"
          primary
          onClick={() => history.push("/login")}
        />
      )}
    </Main>
  )
}

export default Login
