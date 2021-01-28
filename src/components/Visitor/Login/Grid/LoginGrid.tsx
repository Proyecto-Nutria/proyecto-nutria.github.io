import React, { useContext } from "react"
import { useAuth0 } from "@auth0/auth0-react"

const LoginGrid = (props: any) => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0()
  return (
    <div>
      <button className="auth-button" onClick={() => loginWithRedirect()}>
        Log in
      </button>

      {isAuthenticated && (
        <>
          <span className="anchor">
            medatada:
            {user["https://hasura.io/jwt/claims"].role}
            {user["https://hasura.io/jwt/claims"].firstTime.toString()}
            <p>
              {user.nickname} {user.app_metadata} {user.accessToken} {user.role}
            </p>
          </span>
          <span> &nbsp;|&nbsp; </span>
          <button className="auth-button" onClick={() => logout()}>
            Log out
          </button>
        </>
      )}
    </div>
  )
}

export default LoginGrid
