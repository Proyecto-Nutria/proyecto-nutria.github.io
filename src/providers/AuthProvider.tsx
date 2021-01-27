import React from "react"
import { Auth0Provider } from "@auth0/auth0-react"

const AuthProvider: React.FunctionComponent = ({ children }) => {
  const onRedirectCallback = (appState: any) => {
    //TODO: Create logic to redirect to corresponding screen
    window.history.replaceState(
      {},
      document.title,
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    )
  }

  //TODO:Use useEffect to get the user metadata

  return (
    <Auth0Provider
      domain="nutria-project.us.auth0.com"
      clientId="lUu4je56sqk7yOnBJbb1ssvxSZOxby91"
      audience="https://nutria-core-backend.herokuapp.com/v1/graphql"
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  )
}

export default AuthProvider
