import clsx from 'clsx';
import React from 'react';
import { useHistory } from 'react-router-dom';

import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import { MENU_SECTIONS } from '../../../utils/constants/landing';
import useStyles from './LandingHeaderStyle';
import { useAuth0 } from '@auth0/auth0-react';

const VisitorMobileMenu = ({ onToggleDrawer, isOpen }: { onToggleDrawer: Function, isOpen: boolean }) => {
  const { loginWithRedirect } = useAuth0();
  const handleToggleDrawer = () => {
    onToggleDrawer();
  };

  const history = useHistory();
  function handleLoginClick() {
    loginWithRedirect({});
  }

  const classes = useStyles();
  return (
    <SwipeableDrawer
      open={isOpen}
      onClose={handleToggleDrawer}
      onOpen={handleToggleDrawer}
      classes={{
        paper: classes.paperNav
      }}
    >
      <div
        className={classes.mobileNav}
        role="presentation"
        onClick={handleToggleDrawer}
        onKeyDown={handleToggleDrawer}
      >
        <div className={clsx(classes.menu, isOpen && classes.menuOpen)}>
          <List component="nav">
            {MENU_SECTIONS.map((item, index) => (
              <ListItem
                button
                component="a"
                href={`#${item.path}`}
                key={index.toString()}
                style={{ animationDuration: index * 0.15 + 's' }}
              >
                <ListItemText primary={item.name} className={classes.menuList}/>
              </ListItem>
            ))}
            <Divider className={classes.dividerSidebar} />
            <ListItem
              button
              component="a"
              onClick={handleLoginClick}
              style={{ animationDuration: MENU_SECTIONS.length * 0.15 + 's' }}
            >
              <ListItemText primary={"Login"} className={classes.menuList}/>
            </ListItem>
          </List>
        </div>
      </div>
    </SwipeableDrawer>
  );
}

export default VisitorMobileMenu
