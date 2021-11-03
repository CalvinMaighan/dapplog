import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ConnectedRouter } from 'connected-react-router';
import App from './App';
import configureStore, { history } from 'core/redux/store/configureStore';
import { Provider } from 'react-redux';
import 'core/language/i18n';

const store = configureStore();

const app = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('app'));
