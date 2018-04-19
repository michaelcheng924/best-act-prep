import React from 'react';

const SUBJECT_VERB_1 = {
    title: 'Subject Verb Agreement, Rule #1',
    rule: (
        <div>A singular subject (<em>she, Tom, bear</em>) takes a singular verb (<em>is, goes, climbs</em>, whereas a plural subject takes a plural verb. Be careful when a subject is followed by the word "of"!</div>
    ),
    example: (
        <div>
            <div><strong>Example:</strong> The <span className="blue">list</span> of items <span className="purple">is</span>/are on the board.</div>
            <br />
            <div><strong>Explanation:</strong> The subject is <em>list</em>, so we will choose <em>is</em> for the verb. Be careful--many people will identify the plural <em>items</em> as the subject, but it is <em>not</em> the subject.</div>
            <div><em>Tip: When you see the phrase "of SOMETHING," take it out of the sentence. "The <span className="blue">list</span> <span className="purple">is</span> on the board.</em></div>
        </div>
    ),
    questions: [
        {
            question: <span>The stack of papers <strong><em>look/looks</em></strong> forboding.</span>,
            answers: [
                {
                    text: 'look',
                    correct: false,
                    explanation: 'The subject of the sentence is "stack," which is singular. "look" is a plural verb.'
                },
                {
                    text: 'looks',
                    correct: true,
                    explanation: 'Great work! The singular subject, "stack," matches with the singular verb "looks."'
                }
            ]
        }
    ]
}

export default SUBJECT_VERB_1;
