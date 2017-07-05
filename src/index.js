import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import appStore from './store/AppStore';

ReactDOM.render(<App store={appStore} />, document.getElementById('root'));
registerServiceWorker();
