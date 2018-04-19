import React, { Component } from 'react';

import CourseConceptQuestion from 'app/components/Course/CourseConceptQuestion';

class CourseConceptDetail extends Component {
    render() {
        const { example, questions, rule, title } = this.props;

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
                        questions.map((item, index) => {
                            return (
                                <CourseConceptQuestion key={index} number={index + 1} {...item} />
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default CourseConceptDetail;
