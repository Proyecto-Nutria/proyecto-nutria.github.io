import React from 'react';
import { AppState, Auth0Provider } from '@auth0/auth0-react';

const AuthProvider: React.FunctionComponent = ({ children }) => {
  const onRedirectCallback = (_: AppState) => {
    window.history.replaceState(
      {},
      document.title,
      window.location.origin + '/#/home'
    );
  };

  //TODO:Use useEffect to get the user metadata

  return (
    <Auth0Provider
      domain="nutria-project.us.auth0.com"
      clientId="lUu4je56sqk7yOnBJbb1ssvxSZOxby91"
      audience="https://nutria-core-backend-v2.herokuapp.com/v1/graphql"
      redirectUri={window.location.origin + '/#/home'}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProvider;
