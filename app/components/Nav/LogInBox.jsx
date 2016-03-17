import React from 'react';

export default class LogInBox extends React.Component {
    constructor(props) {
        super(props);

        this.hideLogin = this.hideLogin.bind(this);
        this.onLoginSubmit = this.onLoginSubmit.bind(this);
    }

    hideLogin() {
        this.props.toggleLogin(false);
        this.props.setActiveTab(this.props.previousTab);
    }

    onLoginSubmit(event) {
        event.preventDefault();

        const { onLoginSubmit, onLoginSubmitSuccess } = this.props

        return onLoginSubmit(this.refs.email.value, this.refs.password.value)
            .success(response => {
                onLoginSubmitSuccess(response.email);
                this.hideLogin();
            });
    }

    render() {
        return (
            <div>
                <div className="log-in-box__overlay" onClick={this.hideLogin} />
                <div className="log-in-box">
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
            </div>
        );
    }
}
