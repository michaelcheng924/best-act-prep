import React, { Component } from 'react';

import './Login.scss';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            errorMessage: null
        };

        fetch('/api', {
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json()).then(json => console.log(json))
    }

    onLoginSubmit = event => {
        event.preventDefault();

        fetch('/api/app/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                email: this.email.value,
                password: this.password.value
            })
        })
            .then(response => response.json())
            .then(json => {
                if (json.reason) {
                    this.setState({
                        errorMessage: json.reason
                    });
                }

                if (json.authenticated) {
                    localStorage.setItem('bap-token', json.token);
                    this.props.onSetEmail(this.email.value);
                    this.context.router.push('/course');
                }
            });
    };

    renderErrorMessage() {
        if (!this.state.errorMessage) { return null; }

        return <div className="error-message">{this.state.errorMessage}</div>;
    }

    render() {
        return (
            <form className="Login">
                <input
                    className="Input Login__input"
                    placeholder="Email"
                    type="email"
                />
                <input
                    className="Input Login__input"
                    placeholder="Email"
                    type="password"
                />
                <button className="Button">Log in</button>
            </form>
        );
    }
}

export default Login;
