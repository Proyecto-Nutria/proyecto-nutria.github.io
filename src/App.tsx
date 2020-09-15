import React from "react";
import { Grommet } from "grommet";

import { HashRouter, Switch, Route } from "react-router-dom";

import Login from "./screens/Login";
import Main from "./screens/Main";

const App = () => {
  const theme = {
    global: {
      font: {
        family: "Inter",
        size: "1.2rem",
      },
    },
  };

  return (
    <HashRouter>
      <Grommet theme={theme}>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Grommet>
    </HashRouter>
  );
};

export default App;
