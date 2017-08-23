import React, {Component} from 'react';
import './style.css';
import {observer, inject} from 'mobx-react';
import Header from './components/Header';
import MainChatScreen from './components/MainChatScreen'

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
                <div className="container">
                    <MainChatScreen />
                </div>
            </div>
        );
    }
}

export default App;
