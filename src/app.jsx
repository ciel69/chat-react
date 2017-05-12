import React from 'react';
import {render} from 'react-dom';
import {browserHistory, Router} from 'react-router';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import routes from './routes';

const store = configureStore();

const component = (
    <Provider store={store}>
        <Router history={browserHistory}>
            {routes(store)}
        </Router>
    </Provider>
);

render(component, document.getElementById('app-root'));
