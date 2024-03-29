import './i18n/config';

import AuthProvider from 'providers/AuthProvider';
import UserStatusProvider from 'providers/UserStatusProvider';
import GraphProvider from 'providers/GraphProvider';
import React, { useState } from 'react';
import Routes from 'routes/Routes';

import CssBaseline from '@material-ui/core/CssBaseline';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import themeOptions from './assets/themes/yaos';

const App: React.FunctionComponent = () => {
  const [theme, setTheme] = useState({
    ...themeOptions(
      typeof Storage !== 'undefined'
        ? localStorage.getItem('themeMode') === 'light'
          ? 'light'
          : 'dark'
        : 'light'
    ),
  });

  const toggleDarkTheme = () => {
    const newPaletteType = theme.palette?.type === 'light' ? 'dark' : 'light';
    localStorage.setItem(
      'themeMode',
      theme.palette?.type === 'light' ? 'dark' : 'light'
    );
    setTheme({
      ...themeOptions(newPaletteType),
    });
  };

  const muiTheme = createTheme(theme);

  return (
    <ThemeProvider theme={muiTheme}>
      <AuthProvider>
        <UserStatusProvider>
          <GraphProvider>
            <CssBaseline />
            <Routes onToggleDark={toggleDarkTheme} />
          </GraphProvider>
        </UserStatusProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
