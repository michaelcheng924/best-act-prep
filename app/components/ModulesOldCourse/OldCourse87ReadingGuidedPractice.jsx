import React from 'react';

export default class OldCourse87ReadingGuidedPractice extends React.Component {
    render() {
        return (
            <div className="module">
                <h4 className="module__title--category">A.7) Old Course Videos</h4>
                <h2 className="module__title">ACT Reading Guided Practice</h2>
                <div className="module__content">
                    <video controls="controls" className="module__video-small" poster="/images/poster-3p-0-analyze.png">
                        <source src="https://www.dropbox.com/s/63jddw36359jpxk/3p-0-analyze.mp4?raw=1" type="video/mp4"/>
                    </video>
                    <video controls="controls" className="module__video-small" poster="/images/poster-3p-1-1-passage.png">
                        <source src="https://www.dropbox.com/s/rcoamvkihmq1vyv/3p-1-1-passage.mp4?raw=1" type="video/mp4"/>
                    </video>
                    <video controls="controls" className="module__video-small" poster="/images/poster-3p-1-timer-1-passage.png">
                        <source src="https://www.dropbox.com/s/prspo3thxo0xc1p/3p-2-timer-1-passage.mp4?raw=1" type="video/mp4"/>
                    </video>
                    <video controls="controls" className="module__video-small" poster="/images/poster-3p-3-2-passages.png">
                        <source src="https://www.dropbox.com/s/6mha8sdxpapkkwj/3p-3-2-passages.mp4?raw=1" type="video/mp4"/>
                    </video>
                    <video controls="controls" className="module__video-small" poster="/images/poster-3p-4-timer-2-passages.png">
                        <source src="https://www.dropbox.com/s/lt4dwbpxkvvrx03/3p-4-timer-2-passages.mp4?raw=1" type="video/mp4"/>
                    </video>
                    <video controls="controls" className="module__video-small" poster="/images/poster-3p-5-full-test.png">
                        <source src="https://www.dropbox.com/s/lqmuyq1aq45xkqi/3p-5-full-test.mp4?raw=1" type="video/mp4"/>
                    </video>
                    <video controls="controls" className="module__video-small" poster="/images/poster-3p-5-timer-full-test.png">
                        <source src="https://www.dropbox.com/s/su8ipwfpjjqrqx8/3p-6-timer-full-test.mp4?raw=1" type="video/mp4"/>
                    </video>
                </div>
            </div>
        );
    }
}
