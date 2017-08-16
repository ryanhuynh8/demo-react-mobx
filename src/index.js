import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {Provider} from 'mobx-react'
import appStore from './store/AppStore';

ReactDOM.render(<Provider store={appStore}>
                    <App/>
                </Provider>,
    document.getElementById('root'));
registerServiceWorker();
