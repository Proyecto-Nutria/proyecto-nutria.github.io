import React, { useContext, Fragment } from "react"
import { HashRouter, Switch, Route, Redirect } from "react-router-dom"

import { UserContext } from "utils/providers/UserProvider"
import {
  LANDING_PATH,
  LOGIN_PATH,
  SIGNUP_PATH,
  EDIT_PATH,
  WEE_BOARD_PATH,
  WEE_DETAIL_PATH,
  WEE_INTERVIEWS_PATH,
  WEE_MOCK_PATH,
  WER_INTERVIEWS_PATH,
  WER_MATCH_PATH,
  HELPER_PATH,
} from "utils/constants/paths"

// UI
import AppHeader from "components/User/UserHeader"

// Visitor
import Landing from "screens/Visitor/Landing"
import Login from "screens/Visitor/Login"

// Interviewee
import IntervieweeMain from "screens/Interviewee/Board"
import InterviewsInterviewee from "screens/Interviewee/IncomingInterviews"
import IntervieweeDetails from "screens/Interviewee/IntervieweeDetails"
import { default as ScheduleInterviewee } from "screens/Interviewee/Schedule"
import EditProfile from "screens/Interviewee/EditProfile"

// Interviewer
import InterviewerMain from "screens/Interviewer/Board"
import SignUp from "screens/Interviewer/SignUp"
import InterviewsInterviewer from "screens/Interviewer/IncomingInterviews"
import { default as ScheduleInterviewer } from "screens/Interviewer/Match"

// Root
import MainFeedbackHelper from "FeedbackHelper/MainFeedbackHelper.bs"

const Routes = () => {
  const user = useContext(UserContext)
  const FeedbackHelper = MainFeedbackHelper.make
  // TODO: if user not logged redirect to /login"

  return (
    <HashRouter>
      <Switch>
        <Route exact={true} path={LANDING_PATH}>
          <Landing />
        </Route>
        <Route path={LOGIN_PATH}>
          <Login />
        </Route>
        <Route path={SIGNUP_PATH}>
          <SignUp />
        </Route>
        {user && (
          <Fragment>
            <AppHeader />
            <Route path={WEE_BOARD_PATH}>
              <IntervieweeMain />
            </Route>
            <Route path={WEE_DETAIL_PATH}>
              <IntervieweeDetails />
            </Route>
            <Route path={WEE_INTERVIEWS_PATH}>
              <InterviewsInterviewee />
            </Route>
            <Route path={WER_INTERVIEWS_PATH}>
              <InterviewsInterviewer />
            </Route>
            <Route path={EDIT_PATH}>
              <EditProfile />
            </Route>
            <Route path={WEE_MOCK_PATH}>
              <ScheduleInterviewee />
            </Route>
            <Route path={WER_MATCH_PATH}>
              <ScheduleInterviewer />
            </Route>
            <Route path={HELPER_PATH}>
              <FeedbackHelper />
            </Route>
          </Fragment>
        )}
        <Redirect to="/" />
      </Switch>
    </HashRouter>
  )
}

export default Routes
