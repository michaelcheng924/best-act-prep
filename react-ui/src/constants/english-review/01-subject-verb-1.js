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
                    explanation: 'Great work! The singular subject, "stack," matches with the singular verb "looks." We could also take out "of papers" and say, "The stack looks forboding."'
                }
            ]
        },
        {
            question: <span>It seems that the group of boys <strong><em>work/works</em></strong> together well.</span>,
            answers: [
                {
                    text: 'work',
                    correct: false,
                    explanation: 'The subject of the sentence is "group," which is singular. "work" is a plural verb.'
                },
                {
                    text: 'works',
                    correct: true,
                    explanation: 'Great work! The singular subject, "group," matches with the singular verb "works." We could also take out "of boys" and say, "The group works together well."'
                }
            ]
        },
        {
            question: <span>The bucket of apples <strong><em>is/are</em></strong> sitting in the sun.</span>,
            answers: [
                {
                    text: 'is',
                    correct: true,
                    explanation: 'Great work! The singular subject, "bucket," matches with the singular verb "is." We could also take out "of apples" and say, "The bucket is sitting in the sun."'
                },
                {
                    text: 'are',
                    correct: false,
                    explanation: 'The subject of the sentence is "bucket," which is singular. "are" is a plural verb.'
                }
            ]
        },
        {
            question: <span>Lots of deer in the forest <strong><em>is/are</em></strong> looking for food.</span>,
            answers: [
                {
                    text: 'is',
                    correct: false,
                    explanation: 'The subject of the sentence is "deer," which in this case is plural. "is" is a plural verb.'
                },
                {
                    text: 'are',
                    correct: true,
                    explanation: 'Great work! The plural subject, "deer," matches with the plural verb "are."'
                }
            ]
        },
        {
            question: <span>The family of squirrels <strong><em>search/searches</em></strong> for acorns together</span>,
            answers: [
                {
                    text: 'search',
                    correct: false,
                    explanation: 'The subject of the sentence is "family," which is singular. "search" is a plural verb.'
                },
                {
                    text: 'searches',
                    correct: true,
                    explanation: 'Great work! The singular subject, "family," matches with the singular verb "searches." We could also take out "of squirrels" and say, "The family searches for acorns together."'
                }
            ]
        }
    ]
}

export default SUBJECT_VERB_1;
