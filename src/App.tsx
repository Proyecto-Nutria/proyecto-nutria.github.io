import React from 'react';

import { Grommet, ThemeType } from 'grommet';
import yaosTheme from 'assets/themes/yaos';

import AuthProvider from 'providers/AuthProvider';
import GraphProvider from 'providers/GraphProvider';
import Routes from 'routes/Routes';

const App: React.FunctionComponent = () => {
  return (
    <Grommet theme={yaosTheme as ThemeType}>
      <AuthProvider>
        <GraphProvider>
          <Routes />
        </GraphProvider>
      </AuthProvider>
    </Grommet>
  );
};

export default App;
