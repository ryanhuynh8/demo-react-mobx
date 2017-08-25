import {observable, action} from 'mobx'
import axios from 'axios';
var Strophe = window.Strophe;

const cases = [
    {
        caseId: 80111,
        source: '123CS',
        status: 'pending',
        date: 'April 30, 11:25 am (10 days ago)',
        title: 'Lỗi thanh toán thẻ ATM',
        content: 'Chào anh Huy bên em đã xử lý xong yêu cầu anh vui lòng kiểm tra xem vấn đề đã giải quyết xong chưa anh oi.'
    },
    {
        caseId: 80222,
        source: 'ZaloPay',
        status: 'processing',
        date: 'May 4, 9:15 am (6 days ago)',
        title: 'Không thể đăng nhập bằng ZaloID',
        content: 'Nhờ mọi người xử lý giùm vụ này sớm để còn đi chơi.'
    },
    {
        caseId: 80333,
        source: 'ZaloPay',
        status: 'done',
        date: 'May 4, 9:15 am (6 days ago)',
        title: null,
        content: null
    }
];

const messages = [
    {
        name: 'Đức Duy',
        text: 'Bên em đã nhận yêu cầu, hẹn anh ngày mai giải quyết nhé.',
        timestamp: '10:29 AM',
        requestId: '12985',
        direction: 'right'
    },
    {
        name: 'Huỳnh Đức Anh Huy',
        text: 'Làm ăn lâu lắc quá mai tui lên đốt cái VNG à.',
        timestamp: '10:29 AM',
        requestId: '12985',
        direction: 'left'
    },
    {
        name: 'Đức Duy',
        text: 'Sir yes sir!',
        timestamp: '10:29 AM',
        requestId: '12985',
        direction: 'right'
    },
    {
        name: 'Đức Duy',
        text: 'Sir yes sir!',
        timestamp: '10:29 AM',
        requestId: '12985',
        direction: 'right'
    },
    {
        name: 'Huỳnh Đức Anh Huy',
        text: 'Hihihehe',
        timestamp: '10:29 AM',
        requestId: '12985',
        direction: 'left'
    }
];

const agents = [
    {
        name: 'Huỳnh Đức Anh Huy'
    }
];
class AppStore {
    @observable messages = [] ;
    @observable message = '';
    @observable customer = {};
    @observable showSuggestList = false;
    @observable currentAgentList = [];
    @observable activeTab = 'info';

    url = 'https://conversejs.org/http-bind/';

    senderId = null;

    constructor() {
        this.webSocket = new WebSocket('wss://echo.websocket.org/');
        this.webSocket.onmessage = e => this.receiveMessage(e);
        // this.connection = new Strophe.Connection(this.url, { keepalive: true });
        // this.connection.connect('huyhda@jabber.hot-chilli.net', '123456', this.onConnect.bind(this));
        // this.connection.rawOutput = data => console.log('Received: ' + data);
        // this.connection.rawInput = data => console.log('Sent: ' + data);
        console.log('Initializing connection...');
        this.cases = cases;
        this.messages = messages;
        this.currentAgentList = agents;
    }

    onConnect(status)
    {
        if (status === window.Strophe.Status.CONNECTING) {
            console.log('Strophe is connecting.');
        } else if (status === window.Strophe.Status.CONNFAIL) {
            console.log('Strophe failed to connect.');
            // $('#connect').get(0).value = 'connect';

        } else if (status === window.Strophe.Status.DISCONNECTING) {
            console.log('Strophe is disconnecting.');
        } else if (status === window.Strophe.Status.DISCONNECTED) {
            console.log('Strophe is disconnected.');
            // $('#connect').get(0).value = 'connect';
        } else if (status === window.Strophe.Status.CONNECTED) {
            console.log('Strophe is connected.');
            var elementShow = window.Strophe.xmlElement('show', {}, 'chat');
            var elementStatus = window.Strophe.xmlElement('status', {}, 'Hello, I\'m from ReactJS');
            var presence = window.$pres({from: 'huyhda@jabber.hot-chilli.net', xmlns: 'jabber:client', 'xmlns:stream': 'http://etherx.jabber.org/streams', version: '1.0'})
                .cnode(elementShow).up()
                .cnode(elementStatus);
            // this.connection.send(presence.tree());
            // this.connection.addHandler(this.onMessage.bind(this), null, 'message', null, null,  null);
        }
    }

    onMessage(msg) {
        // var to = msg.getAttribute('to');
        // var from = msg.getAttribute('from');
        var type = msg.getAttribute('type');
        var elems = msg.getElementsByTagName('body');

        if (type === "chat" && elems.length > 0) {
            var body = elems[0];
            var data  = JSON.parse(body.childNodes[0].nodeValue);
            var text = data.msg;
            this.senderId = data.sender_id;
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
            var msg = window.$msg({to: 'huyhuynh@jabber.hot-chilli.net', from: 'huyhda@jabber.hot-chilli.net', type: 'chat'})
                .c('body', null, JSON.stringify({ msg: this.message, to: this.senderId}));
            this.connection.send(msg.tree());
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

    // async loadCustomer(id) {
    //     var result = await axios.get(`https://foobar123.getsandbox.com/user/${id}`);
    //     this.customer = result.data;
    //     console.log(result);
    // }

    loadCustomer(id) {
        var self = this;
        axios.get(`https://foobar123.getsandbox.com/user/${id}`).then(customer => {
            self.customer = customer.data;
        });
    }

    @action addAgentToList(name) {
        this.currentAgentList.push({name: name});
    }

    @action removeAgent(agent) {
        this.currentAgentList = this.currentAgentList.filter(item => item.name !== agent.name);
    }

    @action setActiveTab(tab) {
        this.activeTab = tab;
    }
}

var appStore = new AppStore();


export default appStore;