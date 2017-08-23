/**
 * Created by huyhuynh on 8/23/17.
 */
import React, {Component} from 'react'

class TinyPanel extends Component {
    render() {
        return <div className="box-previous">
            <span className="vertical-center" style={{top:`5px`}}><a href="#">{this.props.text}</a></span>
        </div>
    }
}

export default TinyPanel;