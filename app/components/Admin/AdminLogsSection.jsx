import React from 'react';

import AdminLogEntry from 'components/Admin/AdminLogEntry';

const AdminLogsSection = React.createClass({
    displayName: 'AdminLogsSection',

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
