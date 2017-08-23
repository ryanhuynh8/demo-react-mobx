/**
 * Created by huyhuynh on 8/23/17.
 */
import React, {Component} from 'react'

class Header extends Component {
    render() {
        return <span className="badge badge-danger">{this.props.text}</span>;
    }
}

export default Header;