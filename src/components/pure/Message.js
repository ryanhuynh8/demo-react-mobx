/**
 * Created by huyhuynh on 8/23/17.
 */
import React, {Component} from 'react'

class Message extends Component {
    constructor(props) {
        super(props);

        if (props.data.direction === 'left')
            this.style = 'chat-message-left';
        else this.style = 'chat-message-right'
    }

    render() {
        return <div className={`chat-message ${this.style}`}>
            <span className="chat-username">{ this.props.data.name }</span>
            <br/>
            <div className="chat-text">
                { this.props.data.text }
            </div>
            <span className="chat-message-info vertical-center" style={{marginLeft:`10px`,marginRight: `10px`}}>{ this.props.data.timestamp } | Thuộc yêu cầu { this.props.data.requestId }</span>
        </div>
    }
}

export default Message;