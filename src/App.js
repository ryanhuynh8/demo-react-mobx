import React, {Component} from 'react';
import appStore from './store/AppStore';
import logo from './logo.svg';
import './App.css';
import {observer} from 'mobx-react';
import ChatWindow from "./ChatWindow";
import CustomerInfo from './CustomerInfo'

@observer
class App extends Component {

    constructor(props) {
        super(props);
        this.store = this.props.store;
        this.messages = this.store.messages;
    }

    render() {
        return (
            <div className="App">
                <div className="container" style={{width:'100%'}}>
                    <ChatWindow store={this.props.store} user="Dieu"/>
                    <ChatWindow store={this.props.store} user="Huy"/>
                    <CustomerInfo store={this.props.store} />
                </div>
            </div>
        );
    }
}

export default App;
