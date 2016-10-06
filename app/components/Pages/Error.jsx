import React from 'react';

const Error = React.createClass({
    displayName: 'Error',

    render() {
        return (
            <div className="page">
                <div className="page__content">
                    <div className="alert alert-warning">
                        Unfortunately, your card was declined. Perhaps you can try using another card. Sorry for the inconvenience!
                    </div>
                </div>
            </div>
        );
    }
});

export default Error;
