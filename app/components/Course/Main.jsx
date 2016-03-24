import React from 'react';
import MainHeader from 'components/Course/MainHeader';

export default class CourseMain extends React.Component {
    render() {
        const { currentModule } = this.props;

        return (
            <div className="course-main">
                <MainHeader currentModule={currentModule} />
                MAIN
            </div>
        );
    }
}
