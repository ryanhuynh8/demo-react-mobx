/**
 * Created by huyhuynh on 8/23/17.
 */
import React, {Component} from 'react'
import ChatPanel from './ChatPanel'
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
                    <div className="col-12 col-md-4 col-sm-12 p-0">
                        <div className="box-white">
                            <div className="btn-group btn-group-in-case" data-toggle="buttons">
                                <button className="btn button-red">Thêm yêu cầu</button>
                                <button className="btn button-blue dropdown-toggle" data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false">Lưu
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Separated link</a>
                                </div>
                                <button className="btn button-gray">Đóng</button>
                            </div>
                            <div className="clearfix"></div>

                            <h5 className="fs-18 fw-600 mt-4">Thông tin yêu cầu 80333</h5>
                            <ul className="list-unstyled list-info-in-case">
                                <li>
                                    <label>Họ tên</label>
                                    <br/>
                                    <span>Nguyễn Khánh Băng</span>
                                    <span className="action-info">
                                    <a href="thongtinyeucau_edit.html"><i className="fa fa-pencil"
                                                                          aria-hidden="true"></i></a>
                                </span>
                                </li>
                                <li>
                                    <label>Điện thoại</label>
                                    <br/>
                                    <span>+84 901245684</span>
                                    <span className="action-info">
                                    <i className="fa fa-pencil" aria-hidden="true"></i>
                                </span>
                                </li>
                                <li>
                                    <label>Email</label>
                                    <br/>
                                    <span>bangnk1985@gmail.com</span>
                                    <span className="action-info">
                                    <i className="fa fa-pencil" aria-hidden="true"></i>
                                </span>
                                </li>
                                <li>
                                    <label>Tài khoản</label>
                                    <br/>
                                    <span>bangnk1985</span>
                                    <span className="action-info">
                                    <i className="fa fa-pencil" aria-hidden="true"></i>
                                </span>
                                </li>
                                <li>
                                    <label>Loại yêu cầu</label>
                                    <br/>
                                    <span>Báo lỗi, khiếu kiện</span>
                                    <span className="action-info">
                                    <i className="fa fa-pencil" aria-hidden="true"></i>
                                </span>
                                </li>
                                <li>
                                    <label>Sản phẩm</label>
                                    <br/>
                                    <span>Gunny Mobile</span>
                                    <span className="action-info">
                                    <i className="fa fa-pencil" aria-hidden="true"></i>
                                </span>
                                </li>
                                <li>
                                    <label>Nội dung</label>
                                    <br/>
                                    <p className="request-info">
                                        Hãy đến tham quan The American School (TAS), cùng trò truyện với học sinh,
                                        thầy cô giáo, tìm hiểu về thông tin chương trình học tại TAS, tham khảo ý kiếm.
                                        Hãy đến tham quan The American School (TAS), cùng trò truyện với học sinh,
                                        thầy cô giáo, tìm hiểu về thông tin chương trình học tại TAS, tham khảo ý kiếm.
                                    </p>
                                    <span className="action-info">
                                    <i className="fa fa-pencil" aria-hidden="true"></i>
                                </span>
                                </li>
                                <li>
                                    <label>Tags</label>
                                    <br/>
                                    <span><a href="">#tag1</a> <a href="">#tag2</a></span>
                                    <span className="action-info">
                                    <i className="fa fa-pencil" aria-hidden="true"></i>
                                </span>
                                </li>
                                <li>
                                    <label>Đính kèm</label>
                                    <br/>
                                    <a href=""><i className="fa fa-file-text-o" aria-hidden="true"></i> Đính kèm 1.doc</a>
                                    <a
                                        href=""><i className="fa fa-file-text-o" aria-hidden="true"></i> Đính kèm 1.doc</a>
                                    <span className="action-info">
                                    <i className="fa fa-pencil" aria-hidden="true"></i>
                                </span>
                                </li>
                            </ul>
                            <div className="box-clearfix"></div>
                            <div className="d-flex justify-content-between align-items-center mt-4 mb-3">
                                <h5 className="fs-18 fw-600">Trao đổi nội bộ</h5>
                                <a href="traodoinoibo.html">Xem tất cả</a>
                            </div>
                            <div className="card">
                                <div className="card-body body-request">
                                    <div className="message-view d-flex">
                                        <div className="chat-item d-flex me">
                                            <div className="chat-content d-flex">
                                                <div className="chat-message-container">
                                                    <div className="chat-username fs-14">Đức Duy <i>(PAQ)</i></div>
                                                    <div className="message me">
                                                        <div className="message--text me">
                                                            Bên em đã nhận yêu cầu, hẹn anh ngày mai
                                                            giải quyết nhé.
                                                        </div>
                                                    </div>
                                                    <div className="message me">
                                                        <div className="message--text me">
                                                            Mai giải quyết nhé.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="chat-item d-flex ">
                                            <div className="chat-content d-flex">
                                                <div className="chat-message-container">
                                                    <div className="chat-username fs-14">Nguyễn Khánh Băng <i>(Facebook)</i>
                                                    </div>
                                                    <div className="message">
                                                        <div className="message--text">
                                                            Bên em đã nhận yêu cầu, hẹn anh ngày mai
                                                            giải quyết nhé.
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="chat-item d-flex me">
                                            <div className="chat-content d-flex">
                                                <div className="chat-message-container">
                                                    <div className="chat-username fs-14">Đức Duy <i>(PAQ)</i></div>
                                                    <div className="message me">
                                                        <div className="message--text me">
                                                            Bên em đã nhận yêu cầu, hẹn anh ngày mai
                                                            giải quyết nhé.
                                                        </div>
                                                    </div>
                                                    <div className="message me">
                                                        <div className="message--text me">
                                                            Mai giải quyết nhé.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <form className="input-chat"
                                          style={{marginLeft: `-1.25rem`, marginRight: `-1.25rem`, marginTop: `-.75rem`}}>
                                        <textarea className="form-control" rows="3"
                                                  placeholder="Nội dung tin nhắn..."></textarea>
                                    </form>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="icon-input-extension">
                                                <i className="fa fa-smile-o " aria-hidden="true"></i>
                                                <i className="fa fa-paperclip fa-rotate-90 " aria-hidden="true"></i>
                                                <i className="fa fa-picture-o " aria-hidden="true"></i>
                                                <i className="fa fa-file-text-o" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                        <div className="col-8">
                                            <div className="form-group" style={{marginBottom:`0rem`}}>
                                                <select className="form-control flex-with-100">
                                                    <option>Chọn nhóm xử lý</option>
                                                    <option>
                                                        SG1
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="btn-group dropup">
                                                <button type="button" className="btn btn-submit-chat">
                                                    Gửi
                                                </button>
                                                <button type="button"
                                                        className="btn btn-submit-chat btn-dropdown-addon dropdown-toggle"
                                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <span className="sr-only">Toggle Dropdown</span>
                                                </button>
                                                <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                                    <a className="dropdown-item" href="#">Dropdown link</a>
                                                    <a className="dropdown-item" href="#">Dropdown link</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box-white">
                            <div className="d-flex justify-content-between align-items-center mt-4 mb-3">
                                <h5 className="fs-18 fw-600">Trao đổi nội bộ</h5>
                                <a href="traodoinoibo.html">Xem tất cả</a>
                            </div>
                            <div className="box-clearfix"></div>
                            <div className="box-info box-case-info">
                    <span>
                        <a href="#">80111</a> | <span className="badge badge-danger">&nbsp;&nbsp;</span><span
                        className="case-status"> CHƯA XỬ LÝ</span>
                        <span className="case-date">22/8/2017 08:08</span>
                        <br/>
                        <div className="case-title" style={{marginTop:`10px`}}>Lỗi thanh toán thẻ ATM</div>
                    </span>
                            </div>
                            <div className="box-info box-case-info">
                    <span>
                        <a href="#">11111</a> | <span className="badge badge-danger">&nbsp;&nbsp;</span><span
                        className="case-status"> CHƯA XỬ LÝ</span>
                        <span className="case-date">22/8/2016 08:08</span>
                        <br/>
                        <div className="case-title" style={{marginTop:`10px`}}>Lỗi thanh toán thẻ ATM</div>
                    </span>
                            </div>

                        </div>
                        <div className="box-white">
                            <div className="d-flex justify-content-between align-items-center mt-4 mb-3">
                                <h5 className="fs-18 fw-600">Lịch sử thao tác</h5>
                                <a href="">Xem tất cả</a>
                            </div>
                            <div className="box-clearfix"></div>
                            <div className="box-info box-case-info">
                                NamLH3 nhận việc <span className="case-date">22/8/2017 08:08</span>
                            </div>
                            <div className="box-info box-case-info">
                                NamLH3 nhận việc <span className="case-date">22/8/2017 08:08</span>

                            </div>
                        </div>
                    </div>
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