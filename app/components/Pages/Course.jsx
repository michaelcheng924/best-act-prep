import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CourseActions from 'actions/course';
import { fetchCourseData } from 'api/course';
import CourseSidebar from 'components/Course/Sidebar';
import CourseMain from 'components/Course/Main';

export default class Course extends React.Component {
    componentWillMount() {
        fetchCourseData(this.props.user).then(response => {
            this.props.setCourseData(response);
        });     
    }

    render() {
        const { toggleSection } = this.props;

        return (
            <div className="course">
                <CourseSidebar
                    toggleSection={toggleSection}
                />
                <div className="course-main">
                    MAIN
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const course = state.course;

    return {
        user: state.app.get('user'),
        sections: course.get('sections').toJS(),
        modules: course.get('modules').toJS()
    };
}

function mapDispatchToProps(dispatch) {
    const courseActions = bindActionCreators(CourseActions, dispatch);

    return courseActions;
}

export default connect(mapStateToProps, mapDispatchToProps)(Course);
