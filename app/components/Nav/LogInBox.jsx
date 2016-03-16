import React from 'react';

export default class LogInBox extends React.Component {
    constructor(props) {
        super(props);

        this.hideLogin = this.hideLogin.bind(this);
    }

    hideLogin() {
        this.props.toggleLogin(false);
    }

    render() {
        return (
            <div>
                <div className="log-in-box__overlay" onClick={this.hideLogin} />
                <div className="log-in-box">
                    <h4 className="log-in-box__header">Log In</h4>
                    <form>
                      <fieldset className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" />
                      </fieldset>
                      <fieldset className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" />
                      </fieldset>
                      <button className="btn btn-primary log-in-box__button">Log In</button>
                    </form>
                </div>
            </div>
        );
    }
}
