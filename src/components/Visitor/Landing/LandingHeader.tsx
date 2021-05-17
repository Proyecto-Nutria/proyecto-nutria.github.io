import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Button from "@material-ui/core/Button";
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Scrollspy from 'react-scrollspy';
import clsx from "clsx";
import VisitorMobileMenu from "./LandingMobileMenu";
import useStyles from './LandingHeaderStyle';

import logo from './../../../assets/imgs/logo.svg';
import { MENU_SECTIONS } from './../../../utils/constants/landing';
import './vendors/hamburger-menu.css';

import { useAuth0 } from '@auth0/auth0-react';

const VisitorHeader = () => {
  const { loginWithRedirect } = useAuth0();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const [fixed, setFixed] = useState(false);
  let flagFixed = false;
  const handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagFixed = (scroll > 80);
    if (flagFixed !== newFlagFixed) {
      setFixed(newFlagFixed);
      flagFixed = newFlagFixed;
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  
  const classes = useStyles();
  return (
  <React.Fragment>
    { isMobile && (<VisitorMobileMenu isOpen={openDrawer} onToggleDrawer={toggleDrawer} />) }
    <AppBar
      component="div"
      position="relative"
      id="header"
      className={clsx(
        classes.header,
        fixed && classes.fixed,
        openDrawer && classes.openDrawer
      )}
    >
      <Container fixed={isDesktop}>
        <div className={classes.headerContent}>
          <nav className={classes.navLogo}>
            { isMobile && (
              <IconButton
                onClick={toggleDrawer}
                className={clsx('hamburger hamburger--spin', classes.mobileMenu, openDrawer && 'is-active')}
              >
                <span className="hamburger-box">
                  <span className={clsx(classes.bar, 'hamburger-inner')} />
                </span>
              </IconButton>
            )}
            <div className={classes.logo}>
              <AnchorLink href='#home'>
                <img src={logo} alt="logo" />
                <span>
                  Proyecto Nutria
                </span>
              </AnchorLink>
            </div>
          </nav>
          <nav className={classes.navMenu}>
            {isDesktop && (
              <Scrollspy
                items={MENU_SECTIONS.map(item => item.path)}
                currentClassName="active"
              >
                {MENU_SECTIONS.map((item, index) => (
                    <li key={index.toString()}>
                    <Button component={AnchorLink} href={`#${item.path}`}>
                      <span className={classes.text}>
                        {item.name}
                      </span>
                    </Button>
                  </li>
                ))}
              </Scrollspy>
            )}
          </nav>
          <nav className={clsx(classes.navMenu, classes.navAuth)}>
            <Hidden xsDown>
              <Button onClick={() => loginWithRedirect({})} className={classes.btnWhite} variant="contained">
                Login
              </Button>
            </Hidden>
          </nav>
        </div>
      </Container>
    </AppBar>
  </React.Fragment>
)}

export default VisitorHeader
