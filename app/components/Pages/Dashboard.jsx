import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export class Dashboard extends React.Component {
    render() {
        console.log(this.props.modules);
        return (
            <div className="page">
                <div className="page__content">
                    DASHBOARD
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        modules: state.course.get('modules')
    };
}

export default connect(mapStateToProps)(Dashboard);
