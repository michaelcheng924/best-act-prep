import React from 'react';

export default class Foundations11Overview extends React.Component {
    render() {
        return (
            <div className="module">
                <h4 className="module__title--category">1.1) ACT Foundations</h4>
                <h2 className="module__title">ACT Overview/Format</h2>
                <div className="module__content">
                    <video controls="controls" className="module__video" poster="/images/poster-Foundations12Overview.png">
                        <source src="https://www.dropbox.com/s/9d5gqalumu0zpuy/Foundations12Overview.mp4?raw=1" type="video/mp4"/>
                    </video>

                    <div className="module__transcript-container">
                        <h3 className="module__transcript-title">Transcript</h3>

                        <p>The ACT test has four required sections: 1) English, 2) Math, 3) Reading, 4) Science, and one optional section: 5) Writing. It is 2 hours 55 minutes long if you are not taking the writing test, and it is 3 hours 35 minutes long if you are taking the writing test.</p>

                        <p>The English test is 45 minutes long with 75 questions, the Math test is 60 minutes long with 60 questions, the Reading test is 35 minutes long with 40 questions, Science test is 35 minutes long with 40 questions, and the Writing test is 30 minutes long with one essay.</p>

                        <p>Each of the first four tests have a high score of 36, which is also the highest score for the test as a whole. The highest score for the writing test is 12.</p>

                        <p>There is no penalty for guessing, so make sure you at least guess on every question before time is up.</p>

                        <p>The ACT is a timed test, and especially for the Reading and Science tests, you will need to have a plan for managing time if you want to get the highest score possible. One of the primary reasons why many students get low scores is because they run out of time long before they have had a chance to even get to many of the questions.</p>

                        <p>To get a great score on the ACT, you should have good grammar and math content knowledge, good reading comprehension skills, a plan beforehand for how you are going to tackle each section, and the ability to keep track of and manage time throughout the test.</p>

                        <p>We’ll give more details for each individual test as we get there in this course.</p>
                    </div>
                </div>
            </div>
        );
    }
}
