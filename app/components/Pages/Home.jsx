import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

export class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="home__banner">
                    <h2 className="home__banner-heading">Step 1: Maximize ACT Score</h2>
                    <h2 className="home__banner-heading">Step 2: Attend Dream College</h2>
                    <h2 className="home__banner-heading">Step 3: Enjoy Greater Opportunities</h2>
                    <h2 className="home__banner-heading--important">The Best ACT Prep Online Course: Your Starting Point</h2>
                    <Link to="why-best-act-prep">
                        <button className="home__banner-button btn btn-success">Learn More</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Home;
