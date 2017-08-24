/**
 * Created by huyhuynh on 8/23/17.
 */
import React, {Component} from 'react'
import {observer, inject} from 'mobx-react';
import Message from './Message'

@inject('store') @observer
class CaseInfoPanel extends Component {
    inputMessage = '';

    constructor(props) {
        super(props);
        this.messages = this.props.store.messages;

        switch (props.data.status) {
            case 'pending':
                this.statusIcon = <i className="fa fa-circle" style={{color: `red`}} aria-hidden="true" />;
                break;
            case 'processing':
                this.statusIcon = <i className="fa fa-circle" style={{color: `#ffc107`}} aria-hidden="true" />;
                break;
            case 'done':
                this.statusIcon = <i className="fa fa-circle" style={{color: `green`}} aria-hidden="true" />;
                break;
            default:
                this.statusIcon = null;
        }
    }

    renderChatBox() {
        if (this.props.data.status !== 'done') return null;
        return (
            <div className="case-chat">
                <div className="row">
                    { this.messages.map((message, index) => {
                       return <Message data={message} key={index} />
                    })}
                </div>
            </div>
        )
    }

    renderAgentList() {
        if (this.props.data.status !== 'done') return null;
        return <div className="box-agent-list">
                <span className="agent-name">
                    <img className="avatar-img rounded-circle agent-avatar" src="/images/20046343_1609547959078623_9204659631358074576_n.jpg"/>
                    &nbsp; Dõan Văn Điều &nbsp;
                    <i className="fa fa-times-circle" aria-hidden="true"/>
                </span>
                <span className="agent-name">
                    <img className="avatar-img rounded-circle agent-avatar" src="/images/20046343_1609547959078623_9204659631358074576_n.jpg"/>
                    &nbsp;	Nguyễn Khánh Bằng &nbsp;
                    <i className="fa fa-times-circle" aria-hidden="true"/>
                </span>
                <span className="agent-name">
                    <img className="avatar-img rounded-circle agent-avatar" src="/images/20046343_1609547959078623_9204659631358074576_n.jpg"/>
                    &nbsp;	 Nguyễn Gia Bảo &nbsp;
                    <i className="fa fa-times-circle" aria-hidden="true"/>
                </span>
            </div>
    }

    renderChatInput() {
        if (this.props.data.status !== 'done') return null;
        return (
            <div className="box-info box-chat-input">
                <textarea className="chat-input" rows="5" placeholder="Nội dung tin nhắn..." value={this.inputMessage} onChange={(e) => this.inputChangeHandler(e)}></textarea>
                <i className="fa fa-smile-o" aria-hidden="true" />
                <i className="fa fa-paperclip" aria-hidden="true" />
                <i className="fa fa-picture-o" aria-hidden="true" />
                <i className="fa fa-comment-o" aria-hidden="true" />
                <input type="button" className="submit btn-primary" value="Gửi" />
                { this.renderSuggestList() }
            </div>
        )
    }

    renderSuggestList() {
        if (this.props.store.showSuggestList) {
            return <div className="box-info box-agent-suggest-list">
                <span style={{fontWeight:`bold`, fontSize: `14px`}}>Thêm người hỗ trợ</span>
                <div className="suggest-agent-name">
                    <img className="avatar-img rounded-circle agent-avatar"
                         src="/images/20046343_1609547959078623_9204659631358074576_n.jpg"/>
                    Huy Huynh
                </div>
                <div className="suggest-agent-name">
                    <img className="avatar-img rounded-circle agent-avatar"
                         src="/images/20046343_1609547959078623_9204659631358074576_n.jpg"/>
                    Dieu Doan
                </div>
                <div className="suggest-agent-name">
                    <img className="avatar-img rounded-circle agent-avatar"
                         src="/images/20046343_1609547959078623_9204659631358074576_n.jpg"/>
                    Bao Gia
                </div>
            </div>
        }
        return null;
    }

    inputChangeHandler(e) {
        console.log(this);
    }
    render() {
        return (
            <div className="box-info box-case-info">
                <span>
                    <a href="#">{ this.props.data.caseId }</a> | { this.props.data.source} | { this.statusIcon } <span className="case-status"> CHƯA XỬ LÝ</span>
                    <span className="case-date">{ this.props.data.date }</span>
                    <br/>
                    <div className="case-title" style={{marginTop:`10px`}}>{ this.props.data.title }</div>
                    { this.props.data.content }
                </span>
                { this.props.data.status === 'done' ? <hr/> : null}
                { this.renderChatBox() }
                { this.renderAgentList() }
                <hr/>
                { this.renderChatInput() }

            </div>
        )
    }
}

export default CaseInfoPanel;