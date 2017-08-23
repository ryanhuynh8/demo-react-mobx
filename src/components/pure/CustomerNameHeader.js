/**
 * Created by huyhuynh on 8/23/17.
 */
import React, {Component} from 'react'

class CustomerNameHeader extends Component {
    render() {
        return <div id="header-bottom-white">
            <div className="container" style={{height:`100%`}}>
                <div className="row" style={{height:`100%`, marginLeft:`0px`, marginRight:`0px`}}>
                    <div className="avatar">
                        <div className="avatar-img avatar-customer-img vertical-center" style={{backgroundImage: `url('${this.props.avatarLink}')`}}></div>
                    </div>
                    <div className="customer-name ">
                        <div className="vertical-center">
                            <span>{this.props.customerName}</span><br/>
                            <a href="#">{this.props.fromSource}</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    }
}

export default CustomerNameHeader;