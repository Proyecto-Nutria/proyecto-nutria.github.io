import React, { useContext, Fragment } from "react"
import { HashRouter, Switch, Route, Redirect } from "react-router-dom"

import { Grommet, ThemeType } from "grommet"

import { ApolloProvider } from "@apollo/client"

import getClient from "utils/configs/graphqlClientConfig"

import UserProvider, { UserContext } from "utils/providers/UserProvider"

import yaosTheme from "assets/themes/yaos"

// UI
import AppHeader from "components/UI/UIHeader"

// Visitor
import Landing from "screens/Visitor/Landing"
import Login from "screens/Visitor/Login"

// Interviewee
import Main from "screens/Interviewee/Board"
import InterviewsInterviewee from "screens/Interviewee/IncomingInterviews"
import IntervieweeDetails from "screens/Interviewee/IntervieweeDetails"
import { default as ScheduleInterviewee } from "screens/Interviewee/Schedule"
import EditProfile from "screens/Interviewee/EditProfile"

// Interviewer
import SignUp from "screens/Interviewer/SignUp"
import InterviewsInterviewer from "screens/Interviewer/IncomingInterviews"
import { default as ScheduleInterviewer } from "screens/Interviewer/Match"

// Root

import Testing from "screens/TestingApollo"
import MainFeedbackHelper from "FeedbackHelper/MainFeedbackHelper.bs"

const Routes = () => {
  const user = useContext(UserContext)
  const FeedbackHelper = MainFeedbackHelper.make
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
            <AppHeader />
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
