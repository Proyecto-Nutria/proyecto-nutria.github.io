import React from 'react';
import { withRouter } from 'react-router';
import { useHistory } from 'react-router-dom';
import { EDIT_PATH, HOME_PATH } from 'routes/paths';

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
  const history = useHistory();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.title}>
            <Button onClick={() => history.push(HOME_PATH)}>Nutria</Button>
          </div>

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
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(AppHeader);
