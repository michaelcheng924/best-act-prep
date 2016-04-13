import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onAdminLoginSubmit, logout, getUsers } from 'api/admin';
import * as AdminActions from 'actions/admin';
import AdminUser from 'components/Pages/AdminUser';

const DEFAULT_ERROR_MESSAGE = 'Incorrect password!';

export class Admin extends React.Component {
    constructor(props) {
        super(props);

        this.onLoginSubmit = this.onLoginSubmit.bind(this);
        this.logout = this.logout.bind(this);
    }

    componentDidMount() {
        getUsers().then(response => {
            this.props.setUsers(response.users);
        });
    }

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
    }

    logout() {
        logout();
        this.props.setAdminUser(null);
    }

    renderLogin() {
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

    renderErrorMessage() {
        if (!this.props.loginErrorMessage) { return null; }

        return <div className="alert alert-danger">{this.props.loginErrorMessage}</div>;
    }

    renderContent() {
        return (
            <div>
                <button className="btn btn-warning" onClick={this.logout}>Log Out</button>
                <h1>Admin Panel</h1>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderUsers()}
                    </tbody>
                </table>
            </div>
        );
    }

    renderUsers() {
        if (!this.props.users) { return <tr><td>No users</td></tr>; }
        
        return this.props.users.map((user, index) => {
            return (
                <AdminUser key={index} email={user.email} />
            );
        });
    }

    render() {
        const adminUser = this.props.adminUser;

        return (
            <div className="page">
                <div className="page__content">
                    {adminUser ? this.renderContent() : this.renderLogin()}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const admin = state.admin.toJS();

    return admin;
}

function mapDispatchToProps(dispatch) {
    const adminActions = bindActionCreators(AdminActions, dispatch);

    return adminActions;
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
