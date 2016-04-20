import React from 'react';

export default class Miscellaneous81Videos extends React.Component {
    render() {
        return (
            <div className="module">
                <h4 className="module__title--category">A.1) Old Course Videos</h4>
                <h2 className="module__title">ACT Basics</h2>
                <div className="module__content">
                    <video controls="controls" className="module__video-small" poster="/images/poster-0-1-motivated.png">
                        <source src="https://www.dropbox.com/s/stf1gpts6a3zjni/0-1-motivated.mp4?raw=1" type="video/mp4"/>
                    </video>
                    <video controls="controls" className="module__video-small" poster="/images/poster-0-2-format.png">
                        <source src="https://www.dropbox.com/s/ccyajwsdpfcd9sm/0-2-format.mp4?raw=1" type="video/mp4"/>
                    </video>
                    <video controls="controls" className="module__video-small" poster="/images/poster-0-3-most-important.png">
                        <source src="https://www.dropbox.com/s/w0dyoggd8m2lmmz/0-3-most-important.mp4?raw=1" type="video/mp4"/>
                    </video>
                    <video controls="controls" className="module__video-small" poster="/images/poster-0-4-recommended-reading.png">
                        <source src="https://www.dropbox.com/s/rqesboa9ygnuato/0-4-reading-list.mp4?raw=1" type="video/mp4"/>
                    </video>
                    <video controls="controls" className="module__video-small" poster="/images/poster-0-5-watch.png">
                        <source src="https://www.dropbox.com/s/s5iw07xgvgxbjme/0-5-watch.mp4?raw=1" type="video/mp4"/>
                    </video>
                    <video controls="controls" className="module__video-small" poster="/images/poster-0-6-tips.png">
                        <source src="https://www.dropbox.com/s/ze9anpjlua1k7jw/0-6-tips.mp4?raw=1" type="video/mp4"/>
                    </video>
                </div>
            </div>
        );
    }
}
