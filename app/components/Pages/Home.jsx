import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

export class Home extends React.Component {
    renderProducts() {
        return _.map(this.props.items, product => {
            const isInCart = _.indexOf(this.props.cart, product.id) !== -1;

            return (
                <div key={product.id} className="products__item">
                    <strong>{product.name}</strong>
                    <div className="products__item-price">${product.price}</div>
                    <button
                        className="products__item-button"
                        onClick={this.onCartChange.bind(this, isInCart, product.id)}
                    >
                        {isInCart ? 'Remove from Cart' : 'Add to Cart'}
                    </button>
                    <div>{product.description}</div>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <div className="home__banner">
                    <h2 className="home__banner-heading">Step 1: Maximize ACT Score</h2>
                    <h2 className="home__banner-heading">Step 2: Attend Dream College</h2>
                    <h2 className="home__banner-heading">Step 3: Enjoy Greater Opportunities</h2>
                    <h2 className="home__banner-heading--important">The Best ACT Prep Online Course: Your Starting Point</h2>
                    <Link to="why-best-act-prep">
                        <button className="home__banner-button btn btn-success">Learn More</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Home;
