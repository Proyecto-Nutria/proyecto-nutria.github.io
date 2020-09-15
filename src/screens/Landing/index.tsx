import React, { useContext } from "react";

import { Box, Button, Heading } from "grommet";
import { UserContext } from "../../providers/UserProvider";
import { useHistory } from "react-router-dom";

const Login = () => {
  const user = useContext(UserContext);
  const history = useHistory();

  return (
    <>
      <Heading margin="none">Landing Page</Heading>
      {user ? (
        <Button
          label="Go to home"
          primary
          onClick={() => history.push("/home")}
        />
      ) : (
        <Button
          label="Go to login"
          primary
          onClick={() => history.push("/login")}
        />
      )}
    </>
  );
};

export default Login;
