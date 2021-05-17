import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import VisitorSettings from "components/Visitor/Landing/LandingSettings";
import VisitorHeader from "components/Visitor/Landing/LandingHeader";
import VisitorIntro from "components/Visitor/Landing/LandingIntro";
import VisitorAbout from "components/Visitor/Landing/LandingAbout";
import VisitorContributor from "components/Visitor/Landing/LandingContributors";
import VisitorTeam from "components/Visitor/Landing/LandingTeam";
import VisitorSections from "components/Visitor/Landing/LandingSections";
import VisitorProgress from "components/Visitor/Landing/LandingProgress";
import VisitorFAQ from "components/Visitor/Landing/LandingFAQ";
import VisitorFooter from "components/Visitor/Landing/LandingFooter";

const useStyles = makeStyles(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.type === 'dark' ? theme.palette.background.default : theme.palette.background.paper,
  },
  containerWrap: {
    marginTop: -40,
    '& > section': {
      position: 'relative'
    }
  },
}));

const Login = ({ onToggleDark }: { onToggleDark: Function }) => {
  const classes = useStyles();
  return (
    <div >
      <VisitorSettings onToggleDark={onToggleDark}/>
      <VisitorHeader />
      <div className={classes.mainWrap}>
        <section id="home">
          <VisitorIntro />
        </section>
        <section id="about">
          <VisitorAbout />
        </section>
        <section id="contributors">
          <VisitorContributor />
          <VisitorTeam />
        </section>
        <section id="sections">
          <VisitorSections />
        </section>
        <section id="progress">
          <VisitorProgress />
        </section>
        <section id="faq">
          <VisitorFAQ />
        </section>
        <VisitorFooter />
      </div>
    </div>
  )
};

export default Login;
