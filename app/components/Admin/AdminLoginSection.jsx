import React from 'react';
import { onAdminLoginSubmit, logout, getUsers } from 'api/admin';

const DEFAULT_ERROR_MESSAGE = 'Incorrect password!';

const AdminLoginSection = React.createClass({
    displayName: 'AdminLoginSection',

    onLoginSubmit(event) {
        event.preventDefault();

        const { email, password } = this.refs;
        const { setAdminUser, setAdminLoginErrorMessage } = this.props

        return onAdminLoginSubmit(email.value, password.value)
            .then(response => {
                if (!response.authenticated) {
                    setAdminLoginErrorMessage(response.reason || DEFAULT_ERROR_MESSAGE);
                } else {
                    setAdminLoginErrorMessage(null);
                    setAdminUser(email);
                }
            });
    },

    renderErrorMessage() {
        if (!this.props.loginErrorMessage) { return null; }

        return <div className="alert alert-danger">{this.props.loginErrorMessage}</div>;
    },

    render() {
        return (
            <div>
                <h1>Admin Login</h1>
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
                </form>
            </div>
        );
    }
});

export default AdminLoginSection;
