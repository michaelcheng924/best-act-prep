import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from 'components/App';
import Home from 'components/Pages/Home';
import WhyBestACTPrep from 'components/Pages/WhyBestActPrep';
import Course from 'components/Pages/Course';
import Welcome from 'components/Pages/Welcome';
import Admin from 'components/Pages/Admin';

export default (
    <Route component={App} path="/">
        <IndexRoute component={Home} />
        <Route component={WhyBestACTPrep} path="why-best-act-prep" />
        <Route component={Course} path="course" />
        <Route component={Welcome} path="welcome" />
        <Route component={Admin} path="admin" />
        <Route component={Course} path="1.0" />
    </Route>
);
