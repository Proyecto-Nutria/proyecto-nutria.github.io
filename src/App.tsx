import React, { useContext, Fragment } from "react"
import { Box, Grommet, Main as MainGrommet, ThemeType } from "grommet"

import { ApolloProvider } from "@apollo/client"

import getClient from "./utils/configs/graphqlClientConfig"

import { HashRouter, Switch, Route, Redirect } from "react-router-dom"

import UserProvider, { UserContext } from "./utils/providers/UserProvider"

import Login from "./screens/Login"
import Main from "./screens/Main"
import InterviewsInterviewee from "./screens/InterviewsInterviewee/InterviewsInterviewee"
import InterviewsInterviewer from "./screens/InterviewsInterviewer/InterviewsInterviewer"
import IntervieweeDetails from "./screens/IntervieweeDetails/IntervieweeDetails"
import Landing from "screens/Visitor/Landing"
import SignUp from "./screens/SignUp"
import EditProfile from "./screens/Interviewee/EditProfile"
import { default as ScheduleInterviewee } from "./screens/Interviewee/Schedule"
import { default as ScheduleInterviewer } from "./screens/Interviewer/Schedule"
import Testing from "./screens/TestingApollo"
import MainFeedbackHelper from "./FeedbackHelper/MainFeedbackHelper.bs"

import theme from "./assets/themes/global"
import AppHeader from "./screens/Main/Header"

const Routes = () => {
  const user = useContext(UserContext)
  const FeedbackHelper = MainFeedbackHelper.make;
  // todo: if user not logged redirect to /login"

  return (
    <HashRouter>
      <Switch>
        <Route exact={true} path="/">
          <Landing />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signUp">
          <SignUp />
        </Route>
        {user && (
          <Fragment>
            <Box height="100%" width="100%" direction="column" background="background-back">
              <AppHeader />
              <MainGrommet
                flex={{ grow: 1, shrink: 1 }}
                overflow={{ vertical: "auto" }}
                pad="medium"
              >
                <Route path="/home">
                  <Main />
                </Route>
                <Route path="/intervieweeDetails">
                  <IntervieweeDetails />
                </Route>
                <Route path="/interviewsInterviewee">
                  <InterviewsInterviewee />
                </Route>
                <Route path="/interviewsInterviewer">
                  <InterviewsInterviewer />
                </Route>
                <Route path="/editProfile">
                  <EditProfile />
                </Route>
                <Route path="/scheduleInterviewee">
                  <ScheduleInterviewee />
                </Route>
                <Route path="/scheduleInterviewer">
                  <ScheduleInterviewer />
                </Route>
                <Route path="/feedbackHelper">
                  <FeedbackHelper />
                </Route>
                <Route path="/testing">
                  <Testing />
                </Route>
              </MainGrommet>
            </Box>
          </Fragment>
        )}
        <Redirect to="/" />
      </Switch>
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
