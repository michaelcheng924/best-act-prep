import React from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AppActions from 'actions/app';
import LogInBox from 'components/Nav/LogInBox';

export default class Nav extends React.Component {
    constructor(props) {
      super(props);

      this.toggleLogin = this.toggleLogin.bind(this);
      this.setActiveTab = this.setActiveTab.bind(this);
      this.setActiveTabHome = this.setActiveTab.bind(this, '/');
      this.setActiveTabWhy = this.setActiveTab.bind(this, '/why-best-act-prep');
      this.setActiveTabCourse = this.setActiveTab.bind(this, '/course');
      this.setActiveTabLogin = this.setActiveTab.bind(this, 'login');
    }

    setActiveTab(tab) {
      this.props.setActiveTab(tab);
    }

    toggleLogin() {
      const { toggleLogin, showLogin } = this.props;

      toggleLogin(!showLogin);
    }

    renderLogin() {
      if (!this.props.showLogin) { return null; }

      const { toggleLogin, onLoginSubmit, onLoginSubmitSuccess, previousTab } = this.props

      return <LogInBox
        toggleLogin={toggleLogin}
        onLoginSubmit={onLoginSubmit}
        onLoginSubmitSuccess={onLoginSubmitSuccess}
        previousTab={previousTab}
        setActiveTab={this.setActiveTab}
      />;
    }

    render() {
      const activeTab = this.props.activeTab;

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
                  <li className={activeTab === '/why-best-act-prep' ? 'active' : ''} onClick={this.setActiveTabWhy}>
                    <Link to="why-best-act-prep">Why Best ACT Prep?</Link>
                  </li>
                  <li className={activeTab === '/course' ? 'active' : ''} onClick={this.setActiveTabCourse}>
                    <Link to="course">Online Course Home</Link>
                  </li>
                  <li className={activeTab === 'login' ? 'active' : ''} onClick={this.setActiveTabLogin}>
                    <a className="bap-nav__log-in-link" onClick={this.toggleLogin}>Log In</a>
                  </li>
                </ul>
              </div>
            </div>
            {this.renderLogin()}
          </nav>
      );
    }
}

function mapStateToProps(state) {
  const app = state.app.toJS();

  return app;
}

function mapDispatchToProps(dispatch) {
  const { setActiveTab, toggleLogin, onLoginSubmitSuccess } = bindActionCreators(AppActions, dispatch);

  return {
    setActiveTab,
    toggleLogin,
    onLoginSubmitSuccess,
    onLoginSubmit: AppActions.onLoginSubmit
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
