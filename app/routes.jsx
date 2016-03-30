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
        <Route component={Course} path="10" />
        <Route component={Course} path="11" />
        <Route component={Course} path="12" />
        <Route component={Course} path="13" />
        <Route component={Course} path="14" />
        <Route component={Course} path="2A1" />
        <Route component={Course} path="2A2" />
        <Route component={Course} path="2A3" />
    </Route>
);
