/**
 * Created by huyhuynh on 8/23/17.
 */
import React, {Component} from 'react'
import {observer, inject} from 'mobx-react';

@inject('store') @observer
class CustomerNameHeader extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store;
    }

    render() {
        return <div id="header-bottom-white">
            <div className="container" style={{height:`100%`}}>
                <div className="row" style={{height:`100%`, marginLeft:`0px`, marginRight:`0px`}}>
                    <div className="col-12 col-sm-12 col-md-8 d-flex justify-content-between align-items-center">
                        <div className="d-inline-flex">
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

                    <div className="col-12 col-md-4 col-sm-12 p-0 d-flex justify-content-between align-items-end" style={{left:`5px`}}>
                        <ul className="nav d-inline-flex justify-content-between tabs-info">
                            <li className={ 'nav-item ' + (this.store.activeTab === 'info' ? 'active' : '' ) }>
                                <a className="nav-link" href="#" onClick={() => this.store.setActiveTab('info')}>Thông tin cá nhân</a>
                            </li>
                            <li className={ 'nav-item ' + (this.store.activeTab === 'case' ? 'active' : '' ) }>
                                <a className="nav-link" href="#" onClick={() => this.store.setActiveTab('case')}>Thông tin yêu cầu</a>
                            </li>
                        </ul>

                    </div>
                </div>

            </div>
        </div>
    }
}

export default CustomerNameHeader;