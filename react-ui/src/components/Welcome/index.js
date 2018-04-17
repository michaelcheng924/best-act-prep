import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Welcome.scss';

export class Welcome extends React.Component {
    render() {
        return (
            <div className="welcome">
                <div className="welcome__congratulations">
                    Congratulations!
                </div>
                <p>You now have <strong>lifetime access</strong> to the <strong>Best ACT Prep Online Course</strong>!</p>
                <p>You should soon receive an email with your login information, if you have not received it already. To get started immediately, you can log in with this information:</p>

                <p>
                    Email: <strong>{this.props.email}</strong>
                    <br />
                    Password: <strong>hungrykoala</strong>
                </p>
                
                <p>If you have any questions or trouble, simply contact me at <strong>cheng.c.michael@gmail.com</strong>.</p>
                <div>
                    <Link to="/course">
                        <button className="Button">Go to the course</button>
                    </Link>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        email: state.app.email
    };
};

export default connect(mapStateToProps)(Welcome);
