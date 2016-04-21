import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setActiveTab } from 'actions/app';

export class Home extends React.Component {
    constructor(props) {
        super(props);

        this.setActiveTabWhy = this.setActiveTab.bind(this, '/why-best-act-prep');
    }

    setActiveTab(tab) {
        this.props.setActiveTab(tab);
    }

    render() {
        return (
            <div>
                <div className="home__banner">
                    <h2 className="home__banner-heading"><em>Step 1:</em> Maximize ACT Score</h2>
                    <h2 className="home__banner-heading"><em>Step 2:</em> Attend Dream College</h2>
                    <h2 className="home__banner-heading"><em>Step 3:</em> Enjoy Greater Opportunities</h2>
                    <h2 className="home__banner-heading--important">The Best ACT Prep Online Course: Your Starting Point</h2>
                    <Link to="why-best-act-prep">
                        <button className="home__banner-button btn" onClick={this.setActiveTabWhy}>Learn More</button>
                    </Link>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const app = state.app.toJS();

    return {
        activeTab: app.activeTab
    };
}

function mapDispatchToProps(dispatch) {
    const appActions = bindActionCreators({ setActiveTab }, dispatch);

    return appActions;
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
