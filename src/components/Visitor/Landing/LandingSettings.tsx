import React from 'react';

import Fab from '@material-ui/core/Fab';
import { alpha, makeStyles } from '@material-ui/core/styles';
import Brightness4Icon from '@material-ui/icons/Brightness4';

const useStyles = makeStyles(theme => ({
  settingsWrap: {},
  fab: {
    bottom: '50vh',
    right: theme.spacing(2),
    borderColor: theme.palette.primary.main,
    border: '1px solid',
    display: 'flex',
    padding: '4px',
    zIndex: 9999,
    position: 'fixed',
    backgroundColor: theme.palette.background.paper,
    boxShadow:
      '0px 2px 4px -1px rgba(128,128,128, 0.2), 0px 4px 5px 0px rgba(128,128,128, 0.14), 0px 1px 10px 0px rgba(128,128,128, 0.12)',
    flexDirection: 'column',
    backdropFilter: 'saturate(180%) blur(20px)',
    '&:hover': {
      backgroundColor: alpha(theme.palette.text.secondary, 0.05),
    },
    '& svg': {
      fill: theme.palette.text.secondary,
    },
  },
}));

const VisitorSettings = ({ onToggleDark }: { onToggleDark: Function }) => {
  const handleToggleDark = () => {
    onToggleDark();
  };

  const classes = useStyles();
  return (
    <Fab size="small" onClick={handleToggleDark} className={classes.fab}>
      <Brightness4Icon />
    </Fab>
  );
};

export default VisitorSettings;
