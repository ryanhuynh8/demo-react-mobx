/**
 * Created by huyhuynh on 8/22/17.
 */
import React, {Component} from 'react'
import Badge from './pure/Badge'
import CustomerNameHeader from './pure/CustomerNameHeader'

class Header extends Component {
    render() {
        return (
            <header>
                <div id="header-top">
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-dark">
                            <a className="navbar-brand" href="#">
                                <img src="/images/logo123cs.png"/>
                            </a>
                            <button className="navbar-toggler" type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="navbar-collapse collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#" data-toggle="tooltip" title="TỔNG YÊU CẦU: <b>120</b> <br>
YÊU CẦU TỒN: <b>20</b><br>
Thêm mới hôm nay: <b>50</b><br>
Đã xử lý hôm nay: <b>60</b><br>
Đã được nhận việc hôm nay: <b>70</b> ">SG1 Tên Dài Ơi Là DÀi
                                            <Badge text="9+" /></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#" data-toggle="tooltip" title="TỔNG YÊU CẦU: <b>120</b> <br>
YÊU CẦU TỒN: <b>20</b><br>
Thêm mới hôm nay: <b>50</b><br>
Đã xử lý hôm nay: <b>60</b><br>
Đã được nhận việc hôm nay: <b>70</b> ">Link
                                            <Badge text="5" />
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled" href="#" data-toggle="tooltip" title="TỔNG YÊU CẦU: <b>120</b> <br>
YÊU CẦU TỒN: <b>20</b><br>
Thêm mới hôm nay: <b>50</b><br>
Đã xử lý hôm nay: <b>60</b><br>
Đã được nhận việc hôm nay: <b>70</b> ">Disabled
                                            <Badge text="2" />
                                        </a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"
                                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Xem Thêm
                                            <Badge text="99+" />
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
                                    <li className="nav-item">
                                        <a className="nav-link p-2" target="_blank">
                                            <i className="fa fa-bell fa-2" aria-hidden="true"></i>
                                            <Badge text="99+" />
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <div className="avatar">
                                            <div className="avatar-img rounded-circle"
                                                 style={{backgroundImage: `url('/images/20046343_1609547959078623_9204659631358074576_n.jpg')`}}></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>

                <CustomerNameHeader customerName="Huỳnh Đức Anh Huy" fromSource="Gửi qua 123cs" avatarLink="/images/20046343_1609547959078623_9204659631358074576_n.jpg"/>
            </header>
        );
    }
}

export default Header;