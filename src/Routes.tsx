import React, { useContext, Fragment } from "react"
import { HashRouter, Switch, Route, Redirect } from "react-router-dom"

import Auth from "utils/helpers/Auth"
import { UserContext } from "utils/providers/UserProvider"

import {
  LANDING_PATH,
  LOGIN_PATH,
  HOME_PATH,
  EDIT_PATH,
  WEE_INCOMING_INTERVIEWS_PATH,
  WEE_MOCK_PATH,
  WER_INCOMING_INTERVIEWS_PATH,
  WER_MATCH_PATH,
  HELPER_PATH,
  USER_PAST_INTERVIEWS_PATH,
} from "utils/constants/paths"

// UI
import AppHeader from "components/User/UserHeader"

// Visitor
import Landing from "screens/Visitor/Landing"
import Login from "screens/Visitor/Login"

//User
import PastInterviews from "screens/User/PastInterviews"

// Interviewee
import IntervieweeMain from "screens/Interviewee/Board"
import IntervieweeIncomingInterviews from "screens/Interviewee/IncomingInterviews"
import IntervieweeMock from "screens/Interviewee/Schedule"
import IntervieweeEditProfile from "screens/Interviewee/Profile"

// Interviewer
import InterviewerMain from "screens/Interviewer/Board"
import InterviewerMatchInterview from "screens/Interviewer/Match"
import InterviewerIncomingInterviews from "screens/Interviewer/IncomingInterviews"
import InterviewerEditProfile from "screens/Interviewer/Profile"

import MainFeedbackHelper from "FeedbackHelper/MainFeedbackHelper.bs"

const Routes = () => {
  const user = useContext(UserContext)
  const { interviewer, interviewee } = Auth.getRole()
  const FeedbackHelper = MainFeedbackHelper.make

  return (
    <HashRouter>
      <Switch>
        <Route exact={true} path={LANDING_PATH}>
          <Landing />
        </Route>
        <Route path={LOGIN_PATH}>
          <Login />
        </Route>

        {user && interviewee && (
          <Fragment>
            <AppHeader />

            <Route path={HOME_PATH}>
              <IntervieweeMain />
            </Route>
            <Route path={WEE_MOCK_PATH}>
              <IntervieweeMock />
            </Route>
            <Route path={WEE_INCOMING_INTERVIEWS_PATH}>
              <IntervieweeIncomingInterviews />
            </Route>
            <Route path={USER_PAST_INTERVIEWS_PATH}>
              <PastInterviews />
            </Route>

            <Route path={EDIT_PATH}>
              <IntervieweeEditProfile />
            </Route>
          </Fragment>
        )}

        {user && interviewer && (
          <Fragment>
            <AppHeader />

            <Route path={HOME_PATH}>
              <InterviewerMain />
            </Route>
            <Route path={WER_MATCH_PATH}>
              <InterviewerMatchInterview />
            </Route>
            <Route path={WER_INCOMING_INTERVIEWS_PATH}>
              <InterviewerIncomingInterviews />
            </Route>
            <Route path={USER_PAST_INTERVIEWS_PATH}>
              <PastInterviews />
            </Route>

            <Route path={EDIT_PATH}>
              <InterviewerEditProfile />
            </Route>

            <Route path={HELPER_PATH}>
              <FeedbackHelper />
            </Route>
          </Fragment>
        )}
        <Redirect to={LANDING_PATH} />
      </Switch>
    </HashRouter>
  )
}

export default Routes
