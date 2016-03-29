import React from 'react';
import { connect } from 'react-redux';
import sections from 'registries/course';
import SidebarSection from 'components/Course/SidebarSection';

export default class CourseSidebar extends React.Component {
    renderSections() {
        return sections.map(section => {
            const { id, name, modules } = section;
            const { sectionsData, modulesData, toggleSection, toggleModules, currentModule } = this.props;

            return (
                <SidebarSection
                    key={id}
                    id={id}
                    name={name}
                    modules={modules}
                    modulesData={modulesData}
                    toggleSection={toggleSection}
                    toggleModules={toggleModules}
                    collapsed={sectionsData[id].collapsed}
                    currentModule={currentModule}
                />
            );
        });
    }

    render() {
        return (
            <div className="course-sidebar">
                {this.renderSections()}
            </div>
        );
    }
}
