import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'connected-react-router';

import configureStore from './store/configureStore';
import Routes from './Routes';

const store = configureStore();
const history = createBrowserHistory();

const Сomponent = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(<Сomponent />, document.getElementById('root'));
