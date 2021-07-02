import UIMainContainer from 'components/UI/UIBoxContainer';
import React from 'react';
import { BoardProps } from 'utils/ts/propsInterfaces';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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

const UserBoard: React.FC<BoardProps> = ({ copy }): JSX.Element => {
  const classes = useStyles();
  return (
    <UIMainContainer>
      {copy.map((information: any, id: any) => (
        <div className={classes.root} key={id}>
          <Paper className={classes.paper}>
            <Grid container spacing={3}>
              <img className={classes.img} src={information.img} />
              <Grid item xs={12} sm container>
                <Grid
                  item
                  xs
                  container
                  direction="column"
                  spacing={1}
                  justify="center"
                >
                  <Grid item>
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
    </UIMainContainer>
  );
};

export default UserBoard;
