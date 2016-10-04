import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout, getUsers, addLog, getLogs } from 'api/admin';
import * as AdminActions from 'actions/admin';
import AdminLoginSection from 'components/Admin/AdminLoginSection';
import AdminActionsSection from 'components/Admin/AdminActionsSection';
import AdminLogsSection from 'components/Admin/AdminLogsSection';

const Admin = React.createClass({
    displayName: 'Admin',

    componentDidMount() {
        getUsers().then(response => {
            this.props.setUsers(response.users);
        });

        getLogs().then(response => {
            this.props.setLogs(response.logs);
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
                <button className="btn btn-warning" onClick={this.logout}>Log Out</button>

                <h1>Admin Panel</h1>

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
        return <AdminActionsSection users={this.props.users} />;
    },

    renderLogs() {
        return <AdminLogsSection logs={this.props.logs} />;
    },

    render() {
        const adminUser = this.props.adminUser;

        return (
            <div className="page">
                <div className="page__content">
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
