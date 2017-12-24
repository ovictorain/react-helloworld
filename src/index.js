import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LoginControl from './LoginControl';
import registerServiceWorker from './registerServiceWorker';

const messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(
  <LoginControl />, document.getElementById('root'));
registerServiceWorker();
