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

    componentDidMount() {
        $('.home__call-to-action-fading-container').fadeIn();
    }

    setActiveTab(tab) {
        this.props.setActiveTab(tab);
    }

    render() {
        return (
            <div>
                <div className="home__call-to-action-container">
                    <div className="home__call-to-action-fading-container">
                        <h1 className="home__title">The Best ACT Prep Online Course</h1>
                        <div className="home__call-to-action">
                            <img src="/images/michael.png" />
                            <div className="home__call-to-action-text-container">
                                <div className="home__call-to-action-text--odd">The most popular ACT instructor.</div>
                                <div className="home__call-to-action-text--even">The best ACT strategies.</div>
                                <div className="home__call-to-action-text--odd">Higher score guaranteed. No risk, no strings.</div>
                            </div>
                        </div>
                        <a href="/why-best-act-prep"><button className="home__call-to-action-button btn">Learn More</button></a>
                    </div>
                </div>

                <div className="home__testimonials-container">
                    <div className="home__testimonials-main">
                        <span className="home__testimonials-main-icon glyphicon glyphicon-heart" />
                        <h2 className="home__testimonials-main-heading">Testimonials</h2>
                        <div className="home__testimonials-main-tagline">
                            See what students have said about us!
                        </div>
                    </div>
                    <div className="home__testimonials-quotes-container">
                        <div className="home__testimonials-quote-container">
                            <div className="home__testimonials-quote">Coming soon :)</div>
                            <div className="home__testimonials-author">- student</div>
                        </div>
                        <div className="home__testimonials-quote-container">
                            <div className="home__testimonials-quote">Coming soon :)</div>
                            <div className="home__testimonials-author">- student</div>
                        </div>
                    </div>
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
