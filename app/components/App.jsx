import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authenticate } from 'api/app';
import { setUser } from 'actions/app';
import Nav from 'components/Nav/Nav';

export class AppView extends React.Component {
    componentDidMount() {
        const token = localStorage.getItem('bap-token');

        authenticate(this.props.path, token).then(response => {
            if (!response.authenticated) {
                this.context.router.push('/');
            } else {
                this.props.setUser(response.email);
            }
        });
    }

    render() {
        return (
            <div className="app-container">
                <div className="spinner hidden">
                    <span className="spinner__image" />
                </div>
                <Nav />
                <div className="page-container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

AppView.contextTypes = {
    router: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        path: state.app.get('activeTab')
    };
}

function mapDispatchToProps(dispatch) {
    const appActions = bindActionCreators({ setUser }, dispatch);    
    return appActions;
}

export default connect(mapStateToProps, mapDispatchToProps)(AppView);
