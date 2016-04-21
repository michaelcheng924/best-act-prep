import React from 'react';
import { onSupportSubmit } from 'api/app';

export default class SupportBox extends React.Component {
    constructor(props) {
        super(props);

        this.setSupportTopic = this.setSupportTopic.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    setSupportTopic(event) {
        this.props.setSupportTopic(event.target.value);
    }

    isRefund() {
        return this.props.supportTopic === 'refund';
    }

    onInputChange() {
        this.props.setSupportMessage(null, null);
    }

    submit(event) {
        event.preventDefault();

        const { dropdown, email, textarea } = this.refs;

        if (!email.value || (!this.isRefund() && !textarea.value)) {
            this.props.setSupportMessage('Required fields cannot be blank.', 'danger');
            return;
        }

        onSupportSubmit(dropdown.value, email.value, textarea.value).then(response => {
            if (response.success) {
                email.value = '';
                textarea.value = '';
                this.props.setSupportMessage('Your request has been sent. We will contact you as soon as possible!', 'success');
            } else {
                this.props.setSupportMessage('Unfortunately, something went wrong. Maybe try again?', 'danger');
            }
        });
    }

    renderSupportMessage() {
        if (!this.props.supportMessage) { return null; }

        const { supportMessage, supportMessageType } = this.props;

        return <div className={`alert alert-${supportMessageType}`}>{supportMessage}</div>;
    }

    render() {
        const placeHolderText = this.isRefund() ? 'Additional comments (optional)' : 'What is your question? (required)';
        const buttonText = this.isRefund() ? 'Request refund' : 'Submit';

        return (
            <div>
                <div className="log-in-box__overlay" onClick={this.props.hideSupport} />
                <div className="support-box">
                    {this.renderSupportMessage()}
                    <div className="support-box__heading">
                        <strong>How can we help?</strong>
                    </div>
                    <form onSubmit={this.submit}>
                        <select onChange={this.setSupportTopic} ref="dropdown">
                            <option value="question-course">I have a question about the course</option>
                            <option value="refund">I'd like a refund</option>
                            <option value="other">Other</option>
                        </select>
                        <input
                            type="email"
                            className="form-control support-box__input"
                            placeholder="Email (required)"
                            onChange={this.onInputChange}
                            ref="email"
                        />
                        <textarea
                            className="form-control support-box__input"
                            placeholder={placeHolderText}
                            rows={3}
                            onChange={this.onInputChange}
                            ref="textarea"
                        />
                        <button className="btn btn-primary support-box__button">{buttonText}</button>
                    </form>
                    <br />
                    <strong>Email:</strong> <a href="mailto:support@bestactprep.co">support@bestactprep.co</a>
                </div>
            </div>
        );
    }
}
