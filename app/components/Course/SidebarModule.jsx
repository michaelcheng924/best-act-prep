import React from 'react';
import classNames from 'classnames';

export default class SidebarSection extends React.Component {
    constructor(props) {
        super(props);

        this.toggleModules = this.toggleModules.bind(this);
        this.navigateToModule = this.navigateToModule.bind(this);
    }

    toggleModules() {
        this.props.toggleModules(this.props.id.slice(0, 2));
    }

    navigateToModule() {
        this.props.setCurrentModule(this.props.id);
        this.context.router.push(this.props.id);
    }

    render() {
        const { title, name, id, displayId, modulesData, currentModule } = this.props;
        const parentId = id.slice(0, 2);
        const isCurrentModule = id === currentModule;
        const collapsed = id.length > 2 && modulesData[parentId].collapsed;
        const completed = modulesData[id] && modulesData[id].completed;

        const arrowClassNames = classNames('glyphicon', {
            'glyphicon-chevron-down': collapsed,
            'glyphicon-chevron-up': !collapsed
        });

        if (title) {
            return (
                <div key={id} className="course-sidebar__module-title" onClick={this.toggleModules}>
                    {`${displayId}) ${title}`}
                    <span className={arrowClassNames} />
                </div>
            );
        }

        const moduleClasses = classNames('course-sidebar__module', { hidden: collapsed });
        const style = {
            background: isCurrentModule ? '#E0E2E3' : null,
            color: completed ? '#138EAD' : '#F5953E',
            cursor: isCurrentModule ? 'auto' : null
        };

        return (
            <div key={id} className={moduleClasses} style={style} onClick={this.navigateToModule}>
                {`${displayId}) ${name}`}
            </div>
        );
    }
}

SidebarSection.contextTypes = {
    router: React.PropTypes.object.isRequired
};
