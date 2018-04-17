import React from 'react';
import { Link } from 'react-router-dom';
import css from 'classnames';

export class VideoSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showVideo: false
        };

        this.showVideo = this.showVideo.bind(this);
    }

    showVideo() {
        if (this.props.isPdf) { return; }

        this.setState({ showVideo: true });
    }

    renderButton() {
        const { restricted } = this.props;

        if (this.state.showVideo) { return null; }

        if (restricted) {
            return (
                <Link to="/buy">
                    <button className="Button Button--small Button--orange">Get access</button>
                </Link>
            );
        }

        return (
            <button className="Button Button--small" onClick={this.showVideo}>
                Watch
            </button>
        );
    }

    renderImage() {
        const { category, id } = this.props;

        if (this.state.showVideo) {
            return (
                <iframe
                    src={`https://player.vimeo.com/video/${
                        id}`}
                    className="Course__video"
                    frameBorder="0"
                    webkitallowfullscreen="true"
                    mozallowfullscreen="true"
                    allowFullScreen
                    title={id}
                />
            );
        }

        return (
            <img
                src={`/images/thumbnails/${category}/${id}.jpg`}
                className="Course__thumbnail"
                onClick={this.showVideo}
                alt=""
            />
        );
    }

    render() {
        const { pdf, restricted, title } = this.props;

        const classNames = css('Course__video-section', {
            'Course__video-section--restricted': restricted
        });

        return (
            <div className={classNames}>
                <div className="Course__video-title">
                    {title}
                    {this.renderButton()}
                </div>
                {
                    pdf && !restricted
                        ? (
                            <a href={pdf} target="_blank">
                                <button className="button" style={{ marginBottom: 10 }}>
                                    Open PDF
                                </button>
                            </a>
                        )
                        : null
                }
                {this.renderImage()}
            </div>
        );
    }
}

export default VideoSection;
