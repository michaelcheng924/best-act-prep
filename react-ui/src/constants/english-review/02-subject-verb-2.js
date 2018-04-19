import React from 'react';

const SUBJECT_VERB_1 = {
    title: 'Subject Verb Agreement, Rule #2',
    rule: (
        <div>Two singular subjects connected by <em>or, either/or,</em> or <em>neither/nor</em> require a singular verb.</div>
    ),
    example: (
        <div>
            <div><strong>Examples:</strong> The <span className="blue">list</span> of items <span className="purple">is</span>/are on the board.</div>
            <div><strong>Explanation:</strong> The subject is <em>list</em>, so we will choose <em>is</em> for the verb. Be careful--many people will identify the plural <em>items</em> as the subject, but it is <em>not</em> the subject.</div>
            <div><em>Tip: When you see the phrase "of SOMETHING," take it out of the sentence. "The <span className="blue">list</span> <span className="purple">is</span> on the board.</em></div>
        </div>
    ),
    questions: [
        {
            question: <div>The stack of papers <strong><em>look/looks</em></strong> forboding.</div>,
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
