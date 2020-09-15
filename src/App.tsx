import React from "react";
import { Grommet } from "grommet";

import { HashRouter, Switch, Route } from "react-router-dom";

import Login from "./screens/Login";
import Home from "./screens/Main";
import InterviewList from "./screens/InterviewList";
import Landing from "./screens/Landing";

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
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/interviews">
            <InterviewList />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Grommet>
    </HashRouter>
  );
};

export default App;
