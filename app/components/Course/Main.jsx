import React from 'react';
import MainHeader from 'components/Course/MainHeader';
import moduleComponents from 'registries/module-components';

export default class CourseMain extends React.Component {
    render() {
        const { currentModule, setCourseData } = this.props;
        const Module = moduleComponents[currentModule];

        return (
            <div className="course-main">
                <MainHeader currentModule={currentModule} setCourseData={setCourseData} />
                <Module />
            </div>
        );
    }
}
