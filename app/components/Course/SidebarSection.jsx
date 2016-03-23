import React from 'react';

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
            const { title, name, id, partialId } = module;
            const displayId = partialId || id;

            if (title) {
                return <div key={id} className="course-sidebar__module-title">{`${displayId}) ${title}`}</div>
            }

            const style = {
                color: this.props.completed ? '#138EAD' : '#F5953E'
            };

            return (
                <div key={id} className="course-sidebar__module" style={style}>
                    {`${displayId}) ${name}`}
                </div>
            );
        });
    }

    render() {
        const { id, name, modules, collapsed, toggleSection } = this.props;

        return (
            <div key={id}>
                <div className="course-sidebar__section" onClick={this.toggleSection}>
                    {`${id}) ${name}`}
                    <span className="glyphicon glyphicon-chevron-down" />
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
