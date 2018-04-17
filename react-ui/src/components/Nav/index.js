import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Nav.scss';

class Nav extends Component {
    render() {
        return (
            <nav className="Nav">
                <Link className="Nav__logo-section" to="/">
                    <img className="Nav__logo" src="/images/logo-only-blue-background.png" />
                    <div className="Nav__title">BEST</div>
                    <div className="Nav__title Nav__title--act">ACT</div>
                    <div className="Nav__title">PREP</div>
                </Link>
                <div className="Nav__space" />
                <Link className="Nav__right-link" to="/course">
                    Start for free
                </Link>
                <Link className="Nav__right-link Nav__right-link--buy" to="/buy">
                    Get <strong>NO RISK, FULL</strong> access
                </Link>
                <Link className="Nav__right-link" to="/contact">
                    Contact
                </Link>
                <Link className="Nav__right-link" to="/login">
                    Log in
                </Link>
            </nav>
        );
    }
}

export default Nav;
