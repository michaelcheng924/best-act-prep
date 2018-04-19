import React, { Component } from 'react';
import { findIndex, partial } from 'lodash';
import css from 'classnames';

const LETTER_MAPPING = {
    0: 'A',
    1: 'B',
    2: 'C',
    3: 'D'
};

class CourseConceptQuestion extends Component {
    constructor(props) {
        super(props);

        this.state = {
            answerIndex: props.isSample ? findIndex(this.props.answers, ['correct', false]) : null
        };
    }

    selectAnswer = index => {
        this.setState({ answerIndex: index });
    };

    render() {
        const { answers, number, question } = this.props;

        return (
            <div className="Course__concept-detail-question">
                <div>{number}) {question}</div>
                <div className="Course__concept-detail-answers">
                    {
                        answers.map((answer, index) => {
                            const isCorrect = this.state.answerIndex === index && answer.correct;
                            const isIncorrect = this.state.answerIndex === index && !answer.correct

                            const classNames = css('Course__concept-detail-answer', {
                                'Course__concept-detail-answer--correct': isCorrect,
                                'Course__concept-detail-answer--incorrect': isIncorrect
                            });

                            return (
                                <div key={index}>
                                    <div
                                        className={classNames}
                                        onClick={partial(this.selectAnswer, index)}
                                    >
                                        <div className="Course__concept-detail-letter">
                                            {LETTER_MAPPING[index]}
                                        </div>
                                        <div>{answer.text}</div>
                                    </div>
                                    {
                                        this.state.answerIndex === index
                                            ? (
                                                <div className={answer.correct ? 'green' : 'red'}>
                                                    {answer.explanation}
                                                </div>
                                            )
                                            : null
                                    }
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default CourseConceptQuestion;
