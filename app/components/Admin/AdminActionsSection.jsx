import React from 'react';

import { addUser } from 'api/admin';
import { updateModules } from 'api/admin';

import AdminUser from 'components/Admin/AdminUser';

const AdminActionsSection = React.createClass({
    displayName: 'AdminActionsSection',

    addUser(event) {
        event.preventDefault();

        const { newEmail, newPassword } = this.refs;

        const hasConfirmed = confirm(`Are you sure you want to add user: ${newEmail.value}?`);

        if (hasConfirmed) {
            addUser(newEmail.value, newPassword.value);
        }
    },

    updateModules() {
        const hasConfirmed = confirm(`Are you sure you want to reset users' modules?`);
        if (hasConfirmed) {
            this.props.users.forEach(user => {
                updateModules(user.email);
            });
        }
    },

    renderUserRow() {
        if (!this.props.users) { return <tr><td>No users</td></tr>; }

        return this.props.users.map((user, index) => {
            return (
                <AdminUser key={index} number={index + 1} {...user} />
            );
        });
    },

    renderEmailList() {
        if (!this.props.users) { return null; }

        return this.props.users.map(user => user.email).join(', ');
    },

    render() {
        return (
            <div>
                <form onSubmit={this.addUser}>
                    <input type="text" className="form-control admin__user-reset-input" placeholder="New user email" ref="newEmail" />
                    <input type="text" className="form-control admin__user-reset-input" placeholder="New user password" ref="newPassword" />
                    <button className="btn btn-primary">Add User</button>
                </form>

                <hr />

                <button className="btn btn-danger" onClick={this.updateModules}>UPDATE MODULES</button>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderUserRow()}
                    </tbody>
                </table>

                {this.renderEmailList()}
            </div>
        );
    }
});

export default AdminActionsSection;
