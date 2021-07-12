import React from 'react';
import { withRouter } from 'react-router';
import { useHistory } from 'react-router-dom';
import { EDIT_PATH, HOME_PATH } from 'routes/paths';

import { useAuth0 } from '@auth0/auth0-react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const AppHeader = () => {
  const { isAuthenticated, logout } = useAuth0();

  const history = useHistory();
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <div className={classes.title}>
          <Button onClick={() => history.push(HOME_PATH)}>Nutria</Button>
        </div>

        {isAuthenticated && (
          <Button
            color="inherit"
            onClick={() =>
              history.push({
                pathname: EDIT_PATH,
                state: {
                  firstTime: false,
                },
              })
            }
          >
            Profile
          </Button>
        )}
        {isAuthenticated && (
          <Button color="inherit" onClick={() => logout({})}>
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(AppHeader);
