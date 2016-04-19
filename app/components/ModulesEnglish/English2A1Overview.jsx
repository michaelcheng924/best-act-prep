import React from 'react';

export default class English2A1Overview extends React.Component {
    render() {
        return (
            <div className="module">
                <h4 className="module__title--category">2.A.1) ACT English Basics</h4>
                <h2 className="module__title">Overview/Format</h2>
                <div className="module__content">
                    <video controls="controls" className="module__video" poster="/images/poster-English2B1Overview.png">
                        <source src="https://www.dropbox.com/s/tjg7mzyf7ftwje4/English2B1Overview.mp4?raw=1" type="video/mp4"/>
                    </video>

                    <div className="module__transcript-container">
                        <h3 className="module__transcript-title">Transcript</h3>

                        <p>The ACT English test is the first test of the ACT. It is 45 minutes long and has 75 questions. There are 5 passages with 15 questions each. The questions are multiple choice, with four choices. You will need to answer questions about grammar and usage, punctuation, sentence structure, strategy, organization, and style, which fall into two broader categories: 1) Usage/mechanics and 2) Rhetorical skills. Spelling and vocabulary are not tested on the ACT English test.</p>

                        <p>You probably won’t struggle with finishing this test in the 45 minutes you are given. Students generally consider this the “easiest” section of the ACT, but because of this, it is graded more strictly than the other tests, so you should be extra careful about not making silly mistakes, which will cost you more than for the other sections of the ACT.</p>

                        <p>To get a high score on the ACT English test, you should be familiar with all of the major grammar rules covered by the test, as well as have good reading comprehension skills to do well on the rhetorical skills questions. By following the strategies in this course, as well as by first taking and analyzing smaller sections of real ACT English practice tests and then building up to the entire test, you will be well on your way to getting a great score on the ACT English test!</p>
                    </div>
                </div>
            </div>
        );
    }
}
