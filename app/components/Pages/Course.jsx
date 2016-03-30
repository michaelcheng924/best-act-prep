import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import course from 'registries/course';
import * as CourseActions from 'actions/course';
import CourseSidebar from 'components/Course/Sidebar';
import CourseMain from 'components/Course/Main';

export default class Course extends React.Component {
    componentWillMount() {
        if (!this.props.user) {
            this.context.router.push('/');
        }     
    }

    componentDidMount() {
        const { user, currentModule } = this.props;

        if (currentModule) {
            this.context.router.push(currentModule);
        }

        if (user && !currentModule) {
            $('.spinner').removeClass('hidden');
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.currentModule && !prevProps.currentModule) {
            $('.spinner').addClass('hidden');
        }     
    }

    render() {
        const { user, sectionsData, modulesData, toggleSection, toggleModules, currentModule, setCourseData, setModules, setCurrentModule } = this.props;

        if (!currentModule) {
            return null;
        }

        return (
            <div className="course">
                <CourseSidebar
                    sectionsData={sectionsData}
                    modulesData={modulesData}
                    toggleSection={toggleSection}
                    toggleModules={toggleModules}
                    currentModule={currentModule}
                    setCurrentModule={setCurrentModule}
                />
                <CourseMain
                    currentModule={currentModule}
                    modulesData={modulesData}
                    setCourseData={setCourseData}
                    setModules={setModules}
                    setCurrentModule={setCurrentModule}
                    router={this.context.router}
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
