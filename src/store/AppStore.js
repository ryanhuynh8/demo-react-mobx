import {observable} from 'mobx'
import axios from 'axios';

class AppStore {
    @observable messages = [] ;
    @observable message = '';
    @observable customer = {};

    constructor() {
        this.webSocket = new WebSocket('wss://echo.websocket.org/');
        this.webSocket.onmessage = e => this.receiveMessage(e);
        console.log('Initializing connection...');
    }

    addMessage(messageInfo) {
        var message = {};
        if (messageInfo.text !== undefined && messageInfo.text !== null)
            message = { text: messageInfo.text, from: messageInfo.from, for: messageInfo.for };
        else {
            message = { text: this.message, from: messageInfo.from, for: messageInfo.for };
            this.webSocket.send(this.message);
        }

        this.messages.push(message);

    }

    receiveMessage(e) {
        if (e.data.indexOf('Dieu') !== -1)
            this.addMessage({text: 'Hello ' + e.data,  from: 'they', for: 'Dieu'});
        else if (e.data.indexOf('Huy') !== -1)
            this.addMessage({text: 'Hello ' + e.data,  from: 'they', for: 'Huy'});
    }

    updateMessage(text) {
        this.message = text;
    }

    async loadCustomer(id) {
        var self = this;
        var result = await axios.get(`http://foobar123.getsandbox.com/user/${id}`)
        this.customer = result.data;
        console.log(result);
    }

    // async loadCustomer(id) {
    //     var self = this;
    //     axios.get(`http://foobar123.getsandbox.com/user/${id}`).then(customer => {
    //         self.customer = customer.data;
    //     });
    // }
}

var appStore = new AppStore();


export default appStore;