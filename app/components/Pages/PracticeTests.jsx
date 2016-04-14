import React from 'react';

export default class PracticeTests extends React.Component {
    render() {
        return (
            <div className="page">
                <div className="page__content">
                    <em><strong>Note:</strong> If there are two practice tests/years in a section, those tests are exactly the same. We've simply included all of them for the sake of completeness.</em>
                    <div className="practice-tests__tests">
                        <section className="practice-tests__section">
                            <h3 className="practice-tests__header">Practice Test #1</h3>
                            <a href="/practice-tests/preparing-for-the-act-2003-2004.pdf" target="_blank"><button className="practice-tests__button">2003-2004 Preparing for the ACT</button></a>
                            <a href="/practice-tests/preparing-for-the-act-2005-2006.pdf" target="_blank"><button className="practice-tests__button">2005-2006 Preparing for the ACT</button></a>
                        </section>
                        <section className="practice-tests__section">
                            <h3 className="practice-tests__header">Practice Test #2</h3>
                            <a href="/practice-tests/preparing-for-the-act-2007-2008.pdf" target="_blank"><button className="practice-tests__button">2007-2008 Preparing for the ACT</button></a>
                            <a href="/practice-tests/preparing-for-the-act-2008-2009.pdf" target="_blank"><button className="practice-tests__button">2008-2009 Preparing for the ACT</button></a>
                        </section>
                        <section className="practice-tests__section">
                            <h3 className="practice-tests__header">Practice Test #3</h3>
                            <a href="/practice-tests/preparing-for-the-act-2009-2010.pdf" target="_blank"><button className="practice-tests__button">2009-2010 Preparing for the ACT</button></a>
                            <a href="/practice-tests/preparing-for-the-act-2011-2012.pdf" target="_blank"><button className="practice-tests__button">2011-2012 Preparing for the ACT</button></a>
                        </section>
                        <section className="practice-tests__section">
                            <h3 className="practice-tests__header">Practice Test #4</h3>
                            <a href="/practice-tests/preparing-for-the-act-2013-2014.pdf" target="_blank"><button className="practice-tests__button">2013-2014 Preparing for the ACT</button></a>
                            <a href="/practice-tests/preparing-for-the-act-2014-2015.pdf" target="_blank"><button className="practice-tests__button">2014-2015 Preparing for the ACT</button></a>
                        </section>
                        <section className="practice-tests__section">
                            <h3 className="practice-tests__header">Practice Test #5</h3>
                            <a href="/practice-tests/preparing-for-the-act-2015-2016.pdf" target="_blank"><button className="practice-tests__button">2015-2016 Preparing for the ACT</button></a>
                        </section>
                    </div>
                    <img src="/images/preparing-for-the-act-cover.jpg" className="practice-tests__cover-image" />
                </div>
            </div>
        );
    }
}
