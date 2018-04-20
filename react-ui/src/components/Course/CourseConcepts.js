import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { find, get, partial } from 'lodash';
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

    componentDidMount() {
        const { category } = this.props;

        const pathname = window.location.pathname;
        const splitPathname = pathname.split('/');

        const conceptId = splitPathname[4];

        if (conceptId && !this.getSelectedConcept(conceptId)) {
            window.location.pathname = `/course/${category}/review`;
        } else if (conceptId && this.getSelectedConcept(conceptId)) {
            this.setState({
                selected: conceptId
            });
        }
    }

    onConceptClick = id => {
        this.setState({ selected: id });
    };

    getSelectedConcept(id) {
        const { selected } = this.state;
        const { categoryData } = this.props;

        const selectedConcept = find(get(categoryData, 'review.concepts.concepts', []), concept => {
            return concept.id === (id || selected);
        });

        if (!selectedConcept) {
            return null;
        }

        return selectedConcept;
    }

    renderConceptDetail() {
        const { category } = this.props;

        const selectedConcept = this.getSelectedConcept();

        if (!selectedConcept) {
            return null;
        }

        return (
            <div className="Course__category">
                <Link to={`/course/${category}/review`}>
                    <FloatingActionButton mini={true} onClick={partial(this.onConceptClick, null)}>
                        <BackIcon />
                    </FloatingActionButton>
                </Link>
                <br />
                <CourseConceptDetail {...selectedConcept} email={this.props.email} />
            </div>
        );
    }

    renderUnderConstruction() {
        return (
            <div className="Course__construction">
                <em>Note: We are in the process of adding more and more concepts and practice questions to this section.</em>
                {
                    this.props.email
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
        );
    }

    renderConceptCards(concepts) {
        const { category } = this.props;

        return (
            <div className="Course__concepts">
                {
                    concepts.map(concept => {
                        return (
                            <div
                                key={concept.id}
                                onClick={partial(this.onConceptClick, concept.id)}
                            >
                                <Link to={`/course/${category}/review/${concept.id}`}>
                                    <CourseConcept {...concept} />
                                </Link>
                            </div>
                        );
                    })
                }
            </div>
        );
    }

    render() {
        const { category, categoryData, email } = this.props;

        const pdf = categoryData.review.pdf;
        const concepts = categoryData.review.concepts;

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
                        <PDF
                            {...pdf}
                            category={category}
                            restricted={!email && pdf.restricted}
                        />
                        <div className="Course__concepts-container">
                            <div className="Course__section-title">
                                {concepts.title}
                            </div>
                            {this.renderUnderConstruction()}
                            {this.renderConceptCards(concepts.concepts)}
                        </div>
                    </div>
                </div>
            );
    }
}

export default CourseConcepts;
