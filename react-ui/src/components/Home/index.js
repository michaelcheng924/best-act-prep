import React from 'react';
import { Link } from 'react-router-dom';

import TESTIMONIALS from 'app/constants/testimonials';

import './Home.scss';

export class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <div className="home__call-to-action-container">
                    <h1 className="home__title">Raise your ACT score by 4 points</h1>
                    <Link to="/course"><button className="Button">Start for free</button></Link>
                    <div className="home__testimonials">
                        {
                            TESTIMONIALS.map((item, index) => {
                                return (
                                    <div className="home__testimonial" key={index}>
                                        <div>"{item.text}"</div>
                                        <div style={{ fontSize: 16 }}>- {item.author}</div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
