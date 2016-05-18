import React from 'react';

const PrintableACTPracticeTestsPDFData = {
    title: 'Printable ACT Practice Tests PDF (9 AUTHENTIC, Free Tests!)',
    date: 'Saturday, May 7, 2016',
    author: 'Michael Cheng',
    excerpt: 'test test',
    route: 'blog/printable-act-practice-tests-pdf'
};

export { PrintableACTPracticeTestsPDFData };

export default class PrintableACTPracticeTestsPDF extends React.Component {
    render() {
        return (
            <div className="page">
                <div className="page__content">
                    <h1>Printable ACT Practice Tests PDF (9 AUTHENTIC, Free Tests!)</h1>
                </div>
            </div>
        );
    }
}
