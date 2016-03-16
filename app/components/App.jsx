import React from 'react';
import Nav from 'components/Nav/Nav';

export default class AppView extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                {this.props.children}
            </div>
        );
    }
}
