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
    @observable cases = [];
    @observable message = '';
    @observable customer = {};
    @observable showSuggestList = false;
    @observable currentAgentList = [];
    @observable activeTab = 'case';

    url = 'https://conversejs.org/http-bind/';

    senderId = null;

    constructor() {
        this.cases = cases;
        this.messages = messages;
        this.currentAgentList = agents;
    }


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