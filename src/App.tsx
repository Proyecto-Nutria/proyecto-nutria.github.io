import React, { useContext } from "react";
import { Grommet } from "grommet";

import { HashRouter, Switch, Route } from "react-router-dom";

import UserProvider, { UserContext } from "./providers/UserProvider";

import Login from "./screens/Login";
import Home from "./screens/Main";
import Landing from "./screens/Landing";
import SignUp from "./screens/SignUp";
import EditProfile from "./screens/EditProfile";

const App = () => {
  const theme = {
    global: {
      font: {
        family: "Inter",
        size: "1.2rem",
      },
    },
  };

  const user = useContext(UserContext);

  return (
    <HashRouter>
      <UserProvider>
        <Grommet theme={theme}>
          <Switch>
            <Route path="/">
              <Landing />
            </Route>
            {user == null ? (
              <>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/signUp">
                  <SignUp />
                </Route>
              </>
            ) : (
              <>
                <Route path="/home">
                  <Home />
                </Route>
                <Route path="/editProfile">
                  <EditProfile />
                </Route>
              </>
            )}
          </Switch>
        </Grommet>
      </UserProvider>
    </HashRouter>
  );
};

export default App;
