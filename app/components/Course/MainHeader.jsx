import React from 'react';

export default class MainHeader extends React.Component {
    render() {
        return (
            <div className="main-header">
                <h4 className="main-header__title">Main Header</h4>
                <button className="btn btn-success main-header__complete-button">Mark Complete and Continue to Next Module</button>
            </div>
        );
    }
}
