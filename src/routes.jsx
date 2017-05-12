import React from 'react';
import {Route, IndexRoute}  from 'react-router';
import App from './containers/App';
import Home from './components/Home';
import Chat from './components/Chat';


let store;

export default function routes(storeRef) {
    store = storeRef;

    return (
        <Route component={App} path='/'>
            <IndexRoute component={Home} />
            <Route component={Chat} path='chat'/>
        </Route>
    );
}
