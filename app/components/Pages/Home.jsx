import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import StripeCheckout from 'react-stripe-checkout';
import { setActiveTab } from 'actions/app';
import { AMOUNT } from 'components/Pages/WhyBestActPrep';

export class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            oldVideoList: false,
            newVideoList: false,
        };

        this.setActiveTabWhy = this.setActiveTab.bind(this, '/why-best-act-prep');
        this.toggleOldVideoList = this.toggleVideoList.bind(this, 'oldVideoList');
        this.toggleNewVideoList = this.toggleVideoList.bind(this, 'newVideoList');
    }

    componentDidMount() {
        $('.home').fadeIn();
        $('.page-container').scrollTop(0);
    }

    setActiveTab(tab) {
        this.props.setActiveTab(tab);
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
            <div className="home">
                <div className="home__call-to-action-container">
                    <h1 className="home__title">The Best ACT Prep Online Course</h1>
                    <div className="home__call-to-action">
                        <img src="/images/michael.png" />
                        <div className="home__call-to-action-text-container">
                            <div className="home__call-to-action-text--odd">The most popular ACT instructor.</div>
                            <div className="home__call-to-action-text--even">The best ACT strategies.</div>
                            <div className="home__call-to-action-text--odd">Higher score guaranteed. No risk, no strings.</div>
                        </div>
                    </div>
                    <a href="/why-best-act-prep"><button className="home__call-to-action-button btn">Learn More</button></a>
                </div>

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

                <div className="home__testimonials-container">
                    <div className="home__testimonials-main">
                        <span className="home__testimonials-main-icon glyphicon glyphicon-heart" />
                        <h2 className="home__testimonials-main-heading">Testimonials</h2>
                        <div className="home__testimonials-main-tagline">
                            See what students/parents say about us!
                        </div>
                    </div>
                    <div className="home__testimonials-quotes-container">
                        <div className="home__testimonials-quote-container">
                            <div className="home__testimonials-quote">Your videos are fantastic! I had a 29 before these videos and got a 33 after! THANKS SO MUCH!!</div>
                            <div className="home__testimonials-author">- Prithvi Boinpally</div>
                        </div>
                        <div className="home__testimonials-quote-container">
                            <div className="home__testimonials-quote">Your guides helped me to get a 32. Please do more.</div>
                            <div className="home__testimonials-author">- Zachary Joseph</div>
                        </div>
                        <div className="home__testimonials-quote-container">
                            <div className="home__testimonials-quote">My daughter was accepted by her dream school mainly accredited to her last ACT composite score of 32 (from 24). Thanks!</div>
                            <div className="home__testimonials-author">- Diane Chang</div>
                        </div>
                        <div className="home__testimonials-quote-container">
                            <div className="home__testimonials-quote">Thanks for all these tips! I got a 33 because of all of your videos.</div>
                            <div className="home__testimonials-author">- Justin Lee</div>
                        </div>
                        <div className="home__testimonials-quote-container">
                            <div className="home__testimonials-quote">THANK YOU SO MUCH!!!!!! I JUST GOT MY SCORES BACK YESTERDAY AND I GOT A 34!!!!!!!!!!! (COMING FROM A 27!!!!!) Your tips were seriously very helpful so thank you VERY MUCH!!!!!!!!!!!!!!!</div>
                            <div className="home__testimonials-author">- Teddy Chaffman</div>
                        </div>
                        <div className="home__testimonials-quote-container">
                            <div className="home__testimonials-quote">32!!! Thanks a bunch, man!</div>
                            <div className="home__testimonials-author">- Dietrich Wolfinger</div>
                        </div>
                        <div className="home__testimonials-quote-container">
                            <div className="home__testimonials-quote">I initially got a 28, but then I employed this strategy, cleared my mind, and got a 35! I have never been so focused in my life! Haha thanks!</div>
                            <div className="home__testimonials-author">- Азор_Ахай</div>
                        </div>
                        <div className="home__testimonials-quote-container">
                            <div className="home__testimonials-quote">How do you sleep at night knowing you helped people? I love you.</div>
                            <div className="home__testimonials-author">- Osrs Monkey</div>
                        </div>
                        <div className="home__testimonials-quote-container">
                            <div className="home__testimonials-quote">Dude you are a genius.</div>
                            <div className="home__testimonials-author">- Rich Piana</div>
                        </div>
                        <div className="home__testimonials-quote-container">
                            <div className="home__testimonials-quote">You're a genius thank you so much.</div>
                            <div className="home__testimonials-author">- ruairi haran</div>
                        </div>
                        <div className="home__testimonials-quote-container">
                            <div className="home__testimonials-quote">I didn't study for the ACT and just used these videos like right before and I got a 31.</div>
                            <div className="home__testimonials-author">- Lauren Jones</div>
                        </div>
                        <div className="home__testimonials-quote-container">
                            <div className="home__testimonials-quote">Watching your videos past few days. By far some of the best summaries of concepts that show up on the test. Good stuff man keep it up.</div>
                            <div className="home__testimonials-author">- Stone Zhang</div>
                        </div>
                        <div className="home__testimonials-quote-container">
                            <div className="home__testimonials-quote">seriously LOVE your videos! taking it Saturday and I feel better knowing these helpful tips! thanks!</div>
                            <div className="home__testimonials-author">- Casa de Churro</div>
                        </div>
                        <div className="home__testimonials-quote-container">
                            <div className="home__testimonials-quote">After watching your videos, I am very confident for my upcoming test. Thanks for the help.</div>
                            <div className="home__testimonials-author">- Mukunda Thakalee</div>
                        </div>
                        <div className="home__testimonials-quote-container">
                            <div className="home__testimonials-quote">THANK YOU! I'm trying to get into college classes in high school and this video helped so much!</div>
                            <div className="home__testimonials-author">- lexie pepsi</div>
                        </div>
                        <div className="home__testimonials-quote-container">
                            <div className="home__testimonials-quote">Thank You So Much!! Your Videos Make Me Feel Like I Have A Chance To Ace The Act!!!</div>
                            <div className="home__testimonials-author">- Roopi Korada</div>
                        </div>
                        <div className="home__testimonials-quote-container">
                            <div className="home__testimonials-quote">Thank u so much I have the act on Tuesday and this is helping me a lot.</div>
                            <div className="home__testimonials-author">- Nicholas Hale</div>
                        </div>
                        <div className="home__testimonials-quote-container">
                            <div className="home__testimonials-quote">Wow! Thank you so much. I'm taking it in a few days. This is really good information to help me prepare.</div>
                            <div className="home__testimonials-author">- Nathon Wesley</div>
                        </div>
                        <div className="home__testimonials-quote-container">
                            <div className="home__testimonials-quote">Thank you so much! I'm taking the ACT this saturday, so this was a MAJOR help.</div>
                            <div className="home__testimonials-author">- Mark Co</div>
                        </div>
                        <div className="home__testimonials-quote-container">
                            <div className="home__testimonials-quote">You're Amazing!!! I love your videos!</div>
                            <div className="home__testimonials-author">- Ly Nguyen</div>
                        </div>
                        <div className="home__testimonials-quote-container">
                            <div className="home__testimonials-quote">My score went from a 21 to a 30 just by your videos and website, thanks! Now I get a full scholarship!!!!!</div>
                            <div className="home__testimonials-author">- KeenanBP1996</div>
                        </div>
                        <div className="home__testimonials-quote-container">
                            <div className="home__testimonials-quote">Thank you so much!!!! I took my ACT in October and I got my scores back today. My reading went from a 28 to a 32 and my science went from a 26 to a 31.  I can now receive 2 years of free tuition from Utah State and I have a chance of being admitted to USC. Seriously, THANK YOU.</div>
                            <div className="home__testimonials-author">- SomeLinkinParkFan</div>
                        </div>
                        <div className="home__testimonials-quote-container">
                            <div className="home__testimonials-quote">Dude, your tips blow my mind. They work soooooo well! All the tips I have ever research don't even compare to his advice! </div>
                            <div className="home__testimonials-author">- Graham L.</div>
                        </div>
                        <div className="home__testimonials-quote-container">
                            <div className="home__testimonials-quote">Raised my score from a 19 to a 24 for science!</div>
                            <div className="home__testimonials-author">- John Jones</div>
                        </div>
                        <div className="home__testimonials-quote-container">
                            <div className="home__testimonials-quote">If you're ever wondering if these videos help us. Believe me they do help and thank you.</div>
                            <div className="home__testimonials-author">- nour romano</div>
                        </div>
                        <div className="home__testimonials-quote-container">
                            <div className="home__testimonials-quote">I love your videos! I struggle very badly with science, and your videos have helped me get a better understanding of it! Thanks!</div>
                            <div className="home__testimonials-author">- 98Impossible</div>
                        </div>
                        <div className="home__testimonials-quote-container">
                            <div className="home__testimonials-quote">I went from a 16 in science to a 22.</div>
                            <div className="home__testimonials-author">- MEGAjunglejuice</div>
                        </div>
                        <div className="home__testimonials-quote-container">
                            <div className="home__testimonials-quote">This was amazing! It helped me so much, I didn't consider these things before! I will use these strategies on my re-test in June! You rock! :-)</div>
                            <div className="home__testimonials-author">- Dominique Vaughn</div>
                        </div>
                        <div className="home__testimonials-quote-container">
                            <div className="home__testimonials-quote">With Princeton Review's strategy I got 25 but with yours 33!</div>
                            <div className="home__testimonials-author">- aloe vera</div>
                        </div>
                        <div className="home__testimonials-quote-container">
                            <div className="home__testimonials-quote">More helpful than the princeton review books. I was following their tips, my score got worse, whereas your advice is more like my method and works much better.</div>
                            <div className="home__testimonials-author">- Haris dehwar</div>
                        </div>
                        <div className="home__testimonials-quote-container">
                            <div className="home__testimonials-quote">Thank you so much!! I went from a 22 to a 31 in the reading section!</div>
                            <div className="home__testimonials-author">- Christopher Howell</div>
                        </div>
                        <div className="home__testimonials-quote-container">
                            <div className="home__testimonials-quote">best videos ever</div>
                            <div className="home__testimonials-author">- psyruz co</div>
                        </div>
                        <div className="home__testimonials-quote-container">
                            <div className="home__testimonials-quote">It really helped my son. Thank you very much! He had a lot of improvement.</div>
                            <div className="home__testimonials-author">- Muhamad Abdullah</div>
                        </div>
                        <div className="home__testimonials-quote-container">
                            <div className="home__testimonials-quote">Dude this video is the best or should I say these videos are the best :-D</div>
                            <div className="home__testimonials-author">- Keiron Baptiste</div>
                        </div>
                        <div className="home__testimonials-quote-container">
                            <div className="home__testimonials-quote">Thank you, I improved my score on English by 6 points! Helped to increase my composite by 3 points thank you! The digital watch is really a must!</div>
                            <div className="home__testimonials-author">- DJ KHALED</div>
                        </div>
                        <div className="home__testimonials-quote-container">
                            <div className="home__testimonials-quote">You are so much more helpful than this program my school pays a lot of money for and no student likes. I think they should pay you instead. </div>
                            <div className="home__testimonials-author">- TheAddictedtoshoppin</div>
                        </div>
                        <div className="home__testimonials-quote-container">
                            <div className="home__testimonials-quote">Your vids are great! I feel more prepared already.</div>
                            <div className="home__testimonials-author">- Jessica Paul</div>
                        </div>
                        <div className="home__testimonials-quote-container">
                            <div className="home__testimonials-quote">These videos are just loaded with information...so helpful! </div>
                            <div className="home__testimonials-author">- Francis Lau</div>
                        </div>
                        <div className="home__testimonials-quote-container">
                            <div className="home__testimonials-quote">I was really struggling in the ACT. You helped me double my score.</div>
                            <div className="home__testimonials-author">- phantomphoenix</div>
                        </div>
                        <div className="home__testimonials-quote-container">
                            <div className="home__testimonials-quote">Thank you so much! My scores were raised 5 bands on math</div>
                            <div className="home__testimonials-author">- Yousra Salama</div>
                        </div>
                        <div className="home__testimonials-quote-container">
                            <div className="home__testimonials-quote">Thank you so much!!!!! When I first took my ACT it was not a good time. I was very stressed out over other issues and I didn’t really study and embarrassingly got a 17............ I finally got my score back for my second test and studied for a good 2 months straight and watched this video before I took the test again and I kid you not I got a 28!!!!!! I am beyond happy oh my gosh! I thought I would probably go up to maybe a 25 if I was lucky but it went up so much more!!! Thank you for your tips.</div>
                            <div className="home__testimonials-author">- Amie Koster</div>
                        </div>
                        <div className="home__testimonials-quote-container">
                            <div className="home__testimonials-quote">I just wanted to say I appreciate your videos so much. I first took the ACT in September at got a 28. After watching (literally all of) your videos, I realized I needed a lot of improvement in time management! I took the ACT again this October and I got a 33. I didn't study or buy any prep books - all I did was watch my time more efficiently. I bought a digital watch, began reading the reading passages entirely BEFORE trying the questions, used the finger method in science, and skipped math problems that took too long so I could come back to them later. And I guess you could say these little strategies really paid off. Thanks so much for your videos, I LOVE them. Keep up the good work!!</div>
                            <div className="home__testimonials-author">- Carolyn Hanson-Lee</div>
                        </div>
                        <div className="home__testimonials-quote-container">
                            <div className="home__testimonials-quote">YOU ARE MY SAVIOR!!</div>
                            <div className="home__testimonials-author">- MaximumVolume1000</div>
                        </div>
                        <div className="home__testimonials-quote-container">
                            <div className="home__testimonials-quote">I got a 34 in reading.</div>
                            <div className="home__testimonials-author">- Bruni</div>
                        </div>
                        <div className="home__testimonials-quote-container">
                            <div className="home__testimonials-quote">Your tips on taking the ACT are extremely helpful. I watched your video on taking the science portion just before the April test and that video helped me bring my science score up 6 points. Thank you so much for helping me!</div>
                            <div className="home__testimonials-author">- Cocoabean</div>
                        </div>
                        <div className="home__testimonials-quote-container">
                            <div className="home__testimonials-quote">My science score escalated from a 16 to a 26! Thanks!</div>
                            <div className="home__testimonials-author">- blahblahblahangie</div>
                        </div>
                        <div className="home__testimonials-quote-container">
                            <div className="home__testimonials-quote">Thank you! I went from a 20 on the Writing ACT to a 26. On the reading, I went from a 22 to a 26.</div>
                            <div className="home__testimonials-author">- candyapple4242</div>
                        </div>
                        <div className="home__testimonials-quote-container">
                            <div className="home__testimonials-quote">Thank you so much for your videos! Highly recommend his videos for anyone taking the ACT! Best information and advice out there, thanks so much!</div>
                            <div className="home__testimonials-author">- zena zeidan</div>
                        </div>
                        <div className="home__testimonials-quote-container">
                            <div className="home__testimonials-quote">THANK YOU!!!! Your tips helped my ACT score go up 5 points!! I owe it all to you.</div>
                            <div className="home__testimonials-author">- Ula L</div>
                        </div>
                        <div className="home__testimonials-quote-container">
                            <div className="home__testimonials-quote">This is the best video! I passed my act with a 20 ☺️ thank you so much for the tips!</div>
                            <div className="home__testimonials-author">- Vanessa Achille</div>
                        </div>
                        <div className="home__testimonials-quote-container">
                            <div className="home__testimonials-quote">Thank you! I went from a 20 on the Writing ACT to a 26. On the reading, I went from a 22 to a 26.</div>
                            <div className="home__testimonials-author">- candyapple4242</div>
                        </div>
                        <div className="home__testimonials-quote-container">
                            <div className="home__testimonials-quote">Thank you! I went from a 20 on the Writing ACT to a 26. On the reading, I went from a 22 to a 26.</div>
                            <div className="home__testimonials-author">- candyapple4242</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const app = state.app.toJS();

    return {
        activeTab: app.activeTab
    };
}

function mapDispatchToProps(dispatch) {
    const appActions = bindActionCreators({ setActiveTab }, dispatch);

    return appActions;
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
