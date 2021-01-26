import React from "react"

import { Grommet, ThemeType } from "grommet"
import yaosTheme from "assets/themes/yaos"

import { ApolloProvider } from "@apollo/client"
import getApolloClient from "services/graphqlService"

import UserProvider from "utils/providers/UserProvider"
import Routes from "Routes"

const App: React.FunctionComponent = () => {
  return (
    <Grommet theme={yaosTheme as ThemeType}>
      <UserProvider>
        <ApolloProvider client={getApolloClient()}>
          <Routes />
        </ApolloProvider>
      </UserProvider>
    </Grommet>
  )
}

export default App
