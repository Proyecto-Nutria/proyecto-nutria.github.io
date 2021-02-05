import React from 'react';
import UIMainContainer from 'components/UI/UIBoxContainer';
import VisitorHeader from 'components/Visitor/Landing/LandingHeader';
import VisitorInfo from 'components/Visitor/Landing/LandingInfo';
import VisitorFooter from 'components/Visitor/Landing/LandingFooter';
import VisitorAbout from 'components/Visitor/Landing/LandingAbout';
import VisitorContributor from 'components/Visitor/Landing/LandingContributors';

const Login = () => {
  return (
    <UIMainContainer>
      <VisitorHeader />
      <VisitorInfo signUpOnClick={() => /* history.push(WEE_BOARD_PATH)*/ {}} />
      <VisitorAbout />
      <VisitorContributor />
      <VisitorFooter />
    </UIMainContainer>
  );
};

export default Login;
