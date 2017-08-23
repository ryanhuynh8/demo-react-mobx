import React, {Component} from 'react';
// import './App.css';
import './style.css';
import {observer, inject} from 'mobx-react';
import ChatWindow from "./ChatWindow";
import CustomerInfo from './CustomerInfo'
import Header from './components/Header';

@inject('store') @observer
class App extends Component {

    constructor(props) {
        super(props);
        this.store = this.props.store;
        this.messages = this.store.messages;
    }

    render() {
        return (
            <div className="App">
                <Header/>
            </div>
        );
    }
}

export default App;
