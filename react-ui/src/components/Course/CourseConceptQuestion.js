import React, { Component } from 'react';

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
            answer: null
        };
    }

    render() {
        const { answers, number, question } = this.props;

        return (
            <div className="Course__concept-detail-question">
                <div>{number}) {question}</div>
                <div className="Course__concept-detail-answers">
                    {
                        answers.map((answer, index) => {
                            return (
                                <div className="Course__concept-detail-answer" key={index}>
                                    <div className="Course__concept-detail-letter">
                                        {LETTER_MAPPING[index]}
                                    </div>
                                    <div>{answer.text}</div>
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
