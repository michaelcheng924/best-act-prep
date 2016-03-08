import React from 'react';
import { Link } from 'react-router';

export default class AppView extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default">
                  <div className="container-fluid">
                    <div className="navbar-header">
                      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </button>
                      <Link to="/" className="navbar-brand" href="#"><div className="bap-nav__logo" /></Link>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                      <ul className="nav navbar-nav navbar-right">
                        <li><Link to="about">Why Best ACT Prep?</Link></li>
                        <li className="dropdown">
                          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Members <span className="caret"></span></a>
                          <ul className="dropdown-menu">
                            <li><a href="#">Course Home</a></li>
                            <li role="separator" className="divider"></li>
                            <li><a href="#">Log In</a></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
                {this.props.children}
            </div>
        );
    }
}
