import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import StripeCheckout from 'react-stripe-checkout';
import { onToken } from 'api/app';
import { setUser } from 'actions/app';
import { setCourseData } from 'actions/course';

export class WhyBestActPrep extends React.Component {
    constructor(props) {
        super(props);

        this.onToken = this.onToken.bind(this);
    }

    onToken(token) {
        const spinnerEl = $('.spinner');

        spinnerEl.removeClass('hidden');

        onToken(token).then(response => {
            if (response.email) {
                this.props.setUser(response.email);
                this.props.setCourseData(response.userData);
                spinnerEl.addClass('hidden');
                this.context.router.push('/welcome');
            }
        });
    }

    render() {
        return (
            <div className="page">
                <StripeCheckout
                    name="Best ACT Prep"
                    description="Online Course"
                    amount={5000}
                    image="/act-logo-only.png"
                    allowRememberMe={false}
                    token={this.onToken}
                    stripeKey="pk_test_pMf1kAuzE7xoelXFhHugn1Wy"
                >
                    <button className="stripe-checkout-button">
                        Buy now!
                    </button>
                </StripeCheckout>
                <div className="page__why-content">
                    <div className="why__most-popular">
                        <div className="why__most-popular-text">The most popular ACT prep videos and instructor in the world...</div>
                        <iframe width="373" height="210" src="https://www.youtube.com/embed/8euL7Z8FVL4" frameBorder="0" allowFullScreen className="why__youtube-video"></iframe>
                        <iframe width="373" height="210" src="https://www.youtube.com/embed/y9zCjGHkwWM" frameBorder="0" allowFullScreen className="why__youtube-video"></iframe>
                        <iframe width="373" height="210 " src="https://www.youtube.com/embed/y9zCjGHkwWM" frameBorder="0" allowFullScreen></iframe>
                        <div className="why__most-popular-text--smaller">just got <em><strong>better</strong></em>.</div>
                    </div>
                    <StripeCheckout
                        name="Best ACT Prep"
                        description="Online Course"
                        amount={5000}
                        image="/act-logo-only.png"
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
    const boundAppActions = bindActionCreators({ setUser }, dispatch);
    const boundCourseActions = bindActionCreators({ setCourseData }, dispatch);

    return {
        setUser: boundAppActions.setUser,
        setCourseData: boundCourseActions.setCourseData
    };
}

export default connect(null, mapDispatchToProps)(WhyBestActPrep);
