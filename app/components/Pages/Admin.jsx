import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout, getUsers } from 'api/admin';
import * as AdminActions from 'actions/admin';
import AdminLoginSection from 'components/Admin/AdminLoginSection';
import AdminActionsSection from 'components/Admin/AdminActionsSection';

const Admin = React.createClass({
    displayName: 'Admin',

    componentDidMount() {
        getUsers().then(response => {
            this.props.setUsers(response.users);
        });
    },

    getInitialState() {
        return {
            showLogs: false
        };
    },

    logout() {
        logout();
        this.props.setAdminUser(null);
    },

    toggleLogs() {
        this.setState({ showLogs: !this.state.showLogs });
    },

    renderLogout() {
        if (!this.props.adminUser) { return null; }

        return <button className="btn btn-warning" onClick={this.logout}>Log Out</button>;
    },

    renderLogin() {
        const { adminUser, setAdminUser, setAdminLoginErrorMessage, loginErrorMessage } = this.props;

        if (this.props.adminUser) { return null; }

        return (
            <AdminLoginSection
                setAdminUser={setAdminUser}
                setAdminLoginErrorMessage={setAdminLoginErrorMessage}
                loginErrorMessage={loginErrorMessage}
            />
        );
    },

    renderContent() {
        if (!this.props.adminUser) { return null; }

        return (
            <div>
                <button className="btn btn-default" onClick={this.toggleLogs}>Toggle Logs</button>

                <hr />

                {this.state.showLogs
                        ?
                            this.renderLogs()
                        :
                            this.renderAdminActionsSection()
                }
            </div>
        );
    },

    renderAdminActionsSection() {
        if (!this.props.adminUser) { return null; }

        return <AdminActionsSection users={this.props.users} />;
    },

    renderLogs() {
        if (!this.props.adminUser) { return null; }

        return (
            <div>
                <h2>Logs</h2>
            </div>
        );
    },

    render() {
        const adminUser = this.props.adminUser;

        return (
            <div className="page">
                <div className="page__content">
                    {this.renderLogout()}

                    <h1>Admin Panel</h1>
                    {this.renderLogin()}

                    {this.renderContent()}
                </div>
            </div>
        );
    }
});

function mapStateToProps(state) {
    const admin = state.admin.toJS();

    return admin;
}

function mapDispatchToProps(dispatch) {
    const adminActions = bindActionCreators(AdminActions, dispatch);

    return adminActions;
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
