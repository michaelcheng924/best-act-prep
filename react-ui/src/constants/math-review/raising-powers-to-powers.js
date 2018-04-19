import React from 'react';

const RAISING_POWERS_TO_POWERS = {
    title: 'Raising Powers to Powers',
    rule: (
        <div>
            <div>To raise a power to a power, multiply the exponents</div>
        </div>
    ),
    example: (
        <div>
            <div><strong>Example:</strong></div>
            <div>(<em>a</em><sup>3</sup>)<sup>4</sup> = <em>a</em><sup>12</sup></div>
        </div>
    ),
    questions: [
        {
            question: <span>What is (<em>a</em><sup>5</sup>)<sup>2</sup>?</span>,
            answers: [
                {
                    text: <div><em>a</em><sup>7</sup></div>,
                    correct: false,
                    explanation: 'It looks like you added the exponents, instead of multiplying them.'
                },
                {
                    text: <div><em>a</em><sup>3</sup></div>,
                    correct: false,
                    explanation: 'It looks like you subtracted the exponents, instead of multiplying them.'
                },
                {
                    text: <div><em>a</em><sup>10</sup></div>,
                    correct: true,
                    explanation: 'Great work! 2 multiplied by 5 gives us 10 as the exponent.'
                },
                {
                    text: <div>None of the above</div>,
                    correct: false,
                    explanation: 'The answer is one of the choices above :).'
                }
            ]
        },
        {
            question: <span>What is (<em>a</em><sup>-3</sup>)<sup>7</sup>?</span>,
            answers: [
                {
                    text: <div><em>a</em><sup>4</sup></div>,
                    correct: false,
                    explanation: 'It looks like you added the exponents, instead of multiplying them.'
                },
                {
                    text: <div><em>a</em><sup>-10</sup></div>,
                    correct: false,
                    explanation: 'It looks like you subtracted the exponents, instead of multiplying them.'
                },
                {
                    text: <div><em>a</em><sup>-21</sup></div>,
                    correct: true,
                    explanation: 'Great work! -3 multiplied by 7 gives us -21 as the exponent.'
                },
                {
                    text: <div>None of the above</div>,
                    correct: false,
                    explanation: 'The answer is one of the choices above :).'
                }
            ]
        },
    ]
}

export default RAISING_POWERS_TO_POWERS;
