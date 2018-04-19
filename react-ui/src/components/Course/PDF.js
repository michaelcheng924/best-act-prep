import React from 'react';
import { Link } from 'react-router-dom';
import css from 'classnames';

export class VideoSection extends React.Component {
    renderButton() {
        const { pdf, restricted } = this.props;

        if (restricted) {
            return (
                <Link to="/buy">
                    <button className="Button Button--small Button--orange">Get access</button>
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
        const { category, id, pdf } = this.props;

        return (
            <a href={pdf} target="_blank">
                <img
                    src={`/images/thumbnails/${category}/${id}.jpg`}
                    className="Course__thumbnail"
                    alt=""
                />
            </a>
        );
    }

    render() {
        const { restricted, title } = this.props;

        const classNames = css('Course__video-section', {
            'Course__video-section--restricted': restricted
        });

        return (
            <div className={classNames}>
                <div className="Course__video-title">
                    {title}
                    {this.renderButton()}
                </div>
                {this.renderImage()}
            </div>
        );
    }
}

export default VideoSection;
