import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: '20px',
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
  },
  img: {
    margin: 'auto',
    width: '100%',
    maxWidth: 300,
    height: 'auto',
  },
}));

const UserBoard = (props: any) => {
  const classes = useStyles();
  return (
    <div>
      {props.elements.map((information: any, id: any) => (
        <div className={classes.root} key={id}>
          <Paper className={classes.paper}>
            <Grid container spacing={3}>
              <img className={classes.img} src={information.img} />
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography variant="body2" gutterBottom>
                     {information.description}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={information.onClick}
                    >
                      {information.label}
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
      ))}
    </div>
  );
};

export default UserBoard;
