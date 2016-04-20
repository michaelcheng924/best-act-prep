import React from 'react';

export default class OldCourse85MathGuidedPractice extends React.Component {
    render() {
        return (
            <div className="module">
                <h4 className="module__title--category">A.5) Old Course Videos</h4>
                <h2 className="module__title">ACT Math Guided Practice</h2>
                <div className="module__content">
                    <video controls="controls" className="module__video-small" poster="/images/poster-2p-0-analyze.png">
                        <source src="https://www.dropbox.com/s/cj2hw6yr9tsf98e/2p-0-analyze.mp4?raw=1" type="video/mp4"/>
                    </video>
                    <video controls="controls" className="module__video-small" poster="/images/poster-2p-1-first-30.png">
                        <source src="https://www.dropbox.com/s/8px7lfbz81akhqg/2p-1-first-30.mp4?raw=1" type="video/mp4"/>
                    </video>
                    <video controls="controls" className="module__video-small" poster="/images/poster-2p-1-timer-first-30.png">
                        <source src="https://www.dropbox.com/s/uoxvcldoej6gv1z/2p-2-timer-first-30.mp4?raw=1" type="video/mp4"/>
                    </video>
                    <video controls="controls" className="module__video-small" poster="/images/poster-2p-2-last-30.png">
                        <source src="https://www.dropbox.com/s/l7ezc7nb86yxwf1/2p-3-last%2030.mp4?raw=1" type="video/mp4"/>
                    </video>
                    <video controls="controls" className="module__video-small" poster="/images/poster-2p-2-timer-last-30.png">
                        <source src="https://www.dropbox.com/s/r32hs753t30dfx5/2p-4-timer-last-30.mp4?raw=1" type="video/mp4"/>
                    </video>
                    <video controls="controls" className="module__video-small" poster="/images/poster-2p-3-full-test.png">
                        <source src="https://www.dropbox.com/s/wxqndikvl9wxoad/2p-5-full%20test.mp4?raw=1" type="video/mp4"/>
                    </video>
                    <video controls="controls" className="module__video-small" poster="/images/poster-2p-3-timer-full-test.png">
                        <source src="https://www.dropbox.com/s/5xptkv7o5emlveg/2p-6-timer-full-test.mp4?raw=1" type="video/mp4"/>
                    </video>
                </div>
            </div>
        );
    }
}
