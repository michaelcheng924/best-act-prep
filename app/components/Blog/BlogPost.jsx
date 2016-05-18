import React from 'react';
import { Link } from 'react-router';

export default class Blog extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div className="page">
                <div className="page__content">
                    HELLO
                </div>
            </div>
        );
    }
}
