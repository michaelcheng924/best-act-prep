import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import sections from 'registries/course';
import * as CourseActions from 'actions/course';
import CourseSidebar from 'components/Course/Sidebar';
import CourseMain from 'components/Course/Main';

export default class Course extends React.Component {
    componentDidMount() {
        this.context.router.push(this.props.currentModule);     
    }

    render() {
        const { sectionsData, modulesData, toggleSection, toggleModules, currentModule, setCourseData } = this.props;

        return (
            <div className="course">
                <CourseSidebar
                    sectionsData={sectionsData}
                    modulesData={modulesData}
                    toggleSection={toggleSection}
                    toggleModules={toggleModules}
                    currentModule={currentModule}
                />
                <CourseMain
                    currentModule={currentModule}
                    sections={sections}
                    setCourseData={setCourseData}
                />
            </div>
        );
    }
}

Course.contextTypes = {
    router: React.PropTypes.object.isRequired
};

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
