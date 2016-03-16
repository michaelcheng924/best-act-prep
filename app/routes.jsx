import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from 'components/App';
import Home from 'components/Home';
import WhyBestACTPrep from 'components/WhyBestActPrep';

export default (
    <Route component={App} path="/">
        <IndexRoute component={Home} />
        <Route component={WhyBestACTPrep} path="why-best-act-prep" />
    </Route>
);
