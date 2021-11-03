import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, _app, _view } from 'design/styles/global';
import { styles, theme, zindex } from 'design';
import { Redirect, Route, Switch } from 'react-router';
import { USER_LANGUAGE, USER_THEME } from 'core/remix/bubbles';
import { useBubbleOwner } from 'core/hooks/remix/useBubbleOwner';
import { PUBLIC_HOME } from 'core/routes/routes';
import Home from './src/views/home/Home';

const withThemes = ({ palette = 'breakpoint' }) => ({
  ...theme[palette],
  styles,
  zindex,
});

const App = () => {
  const [language, setLanguage] = useBubbleOwner(USER_LANGUAGE, 'en');
  const [theme] = useBubbleOwner(USER_THEME, 'breakpoint');

  return (
    <ThemeProvider theme={withThemes({ palette: theme })}>
      <_app>
        <GlobalStyles />
        <_view>
          <Switch>
            <Route exact path={PUBLIC_HOME} component={() => <Home />} />
            <Redirect to={'/'} />
          </Switch>
        </_view>
      </_app>
    </ThemeProvider>
  );
};

export default App;
