import React from 'react';
import classNames from 'classnames';
import SidebarModule from 'components/Course/SidebarModule';

export default class SidebarSection extends React.Component {
    constructor(props) {
        super(props);

        this.toggleSection = this.toggleSection.bind(this);
    }

    toggleSection() {
        this.props.toggleSection(this.props.id);
    }

    renderModules(modules) {
        return modules.map(module => {
            const { modulesData, toggleModules, currentModule, optimisticSetCurrentModule, router } = this.props;

            return (
                <SidebarModule
                    key={module.id}
                    {...module}
                    modulesData={modulesData}
                    toggleModules={toggleModules}
                    currentModule={currentModule}
                    optimisticSetCurrentModule={optimisticSetCurrentModule}
                    router={router}
                />
            );
        });
    }

    render() {
        const { id, name, modules, collapsed, toggleSection } = this.props;
        const arrowClassNames = classNames('glyphicon', {
            'glyphicon-chevron-down': collapsed,
            'glyphicon-chevron-up': !collapsed
        });

        return (
            <div key={id}>
                <div className="course-sidebar__section" onClick={this.toggleSection}>
                    {`${id}) ${name}`}
                    <span className={arrowClassNames} />
                </div>
                <div className={collapsed ? 'hidden' : ''}>
                    {this.renderModules(modules)}
                </div>
            </div>
        );
    }
}

SidebarSection.propTypes = {

};
