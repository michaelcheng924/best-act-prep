import React from 'react';

export default class Reading4A1Overview extends React.Component {
    render() {
        return (
            <div className="module">
                <h4 className="module__title--category">4.A.1) ACT Reading Basics</h4>
                <h2 className="module__title">Overview/Format</h2>
                <div className="module__content">
                    <video controls="controls" className="module__video" poster="/images/poster-Reading4B1Overview.png">
                        <source src="https://www.dropbox.com/s/31kyuwm3ogry4jf/Reading4B1Overview.mp4?raw=1" type="video/mp4"/>
                    </video>

                    <div className="module__transcript-container">
                        <h3 className="module__transcript-title">Transcript</h3>

                        <p>The ACT Reading test is the third test of the ACT. It is 35 minutes long and has 40 questions. There are 4 passages with 10 questions each. The questions are multiple choice, with four choices. The four passages are always in this order: 1) Prose Fiction, 2) Social Science, 3) Humanities, and 4) Natural Science. The Prose Fiction passages is the most different out of the four passages, since it is fiction, and the other three passages are non-fiction.</p>

                        <p>You will almost definitely be rushed regarding time for the ACT Reading test, although probably not as rushed as you will be for the science test. So, managing and making the most of the little time you have is extremely important.</p>

                        <p>To get a high score on the ACT Reading test, you should be able to read college-level passages at a pretty good speed with good comprehension, as well as be able to manage and keep track of time well. Both of these skills are equally valuable for the reading test. By following the strategies in this course, reading college-level non-fiction texts consistently, and first taking and analyzing smaller sections of real ACT Reading practice tests and then building up to the entire test, you will be well on your way to getting a great score on the ACT Reading test!</p>
                    </div>
                </div>
            </div>
        );
    }
}
