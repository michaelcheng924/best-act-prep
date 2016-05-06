import React from 'react';

export default class OldVideos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isExpanded: false
        };

        this.toggleList = this.toggleList.bind(this);
    }

    toggleList() {
        $(this.refs.list).slideToggle();
        this.setState({ isExpanded: !this.state.isExpanded });
    }

    render() {
        return (
            <div>
                <button className="why__buy-details-show-videos btn btn-default" onClick={this.toggleList}>{this.state.isExpanded ? 'Hide' : 'Show'} video list</button>
                <div className="why__buy-details-video-list" ref="list">
                    <img src="/images/poster-0-1-motivated.png" className="why__video-poster" />
                    <img src="/images/poster-0-2-format.png" className="why__video-poster" />
                    <img src="/images/poster-0-3-most-important.png" className="why__video-poster" />
                    <img src="/images/poster-0-4-recommended-reading.png" className="why__video-poster" />
                    <img src="/images/poster-0-5-watch.png" className="why__video-poster" />
                    <img src="/images/poster-0-6-tips.png" className="why__video-poster" />
                    <img src="/images/poster-1s-0-intro.png" className="why__video-poster" />
                    <img src="/images/poster-1s-1-less-is-better.png" className="why__video-poster" />
                    <img src="/images/poster-1s-2-reading-passage.png" className="why__video-poster" />
                    <img src="/images/poster-1s-3-context.png" className="why__video-poster" />
                    <img src="/images/poster-1s-4-out-loud.png" className="why__video-poster" />
                    <img src="/images/poster-1s-5-types-of-questions.png" className="why__video-poster" />
                    <img src="/images/poster-1s-6-skipping-circling.png" className="why__video-poster" />
                    <img src="/images/poster-1s-7-bubbling.png" className="why__video-poster" />
                    <img src="/images/poster-1p-0-analyze.png" className="why__video-poster" />
                    <img src="/images/poster-1p-1-1-passage.png" className="why__video-poster" />
                    <img src="/images/poster-1p-1-timer-1-passage.png" className="why__video-poster" />
                    <img src="/images/poster-1p-2-full-test.png" className="why__video-poster" />
                    <img src="/images/poster-1p-2-timer-full-test.png" className="why__video-poster" />
                    <img src="/images/poster-2s-0-intro.png" className="why__video-poster" />
                    <img src="/images/poster-2s-1-faster-beginning.png" className="why__video-poster" />
                    <img src="/images/poster-2s-2-answer-choices.png" className="why__video-poster" />
                    <img src="/images/poster-2s-3-random-easy.png" className="why__video-poster" />
                    <img src="/images/poster-2s-4-test-twice.png" className="why__video-poster" />
                    <img src="/images/poster-2s-5-diagrams.png" className="why__video-poster" />
                    <img src="/images/poster-2s-6-calculator.png" className="why__video-poster" />
                    <img src="/images/poster-2s-7-bubbling.png" className="why__video-poster" />
                    <img src="/images/poster-2p-0-analyze.png" className="why__video-poster" />
                    <img src="/images/poster-2p-1-first-30.png" className="why__video-poster" />
                    <img src="/images/poster-2p-1-timer-first-30.png" className="why__video-poster" />
                    <img src="/images/poster-2p-2-last-30.png" className="why__video-poster" />
                    <img src="/images/poster-2p-2-timer-last-30.png" className="why__video-poster" />
                    <img src="/images/poster-2p-3-full-test.png" className="why__video-poster" />
                    <img src="/images/poster-2p-3-timer-full-test.png" className="why__video-poster" />
                    <img src="/images/poster-3s-0-intro.png" className="why__video-poster" />
                    <img src="/images/poster-3s-1-passage-first.png" className="why__video-poster" />
                    <img src="/images/poster-3s-2-how-fast.png" className="why__video-poster" />
                    <img src="/images/poster-3s-3-key-info.png" className="why__video-poster" />
                    <img src="/images/poster-3s-4-time-limits.png" className="why__video-poster" />
                    <img src="/images/poster-3s-5-using-finger.png" className="why__video-poster" />
                    <img src="/images/poster-3s-6-skipping.png" className="why__video-poster" />
                    <img src="/images/poster-3s-7-prose-fiction.png" className="why__video-poster" />
                    <img src="/images/poster-3s-8-types-of-questions.png" className="why__video-poster" />
                    <img src="/images/poster-3s-9-wrong-choices.png" className="why__video-poster" />
                    <img src="/images/poster-3s-10-bubbling.png" className="why__video-poster" />
                    <img src="/images/poster-3p-0-analyze.png" className="why__video-poster" />
                    <img src="/images/poster-3p-1-1-passage.png" className="why__video-poster" />
                    <img src="/images/poster-3p-1-timer-1-passage.png" className="why__video-poster" />
                    <img src="/images/poster-3p-3-2-passages.png" className="why__video-poster" />
                    <img src="/images/poster-3p-4-timer-2-passages.png" className="why__video-poster" />
                    <img src="/images/poster-3p-5-full-test.png" className="why__video-poster" />
                    <img src="/images/poster-3p-5-timer-full-test.png" className="why__video-poster" />
                    <img src="/images/poster-4s-0-intro.png" className="why__video-poster" />
                    <img src="/images/poster-4s-1-format.png" className="why__video-poster" />
                    <img src="/images/poster-4s-2-finger.png" className="why__video-poster" />
                    <img src="/images/poster-4s-3-managing-time.png" className="why__video-poster" />
                    <img src="/images/poster-4s-4-non-conflicting.png" className="why__video-poster" />
                    <img src="/images/poster-4s-5-conflicting.png" className="why__video-poster" />
                    <img src="/images/poster-4s-6-skipping.png" className="why__video-poster" />
                    <img src="/images/poster-4s-7-bubbling.png" className="why__video-poster" />
                    <img src="/images/poster-4p-0-analyze.png" className="why__video-poster" />
                    <img src="/images/poster-4p-1-1-passage.png" className="why__video-poster" />
                    <img src="/images/poster-4p-1-timer-1-passage.png" className="why__video-poster" />
                    <img src="/images/poster-4p-3-two-parts.png" className="why__video-poster" />
                    <img src="/images/poster-4p-4a-timer-6-passages.png" className="why__video-poster" />
                    <img src="/images/poster-4p-4b-timer-conflicting.png" className="why__video-poster" />
                    <img src="/images/poster-4p-5-full-test.png" className="why__video-poster" />
                    <img src="/images/poster-4p-6-timer-full-test.png" className="why__video-poster" />
                </div>
            </div>
        );
    }
}
