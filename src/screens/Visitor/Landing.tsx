import VisitorAbout from 'components/Visitor/Landing/LandingAbout';
import VisitorCollaborator from 'components/Visitor/Landing/LandingCollaborators';
import VisitorFAQ from 'components/Visitor/Landing/LandingFAQ';
import VisitorFooter from 'components/Visitor/Landing/LandingFooter';
import VisitorHeader from 'components/Visitor/Landing/LandingHeader';
import VisitorIntro from 'components/Visitor/Landing/LandingIntro';
import VisitorProgress from 'components/Visitor/Landing/LandingProgress';
import VisitorSections from 'components/Visitor/Landing/LandingSections';
import VisitorSettings from 'components/Visitor/Landing/LandingSettings';
import VisitorTeam from 'components/Visitor/Landing/LandingTeam';
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background:
      theme.palette.type === 'dark'
        ? theme.palette.background.default
        : theme.palette.background.paper,
  },
  containerWrap: {
    marginTop: -40,
    '& > section': {
      position: 'relative',
    },
  },
}));

const Login = ({ onToggleDark }: { onToggleDark: Function }) => {
  const classes = useStyles();
  return (
    <div>
      <VisitorSettings onToggleDark={onToggleDark} />
      <VisitorHeader />
      <div className={classes.mainWrap}>
        <section id="home">
          <VisitorIntro />
        </section>
        <section id="about">
          <VisitorAbout />
        </section>
        <section id="Collaborators">
          <VisitorCollaborator />
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
  );
};

export default Login;
