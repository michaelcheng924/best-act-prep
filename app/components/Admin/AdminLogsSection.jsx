import React from 'react';

import { deleteAllLogs } from 'api/admin';
import AdminLogEntry from 'components/Admin/AdminLogEntry';

const AdminLogsSection = React.createClass({
    displayName: 'AdminLogsSection',

    deleteAllLogs() {
        const hasConfirmed = confirm('Are you sure you want to delete all logs?');

        if (hasConfirmed) {
            deleteAllLogs();
        }
    },

    renderLogEntryRow() {
        return this.props.logs.map(log => {
            return (
                <AdminLogEntry
                    key={log._id}
                    _id={log._id}
                    date={log.date}
                    type={log.type}
                    message={log.message}
                    user={log.user}
                />
            );
        });
    },

    render() {
        return (
            <div>
                <h2>Logs</h2>

                <button className="btn btn-danger" onClick={this.deleteAllLogs}>DELETE ALL LOGS</button>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Type</th>
                            <th>Message</th>
                            <th>User</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderLogEntryRow()}
                    </tbody>
                </table>
            </div>
        );
    }
});

export default AdminLogsSection;
