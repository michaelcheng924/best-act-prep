import { extend } from 'lodash';
import React from 'react';
import { Link } from 'react-router';
import Router from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AppActions from 'actions/app';
import { setCourseData } from 'actions/course';
import { onLoginSubmit, logout } from 'api/app';
import LogInBox from 'components/Nav/LogInBox';

export class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.toggleContact = this.toggleContact.bind(this);
        this.hideContact = this.hideContact.bind(this);
        this.toggleLogin = this.toggleLogin.bind(this);
        this.logout = this.logout.bind(this);
        this.setActiveTab = this.setActiveTab.bind(this);
        this.setActiveTabHome = this.setActiveTab.bind(this, '/');
        this.setActiveTabWhy = this.setActiveTab.bind(this, '/why-best-act-prep');
        this.setActiveTabDashboard = this.setActiveTab.bind(this, '/dashboard');
        this.setActiveTabCourse = this.setActiveTab.bind(this, '/course');
        this.setActiveTabPracticeTests = this.setActiveTab.bind(this, '/tests');
        this.setActiveTabContact = this.setActiveTab.bind(this, 'contact');
        this.setActiveTabLogin = this.setActiveTab.bind(this, 'login');
    }

    setActiveTab(tab) {
        this.props.setActiveTab(tab);
    }

    toggleContact() {
        const { toggleContact, showContact } = this.props;

        toggleContact(!showContact);
    }

    hideContact() {
        const { toggleContact, setActiveTab, previousTab } = this.props;
        this.toggleContact(false);
        this.setActiveTab(previousTab);
    }

    toggleLogin() {
        const { toggleLogin, showLogin } = this.props;

        toggleLogin(!showLogin);
    }

    logout() {
        const { setUser, setCourseData, setActiveTab } = this.props;

        logout();
        setUser(null);
        setCourseData({
            sections: null,
            modules: null,
            currentModule: null
        });
        setActiveTab('/');
        this.context.router.push('/');
    }

    renderWhy(activeTab, user) {
        if (user) { return null; }

        return (
            <li className={activeTab === '/why-best-act-prep' ? 'active' : ''} onClick={this.setActiveTabWhy}>
                <Link to="why-best-act-prep">Why Best ACT Prep?</Link>
            </li>
        );
    }

    renderDashboard(activeTab, user) {
        if (!user) { return null; }

        return (
            <li className={activeTab === '/dashboard' ? 'active' : ''} onClick={this.setActiveTabDashboard}>
                <Link to="dashboard">Dashboard</Link>
            </li>
        );
    }

    renderCourse(activeTab, user) {
        if (!user) { return null; }

        return (
            <li className={activeTab === '/course' ? 'active' : ''} onClick={this.setActiveTabCourse}>
                <Link to="course">Course Home</Link>
            </li>
        );
    }

    renderPracticeTests(activeTab) {
        return (
            <li className={activeTab === '/tests' ? 'active' : ''} onClick={this.setActiveTabPracticeTests}>
                <Link to="tests">Practice Tests</Link>
            </li>
        );
    }

    renderContact(activeTab) {
        return (
            <li className={activeTab === 'contact' ? 'active' : ''} onClick={this.setActiveTabContact}>
                <a className="bap-nav__log-in-link" onClick={this.toggleContact}>Contact</a>
            </li>
        );
    }

    renderLoginLogout(activeTab, user) {
        if (!user) {
            return (
                <li className={activeTab === 'login' ? 'active' : ''} onClick={this.setActiveTabLogin}>
                    <a className="bap-nav__log-in-link" onClick={this.toggleLogin}>Log In</a>
                </li>
            );
        }

        return (
            <li>
                <a className="bap-nav__log-in-link" onClick={this.logout}>Log Out</a>
            </li>
        );
    }

    renderContactBox() {
        if (!this.props.showContact) { return null; }

        return (
            <div>
                <div className="log-in-box__overlay" onClick={this.hideContact} />
                <div className="contact-box">
                    <strong>Email:</strong> <a href="mailto:support@bestactprep.co">support@bestactprep.co</a><br />
                    <strong>Number:</strong> (630) 532-0154
                </div>
            </div>
        );
    }

    renderLoginBox() {
        if (!this.props.showLogin) { return null; }

        const { toggleLogin, setUser, setCourseData, setLoginErrorMessage, loginErrorMessage, previousTab } = this.props;

        return <LogInBox
            router={this.context.router}
            toggleLogin={toggleLogin}
            onLoginSubmit={onLoginSubmit}
            setUser={setUser}
            setCourseData={setCourseData}
            setLoginErrorMessage={setLoginErrorMessage}
            loginErrorMessage={loginErrorMessage}
            previousTab={previousTab}
            setActiveTab={this.setActiveTab}
        />;
    }

    render() {
        const { activeTab, user } = this.props;

        return (
                <nav className="navbar navbar-default">
                    <div className="container-fluid bap-nav__container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Link to="/" className="navbar-brand" href="#" onClick={this.setActiveTabHome}><div className="bap-nav__logo" /></Link>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right">
                                {this.renderWhy(activeTab, user)}
                                {this.renderDashboard(activeTab, user)}
                                {this.renderCourse(activeTab, user)}
                                {this.renderPracticeTests(activeTab)}
                                {this.renderContact(activeTab)}
                                {this.renderLoginLogout(activeTab, user)}
                            </ul>
                        </div>
                    </div>
                    {this.renderContactBox()}
                    {this.renderLoginBox()}
                </nav>
        );
    }
}

Nav.contextTypes = {
    router: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
    const app = state.app.toJS();

    return app;
}

function mapDispatchToProps(dispatch) {
    const appActions = bindActionCreators(AppActions, dispatch);
    const courseActions = bindActionCreators({ setCourseData }, dispatch);

    return extend(appActions, {
        setCourseData: courseActions.setCourseData
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
