import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CourseConceptQuestion from 'app/components/Course/CourseConceptQuestion';

class CourseConceptDetail extends Component {
    render() {
        const { email, example, questions, rule, title } = this.props;

        return (
            <div className="Course__concept-detail">
                <div className="Course__section-title">
                    {title}
                </div>
                <div className="Course__concept-detail-rule">
                    {rule}
                </div>

                <div className="Course__concept-detail-example">
                    {example}
                </div>

                <div className="Course__concept-detail-questions">
                    <div className="Course__concept-detail-sub-title">
                        Practice questions                        
                    </div>
                    {
                        email
                            ? (
                                questions.map((item, index) => {
                                    return (
                                        <CourseConceptQuestion key={index} number={index + 1} {...item} />
                                    );
                                })
                            )
                            : (
                                <div className="Course__practice-questions-restricted">
                                    <Link to="/buy">
                                        <button className="Button Button--orange">Get access</button> to the practice questions!
                                    </Link>
                                    {/*<div className="Course__practice-questions-restricted-sample">
                                        <CourseConceptQuestion number={1} {...questions[0]} isSample />
                                    </div>*/}
                                </div>
                            )
                    }
                </div>
            </div>
        );
    }
}

export default CourseConceptDetail;
