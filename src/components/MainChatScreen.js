/**
 * Created by huyhuynh on 8/23/17.
 */
import React, {Component} from 'react'
import ChatPanel from './ChatPanel'
import CaseDialog from './CaseDialog'
import {observer, inject} from 'mobx-react';
import ApiService from '../services/MockApiService'

@inject('store') @observer
class MainChatScreen extends Component {

    async componentDidMount() {
        const result = await ApiService.getProfile(1);
        console.log(result);
    }

    render() {
        return (
            <div className="row">
                <ChatPanel />

                { this.props.store.activeTab == 'case' &&
                    <CaseDialog />
                }

                { this.props.store.activeTab === 'info' &&
                <div className="col-12 col-md-4 col-sm-12 p-0">
                    <div className="box-white">
                        <h5 className="fs-18 fw-600 mt-4">Thông tin liên hệ (Facebook)</h5>
                        <div className="mx-auto d-block text-center">
                            <img src="https://lh3.googleusercontent.com/_-lPxL3fYm1_91q-nGvsLYAKpyKk8ddO8v7_hkXIbWWVy-7LE92pNbFhYqtNXDc4CPcLXg=s72" alt="Nguyễn Khánh Băng" className="rounded-circle" />
                        </div>
                        <ul className="list-unstyled list-info-in-case">
                            <li>
                                <label>Họ tên</label>
                                <br/>
                                    <span>Nguyễn Khánh Băng</span>
                                    <span className="action-info">
                                    <i className="fa fa-pencil" aria-hidden="true" />
                                </span>
                            </li>
                            <li>
                                <label>Chúc danh</label>
                                <br/>
                                    <span>SE</span>
                                    <span className="action-info">
                                    <i className="fa fa-pencil" aria-hidden="true" />
                                </span>
                            </li>
                            <li>
                                <label>Điện thoại</label>
                                <br/>
                                    <span>+84 901245684</span>
                                    <span className="action-info">
                                    <i className="fa fa-pencil" aria-hidden="true" />
                                </span>
                            </li>
                            <li>
                                <label>Email</label>
                                <br/>
                                    <span>bangnk1985@gmail.com</span>
                                    <span className="action-info">
                                    <i className="fa fa-pencil" aria-hidden="true" />
                                </span>
                            </li>
                            <li>
                                <label>Tài khoản</label>
                                <br/>
                                    <span>bangnk1985</span>
                                    <span className="action-info">
                                    <i className="fa fa-pencil" aria-hidden="true" />
                                </span>
                            </li>
                            <li>
                                <label>Địa chỉ</label>
                                <br/>
                                    <span>118 Nguyễn Trãi, Phường Đa Kao, Quận 1, HCMC</span>
                                    <span className="action-info">
                                    <i className="fa fa-pencil" aria-hidden="true" />
                                </span>
                            </li>
                            <li>
                                <label>Giới tính</label>
                                <br/>
                                    <span>Nam</span>
                                    <span className="action-info">
                                    <i className="fa fa-pencil" aria-hidden="true" />
                                </span>
                            </li>
                            <li>
                                <label>Zing</label>
                                <br/>
                                    <span>bangnk1985</span>
                                    <span className="action-info">
                                    <i className="fa fa-pencil" aria-hidden="true" />
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                }
            </div>
        )
    }
}

export default MainChatScreen;