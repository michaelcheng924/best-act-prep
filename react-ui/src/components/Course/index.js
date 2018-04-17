import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import COURSE_MAPPINGS from 'app/constants/course-mappings';
import CourseCategory from 'app/components/Course/CourseCategory';

import './Course.scss';

export class Course extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            category: ''
        };
    }

    componentDidMount() {
        const pathname = window.location.pathname;
        const splitPathname = pathname.split('/');

        const category = splitPathname[2];
        const subCategory = splitPathname[3];

        if (COURSE_MAPPINGS[category]) {
            this.setState({
                category,
                subCategory
            });
        } else if (pathname !== '/course') {
            window.location.pathname = '/course';
        }
    }

    renderLink(category) {
        const data = COURSE_MAPPINGS[category];

        return (
            <Link to={`/course/${category}`} className={`Course__link Course__link--${category}`}>
                <i className={`fa fa-${data.icon}`} />
                {`  ${data.title}`}
            </Link>
        );
    }

    render() {
        const { category, subCategory } = this.state;

        return (
            <div className="Course">
                <div className="Course__links">
                    {this.renderLink('general')}
                    {this.renderLink('english')}
                    {this.renderLink('math')}
                    {this.renderLink('reading')}
                    {this.renderLink('science')}
                    {this.renderLink('writing')}
                </div>
                {
                    category
                        ? (
                            <CourseCategory category={category} />
                        )
                        : (
                            <div className="Course__no-category">
                                Please select a topic above
                            </div>
                        )
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        email: state.app.email
    };
}

export default connect(mapStateToProps)(Course);
