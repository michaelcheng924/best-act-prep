import React from 'react';

export default class English2D1PDF extends React.Component {
    render() {
        return (
            <div className="module">
                <h4 className="module__title--category">2.D.1) ACT English Grammar Rules to Know</h4>
                <h2 className="module__title">All Grammar Rules PDF</h2>
                <div className="module__content">
                    <div className="module__instructions">Click below to open the PDF in a new window!</div>
                    <a href="/review-guides/review-guide-grammar.pdf" target="_blank"><button className="review-pdf__button">All Grammar Rules PDF</button></a>
                </div>
            </div>
        );
    }
}
