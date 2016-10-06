import { extend } from 'lodash';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { onSetPasswordSubmit } from 'api/app';
import { setEmail, setActiveTab } from 'actions/app';
import { setCourseData } from 'actions/course';

export class Welcome extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            errorMessage: null
        };

        this.onSetPasswordSubmit = this.onSetPasswordSubmit.bind(this);
    }

    onSetPasswordSubmit(event) {
        event.preventDefault();

        const { email, password, password1 } = this.refs;
        const { setEmail, setCourseData } = this.props;

        if (password.value !== password1.value) {
            this.setState({ errorMessage: 'The passwords you entered don\'t match!'});
            return;
        }

        const spinnerEl = $('.spinner');
        spinnerEl.removeClass('hidden');

        onSetPasswordSubmit(email.value, password.value).then(response => {
            spinnerEl.addClass('hidden');

            if (!response.success) {
                this.setState({ errorMessage: response.reason });
            } else {
                setEmail(email.value);
                setCourseData(response.userData);
                this.setState({ errorReason: null });
                this.props.setActiveTab('/course');
                this.context.router.push('/course');
                localStorage.setItem('bap-token', response.token);
            }
        });
    }

    renderErrorMessage() {
        if (!this.state.errorMessage) { return null; }

        return <div className="alert alert-danger">{this.state.errorMessage}</div>;
    }

    render() {
        return (
            <div className="page">
                <div className="page__content">
                    Welcome! Please set your password.

                    {this.renderErrorMessage()}

                    <form onSubmit={this.onSetPasswordSubmit}>
                      <fieldset className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" defaultValue={this.props.email} ref="email" />
                      </fieldset>
                      <fieldset className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" ref="password" />
                      </fieldset>
                      <fieldset className="form-group">
                        <label htmlFor="password1">Repeat Password</label>
                        <input type="password" className="form-control" id="password1" ref="password1" />
                      </fieldset>
                      <button className="btn btn-primary log-in-box__button">Set Password</button>
                    </form>
                </div>
            </div>
        );
    }
}

Welcome.contextTypes = {
  router: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        email: state.app.get('email')
    };
};

function mapDispatchToProps(dispatch) {
    const appActions = bindActionCreators({ setEmail, setCourseData, setActiveTab }, dispatch);
    const courseActions = bindActionCreators({ setCourseData }, dispatch);

    return extend(appActions, {
        setCourseData: courseActions.setCourseData
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
