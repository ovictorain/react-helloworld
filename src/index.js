import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LoginControl from './LoginControl';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  // Try changing to isLoggedIn={true}:
  <LoginControl />, document.getElementById('root'));
registerServiceWorker();
