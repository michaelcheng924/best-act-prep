import React, { Component } from 'react';
import { partial } from 'lodash';

import './Admin.scss';

class Admin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
            users: []
        };
    }

    fetchUsers() {
        fetch('/api/getusers', {
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(json => this.setState({ users: json.users }));
    }

    onLogin = event => {
        event.preventDefault();

        if (this.password.value === 'prepactbest') {
            this.setState({ isLoggedIn: true });

            this.fetchUsers();
        }
    };

    onAddUser = event => {
        event.preventDefault();

        const confirm = window.confirm(`Are you sure you want to add ${this.newUserEmail.value}?`);

        if (confirm) {
            fetch('/api/adduser', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    email: this.newUserEmail.value,
                    password: this.newUserPassword.value
                })
            })
                .then(() => {
                    this.fetchUsers();

                    this.newUserEmail.value = '';
                    this.newUserPassword.value = '';
                });
        }
    };

    onResetPassword = email => {
        const confirm = window.confirm(`Are you sure you want to reset ${email}'s password?`);

        if (confirm) {
            fetch('/api/resetpassword', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    newPassword: this[email].value
                })
            })
                .then(() => {
                    this[email].value = '';
                });
        }
    };

    onDeleteUser = email => {
        const confirm = window.confirm(`Are you sure you want to delete ${email}?`);

        if (confirm) {
            fetch('/api/deleteuser', {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    email
                })
            })
                .then(() => {
                    this.fetchUsers();
                });
        }
    };

    renderLogin() {
        return (
            <form onSubmit={this.onLogin}>
                <input
                    className="Input"
                    ref={password => this.password = password}
                />
            </form>
        );
    }

    renderAddUser() {
        return (
            <form onSubmit={this.onAddUser}>
                <input
                    className="Input"
                    placeholder="New user email"
                    ref={newUserEmail => this.newUserEmail = newUserEmail}
                />
                <input
                    className="Input"
                    placeholder="New user password"
                    ref={newUserPassword => this.newUserPassword = newUserPassword}
                />
                <button className="Button Button--orange">Add user</button>
            </form>
        );
    }

    render() {
        return (
            <div className="Admin">
                {
                    this.state.isLoggedIn
                        ? (
                            <div>
                                {this.renderAddUser()}
                                {
                                    this.state.users.map((user, index) => {
                                        return (
                                            <div className="Admin__user-row" key={user._id}>
                                                <div>{index + 1}) {user.email}</div>
                                                <input
                                                    className="Input"
                                                    placeholder="New password"
                                                    ref={newPassword => this[user.email] = newPassword}
                                                />
                                                <button
                                                    className="Button Button--small"
                                                    onClick={partial(this.onResetPassword, user.email)}
                                                >
                                                    Reset Password
                                                </button>
                                                <button
                                                    className="Button Button--small Button--orange"
                                                    onClick={partial(this.onDeleteUser, user.email)}
                                                >
                                                    DELETE
                                                </button>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        )
                        : this.renderLogin()
                }
            </div>
        );
    }
}

export default Admin;
