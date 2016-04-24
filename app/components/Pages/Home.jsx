import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setActiveTab } from 'actions/app';

export class Home extends React.Component {
    constructor(props) {
        super(props);

        this.setActiveTabWhy = this.setActiveTab.bind(this, '/why-best-act-prep');
    }

    componentDidMount() {
        $('.home').fadeIn();
    }

    setActiveTab(tab) {
        this.props.setActiveTab(tab);
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
                            <div className="home__testimonials-author">- (Non-English name)</div>
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
