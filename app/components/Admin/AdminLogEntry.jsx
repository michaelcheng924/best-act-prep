import React from 'react';
import moment from 'moment';
import { deleteLog } from 'api/admin';

const AdminLogEntry = React.createClass({
    displayName: 'AdminLogEntry',

    deleteLog() {
        const hasConfirmed = confirm('Are you sure you want to delete this log?');

        if (hasConfirmed) {
            deleteLog(this.props._id);
        }
    },

    render() {
        const { date, type, message, user } = this.props;

        const formattedDate = moment(new Date(date), 'MM/DD/YYYY, HH:mm').fromNow();

        return (
            <tr>
                <td>{formattedDate}</td>
                <td>{type}</td>
                <td className="log-entry__cell">{message}</td>
                <td className="log-entry__cell">{user}</td>
                <td>
                    <button className="btn btn-danger" onClick={this.deleteLog}>Delete</button>
                </td>
            </tr>
        );
    }
});

export default AdminLogEntry;
