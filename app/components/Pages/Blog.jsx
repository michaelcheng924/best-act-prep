import React from 'react';
import { Link } from 'react-router';
import { PrintableACTPracticeTestsPDFData } from 'components/blog/PrintableACTPracticeTestsPDF';

export default class Blog extends React.Component {
    render() {
        return (
            <div className="page">
                <div className="page__content">
                    <Link to={PrintableACTPracticeTestsPDFData.route}>{PrintableACTPracticeTestsPDFData.title}</Link>
                </div>
            </div>
        );
    }
}
