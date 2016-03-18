import 'css/master.scss';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from 'routes';
import { makeStore } from 'helpers';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';

let initialState = window.__INITIAL_STATE__;

// Transform into Immutable.js collections, but leave top level keys untouched
Object.keys(initialState)
    .forEach(key => {
        initialState[key] = fromJS(initialState[key]);
    });

const store = makeStore(initialState);

render(
    <Provider store={store}>
        <Router children={routes} history={browserHistory} />
    </Provider>,
    document.getElementById('app'));
