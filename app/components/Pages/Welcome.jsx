import React from 'react';

export default class Welcome extends React.Component {
    render() {
        return (
            <div className="page">
                <div className="page__content">
                    Welcome!

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
