import React from 'react';
import CourseSidebar from 'components/Course/Sidebar';
import CourseMain from 'components/Course/Main';

export default class Course extends React.Component {
    render() {
        return (
            <div className="course">
                <CourseSidebar />
                <div className="course-main">
                    MAIN
                </div>
            </div>
        );
    }
}
