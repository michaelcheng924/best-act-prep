import React from 'react';
import { Link } from 'react-router';
import StripeCheckout from 'react-stripe-checkout';
import { onToken } from 'actions/app';

export default class About extends React.Component {
    constructor(props) {
        super(props);

        this.onToken = this.onToken.bind(this);
    }

    onToken(token) {
        onToken(token).then(response => {
            if (response.email) {
                
            }
        });
    }

    render() {
        return (
            <div className="page">
                <div className="page__content">
                    WHY
                    <StripeCheckout
                        name="Best ACT Prep"
                        description="Online Course"
                        amount={5000}
                        image="http://i288.photobucket.com/albums/ll175/michaelcheng429/act-logo-only-100_zps9rrorraj.png"
                        allowRememberMe={false}
                        token={this.onToken}
                        stripeKey="pk_test_pMf1kAuzE7xoelXFhHugn1Wy"
                    />
                </div>
            </div>
        );
    }
}
