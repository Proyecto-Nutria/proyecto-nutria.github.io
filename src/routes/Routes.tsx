// UI
import AppHeader from 'components/User/UserHeader';
import { useUserRole } from 'hooks/UserHooks';
import { UserStatusContext } from 'providers/UserStatusProvider';
import { Fragment, useContext } from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import {
  EDIT_PATH,
  HOME_PATH,
  LANDING_PATH,
  USER_INCOMING_INTERVIEWS_PATH,
  USER_PAST_INTERVIEWS_PATH,
  WEE_MOCK_PATH,
  WER_MATCH_PATH,
} from 'routes/paths';
// Interviewee
import IntervieweeMain from 'screens/Interviewee/Board';
import IntervieweeEditProfile from 'screens/Interviewee/Profile';
import IntervieweeMock from 'screens/Interviewee/Schedule';
import WEEIncomingInterviewsContainer from 'screens/Interviewee/WEEIncomingInterviewsContainer';
// Interviewer
import InterviewerMain from 'screens/Interviewer/Board';
import InterviewerInterviewPools from 'screens/Interviewer/Pool';
import InterviewerEditProfile from 'screens/Interviewer/Profile';
//User
import PastInterviews from 'screens/User/PastInterviews';
// Visitor
import Landing from 'screens/Visitor/Landing';
import { UserRole } from 'utils/constants/values';

const Routes = ({ onToggleDark }: { onToggleDark: Function }) => {
  const userRole = useUserRole();
  const { isNewUser: firstLogin } = useContext(UserStatusContext);

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
                  userRole === UserRole[UserRole.interviewee]
                    ? IntervieweeEditProfile
                    : InterviewerEditProfile
                }
              />
              <Redirect to={EDIT_PATH} push={true} />
            </Switch>
          </Fragment>
        )}

        {userRole === UserRole[UserRole.interviewee] && (
          <Fragment>
            <AppHeader />
            <Switch>
              <Route path={HOME_PATH} component={IntervieweeMain} />
              <Route path={WEE_MOCK_PATH} component={IntervieweeMock} />
              <Route
                path={USER_INCOMING_INTERVIEWS_PATH}
                component={WEEIncomingInterviewsContainer}
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

        {userRole === UserRole[UserRole.interviewer] && (
          <Fragment>
            <AppHeader />

            <Switch>
              <Route path={HOME_PATH} component={InterviewerMain} />
              <Route
                path={WER_MATCH_PATH}
                component={InterviewerInterviewPools}
              />
              <Route
                path={USER_INCOMING_INTERVIEWS_PATH}
                component={WEEIncomingInterviewsContainer}
              />
              <Route
                path={USER_PAST_INTERVIEWS_PATH}
                component={PastInterviews}
              />

              <Route path={EDIT_PATH} component={InterviewerEditProfile} />

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
