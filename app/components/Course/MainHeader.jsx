import React from 'react';
import titles from 'registries/titles';
import moduleMappings from 'registries/module-mappings';
import { markComplete } from 'api/course';

export default class MainHeader extends React.Component {
    constructor(props) {
        super(props);

        this.getTitle = this.getTitle.bind(this);
    }

    markComplete(currentModule) {
        const { modulesData, optimisticMarkComplete, optimisticSetCurrentModule, router } = this.props;

        const nextModule = moduleMappings[currentModule].next;
        const completed = modulesData[currentModule] && modulesData[currentModule].completed;

        optimisticMarkComplete(currentModule);
        if (!completed) {
            optimisticSetCurrentModule(nextModule);
            router.push(nextModule);
        }

        markComplete(currentModule).then(response => {
            if (!response.userData) {
                router.push('/');
            }
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
        let text = isCompleted ? 'Mark Incomplete' : 'Mark Complete and Continue to Next Module';

        if (currentModule === '73' && !isCompleted) {
            text = 'Mark Complete';
        }

        return <button className={`btn btn-${buttonType} main-header__complete-button`} onClick={this.markComplete.bind(this, currentModule)}>{text}</button>;
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
