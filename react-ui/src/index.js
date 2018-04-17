import React from 'react';
import ReactDOM from 'react-dom';
import { compose, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import App from 'app/App';
import appReducer from 'app/reducers';

import './index.scss';

const reducers = combineReducers({
    app: appReducer
});

const enhancers = compose(
    window.devToolsExtension && window.devToolsExtension()
);

const store = createStore(
    reducers,
    {},
    enhancers
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
