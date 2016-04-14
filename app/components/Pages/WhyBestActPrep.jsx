import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import StripeCheckout from 'react-stripe-checkout';
import { onToken } from 'api/app';
import { setUser } from 'actions/app';
import { setCourseData } from 'actions/course';

const AMOUNT = 50;

export class WhyBestActPrep extends React.Component {
    constructor(props) {
        super(props);

        this.onToken = this.onToken.bind(this);
    }

    onToken(token) {
        const spinnerEl = $('.spinner');

        spinnerEl.removeClass('hidden');

        onToken(token, AMOUNT).then(response => {
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
                <div className="why__beta-explanation">
                    Get lifetime access to the Best ACT Prep online course while we continue building it! The price will go up as we add more to the course. For now, it's basically free, so sign up while you can! Ask for a refund anytime. Easy.
                </div>
                <StripeCheckout
                    name="Best ACT Prep"
                    description="Online Course"
                    amount={AMOUNT}
                    image="/images/act-logo-only.png"
                    allowRememberMe={false}
                    token={this.onToken}
                    stripeKey="pk_live_NUuMaTTOz4G39wcvUOwz7zaX"
                >
                    <button className="stripe-checkout-button">
                        Special Beta Lifetime Access ($3)
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
