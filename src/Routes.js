import React from 'react';

import { Route, Switch, withRouter } from 'react-router-dom';

import App from './containers/App';
import Home from './components/Home';
import Chat from './components/Chat';

const Routes = () => (
  <App>
    <Switch>
      <Route component={Home} path="/" />
      <Route component={Chat} path="/chat" />
    </Switch>
  </App>
);

export default withRouter(Routes);
