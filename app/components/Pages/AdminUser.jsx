import React from 'react';
import { deleteUser } from 'api/admin';

export default class AdminUser extends React.Component {
    constructor(props) {
        super(props);

        this.onDelete = this.onDelete.bind(this);
    }

    onResetPassword() {

    }

    onDelete() {
        deleteUser(this.props.email);
    }

    render() {
        return (
            <tr>
                <td>{this.props.email}</td>
                <td>
                    <input className="form-control admin__user-reset-input" ref="passwordReset" />
                    <button className="btn btn-warning">RESET PASSWORD</button>
                    <button className="btn btn-danger" onClick={this.onDelete}>DELETE</button>
                </td>
            </tr>
        );
    }
}
