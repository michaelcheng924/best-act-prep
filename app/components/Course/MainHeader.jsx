import React from 'react';
import titles from 'registries/titles';
import { markComplete } from 'api/course';

export default class MainHeader extends React.Component {
    constructor(props) {
        super(props);

        this.getTitle = this.getTitle.bind(this);
        this.markComplete = this.markComplete.bind(this, this.props.currentModule);
    }

    markComplete(currentModule) {
        markComplete(currentModule).then(response => {
            this.props.setCourseData(response.userData);
            this.props.router.push(response.userData.currentModule);
        });
    }

    getTitle() {
        const currentModule = this.props.currentModule;
        const sectionId = currentModule[0];
        const sectionName = titles.categories[sectionId];
        const moduleName = titles.names[currentModule];

        if (currentModule.length <= 2) {
            return <span>{`${sectionName} > `}<strong>{moduleName}</strong></span>;
        }

        const moduleCategory = currentModule[1] === 'D' ? titles.categories[currentModule.slice(0, 2)] : titles.categories[currentModule[1]];

        return <span>{`${sectionName} > ${moduleCategory} > `}<strong>{moduleName}</strong></span>;
    }

    renderButton() {
        const { currentModule, modulesData } = this.props;

        const module = modulesData[currentModule];
        const isCompleted = module.completed;
        const buttonType = isCompleted ? 'warning' : 'success';
        const text = isCompleted ? 'Mark Incomplete' : 'Mark Complete and Continue to Next Module';

        return <button className={`btn btn-${buttonType} main-header__complete-button`} onClick={this.markComplete}>{text}</button>;
    }

    render() {
        return (
            <div className="main-header">
                <div className="main-header__title">{this.getTitle()}</div>
                {this.renderButton()}
            </div>
        );
    }
}
