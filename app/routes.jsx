import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from 'components/App';
import Home from 'components/Pages/Home';
import WhyBestACTPrep from 'components/Pages/WhyBestActPrep';
import Dashboard from 'components/Pages/Dashboard';
import Course from 'components/Pages/Course';
import PracticeTests from 'components/Pages/PracticeTests';
import Welcome from 'components/Pages/Welcome';
import Admin from 'components/Pages/Admin';

export default (
    <Route component={App} path="/">
        <IndexRoute component={Home} />
        <Route component={WhyBestACTPrep} path="why-best-act-prep" />
        <Route component={Dashboard} path="dashboard" />
        <Route component={Course} path="course" />
        <Route component={PracticeTests} path="tests" />
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
        <Route component={Course} path="2A4" />
        <Route component={Course} path="2A5" />
        <Route component={Course} path="2B1" />
        <Route component={Course} path="2B2" />
        <Route component={Course} path="2B3" />
        <Route component={Course} path="2B4" />
        <Route component={Course} path="2C1" />
        <Route component={Course} path="2C2" />
        <Route component={Course} path="2C3" />
        <Route component={Course} path="2D1" />

        <Route component={Course} path="3A1" />
        <Route component={Course} path="3A2" />
        <Route component={Course} path="3A3" />
        <Route component={Course} path="3A4" />
        <Route component={Course} path="3A5" />
        <Route component={Course} path="3B1" />
        <Route component={Course} path="3B2" />
        <Route component={Course} path="3B3" />
        <Route component={Course} path="3B4" />
        <Route component={Course} path="3B5" />
        <Route component={Course} path="3C1" />
        <Route component={Course} path="3C2" />
        <Route component={Course} path="3C3" />
        <Route component={Course} path="3D1" />

        <Route component={Course} path="4A1" />
        <Route component={Course} path="4A2" />
        <Route component={Course} path="4A3" />
        <Route component={Course} path="4A4" />
        <Route component={Course} path="4A5" />
        <Route component={Course} path="4B1" />
        <Route component={Course} path="4B2" />
        <Route component={Course} path="4B3" />
        <Route component={Course} path="4B4" />
        <Route component={Course} path="4B5" />
        <Route component={Course} path="4C1" />
        <Route component={Course} path="4C2" />
        <Route component={Course} path="4C3" />

        <Route component={Course} path="5A1" />
        <Route component={Course} path="5A2" />
        <Route component={Course} path="5A3" />
        <Route component={Course} path="5A4" />
        <Route component={Course} path="5A5" />
        <Route component={Course} path="5B1" />
        <Route component={Course} path="5B2" />
        <Route component={Course} path="5B3" />
        <Route component={Course} path="5C1" />
        <Route component={Course} path="5C2" />
        <Route component={Course} path="5C3" />

        <Route component={Course} path="71" />
        <Route component={Course} path="72" />
        <Route component={Course} path="73" />

        <Route component={Course} path="Z1" />
        <Route component={Course} path="Z2" />
        <Route component={Course} path="Z3" />
        <Route component={Course} path="Z4" />
        <Route component={Course} path="Z5" />
        <Route component={Course} path="Z6" />
        <Route component={Course} path="Z7" />
        <Route component={Course} path="Z8" />
        <Route component={Course} path="Z9" />
    </Route>
);
