import React from 'react';
import MainHeader from 'components/Course/MainHeader';
import modules from 'registries/modules';

export default class CourseMain extends React.Component {
    render() {
        const { currentModule } = this.props;
        const Module = modules[currentModule];

        return (
            <div className="course-main">
                <MainHeader currentModule={currentModule} />
                <Module />
            </div>
        );
    }
}
