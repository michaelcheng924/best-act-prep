import React from 'react';
import { deleteUser, resetPassword, resetData } from 'api/admin';

export default class AdminUser extends React.Component {
    constructor(props) {
        super(props);

        this.onDelete = this.onDelete.bind(this);
        this.onResetPassword = this.onResetPassword.bind(this);
        this.onResetData = this.onResetData.bind(this);
    }

    onDelete() {
        deleteUser(this.props.email);
    }

    onResetPassword() {
        resetPassword(this.props.email, this.refs.passwordReset.value);
    }

    onResetData() {
        resetData(this.props.email);
    }

    render() {
        return (
            <tr>
                <td>{this.props.email}</td>
                <td>
                    <input className="form-control admin__user-reset-input" ref="passwordReset" />
                    <button className="btn btn-warning" onClick={this.onResetPassword}>RESET PASSWORD</button>
                    <button className="btn btn-warning" onClick={this.onResetData}>RESET DATA</button>
                    <button className="btn btn-danger" onClick={this.onDelete}>DELETE</button>
                </td>
            </tr>
        );
    }
}
