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
        <Route exact={true} path={LANDING_PATH} component={Landing}/>
        <Route path={LOGIN_PATH} component={Login}/>

        {user && interviewee && (
          <Fragment>
            <AppHeader />

            <Route path={HOME_PATH} component={IntervieweeMain}/>
            <Route path={WEE_MOCK_PATH} component={IntervieweeMock}/>
            <Route path={WEE_INCOMING_INTERVIEWS_PATH} component={IntervieweeIncomingInterviews}/>
            <Route path={USER_PAST_INTERVIEWS_PATH} component={PastInterviews}/>

            <Route path={EDIT_PATH} component={IntervieweeEditProfile}/>
          </Fragment>
        )}

        {user && interviewer && (
          <Fragment>
            <AppHeader />

            <Route path={HOME_PATH} component={InterviewerMain}/>
            <Route path={WER_MATCH_PATH} component={InterviewerMatchInterview}/>
            <Route path={WER_INCOMING_INTERVIEWS_PATH} component={InterviewerIncomingInterviews}/>
            <Route path={USER_PAST_INTERVIEWS_PATH} component={PastInterviews}/>

            <Route path={EDIT_PATH} component={InterviewerEditProfile}/>

            <Route path={HELPER_PATH} component={FeedbackHelper}/>
          </Fragment>
        )}
        <Redirect to={LANDING_PATH} />
      </Switch>
    </HashRouter>
  )
}

export default Routes
