import React from 'react';
import classNames from 'classnames';

export default class SidebarSection extends React.Component {
    constructor(props) {
        super(props);

        this.toggleModules = this.toggleModules.bind(this);
    }

    toggleModules() {
        this.props.toggleModules(this.props.id.slice(0, 3));
    }

    render() {
        const { title, name, id, partialId, modulesData } = this.props;
        const displayId = partialId || id;
        const parentId = id.slice(0, 3);

        const collapsed = partialId && modulesData[parentId].collapsed;

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
            color: this.props.completed ? '#138EAD' : '#F5953E'
        };

        return (
            <div key={id} className={moduleClasses} style={style}>
                {`${displayId}) ${name}`}
            </div>
        );
    }
}

SidebarSection.propTypes = {

};
