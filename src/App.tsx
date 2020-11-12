import React from "react"

import { Grommet, ThemeType } from "grommet"
import yaosTheme from "assets/themes/yaos"

import { ApolloProvider } from "@apollo/client"
import getClient from "services/graphqlService"

import UserProvider from "utils/providers/UserProvider"
import Routes from "Routes"

const client = getClient()
const App: React.FunctionComponent = () => {
  return (
    <Grommet theme={yaosTheme as ThemeType}>
      <UserProvider>
        <ApolloProvider client={client}>
          <Routes />
        </ApolloProvider>
      </UserProvider>
    </Grommet>
  )
}

export default App
