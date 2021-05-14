import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
  const { logout, loginWithRedirect } = useAuth0();

  return (
    <section>
      <button onClick={() => loginWithRedirect({})}>
        Log in
      </button>
      <button onClick={() => logout()}>
        Log out
      </button>
    </section>
  );
};

export default Login;
