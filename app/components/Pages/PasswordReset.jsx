import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setPasswordResetHash } from 'actions/app';
import { onPasswordResetRequestSubmit, onPasswordResetSubmit } from 'api/app';

const PasswordReset = React.createClass({
    displayName: 'PasswordReset',

    getInitialState() {
        return {
            responseMessage: null
        };
    },

    onPasswordResetRequestSubmit(event) {
        event.preventDefault();

        const spinnerEl = $('.spinner');
        spinnerEl.removeClass('hidden');

        onPasswordResetRequestSubmit(this.refs.email.value).then(response => {
            spinnerEl.addClass('hidden');

            this.setState({ responseMessage: response.message });
        });
    },

    onPasswordResetSubmit(event) {
        event.preventDefault();

        const password = this.refs.password.value;
        const passwordConfirm = this.refs.passwordConfirm.value;

        if (password !== passwordConfirm) {
            this.setState({
                responseMessage: 'The two passwords you entered do not match.'
            });
            return;
        } else {
            const spinnerEl = $('.spinner');
            spinnerEl.removeClass('hidden');

            onPasswordResetSubmit(password, this.props.passwordResetEmail).then(response => {
                spinnerEl.addClass('hidden');

                this.setState({ responseMessage: response.message });

                if (response.success) {
                    this.props.setPasswordResetHash(null, null);
                }
            });
        }
    },

    renderResponseMessage() {
        if (!this.state.responseMessage) { return null; }

        return <div className="alert alert-info">{this.state.responseMessage}</div>;
    },

    renderPasswordResetRequest() {
        return (
            <div className="page__content">
                <h3>Forgot your password?</h3>

                {this.renderResponseMessage()}

                <div>Enter your email below and we will send you instructions to reset your password!</div>

                <form onSubmit={this.onPasswordResetRequestSubmit}>
                  <fieldset className="form-group">
                    <input type="email" className="form-control" id="email" ref="email" placeholder="Email" />
                  </fieldset>
                  
                  <button className="btn btn-primary log-in-box__button">Submit</button>
                </form>
            </div>
        );
    },

    renderPasswordReset() {
        return (
            <div className="page__content">
                <h3>Reset your password</h3>

                {this.renderResponseMessage()}

                <div>Enter your new password for <strong>{this.props.passwordResetEmail}</strong> below:</div>

                <form onSubmit={this.onPasswordResetSubmit}>
                  <fieldset className="form-group">
                    <input type="password" className="form-control" id="password" ref="password" placeholder="New password" />
                  </fieldset>
                  <fieldset className="form-group">
                    <input type="password" className="form-control" id="password-confirm" ref="passwordConfirm" placeholder="Confirm your new password by typing it again here" />
                  </fieldset>
                  
                  <button className="btn btn-primary log-in-box__button">Submit</button>
                </form>
            </div>
        );
    },

    render() {
        return (
            <div className="page">
                {this.props.passwordResetHash ? this.renderPasswordReset() : this.renderPasswordResetRequest()}
            </div>
        );
    }
});

function mapStateToProps(state) {
    return {
        passwordResetHash: state.app.get('passwordResetHash'),
        passwordResetEmail: state.app.get('passwordResetEmail')
    };
};

function mapDispatchToProps(dispatch) {
    const appActions = bindActionCreators({ setPasswordResetHash }, dispatch);

    return appActions;
}

export default connect(mapStateToProps, mapDispatchToProps)(PasswordReset);
