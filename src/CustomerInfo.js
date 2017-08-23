/**
 * Created by huyhuynh on 7/5/17.
 */
import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';

@inject('store') @observer
class CustomerInfo extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store;
        this.customer = this.store.customer !== undefined ? this.store.customer : {};
    }

    render() {
        this.customer = this.store.customer;
        return (
            <div className="row col-md-5">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xs-offset-0 col-sm-offset-0 toppad" >
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            <h3 className="panel-title">{this.customer.name}</h3>
                        </div>
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-md-3 col-lg-3 " align="center"> <img alt="User Pic" src="http://babyinfoforyou.com/wp-content/uploads/2014/10/avatar-300x300.png" className="img-circle img-responsive"/> </div>
                                <div className=" col-md-9 col-lg-9 ">
                                    <table className="table table-user-information">
                                        <tbody>
                                        <tr>
                                            <td>Title:</td>
                                            <td>{this.customer.title}</td>
                                        </tr>
                                        <tr>
                                            <td>Hire date:</td>
                                            <td>06/23/2013</td>
                                        </tr>
                                        <tr>
                                            <td>Date of Birth</td>
                                            <td>{this.customer.dob}</td>
                                        </tr>
                                        </tbody>
                                    </table>

                                    <a href="" className="btn btn-primary" style={{marginRight: '10px'}}>More information</a>
                                </div>
                            </div>
                        </div>
                        <div className="panel-footer">
                            <a data-original-title="Broadcast Message" data-toggle="tooltip" type="button" className="btn btn-sm btn-primary"><i className="glyphicon glyphicon-envelope"></i></a>
                            <span className="pull-right">
                                <a href="edit.html" data-original-title="Edit this user" data-toggle="tooltip" type="button" className="btn btn-sm btn-warning" style={{marginRight: '5px'}}><i className="glyphicon glyphicon-edit"></i></a>
                                <a data-original-title="Remove this user" data-toggle="tooltip" type="button" className="btn btn-sm btn-danger" style={{marginRight: '5px'}}><i className="glyphicon glyphicon-remove"></i></a>
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default CustomerInfo;