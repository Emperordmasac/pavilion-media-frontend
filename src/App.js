import * as React from 'react';

import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

import HomePage from 'scenes/home-page';
import LoginPage from 'scenes/login-page';
import ProfilePage from 'scenes/profile-page/Index';
import { themeSettings } from 'theme';

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = React.useMemo(() => createTheme(themeSettings(mode)), [mode]);

  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className='app'>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route
              path='/home'
              element={isAuth ? <HomePage /> : <Navigate to='/' />}
            />
            <Route
              path='/profile/:userId'
              element={isAuth ? <ProfilePage /> : <Navigate to='/' />}
            />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
