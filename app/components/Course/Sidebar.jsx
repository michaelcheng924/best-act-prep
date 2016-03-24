import React from 'react';
import { connect } from 'react-redux';
import SidebarSection from 'components/Course/SidebarSection';

const sections = [
{
    id: '1',
    name: 'ACT Foundations',
    modules: [
        { id: '1.1', name: 'Overview/Format' },
        { id: '1.2', name: 'Read, Read, Read!' },
        { id: '1.3', name: 'Use a Digital Watch' },
        { id: '1.4', name: 'Preparing with a Plan' }
    ]
},
{
    id: '2',
    name: 'ACT English',
    modules: [
        { id: '2.A', title: 'Introduction/Basics' },
        { id: '2.A.1', partialId: 'A.1', name: 'Overview/Format' },
        { id: '2.A.2', partialId: 'A.2', name: 'Managing Time' },
        { id: '2.A.3', partialId: 'A.3', name: 'Skipping/Marking Questions' },
        { id: '2.A.4', partialId: 'A.4', name: 'Bubbling' },
        { id: '2.B', title: 'ACT English Strategies' },
        { id: '2.B.1', partialId: 'B.1', name: 'Memorize Grammar Rules' },
        { id: '2.B.2', partialId: 'B.2', name: 'Shorter is Usually Better' },
        { id: '2.B.3', partialId: 'B.3', name: 'Skim, then Look at Context' },
        { id: '2.B.4', partialId: 'B.4', name: 'Read "Out Loud"' }
    ]
},
{
    id: '3',
    name: 'ACT Math',
    modules: [
        { id: '3.A', title: 'Introduction/Basics' },
        { id: '3.A.1', partialId: 'A.1', name: 'Overview/Format' },
        { id: '3.A.2', partialId: 'A.2', name: 'Managing Time' },
        { id: '3.A.3', partialId: 'A.3', name: 'Skipping/Marking Questions' },
        { id: '3.A.4', partialId: 'A.4', name: 'Bubbling' },
        { id: '2.B', title: 'ACT Math Strategies' }
    ]
},
{
    id: '4',
    name: 'ACT Reading',
    modules: [
        { id: '4.A', title: 'Introduction/Basics' },
        { id: '4.A.1', partialId: 'A.1', name: 'Overview/Format' },
        { id: '4.A.2', partialId: 'A.2', name: 'Managing Time' },
        { id: '4.A.3', partialId: 'A.3', name: 'Skipping/Marking Questions' },
        { id: '4.A.4', partialId: 'A.4', name: 'Bubbling' },
        { id: '2.B', title: 'ACT Reading Strategies' }
    ]
},
{
    id: '5',
    name: 'ACT Science',
    modules: [
        { id: '5.A', title: 'Introduction/Basics' },
        { id: '5.A.1', partialId: 'A.1', name: 'Overview/Format' },
        { id: '5.A.2', partialId: 'A.2', name: 'Managing Time' },
        { id: '5.A.3', partialId: 'A.3', name: 'Skipping/Marking Questions' },
        { id: '5.A.4', partialId: 'A.4', name: 'Bubbling' },
        { id: '2.B', title: 'ACT Science Strategies' }
    ]
},
{
    id: '6',
    name: 'ACT Writing',
    modules: []
},
{
    id: '7',
    name: 'The Full ACT',
    modules: []
}
];

export default class CourseSidebar extends React.Component {
    renderSections() {
        return sections.map(section => {
            const { id, name, modules } = section;
            const { sectionsData, modulesData, toggleSection, toggleModules } = this.props;

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
