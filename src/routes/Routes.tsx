// UI
import AppHeader from 'components/User/UserHeader';
import MainFeedbackHelper from 'FeedbackHelper/MainFeedbackHelper.bs';
import { useIsFirstLogin, useUserRole } from 'hooks/UserHooks';
import React, { Fragment } from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import {
    EDIT_PATH, FEEDBACK_HELPER_PATH, HOME_PATH, LANDING_PATH, LOGIN_PATH, USER_PAST_INTERVIEWS_PATH,
    WEE_INCOMING_INTERVIEWS_PATH, WEE_MOCK_PATH, WER_INCOMING_INTERVIEWS_PATH, WER_MATCH_PATH
} from 'routes/paths';
// Interviewee
import IntervieweeMain from 'screens/Interviewee/Board';
import IntervieweeIncomingInterviews from 'screens/Interviewee/IncomingInterviews';
import IntervieweeEditProfile from 'screens/Interviewee/Profile';
import IntervieweeMock from 'screens/Interviewee/Schedule';
// Interviewer
import InterviewerMain from 'screens/Interviewer/Board';
import InterviewerIncomingInterviews from 'screens/Interviewer/IncomingInterviews';
import InterviewerInterviewPools from 'screens/Interviewer/Pool';
import InterviewerEditProfile from 'screens/Interviewer/Profile';
//User
import PastInterviews from 'screens/User/PastInterviews';
// Visitor
import Landing from 'screens/Visitor/Landing';
import { UserRole } from 'structure/types/userTypes';

const Routes = ({ onToggleDark }: { onToggleDark: Function }) => {
  const userRole = useUserRole();
  const firstLogin = useIsFirstLogin();
  const FeedbackHelper = MainFeedbackHelper.make;

  return (
    <HashRouter>
      <Switch>
        <Route exact={true} path={LANDING_PATH}>
          <Landing onToggleDark={onToggleDark} />
        </Route>

        {firstLogin && (
          <Fragment>
            <AppHeader />
            <Switch>
              <Route
                path={EDIT_PATH}
                component={
                  userRole == UserRole.Interviewee
                    ? IntervieweeEditProfile
                    : InterviewerEditProfile
                }
              />
              <Redirect to={EDIT_PATH} push={true} />
            </Switch>
          </Fragment>
        )}

        {userRole == UserRole.Interviewee && (
          <Fragment>
            <AppHeader />
            <Switch>
              <Route path={HOME_PATH} component={IntervieweeMain} />
              <Route path={WEE_MOCK_PATH} component={IntervieweeMock} />
              <Route
                path={WEE_INCOMING_INTERVIEWS_PATH}
                component={IntervieweeIncomingInterviews}
              />
              <Route
                path={USER_PAST_INTERVIEWS_PATH}
                component={PastInterviews}
              />

              <Route path={EDIT_PATH} component={IntervieweeEditProfile} />
              <Redirect to={LANDING_PATH} push={true} />
            </Switch>
          </Fragment>
        )}

        {userRole == UserRole.Interviewer && (
          <Fragment>
            <AppHeader />

            <Switch>
              <Route path={HOME_PATH} component={InterviewerMain} />
              <Route
                path={WER_MATCH_PATH}
                component={InterviewerInterviewPools}
              />
              <Route
                path={WER_INCOMING_INTERVIEWS_PATH}
                component={InterviewerIncomingInterviews}
              />
              <Route
                path={USER_PAST_INTERVIEWS_PATH}
                component={PastInterviews}
              />

              <Route path={EDIT_PATH} component={InterviewerEditProfile} />

              <Route path={FEEDBACK_HELPER_PATH} component={FeedbackHelper} />
              <Redirect to={LANDING_PATH} push={true} />
            </Switch>
          </Fragment>
        )}
        {/*TODO: use a 404 page instead of Landing when a route is not found*/}
        <Route component={Landing} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
