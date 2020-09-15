import React, { useContext } from "react";
import { Grommet } from "grommet";

import { HashRouter, Switch, Route } from "react-router-dom";

import UserProvider, { UserContext } from "./providers/UserProvider";

import Login from "./screens/Login";
import Home from "./screens/Main";
import Landing from "./screens/Landing";
import SignUp from "./screens/SignUp";
import EditProfile from "./screens/EditProfile";

const Routes = () => {
  const user = useContext(UserContext);

  return (
    <HashRouter>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signUp">
          <SignUp />
        </Route>
        {user && (
          <Route path="/home">
            <Home />
          </Route>
        )}
        <Route path="/editProfile">
          <EditProfile />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </HashRouter>
  );
};

const App: React.FunctionComponent = () => {
  const theme = {
    global: {
      font: {
        family: "Inter",
        size: "1.2rem",
      },
    },
  };

  return (
    <Grommet theme={theme}>
      <UserProvider>
        <Routes />
      </UserProvider>
    </Grommet>
  );
};

export default App;
