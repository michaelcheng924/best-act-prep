import React from 'react';

export default class OldCourse83EnglishGuidedPractice extends React.Component {
    render() {
        return (
            <div className="module">
                <h4 className="module__title--category">A.3) Old Course Videos</h4>
                <h2 className="module__title">ACT English Guided Practice</h2>
                <div className="module__content">
                    <video controls="controls" className="module__video-small" poster="/images/poster-1p-0-analyze.png">
                        <source src="https://www.dropbox.com/s/cbunlqk7yi9qrlx/1p-0-analyze.mp4?raw=1" type="video/mp4"/>
                    </video>
                    <video controls="controls" className="module__video-small" poster="/images/poster-1p-1-1-passage.png">
                        <source src="https://www.dropbox.com/s/55z4metuqxpzk6p/1p-1-1-passage.mp4?raw=1" type="video/mp4"/>
                    </video>
                    <video controls="controls" className="module__video-small" poster="/images/poster-1p-1-timer-1-passage.png">
                        <source src="https://www.dropbox.com/s/ck01msoupvl59j3/1p-2-timer-1-passage.mp4?raw=1" type="video/mp4"/>
                    </video>
                    <video controls="controls" className="module__video-small" poster="/images/poster-1p-2-full-test.png">
                        <source src="https://www.dropbox.com/s/yvoppp2upwvzr16/1p-3-full-test.mp4?raw=1" type="video/mp4"/>
                    </video>
                    <video controls="controls" className="module__video-small" poster="/images/poster-1p-2-timer-full-test.png">
                        <source src="https://www.dropbox.com/s/uoomyx7htt5h3uv/1p-4-timer-full-test.mp4?raw=1" type="video/mp4"/>
                    </video>
                </div>
            </div>
        );
    }
}
