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
            this.props.setCourseData(response.data);
        });
    }

    getTitle() {
        const currentModule = this.props.currentModule;
        const sectionId = currentModule[0];
        const sectionName = titles.categories[sectionId];
        const moduleName = titles.names[currentModule];

        if (currentModule.length <= 3) {
            return <span>{`${sectionName} > `}<strong>{moduleName}</strong></span>;
        }

        const moduleCategory = currentModule[2] === 'D' ? titles.categories[currentModule.slice(0, 3)] : titles.categories[currentModule[2]];

        return <span>{`${sectionName} > ${moduleCategory} > `}<strong>{moduleName}</strong></span>;
    }

    render() {
        return (
            <div className="main-header">
                <div className="main-header__title">{this.getTitle()}</div>
                <button className="btn btn-success main-header__complete-button" onClick={this.markComplete}>Mark Complete and Continue to Next Module</button>
            </div>
        );
    }
}
