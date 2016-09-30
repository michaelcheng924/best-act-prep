import { extend } from 'lodash';
import React from 'react';
import { Link } from 'react-router';
import Router from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AppActions from 'actions/app';
import { setCourseData } from 'actions/course';
import { onLoginSubmit, logout } from 'api/app';
import SupportBox from 'components/Nav/SupportBox';
import LogInBox from 'components/Nav/LogInBox';

export class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.toggleSupport = this.toggleSupport.bind(this);
        this.hideSupport = this.hideSupport.bind(this);
        this.toggleLogin = this.toggleLogin.bind(this);
        this.logout = this.logout.bind(this);
        this.setActiveTab = this.setActiveTab.bind(this);
        this.setActiveTabHome = this.setActiveTab.bind(this, '/');
        this.setActiveTabWhy = this.setActiveTab.bind(this, '/why-best-act-prep');
        this.setActiveTabDashboard = this.setActiveTab.bind(this, '/dashboard');
        this.setActiveTabCourse = this.setActiveTab.bind(this, '/course');
        this.setActiveTabPracticeTests = this.setActiveTab.bind(this, '/tests');
        this.setActiveTabSupport = this.setActiveTab.bind(this, 'support');
        this.setActiveTabLogin = this.setActiveTab.bind(this, 'login');
    }

    setActiveTab(tab) {
        this.props.setActiveTab(tab);
    }

    toggleSupport() {
        const { toggleSupport, showSupport } = this.props;

        toggleSupport(!showSupport);
    }

    hideSupport() {
        const { toggleSupport, setActiveTab, previousTab } = this.props;
        this.toggleSupport(false);
        this.setActiveTab(previousTab);
    }

    toggleLogin() {
        const { toggleLogin, showLogin } = this.props;

        toggleLogin(!showLogin);
    }

    logout() {
        const { setEmail, setCourseData, setActiveTab } = this.props;

        logout();
        setEmail(null);
        setCourseData({
            sections: null,
            modules: null,
            currentModule: null
        });
        setActiveTab('/');
        this.context.router.push('/');

        localStorage.removeItem('bap-token');
    }

    renderWhy(activeTab, email) {
        if (email) { return null; }

        return (
            <li className={activeTab === '/why-best-act-prep' ? 'active' : ''} onClick={this.setActiveTabWhy}>
                <Link to="why-best-act-prep">Why Best ACT Prep?</Link>
            </li>
        );
    }

    renderDashboard(activeTab, email) {
        if (!email) { return null; }

        return (
            <li className={activeTab === '/dashboard' ? 'active' : ''} onClick={this.setActiveTabDashboard}>
                <Link to="dashboard">Dashboard</Link>
            </li>
        );
    }

    renderCourse(activeTab, email) {
        if (!email) { return null; }

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

    renderSupport(activeTab) {
        return (
            <li className={activeTab === 'support' ? 'active' : ''} onClick={this.setActiveTabSupport}>
                <a className="bap-nav__log-in-link" onClick={this.toggleSupport}>Support</a>
            </li>
        );
    }

    renderLoginLogout(activeTab, email) {
        if (!email) {
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

    renderSupportBox() {
        if (!this.props.showSupport) { return null; }

        const { supportTopic, setSupportTopic, setSupportMessage, supportMessage, supportMessageType } = this.props;

        return (
            <SupportBox
                hideSupport={this.hideSupport}
                supportTopic={supportTopic}
                setSupportTopic={setSupportTopic}
                setSupportMessage={setSupportMessage}
                supportMessage={supportMessage}
                supportMessageType={supportMessageType}
            />
        );
    }

    renderLoginBox() {
        if (!this.props.showLogin) { return null; }

        const { toggleLogin, setEmail, setCourseData, setLoginErrorMessage, loginErrorMessage, previousTab } = this.props;

        return <LogInBox
            router={this.context.router}
            toggleLogin={toggleLogin}
            onLoginSubmit={onLoginSubmit}
            setEmail={setEmail}
            setCourseData={setCourseData}
            setLoginErrorMessage={setLoginErrorMessage}
            loginErrorMessage={loginErrorMessage}
            previousTab={previousTab}
            setActiveTab={this.setActiveTab}
        />;
    }

    render() {
        const { activeTab, email } = this.props;

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
                                {this.renderWhy(activeTab, email)}
                                {this.renderDashboard(activeTab, email)}
                                {this.renderCourse(activeTab, email)}
                                {this.renderPracticeTests(activeTab)}
                                {this.renderSupport(activeTab)}
                                {this.renderLoginLogout(activeTab, email)}
                            </ul>
                        </div>
                    </div>
                    {this.renderSupportBox()}
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
