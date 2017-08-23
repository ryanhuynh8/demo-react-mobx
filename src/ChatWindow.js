/**
 * Created by huyhuynh on 6/30/17.
 */
import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';
import Message from './Message';

@inject('store') @observer
class ChatWindow extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store;
        this.id = this.props.id;
        this.messages = this.store.messages;
        this.$ = $;
    }

    submitMessage() {
        this.store.addMessage({ from: 'we', for: this.props.user });
        this.store.updateMessage('');
    }

    minimizeClick() {
        const el = findDOMNode(this.panelBodyRef);
        this.$(el).slideToggle();
    }

    focusInput() {
        const el = findDOMNode(this.inputRef);
        this.$(el).focus();
    }

    onChangeMessage(event) {
        this.store.updateMessage(event.target.value);
    }

    onKeyPress(e) {
        if (e.key === 'Enter') {
            this.submitMessage();
        }
    }

    setCustomer() {
        this.focusInput();
        if (this.props.user === 'Dieu') {
            this.store.loadCustomer(1);
        } else if (this.props.user === 'Huy') {
            this.store.loadCustomer(2);
        }
    }

    componentDidUpdate() {
        const panel = findDOMNode(this.panelBodyRef);
        if (panel !== null) {
            panel.scrollTop = panel.scrollHeight;
        }
    }

    render() {
        var messages = this.messages.filter( item => item.for === this.props.user );


        return (
            <div className="row chat-window col-xs-5 col-md-3" id="chat_window_1"
                 style={{"margin-left": "10px"}}>
                <div className="col-xs-12 col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-heading top-bar" onClick={() => this.setCustomer()}>
                            <div className="col-md-8 col-xs-8">
                                <h3 className="panel-title"><span
                                    className="glyphicon glyphicon-comment"></span> Chat - {this.props.user}</h3>
                            </div>
                            <div className="col-md-4 col-xs-4" style={{"text-align": "right"}}>
                                <a href="" onClick={() => this.minimizeClick()}><span id="minim_chat_window"
                                                                                       className="glyphicon glyphicon-minus icon_minim"></span></a>
                                <a href=""><span className="glyphicon glyphicon-remove icon_close"
                                                  data-id="chat_window_1"></span></a>
                            </div>
                        </div>
                        <div className="panel-body msg_container_base" ref={ref => this.panelBodyRef = ref}>
                            {messages.map( message => {
                                return <Message text={message.text} from={message.from} />
                            })}
                        </div>
                    </div>
                    <div className="panel-footer">
                        <div className="input-group">
                            <input id="btn-input" type="text" className="form-control input-sm chat_input"
                                   placeholder="Write your message here..." value={this.store.message}
                                   onChange={e => this.onChangeMessage(e)} onKeyPress={e => this.onKeyPress(e)} ref={ref => this.inputRef = ref}/>
                            <span className="input-group-btn">
                        <button className="btn btn-primary btn-sm" id="btn-chat" onClick={() => this.submitMessage()}>Send</button>
                        </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChatWindow;