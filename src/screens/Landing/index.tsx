import React, { useContext } from "react"

<<<<<<< HEAD
import { Button, Heading } from "grommet";
import { UserContext } from "../../providers/UserProvider";
import { useHistory } from "react-router-dom";
=======
import { Main, Button, Heading } from "grommet"
import { UserContext } from "../../providers/UserProvider"
import { useHistory } from "react-router-dom"
>>>>>>> ee35d4de9dfc001ec87d38c1eb78da706ccf5f21

const Login = () => {
  const user = useContext(UserContext)
  const history = useHistory()

  return (
    <Main pad="large">
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
