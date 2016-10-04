import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import StripeCheckout from 'react-stripe-checkout';

import { onToken } from 'api/app';
import { setEmail } from 'actions/app';
import { setCourseData } from 'actions/course';


import OldVideos from 'components/Shared/OldVideos';
import NewVideos from 'components/Shared/NewVideos';

export const AMOUNT = 4900;

export class Payment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newVideoList: false,
            PDFList: false
        };

        this.toggleNewVideoList = this.toggleList.bind(this, 'newVideoList');
        this.togglePDFList = this.toggleList.bind(this, 'PDFList');
        this.onToken = this.onToken.bind(this);
        this.onStripeCheckoutClick = this.onStripeCheckoutClick.bind(this);
    }

    toggleList(type) {
        $(this.refs[type]).slideToggle();
        this.setState({ [type]: !this.state[type] });
    }

    onToken(token) {
        const { setEmail, setCourseData } = this.props;

        // LOGGING
        $.ajax({
            url: '/api/app/ontoken',
            contentType: 'application/json'
        });

        const spinnerEl = $('.spinner');

        spinnerEl.removeClass('hidden');

        onToken(token, AMOUNT).then(response => {
            $.ajax({
                type: 'POST',
                url: '/api/app/buyresponse',
                contentType: 'application/json',
                data: JSON.stringify({ response })
            });

            if (response.email) {
                setEmail(response.email);
                setCourseData(response.userData);
                spinnerEl.addClass('hidden');
                this.context.router.push('/welcome');
                localStorage.setItem('bap-token', response.token);
            }
        });
    }

    onStripeCheckoutClick() {

    }

    render() {
        return (
            <section className="why__buy-container">
                <div className="why__buy-call-to-action-container">
                    <div className="why__buy-prices">
                        <div className="why__buy-price-section">
                            <div className="why__buy-price-future">$249</div>
                            <div className="why__buy-price-future-text">Future Price</div>
                        </div>
                        <div className="why__buy-price-section">
                            <div className="why__buy-price-current">$49</div>
                            <div className="why__buy-price-current-text">Limited Time Beta Price!</div>
                        </div>
                    </div>
                    <div className="why__buy-increase-price">Price will increase after <strike>20</strike> <strike>15</strike> <strike>10</strike> <strong>5</strong> more purchases!</div>
                    <div onClick={this.onStripeCheckoutClick}>
                        <StripeCheckout
                            name="Best ACT Prep"
                            description="Online Course"
                            amount={AMOUNT}
                            allowRememberMe={false}
                            token={this.onToken}
                            stripeKey="pk_live_NUuMaTTOz4G39wcvUOwz7zaX"
                        >
                            <button className="why__buy-button">Secure Checkout</button>
                        </StripeCheckout>
                    </div>
                    <div className="why__stripe-images-container">
                        <span>
                            <img src="/images/stripe-secure.png" className="why__stripe-image" />
                            <img src="/images/money-back.png" />
                        </span>
                    </div>
                </div>
                <div className="why__buy-details">
                    <p className="why__buy-details-heading">Get lifetime access while we continue building the course!</p>
                    <p className="why__buy-details-text">What you get so far:</p>
                    <ul className="why__buy-details-list">
                        <li>
                            Every video (over 65) from our original course, which we sold for $149 (Modules Z1-Z9). Most of these videos (including some of our best/favorite strategies) are not available on YouTube!<br />
                            <OldVideos />
                        </li>
                        <li>
                            Every new Best ACT Prep video as we continue releasing them (17 so far)<br />
                            <NewVideos />
                        </li>
                        <li>
                            Printable PDF study guides for every grammar rule and every math concept covered by the ACT<br />
                            <button className="why__buy-details-show-videos btn btn-default" onClick={this.togglePDFList}>{this.state.PDFList ? 'Hide' : 'Show'} Images</button>
                            <div className="why__buy-details-video-list" ref="PDFList">
                                <img src="/images/review-guide-grammar.png" className="why__PDF-image" />
                                <img src="/images/review-guide-math.png" className="why__PDF-image" />
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}

Payment.contextTypes = {
  router: React.PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
    const boundAppActions = bindActionCreators({ setEmail }, dispatch);
    const boundCourseActions = bindActionCreators({ setCourseData }, dispatch);

    return {
        setEmail: boundAppActions.setEmail,
        setCourseData: boundCourseActions.setCourseData
    };
}

export default connect(null, mapDispatchToProps)(Payment);
