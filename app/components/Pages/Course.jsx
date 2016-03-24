import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CourseActions from 'actions/course';
import CourseSidebar from 'components/Course/Sidebar';
import CourseMain from 'components/Course/Main';

export default class Course extends React.Component {
    render() {
        const { sectionsData, modulesData, toggleSection, toggleModules, currentModule } = this.props;

        return (
            <div className="course">
                <CourseSidebar
                    sectionsData={sectionsData}
                    modulesData={modulesData}
                    toggleSection={toggleSection}
                    toggleModules={toggleModules}
                />
                <CourseMain
                    currentModule={currentModule}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const course = state.course.toJS();
    const { sections, modules, currentModule } = course;

    return {
        user: state.app.get('user'),
        currentModule,
        sectionsData: course.sections,
        modulesData: course.modules
    };
}

function mapDispatchToProps(dispatch) {
    const courseActions = bindActionCreators(CourseActions, dispatch);

    return courseActions;
}

export default connect(mapStateToProps, mapDispatchToProps)(Course);
