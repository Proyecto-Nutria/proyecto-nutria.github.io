import React, { useContext } from "react"
import { Grommet, ThemeType } from "grommet"

import { ApolloProvider } from "@apollo/client"

import getClient from "./configGraphqlClient"

import { HashRouter, Switch, Route } from "react-router-dom"

import UserProvider, { UserContext } from "./providers/UserProvider"

import Login from "./screens/Login"
import Home from "./screens/Main"
import InterviewList from "./screens/InterviewList"
import Landing from "./screens/Landing"
import SignUp from "./screens/SignUp"
import EditProfile from "./screens/Interviewee/EditProfile"
import Schedule from "./screens/Interviewee/Schedule"
import Testing from "./screens/TestingApollo"

import theme from "./generalStyles/theme"

const Routes = () => {
  const user = useContext(UserContext)

  return (
    <HashRouter>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signUp">
          <SignUp />
        </Route>
        {user && (
          <Route path="/home">
            <Home />
          </Route>
        )}
        <Route path="/interviews">
          <InterviewList />
        </Route>
        <Route path="/editProfile">
          <EditProfile />
        </Route>
        <Route path="/schedule">
          <Schedule />
        </Route>
        <Route path="/testing">
          <Testing />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </HashRouter>
  )
}

const client = getClient()
const App: React.FunctionComponent = () => {
  return (
    <Grommet theme={theme as ThemeType}>
      <UserProvider>
        <ApolloProvider client={client}>
          <Routes />
        </ApolloProvider>
      </UserProvider>
    </Grommet>
  )
}

export default App
