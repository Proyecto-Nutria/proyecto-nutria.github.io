import React from "react"

import { Grommet, ThemeType } from "grommet"
import yaosTheme from "assets/themes/yaos"

import { ApolloProvider } from "@apollo/client"
import getApolloClient from "services/graphqlService"

import AuthProvider from "providers/AuthProvider"
import Routes from "Routes"

const App: React.FunctionComponent = () => {
  return (
    <Grommet theme={yaosTheme as ThemeType}>
      <AuthProvider>
        <ApolloProvider client={getApolloClient()}>
          <Routes />
        </ApolloProvider>
      </AuthProvider>
    </Grommet>
  )
}

export default App
