import React from 'react';

export default class Science5A1Overview extends React.Component {
    render() {
        return (
            <div className="module">
                <h4 className="module__title--category">5.A.1) ACT Science Basics</h4>
                <h2 className="module__title">Overview/Format</h2>
                <div className="module__content">
                    <video controls="controls" className="module__video" poster="/images/poster-Science5B1Overview.png">
                        <source src="https://www.dropbox.com/s/ij622makq2s9rwc/Science5B1Overview.mp4?raw=1" type="video/mp4"/>
                    </video>

                    <div className="module__transcript-container">
                        <h3 className="module__transcript-title">Transcript</h3>

                        <p>The ACT Science test is the fourth test of the ACT. It is 35 minutes and has 40 questions, just like the reading test. There will be seven passages: 3 Data Representation passages (5 questions each), 3 Research Summary passages (6 questions each), and 1 Conflicting Viewpoints passage (7 questions). The Conflicting Viewpoints passage is the most different, and probably the most challenging, out of the seven passages, since it is a technical reading comprehension passage, whereas the other six passages are about finding information in charts and tables.</p>

                        <p>You don’t really need to come into the science test with any prior science knowledge, although I have seen a few questions here and there that assume some prior science knowledge. However, since you can’t really prepare for these questions, and they are few and far between, I wouldn’t worry about this.</p>

                        <p>You will probably be even more rushed regarding time for the ACT Science test than for the reading test, since there are seven different passages to get through. So again, managing and making the most of every minute you have is extremely important.</p>

                        <p>To get a high score on the ACT Science test, you should be able to manage and keep track of time well, as well as take as many practice tests as you can, to get used to the many different kinds of passages that can show up on the ACT science test. By following the strategies in this course, as well as by first taking and analyzing smaller sections of real ACT Science practice tests and then building up to the entire test, you will be well on your way to getting a great score on the ACT Science test!</p>
                    </div>
                </div>
            </div>
        );
    }
}
