import React from 'react';
import { connect } from 'react-redux';
import { authenticate } from 'api/app';
import Nav from 'components/Nav/Nav';

export class AppView extends React.Component {
    componentDidMount() {
        this.props.authenticate(this.props.path).then(response => {
            if (!response.authenticated) {
                this.context.router.push('/');
            }
        });
    }

    render() {
        return (
            <div>
                <div className="spinner hidden">
                    <span className="spinner__image" />
                </div>
                <Nav />
                {this.props.children}
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

function mapDispatchToProps() {
    return {
        authenticate
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppView);
