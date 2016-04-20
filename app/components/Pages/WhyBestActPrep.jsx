import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import StripeCheckout from 'react-stripe-checkout';
import { onToken } from 'api/app';
import { setUser } from 'actions/app';
import { setCourseData } from 'actions/course';

const AMOUNT = 4900;

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
                localStorage.setItem('bap-token', response.token);
            }
        });
    }

    render() {
        return (
            <div className="page">
                <div className="why__beta-explanation">
                    <p>Get lifetime access to the Best ACT Prep online course while we continue building it! The price will go up as we add more to the course. This $49 includes every video in the course we used to sell for $149! Ask for a refund anytime. Easy.</p>
                    <p><strong>Note:</strong> While we continue building the course, you may notice problems and crazy things happening. That's why it's only $49 for everything right now :). Feel free to contact us any time for help at <a href="mailto:support@bestactprep.co">support@bestactprep.co.</a></p>
                </div>

                <div className="why__so-far">
                    <div className="why__stripe-container">
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
                                Special Beta Lifetime Access ($49)
                            </button>
                        </StripeCheckout>
                        <br />
                        <div className="why__stripe-images-container">
                            <span>
                                <img src="/images/stripe-secure.png" className="why__stripe-image" />
                                <img src="/images/money-back.png" />
                            </span>
                        </div>
                    </div>
                    <h3 className="why__so-far-heading">Current Features:</h3>
                    <div className="why__so-far-tagline">Get all of this for <strong><em>just $49</em></strong>! What?! Click above to get started.</div>
                    <div className="why__so-far-everything">Plus, get <strong><em>EVERYTHING</em></strong> we add in the future (and we're working quite hard on this) without paying a cent more!</div>
                        <h4>Every Video from the Old Best ACT Prep Course (Over 65 Videos)!! (Modules Z1-Z9)</h4>
                        <p>Most of these videos (including some of our best/favorite strategies) are not available on YouTube!</p>
                        <img src="/images/poster-0-1-motivated.png" className="why__so-far-poster" />
                        <img src="/images/poster-0-2-format.png" className="why__so-far-poster" />
                        <img src="/images/poster-0-3-most-important.png" className="why__so-far-poster" />
                        <img src="/images/poster-0-4-recommended-reading.png" className="why__so-far-poster" />
                        <img src="/images/poster-0-5-watch.png" className="why__so-far-poster" />
                        <img src="/images/poster-0-6-tips.png" className="why__so-far-poster" />
                        <img src="/images/poster-1s-0-intro.png" className="why__so-far-poster" />
                        <img src="/images/poster-1s-1-less-is-better.png" className="why__so-far-poster" />
                        <img src="/images/poster-1s-2-reading-passage.png" className="why__so-far-poster" />
                        <img src="/images/poster-1s-3-context.png" className="why__so-far-poster" />
                        <img src="/images/poster-1s-4-out-loud.png" className="why__so-far-poster" />
                        <img src="/images/poster-1s-5-types-of-questions.png" className="why__so-far-poster" />
                        <img src="/images/poster-1s-6-skipping-circling.png" className="why__so-far-poster" />
                        <img src="/images/poster-1s-7-bubbling.png" className="why__so-far-poster" />
                        <img src="/images/poster-1p-0-analyze.png" className="why__so-far-poster" />
                        <img src="/images/poster-1p-1-1-passage.png" className="why__so-far-poster" />
                        <img src="/images/poster-1p-1-timer-1-passage.png" className="why__so-far-poster" />
                        <img src="/images/poster-1p-2-full-test.png" className="why__so-far-poster" />
                        <img src="/images/poster-1p-2-timer-full-test.png" className="why__so-far-poster" />
                        <img src="/images/poster-2s-0-intro.png" className="why__so-far-poster" />
                        <img src="/images/poster-2s-1-faster-beginning.png" className="why__so-far-poster" />
                        <img src="/images/poster-2s-2-answer-choices.png" className="why__so-far-poster" />
                        <img src="/images/poster-2s-3-random-easy.png" className="why__so-far-poster" />
                        <img src="/images/poster-2s-4-test-twice.png" className="why__so-far-poster" />
                        <img src="/images/poster-2s-5-diagrams.png" className="why__so-far-poster" />
                        <img src="/images/poster-2s-6-calculator.png" className="why__so-far-poster" />
                        <img src="/images/poster-2s-7-bubbling.png" className="why__so-far-poster" />
                        <img src="/images/poster-2p-0-analyze.png" className="why__so-far-poster" />
                        <img src="/images/poster-2p-1-first-30.png" className="why__so-far-poster" />
                        <img src="/images/poster-2p-1-timer-first-30.png" className="why__so-far-poster" />
                        <img src="/images/poster-2p-2-last-30.png" className="why__so-far-poster" />
                        <img src="/images/poster-2p-2-timer-last-30.png" className="why__so-far-poster" />
                        <img src="/images/poster-2p-3-full-test.png" className="why__so-far-poster" />
                        <img src="/images/poster-2p-3-timer-full-test.png" className="why__so-far-poster" />
                        <img src="/images/poster-3s-0-intro.png" className="why__so-far-poster" />
                        <img src="/images/poster-3s-1-passage-first.png" className="why__so-far-poster" />
                        <img src="/images/poster-3s-2-how-fast.png" className="why__so-far-poster" />
                        <img src="/images/poster-3s-3-key-info.png" className="why__so-far-poster" />
                        <img src="/images/poster-3s-4-time-limits.png" className="why__so-far-poster" />
                        <img src="/images/poster-3s-5-using-finger.png" className="why__so-far-poster" />
                        <img src="/images/poster-3s-6-skipping.png" className="why__so-far-poster" />
                        <img src="/images/poster-3s-7-prose-fiction.png" className="why__so-far-poster" />
                        <img src="/images/poster-3s-8-types-of-questions.png" className="why__so-far-poster" />
                        <img src="/images/poster-3s-9-wrong-choices.png" className="why__so-far-poster" />
                        <img src="/images/poster-3s-10-bubbling.png" className="why__so-far-poster" />
                        <img src="/images/poster-3p-0-analyze.png" className="why__so-far-poster" />
                        <img src="/images/poster-3p-1-1-passage.png" className="why__so-far-poster" />
                        <img src="/images/poster-3p-1-timer-1-passage.png" className="why__so-far-poster" />
                        <img src="/images/poster-3p-3-2-passages.png" className="why__so-far-poster" />
                        <img src="/images/poster-3p-4-timer-2-passages.png" className="why__so-far-poster" />
                        <img src="/images/poster-3p-5-full-test.png" className="why__so-far-poster" />
                        <img src="/images/poster-3p-5-timer-full-test.png" className="why__so-far-poster" />
                        <img src="/images/poster-4s-0-intro.png" className="why__so-far-poster" />
                        <img src="/images/poster-4s-1-format.png" className="why__so-far-poster" />
                        <img src="/images/poster-4s-2-finger.png" className="why__so-far-poster" />
                        <img src="/images/poster-4s-3-managing-time.png" className="why__so-far-poster" />
                        <img src="/images/poster-4s-4-non-conflicting.png" className="why__so-far-poster" />
                        <img src="/images/poster-4s-5-conflicting.png" className="why__so-far-poster" />
                        <img src="/images/poster-4s-6-skipping.png" className="why__so-far-poster" />
                        <img src="/images/poster-4s-7-bubbling.png" className="why__so-far-poster" />
                        <img src="/images/poster-4p-0-analyze.png" className="why__so-far-poster" />
                        <img src="/images/poster-4p-1-1-passage.png" className="why__so-far-poster" />
                        <img src="/images/poster-4p-1-timer-1-passage.png" className="why__so-far-poster" />
                        <img src="/images/poster-4p-3-two-parts.png" className="why__so-far-poster" />
                        <img src="/images/poster-4p-4a-timer-6-passages.png" className="why__so-far-poster" />
                        <img src="/images/poster-4p-4b-timer-conflicting.png" className="why__so-far-poster" />
                        <img src="/images/poster-4p-5-full-test.png" className="why__so-far-poster" />
                        <img src="/images/poster-4p-6-timer-full-test.png" className="why__so-far-poster" />
                    <hr />
                    <div className="why__so-far-feature">
                        <h4>All Grammar Rules PDF (3 pages) - Module 2.D.1</h4>
                        <p>All of the major grammar rules the ACT English test covers (with explanations and examples for each) in a convenient PDF file, which you can download and print out. Use it to learn/study new grammar concepts or as a way to quickly review everything you need to know for the English test!</p>
                        <p>Commas, apostrophes, semicolons, dashes, run-ons, similar words, avoiding wordiness, prepositions, verb tense, transitions, subject-verb agreement, pronoun-antecedent agreement, misplaced modifiers, and more!</p>
                    </div>
                    <img src="/images/review-guide-grammar.png" className="why__so-far-image" />
                    <hr />
                    <div className="why__so-far-feature">
                        <h4>All Math Concepts PDF (22 pages) - Module 3.D.1</h4>
                        <p>All of the major math concepts the ACT Math test covers (with explanations and examples for each) in a convenient PDF file, which you can download and print out. Use it to learn/study new math concepts or as a way to quickly review everything you need to know for the Math test!</p>
                        <p>General number concepts, divisibility, fractions and decimals, ratios/proportions/rates, averages, roots, algebra, factoring, solving equations, coordinate geometry, plane geometry, shapes, trigonometry, and more!</p>
                    </div>
                    <img src="/images/review-guide-math.png" className="why__so-far-image" />
                </div>

                <div className="page__why-content">
                    <div className="why__most-popular">
                        <div className="why__most-popular-text">The most popular ACT prep videos and instructor in the world...</div>
                        <iframe width="373" height="210" src="https://www.youtube.com/embed/8euL7Z8FVL4" frameBorder="0" allowFullScreen className="why__youtube-video"></iframe>
                        <iframe width="373" height="210" src="https://www.youtube.com/embed/y9zCjGHkwWM" frameBorder="0" allowFullScreen className="why__youtube-video"></iframe>
                        <iframe width="373" height="210 " src="https://www.youtube.com/embed/y9zCjGHkwWM" frameBorder="0" allowFullScreen></iframe>
                        <div className="why__most-popular-text--bigger">just got <em><strong>better</strong></em>.</div>
                    </div>
                    <div className="why__course-screenshots">
                        <h3 className="why__course-screenshots-heading--main">
                            <em>Introducing the <span className="why__course-screenshots-heading--main--orange">NEW</span>...</em>
                        </h3>
                        <h2 className="why__course-screenshots-heading--main">Best ACT Prep Online Course</h2>
                        <h4 className="why__course-screenshots-heading--tagline">
                            A completely custom online ACT prep course built from the ground up.
                        </h4>
                        <img src="/images/screenshot-app.png" className="why__course-screenshots-image" />
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
