import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import StripeCheckout from 'react-stripe-checkout';
import { onToken } from 'api/app';
import { setUser } from 'actions/app';

export class WhyBestActPrep extends React.Component {
    constructor(props) {
        super(props);

        this.onToken = this.onToken.bind(this);
    }

    onToken(token) {
        onToken(token).then(response => {
            if (response.email) {
                this.props.setUser(response.email);
                this.context.router.push('/welcome');
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

WhyBestActPrep.contextTypes = {
  router: React.PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
    const boundActions = bindActionCreators({ setUser }, dispatch);

    return {
        setUser: boundActions.setUser
    };
}

export default connect(null, mapDispatchToProps)(WhyBestActPrep);
