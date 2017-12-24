import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Greeting from './Greeting';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  // Try changing to isLoggedIn={true}:
  <Greeting isLoggedIn={false} />, document.getElementById('root'));
registerServiceWorker();
