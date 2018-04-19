import React from 'react';

const MULTIPLYING_DIVIDING_POWERS = {
    title: 'Multiplying and Dividing Powers',
    rule: (
        <div>
            <div>To <strong>multiply</strong> powers with the same base, <strong>add the exponents</strong>.</div>
            <div>To <strong>divide</strong> powers with the same base, <strong>subtract the exponents</strong>.</div>
        </div>
    ),
    example: (
        <div>
            <div><strong>Examples:</strong></div>
            <div><em>a</em><sup>3</sup> &times; <em>a</em><sup>4</sup> = <em>a</em><sup>7</sup></div>
            <div><em>a</em><sup>5</sup> &divide; <em>a</em><sup>2</sup> = <em>a</em><sup>3</sup></div>
        </div>
    ),
    questions: [
        {
            question: <span>What is<em>n</em><sup>5</sup> &times; <em>n</em><sup>2</sup>?</span>,
            answers: [
                {
                    text: <div><em>n</em><sup>10</sup></div>,
                    correct: false,
                    explanation: 'It looks like you multiplied the exponents, instead of adding them.'
                },
                {
                    text: <div><em>n</em><sup>7</sup></div>,
                    correct: true,
                    explanation: 'Great work! Adding 2 and 5 gives us 7 as the new exponent.'
                },
                {
                    text: <div><em>n</em><sup>3</sup></div>,
                    correct: false,
                    explanation: 'It looks like you subtracted the exponents, instead of adding them.'
                },
                {
                    text: <div>None of the above</div>,
                    correct: false,
                    explanation: 'The answer is one of the choices above :).'
                }
            ]
        },
        {
            question: <span>What is<em>w</em><sup>4</sup> &times; <em>y</em><sup>3</sup>?</span>,
            answers: [
                {
                    text: <div><em>w</em><sup>12</sup></div>,
                    correct: false,
                    explanation: 'Take a closer look at the bases of the exponents.'
                },
                {
                    text: <div><em>w</em><sup>7</sup></div>,
                    correct: false,
                    explanation: 'Take a closer look at the bases of the exponents.'
                },
                {
                    text: <div><em>w</em><sup>1</sup></div>,
                    correct: false,
                    explanation: 'Take a closer look at the bases of the exponents.'
                },
                {
                    text: <div>None of the above</div>,
                    correct: true,
                    explanation: 'Great work! Since the bases of the exponents are different, we can\'t simply add or subtract the exponents.'
                }
            ]
        },
        {
            question: <span>What is <em>b</em><sup>4</sup> &divide; <em>b</em><sup>8</sup>?</span>,
            answers: [
                {
                    text: <div><em>b</em><sup>32</sup></div>,
                    correct: false,
                    explanation: 'It looks like you multiplied the exponents, instead of subtracting them.'
                },
                {
                    text: <div><em>b</em><sup>12</sup></div>,
                    correct: false,
                    explanation: 'It looks like you added the exponents, instead of subtracting them.'
                },
                {
                    text: <div><em>b</em><sup>-4</sup></div>,
                    correct: true,
                    explanation: 'Great work! Subtracting 8 from 4 gives us -4 as the new exponent.'
                },
                {
                    text: <div>None of the above</div>,
                    correct: false,
                    explanation: 'The answer is one of the choices above :).'
                }
            ]
        }
    ]
}

export default MULTIPLYING_DIVIDING_POWERS;
