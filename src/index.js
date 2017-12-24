import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AndOperator from './AndOperator';
import registerServiceWorker from './registerServiceWorker';

const messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(
  <AndOperator unreadMessages={messages} />, document.getElementById('root'));
registerServiceWorker();
