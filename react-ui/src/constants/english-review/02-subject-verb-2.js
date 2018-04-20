import React from 'react';

const SUBJECT_VERB_2 = {
    id: 'subject-verb-2',
    title: 'Subject Verb Agreement, Rule #2',
    rule: (
        <div>Two singular subjects connected by <em>or, either/or,</em> or <em>neither/nor</em> require a singular verb. The correct answer oftentimes does not sound right!</div>
    ),
    example: (
        <div>
            <div><strong>Examples:</strong></div>
            <div>My <span className="blue">grandmother or my grandfather</span> <span className="purple">is arriving</span> by train today.</div>
            <div>Neither <span className="blue">Joseph nor Darah</span> <span className="purple">is</span> available.</div>
            <div>Either <span className="blue">John or Sandra</span> <span className="purple">is helping</span> tomorrow with the job.</div>
        </div>
    ),
    questions: [
        {
            question: <span>Neither the bear nor the giraffe <strong>is/are</strong> doing anything exciting today at the zoo.</span>,
            answers: [
                {
                    text: 'is',
                    correct: true,
                    explanation: 'Great work! Since "bear" and "giraffe" are both singular, "Neither" will use a singular verb. "is" is the singular verb here.'
                },
                {
                    text: 'are',
                    correct: false,
                    explanation: 'Since "bear" and "giraffe" are singular, "Neither" needs to use a singular verb. "are" is a plural verb.'
                }
            ]
        },
        {
            question: <span>Either my brother or my sister <strong>run/runs</strong> the fastest.</span>,
            answers: [
                {
                    text: 'run',
                    correct: false,
                    explanation: 'Since "brother" and "sister" are singular, "Either" needs to use a singular verb. "run" is a plural verb.'
                },
                {
                    text: 'runs',
                    correct: true,
                    explanation: 'Great work! Since "brother" and "sister" are both singular, "Either" will use a singular verb. "runs" is the singular verb here.'
                }
            ]
        },
        {
            question: <span>Samuel or Rebecca <strong>is/are</strong> swimming in the competition today.</span>,
            answers: [
                {
                    text: 'is',
                    correct: true,
                    explanation: 'Great work! Since "Samuel" and "Rebecca" are both singular, "or" will use a singular verb. "is" is the singular verb here.'
                },
                {
                    text: 'are',
                    correct: false,
                    explanation: 'Since "Samuel" and "Rebecca" are singular, "or" needs to use a singular verb. "are" is a plural verb.'
                }
            ]
        }
    ]
}

export default SUBJECT_VERB_2;
