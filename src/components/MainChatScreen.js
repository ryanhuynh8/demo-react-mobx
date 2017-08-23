/**
 * Created by huyhuynh on 8/23/17.
 */
import React, {Component} from 'react'
import ChatPanel from './ChatPanel'

class MainChatScreen extends Component {
    render() {
        return (
            <div className="row">
                <ChatPanel />
            </div>
        )
    }
}

export default MainChatScreen;