import {observable} from 'mobx'
import axios from 'axios';

var Strophe = window.Strophe;

class AppStore {
    @observable messages = [] ;
    @observable message = '';
    @observable customer = {};
    url = 'https://conversejs.org/http-bind/';


    constructor() {
        this.webSocket = new WebSocket('wss://echo.websocket.org/');
        this.webSocket.onmessage = e => this.receiveMessage(e);
        this.connection = new Strophe.Connection(this.url);
        this.connection.connect('huyhda@blah.im', '123', this.onConnect.bind(this));
        this.connection.rawOutput = data => console.log('Received: ' + data);
        this.connection.rawInput = data => console.log('Sent: ' + data);
        console.log('Initializing connection...');
    }

    onConnect(status)
    {
        if (status == window.Strophe.Status.CONNECTING) {
            console.log('Strophe is connecting.');
        } else if (status == window.Strophe.Status.CONNFAIL) {
            console.log('Strophe failed to connect.');
            // $('#connect').get(0).value = 'connect';

        } else if (status == window.Strophe.Status.DISCONNECTING) {
            console.log('Strophe is disconnecting.');
        } else if (status == window.Strophe.Status.DISCONNECTED) {
            console.log('Strophe is disconnected.');
            // $('#connect').get(0).value = 'connect';
        } else if (status == window.Strophe.Status.CONNECTED) {
            console.log('Strophe is connected.');
            var elementShow = window.Strophe.xmlElement('show', {}, 'chat');
            var elementStatus = window.Strophe.xmlElement('status', {}, 'Hello, I\'m from ReactJS');
            var presence = window.$pres({from: 'huyhda@blah.im', xmlns: 'jabber:client', 'xmlns:stream': 'http://etherx.jabber.org/streams', version: '1.0'})
                .cnode(elementShow).up()
                .cnode(elementStatus);
            this.connection.send(presence.tree());
            this.connection.addHandler(this.onMessage.bind(this), null, 'message', null, null,  null);
        }
    }

    onMessage(msg) {
        var to = msg.getAttribute('to');
        var from = msg.getAttribute('from');
        var type = msg.getAttribute('type');
        var elems = msg.getElementsByTagName('body');

        if (type == "chat" && elems.length > 0) {
            var body = elems[0];
            var text  = Strophe.getText(body);
            console.log(text);
            this.addMessage({text: text, from: 'they', for: 'Huy'});
        }

        // we must return true to keep the handler alive.
        // returning false would remove it after it finishes.
        return true;
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
        var result = await axios.get(`http://foobar123.getsandbox.com/user/${id}`);
        this.customer = result.data;
        console.log(result);
    }

    loadCustomer(id) {
        var self = this;
        axios.get(`http://foobar123.getsandbox.com/user/${id}`).then(customer => {
            self.customer = customer.data;
        });
    }
}

var appStore = new AppStore();


export default appStore;