import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';
import paypal from 'paypal-checkout';

import { setEmail } from 'app/actions';

import './Buy.scss';

class Buy extends Component {
    constructor(props) {
        super(props);

        this.state = {
            errorMessage: null
        };
    }

    componentDidMount() {
        const self = this;

        paypal.Button.render({

            env: 'production', // 'production' or 'sandbox',

            client: {
                sandbox:    'AXlU2z839LU9Q4hftqV3DTdpg8-zgS4rIqk6CnrU4qvNod6y_YFV1hQVGNLoTweawjNEejd2ewxK1Bqy',
                production: 'AQ2QdsNfZPQs69IC9qKzmE2Vhe_jJrw3Nbozwjsr6a4tw5HsgqxPyyEl91q4WJ08qEqO1T_ajx1f_ULb'
            },

            commit: true, // Show a 'Pay Now' button,

            style: {
                size: 'large'
            },

            payment: function(data, actions) {
                return actions.payment.create({
                    payment: {
                        transactions: [
                            {
                                amount: { total: '79.00', currency: 'USD' }
                            }
                        ]
                    }
                });
            },

            onAuthorize: (data, actions) => {
                return actions.payment.execute().then(function(payment) {
                    fetch('/api/buycourse', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: get(payment, 'payer.payer_info.email')
                        })
                    })
                        .then(response => response.json())
                        .then(json => {
                            if (json.email) {
                                localStorage.setItem('bap-token', json.token);
                                self.props.onSetEmail(json.email);
                                self.props.history.push('/welcome');
                            } else {
                                self.setState({
                                    errorMessage: 'Sorry, something went wrong. Please contact us for assistance.'
                                });
                            }
                        })
                        .catch(error => {
                            self.setState({
                                errorMessage: 'Sorry, something went wrong. Please contact us for assistance.'
                            });
                        });
                });
            }

        }, '#paypal-button');
    }

    renderErrorMessage() {
        if (!this.state.errorMessage) { return null; }

        return <div className="error-message">{this.state.errorMessage}</div>;
    }

    render() {
        return (
            <div className="buy">
                {this.renderErrorMessage()}
                <div className="buy__reasons">
                    <div className="buy__reasons-title">
                        What you get
                    </div>
                    <div className="buy__reason">
                        <i className="fa fa-star" />&nbsp;
                        Access to <strong>every video</strong>, including proven strategies <strong>nobody else teaches</strong>
                    </div>
                    <div className="buy__reason">
                        <i className="fa fa-star" />&nbsp;
                        Exclusive PDF summaries downloads - <strong>All English grammar rules</strong>, <strong>all math concepts</strong>, <strong>strategy summaries for reading and science</strong>
                    </div>
                    <div className="buy__reason">
                        <i className="fa fa-star" />&nbsp;
                        <strong>Lifetime access</strong>, including <strong>all new videos and features</strong> to the course
                    </div>
                    <div className="buy__reason">
                        <i className="fa fa-star" />&nbsp;
                        <strong>No risk, lifetime money-back guarantee</strong>. If you are <strong>ever</strong> dissatisfied, simply ask for a refund, and you will receive it <strong>immediately, no questions asked</strong>!
                    </div>
                </div>
                <div className="buy__warning">
                    <div className="buy__lock-in">
                        <strong>Lock in the "NOW" price</strong> before it goes up!
                    </div>
                    <div className="buy__price">
                        <div className="buy__price-column">
                            <div className="buy__price-title">
                                NOW
                            </div>
                            <div className="buy__price-amount">
                                $79
                            </div>
                        </div>
                        <div className="buy__price-column buy__price-column--next">
                            <div className="buy__price-title buy__price-title--next">
                                NEXT PRICE (After 50 purchases)
                            </div>
                            <div className="buy__price-amount buy__price-amount--next">
                                $99
                            </div>
                        </div>
                    </div>

                    <div id="paypal-button" />

                    <div className="buy__secure-images">
                        <img src="/images/paypal-image.png" alt="" />
                        &nbsp;&nbsp;
                        <img src="/images/money-back.png" alt="" />
                    </div>
                </div>
            </div>
        );
    }
}

const mapActionsToProps = {
    onSetEmail: setEmail
};

export default connect(null, mapActionsToProps)(Buy);
