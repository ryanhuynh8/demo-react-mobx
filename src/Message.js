/**
 * Created by huyhuynh on 6/29/17.
 */
import React, {Component} from 'react';
import {observer} from 'mobx-react';

@observer
export default class Message extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.from === 'we')
            return (
                <div className="row msg_container base_sent">
                    <div className="col-md-10 col-xs-10">
                        <div className="messages msg_sent">
                            <p>{this.props.text}</p>
                            <time dateTime="2009-11-13T20:00">Timothy • 51 min</time>
                        </div>
                    </div>
                    <div className="col-md-2 col-xs-2 avatar">
                        <img
                            src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg"
                            className=" img-responsive "/>
                    </div>
                </div>
            );
        else {
            return (
                <div className="row msg_container base_receive">
                    <div className="col-md-2 col-xs-2 avatar">
                        <img
                            src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg"
                            className=" img-responsive "/>
                    </div>
                    <div className="col-md-10 col-xs-10">
                        <div className="messages msg_sent">
                            <p>{this.props.text}</p>
                            <time dateTime="2009-11-13T20:00">Timothy • 51 min</time>
                        </div>
                    </div>
                </div>
            );
        }
    }
}