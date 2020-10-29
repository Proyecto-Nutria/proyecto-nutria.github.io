import React, { useContext } from "react"

import { Main, Button, Heading } from "grommet"
import { UserContext } from "../../utils/providers/UserProvider"
import { useHistory } from "react-router-dom"

import UIButton from "components/UI/UIButton"

const Login = () => {
  const user = useContext(UserContext)
  const history = useHistory()

  return (
    <Main pad="large" background="background-back">
      <Heading margin="medium">Pepe Page</Heading>
      {user ? (
        <Button
          style={{ maxWidth: "15rem" }}
          label="Go to home"
          primary
          onClick={() => history.push("/home")}
        />
      ) : (
        <UIButton
          fn={()=> history.push("/login")}
          label="Go to Login" />
        /*<Button
          style={{ maxWidth: "15rem" }}
          label="Go to login"
          primary
          onClick={() => history.push("/login")}
        />*/
      )}
    </Main>
  )
}

export default Login
