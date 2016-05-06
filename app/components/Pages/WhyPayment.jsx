import React from 'react';

export default class WhyPayment export React.Component {
    constructor(props) {
        super(props);

        this.state = {
            oldVideoList: false,
            newVideoList: false,
            PDFList: false
        };

        this.toggleVideoList = this.toggleList.bind(this, 'videoList');
        this.togglePDFList = this.toggleList.bind(this, 'PDFList');
    }

    toggleList(type) {

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
                    <div className="why__buy-increase-price">Price will increase after the first 20 purchases!</div>
                    <StripeCheckout
                        name="Best ACT Prep"
                        description="Online Course"
                        amount={AMOUNT}
                        image="/images/act-logo-only.png"
                        allowRememberMe={false}
                        token={this.onToken}
                        stripeKey="pk_live_NUuMaTTOz4G39wcvUOwz7zaX"
                    >
                        <button className="why__buy-button">Secure Checkout</button>
                    </StripeCheckout>
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
                            <button className="why__buy-details-show-videos btn btn-default" onClick={this.toggleOldVideoList}>{this.state.oldVideoList ? 'Hide' : 'Show'} video list</button>
                            <div className="why__buy-details-video-list" ref="oldVideoList">
                                <img src="/images/poster-0-1-motivated.png" className="why__video-poster" />
                                <img src="/images/poster-0-2-format.png" className="why__video-poster" />
                                <img src="/images/poster-0-3-most-important.png" className="why__video-poster" />
                                <img src="/images/poster-0-4-recommended-reading.png" className="why__video-poster" />
                                <img src="/images/poster-0-5-watch.png" className="why__video-poster" />
                                <img src="/images/poster-0-6-tips.png" className="why__video-poster" />
                                <img src="/images/poster-1s-0-intro.png" className="why__video-poster" />
                                <img src="/images/poster-1s-1-less-is-better.png" className="why__video-poster" />
                                <img src="/images/poster-1s-2-reading-passage.png" className="why__video-poster" />
                                <img src="/images/poster-1s-3-context.png" className="why__video-poster" />
                                <img src="/images/poster-1s-4-out-loud.png" className="why__video-poster" />
                                <img src="/images/poster-1s-5-types-of-questions.png" className="why__video-poster" />
                                <img src="/images/poster-1s-6-skipping-circling.png" className="why__video-poster" />
                                <img src="/images/poster-1s-7-bubbling.png" className="why__video-poster" />
                                <img src="/images/poster-1p-0-analyze.png" className="why__video-poster" />
                                <img src="/images/poster-1p-1-1-passage.png" className="why__video-poster" />
                                <img src="/images/poster-1p-1-timer-1-passage.png" className="why__video-poster" />
                                <img src="/images/poster-1p-2-full-test.png" className="why__video-poster" />
                                <img src="/images/poster-1p-2-timer-full-test.png" className="why__video-poster" />
                                <img src="/images/poster-2s-0-intro.png" className="why__video-poster" />
                                <img src="/images/poster-2s-1-faster-beginning.png" className="why__video-poster" />
                                <img src="/images/poster-2s-2-answer-choices.png" className="why__video-poster" />
                                <img src="/images/poster-2s-3-random-easy.png" className="why__video-poster" />
                                <img src="/images/poster-2s-4-test-twice.png" className="why__video-poster" />
                                <img src="/images/poster-2s-5-diagrams.png" className="why__video-poster" />
                                <img src="/images/poster-2s-6-calculator.png" className="why__video-poster" />
                                <img src="/images/poster-2s-7-bubbling.png" className="why__video-poster" />
                                <img src="/images/poster-2p-0-analyze.png" className="why__video-poster" />
                                <img src="/images/poster-2p-1-first-30.png" className="why__video-poster" />
                                <img src="/images/poster-2p-1-timer-first-30.png" className="why__video-poster" />
                                <img src="/images/poster-2p-2-last-30.png" className="why__video-poster" />
                                <img src="/images/poster-2p-2-timer-last-30.png" className="why__video-poster" />
                                <img src="/images/poster-2p-3-full-test.png" className="why__video-poster" />
                                <img src="/images/poster-2p-3-timer-full-test.png" className="why__video-poster" />
                                <img src="/images/poster-3s-0-intro.png" className="why__video-poster" />
                                <img src="/images/poster-3s-1-passage-first.png" className="why__video-poster" />
                                <img src="/images/poster-3s-2-how-fast.png" className="why__video-poster" />
                                <img src="/images/poster-3s-3-key-info.png" className="why__video-poster" />
                                <img src="/images/poster-3s-4-time-limits.png" className="why__video-poster" />
                                <img src="/images/poster-3s-5-using-finger.png" className="why__video-poster" />
                                <img src="/images/poster-3s-6-skipping.png" className="why__video-poster" />
                                <img src="/images/poster-3s-7-prose-fiction.png" className="why__video-poster" />
                                <img src="/images/poster-3s-8-types-of-questions.png" className="why__video-poster" />
                                <img src="/images/poster-3s-9-wrong-choices.png" className="why__video-poster" />
                                <img src="/images/poster-3s-10-bubbling.png" className="why__video-poster" />
                                <img src="/images/poster-3p-0-analyze.png" className="why__video-poster" />
                                <img src="/images/poster-3p-1-1-passage.png" className="why__video-poster" />
                                <img src="/images/poster-3p-1-timer-1-passage.png" className="why__video-poster" />
                                <img src="/images/poster-3p-3-2-passages.png" className="why__video-poster" />
                                <img src="/images/poster-3p-4-timer-2-passages.png" className="why__video-poster" />
                                <img src="/images/poster-3p-5-full-test.png" className="why__video-poster" />
                                <img src="/images/poster-3p-5-timer-full-test.png" className="why__video-poster" />
                                <img src="/images/poster-4s-0-intro.png" className="why__video-poster" />
                                <img src="/images/poster-4s-1-format.png" className="why__video-poster" />
                                <img src="/images/poster-4s-2-finger.png" className="why__video-poster" />
                                <img src="/images/poster-4s-3-managing-time.png" className="why__video-poster" />
                                <img src="/images/poster-4s-4-non-conflicting.png" className="why__video-poster" />
                                <img src="/images/poster-4s-5-conflicting.png" className="why__video-poster" />
                                <img src="/images/poster-4s-6-skipping.png" className="why__video-poster" />
                                <img src="/images/poster-4s-7-bubbling.png" className="why__video-poster" />
                                <img src="/images/poster-4p-0-analyze.png" className="why__video-poster" />
                                <img src="/images/poster-4p-1-1-passage.png" className="why__video-poster" />
                                <img src="/images/poster-4p-1-timer-1-passage.png" className="why__video-poster" />
                                <img src="/images/poster-4p-3-two-parts.png" className="why__video-poster" />
                                <img src="/images/poster-4p-4a-timer-6-passages.png" className="why__video-poster" />
                                <img src="/images/poster-4p-4b-timer-conflicting.png" className="why__video-poster" />
                                <img src="/images/poster-4p-5-full-test.png" className="why__video-poster" />
                                <img src="/images/poster-4p-6-timer-full-test.png" className="why__video-poster" />
                            </div>
                        </li>
                        <li>
                            Every new Best ACT Prep video as we continue releasing them (5 so far)<br />
                            <button className="why__buy-details-show-videos btn btn-default" onClick={this.toggleNewVideoList}>{this.state.newVideoList ? 'Hide' : 'Show'} video list</button>
                            <div className="why__buy-details-video-list" ref="newVideoList">
                                <img src="/images/poster-Foundations12Overview.png" className="why__video-poster" />
                                <img src="/images/poster-English2B1Overview.png" className="why__video-poster" />
                                <img src="/images/poster-Math3B1Overview.png" className="why__video-poster" />
                                <img src="/images/poster-Reading4B1Overview.png" className="why__video-poster" />
                                <img src="/images/poster-Science5B1Overview.png" className="why__video-poster" />
                            </div>
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
            <section className="why__reason-container">
                <div className="why__reason-title-container-background--odd" />
                <div className="why__reason-title-container">
                    <div className="why__reason-number">Reason #1</div>
                    <div className="why__reason-odd-title">Strategies</div>
                    <span className="why__reason-odd-icon glyphicon glyphicon-eye-open" />
                </div>
                <div className="why__reason-content-container">
                    <p>Learn strategies you <strong>won't find anywhere else</strong>, which <strong>Michael himself used to score a 34</strong> on the ACT.</p>
                    <p>These strategies have helped students raise their score by <strong>up to 8 points</strong>!</p>
                    <button className="why__buy-details-show-videos btn btn-default" onClick={this.toggleNewVideoListReasons}>{this.state.newVideoListReasons ? 'Hide' : 'Show'} current video list</button><br />
                    <div className="why__current-videos-tagline">(We're still working on them!)</div>
                    <div className="why__buy-details-video-list" ref="newVideoListReasons">
                        <img src="/images/poster-Foundations12Overview.png" className="why__video-poster" />
                        <img src="/images/poster-English2B1Overview.png" className="why__video-poster" />
                        <img src="/images/poster-Math3B1Overview.png" className="why__video-poster" />
                        <img src="/images/poster-Reading4B1Overview.png" className="why__video-poster" />
                        <img src="/images/poster-Science5B1Overview.png" className="why__video-poster" />
                    </div>
                    <div className="why__testimonials-container">
                        <span className="why__testimonial-container">
                            <div className="why__testiominal">"Dude, your tips blow my mind. They work soooooo well! All the tips I have ever research don't even compare to his advice!"</div>
                            <div className="why__testimonial-author">- Graham L.</div>
                        </span>
                        <span className="why__testimonial-container">
                            <div className="why__testiominal">"More helpful than the princeton review books. I was following their tips, my score got worse, whereas your advice is more like my method and works much better."</div>
                            <div className="why__testimonial-author">- Haris dehwar</div>
                        </span>
                        <span className="why__testimonial-container">
                            <div className="why__testiominal">"With Princeton Review's strategy I got 25 but with yours 33!"</div>
                            <div className="why__testimonial-author">- aloe vera</div>
                        </span>
                        <span className="why__testimonial-container">
                            <div className="why__testiominal">"I initially got a 28, but then I employed this strategy, cleared my mind, and got a 35! I have never been so focused in my life! Haha thanks!"</div>
                            <div className="why__testimonial-author">- Азор_Ахай</div>
                        </span>
                    </div>
                </div>
            </section>
        );
    }
}
