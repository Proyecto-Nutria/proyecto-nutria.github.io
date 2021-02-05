import React from 'react';
import { Button, Image, Box } from 'grommet';
import UIBoxResponsive from 'components/Visitor/Landing/LandingBoxResponsive';
import TextSection from 'components/Visitor/Landing/LandingTextSection';

import infoImage from 'assets/imgs/Visitor/info.png';

// TODOl Remove auth0 from here
import { useAuth0 } from '@auth0/auth0-react';

const VisitorInfo = (props: any) => {
  const { logout, loginWithRedirect } = useAuth0();

  return (
    <UIBoxResponsive background="light-1">
      <button className="auth-button" onClick={() => loginWithRedirect({})}>
        Log in
      </button>
      <button className="auth-button" onClick={() => logout()}>
        Log out
      </button>
      <TextSection
        gap={'2em'}
        level={'1'}
        title={'Believe in your otter side'}
        text={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
      >
        <Button primary label="Sign Up" onClick={props.signUpOnClick} />
      </TextSection>
      <Box flex align="center" justify="center">
        <Image fit="contain" src={infoImage} />
      </Box>
    </UIBoxResponsive>
  );
};

export default VisitorInfo;
