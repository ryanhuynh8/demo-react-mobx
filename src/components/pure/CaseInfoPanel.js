/**
 * Created by huyhuynh on 8/23/17.
 */
import React, {Component} from 'react'

class CaseInfoPanel extends Component {

    constructor(props) {
        super(props);

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
        return 
    }

    render() {
        console.log(this.statusIcon);
        return (
            <div className="box-info box-case-info">
                <span>
                    <a href="#">{ this.props.data.caseId }</a> | { this.props.data.source} | { this.statusIcon } <span className="case-status"> CHƯA XỬ LÝ</span>
                    <span className="case-date">{ this.props.data.date }</span>
                    <br/>
                    <div className="case-title" style={{marginTop:`10px`}}>{ this.props.data.title }</div>
                    { this.props.data.content }
                </span>
                { this.renderChatBox() }
            </div>
        )
    }
}

export default CaseInfoPanel;