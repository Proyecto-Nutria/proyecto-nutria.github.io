import React, { useContext } from "react"

import { UserContext } from "utils/providers/UserProvider"
import { useHistory } from "react-router-dom"

import UIButton from "components/UI/UIButton"
import UIMainContainer from "components/UI/UIMainContainer"

const Login = () => {
  const user = useContext(UserContext)
  const history = useHistory()

  return (
    <UIMainContainer>
      {user ? (
        <UIButton
          label="Go to home"
          onClick={() => history.push("/home")}
        />
      ) : (
        <UIButton
          label="Go to Login"
          onClick={()=> history.push("/home")} //TODO: Change it to /login in tagged version
          />
      )}
    </UIMainContainer>
  )
}

export default Login
