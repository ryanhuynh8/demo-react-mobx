/**
 * Created by huyhuynh on 8/23/17.
 */
import React, {Component} from 'react'
import {observer, inject} from 'mobx-react';
import Message from './Message'

@inject('store') @observer
class CaseInfoPanel extends Component {


    constructor(props) {
        super(props);
        this.messages = this.props.store.messages;
        console.log(this.state);
        this.state = { inputMessage: '123' };
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
        const agentList = this.props.store.currentAgentList;

        return <div className="box-agent-list">
            { agentList.map( (agent, index) => {
                return (
                    <span className="agent-name" key={index}>
                        <img className="avatar-img rounded-circle agent-avatar" src="/images/20046343_1609547959078623_9204659631358074576_n.jpg"/>
                        &nbsp; { agent.name } &nbsp;
                        <i className="fa fa-times-circle" aria-hidden="true" onClick={() => this.props.store.removeAgent(agent)} />
                    </span>
                )
            })}
            </div>
    }

    renderChatInput() {
        if (this.props.data.status !== 'done') return null;
        return (
            <div className="box-info box-chat-input">
                <textarea className="chat-input" rows="5" placeholder="Nội dung tin nhắn..." value={this.state.inputMessage} onChange={(e) => this.inputChangeHandler(e)}></textarea>
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
                <div className="suggest-agent-name" onClick={() => this.suggestAgentClicked('Nguyễn Khánh Bằng')}>
                    <img className="avatar-img rounded-circle agent-avatar"
                         src="/images/20046343_1609547959078623_9204659631358074576_n.jpg"/>
                    Nguyễn Khánh Bằng
                </div>
                <div className="suggest-agent-name" onClick={() => this.suggestAgentClicked('Dõan Văn Điều')}>
                    <img className="avatar-img rounded-circle agent-avatar"
                         src="/images/20046343_1609547959078623_9204659631358074576_n.jpg"/>
                    Dõan Văn Điều
                </div>
                <div className="suggest-agent-name" onClick={() => this.suggestAgentClicked('Nguyễn Gia Bảo')}>
                    <img className="avatar-img rounded-circle agent-avatar"
                         src="/images/20046343_1609547959078623_9204659631358074576_n.jpg"/>
                    Nguyễn Gia Bảo
                </div>
            </div>
        }
        return null;
    }

    suggestAgentClicked(name) {
        this.props.store.addAgentToList(name);
        this.props.store.showSuggestList = false;
        this.setState({inputMessage: this.state.inputMessage.slice(0, this.state.inputMessage.length - 1)});
    }

    inputChangeHandler(e) {
        if (e.target.value[e.target.value.length - 1] === '@') {
            this.props.store.showSuggestList = true;
        } else this.props.store.showSuggestList = false;
        this.setState({inputMessage: e.target.value});
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