import React from 'react';
import { Link } from 'react-router';

const DEFAULT_ERROR_MESSAGE = 'Incorrect password!'

export default class LogInBox extends React.Component {
    constructor(props) {
        super(props);

        this.hideLogin = this.hideLogin.bind(this);
        this.onLoginSubmit = this.onLoginSubmit.bind(this);
        this.onPasswordResetClick = this.onPasswordResetClick.bind(this);
    }

    hideLogin() {
        this.props.toggleLogin(false);
        this.props.setActiveTab(this.props.previousTab);
    }

    onPasswordResetClick() {
        this.props.toggleLogin(false);
        this.props.setActiveTab("");
    }

    onLoginSubmit(event) {
        event.preventDefault();

        const spinnerEl = $('.spinner');
        spinnerEl.removeClass('hidden');

        const { router, onLoginSubmit, setEmail, setCourseData, setLoginErrorMessage, setActiveTab } = this.props;
        const { email, password } = this.refs;

        return onLoginSubmit(email.value, password.value)
            .then(response => {
                if (!response.authenticated) {
                    spinnerEl.addClass('hidden');
                    setLoginErrorMessage(response.reason || DEFAULT_ERROR_MESSAGE);
                } else {
                    setLoginErrorMessage(null);
                    setEmail(email.value);
                    setCourseData(response.userData);
                    this.hideLogin();
                    spinnerEl.addClass('hidden');
                    router.push('/course');
                    setActiveTab('/course');
                    localStorage.setItem('bap-token', response.token);
                }
            });
    }

    renderErrorMessage() {
        if (!this.props.loginErrorMessage) { return null; }

        return <div className="alert alert-danger">{this.props.loginErrorMessage}</div>;
    }

    render() {
        return (
            <div>
                <div className="log-in-box__overlay" onClick={this.hideLogin} />
                <div className="log-in-box">
                    {this.renderErrorMessage()}
                    <form onSubmit={this.onLoginSubmit}>
                      <fieldset className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" ref="email" />
                      </fieldset>
                      <fieldset className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" ref="password" />
                      </fieldset>
                      <button className="btn btn-primary log-in-box__button">Log In</button>
                      <Link to="password-reset" className="log-in-box__forgot-password" onClick={this.onPasswordResetClick}>Forgot password?</Link>
                    </form>
                </div>
            </div>
        );
    }
}
