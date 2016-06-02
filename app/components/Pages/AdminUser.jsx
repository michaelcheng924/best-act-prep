import React from 'react';
import { extend } from 'lodash';
import { deleteUser, resetPassword, resetData } from 'api/admin';
import sectionsData from 'registries/course';

export default class AdminUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showUserData: false
        };

        this.onDelete = this.onDelete.bind(this);
        this.onResetPassword = this.onResetPassword.bind(this);
        this.onResetData = this.onResetData.bind(this);
        this.toggleUserData = this.toggleUserData.bind(this);
    }

    onDelete() {
        const hasConfirmed = confirm(`Are you sure you want to delete ${this.props.email}?`)
        if (hasConfirmed) {
            deleteUser(this.props.email);
        }
    }

    onResetPassword() {
        const hasConfirmed = confirm(`Are you sure you want to reset ${this.props.email}'s password?`)
        if (hasConfirmed) {
            resetPassword(this.props.email, this.refs.passwordReset.value);
        }
    }

    onResetData() {
        const hasConfirmed = confirm(`Are you sure you want to reset ${this.props.email}'s data?`)
        if (hasConfirmed) {
            resetData(this.props.email);
        }
    }

    toggleUserData() {
        this.setState({ showUserData: !this.state.showUserData });
    }

    renderUserData() {
        if (!this.state.showUserData) { return null; }

        return (
            <td>
                <ol>
                    {this.renderUserModules()}
                </ol>
            </td>
        );
    }

    renderUserModules() {
        let filteredData = [];

        sectionsData.forEach(section => {
            section.modules.forEach(module => {
                filteredData.push(extend({
                    id: module.id,
                    name: module.title || module.name,
                }, this.props.data.modules[module.id]));
            });
        });

        return filteredData.map((module, key) => {
            if (module.hasOwnProperty('collapsed')) {
                return <li key={module.id}>{module.id}: <span style={{ color: module.collapsed ? 'orange' : 'blue' }}>collapsed</span></li>;
            } else if (module.hasOwnProperty('completed')) {
                return <li key={module.id}>{module.id}: <span style={{ color: module.completed ? 'green' : 'red' }}>completed</span></li>;
            }
        });
    }

    render() {
        return (
            <tr>
                <td onClick={this.toggleUserData}>{`${this.props.number}) ${this.props.email}`}</td>
                <td>
                    <input className="form-control admin__user-reset-input" ref="passwordReset" />
                    <button className="btn btn-warning" onClick={this.onResetPassword}>RESET PASSWORD</button>
                    <button className="btn btn-warning" onClick={this.onResetData}>RESET DATA</button>
                    <button className="btn btn-danger" onClick={this.onDelete}>DELETE</button>
                </td>
                {this.renderUserData()}
            </tr>
        );
    }
}
