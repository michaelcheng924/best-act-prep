import React from 'react';
import MainHeader from 'components/Course/MainHeader';
import moduleMappings from 'registries/module-mappings';

export default class CourseMain extends React.Component {
    render() {
        const { currentModule, modulesData, setModules, setCurrentModule, router } = this.props;
        const Module = moduleMappings[currentModule].component;

        return (
            <div className="course-main">
                <MainHeader
                    currentModule={currentModule}
                    modulesData={modulesData}
                    setModules={setModules}
                    setCurrentModule={setCurrentModule}
                    router={router}
                />
                <Module />
            </div>
        );
    }
}
