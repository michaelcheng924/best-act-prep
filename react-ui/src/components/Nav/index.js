import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

import { setEmail } from 'app/actions';

import './Nav.scss';

class Nav extends Component {
    componentWillMount() {
        const token = localStorage.getItem('bap-token');

        if (!isEmpty(token)) {
            fetch('/api/authenticate', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    token
                })
            })
                .then(response => response.json())
                .then(json => {
                    if (json.email) {
                        this.props.onSetEmail(json.email);
                    }
                });
        }
    }

    logout = event => {
        event.preventDefault();

        localStorage.setItem('bap-token', '');
        this.props.onSetEmail('');
    };

    renderCourse() {
        return (
            <Link className="Nav__right-link" to="/course">
                {this.props.email ? 'Course Home' : 'Start for Free'}
            </Link>
        );
    }

    renderBuy() {
        if (this.props.email) { return null; }

        return (
            <Link className="Nav__right-link Nav__right-link--buy" to="/buy">
                Get <strong>NO RISK, FULL</strong> access
            </Link>
        );
    }

    renderLogin() {
        if (!this.props.email) {
            return (
                <Link className="Nav__right-link" to="/login">
                    Log in
                </Link>
            );
        }

        return (
            <Link className="Nav__right-link" to="/" onClick={this.logout}>
                Log out
            </Link>
        );
    }

    render() {
        return (
            <nav className="Nav">
                <Link className="Nav__logo-section" to="/">
                    <img className="Nav__logo" src="/images/logo-only-blue-background.png" alt="" />
                    <div className="Nav__title">BEST</div>
                    <div className="Nav__title Nav__title--act">ACT</div>
                    <div className="Nav__title">PREP</div>
                </Link>
                <div className="Nav__space" />
                {this.renderCourse()}
                {this.renderBuy()}
                <Link className="Nav__right-link" to="/contact">
                    Contact
                </Link>
                {this.renderLogin()}
            </nav>
        );
    }
}

const mapStateToProps = function(state) {
    return {
        email: state.app.email
    };
};

const mapActionsToProps = {
    onSetEmail: setEmail
};

export default connect(mapStateToProps, mapActionsToProps)(Nav);
