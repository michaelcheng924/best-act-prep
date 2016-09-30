import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import course from 'registries/course';
import * as CourseActions from 'actions/course';
import { fetchCourseData, setCurrentModule } from 'api/course';
import CourseSidebar from 'components/Course/Sidebar';
import CourseMain from 'components/Course/Main';

export class Course extends React.Component {
    componentWillMount() {
        if (!this.props.email) {
            this.context.router.push('/');
        }
    }

    componentDidMount() {
        const { email, currentModule } = this.props;

        if (currentModule) {
            this.context.router.push(currentModule);
        }

        if (email && !currentModule) {
            $('.spinner').removeClass('hidden');
            fetchCourseData().then(response => {
                this.props.setCourseData(response.userData);
            });
        }
    }

    componentDidUpdate(prevProps) {
        const { modulesData, currentModule, email, optimisticSetCurrentModule } = this.props;
        const router = this.context.router;

        if (!modulesData[currentModule]) {
            optimisticSetCurrentModule('10');
            router.push('10');
            setCurrentModule('10', email);
        }

        if (currentModule && !prevProps.currentModule) {
            $('.spinner').addClass('hidden');
        }

        if (!email) {
            router.push('/');
        }
    }

    render() {
        const { email, sectionsData, modulesData, toggleSection, toggleModules, currentModule, optimisticMarkComplete, optimisticSetCurrentModule } = this.props;
        const router = this.context.router;

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
                    optimisticSetCurrentModule={optimisticSetCurrentModule}
                    router={router}
                    email={email}
                />
                <CourseMain
                    currentModule={currentModule}
                    modulesData={modulesData}
                    optimisticMarkComplete={optimisticMarkComplete}
                    optimisticSetCurrentModule={optimisticSetCurrentModule}
                    router={router}
                    email={email}
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
        email: state.app.get('email'),
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
