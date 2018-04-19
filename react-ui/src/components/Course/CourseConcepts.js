import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { partial } from 'lodash';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import BackIcon from 'material-ui/svg-icons/navigation/arrow-back';

import CourseConcept from 'app/components/Course/CourseConcept';
import CourseConceptDetail from 'app/components/Course/CourseConceptDetail';
import PDF from 'app/components/Course/PDF';

class CourseConcepts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: null
        };
    }

    onConceptClick = title => {
        this.setState({ selected: title });
    };

    renderConceptDetail() {
        const { selected } = this.state;

        return (
            <div className="Course__category">
                <FloatingActionButton mini={true} onClick={partial(this.onConceptClick, null)}>
                    <BackIcon />
                </FloatingActionButton>
                <br />
                <CourseConceptDetail {...selected} email={this.props.email} />
            </div>
        );
    }

    render() {
        const { category, categoryData, email } = this.props;

        return this.state.selected
            ? this.renderConceptDetail()
            : (
                <div className="Course__category">
                    <div className="Course__section-title">
                        Review concepts that the {categoryData.title} test covers
                    </div>
                    {
                        email
                            ? null
                            : (
                                <div className="Course__section-stats">
                                    <div className="Course__section-stat--premium">
                                        <strong>1</strong> premium PDF
                                    </div>
                                </div>
                            )
                    }
                    <div className="Course__practice-container">
                        {
                            categoryData.review.map((item, index) => {
                                if (item.concepts) {
                                    return (
                                        <div key={index} className="Course__concepts-container">
                                            <div className="Course__section-title">
                                                {item.title}
                                            </div>
                                            <div className="Course__construction">
                                                <em>Note: We are in the process of adding more and more concepts and practice questions to this section.</em>
                                                {
                                                    email
                                                        ? null
                                                        : (
                                                            <span>
                                                                <em>&nbsp;Buying the course today gets you lifetime access to everything we add, even if the price goes up!</em>
                                                                &nbsp;
                                                                <Link to="/buy">
                                                                    <button className="Button Button--small Button--orange">Buy Now</button>
                                                                </Link>
                                                            </span>
                                                        )
                                                }
                                            </div>
                                            <div className="Course__concepts">
                                                {
                                                    item.concepts.map(concept => {
                                                        return (
                                                            <div
                                                                key={concept.title}
                                                                onClick={partial(this.onConceptClick, concept)}
                                                            >
                                                                <CourseConcept {...concept} />
                                                            </div>
                                                        );
                                                    })
                                                }
                                            </div>
                                        </div>
                                    );
                                }

                                return (
                                    <PDF
                                        {...item}
                                        category={category}
                                        key={item.id}
                                        restricted={!email && item.restricted}
                                    />
                                );
                            })
                        }
                    </div>
                </div>
            );
    }
}

export default CourseConcepts;
