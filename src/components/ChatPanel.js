/**
 * Created by huyhuynh on 8/23/17.
 */
import React, {Component} from 'react'
import TinyPanel from './pure/TinyPanel'
import CaseInfoPanel from './pure/CaseInfoPanel'
import {observer, inject} from 'mobx-react';

@inject('store') @observer
class ChatPanel extends Component {

    constructor(props) {
        super(props);
        this.cases = this.props.store.cases;
    }

    render() {
        return <div className="col-8">
            <TinyPanel text="Xem trước đó" />
            { this.cases.map( (item, index) => {
                return <CaseInfoPanel data={item} key={index} />
            })}


        </div>
    }
}

export default ChatPanel;