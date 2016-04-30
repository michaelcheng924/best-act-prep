import { delay } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import StripeCheckout from 'react-stripe-checkout';
import { onToken } from 'api/app';
import { setUser } from 'actions/app';
import { setCourseData } from 'actions/course';

export const AMOUNT = 4900;

export class WhyBestActPrep extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            oldVideoList: false,
            newVideoList: false,
            oldVideoListReasons: false,
            newVideoListReasons: false,
            oldVideoListBottom: false,
            newVideoListBottom: false,
            PDFList: false,
            PDFListBottom: false
        };

        this.toggleOldVideoList = this.toggleVideoList.bind(this, 'oldVideoList');
        this.toggleNewVideoList = this.toggleVideoList.bind(this, 'newVideoList');
        this.toggleNewVideoListReasons = this.toggleVideoList.bind(this, 'newVideoListReasons');
        this.toggleOldVideoListReasons = this.toggleVideoList.bind(this, 'oldVideoListReasons');
        this.toggleOldVideoListBottom = this.toggleVideoList.bind(this, 'oldVideoListBottom');
        this.toggleNewVideoListBottom = this.toggleVideoList.bind(this, 'newVideoListBottom');
        this.togglePDFList = this.toggleVideoList.bind(this, 'PDFList');
        this.togglePDFListBottom = this.toggleVideoList.bind(this, 'PDFListBottom');
        this.onToken = this.onToken.bind(this);
    }

    componentDidMount() {
        $('.why').fadeIn();
        $('.page-container').scrollTop(0);
    }

    toggleVideoList(type) {
        $(this.refs[type]).slideToggle();
        this.setState({ [type]: !this.state[type] });
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
                localStorage.setItem('bap-token', response.token);
            }
        });
    }

    render() {
        return (
            <div className="why">
                <section className="why__title-container">
                    <h1 className="why__title">11 Reasons to Choose the Best ACT Prep Online Course</h1>
                </section>
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
                <section className="why__reason-container">
                    <div className="why__reason-content-container">
                        <p>There's a reason why <strong>Michael's ACT prep videos are at the top of YouTube</strong>. Countless students can testify that using his strategies helped them significantly increase their ACT score.</p>
                        <p>Michael's <strong>favorite strategies can only be found in this course</strong>. Don't be left wondering if you could have gotten a higher ACT score&mdash;<strong>have confidence knowing you are using the absolute best strategies from the top ACT instructor out there</strong>.</p>
                        <div className="why__testimonials-container">
                            <span className="why__testimonial-container">
                                <div className="why__testiominal">"Your videos are fantastic! I had a 29 before these videos and got a 33 after! THANKS SO MUCH!!"</div>
                                <div className="why__testimonial-author">- Prithvi Boinpally</div>
                            </span>
                            <span className="why__testimonial-container">
                                <div className="why__testiominal">"My daughter was accepted by her dream school mainly accredited to her last ACT composite score of 32 (from 24). Thanks!"</div>
                                <div className="why__testimonial-author">- Diane Chang</div>
                            </span>
                            <span className="why__testimonial-container">
                                <div className="why__testiominal">"THANK YOU SO MUCH!!!!!! I JUST GOT MY SCORES BACK YESTERDAY AND I GOT A 34!!!!!!!!!!! (COMING FROM A 27!!!!!) Your tips were seriously very helpful so thank you VERY MUCH!!!!!!!!!!!!!!!"</div>
                                <div className="why__testimonial-author">- Teddy Chaffman</div>
                            </span>
                            <span className="why__testimonial-container">
                                <div className="why__testiominal">"Thanks for all these tips! I got a 33 because of all of your videos."</div>
                                <div className="why__testimonial-author">- Justin Lee</div>
                            </span>
                            <span className="why__testimonial-container">
                                <div className="why__testiominal">"32!!! Thanks a bunch, man!"</div>
                                <div className="why__testimonial-author">- Dietrich Wolfinger</div>
                            </span>
                            <span className="why__testimonial-container">
                                <div className="why__testiominal">"I didn't study for the ACT and just used these videos like right before and I got a 31."</div>
                                <div className="why__testimonial-author">- Lauren Jones</div>
                            </span>
                            <span className="why__testimonial-container">
                                <div className="why__testiominal">"My score went from a 21 to a 30 just by your videos and website, thanks! Now I get a full scholarship!!!!!"</div>
                                <div className="why__testimonial-author">- KeenanBP1996</div>
                            </span>
                            <span className="why__testimonial-container">
                                <div className="why__testiominal">"Thank you so much!!!! I took my ACT in October and I got my scores back today. My reading went from a 28 to a 32 and my science went from a 26 to a 31. I can now receive 2 years of free tuition from Utah State and I have a chance of being admitted to USC. Seriously, THANK YOU."</div>
                                <div className="why__testimonial-author">- SomeLinkinParkFan</div>
                            </span>
                            <span className="why__testimonial-container">
                                <div className="why__testiominal">"Thank you so much!! I went from a 22 to a 31 in the reading section!"</div>
                                <div className="why__testimonial-author">- Christopher Howell</div>
                            </span>
                            <span className="why__testimonial-container">
                                <div className="why__testiominal">"Raised my score from a 19 to a 24 for science!"</div>
                                <div className="why__testimonial-author">- John Jones</div>
                            </span>
                            <span className="why__testimonial-container">
                                <div className="why__testiominal">"I went from a 16 in science to a 22."</div>
                                <div className="why__testimonial-author">- MEGAjunglejuice</div>
                            </span>
                        </div>
                    </div>
                    <div className="why__reason-title-container-background--even" />
                    <div className="why__reason-title-container">
                        <div className="why__reason-number">Reason #2</div>
                        <div className="why__reason-even-title">Instructor</div>
                        <span className="why__reason-even-icon glyphicon glyphicon-education" />
                    </div>
                </section>
                <section className="why__reason-container">
                    <div className="why__reason-title-container-background--odd" />
                    <div className="why__reason-title-container">
                        <div className="why__reason-number">Reason #3</div>
                        <div className="why__reason-odd-title">Real ACT Practice Tests</div>
                        <span className="why__reason-odd-icon glyphicon glyphicon-duplicate" />
                    </div>
                    <div className="why__reason-content-container">
                        <p>Other ACT prep companies (e.g., Kaplan and Princeton Review) use imitation ACT practice tests they created themselves, which <strong>may not accurately reflect what you would get on a real ACT test</strong>.</p>
                        <p>At Best ACT Prep, we have you practice only with <strong>real ACT practice tests</strong> (up to 10, 5 free), and we show you <strong>how to use them effectively</strong>.</p>
                        <div className="why__image-container">
                            <div className="why__image-2-container">
                                <img src="/images/preparing-for-the-act-cover.jpg" className="why__image-practice-tests" />
                            </div>
                            <div className="why__image-2-container">
                                <img src="/images/real-act-prep-guide.jpg" className="why__image-practice-tests" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="why__reason-container">
                    <div className="why__reason-content-container">
                        <p><strong>Make the most of every practice test you take</strong> by first taking and analyzing smaller sections and then building up to the entire test. <strong>We'll show you step-by-step</strong> how to do this.</p>
                        <center><img src="/images/staircase.jpg" /></center>
                    </div>
                    <div className="why__reason-title-container-background--even" />
                    <div className="why__reason-title-container">
                        <div className="why__reason-number">Reason #4</div>
                        <div className="why__reason-even-title">Guided Practice</div>
                        <span className="why__reason-even-icon glyphicon glyphicon-wrench" />
                    </div>
                </section>
                <section className="why__reason-container">
                    <div className="why__reason-title-container-background--odd" />
                    <div className="why__reason-title-container">
                        <div className="why__reason-number">Reason #5</div>
                        <div className="why__reason-odd-title">Content Review/Practice</div>
                        <span className="why__reason-odd-icon glyphicon glyphicon-pencil" />
                    </div>
                    <div className="why__reason-content-container">
                        <p>Learn <strong>all of the grammar and math concepts</strong> you need to know for the ACT effectively and efficiently!</p>
                        <p>Our PDF review sheets are <strong>printable, comprehensive, and great for learning or review</strong>.</p>
                        <div className="why__PDF-image-reason-container">
                            <img src="/images/review-guide-grammar.png" className="why__PDF-image-reason" />
                            <img src="/images/review-guide-math.png" className="why__PDF-image-reason" />
                        </div>
                    </div>
                </section>
                <section className="why__reason-container">
                    <div className="why__reason-content-container">
                        <table className="why__price table table-striped">
                            <thead>
                                <tr>
                                    <th />
                                    <th>Price</th>
                                    <th>Money-back Guarantee</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Other online ACT prep courses</th>
                                    <td>$299-$399</td>
                                    <td>
                                        <ul>
                                            <li>Higher score</li>
                                            <li>Several day trial period</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="why__price-row">Best ACT Prep Online Course</th>
                                    <td>
                                        <span className="why__price-future"><strike>$249</strike> (Future price)</span><br />
                                        <span className="why__price-sale"><strong><em>$49</em></strong> (Special beta price while we continue building the course!)</span></td>
                                    <td>
                                        <ul>
                                            <li>Higher score</li>
                                            <li><strong><em>Unlimited day trial period</em></strong> (Absolutely no risk&mdash;ask for a refund anytime, no strings attached. That's how committed we are to your satisfaction!)</li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="why__reason-title-container-background--even" />
                    <div className="why__reason-title-container">
                        <div className="why__reason-number">Reason #6</div>
                        <div className="why__reason-even-title">Price</div>
                        <span className="why__reason-even-icon glyphicon glyphicon-piggy-bank" />
                    </div>
                </section>
                <section className="why__reason-container">
                    <div className="why__reason-title-container-background--odd" />
                    <div className="why__reason-title-container">
                        <div className="why__reason-number">Reason #7</div>
                        <div className="why__reason-odd-title">Support</div>
                        <span className="why__reason-odd-icon glyphicon glyphicon-envelope" />
                    </div>
                    <div className="why__reason-content-container">
                        <p><strong>Contact us anytime with any questions or problems you have</strong>, and we'll respond ASAP! Consider us your personal ACT consultants :).</p>
                        <center><img src="/images/question-marks.jpg" /></center>
                    </div>
                </section>
                <section className="why__reason-container">
                    <div className="why__reason-content-container">
                        <table className="why__price table table-striped">
                            <thead>
                                <tr>
                                    <th />
                                    <th>Access Expiration</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Other online ACT prep courses</th>
                                    <td>6 months to 1 year</td>
                                </tr>
                                <tr>
                                    <th className="why__price-row">Best ACT Prep Online Course</th>
                                    <td><strong><em>Never</em></strong> - Once you purchase our course, you get it <strong>forever</strong>, along with everything we ever add to it.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="why__reason-title-container-background--even" />
                    <div className="why__reason-title-container">
                        <div className="why__reason-number">Reason #8</div>
                        <div className="why__reason-even-title">Lifetime Access</div>
                        <span className="why__reason-even-icon glyphicon glyphicon-fast-forward" />
                    </div>
                </section>
                <section className="why__reason-container">
                    <div className="why__reason-title-container-background--odd" />
                    <div className="why__reason-title-container">
                        <div className="why__reason-number">Reason #9</div>
                        <div className="why__reason-odd-title">Every Video from the Original Course</div>
                        <span className="why__reason-odd-icon glyphicon glyphicon-play" />
                    </div>
                    <div className="why__reason-content-container">
                        <p>The price of our old course was $149. Get <strong>every video from that course</strong> in addition to the videos in our new course.</p>
                        <button className="why__buy-details-show-videos btn btn-default" onClick={this.toggleOldVideoListReasons}>{this.state.oldVideoListReasons ? 'Hide' : 'Show'} video list</button>
                        <div className="why__buy-details-video-list" ref="oldVideoListReasons">
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
                    </div>
                </section>
                <section className="why__reason-container">
                    <div className="why__reason-content-container">
                        <p>At Best ACT Prep, we are <strong>personally invested in your success</strong>, and we are rooting for you the entire way.</p>
                        <p><strong>We're your biggest fan&mdash;you can do it!</strong></p>
                        <center><img src="/images/cheering.png" /></center>
                    </div>
                    <div className="why__reason-title-container-background--even" />
                    <div className="why__reason-title-container">
                        <div className="why__reason-number">Reason #10</div>
                        <div className="why__reason-even-title">We Care</div>
                        <span className="why__reason-even-icon glyphicon glyphicon-heart" />
                    </div>
                </section>
                <section className="why__reason-full-container">
                    <h2 className="why__reason-full-container-heading">Reason #11: It's a custom-built, modern web-app!</h2>
                    <center><img src="/images/screenshot-app.png" className="why__screenshot-app" /></center>
                </section>
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
                                <button className="why__buy-details-show-videos btn btn-default" onClick={this.toggleOldVideoListBottom}>{this.state.oldVideoListBottom ? 'Hide' : 'Show'} video list</button>
                                <div className="why__buy-details-video-list" ref="oldVideoListBottom">
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
                                <button className="why__buy-details-show-videos btn btn-default" onClick={this.toggleNewVideoListBottom}>{this.state.newVideoListBottom ? 'Hide' : 'Show'} video list</button>
                                <div className="why__buy-details-video-list" ref="newVideoListBottom">
                                    <img src="/images/poster-Foundations12Overview.png" className="why__video-poster" />
                                    <img src="/images/poster-English2B1Overview.png" className="why__video-poster" />
                                    <img src="/images/poster-Math3B1Overview.png" className="why__video-poster" />
                                    <img src="/images/poster-Reading4B1Overview.png" className="why__video-poster" />
                                    <img src="/images/poster-Science5B1Overview.png" className="why__video-poster" />
                                </div>
                            </li>
                            <li>
                                Printable PDF study guides for every grammar rule and every math concept covered by the ACT<br />
                                <button className="why__buy-details-show-videos btn btn-default" onClick={this.togglePDFListBottom}>{this.state.PDFListBottom ? 'Hide' : 'Show'} Images</button>
                                <div className="why__buy-details-video-list" ref="PDFListBottom">
                                    <img src="/images/review-guide-grammar.png" className="why__PDF-image" />
                                    <img src="/images/review-guide-math.png" className="why__PDF-image" />
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
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
