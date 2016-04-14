import React from 'react';

export default class Math3D1PDF extends React.Component {
    render() {
        return (
            <div className="module">
                <h4 className="module__title--category">3.D.1) ACT Math Concepts to Know</h4>
                <h2 className="module__title">All Math Concepts PDF</h2>
                <div className="module__content">
                    <div className="module__content">
                        <div className="module__instructions">Click below to open the PDF in a new window!</div>
                        <a href="/review-guides/review-guide-math.pdf" target="_blank"><button className="review-pdf__button">All Math Concepts PDF</button></a>
                    </div>
                </div>
            </div>
        );
    }
}
