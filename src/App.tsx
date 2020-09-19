import React, { useContext } from "react"
import { Box, Grommet, Main as MainGrommet, ThemeType } from "grommet"

import { ApolloProvider } from "@apollo/client"

import getClient from "./configGraphqlClient"

import { HashRouter, Switch, Route } from "react-router-dom"

import UserProvider, { UserContext } from "./providers/UserProvider"

import Login from "./screens/Login"
import Home from "./screens/Main"
import InterviewsInterviewee from "./screens/InterviewsInterviewee"
import InterviewsInterviewer from "./screens/InterviewsInterviewer"
import Landing from "./screens/Landing"
import SignUp from "./screens/SignUp"
import EditProfile from "./screens/Interviewee/EditProfile"
import Schedule from "./screens/Interviewee/Schedule"
import Testing from "./screens/TestingApollo"

import theme from "./generalStyles/theme"
import AppHeader from "./screens/Main/Header"

const Routes = () => {
  const user = useContext(UserContext)
  // todo: if user not logged redirect to /login"

  return (
    <HashRouter>
      <Box height="100%" width="100%" direction="column" background="background-back">
        <AppHeader /> {/* todo: add conditions to decide when not to show the header */}
        <MainGrommet flex={{ grow: 1, shrink: 1 }} overflow={{ vertical: "auto" }} pad="medium">
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
            <Route path="/interviewsInterviewee">
              <InterviewsInterviewee />
            </Route>
            <Route path="/interviewsInterviewer">
              <InterviewsInterviewer />
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
        </MainGrommet>
      </Box>
    </HashRouter>
  )
}

const client = getClient()
const App: React.FunctionComponent = () => {
  return (
    <Grommet theme={theme as ThemeType} full={true}>
      <UserProvider>
        <ApolloProvider client={client}>
          <Routes />
        </ApolloProvider>
      </UserProvider>
    </Grommet>
  )
}

export default App
