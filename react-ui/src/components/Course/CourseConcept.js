import React, { Component } from 'react';

class CourseConcept extends Component {
    render() {
        const { rule, title } = this.props;

        return (
            <div className="Course__concept-card">
                <div className="Course__concept-title">
                    {title}
                </div>
                <div className="Course__concept-rule">
                    {rule}
                </div>
                <div className="Course__concept-view">
                    <button className="Button">View</button>
                </div>
            </div>
        );
    }
}

export default CourseConcept;
