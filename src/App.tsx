import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { purple } from '@material-ui/core/colors';

import AuthProvider from 'providers/AuthProvider';
import GraphProvider from 'providers/GraphProvider';
import Routes from 'routes/Routes';

// TODO: Migrate the theme to a proper file
const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: purple[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});

const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <GraphProvider>
          <Routes />
        </GraphProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
