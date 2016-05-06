import React from 'react';

export default class NewVideos extends React.Component {
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

    renderCurrentMessage() {
        if (!this.props.isReason) { return null; }

        return <div className="why__current-videos-tagline">(We're still working on them!)</div>;
    }

    render() {
        return (
            <div>
                <button className="why__buy-details-show-videos btn btn-default" onClick={this.toggleList}>{this.state.isExpanded ? 'Hide' : 'Show'} current video list</button>
                {this.renderCurrentMessage()}
                <div className="why__buy-details-video-list" ref="list">
                    <img src="/images/poster-Foundations12Overview.png" className="why__video-poster" />
                    <img src="/images/poster-English2B1Overview.png" className="why__video-poster" />
                    <img src="/images/poster-Math3B1Overview.png" className="why__video-poster" />
                    <img src="/images/poster-Reading4B1Overview.png" className="why__video-poster" />
                    <img src="/images/poster-Science5B1Overview.png" className="why__video-poster" />
                </div>
            </div>
        );
    }
}
