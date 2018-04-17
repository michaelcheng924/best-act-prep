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
        const { pdf, restricted } = this.props;

        if (this.state.showVideo) { return null; }

        if (restricted) {
            return (
                <Link to="/buy">
                    <button className="Button Button--small Button--orange Button--pdf">Get access</button>
                </Link>
            );
        }

        return (
            <a href={pdf} target="_blank">
                <button className="Button Button--small Button--pdf">
                    Open PDF
                </button>
            </a>
        );
    }

    renderImage() {
        const { category, id } = this.props;

        return (
            <img
                src={`/images/thumbnails/${category}/${id}.jpg`}
                className="Course__thumbnail"
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
                    !restricted
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
